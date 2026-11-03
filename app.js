// ==========================================
// app.js — نظيف 100% (بلا بيانات)
// كيستعمل البيانات من data-b1.js + المكونات من components.js
// ==========================================

function App() {
  const [userLang, setUserLang] = useState(null);
  const [user, setUser] = useState(null);
  const [view, setView] = useState("home");
  const [level, setLevel] = useState("B1");
  const [exam, setExam] = useState(null);
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [settings, setSettings] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExamTitle, setSelectedExamTitle] = useState(null);
  const [showHorenLessons, setShowHorenLessons] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1500);
    const savedUser = localStorage.getItem("ep_user");
    const savedLang = localStorage.getItem("ep_lang");
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedLang) setUserLang(savedLang);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleLangSelect = (c) => {
    setUserLang(c);
    localStorage.setItem("ep_lang", c);
  };

  const handleAuth = (e) => {
    e.preventDefault();
    const uniqueCode = e.target.code.value;
    if (uniqueCode.trim()) {
      const newUser = { name: uniqueCode.trim(), isGuest: false };
      setUser(newUser);
      localStorage.setItem("ep_user", JSON.stringify(newUser));
    }
  };

  const handleGuest = () => {
    const guest = { name: "زائر", isGuest: true };
    setUser(guest);
    localStorage.setItem("ep_user", JSON.stringify(guest));
  };

  const logout = () => {
    localStorage.removeItem("ep_user");
    setUser(null);
  };

  const go = (v) => {
    setView(v);
    setExam(null);
    setMenu(false);
    setShowHorenLessons(false);
    window.scrollTo(0, 0);
  };

  const levelExams = EXAMS.filter(e => e.level === level);
  const uniqueTitles = Array.from(new Set(levelExams.map(e => e.title)))
    .filter(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleNextExam = (currentExam) => {
    const currentIndex = EXAMS.findIndex(e => e.id === currentExam.id);
    if (currentIndex !== -1 && currentIndex < EXAMS.length - 1) {
      const nextEx = EXAMS[currentIndex + 1];
      if (nextEx.title === currentExam.title) {
        setExam(nextEx);
      } else {
        setExam(null);
      }
    } else {
      setExam(null);
    }
  };

  if (!isReady) {
    return (
      <div className="splash-screen">
        <div className="splash-logo"><LogoImage size={180} /></div>
        <h1 className="de" style={{ color: "var(--text)", fontSize: "2.5em", marginTop: 20, fontWeight: 900 }}>EchtPrüfung</h1>
      </div>
    );
  }

  if (!userLang) {
    return (
      <div className="auth-screen">
        <div className="auth-card">
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <LogoImage size={80} />
            <h2 style={{ marginTop: 16, fontWeight: 900, fontSize: "1.5em" }}>{t("choose_lang", "ar")}</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.95em", marginTop: 8 }}>{t("lang_note", "ar")}</p>
          </div>
          <div className="lang-grid">
            {LANGS.map(l => (
              <button key={l.c} onClick={() => handleLangSelect(l.c)} className="lang-btn">
                <span style={{ fontSize: "1.6em" }}>{l.f}</span>
                <span style={{ fontSize: "0.95em", fontWeight: 800 }}>{l.n}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="auth-screen">
        <div className="auth-card">
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <LogoImage size={80} />
            <h2 style={{ marginTop: 16, fontWeight: 900, fontSize: "1.5em" }}>{t("welcome", userLang)}</h2>
          </div>
          <form onSubmit={handleAuth}>
            <input className="auth-input" name="code" placeholder={t("id_placeholder", userLang)} required />
            <button type="submit" className="auth-btn">{t("login", userLang)}</button>
          </form>
          <div style={{ textAlign: "center", margin: "20px 0", color: "var(--muted)", fontSize: "0.9em" }}>{t("or", userLang)}</div>
          <button className="auth-btn guest" onClick={handleGuest}>👤 {t("guest", userLang)}</button>
        </div>
      </div>
    );
  }

  if (exam) {
    return (
      <ExamView
        exam={exam}
        userLang={userLang}
        dark={dark}
        setDark={setDark}
        onBack={() => setExam(null)}
        onNext={() => handleNextExam(exam)}
        onSave={() => {}}
      />
    );
  }

  return (
    <div style={{ paddingBottom: 100 }}>
      <div className="header">
        <div className="brand">
          <div className="logo"><LogoImage size={46} /></div>
          <div>
            <div className="header-title">EchtPrüfung</div>
            <div className="header-subtitle">
              <span>Deutsch {level}</span> • <span>{LANGS.find(l => l.c === userLang)?.f}</span>
              <span>{LANGS.find(l => l.c === userLang)?.n}</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btnI" onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button className="btnI" onClick={() => setSettings(true)}>⚙️</button>
          <button className="btnI" onClick={() => setMenu(true)}>☰</button>
        </div>
      </div>

      <main style={{ margin: "0 12px", paddingTop: 10 }}>
        {view === "home" && (
          <div className="card" style={{ textAlign: "center", padding: 40 }}>
            <LogoImage size={90} />
            <h2 className="de" style={{ margin: "20px 0 8px", fontSize: "2em", fontWeight: 900 }}>EchtPrüfung</h2>
            <p style={{ color: "var(--muted)" }}>{t("banner_title", userLang)}</p>
            <div style={{ display: "flex", gap: 10, marginTop: 20, justifyContent: "center" }}>
              <button className={"modeBtn " + (level === "B1" ? "on" : "")} onClick={() => setLevel("B1")} style={{ flex: 1 }}>B1</button>
              <button className={"modeBtn " + (level === "B2" ? "on" : "")} onClick={() => setLevel("B2")} style={{ flex: 1 }}>B2</button>
            </div>
          </div>
        )}

        {view === "lesen" && (
          <div>
            <h1 className="de" style={{ textAlign: "center", color: "var(--red)", marginBottom: 16, fontSize: "2.2em" }}>Lesen</h1>
            <input
              type="text"
              placeholder={t("search_placeholder", userLang)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: "1px solid var(--line)", background: "var(--card)", color: "var(--text)", fontSize: "1em", outline: "none", marginBottom: 16 }}
            />
            {uniqueTitles.map(title => (
              <button key={title} className="card" onClick={() => setSelectedExamTitle(title)} style={{ width: "100%", textAlign: "right", display: "block", color: "var(--text)", padding: 20 }}>
                <div className="de" style={{ fontWeight: 900, fontSize: "1.2em" }}>{title}</div>
              </button>
            ))}
          </div>
        )}

        {view === "horen" && (
          <div>
            {!showHorenLessons ? (
              <HorenGateway onStart={() => setShowHorenLessons(true)} userLang={userLang} />
            ) : (
              <div>
                <button onClick={() => setShowHorenLessons(false)} className="btn ghost" style={{ width: "auto", padding: "8px 16px", marginBottom: 16 }}>
                  ← {t("back_btn", userLang)}
                </button>
                {HOREN_EXAMS.map(ex => (
                  <HorenCard key={ex.id} exam={ex} userLang={userLang} showTranslation={false} />
                ))}
              </div>
            )}
          </div>
        )}

        {view === "schreiben" && (
          <SchreibenView userLang={userLang} dark={dark} setDark={setDark} level={level} setLevel={setLevel} isPaid={false} isAdmin={false} trialActive={true} />
        )}

        {(view === "sprechen" || view === "pruefung") && (
          <div className="card" style={{ textAlign: "center", padding: 40 }}>
            <h2>{t("coming_soon", userLang)}</h2>
          </div>
        )}
      </main>

      <nav className="nav">
        {[
          { id: "home", label: t("home", userLang), icon: "🏠" },
          { id: "lesen", label: t("lesen", userLang), icon: "📖" },
          { id: "horen", label: t("horen", userLang), icon: "🎧" },
          { id: "schreiben", label: t("schreiben", userLang), icon: "✍️" },
          { id: "sprechen", label: t("sprechen", userLang), icon: "🎙️" },
          { id: "pruefung", label: t("pruefung", userLang), icon: "🎓" }
        ].map(item => (
          <button key={item.id} className={view === item.id ? "on" : ""} onClick={() => go(item.id)}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {selectedExamTitle && (
        <div className="overlay" onClick={() => setSelectedExamTitle(null)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 className="de" style={{ margin: 0, fontSize: "1.3em", fontWeight: 900 }}>{selectedExamTitle}</h3>
              <button className="btnI" onClick={() => setSelectedExamTitle(null)}>✕</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Teile 1", "Teile 2", "Teile 3", "Sprach 1", "Sprach 2"].map(subName => {
                const existingExam = EXAMS.find(e => e.title === selectedExamTitle && e.level === level && e.sub === subName);
                return (
                  <button
                    key={subName}
                    className="btn ghost"
                    disabled={!existingExam}
                    style={{ padding: "16px", fontSize: "1.1em", display: "flex", justifyContent: "space-between", alignItems: "center", opacity: existingExam ? 1 : 0.4, borderRadius: 14 }}
                    onClick={() => {
                      if (existingExam) { setExam(existingExam); setSelectedExamTitle(null); }
                    }}
                  >
                    <span className="de" style={{ fontWeight: 800 }}>{subName}</span>
                    {existingExam && <span>→</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {menu && (
        <div className="overlay" onClick={() => setMenu(false)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 style={{ margin: 0 }}>{t("side_menu", userLang)}</h3>
              <button className="btnI" onClick={() => setMenu(false)}>✕</button>
            </div>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ width: 80, height: 80, margin: "0 auto 12px", borderRadius: "50%", background: "linear-gradient(135deg, #111 33%, #DD0000 33%, #DD0000 66%, #FFCE00 66%)", padding: 3 }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--card)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5em", fontWeight: 900, color: "var(--ink)" }}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <h2 style={{ margin: 0 }}>{user.name}</h2>
            </div>
            <button className="btn" onClick={logout}>{t("logout", userLang)}</button>
          </div>
        </div>
      )}

      {settings && (
        <div className="overlay" onClick={() => setSettings(false)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <strong style={{ fontSize: "1.3em" }}>{t("settings", userLang)}</strong>
              <button className="btnI" onClick={() => setSettings(false)}>✕</button>
            </div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontWeight: 900, fontSize: "1.1em", display: "block", marginBottom: 12 }}>{t("change_lang", userLang)}</span>
              <div className="lang-grid" style={{ maxHeight: 200 }}>
                {LANGS.map(lang => (
                  <button key={lang.c} onClick={() => { setUserLang(lang.c); localStorage.setItem("ep_lang", lang.c); }} className={`lang-btn ${userLang === lang.c ? "on" : ""}`} style={{ padding: "10px" }}>
                    <span style={{ fontSize: "1.2em" }}>{lang.f}</span>
                    <span style={{ fontSize: "0.85em" }}>{lang.n}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
