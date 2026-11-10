/* =========================================================
   EchtPrüfung 2027 — app.js (النسخة النهائية الكاملة)
   ========================================================= */

const { useState, useEffect, useRef } = React;
const WA = "212680193427";
const wa = (msg) => window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank");

const supabaseUrl = 'https://ldatleskngsvoxwbiqtd.supabase.co';
const supabaseKey = 'sb_publishable_6UXiEWOS8YkGZTiT2jQRlA_K7HgONtL';
const sb = supabase.createClient(supabaseUrl, supabaseKey);

const {
  UI_TEXTS, LANGS, SCHREIBEN_DATA, PRUEFUNG_DATA, EXAMS, HOREN_EXAMS,
  B2_SCHREIBEN_DATA, B2_PRUEFUNG_DATA, B2_EXAMS, B2_HOREN_EXAMS,
  B2_PLACEHOLDER_LESSONS
} = window;

const B1_SPRECHEN_DATA = window.B1_SPRECHEN_DATA || [];
const B2_SPRECHEN_DATA = window.B2_SPRECHEN_DATA || [];

// ============= I18N =============
const t = (key, lang) => {
  const safeLang = lang === 'ma' ? 'ar' : lang;
  if (UI_TEXTS && UI_TEXTS[safeLang] && UI_TEXTS[safeLang][key]) return UI_TEXTS[safeLang][key];
  if (UI_TEXTS && UI_TEXTS.ar && UI_TEXTS.ar[key]) return UI_TEXTS.ar[key];
  if (UI_TEXTS && UI_TEXTS.en && UI_TEXTS.en[key]) return UI_TEXTS.en[key];
  return key;
};

