// ==========================================
// ملف إضافة الدروس المقفولة (Pro) + ربط Supabase
// النسخة النهائية: حل مشكل الكليك 100% + لغة مرنة
// ==========================================

// 1. إعدادات Supabase
const supabaseUrl = 'https://ldatleskngsvoxwbiqtd.supabase.co';
const supabaseKey = 'sb_publishable_6UXiEWOS8YkGZTiT2jQRlA_K7HgONtL';
const sb = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

// 2. الترجمات (اللغة المرنة)
const UI_TEXTS = {
  ar: { locked: "مقفول", pro: "Pro", subscribe: "اشترك الآن", checking: "جاري التحقق من قاعدة البيانات...", found: "تم العثور على الدرس!", found_desc: "الدرس موجود في قاعدة البيانات وواجد.", not_available: "هذا المحتوى غير متوفر حالياً. يرجى الترقية إلى Pro.", not_in_db: "هذا المحتوى غير متوفر حالياً.", close: "إغلاق", min: "دقيقة" },
  ma: { locked: "مقفول", pro: "Pro", subscribe: "اشترك دابا", checking: "كنتحققو من الداتا...", found: "لقينا الدرس!", found_desc: "الدرس موجود فقاعدة البيانات وواجد.", not_available: "هاد المحتوى مازال ماوصلش. اشترك فـ Pro.", not_in_db: "هاد المحتوى ماكاينش.", close: "سد", min: "دقيقة" },
  en: { locked: "Locked", pro: "Pro", subscribe: "Subscribe Now", checking: "Checking database...", found: "Lesson found!", found_desc: "The lesson is ready in the database.", not_available: "Content unavailable. Please upgrade to Pro.", not_in_db: "This content does not exist.", close: "Close", min: "Min" },
  fr: { locked: "Verrouillé", pro: "Pro", subscribe: "S'abonner", checking: "Vérification...", found: "Leçon trouvée!", found_desc: "La leçon est prête.", not_available: "Contenu indisponible. Passez à Pro.", not_in_db: "Ce contenu n'existe pas.", close: "Fermer", min: "Min" },
  hi: { locked: "लॉक", pro: "Pro", subscribe: "अभी सब्सक्राइब करें", checking: "डेटाबेस जाँच रहा है...", found: "पाठ मिल गया!", found_desc: "पाठ तैयार है।", not_available: "सामग्री अनुपलब्ध है। प्रो में अपग्रेड करें।", not_in_db: "यह सामग्री नहीं है।", close: "बंद करें", min: "मिनट" },
  id: { locked: "Terkunci", pro: "Pro", subscribe: "Berlangganan", checking: "Memeriksa...", found: "Pelajaran ditemukan!", found_desc: "Pelajaran sudah siap.", not_available: "Konten tidak tersedia. Harap tingkatkan ke Pro.", not_in_db: "Konten tidak ada.", close: "Tutup", min: "Menit" },
  tl: { locked: "Naka-lock", pro: "Pro", subscribe: "Mag-subscribe", checking: "Sinusuri...", found: "Natagpuan ang aralin!", found_desc: "Handa na ang aralin.", not_available: "Hindi available. Mag-upgrade sa Pro.", not_in_db: "Wala ang nilalaman.", close: "Isara", min: "Min" },
  fa: { locked: "قفل شده", pro: "Pro", subscribe: "همین حالا مشترک شوید", checking: "در حال بررسی...", found: "درس پیدا شد!", found_desc: "درس آماده است.", not_available: "محتوا در دسترس نیست. ارتقا به پرو.", not_in_db: "محتوا وجود ندارد.", close: "بستن", min: "دقیقه" }
};

// دالة جلب الترجمة حسب لغة التطبيق
function getT(key) {
  const lang = localStorage.getItem('ep_lang') || 'ar';
  const dict = UI_TEXTS[lang] || UI_TEXTS['en'] || UI_TEXTS['ar'];
  return dict[key] || UI_TEXTS['ar'][key] || key;
}

// 3. لوائح الدروس
const LOCKED_LESEN_NAMES = [
  "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", 
  "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", 
  "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", 
  "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2", "Liebe Olivia"
];

