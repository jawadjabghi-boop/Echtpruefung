// ==========================================
// app.js - الجزء الأول (Part 1) - النسخة النهائية 100%
// ==========================================

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// === 1. CONFIG & CONSTANTS ===
const WA = "212680193427";
const wa = (msg) => window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank");

const SUPABASE_URL = 'https://ldatleskngsvoxwbiqtd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_6UXiEWOS8YkGZTiT2jQRlA_K7HgONtL';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const { 
  UI_TEXTS, LANGS, SCHREIBEN_DATA, PRUEFUNG_DATA, EXAMS, HOREN_EXAMS,
  B2_SCHREIBEN_DATA, B2_PRUEFUNG_DATA, B2_EXAMS, B2_HOREN_EXAMS, B2_PLACEHOLDER_LESSONS, B2_SPRECHEN_DATA,
  B1_SPRECHEN_DATA
} = window;

// === 2. TRANSLATION & HELPERS ===
const TRANS_CACHE = {};

const t = (key, lang) => UI_TEXTS?.[lang]?.[key] || UI_TEXTS?.en?.[key] || key;
const normalize = (s) => (s || "").toString().toLowerCase().replace(/[\s\-_]+/g, '');

function AutoTrans({ text, lang }) {
  const targetLang = lang === 'ma' ? 'ar' : lang;
  const cacheKey = `${targetLang}_${text}`;
  const [result, setResult] = useState(() => TRANS_CACHE[cacheKey] || text);

  useEffect(() => {
    if (!text || targetLang === 'de') { setResult(text); return; }
    if (TRANS_CACHE[cacheKey]) { setResult(TRANS_CACHE[cacheKey]); return; }

    const ctrl = new AbortController();
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`, { signal: ctrl.signal })
      .then(r => r.json())
      .then(data => {
        if (data?.[0]) {
          const res = data[0].map(item => item[0]).join('');
          TRANS_CACHE[cacheKey] = res;
          setResult(res);
        }
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, [text, targetLang, cacheKey]);

  return <span>{result}</span>;
}

function SmartTrans({ obj, lang }) {
  if (!obj) return null;
  if (typeof obj === 'string') return <AutoTrans text={obj} lang={lang} />;
  const txt = obj.de || obj.en || obj.q || obj.ar || "";
  return <AutoTrans text={txt} lang={lang} />;
}

// === 3. PLACEHOLDERS & MODIFIED LESSONS ===
const PLACEHOLDER_LESSONS = {
  "Lesen": {
    "Teile 1": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2"],
    "Teile 2": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2"],
    "Teile 3": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2"],
    "Sprach 1": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Liebe Olivia."],
    "Sprach 2": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Petra", "Corina", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2."]
  },
  "Hören": {
    "Teile 1": [],
    "Teile 2": [],
    "Teile 3": []
  },
  "Schreiben": [
    "Urlaub Im Schwarzwald - Antwort An Petra", "Eva - Traumberuf Und Neuigkeiten", 
    "Sophie - Würzburg", "Nadja - Garten", "Nicole - Probleme", "Andreas - Neuer Kollege", 
    "Annika - Sommerurlaub", "Iris - Abschlussparty", "Caroline - Gastschülerin", "Vera - Arbeitsweg", 
    "Jennifer - Einladung", "Andreas - Neue Wohnung", "Thomas - Überraschungsausflug", 
    "Tamara - Treffen", "Jan - Urlaub", "Viktor - Urlaub", "Anna - Katze", 
    "Nora - Neue Wohnung", "Claudia - Zoobesuch", "Karla - Umzug", "Mara - Reise", 
    "Annika - Urlaub 2", "Sonja - Musikfestival", "Rita - Hochzeit", "Anne - Geburtstag", 
    "Paul - Ausflug", "Jakob - Nachbarn"
  ],
  "Sprechen": { "Teile 1": [], "Teile 2": [], "Teile 3": [] }
};

const FREE_MODIFIED_LESSONS = [
  {
    id: "rita-t1-mod", title: "Rita", sub: "Teile 1", level: "B1", type: "headings", desc: "المعدل",
    options: [
      { k: "a", de: "Schweizer sollen gesunder leben" }, { k: "b", de: "Neu im Trend: Jung und Gesund - mit dem Schokolade" },
      { k: "c", de: "Heiraten kann zu mehr Kilos führen – das zeigt eine Studie" }, { k: "d", de: "Japanische Studie: Vielschläfer leben länger" },
      { k: "e", de: "Die Mehrheit der Schweizer treibt aktiv Sport" }, { k: "f", de: "Statistik: Unverheiratete haben oft ein paar Kilos zu viel" },
      { k: "g", de: "Teures Essen für mehr Jugend und Schönheit" }, { k: "h", de: "USA: Nachfrage nach freuen Lebensmitteln geht zurück" },
      { k: "i", de: "Schokolade essen - jung bleiben" }, { k: "j", de: "Weniger schlafen - länger leben" }
    ],
    items: [
      { n: 1, c: "b", de: "Der Schokolade-Boom zeigt sich hierzulande nicht nur im hohen Verbrauch..." },
      { n: 2, c: "c", de: "Frisch verheiratete Paare nehmen oft schon in den Flitterwochen einige Kilos zu..." },
      { n: 3, c: "j", de: "Wer acht Stunden und länger schläft, hat eine deutlich kürzere Lebenserwartung..." },
      { n: 4, c: "a", de: "Nach dem Motto beschwingt und bewegt starten die Schweizer Gesundheitsbehörden..." },
      { n: 5, c: "g", de: "Du bist,was du isst hat als Slogan ausgedient. Heute muss es heißen: Gut aussehen..." }
    ]
  },
  {
    id: "caroline-t1-mod", title: "Caroline", sub: "Teile 1", level: "B1", type: "headings", desc: "المعدل",
    options: [
      { k: "a", de: "Familienbildung Schwerpunkt Beruf und Familie" }, { k: "b", de: "Demonstration gegen Fluglärm" },
      { k: "c", de: "Flughafen Frankfurt wird 10 Jahre" }, { k: "d", de: "Flughafen Frankfurt beliebter Veranstaltungsort" },
      { k: "e", de: "Experten gegen Vergrößerung des Flughafens" }, { k: "f", de: "Info über den Flughafen und Arbeitsplätze" },
      { k: "g", de: "Neue Kurse: Spiele für Mütter und Kinder" }, { k: "h", de: "Umwelt und Flughafen: Ein Informationsabend der Bürger" },
      { k: "i", de: "Neue Kurse für Kinder" }, { k: "j", de: "Neue Kurse: Museumsführung für junge Väter" }
    ],
    items: [
      { n: 1, c: "h", de: "Der Frankfurter Flughafen wird weiter ausgebaut..." },
      { n: 2, c: "d", de: "Der Frankfurter Flughafen erfreut sich bei vielen Firmen als beliebter Ort..." },
      { n: 3, c: "f", de: "Eine Bürgergruppe mit dem Namen Südliches Frankfurt lädt..." },
      { n: 4, c: "a", de: "Das neue Halbjahresprogramm der Evangelischen Familienbildungsstätte..." },
      { n: 5, c: "i", de: "Die Volkshochschule Dornbirn bietet in den kommenden Wochen neue Kurse..." }
    ]
  }
];

// === 4. CORE LESSON LOGIC ===
const getLocalData = (level, section, title, sub) => {
  const normTitle = normalize(title);
  let pool = [];
  if (section === "Lesen") pool = level === "B2" ? (B2_EXAMS || []) : (EXAMS || []);
  if (section === "Hören") pool = level === "B2" ? (B2_HOREN_EXAMS || []) : (HOREN_EXAMS || []);
  if (section === "Schreiben") pool = level === "B2" ? (B2_SCHREIBEN_DATA || []) : (SCHREIBEN_DATA || []);
  if (section === "Sprechen") pool = level === "B2" ? (B2_SPRECHEN_DATA || []) : (B1_SPRECHEN_DATA || []);

  let matches = pool.filter(e => normalize(e.title) === normTitle);
  if (sub) matches = matches.filter(e => e.sub === sub);
  
  if (level === "B1" && section === "Lesen" && sub === "Teile 1") {
      const mods = FREE_MODIFIED_LESSONS.filter(m => normalize(m.title) === normTitle && m.sub === sub);
      matches = [...matches, ...mods];
  }
  return matches;
};

// === 5. ICONS & LOGO ===
const Icon = {
  Home: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Book: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  Headphones: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  Edit: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>,
  Mic: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>,
  Grad: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Moon: ({ c = "currentColor", s = 20 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  Sun: ({ c = "currentColor", s = 20 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>,
  Gear: ({ c = "currentColor", s = 20 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  Play: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M8 5v14l11-7z"/></svg>,
  Pause: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><rect x="6" y="6" width="12" height="12" rx="2"/></svg>,
  Check: ({ c = "currentColor", s = 20 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Left: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>,
  Right: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>,
  Clock: ({ c = "currentColor", s = 16 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Eye: ({ c = "currentColor", s = 20 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  X: ({ c = "currentColor", s = 20 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Lock: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  Rocket: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
  Bell: ({ c = "currentColor", s = 24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  Translate: ({ c = "currentColor", s = 20 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h12M9 3v2c0 4.418-2.686 8-6 8m0-8h12m-6 0v2c0 4.418 2.686 8 6 8m-4-2l-4 8m2-4h4m-2 0l2 4"/></svg>
};

const LogoImage = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0F172A"/><stop offset="100%" stopColor="#1E293B"/></linearGradient>
      <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#14B8A6"/><stop offset="100%" stopColor="#0D9488"/></linearGradient>
    </defs>
    <rect width="100" height="100" rx="24" fill="url(#lg1)"/>
    <rect x="1" y="1" width="98" height="98" rx="23" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none"/>
    <rect x="18" y="28" width="36" height="10" rx="4" fill="#0D9488"/>
    <rect x="18" y="44" width="36" height="10" rx="4" fill="#BE123C"/>
    <rect x="18" y="60" width="36" height="10" rx="4" fill="url(#lg2)"/>
    <path d="M54 70V30h16c14 0 14 22 0 22H54" stroke="url(#lg2)" strokeWidth="9" strokeLinecap="round" fill="none"/>
    <circle cx="80" cy="80" r="5" fill="#D97706"/>
  </svg>
);

// === 6. SPLASH, LANG, AUTH ===
function SplashScreen() { return <div className="splash-screen"><div className="splash-logo"><LogoImage size={180} /></div><h1 style={{ fontSize: "2.5em", fontWeight: 900, marginTop: 20 }}>EchtPrüfung</h1></div>; }

function LanguageScreen({ onSelect }) { 
  return (
    <div className="auth-screen">
      <div className="auth-card">
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <LogoImage size={80} />
          <h2 style={{ marginTop: 16, fontWeight: 900, fontSize: "1.5em" }}><AutoTrans text="اختر لغتك" lang="en" /></h2>
        </div>
        <div className="lang-grid">
          {LANGS.map(l => (
            <button key={l.c} onClick={() => onSelect(l.c)} className="lang-btn">
              <span style={{ fontSize: "1.6em" }}>{l.f}</span>
              <span style={{ fontSize: "0.95em", fontWeight: 800 }}>{l.n}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  ); 
}

function AuthScreen({ userLang, onAuth, onGuest }) {
  const [uniqueName, setUniqueName] = useState(""); const [uniqueCode, setUniqueCode] = useState(""); const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => { e.preventDefault(); if (!uniqueName.trim() || !uniqueCode.trim()) return; setLoading(true); try { await onAuth(uniqueName.trim(), uniqueCode.trim()); } finally { setLoading(false); } };
  return (
    <div className="auth-screen">
      <div className="auth-card">
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <LogoImage size={80} />
          <h2 style={{ marginTop: 16, fontWeight: 900, fontSize: "1.5em" }}><AutoTrans text="مرحبا بيك" lang={userLang} /></h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input className="auth-input" placeholder={t("name", userLang)} value={uniqueName} onChange={e => setUniqueName(e.target.value)} required />
          <input className="auth-input" placeholder={t("id_placeholder", userLang)} type="password" value={uniqueCode} onChange={e => setUniqueCode(e.target.value)} required />
          <button type="submit" className="auth-btn" disabled={loading}>{loading ? "..." : <AutoTrans text="تسجيل الدخول" lang={userLang} />}</button>
        </form>
        <div style={{ textAlign: "center", margin: "20px 0", color: "var(--muted)", fontSize: "0.9em" }}><AutoTrans text="أو" lang={userLang} /></div>
        <button className="auth-btn guest" onClick={onGuest}><Icon.Home c="var(--ink)" /> <AutoTrans text="دخول كزائر" lang={userLang} /></button>
      </div>
    </div>
  );
}

// === 7. HOREN CARD (FULL & COMPLETE) ===
function HorenCard({ exam, userLang, showTranslation, isB2, user }) {
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [audioTime, setAudioTime] = useState(0);
  const audioInterval = useRef(null);
  const pts = 5; const total = exam.items.length * pts;
  const score = exam.items.filter(it => ans[it.n] === it.c).length * pts;
  const themeColor = isB2 ? "#0D9488" : "#8B5CF6";

  useEffect(() => { return () => { clearInterval(audioInterval.current); if (window.speechSynthesis) window.speechSynthesis.cancel(); }; }, []);

  const playHorenAudio = (segments) => {
    if (!window.speechSynthesis) { alert("Browser doesn't support audio"); setIsPlaying(false); return; }
    window.speechSynthesis.cancel();
    let currentIndex = 0;
    const playNext = () => {
      if (currentIndex >= segments.length) { setIsPlaying(false); clearInterval(audioInterval.current); return; }
      const segment = segments[currentIndex];
      if (segment.text === "Audio nicht verfügbar") { currentIndex++; setTimeout(playNext, 500); return; }
      const utterance = new SpeechSynthesisUtterance(segment.text);
      utterance.lang = 'de-DE'; utterance.pitch = segment.pitch || 1; utterance.rate = segment.rate || 1;
      utterance.onend = () => { currentIndex++; setTimeout(playNext, 500); };
      utterance.onerror = () => { setIsPlaying(false); clearInterval(audioInterval.current); };
      window.speechSynthesis.speak(utterance);
    };
    playNext();
  };

  const toggleAudio = () => {
    if (isPlaying) { window.speechSynthesis.cancel(); clearInterval(audioInterval.current); setIsPlaying(false); return; }
    setIsPlaying(true); setAudioTime(0);
    audioInterval.current = setInterval(() => setAudioTime(prev => prev + 1), 1000);
    playHorenAudio(exam.audio || []);
  };

  const pickHoren = (n, c) => { if (!done) setAns(prev => ({ ...prev, [n]: prev[n] === c ? undefined : c })); };

  const labelR = t("correct", userLang) || "R";
  const labelF = t("wrong", userLang) || "F";

  const hasAudio = exam.audio && exam.audio[0]?.text !== "Audio nicht verfügbar";
  const isLockedB2T3 = isB2 && exam.sub === "Teile 3" && (!user?.isPaid && !user?.trialActive);

  return (
    <div className="card" style={{ padding: 20, marginBottom: 24, border: `1px solid ${themeColor}40` }}>
      <h3 className="de" style={{ fontSize: "1.3em", fontWeight: 900, margin: "0 0 16px", color: "var(--ink)" }}>{exam.title}</h3>

      {isLockedB2T3 ? (
        <div style={{ background: "var(--badbg)", padding: 16, borderRadius: 16, marginBottom: 20, border: "1px solid var(--badc)" }}>
           <div style={{ color: "var(--badc)", fontWeight: 900, marginBottom: 8 }}><AutoTrans text="محتوى مقفل" lang={userLang} /></div>
           <div style={{ color: "var(--badc)", fontSize: "0.9em" }}><AutoTrans text="هذا المقطع الصوتي متاح فقط للمشتركين. يرجى الترقية للاستماع." lang={userLang} /></div>
           <button onClick={() => wa(t("wa_upgrade_msg", userLang))} style={{ marginTop: 12, background: "var(--badc)", color: "#FFF", padding: "8px 16px", borderRadius: 8, border: "none", fontWeight: 900 }}><AutoTrans text="الترقية الآن" lang={userLang} /></button>
        </div>
      ) : !hasAudio ? (
        <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--paper)", padding: 16, borderRadius: 20, marginBottom: 20 }}>
          <div style={{ color: "var(--muted)", fontWeight: 900 }}><AutoTrans text="لا يوجد تسجيل" lang={userLang} /></div>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--paper)", padding: 16, borderRadius: 20, marginBottom: 20 }}>
          <button onClick={toggleAudio} style={{ width: 56, height: 56, borderRadius: "50%", flexShrink: 0, background: isPlaying ? "var(--red)" : themeColor, color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 20px ${themeColor}50`, transition: "all 0.2s", border: "none" }}>
            {isPlaying ? <Icon.Pause c="#FFF" /> : <Icon.Play c="#FFF" />}
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900, color: "var(--muted)", fontSize: "0.9em", marginBottom: 6 }}>
              <span style={{ color: isPlaying ? "var(--red)" : "var(--ink)", direction: 'ltr' }}>{Math.floor(audioTime / 60)}:{(audioTime % 60).toString().padStart(2, '0')}</span>
              <span>Audio Player</span>
            </div>
            <div style={{ height: 8, background: "var(--line)", borderRadius: 99, overflow: "hidden" }}>
              <div style={{ height: "100%", width: isPlaying ? "100%" : "0%", background: isPlaying ? "var(--red)" : themeColor, transition: isPlaying ? "width 60s linear" : "none" }} />
            </div>
          </div>
        </div>
      )}

      <div style={{ border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
        <div style={{ display: "flex", background: "var(--paper)", borderBottom: "1px solid var(--line)", fontWeight: 900, color: "var(--muted)", fontSize: "0.85em", padding: "12px 0" }}>
          <div style={{ width: 60, textAlign: "center", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><span style={{ fontSize: '1.3em' }}>R</span><span style={{ fontSize: '0.7em', fontWeight: 'normal', marginTop: 2 }}>{labelR}</span></div>
          <div style={{ width: 60, textAlign: "center", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><span style={{ fontSize: '1.3em' }}>F</span><span style={{ fontSize: '0.7em', fontWeight: 'normal', marginTop: 2 }}>{labelF}</span></div>
          <div style={{ flex: 1, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>AUSSAGE</div>
        </div>
        {exam.items.map((it) => {
          const isRight = ans[it.n] === "R"; const isFalsch = ans[it.n] === "F"; const isCorrect = ans[it.n] === it.c;
          let rClass = "rf-circle", fClass = "rf-circle";
          if (done) {
            if (it.c === "R") rClass += " good"; else if (isRight) rClass += " bad"; else rClass += " faded";
            if (it.c === "F") fClass += " good"; else if (isFalsch) fClass += " bad"; else fClass += " faded";
          } else {
            if (isRight) rClass += " sel";
            if (isFalsch) fClass += " sel";
          }
          let rowBg = "var(--card)";
          if (done) rowBg = isCorrect ? "var(--okbg)" : "var(--badbg)";
          return (
            <div key={it.n} style={{ display: "flex", alignItems: "center", borderBottom: "1px solid var(--line)", padding: "12px 0", background: rowBg }}>
              <div style={{ width: 60, display: "flex", justifyContent: "center" }}><div className={rClass} onClick={() => pickHoren(it.n, "R")}></div></div>
              <div style={{ width: 60, display: "flex", justifyContent: "center" }}><div className={fClass} onClick={() => pickHoren(it.n, "F")}></div></div>
              <div style={{ flex: 1, fontSize: "0.95em", lineHeight: 1.6, paddingRight: 10 }}>
                <span style={{ opacity: 0.5, marginLeft: 8, fontWeight: 900 }}>{it.n}</span>
                <span className="de">{it.de}</span>
                {showTranslation && (<div style={{ marginTop: 8, fontSize: "0.85em", color: "var(--muted)", direction: userLang === 'hi' ? 'ltr' : "rtl", textAlign: userLang === 'hi' ? 'left' : "right" }}><SmartTrans obj={it} lang={userLang} /></div>)}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => setShowStory(!showStory)} style={{ display: "flex", alignItems: "center", gap: 8, color: themeColor, fontWeight: 800, background: `${themeColor}15`, padding: "10px 16px", borderRadius: 12, border: "none" }}>
          <Icon.Eye c={themeColor} /> {t("story_memo", userLang)}
        </button>
        <div style={{ display: "flex", gap: 10 }}>
          {!done ? (
            <button onClick={() => setDone(true)} style={{ background: themeColor, color: "#FFF", padding: "10px 24px", borderRadius: 12, fontWeight: 900, boxShadow: `0 6px 15px ${themeColor}50`, border: "none" }}>{t("check_btn", userLang)}</button>
          ) : (<div style={{ fontWeight: 900, color: score === total ? "var(--okc)" : "var(--red)", display: "flex", alignItems: "center", fontSize: "1.1em" }}>{score} / {total}</div>)}
        </div>
      </div>
      {showStory && (<div className="t2-ar" style={{ marginTop: 16 }}>{exam.items[0]?.story ? (userLang === 'ar' || userLang === 'ma' ? exam.items[0].story : <AutoTrans text={exam.items[0].story} lang={userLang} />) : <AutoTrans text="لا توجد قصة لهذا الدرس" lang={userLang} />}</div>)}
    </div>
  );
}
// === 8. EXAM VIEW (Rendering all types of lessons) ===
function ExamView({ exam, onBack, userLang, onSave, user }) {
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(null);
  const [modalGap, setModalGap] = useState(null);
  const [activeGap, setActiveGap] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [excluded, setExcluded] = useState({});
  
  const pts = exam.type === "matching" ? 2.5 : (exam.type.includes("sprach") ? 1.5 : 5);
  const total = exam.items.length * pts;
  const score = exam.items.filter(it => ans[it.n] === it.c).length * pts;
  const isB2 = exam.level === "B2";
  const themeColor = isB2 ? "#0D9488" : "#8B5CF6";

  const usedElsewhere = (n, k) => {
    if ((exam.type !== "matching" && exam.type !== "headings") || k === "X") return false;
    return Object.entries(ans).some(([id, v]) => Number(id) !== n && v === k);
  };

  const pick = (it, k) => {
    if (done !== null) return;
    if (usedElsewhere(it.n, k)) return;
    if (ans[it.n] === k) {
      const newAns = { ...ans }; delete newAns[it.n]; setAns(newAns);
    } else {
      setAns({ ...ans, [it.n]: k });
    }
    if (modalGap) setModalGap(null);
  };

  const pickSprach2 = (w) => {
    if (done !== null) return;
    const target = activeGap !== null ? activeGap : (exam.items.find(x => ans[x.n] === undefined) || {}).n;
    if (!target) return;
    if (usedElsewhere(target, w)) return;
    const newAns = { ...ans, [target]: w };
    Object.keys(newAns).forEach(key => { if (Number(key) !== target && newAns[key] === w) delete newAns[key]; });
    setAns(newAns);
    const next = exam.items.find(x => x.n !== target && newAns[x.n] === undefined);
    setActiveGap(next ? next.n : null);
  };

  const cls = (it, k) => {
    const sel = ans[it.n];
    const isDone = done !== null;
    if (isDone) {
      if (k === it.c) return "opt good";
      if (sel === k) return "opt bad";
      return "opt faded";
    }
    if (sel === k) return "opt sel";
    return "opt" + (usedElsewhere(it.n, k) ? " dis" : "");
  };

  const finish = () => { setDone(score); if(onSave) onSave(exam.id, score, total); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const reset = () => { setAns({}); setDone(null); setShowTranslation(false); setExcluded({}); window.scrollTo(0, 0); };

  return (
    <div style={{ paddingBottom: 120 }}>
      <div style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={onBack} className="btnI" style={{ width: 36, height: 36 }}><Icon.Left c="var(--text)" /></button>
          <div>
            <div className="de" style={{ fontWeight: 900, fontSize: "1em", lineHeight: 1.2 }}>{exam.title}</div>
            <div className="de" style={{ fontSize: ".7em", color: "var(--muted)", fontWeight: "bold" }}>{exam.sub?.toUpperCase()}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
           <button onClick={() => setShowTranslation(!showTranslation)} className="btnI" style={{ width: 40, height: 40, color: showTranslation ? themeColor : "var(--text)", borderColor: showTranslation ? themeColor : "var(--line)" }}>
             <Icon.Translate c={showTranslation ? themeColor : "var(--text)"} />
           </button>
        </div>
      </div>

      <div style={{ margin: "10px 12px" }}>
        {exam.type === "mcq" && (
          <div className="card" style={{ padding: 20 }}>
            {exam.paragraphs?.map((p, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <p className="de" style={{ lineHeight: 1.8, fontSize: "1.05em", margin: 0 }}>{p.de}</p>
                {showTranslation && <div className="t2-ar" style={{ borderColor: themeColor }}><SmartTrans obj={p} lang={userLang} /></div>}
              </div>
            ))}
          </div>
        )}

        {(exam.type === "sprach1" || exam.type === "sprach2") && (
          <div className="card" style={{ fontSize: "1.1em", lineHeight: 2.2, padding: 20 }}>
            {exam.note && <div style={{ background: "var(--badbg)", color: "var(--badc)", padding: 10, borderRadius: 8, marginBottom: 16, fontSize: "0.9em", fontWeight: "bold" }}>{exam.note}</div>}
            {exam.text.split(/(?:\.{3,}\s*|__)\s*\((\d+)\)\s*(?:\.{3,}|__)/g).map((part, i) => {
              if (i % 2 === 1) {
                const gapNum = parseInt(part);
                const it = exam.items.find(x => x.n === gapNum);
                const sel = ans[gapNum];
                let content = <span className="inline-gap" style={{ borderColor: themeColor, color: themeColor }} onClick={() => { if(done === null) { exam.type === "sprach2" ? setActiveGap(gapNum) : setModalGap(gapNum); } }}>{sel || `(${gapNum})`}</span>;
                if (done !== null) {
                  if (sel === it.c) content = <span className="sp1-correct">{sel}</span>;
                  else if (sel) content = <span style={{display:'inline-flex', gap:4}}><span className="sp1-wrong">{sel}</span><span className="sp1-correct">{it.c}</span></span>;
                  else content = <span className="sp1-correct">{it.c}</span>;
                }
                return <React.Fragment key={i}>{content}</React.Fragment>;
              }
              return <span key={i} className="de" style={{ whiteSpace: "pre-wrap" }}>{part}</span>;
            })}
            {showTranslation && (
              <div className="t2-ar" style={{ marginTop: 20, borderColor: themeColor }}>
                {exam.transText ? <SmartTrans obj={exam.transText} lang={userLang} /> : <AutoTrans text={exam.text.replace(/(?:\.{3,}\s*|__)\s*\(\d+\)\s*(?:\.{3,}|__)/g, " ___ ")} lang={userLang} />}
              </div>
            )}
          </div>
        )}

        {exam.type === "matching" && exam.ads?.map(ad => (
          <div key={ad.k} className="card" style={{ padding: 16 }}>
            <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 12 }}>
              <span className="de" style={{ color: "var(--primary)", fontWeight: 900, fontSize: "1.1em" }}>ANZEIGE {ad.k}</span>
              <div className="de" style={{ fontWeight: 900, marginTop: 6 }}>{ad.t}</div>
              <div className="de" style={{ fontSize: "0.9em", color: "var(--muted)", marginTop: 4 }}>{ad.de}</div>
              {showTranslation && <div style={{ marginTop: 4, fontSize: "0.85em", color: "var(--muted)", direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right' }}><SmartTrans obj={ad} lang={userLang} /></div>}
            </div>
            {exam.items.map(it => {
              const isSel = ans[it.n] === ad.k;
              const isElse = ans[it.n] && ans[it.n] !== ad.k;
              const isExc = excluded[it.n]?.[ad.k];
              let st = { padding: 12, borderRadius: 12, background: "var(--paper)", opacity: 1, border: "2px solid transparent", marginBottom: 8, direction: "ltr", textAlign: "left", transition: "all 0.2s", cursor: (done !== null || isExc || isElse) ? "default" : "pointer" };
              
              if (isSel) { st.background = `${themeColor}15`; st.borderColor = themeColor; st.color = themeColor; }
              else if (isElse) { st.opacity = 0.3; st.pointerEvents = "none"; }
              else if (isExc) { st.opacity = 0.3; st.textDecoration = "line-through"; st.pointerEvents = "none"; }
              
              if (done !== null) {
                if (ad.k === it.c) { st.background = "var(--okbg)"; st.borderColor = "var(--okc)"; st.color = "var(--okc)"; }
                else if (isSel) { st.background = "var(--badbg)"; st.borderColor = "var(--badc)"; st.color = "var(--badc)"; }
              }
              return (
                <div key={it.n} style={{ display: "flex", gap: 12, alignItems: "flex-start", direction: "ltr" }}>
                  <button onClick={() => {
                    if (done !== null || isSel || isElse) return;
                    setExcluded(prev => { const n = {...prev}; if(!n[it.n]) n[it.n] = {}; n[it.n][ad.k] = !n[it.n][ad.k]; return n; });
                  }} style={{ width: 28, height: 28, borderRadius: 8, border: `1px solid ${isExc ? "var(--red)" : "var(--line)"}`, marginTop: 10, color: isExc ? "var(--red)" : "transparent", background: isExc ? "var(--badbg)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}><Icon.X c={isExc ? "var(--red)" : "transparent"} /></button>
                  <div style={{ fontWeight: 900, marginTop: 12, width: 20, color: isSel ? themeColor : "var(--muted)" }}>{it.n}</div>
                  <div onClick={() => { if(!isExc && !isElse && done === null) pick(it, ad.k); }} style={st}>
                    <span className="de">{it.de}</span>
                    {showTranslation && <div style={{ marginTop: 8, fontSize: "0.85em", color: "var(--muted)", direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right' }}><SmartTrans obj={it} lang={userLang} /></div>}
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {(exam.type === "headings" || exam.type === "mcq") && exam.items.map((it, idx) => {
          const sel = ans[it.n];
          return (
            <div key={it.n} className="card" style={{ padding: 16 }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                <div className="letter" style={{ width: 36, height: 36, fontSize: "1.1em", background: `${themeColor}15`, color: themeColor, border: `1px solid ${themeColor}` }}>{idx + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ lineHeight: 1.6, fontSize: "1.05em" }}>
                    <div className="de">{exam.type === "headings" ? it.de : it.q}</div>
                    {showTranslation && <div style={{ marginTop: 8, color: "var(--muted)", fontSize: "0.9em", direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right' }}><SmartTrans obj={{de: exam.type === "headings" ? it.de : it.q}} lang={userLang} /></div>}
                  </div>
                </div>
              </div>
              {(exam.type === "headings" ? exam.options : it.opts).map(o => (
                <button key={o.k} className={cls(it, o.k)} onClick={() => pick(it, o.k)} disabled={done !== null} style={{ padding: 14 }}>
                  <div className="letter" style={{ width: 28, height: 28, fontSize: "0.9em", background: ans[it.n] === o.k && done === null ? themeColor : "var(--card)", color: ans[it.n] === o.k && done === null ? "#FFF" : "var(--text)" }}>{o.k}</div>
                  <div className="de" style={{ flex: 1, textAlign: "left" }}>
                    {o.de}
                    {showTranslation && <div style={{ marginTop: 6, fontSize: "0.85em", color: "var(--muted)", direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right' }}><SmartTrans obj={o} lang={userLang} /></div>}
                  </div>
                </button>
              ))}
            </div>
          );
        })}
      </div>

      {modalGap !== null && exam.type === "sprach1" && (
        <div className="overlay" onClick={() => setModalGap(null)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <h3 style={{margin:"0 0 20px", fontSize:"1.3em", fontWeight: 900}}>{t("gap_num", userLang)} ({modalGap})</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {exam.items.find(x => x.n === modalGap).opts.map((opt, i) => (
                <button key={i} className="btn ghost" style={{ textAlign: 'left', direction: 'ltr', borderColor: ans[modalGap] === opt ? themeColor : "var(--line)", background: ans[modalGap] === opt ? `${themeColor}15` : "var(--card)", color: ans[modalGap] === opt ? themeColor : "var(--text)" }} onClick={() => pick(exam.items.find(x => x.n === modalGap), opt)}>
                  <span className="de" style={{fontSize:"1.05em", flex: 1}}>{opt}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeGap !== null && exam.type === "sprach2" && (
         <div className="overlay" onClick={() => setActiveGap(null)}>
           <div className="sheet" onClick={e => e.stopPropagation()}>
             <h3 style={{margin:"0 0 20px", fontSize:"1.3em", fontWeight: 900}}>{t("choose_word_gap", userLang)} ({activeGap})</h3>
             <div className="word-bank" style={{marginBottom:0, gridTemplateColumns: "1fr"}}>
               {exam.wordBank.map(w => {
                 const isUsed = Object.values(ans).includes(w.w) && ans[activeGap] !== w.w;
                 return (
                   <button key={w.k} className={"word-btn" + (isUsed ? " used" : "")} onClick={() => pickSprach2(w.w)} style={{ padding: "14px", borderColor: ans[activeGap] === w.w ? themeColor : "var(--line)", background: ans[activeGap] === w.w ? `${themeColor}15` : "var(--card)", color: ans[activeGap] === w.w ? themeColor : "var(--text)" }}>
                     <span style={{fontSize:"1.05em"}}>{w.w}</span>
                   </button>
                 )
               })}
             </div>
           </div>
         </div>
      )}

      <div className="bottom-bar">
        <button onClick={done !== null ? reset : finish} className="btn-prev-bar" style={done !== null ? { color: themeColor, borderColor: themeColor } : {}}>{done !== null ? t("reset_btn", userLang) : t("check_btn", userLang)}</button>
        <button onClick={onBack} className="btn-correct-bar" style={{ background: themeColor }}>{done !== null ? `${score} / ${total}` : t("back_btn", userLang)}</button>
      </div>
    </div>
  );
}

// === 9. LESEN VIEW ===
function LesenView({ level, userLang, user, onLessonClick }) {
  const isB2 = level === "B2";
  const themeColor = isB2 ? "#0D9488" : "#22C55E";
  const [activeTab, setActiveTab] = useState("Teile 1");
  const [searchQuery, setSearchQuery] = useState("");
  const [showVersionModal, setShowVersionModal] = useState(null);

  const tabs = [
    { id: "Prüfungen", icon: <Icon.Book c={themeColor} /> }, 
    { id: "Teile 1", icon: <Icon.Edit c={themeColor} /> }, 
    { id: "Teile 2", icon: <Icon.Edit c={themeColor} /> }, 
    { id: "Teile 3", icon: <Icon.Edit c={themeColor} /> }, 
    { id: "Sprach 1", icon: <Icon.Play c={themeColor} /> }, 
    { id: "Sprach 2", icon: <Icon.Play c={themeColor} /> }
  ];

  const currentList = isB2 ? B2_PLACEHOLDER_LESSONS["Lesen"]?.[activeTab] : PLACEHOLDER_LESSONS["Lesen"]?.[activeTab];

  return (
    <div>
      <h1 className="de" style={{ textAlign: "center", color: themeColor, marginBottom: 16, fontSize: "2.2em" }}>Lesen {level}</h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, background: "var(--card)", padding: 16, borderRadius: 24, border: "1px solid var(--line)", marginBottom: 20 }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: "14px 8px", borderRadius: 16, fontWeight: 900, fontSize: "0.85em", border: activeTab === tab.id ? `2px solid ${themeColor}` : "2px solid transparent", background: activeTab === tab.id ? `${themeColor}15` : "transparent", color: activeTab === tab.id ? themeColor : "var(--muted)", transition: "all 0.2s", cursor: "pointer" }}>
            <span style={{ fontSize: "1.6em" }}>{tab.icon}</span>{tab.id}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: 16 }}>
        <input type="text" placeholder={t("search_placeholder", userLang)} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: `1px solid ${themeColor}`, background: "var(--card)", color: "var(--text)", fontSize: "1em", outline: "none" }} />
      </div>

      {currentList?.filter(name => name.toLowerCase().includes(searchQuery.toLowerCase())).map((name, idx) => {
        const localData = getLocalData(level, "Lesen", name, activeTab);
        const isLocked = localData.length === 0;
        
        return (
          <button key={idx} className="card" onClick={() => {
            if (isLocked) {
              onLessonClick("locked", null);
            } else if (localData.length > 1) {
              setShowVersionModal({ name, versions: localData });
            } else {
              onLessonClick("exam", localData[0]);
            }
          }} style={{ width: "100%", textAlign: "right", display: "block", color: "var(--text)", padding: 20, marginBottom: 12, border: `1px solid ${isB2 ? "#CCFBF1" : "var(--line)"}`, cursor: "pointer", background: "var(--card)", borderRadius: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div className="de" style={{ fontWeight: 900, fontSize: "1.2em" }}>{name}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center", color: "var(--muted)", fontSize: ".9em" }}>
                  <span className="chip" style={{ background: `${themeColor}15`, color: themeColor, padding: "4px 10px", borderRadius: 8 }}>{activeTab}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                 {localData.length > 1 && <span style={{ background: `${themeColor}15`, color: themeColor, padding: "2px 8px", borderRadius: 6, fontSize: "0.75em", fontWeight: 900 }}>{localData.length} <AutoTrans text="تعديلات" lang={userLang} /></span>}
                 <div style={{ color: isLocked ? "#F59E0B" : themeColor }}>
                   {isLocked ? <Icon.Lock c="#F59E0B" /> : <Icon.Right c={themeColor} />}
                 </div>
              </div>
            </div>
          </button>
        );
      })}

      {showVersionModal && (
        <div className="overlay" onClick={() => setShowVersionModal(null)} style={{ direction: 'rtl' }}>
          <div className="sheet" onClick={e => e.stopPropagation()} style={{ padding: 0, overflow: 'hidden', borderRadius: 24 }}>
            <div style={{ background: '#F0FDFA', padding: '24px', borderBottom: '1px solid #CCFBF1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.3em", fontWeight: 900, color: '#0F766E' }}><AutoTrans text="التعديلات المتاحة" lang={userLang} /></h3>
                <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.9em' }}>{showVersionModal.versions.length} <AutoTrans text="تعديلات لهذا الموضوع" lang={userLang} /></p>
              </div>
            </div>
            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              {showVersionModal.versions.map((ex, idx) => {
                const isMod = ex.desc?.includes('معدل') || ex.id?.includes('-mod') || ex.title?.includes('المعدل');
                const cleanTitle = ex.title.replace(' المعدل', '').replace(' (معدل)', '');
                return (
                  <button key={idx} onClick={() => { onLessonClick("exam", ex); setShowVersionModal(null); }} style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", background: '#fff', border: `1px solid #e2e8f0`, borderRadius: 16, cursor: "pointer" }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ background: '#F0FDFA', color: '#0F766E', width: 32, height: 32, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900 }}>{idx + 1}</span>
                      <span className="de" style={{ fontWeight: 800, fontSize: '1.1em', color: '#1e293b' }}>{cleanTitle} {isMod && <AutoTrans text="المعدل" lang={userLang} />}</span>
                    </div>
                    <span style={{ background: '#f1f5f9', color: '#64748b', padding: '4px 10px', borderRadius: 8, fontSize: '0.8em', fontWeight: 900 }}>{level}</span>
                  </button>
                );
              })}
            </div>
            <div style={{ padding: '0 20px 20px' }}>
              <button onClick={() => setShowVersionModal(null)} style={{ width: '100%', padding: 16, borderRadius: 16, border: `1px solid #e2e8f0`, background: '#fff', color: '#64748b', fontWeight: 900, fontSize: '1em', cursor: "pointer" }}><AutoTrans text="إغلاق" lang={userLang} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// === 10. HOREN VIEW ===
function HorenView({ level, userLang, user, onLessonClick }) {
  const isB2 = level === "B2";
  const themeColor = isB2 ? "#0D9488" : "#8B5CF6";
  const [activeHorenTeil, setActiveHorenTeil] = useState(null);

  if (!activeHorenTeil) {
    return (
      <div style={{ padding: "20px 12px", paddingBottom: 100, direction: "rtl" }}>
        <h1 className="de" style={{ fontSize: "2.8em", fontWeight: 900, color: themeColor, marginBottom: 20, textAlign: "right" }}>Hören {level}</h1>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", background: "#f1f5f9", borderRadius: 99, padding: 4, border: "1px solid #e2e8f0" }}>
            <button style={{ background: themeColor, color: "white", padding: "10px 40px", borderRadius: 99, fontWeight: 900, border: "none", fontSize: "1.1em" }}>{level}</button>
          </div>
        </div>
        <div style={{ display: "flex", background: "#ffffff", borderRadius: 20, padding: 8, marginBottom: 24, boxShadow: "0 4px 15px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
          <button style={{ flex: 1, padding: "16px", borderRadius: 16, background: "transparent", color: "#64748b", fontWeight: 900, border: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}><Icon.Book /> <span><AutoTrans text="الأكواد" lang={userLang} /></span></button>
          <button style={{ flex: 1, padding: "16px", borderRadius: 16, background: themeColor, color: "white", fontWeight: 900, border: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}><Icon.Headphones /> <span><AutoTrans text="الجمل" lang={userLang} /></span></button>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "#ffffff", borderRadius: 24, padding: 24, border: `1px solid #CCFBF1`, boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div style={{ width: 60, height: 60, borderRadius: 20, background: "#F0FDFA", display: "flex", justifyContent: "center", alignItems: "center", color: themeColor }}><Icon.Headphones /></div>
              <span style={{ background: "#f1f5f9", color: "#64748b", padding: "4px 12px", borderRadius: 8, fontWeight: 900, fontSize: "0.9em" }}>{level}</span>
            </div>
            <h2 className="de" style={{ fontSize: "1.8em", fontWeight: 900, margin: "0 0 20px", color: "#1e293b" }}>Teil 1</h2>
            <button onClick={() => setActiveHorenTeil("Teile 1")} style={{ width: "100%", padding: "18px", borderRadius: 16, background: "#F0FDFA", color: themeColor, fontWeight: 900, fontSize: "1.1em", border: `1.5px solid ${themeColor}`, display: "flex", justifyContent: "center", alignItems: "center", gap: 10, cursor: "pointer" }}><AutoTrans text="ابدأ الآن" lang={userLang} /></button>
          </div>
          
          <div style={{ background: "#ffffff", borderRadius: 24, padding: 24, border: "1px solid #fef3c7", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div style={{ width: 60, height: 60, borderRadius: 20, background: "#fef3c7", display: "flex", justifyContent: "center", alignItems: "center", color: "#f59e0b" }}><Icon.Lock /></div>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ background: "#f1f5f9", color: "#64748b", padding: "4px 12px", borderRadius: 8, fontWeight: 900, fontSize: "0.9em" }}>{level}</span>
                <span style={{ background: "#fef3c7", color: "#d97706", padding: "4px 12px", borderRadius: 8, fontWeight: 900, fontSize: "0.9em" }}>PRO</span>
              </div>
            </div>
            <h2 className="de" style={{ fontSize: "1.8em", fontWeight: 900, margin: "0 0 20px", color: "#d97706" }}>Teil 2</h2>
            <button onClick={() => onLessonClick("locked", null)} style={{ width: "100%", padding: "18px", borderRadius: 16, background: "#fffbeb", color: "#d97706", fontWeight: 900, fontSize: "1.1em", border: "1.5px solid #f59e0b", display: "flex", justifyContent: "center", alignItems: "center", gap: 10, cursor: "pointer" }}><AutoTrans text="فتح الوصول" lang={userLang} /></button>
          </div>

          <div style={{ background: "#ffffff", borderRadius: 24, padding: 24, border: "1px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div style={{ width: 60, height: 60, borderRadius: 20, background: "#F0FDFA", display: "flex", justifyContent: "center", alignItems: "center", color: themeColor }}><Icon.Edit /></div>
              <span style={{ background: "#f1f5f9", color: "#64748b", padding: "4px 12px", borderRadius: 8, fontWeight: 900, fontSize: "0.9em" }}>{level}</span>
            </div>
            <h2 className="de" style={{ fontSize: "1.8em", fontWeight: 900, margin: "0 0 20px", color: "#1e293b" }}>Teil 3</h2>
            <button onClick={() => setActiveHorenTeil("Teile 3")} style={{ width: "100%", padding: "18px", borderRadius: 16, background: "#F0FDFA", color: themeColor, fontWeight: 900, fontSize: "1.1em", border: `1.5px solid ${themeColor}`, display: "flex", justifyContent: "center", alignItems: "center", gap: 10, cursor: "pointer" }}><AutoTrans text="ابدأ الآن" lang={userLang} /></button>
          </div>
        </div>
      </div>
    );
  }

  const list = isB2 ? (B2_HOREN_EXAMS || []) : (HOREN_EXAMS || []);
  const filteredList = list.filter(ex => ex.sub === activeHorenTeil);

  return (
    <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
       <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button onClick={() => setActiveHorenTeil(null)} className="btnI" style={{ width: 40, height: 40 }}><Icon.Left /></button>
          <h2 className="de" style={{ margin: 0, fontSize: "1.8em", fontWeight: 900 }}>{activeHorenTeil} {level}</h2>
        </div>
        
        {isB2 && (
          <div style={{ background: "#fff", padding: 20, borderRadius: 16, marginBottom: 20, border: "1px solid #fef3c7" }}>
              <h3 style={{color: "#d97706", margin: "0 0 10px"}}><AutoTrans text="تنبيه التحديث" lang={userLang} /></h3>
              <p style={{margin: 0, color: "#64748b"}}><AutoTrans text="لا ينصح به فهناك احتمال 60% ان يتغير الترتيب" lang={userLang} /></p>
          </div>
        )}
        
        {filteredList.length === 0 ? (
           <p style={{textAlign: "center", color: "var(--muted)", marginTop: 40}}><AutoTrans text="لا توجد دروس في هذا القسم حالياً." lang={userLang} /></p>
        ) : (
           filteredList.map(ex => (
             <HorenCard key={ex.id} exam={ex} userLang={userLang} showTranslation={false} isB2={isB2} user={user} />
           ))
        )}
    </div>
  );
}

// === 11. SCHREIBEN VIEW ===
function SchreibenView({ level, userLang, user, onLessonClick }) {
  const isB2 = level === "B2";
  const themeColor = isB2 ? "#0D9488" : "#F59E0B";
  const list = isB2 ? B2_PLACEHOLDER_LESSONS["Schreiben"] : PLACEHOLDER_LESSONS["Schreiben"];

  return (
    <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
      <h1 className="de" style={{ textAlign: "center", color: themeColor, marginBottom: 20, fontSize: "2.5em" }}>Schreiben {level}</h1>
      <div style={{ marginBottom: 20 }}>
        <input type="text" placeholder={t("search_placeholder", userLang)} style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: `1px solid ${themeColor}`, background: "var(--card)", color: "var(--text)", fontSize: "1em", outline: "none" }} />
      </div>

      {list.map((title, idx) => {
        const local = getLocalData(level, "Schreiben", title);
        const isLocked = local.length === 0;
        return (
          <div key={idx} onClick={() => {
             if (isLocked) {
                onLessonClick("locked", null);
             } else {
                onLessonClick("schreiben", local[0]);
             }
          }} className="card" style={{ padding: 20, marginBottom: 16, cursor: "pointer", border: `1px solid ${isB2 ? themeColor : "var(--line)"}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div className="de" style={{ fontWeight: 900, fontSize: "1.1em", marginBottom: 12 }}>{title}</div>
              {isLocked && <Icon.Lock c="#F59E0B" />}
            </div>
            <div style={{ display: "inline-block", background: `${themeColor}15`, color: themeColor, padding: "4px 12px", borderRadius: 8, fontSize: "0.85em", fontWeight: 900 }}>{level}</div>
          </div>
        );
      })}
    </div>
  );
}

// === 12. SPRECHEN VIEW ===
function SprechenView({ level, userLang, user, onLessonClick }) {
  const isB2 = level === "B2";
  const themeColor = isB2 ? "#0D9488" : "#EF4444";
  const [tab, setTab] = useState("Teil 1");
  
  const placeholders = isB2 ? B2_PLACEHOLDER_LESSONS["Sprechen"] : PLACEHOLDER_LESSONS["Sprechen"];
  const dataList = (isB2 ? (B2_SPRECHEN_DATA || []) : (B1_SPRECHEN_DATA || [])).filter(e => e.sub === tab).map(e => e.title);
  const placeholderList = placeholders?.[tab] || [];
  const currentList = Array.from(new Set([...placeholderList, ...dataList]));

  return (
    <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
      <h1 className="de" style={{ textAlign: "center", color: themeColor, marginBottom: 16, fontSize: "2.5em" }}>Sprechen {level}</h1>
      
      <div style={{ display: "flex", gap: 10, marginBottom: 20, background: "var(--card)", padding: 10, borderRadius: 16 }}>
        {["Teil 1", "Teil 2", "Teil 3"].map(t => (
           <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "10px", borderRadius: 12, fontWeight: 900, background: tab === t ? themeColor : "transparent", color: tab === t ? "#FFF" : "var(--muted)", border: "none", cursor: "pointer" }}>{t}</button>
        ))}
      </div>

      <div style={{ marginBottom: 16 }}><input type="text" placeholder={t("search_placeholder", userLang)} style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: `1px solid ${themeColor}`, background: "var(--card)", color: "var(--text)", fontSize: "1em", outline: "none" }} /></div>

      {currentList.length === 0 ? (
         <div style={{ textAlign: "center", marginTop: 40, color: "var(--muted)" }}><AutoTrans text="...سيتم إضافة قريباً" lang={userLang} /></div>
      ) : currentList.map((title, idx) => {
        const local = getLocalData(level, "Sprechen", title, tab);
        const isLocked = local.length === 0;
        return (
          <div key={idx} onClick={() => {
             if (isLocked) {
                onLessonClick("locked", null);
             } else {
                onLessonClick("sprechen", local[0]);
             }
          }} className="card" style={{ padding: 20, marginBottom: 12, cursor: "pointer", border: `1px solid ${isB2 ? "#CCFBF1" : "var(--line)"}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="de" style={{ fontWeight: 900, fontSize: "1.2em" }}>{title}</div>
              {isLocked ? <Icon.Lock c="#F59E0B" /> : <Icon.Right c={themeColor} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// === 13. PRUEFUNG VIEW ===
function PruefungView({ level, userLang, user, onLessonClick }) {
  const isB2 = level === "B2";
  const themeColor = isB2 ? "#0D9488" : "#EAB308";
  const list = isB2 ? B2_PRUEFUNG_DATA : PRUEFUNG_DATA;

  return (
    <div style={{ paddingBottom: 100, padding: "20px 12px" }}>
      <h1 className="de" style={{ textAlign: "center", color: themeColor, marginBottom: 16, fontSize: "2.2em" }}>Prüfungen</h1>
      {list.map(exam => (
        <div key={exam.id} className="card" style={{ padding: 20, border: `1.5px solid ${themeColor}`, marginBottom: 16, borderRadius: 16, background: "var(--card)", cursor: "pointer" }} onClick={() => onLessonClick("locked", null)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div style={{ fontWeight: 900, fontSize: "1.2em", color: "var(--text)" }}>{exam.title}</div>
            <span style={{ background: themeColor, color: "#111", padding: "2px 10px", borderRadius: 6, fontWeight: 900, fontSize: "0.8em" }}>PRO</span>
          </div>
          <div style={{ color: "var(--muted)", fontSize: "0.95em", marginBottom: 16 }}>{exam.desc}</div>
          <button style={{ width: "100%", padding: 12, borderRadius: 10, background: `${themeColor}15`, color: themeColor, border: `1px solid ${themeColor}`, fontWeight: 900 }}><AutoTrans text="فتح الوصول" lang={userLang} /></button>
        </div>
      ))}
    </div>
  );
}

// === 14. MAIN APP COMPONENT ===
function App() {
  const [user, setUser] = useState(null);
  const [userLang, setUserLang] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [view, setView] = useState("lesen"); 
  const [level, setLevel] = useState("B1");
  const [exam, setExam] = useState(null);
  const [dark, setDark] = useState(false);
  const [lockedModal, setLockedModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1000);
    const savedUser = localStorage.getItem("ep_user");
    const savedLang = localStorage.getItem("ep_lang");
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedLang) setUserLang(savedLang);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);

  const handleAuth = async (name, code) => {
    const email = `${name}@echt.com`;
    const { data, error } = await sb.auth.signInWithPassword({ email, password: code });
    if (error) {
      const { data: newData, error: newError } = await sb.auth.signUp({ email, password: code });
      if (newError) return alert("Error: " + newError.message);
      const userObj = { ...newData.user, name, isGuest: false };
      setUser(userObj); localStorage.setItem("ep_user", JSON.stringify(userObj));
    } else {
      const userObj = { ...data.user, name, isGuest: false };
      setUser(userObj); localStorage.setItem("ep_user", JSON.stringify(userObj));
    }
  };

  const handleGuest = () => {
    const guest = { name: "Guest", isGuest: true, isPaid: false };
    setUser(guest); localStorage.setItem("ep_user", JSON.stringify(guest));
  };

  const logout = () => {
    localStorage.removeItem("ep_user");
    setUser(null);
    sb.auth.signOut();
  };

  const onLessonClick = (type, data) => {
    if (type === "locked") { setLockedModal(true); return; }
    if (type === "exam" || type === "schreiben" || type === "sprechen") { setExam({...data, _viewType: type}); }
  };

  if (!isReady) return <SplashScreen />;
  if (!userLang) return <LanguageScreen onSelect={(c) => { setUserLang(c); localStorage.setItem("ep_lang", c); }} />;
  if (!user) return <AuthScreen userLang={userLang} onAuth={handleAuth} onGuest={handleGuest} />;

  if (exam) {
    if (exam._viewType === "exam") {
      return <ExamView exam={exam} onBack={() => setExam(null)} userLang={userLang} user={user} />;
    }
    if (exam._viewType === "sprechen") {
      return (
        <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <button onClick={() => setExam(null)} className="btnI" style={{ width: 40, height: 40 }}><Icon.Left /></button>
            <h2 className="de" style={{ margin: 0, fontSize: "1.2em", fontWeight: 900 }}>{exam.title}</h2>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ color: level === "B2" ? "#0D9488" : "#EF4444", fontWeight: 900, marginBottom: 12, fontSize: "1.1em" }}>AUFGABE</div>
            <div className="de" style={{ fontSize: "1.05em", lineHeight: 1.8, marginBottom: 24 }}>{exam.aufgabe}</div>
            <div style={{ color: level === "B2" ? "#0D9488" : "#EF4444", fontWeight: 900, marginBottom: 12, fontSize: "1.1em" }}>MUSTERLÖSUNG</div>
            <div className="de" style={{ fontSize: "1.05em", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{exam.text}</div>
            {exam.transText && <div className="t2-ar" style={{marginTop: 20}}><SmartTrans obj={exam.transText} lang={userLang} /></div>}
          </div>
        </div>
      );
    }
    if (exam._viewType === "schreiben") {
       return (
         <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <button onClick={() => setExam(null)} className="btnI" style={{ width: 40, height: 40 }}><Icon.Left /></button>
                <h2 className="de" style={{ margin: 0, fontSize: "1.2em", fontWeight: 900 }}>{exam.title}</h2>
            </div>
            <div className="card" style={{ padding: 20, marginBottom: 16 }}>
                <div style={{ color: "#F59E0B", fontWeight: 900, marginBottom: 12, fontSize: "1.1em" }}>AUFGABE</div>
                <div className="de" style={{ fontSize: "1.05em", lineHeight: 1.8, marginBottom: 24 }}>{exam.text}</div>
            </div>
            <div className="card" style={{ padding: 20 }}>
                <textarea style={{ width: "100%", minHeight: 200, padding: 16, borderRadius: 12, border: "1px solid var(--line)", background: "var(--paper)", color: "var(--text)" }} placeholder="..."></textarea>
                <button className="btn" style={{ marginTop: 16, background: "#F59E0B", color: "#FFF" }}><AutoTrans text="تصحيح" lang={userLang} /></button>
            </div>
         </div>
       );
    }
  }

  return (
    <div style={{ paddingBottom: 80 }}>
      <div className="header" style={{ borderBottomColor: level === "B2" ? "#0D9488" : "var(--line)" }}>
        <div className="brand">
          <button className="btnI" onClick={() => setDark(!dark)}>{dark ? <Icon.Sun /> : <Icon.Moon />}</button>
          <div className="logo" style={{ background: level === "B2" ? "linear-gradient(135deg, #14B8A6, #0D9488)" : "var(--ink)" }}><LogoImage size={36} /></div>
          <div>
            <div className="header-title">Sahla</div>
            <div className="header-subtitle de">Deutsch {level}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <button className="btnI" onClick={() => setLevel(level === "B1" ? "B2" : "B1")} style={{ width: "auto", padding: "0 12px", borderRadius: 12, fontWeight: 900, color: level === "B2" ? "#0D9488" : "var(--text)" }}>{level}</button>
          <button className="btnI" onClick={logout}><Icon.Gear /></button>
        </div>
      </div>

      <main style={{ margin: "0 12px", paddingTop: 10 }}>
        {view === "lesen" && <LesenView level={level} userLang={userLang} user={user} onLessonClick={onLessonClick} />}
        {view === "horen" && <HorenView level={level} userLang={userLang} user={user} onLessonClick={onLessonClick} />}
        {view === "schreiben" && <SchreibenView level={level} userLang={userLang} user={user} onLessonClick={onLessonClick} />}
        {view === "sprechen" && <SprechenView level={level} userLang={userLang} user={user} onLessonClick={onLessonClick} />}
        {view === "pruefung" && <PruefungView level={level} userLang={userLang} user={user} onLessonClick={onLessonClick} />}
      </main>

      <nav className="nav">
        <button className={view === "lesen" ? "on" : ""} onClick={() => setView("lesen")} style={view === "lesen" ? { color: level === "B2" ? "#0D9488" : "#DD0000" } : {}}><span className="ic"><Icon.Book c={view === "lesen" ? (level === "B2" ? "#0D9488" : "#DD0000") : "currentColor"} /></span><span>{t("lesen", userLang)}</span></button>
        <button className={view === "horen" ? "on" : ""} onClick={() => setView("horen")} style={view === "horen" ? { color: level === "B2" ? "#0D9488" : "#DD0000" } : {}}><span className="ic"><Icon.Headphones c={view === "horen" ? (level === "B2" ? "#0D9488" : "#DD0000") : "currentColor"} /></span><span>{t("horen", userLang)}</span></button>
        <button className={view === "schreiben" ? "on" : ""} onClick={() => setView("schreiben")} style={view === "schreiben" ? { color: level === "B2" ? "#0D9488" : "#DD0000" } : {}}><span className="ic"><Icon.Edit c={view === "schreiben" ? (level === "B2" ? "#0D9488" : "#DD0000") : "currentColor"} /></span><span>{t("schreiben", userLang)}</span></button>
        <button className={view === "sprechen" ? "on" : ""} onClick={() => setView("sprechen")} style={view === "sprechen" ? { color: level === "B2" ? "#0D9488" : "#DD0000" } : {}}><span className="ic"><Icon.Mic c={view === "sprechen" ? (level === "B2" ? "#0D9488" : "#DD0000") : "currentColor"} /></span><span>{t("sprechen", userLang)}</span></button>
        <button className={view === "pruefung" ? "on" : ""} onClick={() => setView("pruefung")} style={view === "pruefung" ? { color: level === "B2" ? "#0D9488" : "#DD0000" } : {}}><span className="ic"><Icon.Grad c={view === "pruefung" ? (level === "B2" ? "#0D9488" : "#DD0000") : "currentColor"} /></span><span>{t("pruefung", userLang)}</span></button>
      </nav>

      {lockedModal && (
        <div className="overlay" onClick={() => setLockedModal(false)} style={{ direction: 'rtl', zIndex: 9999 }}>
          <div className="sheet" onClick={e => e.stopPropagation()} style={{ textAlign: "center", padding: "40px 24px", borderRadius: 28 }}>
            <div style={{ width: 80, height: 80, background: "rgba(13, 148, 136, 0.1)", color: "var(--primary)", borderRadius: 24, display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto 24px" }}>
               <Icon.Rocket c="#F59E0B" s={40} />
            </div>
            <h2 style={{ fontSize: "1.6em", fontWeight: 900, margin: "0 0 12px", color: "var(--text)" }}><AutoTrans text="محتوى مقفل" lang={userLang} /></h2>
            <p style={{ color: "var(--muted)", margin: "0 0 32px", fontSize: "1.05em" }}><AutoTrans text="ترقية الحساب للوصول لهذه الميزة" lang={userLang} /></p>
            <button onClick={() => { setLockedModal(false); wa(t("wa_upgrade_msg", userLang)); }} style={{ width: "100%", padding: "16px", borderRadius: 16, background: "var(--primary)", color: "#FFF", fontWeight: 900, fontSize: "1.1em", border: "none", display: "flex", justifyContent: "center", alignItems: "center", gap: 8, boxShadow: "0 8px 20px rgba(13,148,136,0.3)", marginBottom: 16 }}>
              <Icon.Rocket c="#FFF" /> <AutoTrans text="ترقية الحساب الآن" lang={userLang} />
            </button>
            <button onClick={() => setLockedModal(false)} style={{ width: "100%", padding: "16px", borderRadius: 16, background: "transparent", color: "var(--muted)", fontWeight: 900, fontSize: "1em", border: "1px solid var(--line)" }}><AutoTrans text="ليس الآن" lang={userLang} /></button>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