const EXTRA = {
  ar: { mod: "معدل", no_audio: "لا يوجد صوت", no_q: "هذا الدرس ما فيهش أسئلة دابا", check: "تصحيح", next: "التالي", back: "رجوع", close: "إغلاق", versions: "نسخ", locked_t: "محتوى مقفل", locked_m: "خاصك ترقية الحساب باش تفتح هاد المحتوى", upgrade: "ترقية الحساب الآن", later: "ليس الآن", correct: "صحيح", wrong: "خطأ", no_ans: "لم تجب", the_ans: "الجواب", empty: "ما كاين حتى شي درس فـ هاد القسم", search: "قلب على درس...", choose: "اختر النسخة", result: "النتيجة", show_tr: "إظهار الترجمة", hide_tr: "إخفاء الترجمة", exp: "توضيح", play: "تشغيل", pause: "إيقاف", memo: "قصة للحفظ", part: "الجزء", of: "من", prev: "السابق", schreiben_t: "كتب هنا جوابك...", wc: "كلمة", settings: "الإعدادات", lang_btn: "تغيير اللغة", fs: "حجم النص", reset_fs: "إعادة الحجم الأصلي", logout: "خروج", audio_none: "🔇 لا يوجد صوت" },
  ma: { mod: "معدل", no_audio: "لا يوجد صوت", no_q: "هذا الدرس ما فيهش أسئلة دابا", check: "تصحيح", next: "التالي", back: "رجوع", close: "إغلاق", versions: "نسخ", locked_t: "محتوى مقفل", locked_m: "خاصك ترقية الحساب باش تفتح هاد المحتوى", upgrade: "ترقية الحساب الآن", later: "ليس الآن", correct: "صحيح", wrong: "خطأ", no_ans: "لم تجب", the_ans: "الجواب", empty: "ما كاين حتى شي درس فـ هاد القسم", search: "قلب على درس...", choose: "اختر النسخة", result: "النتيجة", show_tr: "إظهار الترجمة", hide_tr: "إخفاء الترجمة", exp: "توضيح", play: "تشغيل", pause: "إيقاف", memo: "قصة للحفظ", part: "الجزء", of: "من", prev: "السابق", schreiben_t: "كتب هنا جوابك...", wc: "كلمة", settings: "الإعدادات", lang_btn: "تغيير اللغة", fs: "حجم النص", reset_fs: "إعادة الحجم الأصلي", logout: "خروج", audio_none: "🔇 لا يوجد صوت" },
  en: { mod: "Modified", no_audio: "No audio", no_q: "This lesson has no questions", check: "Check", next: "Next", back: "Back", close: "Close", versions: "Versions", locked_t: "Locked Content", locked_m: "Upgrade required to unlock", upgrade: "Upgrade Now", later: "Not Now", correct: "Correct", wrong: "Wrong", no_ans: "No answer", the_ans: "Answer", empty: "No lessons found", search: "Search...", choose: "Choose Version", result: "Result", show_tr: "Show Translation", hide_tr: "Hide Translation", exp: "Explanation", play: "Play", pause: "Pause", memo: "Story Memo", part: "Part", of: "of", prev: "Previous", schreiben_t: "Write here...", wc: "words", settings: "Settings", lang_btn: "Change Language", fs: "Text Size", reset_fs: "Reset Size", logout: "Logout", audio_none: "🔇 No audio" },
  de: { mod: "Modifiziert", no_audio: "Kein Audio", no_q: "Keine Fragen", check: "Prüfen", next: "Weiter", back: "Zurück", close: "Schließen", versions: "Versionen", locked_t: "Gesperrt", locked_m: "Upgrade erforderlich", upgrade: "Upgrade", later: "Nicht jetzt", correct: "Richtig", wrong: "Falsch", no_ans: "Keine Antwort", the_ans: "Antwort", empty: "Keine Lektionen", search: "Suchen...", choose: "Version wählen", result: "Ergebnis", show_tr: "Übersetzung anzeigen", hide_tr: "Übersetzung verbergen", exp: "Erklärung", play: "Abspielen", pause: "Pause", memo: "Geschichte", part: "Teil", of: "von", prev: "Zurück", schreiben_t: "Schreibe hier...", wc: "Wörter", settings: "Einstellungen", lang_btn: "Sprache ändern", fs: "Textgröße", reset_fs: "Zurücksetzen", logout: "Ausloggen", audio_none: "🔇 Kein Audio" },
  fr: { mod: "Modifié", no_audio: "Pas d'audio", no_q: "Pas de questions", check: "Vérifier", next: "Suivant", back: "Retour", close: "Fermer", versions: "Versions", locked_t: "Contenu verrouillé", locked_m: "Mise à niveau requise", upgrade: "Mettre à niveau", later: "Pas maintenant", correct: "Correct", wrong: "Faux", no_ans: "Pas de réponse", the_ans: "Réponse", empty: "Aucune leçon", search: "Rechercher...", choose: "Choisir version", result: "Résultat", show_tr: "Afficher traduction", hide_tr: "Cacher traduction", exp: "Explication", play: "Jouer", pause: "Pause", memo: "Mémo", part: "Partie", of: "sur", prev: "Précédent", schreiben_t: "Écrire ici...", wc: "mots", settings: "Paramètres", lang_btn: "Changer langue", fs: "Taille du texte", reset_fs: "Réinitialiser", logout: "Déconnexion", audio_none: "🔇 Pas d'audio" },
  hi: { mod: "संशोधित", no_audio: "ऑडियो नहीं", no_q: "कोई प्रश्न नहीं", check: "जाँचें", next: "आगे", back: "वापस", close: "बंद करें", versions: "संस्करण", locked_t: "लॉक", locked_m: "अपग्रेड आवश्यक", upgrade: "अभी अपग्रेड करें", later: "अभी नहीं", correct: "सही", wrong: "गलत", no_ans: "कोई उत्तर नहीं", the_ans: "उत्तर", empty: "कोई पाठ नहीं", search: "खोजें...", choose: "संस्करण चुनें", result: "परिणाम", show_tr: "अनुवाद दिखाएं", hide_tr: "अनुवाद छिपाएं", exp: "स्पष्टीकरण", play: "चलाएं", pause: "रोकें", memo: "कहानी", part: "भाग", of: "में से", prev: "पिछला", schreiben_t: "यहाँ लिखें...", wc: "शब्द", settings: "सेटिंग्स", lang_btn: "भाषा बदलें", fs: "पाठ आकार", reset_fs: "रीसेट करें", logout: "लॉगआउट", audio_none: "🔇 ऑडियो नहीं" },
  id: { mod: "Dimodifikasi", no_audio: "Tidak ada audio", no_q: "Tidak ada pertanyaan", check: "Periksa", next: "Berikutnya", back: "Kembali", close: "Tutup", versions: "Versi", locked_t: "Terkunci", locked_m: "Perlu upgrade", upgrade: "Upgrade Sekarang", later: "Tidak Sekarang", correct: "Benar", wrong: "Salah", no_ans: "Tidak ada jawaban", the_ans: "Jawaban", empty: "Tidak ada pelajaran", search: "Cari...", choose: "Pilih versi", result: "Hasil", show_tr: "Tampilkan Terjemahan", hide_tr: "Sembunyikan", exp: "Penjelasan", play: "Mainkan", pause: "Jeda", memo: "Cerita", part: "Bagian", of: "dari", prev: "Sebelumnya", schreiben_t: "Tulis di sini...", wc: "kata", settings: "Pengaturan", lang_btn: "Ubah Bahasa", fs: "Ukuran Teks", reset_fs: "Reset", logout: "Keluar", audio_none: "🔇 Tidak ada audio" },
  tl: { mod: "Binago", no_audio: "Walang audio", no_q: "Walang tanong", check: "Tingnan", next: "Susunod", back: "Bumalik", close: "Isara", versions: "Mga Bersyon", locked_t: "Naka-lock", locked_m: "Kailangan ng upgrade", upgrade: "I-upgrade", later: "Hindi Ngayon", correct: "Tama", wrong: "Mali", no_ans: "Walang sagot", the_ans: "Sagot", empty: "Walang aralin", search: "Maghanap...", choose: "Pumili", result: "Resulta", show_tr: "Ipakita Salin", hide_tr: "Itago", exp: "Paliwanag", play: "I-play", pause: "I-pause", memo: "Kuwento", part: "Bahagi", of: "ng", prev: "Nakaraan", schreiben_t: "Isulat dito...", wc: "salita", settings: "Mga Setting", lang_btn: "Palitan Wika", fs: "Laki ng Teksto", reset_fs: "I-reset", logout: "Mag-logout", audio_none: "🔇 Walang audio" },
  fa: { mod: "اصلاح شده", no_audio: "بدون صدا", no_q: "سوالی نیست", check: "بررسی", next: "بعدی", back: "بازگشت", close: "بستن", versions: "نسخه‌ها", locked_t: "قفل شده", locked_m: "نیاز به ارتقا", upgrade: "ارتقا", later: "الان نه", correct: "صحیح", wrong: "غلط", no_ans: "بدون پاسخ", the_ans: "پاسخ", empty: "درسی نیست", search: "جستجو...", choose: "انتخاب نسخه", result: "نتیجه", show_tr: "نمایش ترجمه", hide_tr: "مخفی کردن", exp: "توضیح", play: "پخش", pause: "توقف", memo: "داستان", part: "بخش", of: "از", prev: "قبلی", schreiben_t: "اینجا بنویسید...", wc: "کلمه", settings: "تنظیمات", lang_btn: "تغییر زبان", fs: "اندازه متن", reset_fs: "بازنشانی", logout: "خروج", audio_none: "🔇 بدون صدا" },
  sw: { mod: "Iliyorekebishwa", no_audio: "Hakuna sauti", no_q: "Hakuna maswali", check: "Angalia", next: "Ifuatayo", back: "Rudi", close: "Funga", versions: "Matoleo", locked_t: "Imefungwa", locked_m: "Inahitaji kuboresha", upgrade: "Boresha", later: "Sio Sasa", correct: "Sahihi", wrong: "Makosa", no_ans: "Hakuna jibu", the_ans: "Jibu", empty: "Hakuna masomo", search: "Tafuta...", choose: "Chagua toleo", result: "Matokeo", show_tr: "Onyesha Tafsiri", hide_tr: "Ficha", exp: "Maelezo", play: "Cheza", pause: "Sitisha", memo: "Hadithi", part: "Sehemu", of: "ya", prev: "Iliyotangulia", schreiben_t: "Andika hapa...", wc: "maneno", settings: "Mipangilio", lang_btn: "Badilisha Lugha", fs: "Ukubwa wa Maandishi", reset_fs: "Weka Upya", logout: "Toka", audio_none: "🔇 Hakuna sauti" },
  uz: { mod: "O'zgartirilgan", no_audio: "Ovoz yo'q", no_q: "Savollar yo'q", check: "Tekshirish", next: "Keyingi", back: "Orqaga", close: "Yopish", versions: "Versiyalar", locked_t: "Qulflangan", locked_m: "Yangilash kerak", upgrade: "Yangilash", later: "Hozir emas", correct: "To'g'ri", wrong: "Xato", no_ans: "Javob yo'q", the_ans: "Javob", empty: "Darslar yo'q", search: "Qidirish...", choose: "Versiyani tanlash", result: "Natija", show_tr: "Tarjimani ko'rsatish", hide_tr: "Yashirish", exp: "Tushuntirish", play: "Ijro etish", pause: "Pauza", memo: "Hikoya", part: "Qism", of: "dan", prev: "Oldingi", schreiben_t: "Bu yerga yozing...", wc: "so'z", settings: "Sozlamalar", lang_btn: "Tilni o'zgartirish", fs: "Matn hajmi", reset_fs: "Tiklash", logout: "Chiqish", audio_none: "🔇 Ovoz yo'q" },
  ne: { mod: "परिमार्जित", no_audio: "अडियो छैन", no_q: "प्रश्नहरू छैनन्", check: "जाँच्नुहोस्", next: "अर्को", back: "फर्कनुहोस्", close: "बन्द", versions: "संस्करणहरू", locked_t: "लक", locked_m: "अपग्रेड आवश्यक", upgrade: "अपग्रेड", later: "अहिले होइन", correct: "सही", wrong: "गलत", no_ans: "उत्तर छैन", the_ans: "उत्तर", empty: "पाठहरू छैनन्", search: "खोज्नुहोस्...", choose: "संस्करण छान्नुहोस्", result: "नतिजा", show_tr: "अनुवाद देखाउनुहोस्", hide_tr: "लुकाउनुहोस्", exp: "स्पष्टीकरण", play: "चलाउनुहोस्", pause: "रोक्नुहोस्", memo: "कथा", part: "भाग", of: "को", prev: "अघिल्लो", schreiben_t: "यहाँ लेख्नुहोस्...", wc: "शब्द", settings: "सेटिङ", lang_btn: "भाषा परिवर्तन", fs: "पाठ आकार", reset_fs: "रिसेट", logout: "लगआउट", audio_none: "🔇 अडियो छैन" }
};