const LOCKED_SCHREIBEN_NAMES = [
  "Urlaub Im Schwarzwald - Antwort An Petra", "Eva - Traumberuf Und Neuigkeiten",
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

// ================= دالة التحقق من السوبابيز =================
async function handleLessonClick(doc, title) {
  openLoadingModal(doc, title);

  if (!sb) {
    closeCustomModal(doc);
    openProModal(doc, title, getT('not_available'));
    return;
  }

  try {
    // استعملنا maybeSingle باش ما يطلعش خطأ يلا ما لقاش الدرس
    const { data, error } = await sb.from('premium_lessons').select('*').eq('title', title).maybeSingle();
    
    closeCustomModal(doc);

    if (data) {
      openFoundModal(doc, title);
    } else {
      openProModal(doc, title, getT('not_available'));
    }
  } catch (err) {
    closeCustomModal(doc);
    openProModal(doc, title, getT('not_in_db'));
  }
}

// ================= دوال الحقن =================
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

function injectPruefungLessons(doc) {
  const activeNav = doc.querySelector('.nav button.on');
  if (!activeNav) return;
  const navText = activeNav.innerText || activeNav.textContent;
  if (!navText.includes('امتحان') && !navText.includes('Prüfung')) return;
  const mainDiv = doc.querySelector('main > div');
  if (!mainDiv) return;
  if (mainDiv.querySelector('.injected-pruefung')) return;

  const defaultCard = mainDiv.querySelector('.card');
  if (defaultCard) defaultCard.style.display = 'none';

  const container = doc.createElement('div');
  container.className = 'injected-pruefung';
  container.style = "padding-bottom: 80px;";

  container.innerHTML = `
    <h1 class="de" style="font-size: 2.6em; font-weight: 900; margin: 4px 0 14px;">Zufällige Prüfungen</h1>
    <div style="display: flex; justify-content: center; margin-bottom: 16px;">
      <div style="display: inline-flex; background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 4px;">
        <button class="tab on" style="padding: 8px 28px; font-size: 1.1em; border-radius: 12px; background: var(--ink); color: var(--gold); font-weight: 900;">B1</button>
        <button class="tab" style="padding: 8px 28px; font-size: 1.1em; color: var(--muted); font-weight: 900;">B2</button>
      </div>
    </div>
  `;

  const listContainer = doc.createElement('div');
  
  PRUEFUNG_EXAMS.forEach(exam => {
    const card = doc.createElement('div');
    // هنا درنا injected-pruefung-card باش نقدرو نمسكو الكليك ديالو
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
        <button style="width: 100%; padding: 12px; border-radius: 10px; background: rgba(245,184,46,0.1); color: var(--gold); border: 1px solid var(--gold); font-weight: 900; cursor: pointer; pointer-events: none;">${getT('subscribe')}</button>
      `;
    } else {
      card.innerHTML = `
        <div style="display: flex; gap: 8px; margin-bottom: 8px;">
          <span style="background: rgba(221,0,0,0.1); color: var(--red); padding: 2px 8px; border-radius: 6px; font-weight: 900; font-size: 0.8em;">B1</span>
          <span style="background: var(--gold); color: var(--ink); padding: 2px 8px; border-radius: 6px; font-weight: 900; font-size: 0.8em;">${getT('pro')}</span>
        </div>
        <div style="font-weight: 900; font-size: 1.2em; color: var(--text); margin-bottom: 4px;">${exam.title}</div>
        <div style="color: var(--muted); font-size: 0.95em; margin-bottom: 16px;">${exam.sub}</div>
        <button style="width: 100%; padding: 12px; border-radius: 10px; background: rgba(245,184,46,0.1); color: var(--gold); border: 1px solid var(--gold); font-weight: 900; cursor: pointer; pointer-events: none;">${getT('subscribe')}</button>
      `;
    }
    listContainer.appendChild(card);
  });

  container.appendChild(listContainer);
  mainDiv.appendChild(container);
}

// ================= النوافذ المنبثقة =================
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
      <button style="margin-top: 16px; width: 100%; padding: 16px; border-radius: 14px; background: linear-gradient(135deg, var(--gold), #F5B82E); color: var(--ink); font-weight: 900; border: none; font-size: 1.1em; cursor: pointer;">${getT('subscribe')}</button>
    </div>
  `;
  doc.body.appendChild(overlay);
  overlay.querySelector('#close-pro-modal').onclick = () => closeCustomModal(doc);
}

// ================= التشغيل التلقائي =================
window.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('app-frame');
  if (iframe) {
    const checkIframe = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc && doc.body) {
          
          // هادي هي اللي كتحل مشكل الكليك 100% (Event Delegation)
          if (!doc.body.hasAttribute('data-listener-added')) {
            doc.body.setAttribute('data-listener-added', 'true');
            doc.body.addEventListener('click', (e) => {
              const btn = e.target.closest('.injected-lesen, .injected-schreiben, .injected-pruefung-card');
              if (btn && btn.dataset.name) {
                handleLessonClick(doc, btn.dataset.name);
              }
            });
          }

          const observer = new MutationObserver(() => {
            injectLesenLessons(doc);
            injectSchreibenLessons(doc);
            injectPruefungLessons(doc);
          });
          observer.observe(doc.body, { childList: true, subtree: true });
          
          injectLesenLessons(doc);
          injectSchreibenLessons(doc);
          injectPruefungLessons(doc);
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
