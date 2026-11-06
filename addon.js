(function() {
  const WA_NUMBER = "212680193427"; 
  const WA_MSG = "مرحباً، بغيت نرقّي حسابي لـ Pro باش نحل جميع الدروس فـ EchtPrüfung";
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

  const supabaseUrl = 'https://ldatleskngsvoxwbiqtd.supabase.co';
  const supabaseKey = 'sb_publishable_6UXiEWOS8YkGZTiT2jQRlA_K7HgONtL';
  const sb = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

  const getT = (key) => {
    const lang = localStorage.getItem('ep_lang') || 'ar';
    const dict = {
      ar: { locked: "مقفول", pro: "Pro", subscribe: "اشترك الآن عبر واتساب", checking: "جاري التحقق...", found: "تم العثور على الدرس!", found_desc: "الدرس موجود في قاعدة البيانات.", not_available: "المحتوى غير متوفر. يرجى الترقية.", not_in_db: "المحتوى غير موجود.", close: "إغلاق", min: "دقيقة", open_access: "فتح الوصول" },
      ma: { locked: "مقفول", pro: "Pro", subscribe: "اشترك دابا فواتساب", checking: "كنتحققو...", found: "لقينا الدرس!", found_desc: "الدرس واجد.", not_available: "المحتوى ماكاينش. اشترك.", not_in_db: "ماكاينش.", close: "سد", min: "دقيقة", open_access: "فتح الوصول" },
      en: { locked: "Locked", pro: "Pro", subscribe: "Subscribe via WhatsApp", checking: "Checking...", found: "Lesson found!", found_desc: "Lesson is ready.", not_available: "Content unavailable. Upgrade.", not_in_db: "Not found.", close: "Close", min: "Min", open_access: "Open Access" }
    };
    return (dict[lang] || dict['en'])[key] || key;
  };

  // ✅ هيكل الأسماء حسب كل قسم (Tabs)
  const LESSONS_BY_TEIL = {
    "Teile 1": [
      "Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", 
      "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", 
      "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", 
      "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", 
      "Mara", "Miroslav 2"
    ],
    "Teile 2": [
      "Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", 
      "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", 
      "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", 
      "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", 
      "Mara", "Miroslav 2"
    ],
    "Teile 3": [
      "Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", 
      "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", 
      "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", 
      "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", 
      "Mara", "Miroslav 2"
    ],
    "Sprach 1": [
      "Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", 
      "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", 
      "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", 
      "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", 
      "Mara", "Liebe Olivia."
    ],
    "Sprach 2": [
      "Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", 
      "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", 
      "Viktor", "Moritz", "Petra", "Corina", "Tamara / Jakob", "Nicole", 
      "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", 
      "Mara", "Miroslav 2."
    ]
  };

  async function handleLessonClick(title, teil) {
    openLoadingModal(title);
    if (!sb) {
      closeCustomModal();
      openProModal(title, getT('not_available'));
      return;
    }
    try {
      const savedUser = JSON.parse(localStorage.getItem('ep_user') || '{}');
      let hasAccess = false;
      if (savedUser && savedUser.id) {
        const { data: profile } = await sb.from('profiles').select('is_paid, trial_started_at').eq('id', savedUser.id).single();
        if (profile) {
          if (profile.is_paid) hasAccess = true;
          else if (profile.trial_started_at) {
            const start = new Date(profile.trial_started_at).getTime();
            const end = start + 48 * 60 * 60 * 1000;
            if (Date.now() < end) hasAccess = true;
          }
        }
      }
      closeCustomModal();
      
      // هاد الجزء غادي نطوروه من بعد باش يفتح الدرس الحقيقي من سوبابيز
      if (hasAccess) {
        openFoundModal(title, teil); 
      } else {
        openProModal(title, getT('not_available'));
      }
    } catch (err) {
      closeCustomModal();
      openProModal(title, getT('not_in_db'));
    }
  }

  function createCard(name, teil) {
    const btn = document.createElement('div');
    btn.className = 'card injected-item';
    btn.dataset.name = name;
    btn.dataset.teil = teil; // تخزين القسم (مثلاً Teile 2)
    btn.style = "padding: 20px; margin-bottom: 16px; cursor: pointer; border: 1px solid var(--line); border-radius: 20px; background: var(--card); box-shadow: 0 8px 32px rgba(0,0,0,0.04);";
    
    // شكل البطاقة
    btn.innerHTML = `
      <div class="de" style="font-weight: 900; font-size: 1.1em; margin-bottom: 12px; color: var(--text);">${name}</div>
      <div style="display: flex; gap: 8px; align-items: center;">
        <div style="background: rgba(34, 197, 94, 0.1); color: #22C55E; padding: 4px 12px; border-radius: 8px; font-size: 0.85em; font-weight: 900;">B1</div>
        <div style="color: var(--badc); font-weight: 900; display: flex; align-items: center; gap: 4px; font-size: 0.9em;">🔒 ${getT('locked')}</div>
        <div style="background: var(--gold); color: var(--ink); padding: 2px 8px; border-radius: 6px; font-weight: 900; font-size: 0.8em;">⭐ ${getT('pro')}</div>
      </div>
    `;
    return btn;
  }

  // ✅ دالة الحقن الذكية (تكتشف القسم النشط وتحط الأسماء ديالو)
  function injectLessons() {
    const main = document.querySelector('main');
    if (!main) return;

    // 1. نتأكدو واش حنا فقسم القراية (Lesen)
    const activeNav = document.querySelector('.nav button.on');
    const navText = activeNav ? (activeNav.innerText || activeNav.textContent) : '';
    if (!navText.includes('قراية') && !navText.includes('Lesen')) {
      const old = main.querySelector('.injected-container');
      if (old) old.remove();
      return;
    }

    // 2. نلقاو شكون القسم النشط من الأزرار (Teile 1, Teile 2...)
    let activeTeil = null;
    // كنقلبو على الأزرار اللي فيها Teile ou Sprach
    const buttons = Array.from(main.querySelectorAll('button, div'));
    const activeTab = buttons.find(b => {
      const text = b.innerText || b.textContent;
      return (text.includes('Teile') || text.includes('Sprach')) && b.style.color === 'rgb(255, 255, 255)' || b.style.backgroundColor !== '';
    });

    // يلا لقينا القسم النشط
    if (activeTab) {
      const text = activeTab.innerText || activeTab.textContent;
      if (text.includes('Teile 1')) activeTeil = "Teile 1";
      else if (text.includes('Teile 2')) activeTeil = "Teile 2";
      else if (text.includes('Teile 3')) activeTeil = "Teile 3";
      else if (text.includes('Sprach 1')) activeTeil = "Sprach 1";
      else if (text.includes('Sprach 2')) activeTeil = "Sprach 2";
    }

    // يلا مالقيناش قسم محدد، كنخدمو بالقسم الافتراضي (Teile 1)
    if (!activeTeil) activeTeil = "Teile 1";

    // 3. نتأكدو واش درنا الحقن لهاد القسم من قبل
    const existingContainer = main.querySelector('.injected-container');
    if (existingContainer && existingContainer.dataset.teil === activeTeil) {
      return; // راه محطوط، ماغاديش نعاودو
    }

    // 4. نمسحو القديم ونحطو الجديد
    if (existingContainer) existingContainer.remove();

    const container = document.createElement('div');
    container.className = 'injected-container';
    container.dataset.teil = activeTeil;
    container.style = "margin-top: 20px; display: block; width: 100%;";

    const lessons = LESSONS_BY_TEIL[activeTeil] || [];
    lessons.forEach(name => container.appendChild(createCard(name, activeTeil)));

    main.appendChild(container);
  }

  // ✅ استخدام MutationObserver بدلاً من setInterval (احترافي وخفيف)
  const observer = new MutationObserver(() => {
    injectLessons();
  });

  // نبداو المراقبة فاش كيتحمل الصفحة
  window.addEventListener('load', () => {
    observer.observe(document.body, { childList: true, subtree: true });
    injectLessons(); // حقن أولي
  });

  // ====== النوافذ المنبثقة ======
  function closeCustomModal() { const existing = document.getElementById('custom-pro-modal'); if (existing) existing.remove(); }
  
  function openLoadingModal(title) {
    closeCustomModal();
    const overlay = document.createElement('div'); overlay.id = 'custom-pro-modal'; overlay.style = "position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99999; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(4px); direction: rtl;";
    overlay.innerHTML = `<div style="background: var(--card); border: 1px solid var(--line); border-radius: 24px; padding: 24px; width: 100%; max-width: 440px; text-align: center; color: var(--text);"><h3 class="de" style="margin: 0 0 16px; font-size: 1.2em; font-weight: 900;">${title}</h3><div style="font-size: 2em; margin-bottom: 12px; animation: spin 1s linear infinite;">⏳</div><div style="font-weight: bold; color: var(--muted);">${getT('checking')}</div></div>`;
    document.body.appendChild(overlay);
  }

  function openFoundModal(title, teil) {
    closeCustomModal();
    const overlay = document.createElement('div'); overlay.id = 'custom-pro-modal'; overlay.style = "position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99999; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(4px); direction: rtl;";
    overlay.innerHTML = `<div style="background: var(--card); border: 1px solid var(--line); border-radius: 24px; padding: 24px; width: 100%; max-width: 440px; text-align: center; color: var(--text);"><div style="font-size: 3em; margin-bottom: 16px;">🎉</div><h3 class="de" style="margin: 0 0 12px; font-size: 1.3em; font-weight: 900;">${title}</h3><div style="font-weight: 900; color: var(--okc); font-size: 1.1em; margin-bottom: 8px;">${getT('found')} (${teil})</div><div style="color: var(--muted); font-size: 0.95em; margin-bottom: 20px;">${getT('found_desc')}</div><button id="close-pro-modal" style="width: 100%; padding: 16px; border-radius: 14px; background: var(--card); color: var(--text); border: 1.5px solid var(--line); font-weight: 900; cursor: pointer;">${getT('close')}</button></div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('#close-pro-modal').onclick = () => closeCustomModal();
  }

  function openProModal(title, msg) {
    closeCustomModal();
    const overlay = document.createElement('div'); overlay.id = 'custom-pro-modal'; overlay.style = "position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99999; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(4px); direction: rtl;";
    overlay.innerHTML = `<div style="background: var(--card); border: 1px solid var(--line); border-radius: 24px; padding: 24px; width: 100%; max-width: 440px; color: var(--text);"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;"><h3 class="de" style="margin: 0; font-size: 1.2em; font-weight: 900;">${title}</h3><button id="close-pro-modal" style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--line); background: var(--paper); cursor: pointer; color: var(--text);">✕</button></div><div style="padding: 24px; text-align: center; background: var(--paper); border-radius: 16px; border: 1.5px dashed var(--line); margin-bottom: 16px;"><div style="font-size: 3em; margin-bottom: 12px;">🔒</div><div style="font-weight: 900; font-size: 1.2em; color: var(--text); margin-bottom: 8px;">${getT('locked')}</div><div style="color: var(--muted); font-size: 0.95em;">${msg}</div></div><button onclick="window.open('${WA_LINK}', '_blank')" style="width: 100%; padding: 16px; border-radius: 14px; background: linear-gradient(135deg, var(--gold), #F5B82E); color: var(--ink); font-weight: 900; border: none; font-size: 1.1em; cursor: pointer; box-shadow: 0 4px 15px rgba(245,184,46,0.3); margin-top: 16px;">${getT('subscribe')}</button></div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('#close-pro-modal').onclick = () => closeCustomModal();
  }

  // كليك على الكارطات
  if (!document.body.hasAttribute('data-listener-added')) {
    document.body.setAttribute('data-listener-added', 'true');
    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.injected-item');
      if (btn && btn.dataset.name) {
        handleLessonClick(btn.dataset.name, btn.dataset.teil);
      }
    });
  }
})();