const tx = (key, lang) => {
  const safeLang = lang === 'ma' ? 'ar' : lang;
  if (EXTRA[safeLang] && EXTRA[safeLang][key]) return EXTRA[safeLang][key];
  if (EXTRA.en && EXTRA.en[key]) return EXTRA.en[key];
  return key;
};

const formatTitle = (title, lang) => {
  if (!title) return '';
  const modLabel = tx('mod', lang);
  return String(title)
    .replace(/\((\d+)\s*المعدل\)/g, `($1 ${modLabel})`)
    .replace(/\(المعدل\)/g, `(${modLabel})`)
    .replace(/(\d+)\s*المعدل/g, `$1 ${modLabel}`)
    .replace(/المعدل/g, modLabel);
};

const norm = (s) => (s == null ? "" : String(s)).toLowerCase()
  .replace(/(المعدل|معدل|تعديل)/g, "")
  .replace(/[^\w\u0600-\u06FF]+/g, "").trim();

// ============= PLACEHOLDER (B1) =============
const PLACEHOLDER_LESSONS = {
  "Lesen": {
    "Teile 1": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2"],
    "Teile 2": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2"],
    "Teile 3": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2"],
    "Sprach 1": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Liebe Olivia."],
    "Sprach 2": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Petra", "Corina", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2."]
  },
  "Hören": {
    "Teile 1": ["Einkäufe im Internet", "Bus zur Arbeit", "Arbeitsplatz für Vater", "Einzelkind", "Urlaub", "Kinder in der Schule", "Radwege", "Fremdsprache"],
    "Teile 2": ["Vorlesung", "Interview", "Radiobericht"],
    "Teile 3": ["Gespräch im Büro", "Dialog im Alltag"]
  },
  "Schreiben": [
    "Urlaub Im Schwarzwald - Antwort An Petra", "Eva - Traumberuf Und Neuigkeiten",
    "Sophie - Würzburg", "Nadja - Garten", "Nicole - Probleme", "Andreas - Neuer Kollege",
    "Annika - Sommerurlaub", "Iris - Abschlussparty", "Caroline - Gastschülerin", "Vera - Arbeitsweg",
    "Jennifer - Einladung", "Andreas - Neue Wohnung", "Thomas - Überraschungsausflug",
    "Tamara - Treffen", "Jan - Urlaub", "Viktor - Urlaub", "Anna - Katze",
    "Nora - Neue Wohnung", "Claudia - Zoobesuch", "Karla - Umzug", "Mara - Reise",
    "Annika - Urlaub 2", "Sonja - Musikfestival", "Rita - Hochzeit", "Anne - Geburtstag",
    "Paul - Ausflug", "Jakob - Nachbarn", "Emilia", "Tobias", "Naco", "Alicia",
    "Cora Und Alex", "Miroslav", "Corinna", "Moritz"
  ],
  "Sprechen": { "Teile 1": [], "Teile 2": [], "Teile 3": [] }
};

