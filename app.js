/* =========================================================
   EchtPrüfung 2027 — app.js
   ترجمة أوتوماتيكية من Google + جميع الدروس ظاهرة
   ========================================================= */

const { useState, useEffect, useRef, useMemo } = React;

const LANG_MAP = { ma: 'ar' };
const getLang = (l) => LANG_MAP[l] || l || 'ar';

// ================== Google Translate Cache ==================
const gCache = {};
const fetching = new Set();

function GT({ text, lang }) {
  const tl = getLang(lang);
  const [out, setOut] = useState(() => {
    if (!text || tl === 'de') return text;
    return gCache[`${tl}_${text}`] || null;
  });

  useEffect(() => {
    if (!text || tl === 'de') { setOut(text); return; }
    const key = `${tl}_${text}`;
    if (gCache[key]) { setOut(gCache[key]); return; }
    if (fetching.has(key)) return;
    fetching.add(key);
    const ctrl = new AbortController();
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`, { signal: ctrl.signal })
      .then(r => r.json())
      .then(d => {
        if (d && d[0]) {
          const r = d[0].map(x => x[0] || '').join('');
          gCache[key] = r;
          setOut(r);
        }
      })
      .catch(() => {})
      .finally(() => { fetching.delete(key); });
    return () => ctrl.abort();
  }, [text, tl]);

  if (tl === 'de') return text;
  return out !== null ? out : text;
}

// SText: يعرض الترجمة اليدوية، وإلا Google
function ST({ obj, lang, field }) {
  if (!obj) return '';
  if (typeof obj === 'string') return <GT text={obj} lang={lang} />;
  const l = getLang(lang);
  if (obj[l] && obj[l] !== obj.de) return obj[l];
  if (l === 'ma' && obj.ar) return obj.ar;
  const base = field ? (obj[field] || obj.de || obj.en) : (obj.de || obj.en || '');
  if (!base) return '';
  return <GT text={base} lang={lang} />;
}

// QT: يعرض نص السؤال
function QT({ item, lang }) {
  if (!item) return '';
  const l = getLang(lang);
  const km = { ar: 'qar', ma: 'qma', en: 'qen', de: 'q' };
  if (item[km[l]]) return item[km[l]];
  const base = item.q || item.de || '';
  if (!base) return '';
  return <GT text={base} lang={lang} />;
}

// TT: يعرض عنوان مع ترجمة "معدل"
function TT({ title, lang }) {
  if (!title) return '';
  const mod = tx('mod', lang);
  const c = String(title)
    .replace(/\((\d+)\s*المعدل\)/g, `($1 \u00A7)`)
    .replace(/\(المعدل\)/g, `(\u00A7)`)
    .replace(/(\d+)\s*المعدل/g, `$1 \u00A7`)
    .replace(/المعدل/g, '\u00A7');
  const parts = c.split('\u00A7');
  return (
    <>
      {parts.map((p, i) => (
        <React.Fragment key={i}>
          <GT text={p} lang={lang} />
          {i < parts.length - 1 && <span> {mod} </span>}
        </React.Fragment>
      ))}
    </>
  );
}

// ================== ترجمات UI ==================
const EXTRA = {
  ma: { lesen:"قراية", horen:"سماع", schreiben:"كتابة", sprechen:"هضرة", check:"تصحيح", back:"رجوع", reset:"إعادة", close:"إغلاق", show_tr:"إظهار الترجمة", hide_tr:"إخفاء الترجمة", play:"تشغيل", pause:"إيقاف", no_q:"ما كاينش أسئلة", no_audio:"ما كاينش صوت", memo:"قصة للحفظ", choose:"اختر النسخة", versions:"نسخ", empty:"ما كاين حتى شي درس", search:"قلب على درس...", result:"النتيجة", mod:"معدل", audio_none:"🔇 ما كاينش صوت", points:"المطلوب:", options:"الاختيارات:", word_bank:"بنك الكلمات:", pick_word:"اختر الكلمة", correct:"✓ صحيح", wrong:"✗ الجواب:", required:"المطلوب:", coming_soon:"🚧 قريباً", choose_lang:"ختار اللغة", all_lessons:"جميع الدروس", lessons:"درس" },
  ar: { lesen:"قراءة", horen:"استماع", schreiben:"كتابة", sprechen:"تحدث", check:"تصحيح", back:"رجوع", reset:"إعادة", close:"إغلاق", show_tr:"إظهار الترجمة", hide_tr:"إخفاء الترجمة", play:"تشغيل", pause:"إيقاف", no_q:"لا توجد أسئلة", no_audio:"لا يوجد صوت", memo:"قصة للحفظ", choose:"اختر النسخة", versions:"نسخ", empty:"لا توجد دروس", search:"قلب على درس...", result:"النتيجة", mod:"معدل", audio_none:"🔇 لا يوجد صوت", points:"المطلوب:", options:"الخيارات:", word_bank:"بنك الكلمات:", pick_word:"اختر الكلمة", correct:"✓ صحيح", wrong:"✗ الجواب:", required:"المطلوب:", coming_soon:"🚧 قريباً", choose_lang:"اختر اللغة", all_lessons:"جميع الدروس", lessons:"درس" },
  en: { lesen:"Reading", horen:"Listening", schreiben:"Writing", sprechen:"Speaking", check:"Check", back:"Back", reset:"Reset", close:"Close", show_tr:"Show translation", hide_tr:"Hide translation", play:"Play", pause:"Pause", no_q:"No questions", no_audio:"No audio", memo:"Story memo", choose:"Choose version", versions:"versions", empty:"No lessons", search:"Search...", result:"Result", mod:"Modified", audio_none:"🔇 No audio", points:"Required:", options:"Options:", word_bank:"Word bank:", pick_word:"Pick a word", correct:"✓ Correct", wrong:"✗ Answer:", required:"Required:", coming_soon:"🚧 Coming soon", choose_lang:"Choose language", all_lessons:"All lessons", lessons:"lessons" },
  de: { lesen:"Lesen", horen:"Hören", schreiben:"Schreiben", sprechen:"Sprechen", check:"Prüfen", back:"Zurück", reset:"Erneut", close:"Schließen", show_tr:"Übersetzung anzeigen", hide_tr:"Übersetzung verbergen", play:"Abspielen", pause:"Pause", no_q:"Keine Fragen", no_audio:"Kein Audio", memo:"Geschichte", choose:"Version wählen", versions:"Versionen", empty:"Keine Lektionen", search:"Suchen...", result:"Ergebnis", mod:"Modifiziert", audio_none:"🔇 Kein Audio", points:"Punkte:", options:"Optionen:", word_bank:"Wortbank:", pick_word:"Wort wählen", correct:"✓ Richtig", wrong:"✗ Antwort:", required:"Erforderlich:", coming_soon:"🚧 Demnächst", choose_lang:"Sprache wählen", all_lessons:"Alle Lektionen", lessons:"Lektionen" },
  fr: { lesen:"Lecture", horen:"Écoute", schreiben:"Écriture", sprechen:"Parler", check:"Vérifier", back:"Retour", reset:"Réinitialiser", close:"Fermer", show_tr:"Afficher traduction", hide_tr:"Cacher traduction", play:"Jouer", pause:"Pause", no_q:"Pas de questions", no_audio:"Pas d'audio", memo:"Mémo", choose:"Choisir version", versions:"versions", empty:"Aucune leçon", search:"Rechercher...", result:"Résultat", mod:"Modifié", audio_none:"🔇 Pas d'audio", points:"Points:", options:"Options :", word_bank:"Banque de mots :", pick_word:"Choisir mot", correct:"✓ Correct", wrong:"✗ Réponse :", required:"Requis :", coming_soon:"🚧 Bientôt", choose_lang:"Choisir langue", all_lessons:"Toutes les leçons", lessons:"leçons" },
  hi: { lesen:"पढ़ना", horen:"सुनना", schreiben:"लिखना", sprechen:"बोलना", check:"जाँचें", back:"वापस", reset:"रीसेट", close:"बंद", show_tr:"अनुवाद दिखाएं", hide_tr:"अनुवाद छिपाएं", play:"चलाएं", pause:"रोकें", no_q:"कोई प्रश्न नहीं", no_audio:"ऑडियो नहीं", memo:"कहानी", choose:"संस्करण चुनें", versions:"संस्करण", empty:"कोई पाठ नहीं", search:"खोजें...", result:"परिणाम", mod:"संशोधित", audio_none:"🔇 ऑडियो नहीं", points:"अंक:", options:"विकल्प:", word_bank:"शब्द बैंक:", pick_word:"शब्द चुनें", correct:"✓ सही", wrong:"✗ उत्तर:", required:"आवश्यक:", coming_soon:"🚧 जल्द", choose_lang:"भाषा चुनें", all_lessons:"सभी पाठ", lessons:"पाठ" },
  id: { lesen:"Membaca", horen:"Mendengar", schreiben:"Menulis", sprechen:"Berbicara", check:"Periksa", back:"Kembali", reset:"Ulang", close:"Tutup", show_tr:"Tampilkan terjemahan", hide_tr:"Sembunyikan", play:"Putar", pause:"Jeda", no_q:"Tidak ada pertanyaan", no_audio:"Tidak ada audio", memo:"Memo cerita", choose:"Pilih versi", versions:"versi", empty:"Tidak ada pelajaran", search:"Cari...", result:"Hasil", mod:"Dimodifikasi", audio_none:"🔇 Tidak ada audio", points:"Poin:", options:"Opsi:", word_bank:"Bank kata:", pick_word:"Pilih kata", correct:"✓ Benar", wrong:"✗ Jawaban:", required:"Diperlukan:", coming_soon:"🚧 Segera", choose_lang:"Pilih bahasa", all_lessons:"Semua pelajaran", lessons:"pelajaran" },
  tl: { lesen:"Pagbasa", horen:"Pakikinig", schreiben:"Pagsulat", sprechen:"Pagsasalita", check:"Suriin", back:"Bumalik", reset:"I-reset", close:"Isara", show_tr:"Ipakita salin", hide_tr:"Itago salin", play:"I-play", pause:"I-pause", no_q:"Walang tanong", no_audio:"Walang audio", memo:"Kuwento", choose:"Pumili ng bersyon", versions:"mga bersyon", empty:"Walang aralin", search:"Maghanap...", result:"Resulta", mod:"Binago", audio_none:"🔇 Walang audio", points:"Puntos:", options:"Mga pagpipilian:", word_bank:"Bangko ng salita:", pick_word:"Pumili ng salita", correct:"✓ Tama", wrong:"✗ Sagot:", required:"Kailangan:", coming_soon:"🚧 Malapit na", choose_lang:"Pumili ng wika", all_lessons:"Lahat ng aralin", lessons:"aralin" },
  fa: { lesen:"خواندن", horen:"شنیدن", schreiben:"نوشتن", sprechen:"صحبت", check:"بررسی", back:"بازگشت", reset:"بازنشانی", close:"بستن", show_tr:"نمایش ترجمه", hide_tr:"مخفی ترجمه", play:"پخش", pause:"توقف", no_q:"سوالی نیست", no_audio:"بدون صدا", memo:"داستان", choose:"انتخاب نسخه", versions:"نسخه‌ها", empty:"درسی نیست", search:"جستجو...", result:"نتیجه", mod:"اصلاح شده", audio_none:"🔇 بدون صدا", points:"امتیاز:", options:"گزینه‌ها:", word_bank:"بانک کلمات:", pick_word:"کلمه را انتخاب کنید", correct:"✓ صحیح", wrong:"✗ پاسخ:", required:"الزامی:", coming_soon:"🚧 به زودی", choose_lang:"زبان را انتخاب کنید", all_lessons:"همه درس‌ها", lessons:"درس" },
  sw: { lesen:"Kusoma", horen:"Kusikiliza", schreiben:"Kuandika", sprechen:"Kuzungumza", check:"Angalia", back:"Rudi", reset:"Weka upya", close:"Funga", show_tr:"Onyesha tafsiri", hide_tr:"Ficha tafsiri", play:"Cheza", pause:"Sitisha", no_q:"Hakuna maswali", no_audio:"Hakuna sauti", memo:"Hadithi", choose:"Chagua toleo", versions:"matoleo", empty:"Hakuna masomo", search:"Tafuta...", result:"Matokeo", mod:"Iliyorekebishwa", audio_none:"🔇 Hakuna sauti", points:"Pointi:", options:"Chaguo:", word_bank:"Benki ya maneno:", pick_word:"Chagua neno", correct:"✓ Sahihi", wrong:"✗ Jibu:", required:"Inahitajika:", coming_soon:"🚧 Hivi karibuni", choose_lang:"Chagua lugha", all_lessons:"Masomo yote", lessons:"masomo" },
  uz: { lesen:"O'qish", horen:"Tinglash", schreiben:"Yozish", sprechen:"Gapirish", check:"Tekshirish", back:"Orqaga", reset:"Tiklash", close:"Yopish", show_tr:"Tarjima ko'rsatish", hide_tr:"Tarjima yashirish", play:"Ijro etish", pause:"Pauza", no_q:"Savollar yo'q", no_audio:"Ovoz yo'q", memo:"Hikoya", choose:"Versiya tanlash", versions:"versiyalar", empty:"Darslar yo'q", search:"Qidirish...", result:"Natija", mod:"O'zgartirilgan", audio_none:"🔇 Ovoz yo'q", points:"Ballar:", options:"Variantlar:", word_bank:"So'z banki:", pick_word:"So'z tanlash", correct:"✓ To'g'ri", wrong:"✗ Javob:", required:"Talab:", coming_soon:"🚧 Tez orada", choose_lang:"Tilni tanlash", all_lessons:"Barcha darslar", lessons:"darslar" },
  ne: { lesen:"पढ्नुहोस्", horen:"सुन्नुहोस्", schreiben:"लेख्नुहोस्", sprechen:"बोल्नुहोस्", check:"जाँच्नुहोस्", back:"फर्कनुहोस्", reset:"रिसेट", close:"बन्द", show_tr:"अनुवाद देखाउनुहोस्", hide_tr:"लुकाउनुहोस्", play:"चलाउनुहोस्", pause:"रोक्नुहोस्", no_q:"प्रश्नहरू छैनन्", no_audio:"अडियो छैन", memo:"कथा", choose:"संस्करण छान्नुहोस्", versions:"संस्करणहरू", empty:"पाठहरू छैनन्", search:"खोज्नुहोस्...", result:"नतिजा", mod:"परिमार्जित", audio_none:"🔇 अडियो छैन", points:"अंकहरू:", options:"विकल्पहरू:", word_bank:"शब्द बैंक:", pick_word:"शब्द छान्नुहोस्", correct:"✓ सही", wrong:"✗ उत्तर:", required:"आवश्यक:", coming_soon:"🚧 चाँडै", choose_lang:"भाषा छान्नुहोस्", all_lessons:"सबै पाठहरू", lessons:"पाठहरू" }
};

const tx = (key, lang) => {
  const l = lang || 'ar';
  if (EXTRA[l] && EXTRA[l][key]) return EXTRA[l][key];
  if (window.UI_TEXTS && window.UI_TEXTS[l] && window.UI_TEXTS[l][key]) return window.UI_TEXTS[l][key];
  if (EXTRA['ar'] && EXTRA['ar'][key]) return EXTRA['ar'][key];
  if (window.UI_TEXTS && window.UI_TEXTS['ar'] && window.UI_TEXTS['ar'][key]) return window.UI_TEXTS['ar'][key];
  if (EXTRA.en && EXTRA.en[key]) return EXTRA.en[key];
  if (window.UI_TEXTS && window.UI_TEXTS.en && window.UI_TEXTS.en[key]) return window.UI_TEXTS.en[key];
  return key;
};

const norm = (s) => (s == null ? '' : String(s)).toLowerCase()
  .replace(/(المعدل|معدل|تعديل)/g, '')
  .replace(/[^\w\u0600-\u06FF]+/g, '').trim();

// ================== ICONS ==================
const Icon = ({ d, color='currentColor', size=22, fill='none' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>
);
const Icons = {
  Back: (p) => <Icon d="M15 18l-6-6 6-6" {...p}/>,
  Play: (p) => <svg width="24" height="24" viewBox="0 0 24 24" fill={p.color||'currentColor'}><path d="M8 5v14l11-7z"/></svg>,
  Pause: (p) => <svg width="24" height="24" viewBox="0 0 24 24" fill={p.color||'currentColor'}><rect x="6" y="6" width="12" height="12" rx="2"/></svg>,
  Translate: (p) => <Icon d="M4 5h12M9 3v2c0 4.418-2.686 8-6 8m0-8h12m-6 0v2c0 4.418 2.686 8 6 8m-4-2l-4 8m2-4h4m-2 0l2 4" {...p}/>,
  Moon: (p) => <Icon d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" {...p}/>,
  Sun: (p) => <Icon d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 6a6 6 0 100 12 6 6 0 000-12z" {...p}/>,
  Eye: (p) => <Icon d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zm11 3a3 3 0 100-6 3 3 0 000 6z" {...p}/>,
  Alert: (p) => <Icon d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" {...p}/>,
  Book: (p) => <Icon d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" {...p}/>,
  Headphones: (p) => <Icon d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" {...p}/>,
  Edit: (p) => <Icon d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z" {...p}/>,
  Mic: (p) => <Icon d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v3" {...p}/>
};

const Logo = ({ size=40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <rect width="100" height="100" rx="24" fill="#0F172A"/>
    <rect x="18" y="28" width="36" height="10" rx="4" fill="#0D9488"/>
    <rect x="18" y="44" width="36" height="10" rx="4" fill="#BE123C"/>
    <rect x="18" y="60" width="36" height="10" rx="4" fill="#14B8A6"/>
    <path d="M 54 70 L 54 30 L 70 30 C 84 30, 84 52, 70 52 L 54 52" stroke="#14B8A6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// ================== DATA ==================
const getDataFor = (level, tab) => {
  const isB2 = level === 'B2';
  if (tab === 'Lesen') return isB2 ? (window.B2_EXAMS || []) : (window.EXAMS || []);
  if (tab === 'Hören') return isB2 ? (window.B2_HOREN_EXAMS || []) : (window.HOREN_EXAMS || []);
  if (tab === 'Schreiben') return isB2 ? (window.B2_SCHREIBEN_DATA || []) : (window.SCHREIBEN_DATA || []);
  if (tab === 'Sprechen') return isB2 ? (window.B2_SPRECHEN_DATA || []) : (window.B1_SPRECHEN_DATA || []);
  return [];
};

const buildGroups = (level, tab, search='') => {
  const data = getDataFor(level, tab);
  const groups = {};
  data.forEach((exam, idx) => {
    if (!exam) return;
    const rawTitle = exam.title || exam.id || `درس ${idx + 1}`;
    const key = norm(rawTitle) || `__empty_${idx}`;
    if (!groups[key]) {
      const baseTitle = String(rawTitle)
        .replace(/\s*\(?\d*\s*المعدل\)?/g, '')
        .replace(/\s*المعدل/g, '').trim();
      groups[key] = { title: baseTitle || rawTitle || `درس ${idx + 1}`, versions: [], key };
    }
    groups[key].versions.push(exam);
  });
  let entries = Object.values(groups);
  if (search.trim()) {
    const q = search.trim().toLowerCase();
    entries = entries.filter(e => e.title.toLowerCase().includes(q));
  }
  return entries.sort((a,b) => a.title.localeCompare(b.title, 'de'));
};

// ================== EXAM VIEW ==================
function ExamView({ exam, lang, onBack, dark, setDark }) {
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(false);
  const [showTranslation, setShowTranslation] = useState(lang === 'ar' || lang === 'ma');
  const [activeGap, setActiveGap] = useState(null);
  const [modalGap, setModalGap] = useState(null);
  const [showStory, setShowStory] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioTime, setAudioTime] = useState(0);
  const timerRef = useRef(null);

  const isB2 = exam.level === 'B2';
  const themeColor = isB2 ? '#0D9488' : '#8B5CF6';
  const items = exam.items || [];
  const type = exam.type || (!items.length && exam.text ? 'schreiben' : 'mcq');
  const canTranslate = getLang(lang) !== 'de';

  useEffect(() => () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const pts = type === 'matching' ? 2.5 : (type.includes('sprach') ? 1.5 : 5);
  const total = items.length * pts;
  const score = items.filter(it => ans[it.n] === it.c).length * pts;

  const pick = (n, k) => {
    if (done) return;
    setAns(prev => {
      const next = { ...prev };
      if (next[n] === k) delete next[n]; else next[n] = k;
      return next;
    });
  };

  const pickSprach2 = (word) => {
    if (done) return;
    let target = activeGap;
    if (target === null) {
      const firstEmpty = items.find(x => ans[x.n] === undefined);
      target = firstEmpty ? firstEmpty.n : null;
    }
    if (target === null) return;
    setAns(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(k => { if (Number(k) !== target && next[k] === word) delete next[k]; });
      next[target] = word;
      return next;
    });
    const nextGap = items.find(x => x.n !== target && ans[x.n] === undefined);
    setActiveGap(nextGap ? nextGap.n : null);
  };

  const finish = () => { setDone(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const reset = () => { setAns({}); setDone(false); setActiveGap(null); setModalGap(null); setShowStory(false); };

  const toggleAudio = () => {
    if (!exam.audio || !exam.audio.length) return;
    if (isPlaying) {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      if (timerRef.current) clearInterval(timerRef.current);
      setIsPlaying(false); return;
    }
    const valid = exam.audio.filter(s => s.text && s.text !== 'Audio nicht verfügbar');
    if (!valid.length) return;
    setIsPlaying(true); setAudioTime(0);
    timerRef.current = setInterval(() => setAudioTime(t => t + 1), 1000);
    let idx = 0;
    const playNext = () => {
      if (idx >= valid.length) { setIsPlaying(false); if (timerRef.current) clearInterval(timerRef.current); return; }
      const seg = valid[idx];
      const u = new SpeechSynthesisUtterance(seg.text);
      u.lang = 'de-DE'; u.rate = seg.rate || 0.92; u.pitch = seg.pitch || 1.0;
      const voice = window.speechSynthesis.getVoices().find(v => v.lang.startsWith('de'));
      if (voice) u.voice = voice;
      u.onend = () => { idx++; setTimeout(playNext, 250); };
      u.onerror = () => { setIsPlaying(false); if (timerRef.current) clearInterval(timerRef.current); };
      window.speechSynthesis.speak(u);
    };
    playNext();
  };

  const renderSprachText = () => {
    const text = exam.text || '';
    const regex = /\.{3,}\s*\((\d+)\)\s*\.{3,}|_{2,}\s*\((\d+)\)\s*_{2,}|\.{5}\s*\((\d+)\)\s*\.{5}/g;
    const parts = [];
    let lastIndex = 0, match, keyCounter = 0;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(<span key={'t_' + (keyCounter++)} className="de" style={{ whiteSpace: 'pre-wrap' }}>{text.slice(lastIndex, match.index)}</span>);
      }
      const gapNum = parseInt(match[1] || match[2] || match[3]);
      const item = items.find(x => x.n === gapNum);
      const sel = ans[gapNum];
      if (!item) {
        parts.push(<span key={'g_' + (keyCounter++)} style={{ background: 'var(--line)', padding: '2px 8px', borderRadius: 4, margin: '0 4px' }}>[{gapNum}]</span>);
      } else if (done) {
        const isC = sel === item.c;
        parts.push(
          <span key={'g_' + (keyCounter++)} style={{ display: 'inline-flex', gap: 4, margin: '0 4px', alignItems: 'center' }}>
            {sel && <span className={isC ? 'sp1-correct' : 'sp1-wrong'}>{sel}</span>}
            {!isC && <span className="sp1-correct">{item.c}</span>}
          </span>
        );
      } else {
        parts.push(
          <button key={'g_' + (keyCounter++)} className="inline-gap" onClick={() => {
            if (type === 'sprach2') setActiveGap(gapNum); else setModalGap(gapNum);
          }} style={{ borderColor: themeColor, color: sel ? '#FFF' : themeColor, background: sel ? themeColor : undefined, borderBottomWidth: 2, borderBottomStyle: sel ? 'solid' : 'dashed', padding: '2px 10px', borderRadius: 6, margin: '0 4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9em' }}>
            {sel || `(${gapNum})`}
          </button>
        );
      }
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(<span key={'t_' + (keyCounter++)} className="de" style={{ whiteSpace: 'pre-wrap' }}>{text.slice(lastIndex)}</span>);
    }
    return parts;
  };

  let body = null;

  if (type === 'horen') {
    const hasAudio = exam.audio && exam.audio.some(a => a.text && a.text !== 'Audio nicht verfügbar');
    body = (
      <div>
        <div className="card" style={{ padding: 20, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button onClick={toggleAudio} disabled={!hasAudio} style={{ width: 64, height: 64, borderRadius: '50%', border: 'none', background: !hasAudio ? 'var(--line)' : (isPlaying ? '#BE123C' : themeColor), color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: !hasAudio ? 'not-allowed' : 'pointer' }}>
              {!hasAudio ? <span style={{fontSize:24}}>🔇</span> : (isPlaying ? <Icons.Pause color="#FFF"/> : <Icons.Play color="#FFF"/>)}
            </button>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9em', fontWeight: 'bold', color: 'var(--muted)' }}>
                <span style={{ direction: 'ltr', fontFamily: 'monospace' }}>{String(Math.floor(audioTime/60)).padStart(2,'0')}:{String(audioTime%60).padStart(2,'0')}</span>
                <span>{hasAudio ? '🎧 Audio' : tx('no_audio', lang)}</span>
              </div>
              <div style={{ height: 8, background: 'var(--line)', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: isPlaying ? '100%' : '0%', background: themeColor, transition: isPlaying ? 'width 90s linear' : 'none' }}/>
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ display: 'flex', background: 'var(--paper)', borderBottom: '1px solid var(--line)', padding: '12px 0', fontWeight: 'bold', fontSize: '0.85em', color: 'var(--muted)' }}>
            <div style={{ width: 50, textAlign: 'center' }}>R</div>
            <div style={{ width: 50, textAlign: 'center' }}>F</div>
            <div style={{ flex: 1, paddingRight: 16 }}>AUSSAGE</div>
          </div>
          {items.map(it => {
            const isR = ans[it.n] === 'R', isF = ans[it.n] === 'F';
            const rC = done ? (it.c === 'R' ? 'rf-circle good' : isR ? 'rf-circle bad' : 'rf-circle faded') : (isR ? 'rf-circle sel' : 'rf-circle');
            const fC = done ? (it.c === 'F' ? 'rf-circle good' : isF ? 'rf-circle bad' : 'rf-circle faded') : (isF ? 'rf-circle sel' : 'rf-circle');
            const bg = done ? (ans[it.n] === it.c ? 'var(--okbg)' : 'var(--badbg)') : 'transparent';
            return (
              <div key={it.n} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--line)', padding: '12px 0', background: bg }}>
                <div style={{ width: 50, display: 'flex', justifyContent: 'center' }}><div className={rC} onClick={() => pick(it.n, 'R')}/></div>
                <div style={{ width: 50, display: 'flex', justifyContent: 'center' }}><div className={fC} onClick={() => pick(it.n, 'F')}/></div>
                <div style={{ flex: 1, paddingRight: 16 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: 4 }}>
                    <span style={{ opacity: 0.5, marginLeft: 6 }}>{it.n}</span>
                    <span>{it.de}</span>
                  </div>
                  {showTranslation && canTranslate && <div style={{ fontSize: '0.85em', color: 'var(--muted)', marginTop: 4 }}><ST obj={it} lang={lang} /></div>}
                </div>
              </div>
            );
          })}
        </div>
        {items[0]?.story && (
          <div style={{ marginBottom: 20 }}>
            <button onClick={() => setShowStory(!showStory)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderRadius: 12, background: `${themeColor}15`, color: themeColor, fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
              <Icons.Eye/> {tx('memo', lang)}
            </button>
            {showStory && <div className="t2-ar" style={{ marginTop: 12 }}>{items[0].story}</div>}
          </div>
        )}
      </div>
    );
  } else if (type === 'mcq') {
    body = (
      <div>
        {exam.paragraphs && exam.paragraphs.length > 0 && (
          <div className="card" style={{ padding: 20, marginBottom: 20 }}>
            {exam.paragraphs.map((p, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <p className="de" style={{ lineHeight: 1.8, fontSize: '1.05em', margin: 0 }}>{p.de}</p>
                {showTranslation && canTranslate && <div style={{ marginTop: 8, padding: 10, background: `${themeColor}10`, borderRight: `4px solid ${themeColor}`, borderRadius: 8, fontSize: '0.9em' }}><ST obj={p} lang={lang} /></div>}
              </div>
            ))}
          </div>
        )}
        {items.map(it => (
          <div key={it.n} className="card" style={{ padding: 16, marginBottom: 12 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 12 }}>{it.n}. <QT item={it} lang={lang} /></div>
            {it.opts?.map(opt => {
              const isSel = ans[it.n] === opt.k;
              const isC = done && opt.k === it.c;
              const isW = done && isSel && opt.k !== it.c;
              return (
                <button key={opt.k} onClick={() => pick(it.n, opt.k)} className={'opt'+(isSel?' sel':'')+(isC?' good':'')+(isW?' bad':'')+(done && !isC && !isSel?' faded':'')} style={{ marginBottom: 8, textAlign: 'left' }}>
                  <span className="letter">{opt.k}</span>
                  <span className="de" style={{ flex: 1 }}>{opt.de || opt}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    );
  } else if (type === 'headings') {
    body = (
      <div>
        <div className="card" style={{ padding: 16, marginBottom: 20 }}>
          <h3 style={{ margin: '0 0 12px', fontSize: '1em', color: themeColor }}>{tx('options', lang)}</h3>
          {exam.options?.map(o => (
            <div key={o.k} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px dashed var(--line)' }}>
              <span className="letter" style={{ minWidth: 32 }}>{o.k}</span>
              <span className="de" style={{ flex: 1, fontSize: '0.9em' }}>{o.de}</span>
            </div>
          ))}
        </div>
        {items.map(it => (
          <div key={it.n} className="card" style={{ padding: 16, marginBottom: 12 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{it.n}.</div>
            <p className="de" style={{ lineHeight: 1.7, fontSize: '0.95em', margin: '0 0 12px' }}>{it.de}</p>
            {showTranslation && canTranslate && <div style={{ marginBottom: 12, padding: 10, background: `${themeColor}10`, borderRight: `4px solid ${themeColor}`, borderRadius: 8, fontSize: '0.9em' }}><ST obj={it} lang={lang} /></div>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {exam.options?.map(o => {
                const used = !done && Object.entries(ans).some(([id,v]) => Number(id) !== it.n && v === o.k);
                const isSel = ans[it.n] === o.k;
                return (
                  <button key={o.k} onClick={() => !used && pick(it.n, o.k)} disabled={used} className={'opt'+(isSel?' sel':'')+(done && o.k === it.c?' good':'')+(done && isSel && o.k !== it.c?' bad':'')} style={{ padding: '8px 14px', width: 'auto', minWidth: 44, opacity: used ? 0.3 : 1 }}>
                    <span style={{ fontWeight: 'bold' }}>{o.k}</span>
                  </button>
                );
              })}
            </div>
            {done && <div style={{ marginTop: 10, fontSize: '0.85em', color: ans[it.n] === it.c ? 'var(--okc)' : 'var(--badc)', fontWeight: 'bold' }}>{ans[it.n] === it.c ? tx('correct', lang) : `${tx('wrong', lang)} ${it.c}`}</div>}
          </div>
        ))}
      </div>
    );
  } else if (type === 'matching') {
    body = (
      <div>
        {exam.ads?.map(ad => (
          <div key={ad.k} className="card" style={{ padding: 16, marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
              <span className="letter" style={{ minWidth: 32, background: themeColor, color: '#FFF' }}>{ad.k}</span>
              <div style={{ flex: 1 }}>
                <div className="de" style={{ fontWeight: 'bold', marginBottom: 4 }}>{ad.t}</div>
                <div className="de" style={{ fontSize: '0.88em', color: 'var(--muted)', whiteSpace: 'pre-wrap' }}>{ad.de}</div>
                {showTranslation && canTranslate && <div style={{ marginTop: 6, fontSize: '0.85em' }}><ST obj={ad} lang={lang} /></div>}
              </div>
            </div>
          </div>
        ))}
        <div style={{ height: 20 }}/>
        {items.map(it => (
          <div key={it.n} className="card" style={{ padding: 16, marginBottom: 12 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{it.n}. <ST obj={it} lang={lang} /></div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {exam.ads?.map(ad => {
                const used = !done && ad.k !== 'X' && Object.entries(ans).some(([id,v]) => Number(id) !== it.n && v === ad.k);
                const isSel = ans[it.n] === ad.k;
                return (
                  <button key={ad.k} onClick={() => !used && pick(it.n, ad.k)} disabled={used} className={'opt'+(isSel?' sel':'')+(done && ad.k === it.c?' good':'')+(done && isSel && ad.k !== it.c?' bad':'')} style={{ padding: '8px 14px', width: 'auto', minWidth: 44, opacity: used ? 0.3 : 1 }}>
                    <span style={{ fontWeight: 'bold' }}>{ad.k}</span>
                  </button>
                );
              })}
              <button onClick={() => pick(it.n, 'X')} className={'opt'+(ans[it.n] === 'X'?' sel':'')+(done && it.c === 'X'?' good':'')} style={{ padding: '8px 14px', width: 'auto', minWidth: 44 }}><span style={{ fontWeight: 'bold' }}>X</span></button>
            </div>
            {done && <div style={{ marginTop: 10, fontSize: '0.85em', color: ans[it.n] === it.c ? 'var(--okc)' : 'var(--badc)', fontWeight: 'bold' }}>{ans[it.n] === it.c ? tx('correct', lang) : `${tx('wrong', lang)} ${it.c}`}</div>}
          </div>
        ))}
      </div>
    );
  } else if (type === 'sprach1' || type === 'sprach2') {
    body = (
      <div>
        {type === 'sprach2' && exam.wordBank && (
          <div className="card" style={{ padding: 16, marginBottom: 16, position: 'sticky', top: 70, zIndex: 20 }}>
            <div style={{ fontSize: '0.85em', fontWeight: 'bold', marginBottom: 8, color: 'var(--muted)' }}>{tx('word_bank', lang)}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {exam.wordBank.map(w => {
                const used = Object.values(ans).includes(w.w);
                return (
                  <button key={w.k} onClick={() => pickSprach2(w.w)} disabled={used || done} style={{ padding: '8px 12px', borderRadius: 8, border: `1.5px solid ${used?'var(--line)':themeColor}`, background: used ? 'var(--line)' : 'var(--card)', color: used ? 'var(--muted)' : 'var(--text)', opacity: used ? 0.5 : 1, cursor: used ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '0.9em', textDecoration: used ? 'line-through' : 'none' }}>{w.w}</button>
                );
              })}
            </div>
          </div>
        )}
        {exam.note && <div style={{ padding: 12, borderRadius: 8, background: 'var(--badbg)', color: 'var(--badc)', marginBottom: 12, fontWeight: 'bold' }}>{exam.note}</div>}
        <div className="card" style={{ padding: 20, lineHeight: 2.4, fontSize: '1.05em' }}>{renderSprachText()}</div>
        {showTranslation && canTranslate && <div className="t2-ar" style={{ marginTop: 16 }}><ST obj={exam} lang={lang} field="transText" /></div>}
        {done && (
          <div className="card" style={{ marginTop: 16, padding: 16 }}>
            <h4 style={{ marginTop: 0 }}>{tx('result', lang)}:</h4>
            {items.map(it => {
              const isC = ans[it.n] === it.c;
              return (
                <div key={it.n} style={{ marginBottom: 8, color: isC ? 'var(--okc)' : 'var(--badc)' }}>
                  <div><strong>{it.n}.</strong> {ans[it.n] || '—'} {isC ? '✓' : `✗ (${it.c})`}</div>
                  {it.exp && <div style={{ fontSize: '0.85em', color: 'var(--muted)', fontStyle: 'italic', marginTop: 2, paddingRight: 12 }}>💡 {it.exp}</div>}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  } else if (type === 'schreiben' || type === 'sprechen' || (!items.length && exam.text)) {
    const taskText = exam.task || exam.aufgabe || '';
    const pointsRaw = exam.points || [];
    body = (
      <div className="card" style={{ padding: 20 }}>
        <p className="de" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8, margin: 0 }}>{exam.text}</p>
        {showTranslation && canTranslate && <div className="t2-ar" style={{ marginTop: 16 }}><ST obj={exam} lang={lang} field="transText" /></div>}
        {taskText && <div style={{ marginTop: 20, padding: 14, background: `${themeColor}15`, borderRight: `4px solid ${themeColor}`, borderRadius: 8, lineHeight: 1.6 }}>{showTranslation && canTranslate ? <ST obj={exam} lang={lang} field="transTask" /> : taskText}</div>}
        {pointsRaw.length > 0 && (
          <div style={{ marginTop: 16 }}>
            <h4 style={{ marginTop: 0 }}>{tx('points', lang)}</h4>
            <ul style={{ margin: 0, paddingRight: 20 }}>
              {pointsRaw.map((p, i) => {
                const transPoints = exam.transPoints && exam.transPoints[getLang(lang)];
                const transArr = Array.isArray(transPoints) ? transPoints : (exam.transPoints && exam.transPoints.ar);
                const txt = (showTranslation && canTranslate && Array.isArray(transArr) && transArr[i]) ? transArr[i] : p;
                return <li key={i} className="de" style={{ marginBottom: 6, lineHeight: 1.6 }}>{txt}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  } else if (!items.length) {
    body = <div className="card" style={{ padding: 30, textAlign: 'center' }}><Icons.Alert color="var(--red)"/><h3 style={{ marginTop: 12 }}>{tx('no_q', lang)}</h3></div>;
  }

  const headerMeta = [type.toUpperCase(), exam.sub, exam.level].filter(Boolean).join(' · ');

  return (
    <div style={{ paddingBottom: 100 }}>
      <div className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={onBack} className="btnI"><Icons.Back color="var(--text)"/></button>
          <div>
            <div className="de" style={{ fontWeight: 900, fontSize: '0.95em' }}><TT title={exam.title || exam.id || ''} lang={lang} /></div>
            <div style={{ fontSize: '0.7em', color: 'var(--muted)', fontWeight: 'bold' }}>{headerMeta}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {canTranslate && (
            <button onClick={() => setShowTranslation(!showTranslation)} className="btnI" style={{ color: showTranslation ? themeColor : 'var(--text)', borderColor: showTranslation ? themeColor : 'var(--line)' }}>
              <Icons.Translate color={showTranslation ? themeColor : 'var(--text)'}/>
            </button>
          )}
          <button onClick={() => setDark(!dark)} className="btnI">{dark ? <Icons.Sun/> : <Icons.Moon/>}</button>
        </div>
      </div>
      <div style={{ padding: '16px 12px' }}>{body}</div>

      {modalGap !== null && (
        <div className="overlay" onClick={() => setModalGap(null)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <h3>{tx('pick_word', lang)} ({modalGap})</h3>
            <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
              {items.find(x => x.n === modalGap)?.opts?.map(opt => (
                <button key={opt} onClick={() => { pick(modalGap, opt); setModalGap(null); }} className="opt" style={{ justifyContent: 'center' }}>{opt}</button>
              ))}
            </div>
            <button onClick={() => setModalGap(null)} className="btn" style={{ marginTop: 16 }}>{tx('close', lang)}</button>
          </div>
        </div>
      )}

      {items.length > 0 && (type === 'sprach1' || type === 'sprach2' || type === 'mcq' || type === 'headings' || type === 'matching') && (
        <div className="bottom-bar">
          <div style={{ fontWeight: 'bold', color: themeColor }}>{done ? `${tx('result', lang)}: ${score} / ${total}` : `${Object.keys(ans).length} / ${items.length}`}</div>
          {!done ? <button onClick={finish} className="btn-correct-bar" style={{ background: themeColor }}>{tx('check', lang)}</button>
            : <button onClick={reset} className="btn-prev-bar" style={{ background: themeColor, color: '#FFF' }}>{tx('reset', lang)}</button>}
        </div>
      )}
    </div>
  );
}

// ================== MAIN APP ==================
function App() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('lang') || 'ar'; } catch(e) { return 'ar'; } });
  const [dark, setDark] = useState(() => { try { return localStorage.getItem('dark') === '1'; } catch(e) { return false; } });
  const [level, setLevel] = useState('B1');
  const [tab, setTab] = useState('Lesen');
  const [activeExam, setActiveExam] = useState(null);
  const [search, setSearch] = useState('');
  const [showVersions, setShowVersions] = useState(null);
  const [showLangPicker, setShowLangPicker] = useState(false);

  const LANGS_LIST = useMemo(() => {
    const base = window.LANGS || [
      { c:"ma", n:"الدارجة", f:"🇲🇦" }, { c:"ar", n:"العربية", f:"📜" },
      { c:"en", n:"English", f:"🇬🇧" }, { c:"de", n:"Deutsch", f:"🇩🇪" },
      { c:"fr", n:"Français", f:"🇫🇷" }, { c:"hi", n:"हिन्दी", f:"🇮🇳" },
      { c:"id", n:"Indonesia", f:"🇮🇩" }, { c:"tl", n:"Filipino", f:"🇵🇭" },
      { c:"fa", n:"فارسی", f:"🇮🇷" }, { c:"sw", n:"Kiswahili", f:"🇰🇪" },
      { c:"uz", n:"O'zbek", f:"🇺🇿" }, { c:"ne", n:"नेपाली", f:"🇳🇵" }
    ];
    const hasDe = base.some(l => l.c === 'de');
    return hasDe ? base : [...base, { c: 'de', n: 'Deutsch', f: '🇩🇪' }];
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    try { localStorage.setItem('dark', dark ? '1' : '0'); } catch(e) {}
  }, [dark]);

  useEffect(() => {
    try { localStorage.setItem('lang', lang); } catch(e) {}
    document.documentElement.dir = (lang === 'ar' || lang === 'ma' || lang === 'fa') ? 'rtl' : 'ltr';
  }, [lang]);

  if (activeExam) {
    return <ExamView exam={activeExam} lang={lang} onBack={() => setActiveExam(null)} dark={dark} setDark={setDark}/>;
  }

  const themeColor = level === 'B2' ? '#0D9488' : '#8B5CF6';
  const groups = buildGroups(level, tab, search);
  const TABS = [
    { id: 'Lesen', icon: Icons.Book, label: tx('lesen', lang) },
    { id: 'Hören', icon: Icons.Headphones, label: tx('horen', lang) },
    { id: 'Schreiben', icon: Icons.Edit, label: tx('schreiben', lang) },
    { id: 'Sprechen', icon: Icons.Mic, label: tx('sprechen', lang) }
  ];
  const currentLang = LANGS_LIST.find(l => l.c === lang) || LANGS_LIST[0];

  return (
    <div style={{ minHeight: '100vh', paddingBottom: 80 }}>
      <div className="header">
        <div className="brand">
          <Logo/>
          <div>
            <div className="header-title">EchtPrüfung</div>
            <div className="header-subtitle">{level} · {tab}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => setShowLangPicker(true)} className="btnI" title={tx('choose_lang', lang)}>
            <span style={{ fontSize: '1.1em' }}>{currentLang?.f || '🌐'}</span>
          </button>
          <button onClick={() => setDark(!dark)} className="btnI">{dark ? <Icons.Sun/> : <Icons.Moon/>}</button>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '16px 12px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {['B1', 'B2'].map(l => (
            <button key={l} onClick={() => setLevel(l)} style={{ flex: 1, padding: 12, borderRadius: 12, border: 'none', background: level === l ? themeColor : 'var(--card)', color: level === l ? '#FFF' : 'var(--text)', fontWeight: 'bold', cursor: 'pointer', fontSize: '1em' }}>{l}</button>
          ))}
        </div>

        <input type="text" placeholder={tx('search', lang)} value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid var(--line)', background: 'var(--card)', color: 'var(--text)', fontFamily: 'inherit', marginBottom: 16, boxSizing: 'border-box' }}/>

        <div style={{ marginBottom: 12, fontSize: '0.85em', color: 'var(--muted)', fontWeight: 'bold' }}>
          {groups.length} {tx('lessons', lang)} · {level} · {tab}
        </div>

        {groups.length === 0 && (
          <div className="card" style={{ padding: 30, textAlign: 'center', color: 'var(--muted)' }}>
            {level === 'B2' && tab === 'Sprechen' ? tx('coming_soon', lang) : tx('empty', lang)}
          </div>
        )}

        {groups.map((g, i) => (
          <div key={i} className="card" style={{ padding: 16, marginBottom: 10, cursor: 'pointer', borderLeft: `4px solid ${themeColor}` }} onClick={() => {
            if (g.versions.length === 1) setActiveExam(g.versions[0]);
            else setShowVersions(g);
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <div className="de" style={{ fontWeight: 'bold', fontSize: '1.05em' }}><TT title={g.title} lang={lang} /></div>
                <div style={{ fontSize: '0.8em', color: 'var(--muted)', marginTop: 4 }}>
                  {g.versions.length > 0 && `${g.versions.length} ${tx('versions', lang)}`}
                  {g.versions.length > 0 && g.versions[0].sub && ` · ${g.versions[0].sub}`}
                </div>
              </div>
              {g.versions.length > 1 && <span style={{ background: themeColor, color: '#FFF', padding: '4px 10px', borderRadius: 20, fontSize: '0.8em', fontWeight: 'bold' }}>{g.versions.length}</span>}
            </div>
          </div>
        ))}
      </div>

      <nav className="nav">
        {TABS.map(t => {
          const isA = tab === t.id;
          return (
            <button key={t.id} onClick={() => setTab(t.id)} className={isA ? 'on' : ''} style={{ color: isA ? themeColor : 'var(--muted)' }}>
              <t.icon color={isA ? themeColor : 'var(--muted)'}/>
              <span>{t.label}</span>
            </button>
          );
        })}
      </nav>

      {showLangPicker && (
        <div className="overlay" onClick={() => setShowLangPicker(false)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>🌐 {tx('choose_lang', lang)}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginTop: 16 }}>
              {LANGS_LIST.map(L => (
                <button key={L.c} onClick={() => { setLang(L.c); setShowLangPicker(false); }} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 12, borderRadius: 12, border: `2px solid ${lang === L.c ? themeColor : 'var(--line)'}`, background: lang === L.c ? `${themeColor}15` : 'var(--card)', color: 'var(--text)', fontWeight: 'bold', cursor: 'pointer', textAlign: 'right' }}>
                  <span style={{ fontSize: '1.3em' }}>{L.f}</span>
                  <span style={{ flex: 1 }}>{L.n}</span>
                  {lang === L.c && <span style={{ color: themeColor }}>✓</span>}
                </button>
              ))}
            </div>
            <button onClick={() => setShowLangPicker(false)} className="btn" style={{ marginTop: 16, background: 'var(--line)', color: 'var(--text)' }}>{tx('close', lang)}</button>
          </div>
        </div>
      )}

      {showVersions && (
        <div className="overlay" onClick={() => setShowVersions(null)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>{tx('choose', lang)}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9em' }}><TT title={showVersions.title} lang={lang} /></p>
            <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
              {showVersions.versions.map((v, i) => (
                <button key={i} onClick={() => { setActiveExam(v); setShowVersions(null); }} className="opt" style={{ justifyContent: 'space-between' }}>
                  <span className="de"><TT title={v.title || v.id || ''} lang={lang} /></span>
                  <span style={{ fontSize: '0.8em', color: 'var(--muted)' }}>{v.type || 'mcq'}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setShowVersions(null)} className="btn" style={{ marginTop: 16, background: 'var(--line)', color: 'var(--text)' }}>{tx('close', lang)}</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ================== LAUNCH ==================
const rootEl = document.getElementById('root');
if (rootEl) ReactDOM.createRoot(rootEl).render(<App/>);
