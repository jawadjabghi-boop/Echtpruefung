// ==========================================
// ملف إضافة الدروس المقفولة (Pro) + ربط Supabase
// ==========================================

// 1. إعدادات الواتساب
const WA_NUMBER = "212680193427"; 
const WA_MSG = "مرحباً، بغيت نرقّي حسابي لـ Pro باش نحل جميع الدروس فـ EchtPrüfung";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;
const WA_FORGOT_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("مرحباً، نسيت كلمة السر ديالي فـ EchtPrüfung.")}`;

// 2. إعدادات Supabase
const supabaseUrl = 'https://ldatleskngsvoxwbiqtd.supabase.co';
const supabaseKey = 'sb_publishable_6UXiEWOS8YkGZTiT2jQRlA_K7HgONtL';
const sb = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

// 3. الترجمات (اللغة المرنة)
const UI_TEXTS = {
  ar: { locked: "مقفول", pro: "Pro", subscribe: "اشترك الآن عبر واتساب", checking: "جاري التحقق...", found: "تم العثور على الدرس!", found_desc: "الدرس موجود في قاعدة البيانات.", not_available: "المحتوى غير متوفر. يرجى الترقية.", not_in_db: "المحتوى غير موجود.", close: "إغلاق", min: "دقيقة", open_access: "فتح الوصول", forgot_pass: "هل نسيت كلمة السر؟" },
  ma: { locked: "مقفول", pro: "Pro", subscribe: "اشترك دابا فواتساب", checking: "كنتحققو...", found: "لقينا الدرس!", found_desc: "الدرس واجد.", not_available: "المحتوى ماكاينش. اشترك.", not_in_db: "ماكاينش.", close: "سد", min: "دقيقة", open_access: "فتح الوصول", forgot_pass: "نسيتي كلمة السر؟" },
  en: { locked: "Locked", pro: "Pro", subscribe: "Subscribe via WhatsApp", checking: "Checking...", found: "Lesson found!", found_desc: "Lesson is ready.", not_available: "Content unavailable. Upgrade.", not_in_db: "Not found.", close: "Close", min: "Min", open_access: "Open Access", forgot_pass: "Forgot Password?" },
  fr: { locked: "Verrouillé", pro: "Pro", subscribe: "S'abonner via WhatsApp", checking: "Vérification...", found: "Leçon trouvée!", found_desc: "Prête.", not_available: "Indisponible. Passez à Pro.", not_in_db: "Introuvable.", close: "Fermer", min: "Min", open_access: "Ouvrir l'accès", forgot_pass: "Mot de passe oublié ?" },
  hi: { locked: "लॉक", pro: "Pro", subscribe: "व्हाट्सएप द्वारा सब्सक्राइब करें", checking: "जाँच हो रही है...", found: "पाठ मिला!", found_desc: "तैयार है।", not_available: "अनुपलब्ध। अपग्रेड करें।", not_in_db: "नहीं मिला।", close: "बंद करें", min: "मिनट", open_access: "पहुंच खोलें", forgot_pass: "पासवर्ड भूल गए?" },
  id: { locked: "Terkunci", pro: "Pro", subscribe: "Berlangganan via WhatsApp", checking: "Memeriksa...", found: "Ditemukan!", found_desc: "Siap.", not_available: "Tidak tersedia. Upgrade.", not_in_db: "Tidak ada.", close: "Tutup", min: "Menit", open_access: "Buka Akses", forgot_pass: "Lupa Kata Sandi?" },
  tl: { locked: "Naka-lock", pro: "Pro", subscribe: "Mag-subscribe sa WhatsApp", checking: "Sinusuri...", found: "Natagpuan!", found_desc: "Handa na.", not_available: "Hindi available. Upgrade.", not_in_db: "Wala.", close: "Isara", min: "Min", open_access: "Buksan ang Access", forgot_pass: "Nakalimutan ang Password?" },
  fa: { locked: "قفل", pro: "Pro", subscribe: "اشتراک در واتساپ", checking: "در حال بررسی...", found: "پیدا شد!", found_desc: "آماده است.", not_available: "در دسترس نیست. ارتقا دهید.", not_in_db: "وجود ندارد.", close: "بستن", min: "دقیقه", open_access: "باز کردن دسترسی", forgot_pass: "رمز عبور را فراموش کرده اید؟" }
};

function getT(key) {
  const lang = localStorage.getItem('ep_lang') || 'ar';
  const dict = UI_TEXTS[lang] || UI_TEXTS['en'] || UI_TEXTS['ar'];
  return dict[key] || UI_TEXTS['ar'][key] || key;
}

// 4. لوائح الدروس
const LOCKED_LESEN_NAMES = [
  "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", 
  "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", 
  "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", 
  "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2", "Liebe Olivia",
  "Rita (Modifiziert)", "Caroline (Modifiziert)"
];

const LOCKED_SCHREIBEN_NAMES = [
  "Sophie - Würzburg Und Freizeit", "Nadja - Garten Am Stadtrand",
  "Nicole - Probleme Mit Dem Bruder", "Andreas - Neuer Kollege Und Büroalltag",
  "Annika - Gemeinsamer Sommerurlaub", "Iris - Abschlussparty Organisieren",
  "Caroline - Gastschülerin Aus Marokko", "Vera - Arbeitsweg Und Neue Stelle",
  "Jennifer - Einladung Zur Hochzeit", "Andreas - Neue Wohnung Und Computer",
  "Thomas - Überraschungsausflug", "Tamara - Treffen Und Neuer Job",
  "Jan - Urlaub In Rom", "Viktor - Urlaub In Malta", "Anna - Katze Und Blumen",
  "Nora - Neue Wohnung Und Leute Kennenlernen", "Claudia - Zoobesuch Und Geburtstag",
  "Karla - Umzug Und Neue Arbeit", "Mara - Reise Und Neuer Freund",
  "Annika - Gemeinsamer Urlaub (Teil 2)", "Sonja - Musikfestival",
  "Rita - Hochzeit Und Neuigkeiten", "Anne - Laras Geburtstag",
  "Paul - Ausflug In Die Berge", "Jakob - Nachbarn Und Wohnung",
  "Emilia", "Tobias", "Naco", "Alicia", "Cora Und Alex", 
  "Miroslav", "Corinna", "Moritz"
];

const PRUEFUNG_EXAMS = [
  { title: "Teil 1", sub: "مطابقة النصوص والعناوين" },
  { title: "Teil 2", sub: "النصوص الطويلة" },
  { title: "Teil 3", sub: "الاعلانات والحالات" },
  { title: "Sprachbaustein 1", sub: "بناء الجملة" },
  { title: "Sprachbaustein 2", sub: "المفردات والقواعد" },
  { title: "امتحان كامل عشوائي", sub: "كل الأجزاء دفعة واحدة — Teil 1 · 2 · 3 · Sprachbaustein 1 · 2", isFull: true }
];

const LOCKED_HOREN_NAMES = [
  "Teil 2" // درس الهورن المقفول
];

// ================= 5. التحقق من السوبابيز =================
async function handleLessonClick(doc, title) {
  openLoadingModal(doc, title);

  if (!sb) {
    closeCustomModal(doc);
    openProModal(doc, title, getT('not_available'));
    return;
  }

  try {
    const savedUser = JSON.parse(localStorage.getItem('ep_user') || '{}');
    let hasAccess = false;

    if (savedUser && savedUser.id) {
      const { data: profile } = await sb.from('profiles').select('is_paid, trial_started_at').eq('id', savedUser.id).single();
      if (profile) {
        if (profile.is_paid) {
          hasAccess = true;
        } else if (profile.trial_started_at) {
          const start = new Date(profile.trial_started_at).getTime();
          const end = start + 48 * 60 * 60 * 1000; // 48 ساعة
          if (Date.now() < end) hasAccess = true;
        }
      }
    }

    // التحقق من وجود الدرس في السوبابيز
    const { data, error } = await sb.from('premium_lessons').select('*').eq('title', title).maybeSingle();
    
    closeCustomModal(doc);

    if (hasAccess) {
      // فتح الدرس (حتى لو كان وهمي، غادي يبان لللي عندو تجربة أو خالص)
      openFoundModal(doc, title);
    } else {
      openProModal(doc, title, getT('not_available'));
    }
  } catch (err) {
    closeCustomModal(doc);
    openProModal(doc, title, getT('not_in_db'));
  }
}

// ================= 6. دوال الحقن =================

// حقن دروس Lesen
function injectLesenLessons(doc) {
  const h1 = doc.querySelector('main h1');
  if (!h1 || !h1.textContent.includes('Lesen')) return;
  const mainDiv = doc.querySelector('main > div');
  if (!mainDiv) return;
  const level = h1.textContent.includes('B1') ? 'B1' : 'B2';
  if (level !== 'B1') return; 
  if (mainDiv.querySelector(`.injected-lesen`)) return;

  LOCKED_LESEN_NAMES.forEach(name => {
    const btn = doc.createElement('button');
    btn.className = 'card injected-lesen';
    btn.dataset.name = name; 
    btn.style = "width: 100%; text-align: right; display: block; color: var(--text); padding: 16px; border: 1.5px solid var(--line); margin-bottom: 12px; border-radius: 16px; background: var(--card); cursor: pointer; position: relative;";
    
    btn.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div class="de" style="font-weight: 900; font-size: 1.2em; color: var(--text);">${name}</div>
          <div style="display: flex; gap: 8px; margin-top: 8px; align-items: center; color: var(--muted); font-size: .9em;">
            <span class="chip" style="background: rgba(221,0,0,0.1); color: var(--red); padding: 2px 8px; border-radius: 6px; font-weight: 900;">${level}</span>
            <span>90 ${getT('min')}</span>
            <span style="color: var(--badc); font-weight: 900; display: flex; align-items: center; gap: 4px;">🔒 ${getT('locked')}</span>
            <span style="background: var(--gold); color: var(--ink); padding: 2px 8px; border-radius: 6px; font-weight: 900; font-size: 0.8em;">⭐ ${getT('pro')}</span>
          </div>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    `;
    mainDiv.appendChild(btn);
  });
}