const FREE_MODIFIED_LESSONS = window.FREE_MODIFIED_LESSONS || [];

// ============= ICONS =============
const Icon = ({ d, color = "currentColor", size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const Icons = {
  Home: (p) => <Icon d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" {...p} />,
  Book: (p) => <Icon d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" {...p} />,
  Headphones: (p) => <Icon d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" {...p} />,
  Edit: (p) => <Icon d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z" {...p} />,
  Mic: (p) => <Icon d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v3" {...p} />,
  Graduation: (p) => <Icon d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5" {...p} />,
  Menu: (p) => <Icon d="M4 6h16M4 12h16M4 18h16" {...p} />,
  Moon: (p) => <Icon d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" size={18} {...p} />,
  Sun: (p) => <Icon d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 6a6 6 0 100 12 6 6 0 000-12z" size={18} {...p} />,
  Settings: (p) => <Icon d="M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" size={18} {...p} />,
  Translate: (p) => <Icon d="M4 5h12M9 3v2c0 4.418-2.686 8-6 8m0-8h12m-6 0v2c0 4.418 2.686 8 6 8m-4-2l-4 8m2-4h4m-2 0l2 4" size={18} {...p} />,
  Play: (p) => <svg width="24" height="24" viewBox="0 0 24 24" fill={p.color || "currentColor"}><path d="M8 5v14l11-7z" /></svg>,
  Pause: (p) => <svg width="24" height="24" viewBox="0 0 24 24" fill={p.color || "currentColor"}><rect x="6" y="6" width="12" height="12" rx="2" /></svg>,
  Check: (p) => <Icon d="M20 6L9 17l-5-5" strokeWidth="3" {...p} />,
  ArrowLeft: (p) => <Icon d="M15 18l-6-6 6-6" {...p} />,
  ArrowRight: (p) => <Icon d="M9 18l6-6-6-6" {...p} />,
  Target: (p) => <Icon d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-6a4 4 0 100-8 4 4 0 000 8zm0-4a2 2 0 100 .01" {...p} />,
  Practice: (p) => <Icon d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" {...p} />,
  Clock: (p) => <Icon d="M12 6v6l4 2M12 22a10 10 0 100-20 10 10 0 000 20z" size={16} {...p} />,
  Eye: (p) => <Icon d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zm11 3a3 3 0 100-6 3 3 0 000 6z" {...p} />,
  X: (p) => <Icon d="M18 6L6 18M6 6l12 12" {...p} />,
  Lock: (p) => <Icon d="M7 11V7a5 5 0 0110 0v4M3 11h18v11H3z" {...p} />,
  Rocket: (p) => <Icon d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" {...p} />,
  Gift: (p) => <Icon d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" {...p} />,
  Alert: (p) => <Icon d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" {...p} />
};

// ============= LOGO =============
const LogoImage = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0F172A" /><stop offset="100%" stopColor="#1E293B" /></linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#14B8A6" /><stop offset="100%" stopColor="#0D9488" /></linearGradient>
    </defs>
    <rect width="100" height="100" rx="24" fill="url(#bgGrad)" />
    <rect width="98" height="98" x="1" y="1" rx="23" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
    <rect x="18" y="28" width="36" height="10" rx="4" fill="#0D9488" />
    <rect x="18" y="44" width="36" height="10" rx="4" fill="#BE123C" />
    <rect x="18" y="60" width="36" height="10" rx="4" fill="url(#goldGrad)" />
    <path d="M 54 70 L 54 30 L 70 30 C 84 30, 84 52, 70 52 L 54 52" stroke="url(#goldGrad)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="80" cy="80" r="5" fill="#D97706" />
  </svg>
);

// ============= AUTO-TRANSLATE =============
const globalTransCache = {};
const FAST_DICT = {
  "المعدل": { ar: "المعدل", en: "Modified", fr: "Modifié", de: "Modifiziert", hi: "संशोधित", id: "Dimodifikasi", tl: "Binago", fa: "اصلاح شده", sw: "Iliyorekebishwa", uz: "O'zgartirilgan", ne: "परिमार्जित" }
};

function AutoTrans({ text, lang, force = false }) {
  const targetLang = lang === 'ma' ? 'ar' : lang;
  const cacheKey = `${targetLang}_${text}`;
  const [translated, setTranslated] = useState(() => {
    if (!text) return "";
    if (targetLang === 'de' && !force) return text;
    const safeText = String(text).trim();
    if (FAST_DICT[safeText] && FAST_DICT[safeText][targetLang]) return FAST_DICT[safeText][targetLang];
    return globalTransCache[cacheKey] || text;
  });

  useEffect(() => {
    if (!text || targetLang === 'de') return;
    const safeText = String(text).trim();
    if (FAST_DICT[safeText] && FAST_DICT[safeText][targetLang]) {
      setTranslated(FAST_DICT[safeText][targetLang]);
      return;
    }
    if (globalTransCache[cacheKey]) {
      setTranslated(globalTransCache[cacheKey]);
      return;
    }
    const controller = new AbortController();
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => {
        if (data && data[0]) {
          const result = data[0].map(item => item[0]).join('');
          globalTransCache[cacheKey] = result;
          setTranslated(result);
        }
      })
      .catch(() => {});
    return () => controller.abort();
  }, [text, targetLang, cacheKey, force]);

  return <span>{translated}</span>;
}

function SmartTrans({ obj, lang }) {
  if (!obj) return "";
  const textDe = obj.de || obj.en || (obj.q || "") || (typeof obj === 'string' ? obj : "");
  const targetLang = lang === 'ma' ? 'ar' : lang;
  if (typeof obj === 'object' && obj[lang]) return <span>{obj[lang]}</span>;
  if (lang === 'de' && typeof obj === 'object' && obj['de']) return <span>{obj['de']}</span>;
  return <AutoTrans text={textDe} lang={targetLang} force={true} />;
}

// ============= GET DATA =============
const getDataForLevel = (level, tab) => {
  const isB2 = level === 'B2';
  let src = [];
  if (tab === 'Lesen') src = isB2 ? (B2_EXAMS || []) : [...(EXAMS || []), ...FREE_MODIFIED_LESSONS];
  else if (tab === 'Hören') src = isB2 ? (B2_HOREN_EXAMS || []) : (HOREN_EXAMS || []);
  else if (tab === 'Schreiben') src = isB2 ? (B2_SCHREIBEN_DATA || []) : (SCHREIBEN_DATA || []);
  else if (tab === 'Sprechen') src = isB2 ? B2_SPRECHEN_DATA : B1_SPRECHEN_DATA;
  return src;
};

const findLocalVersions = (title, level, tab) => {
  const clean = norm(title);
  return getDataForLevel(level, tab).filter(e => {
    const en = norm(e.title);
    return en === clean || en.includes(clean) || clean.includes(en);
  });
};

// Build list with grouping
const buildListEntries = (level, tab, activeTeil, searchQuery) => {
  const isB2 = level === 'B2';
  const data = getDataForLevel(level, tab);
  const phRaw = isB2 ? (B2_PLACEHOLDER_LESSONS || {}) : PLACEHOLDER_LESSONS;
  const ph = phRaw[tab];
  const phTitles = Array.isArray(ph) ? ph : ((ph && ph[activeTeil]) || []);

  // Filter data by activeTeil
  const dataFiltered = data.filter(e => {
    if (!activeTeil) return true;
    if (e.sub === activeTeil) return true;
    return norm(e.sub) === norm(activeTeil);
  });

  // Group data by base title
  const groups = {};
  dataFiltered.forEach(l => {
    const key = norm(l.title);
    if (!groups[key]) {
      const baseTitle = String(l.title)
        .replace(/\s*\(?\d*\s*المعدل\)?/g, '')
        .replace(/\s*المعدل/g, '')
        .trim();
      groups[key] = { title: baseTitle, versions: [] };
    }
    groups[key].versions.push(l);
  });

  // Add placeholder-only (locked) lessons
  phTitles.forEach(t => {
    const tn = norm(t);
    const hasMatch = Object.keys(groups).some(k => k.includes(tn) || tn.includes(k));
    if (!hasMatch) {
      groups[tn] = { title: t, versions: [] };
    }
  });

  let entries = Object.values(groups);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    entries = entries.filter(e => e.title.toLowerCase().includes(q));
  }
  return entries;
};