// حقن دروس Schreiben
function injectSchreibenLessons(doc) {
  const h1 = doc.querySelector('main h1');
  if (!h1 || !h1.textContent.includes('Schreiben')) return;
  const mainDiv = doc.querySelector('main > div');
  if (!mainDiv) return;
  if (mainDiv.querySelector(`.injected-schreiben`)) return;

  const existingText = doc.body.innerText;

  LOCKED_SCHREIBEN_NAMES.forEach(name => {
    if (existingText.includes(name)) return; 
    const btn = doc.createElement('div');
    btn.className = 'card injected-schreiben';
    btn.dataset.name = name; 
    btn.style = "padding: 20px; margin-bottom: 16px; cursor: pointer; border: 1.5px solid var(--line); border-radius: 16px; background: var(--card);";
    btn.innerHTML = `
      <div class="de" style="font-weight: 900; font-size: 1.1em; margin-bottom: 12px; color: var(--text);">${name}</div>
      <div style="display: flex; gap: 8px; align-items: center;">
        <div style="background: rgba(34, 197, 94, 0.1); color: #22C55E; padding: 4px 12px; border-radius: 8px; font-size: 0.85em; font-weight: 900;">B1</div>
        <div style="color: var(--badc); font-weight: 900; display: flex; align-items: center; gap: 4px; font-size: 0.9em;">🔒 ${getT('locked')}</div>
        <div style="background: var(--gold); color: var(--ink); padding: 2px 8px; border-radius: 6px; font-weight: 900; font-size: 0.8em;">⭐ ${getT('pro')}</div>
      </div>
    `;
    mainDiv.appendChild(btn);
  });
}

// حقن دروس Prüfungen (الامتحانات)
function injectPruefungLessons(doc) {
  const activeNav = doc.querySelector('.nav button.on');
  if (!activeNav) return;
  const navText = activeNav.innerText || activeNav.textContent;
  if (!navText.includes('امتحان') && !navText.includes('Prüfung')) return;
  
  const mainDiv = doc.querySelector('main > div');
  if (!mainDiv) return;
  if (mainDiv.querySelector('.injected-pruefung')) return;

  // إخفاء النص الافتراضي "قريباً"
  const defaultCard = mainDiv.querySelector('.card');
  if (defaultCard) defaultCard.style.display = 'none';

  const container = doc.createElement('div');
  container.className = 'injected-pruefung';
  container.style = "padding-bottom: 80px;";

  container.innerHTML = `
    <h1 class="de" style="font-size: 2.6em; font-weight: 900; margin: 4px 0 14px;">Zufällige Prüfungen</h1>
    <div style="display: flex; justify-content: center; margin-bottom: 16px;">
      <div style="display: inline-flex; background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 4px;">
        <button class="tab on" style="padding: 8px 28px; font-size: 1.1em; border-radius: 12px; background: var(--ink); color: var(--gold); font-weight: 900; border: none;">B1</button>
        <button class="tab" style="padding: 8px 28px; font-size: 1.1em; color: var(--muted); font-weight: 900; border: none; background: transparent;">B2</button>
      </div>
    </div>
  `;

  const listContainer = doc.createElement('div');
  
  PRUEFUNG_EXAMS.forEach(exam => {
    const card = doc.createElement('div');
    card.className = 'card injected-pruefung-card';
    card.dataset.name = exam.isFull ? "امتحان كامل عشوائي" : "Prüfungsteil " + exam.title; 
    card.style = "padding: 20px; border: 1.5px solid var(--line); margin-bottom: 16px; border-radius: 16px; background: var(--card); cursor: pointer;";
    
    if (exam.isFull) {
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <div style="font-weight: 900; font-size: 1.2em; color: var(--text);">${exam.title}</div>
          <span style="background: var(--gold); color: var(--ink); padding: 2px 10px; border-radius: 6px; font-weight: 900; font-size: 0.8em;">${getT('pro')}</span>
        </div>
        <div style="color: var(--muted); font-size: 0.95em; margin-bottom: 16px; line-height: 1.5;">${exam.sub}</div>
        <button style="width: 100%; padding: 12px; border-radius: 10px; background: rgba(245,184,46,0.1); color: var(--gold); border: 1px solid var(--gold); font-weight: 900; cursor: pointer; pointer-events: none;">${getT('open_access')}</button>
      `;
    } else {
      card.innerHTML = `
        <div style="display: flex; gap: 8px; margin-bottom: 8px;">
          <span style="background: rgba(221,0,0,0.1); color: var(--red); padding: 2px 8px; border-radius: 6px; font-weight: 900; font-size: 0.8em;">B1</span>
          <span style="background: var(--gold); color: var(--ink); padding: 2px 8px; border-radius: 6px; font-weight: 900; font-size: 0.8em;">${getT('pro')}</span>
        </div>
        <div style="font-weight: 900; font-size: 1.2em; color: var(--text); margin-bottom: 4px;">${exam.title}</div>
        <div style="color: var(--muted); font-size: 0.95em; margin-bottom: 16px;">${exam.sub}</div>
        <button style="width: 100%; padding: 12px; border-radius: 10px; background: rgba(245,184,46,0.1); color: var(--gold); border: 1px solid var(--gold); font-weight: 900; cursor: pointer; pointer-events: none;">${getT('open_access')}</button>
      `;
    }
    listContainer.appendChild(card);
  });

  container.appendChild(listContainer);
  mainDiv.appendChild(container);
}

// حقن دروس Hören (الاستماع)
function injectHorenLessons(doc) {
  const h1 = doc.querySelector('main h1');
  if (!h1 || !h1.textContent.includes('Hören')) return;
  const mainDiv = doc.querySelector('main > div');
  if (!mainDiv) return;
  if (mainDiv.querySelector(`.injected-horen`)) return;

  LOCKED_HOREN_NAMES.forEach(name => {
    const btn = doc.createElement('div');
    btn.className = 'card injected-horen';
    btn.dataset.name = name; 
    btn.style = "padding: 20px; margin-bottom: 16px; cursor: pointer; border: 1.5px solid var(--line); border-radius: 16px; background: var(--card);";
    btn.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div class="de" style="font-weight: 900; font-size: 1.2em; color: var(--text);">${name}</div>
          <div style="display: flex; gap: 8px; margin-top: 8px; align-items: center; color: var(--muted); font-size: .9em;">
            <span class="chip" style="background: rgba(221,0,0,0.1); color: var(--red); padding: 2px 8px; border-radius: 6px; font-weight: 900;">B1</span>
            <span style="color: var(--badc); font-weight: 900; display: flex; align-items: center; gap: 4px;">🔒 ${getT('locked')}</span>
            <span style="background: var(--gold); color: var(--ink); padding: 2px 8px; border-radius: 6px; font-weight: 900; font-size: 0.8em;">⭐ ${getT('pro')}</span>
          </div>
        </div>
      </div>
    `;
    mainDiv.appendChild(btn);
  });
}

// ================= 7. النوافذ المنبثقة (Modals) =================
function closeCustomModal(doc) {
  const existing = doc.getElementById('custom-pro-modal');
  if (existing) existing.remove();
}

function openLoadingModal(doc, title) {
  closeCustomModal(doc);
  const overlay = doc.createElement('div');
  overlay.id = 'custom-pro-modal';
  overlay.style = "position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99999; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(4px); direction: rtl;";
  overlay.innerHTML = `
    <div style="background: var(--card); border: 1px solid var(--line); border-radius: 24px; padding: 24px; width: 100%; max-width: 440px; text-align: center; color: var(--text);">
      <h3 class="de" style="margin: 0 0 16px; font-size: 1.2em; font-weight: 900;">${title}</h3>
      <div style="font-size: 2em; margin-bottom: 12px; animation: spin 1s linear infinite;">⏳</div>
      <div style="font-weight: bold; color: var(--muted);">${getT('checking')}</div>
    </div>
  `;
  doc.body.appendChild(overlay);
}

function openFoundModal(doc, title) {
  closeCustomModal(doc);
  const overlay = doc.createElement('div');
  overlay.id = 'custom-pro-modal';
  overlay.style = "position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99999; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(4px); direction: rtl;";
  overlay.innerHTML = `
    <div style="background: var(--card); border: 1px solid var(--line); border-radius: 24px; padding: 24px; width: 100%; max-width: 440px; text-align: center; color: var(--text);">
      <div style="font-size: 3em; margin-bottom: 16px;">🎉</div>
      <h3 class="de" style="margin: 0 0 12px; font-size: 1.3em; font-weight: 900;">${title}</h3>
      <div style="font-weight: 900; color: var(--okc); font-size: 1.1em; margin-bottom: 8px;">${getT('found')}</div>
      <div style="color: var(--muted); font-size: 0.95em; margin-bottom: 20px;">${getT('found_desc')}</div>
      <button id="close-pro-modal" style="width: 100%; padding: 16px; border-radius: 14px; background: var(--card); color: var(--text); border: 1.5px solid var(--line); font-weight: 900; cursor: pointer;">${getT('close')}</button>
    </div>
  `;
  doc.body.appendChild(overlay);
  overlay.querySelector('#close-pro-modal').onclick = () => closeCustomModal(doc);
}

function openProModal(doc, title, msg) {
  closeCustomModal(doc);
  const overlay = doc.createElement('div');
  overlay.id = 'custom-pro-modal';
  overlay.style = "position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99999; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(4px); direction: rtl;";

  overlay.innerHTML = `
    <div style="background: var(--card); border: 1px solid var(--line); border-radius: 24px; padding: 24px; width: 100%; max-width: 440px; color: var(--text);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3 class="de" style="margin: 0; font-size: 1.2em; font-weight: 900;">${title}</h3>
        <button id="close-pro-modal" style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--line); background: var(--paper); cursor: pointer; color: var(--text);">✕</button>
      </div>
      <div style="padding: 24px; text-align: center; background: var(--paper); border-radius: 16px; border: 1.5px dashed var(--line); margin-bottom: 16px;">
        <div style="font-size: 3em; margin-bottom: 12px;">🔒</div>
        <div style="font-weight: 900; font-size: 1.2em; color: var(--text); margin-bottom: 8px;">${getT('locked')}</div>
        <div style="color: var(--muted); font-size: 0.95em;">${msg}</div>
      </div>
      <button onclick="window.open('${WA_LINK}', '_blank')" style="width: 100%; padding: 16px; border-radius: 14px; background: linear-gradient(135deg, var(--gold), #F5B82E); color: var(--ink); font-weight: 900; border: none; font-size: 1.1em; cursor: pointer; box-shadow: 0 4px 15px rgba(245,184,46,0.3); margin-top: 16px;">
        ${getT('subscribe')}
      </button>
    </div>
  `;
  doc.body.appendChild(overlay);
  overlay.querySelector('#close-pro-modal').onclick = () => closeCustomModal(doc);
}

// ================= 8. التشغيل التلقائي =================
window.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('app-frame');
  if (iframe) {
    const checkIframe = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc && doc.body) {
          
          // مراقبة الكليك (Event Delegation) باش يخدم 100%
          if (!doc.body.hasAttribute('data-listener-added')) {
            doc.body.setAttribute('data-listener-added', 'true');
            doc.body.addEventListener('click', (e) => {
              const btn = e.target.closest('.injected-lesen, .injected-schreiben, .injected-pruefung-card, .injected-horen');
              if (btn && btn.dataset.name) {
                handleLessonClick(doc, btn.dataset.name);
              }
            });
          }

          // مراقبة تغييرات الصفحة (React Router)
          const observer = new MutationObserver(() => {
            injectLesenLessons(doc);
            injectSchreibenLessons(doc);
            injectPruefungLessons(doc);
            injectHorenLessons(doc);
          });
          observer.observe(doc.body, { childList: true, subtree: true });
          
          // محاولة أولية
          injectLesenLessons(doc);
          injectSchreibenLessons(doc);
          injectPruefungLessons(doc);
          injectHorenLessons(doc);
        } else {
          setTimeout(checkIframe, 100);
        }
      } catch (e) {
        console.error("خطأ فـ الوصول للـ iframe:", e);
      }
    };
    iframe.addEventListener('load', checkIframe);
  }
});