// ============= HOREN CARD =============
function HorenCard({ exam, userLang, showTranslation, isB2 }) {
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [audioTime, setAudioTime] = useState(0);
  const audioInterval = useRef(null);

  const items = exam.items || [];
  const hasRealAudio = exam.audio && exam.audio.some(a => a.text && a.text !== "Audio nicht verfügbar");

  if (items.length === 0) {
    return (
      <div className="card" style={{ padding: 20, textAlign: "center" }}>
        <Icons.Alert color="var(--red)" />
        <h3 style={{ marginTop: 12 }}>{tx('no_q', userLang)}</h3>
        <p style={{ color: "var(--muted)" }}>{formatTitle(exam.title, userLang)}</p>
      </div>
    );
  }

  const pts = 5;
  const total = items.length * pts;
  const score = items.filter(it => ans[it.n] === it.c).length * pts;
  const themeColor = isB2 ? "#0D9488" : "#8B5CF6";

  useEffect(() => () => {
    clearInterval(audioInterval.current);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }, []);

  const playAudio = (segments) => {
    if (!hasRealAudio || !window.speechSynthesis) { setIsPlaying(false); return; }
    window.speechSynthesis.cancel();
    let idx = 0;
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      for (const p of ['de-DE', 'de_DE', 'de']) {
        const v = voices.find(v => v.lang === p && /google|microsoft|premium/i.test(v.name));
        if (v) return v;
      }
      return voices.find(v => v.lang && v.lang.startsWith('de')) || null;
    };
    const playNext = () => {
      if (idx >= segments.length) {
        setIsPlaying(false);
        clearInterval(audioInterval.current);
        return;
      }
      const seg = segments[idx];
      if (!seg.text || seg.text === "Audio nicht verfügbar") {
        idx++;
        setTimeout(playNext, 300);
        return;
      }
      const u = new SpeechSynthesisUtterance(seg.text);
      u.lang = 'de-DE';
      const voice = pickVoice();
      if (voice) u.voice = voice;
      u.pitch = seg.pitch || 1.0;
      u.rate = seg.rate || 0.92;
      u.onend = () => { idx++; setTimeout(playNext, 300); };
      u.onerror = () => { setIsPlaying(false); clearInterval(audioInterval.current); };
      window.speechSynthesis.speak(u);
    };
    playNext();
  };

  const toggleAudio = () => {
    if (!hasRealAudio) return;
    if (isPlaying) {
      window.speechSynthesis.cancel();
      clearInterval(audioInterval.current);
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    setAudioTime(0);
    audioInterval.current = setInterval(() => setAudioTime(p => p + 1), 1000);
    playAudio(exam.audio || []);
  };

  const pickHoren = (n, c) => {
    if (done) return;
    setAns(p => ({ ...p, [n]: p[n] === c ? undefined : c }));
  };

  return (
    <div className="card" style={{ padding: 20, marginBottom: 24, border: `1px solid ${themeColor}40` }}>
      <h3 className="de" style={{ fontSize: "1.2em", fontWeight: 900, margin: "0 0 16px", color: "var(--ink)" }}>{formatTitle(exam.title, userLang)}</h3>

      <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--paper)", padding: 14, borderRadius: 20, marginBottom: 20 }}>
        <button onClick={toggleAudio} disabled={!hasRealAudio} style={{
          width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
          background: !hasRealAudio ? "var(--line)" : (isPlaying ? "var(--red)" : themeColor),
          color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hasRealAudio ? `0 8px 20px ${themeColor}50` : "none",
          cursor: !hasRealAudio ? "not-allowed" : "pointer"
        }}>
          {!hasRealAudio ? <span style={{ fontSize: 20 }}>🔇</span> : (isPlaying ? <Icons.Pause color="#FFF" /> : <Icons.Play color="#FFF" />)}
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900, color: "var(--muted)", fontSize: "0.9em", marginBottom: 6 }}>
            <span style={{ direction: 'ltr' }}>{Math.floor(audioTime / 60)}:{(audioTime % 60).toString().padStart(2, '0')}</span>
            <span>{hasRealAudio ? "Audio" : tx('audio_none', userLang)}</span>
          </div>
          <div style={{ height: 6, background: "var(--line)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: isPlaying ? "100%" : "0%", background: isPlaying ? "var(--red)" : themeColor, transition: isPlaying ? "width 60s linear" : "none" }} />
          </div>
        </div>
      </div>

      <div style={{ border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
        <div style={{ display: "flex", background: "var(--paper)", borderBottom: "1px solid var(--line)", fontWeight: 900, color: "var(--muted)", fontSize: "0.85em", padding: "10px 0" }}>
          <div style={{ width: 50, textAlign: "center" }}>R</div>
          <div style={{ width: 50, textAlign: "center" }}>F</div>
          <div style={{ flex: 1, paddingRight: 10 }}>AUSSAGE</div>
        </div>
        {items.map(it => {
          const isR = ans[it.n] === "R";
          const isF = ans[it.n] === "F";
          let rC = "rf-circle", fC = "rf-circle";
          if (done) {
            if (it.c === "R") rC += " good"; else if (isR) rC += " bad"; else rC += " faded";
            if (it.c === "F") fC += " good"; else if (isF) fC += " bad"; else fC += " faded";
          } else {
            if (isR) rC += " sel";
            if (isF) fC += " sel";
          }
          const bg = done ? (ans[it.n] === it.c ? "var(--okbg)" : "var(--badbg)") : "var(--card)";
          return (
            <div key={it.n} style={{ display: "flex", alignItems: "center", borderBottom: "1px solid var(--line)", padding: "10px 0", background: bg }}>
              <div style={{ width: 50, display: "flex", justifyContent: "center" }}><div className={rC} onClick={() => pickHoren(it.n, "R")} /></div>
              <div style={{ width: 50, display: "flex", justifyContent: "center" }}><div className={fC} onClick={() => pickHoren(it.n, "F")} /></div>
              <div style={{ flex: 1, fontSize: "0.9em", lineHeight: 1.5, paddingRight: 10 }}>
                <span style={{ opacity: 0.5, marginLeft: 6, fontWeight: 900 }}>{it.n}</span>
                <span className="de">{it.de}</span>
                {showTranslation && (
                  <div style={{ marginTop: 6, fontSize: "0.8em", color: "var(--muted)" }}>
                    <SmartTrans obj={it} lang={userLang} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => setShowStory(!showStory)} style={{ display: "flex", alignItems: "center", gap: 8, color: themeColor, fontWeight: 800, background: `${themeColor}15`, padding: "8px 14px", borderRadius: 12 }}>
          <Icons.Eye color={themeColor} size={16} /> {tx('memo', userLang)}
        </button>
        <div>
          {!done ? (
            <button onClick={() => setDone(true)} style={{ background: themeColor, color: "#FFF", padding: "10px 22px", borderRadius: 12, fontWeight: 900 }}>
              {tx('check', userLang)}
            </button>
          ) : (
            <div style={{ fontWeight: 900, color: score === total ? "var(--okc)" : "var(--red)", fontSize: "1.1em" }}>{score} / {total}</div>
          )}
        </div>
      </div>
      {showStory && (
        <div className="t2-ar" style={{ marginTop: 14, fontSize: "0.95em" }}>
          {items[0]?.story ? <SmartTrans obj={{de: items[0].story}} lang={userLang} /> : ''}
        </div>
      )}
    </div>
  );
}

// ============= EXAM VIEW =============
function ExamView({ exam, onBack, onSave, userLang, dark, setDark }) {
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [excluded, setExcluded] = useState({});
  const [modalGap, setModalGap] = useState(null);
  const [activeGap, setActiveGap] = useState(null);
  const [mode, setMode] = useState("exam");

  if (!exam) return null;

  const isB2 = exam.level === "B2";
  const themeColor = isB2 ? "#0D9488" : "#8B5CF6";
  const items = exam.items || [];

  if (items.length === 0 && !exam.paragraphs?.length) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <Icons.Alert color="var(--red)" />
        <h2 style={{ marginTop: 16 }}>{tx('no_q', userLang)}</h2>
        <button className="btn" onClick={onBack} style={{ marginTop: 20 }}>{tx('back', userLang)}</button>
      </div>
    );
  }

  const pts = exam.type === "matching" ? 2.5 : (exam.type?.includes("sprach") ? 1.5 : 5);
  const total = items.length * pts;
  const score = items.filter(it => ans[it.n] === it.c).length * pts;

  const usedElsewhere = (n, k) => {
    if ((exam.type !== "matching" && exam.type !== "headings") || k === "X") return false;
    return Object.entries(ans).some(([id, v]) => Number(id) !== n && v === k);
  };

  const pick = (it, k) => {
    if (done !== null) return;
    if (usedElsewhere(it.n, k)) return;
    if (ans[it.n] === k) {
      const na = { ...ans }; delete na[it.n]; setAns(na);
    } else {
      setAns({ ...ans, [it.n]: k });
    }
  };

  const pickSprach2 = (w) => {
    if (done !== null) return;
    const target = activeGap !== null ? activeGap : (items.find(x => ans[x.n] === undefined) || {}).n;
    if (!target) return;
    const na = { ...ans, [target]: w };
    Object.keys(na).forEach(k => { if (Number(k) !== target && na[k] === w) delete na[k]; });
    setAns(na);
    const next = items.find(x => x.n !== target && na[x.n] === undefined);
    setActiveGap(next ? next.n : null);
  };

  const cls = (it, k) => {
    const sel = ans[it.n];
    const isDone = done !== null || (mode === "practice" && sel !== undefined);
    if (isDone) {
      if (k === it.c) return "opt good";
      if (sel === k) return "opt bad";
      return "opt faded";
    }
    if (sel === k) return "opt sel";
    return "opt" + (usedElsewhere(it.n, k) ? " dis" : "");
  };

  const finish = () => {
    setDone(score);
    if (onSave) onSave(exam.id, score, total);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const reset = () => { setAns({}); setDone(null); setShowTranslation(false); setExcluded({}); window.scrollTo(0, 0); };

  return (
    <div style={{ paddingBottom: 120 }}>
      <div style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={onBack} className="btnI" style={{ width: 36, height: 36 }}><Icons.ArrowLeft color="var(--text)" /></button>
          <div>
            <div className="de" style={{ fontWeight: 900, fontSize: "0.95em" }}>{formatTitle(exam.title, userLang)}</div>
            <div className="de" style={{ fontSize: ".7em", color: "var(--muted)", fontWeight: "bold" }}>{exam.type === "horen" ? "HÖREN" : "LESEN"} · {(exam.sub || "").toUpperCase()}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setShowTranslation(!showTranslation)} className="btnI" style={{ width: 36, height: 36, color: showTranslation ? themeColor : "var(--text)", borderColor: showTranslation ? themeColor : "var(--line)" }}>
            <Icons.Translate color={showTranslation ? themeColor : "var(--text)"} />
          </button>
          <button onClick={() => setDark(!dark)} className="btnI" style={{ width: 36, height: 36 }}>
            {dark ? <Icons.Sun color="var(--text)" /> : <Icons.Moon color="var(--text)" />}
          </button>
        </div>
      </div>

      <div style={{ margin: "10px 12px" }}>
        {exam.type !== "matching" && exam.type !== "horen" && (
          <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
            <button className={"modeBtn " + (mode === "exam" ? "on" : "")} onClick={() => { setMode("exam"); reset(); }} style={mode === "exam" ? { borderColor: themeColor, background: themeColor } : {}}>{t("exam_mode", userLang)}</button>
            <button className={"modeBtn " + (mode === "practice" ? "on" : "")} onClick={() => { setMode("practice"); reset(); }} style={mode === "practice" ? { borderColor: themeColor, background: themeColor } : {}}>{t("practice_mode", userLang)}</button>
          </div>
        )}

        {exam.type === "horen" && <HorenCard exam={exam} userLang={userLang} showTranslation={showTranslation} isB2={isB2} />}

        {exam.type === "mcq" && (
          <div className="card" style={{ padding: 20 }}>
            {exam.paragraphs?.map((p, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <p className="de" style={{ lineHeight: 1.8, fontSize: "1.05em", margin: 0 }}>{p.de}</p>
                {showTranslation && <div className="t2-ar" style={{ borderColor: themeColor }}><SmartTrans obj={p} lang={userLang} /></div>}
              </div>
            ))}
          </div>
        )}

        {(exam.type === "sprach1" || exam.type === "sprach2") && (
          <div className="card" style={{ fontSize: "1.05em", lineHeight: 2.2, padding: 20 }}>
            {exam.note && <div style={{ background: "var(--badbg)", color: "var(--badc)", padding: 10, borderRadius: 8, marginBottom: 14, fontSize: "0.9em", fontWeight: "bold" }}>{formatTitle(exam.note, userLang)}</div>}
            {(exam.text || "").split(/(?:\.{3,}\s*|__)\s*\((\d+)\)\s*(?:\.{3,}|__)/g).map((part, i) => {
              if (i % 2 === 1) {
                const gn = parseInt(part);
                const it = items.find(x => x.n === gn);
                if (!it) return <span key={i}>[Gap {gn}]</span>;
                const sel = ans[gn];
                const isDone = done !== null;
                let content = <span className="inline-gap" style={{ borderColor: themeColor, color: themeColor }} onClick={() => { if (!isDone) exam.type === "sprach2" ? setActiveGap(gn) : setModalGap(gn); }}>{sel || `(${gn})`}</span>;
                if (isDone) {
                  if (sel === it.c) content = <span className="sp1-correct">{sel}</span>;
                  else if (sel) content = <span style={{ display: 'inline-flex', gap: 4 }}><span className="sp1-wrong">{sel}</span><span className="sp1-correct">{it.c}</span></span>;
                  else content = <span className="sp1-correct">{it.c}</span>;
                }
                return <React.Fragment key={i}>{content}</React.Fragment>;
              }
              return <span key={i} className="de" style={{ whiteSpace: "pre-wrap" }}>{part}</span>;
            })}
            {showTranslation && (
              <div className="t2-ar" style={{ marginTop: 20, borderColor: themeColor }}>
                {exam.transText ? <SmartTrans obj={exam.transText} lang={userLang} /> : <AutoTrans text={(exam.text || "").replace(/(?:\.{3,}\s*|__)\s*\(\d+\)\s*(?:\.{3,}|__)/g, " ___ ")} lang={userLang} force={true} />}
              </div>
            )}
          </div>
        )}

        {exam.type === "matching" && exam.ads?.map(ad => (
          <div key={ad.k} className="card" style={{ padding: 16 }}>
            <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 12 }}>
              <span className="de" style={{ color: "var(--primary)", fontWeight: 900, fontSize: "1.05em" }}>ANZEIGE {ad.k}</span>
              <div className="de" style={{ fontWeight: 900, marginTop: 6 }}>{ad.t}</div>
              <div className="de" style={{ fontSize: "0.9em", color: "var(--muted)", marginTop: 4 }}>{ad.de}</div>
              {showTranslation && <div style={{ marginTop: 4, fontSize:
