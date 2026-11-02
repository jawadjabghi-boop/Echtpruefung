// ==========================================
// app.js — التطبيق الرئيسي (النسخة النهائية والمحمية)
// ==========================================

var useState = React.useState;
var useEffect = React.useEffect;
var useRef = React.useRef;
var Component = React.Component;

// 🛡️ دالة حساب بصمة الهاتف (باش نمنعو تكرار التجربة)
async function getDeviceFingerprint() {
  try {
    const parts = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      screen.colorDepth,
      new Date().getTimezoneOffset()
    ];
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(parts.join('|')));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  } catch (e) { return null; }
}

var ErrorBoundary = class extends Component {
  constructor(p) { super(p); this.state = { err: null }; }
  static getDerivedStateFromError(err) { return { err }; }
  componentDidCatch(err, info) { console.error("💥 App Error:", err, info); }
  render() {
    if (this.state.err) {
      return (
        <div style={{ padding: 30, fontFamily: "Cairo, sans-serif", textAlign: "center", direction: "rtl" }}>
          <h2 style={{ color: "#DD0000" }}>⚠️ وقع خطأ فـ التطبيق</h2>
          <pre style={{ background: "#FEE2E2", padding: 16, borderRadius: 12, textAlign: "left", direction: "ltr", fontSize: 12, overflow: "auto", whiteSpace: "pre-wrap" }}>
            {String((this.state.err && this.state.err.message) || this.state.err)}
          </pre>
          <button onClick={() => location.reload()} style={{ padding: "12px 24px", background: "#111", color: "#FFCE00", border: "none", borderRadius: 12, fontWeight: 900, cursor: "pointer", marginTop: 20 }}>إعادة التحميل</button>
        </div>
      );
    }
    return this.props.children;
  }
};

function App() {
  const [user, setUser] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [trialActive, setTrialActive] = useState(false);
  const [trialEndsAt, setTrialEndsAt] = useState(null);
  const [trialCountdown, setTrialCountdown] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [view, setView] = useState("home");
  const [level, setLevel] = useState("B1");
  const [exam, setExam] = useState(null);
  const [dark, setDark] = useState(false);
  const [fs, setFs] = useState(() => { try { return Number(localStorage.getItem("ep_fs")) || 100; } catch (e) { return 100; } });
  const [settings, setSettings] = useState(false);
  const [results, setResults] = useState(() => { try { return JSON.parse(localStorage.getItem("ep_results") || "{}"); } catch (e) { return {}; } });
  const [searchQuery, setSearchQuery] = useState("");
  const [userLang, setUserLang] = useState(null);
  const [selectedExamTitle, setSelectedExamTitle] = useState(null);
  const [showHorenLessons, setShowHorenLessons] = useState(false);
  const [showHorenTrans, setShowHorenTrans] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1500);
    const savedUser = localStorage.getItem("ep_user");
    const savedLang = localStorage.getItem("ep_lang");
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed.isGuest || parsed.id) setUser(parsed);
        else localStorage.removeItem("ep_user");
      } catch (e) { localStorage.removeItem("ep_user"); }
    }
    if (savedLang) setUserLang(savedLang);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);

  useEffect(() => {
    if (user && !user.isGuest && user.id) {
      const deviceId = localStorage.getItem("ep_device_id");
      sb.from('profiles').select('is_paid, active_device_id, trial_started_at, is_blocked, is_admin').eq('id', user.id).single()
        .then(({ data, error }) => {
          if (error) { console.error("profiles fetch:", error); return; }
          if (data) {
            if (data.is_blocked) {
              alert("⚠️ تم حظر حسابك. تواصل مع الدعم الفني.");
              localStorage.removeItem("ep_user");
              setUser(null);
              setIsBlocked(true);
              return;
            }
            setIsBlocked(false);
            setIsAdmin(!!data.is_admin);
            if (data.active_device_id && data.active_device_id !== deviceId) {
              alert("⚠️ تم تسجيل الدخول من هاتف آخر. تم إنهاء الجلسة السابقة.");
              localStorage.removeItem("ep_user");
              setUser(null);
              setIsPaid(false);
              setTrialActive(false);
              return;
            }
            setIsPaid(!!data.is_paid);
            if (data.trial_started_at && !data.is_paid) {
              const start = new Date(data.trial_started_at).getTime();
              const end = start + 24 * 60 * 60 * 1000;
              if (Date.now() < end) {
                setTrialActive(true);
                setTrialEndsAt(end);
              } else {
                setTrialActive(false);
                setTrialEndsAt(null);
              }
            }
          }
        });
    } else {
      setIsPaid(false);
      setIsAdmin(false);
      setIsBlocked(false);
      setTrialActive(false);
      setTrialEndsAt(null);
    }
  }, [user]);

  // 🛡️ الجلسة الواحدة فقط (كل 30 ثانية)
  useEffect(() => {
    if (!user || user.isGuest || !user.id) return;
    const deviceId = localStorage.getItem("ep_device_id");
    if (!deviceId) return;
    const interval = setInterval(async () => {
      try {
        const { data } = await sb.from('profiles').select('active_device_id, is_blocked').eq('id', user.id).single();
        if (data) {
          if (data.is_blocked) {
            alert("⚠️ تم حظر حسابك.");
            localStorage.removeItem("ep_user");
            setUser(null);
            setIsBlocked(true);
            await sb.auth.signOut();
            return;
          }
          if (data.active_device_id && data.active_device_id !== deviceId) {
            alert("⚠️ تم تسجيل الدخول من هاتف آخر. تم إنهاء الجلسة السابقة.");
            localStorage.removeItem("ep_user");
            setUser(null);
            setIsPaid(false);
            setTrialActive(false);
            await sb.auth.signOut();
          }
        }
      } catch (e) { /* silent */ }
    }, 30000);
    return () => clearInterval(interval);
  }, [user]);

  useEffect(() => {
    if (!trialActive || !trialEndsAt) { setTrialCountdown(""); return; }
    const update = () => {
      const diff = trialEndsAt - Date.now();
      if (diff <= 0) { setTrialActive(false); setTrialCountdown(""); return; }
      const h = Math.floor(diff / (60 * 60 * 1000));
      const m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      setTrialCountdown(`${h}س ${m}د`);
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, [trialActive, trialEndsAt]);

  useEffect(() => { document.documentElement.style.setProperty("--fs", fs / 100); try { localStorage.setItem("ep_fs", fs); } catch (e) {} }, [fs]);
  useEffect(() => { try { localStorage.setItem("ep_results", JSON.stringify(results)); } catch (e) {} }, [results]);

  useEffect(() => {
    let interval = null;
    if (exam && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [exam, timeLeft]);

  const handleLangSelect = (c) => { setUserLang(c); localStorage.setItem("ep_lang", c); };

  // 🛡️ إصلاح مشكل الدخول + إضافة بصمة الهاتف
  const handleAuth = async (e) => {
    e.preventDefault();
    const uniqueName = e.target.unique_name.value.trim();
    const uniqueCode = e.target.unique_code.value.trim();
    if (!uniqueName || !uniqueCode) return;

    let deviceId = localStorage.getItem("ep_device_id");
    if (!deviceId) {
      deviceId = (window.crypto && window.crypto.randomUUID) ? crypto.randomUUID() : ('dev_' + Date.now() + '_' + Math.random().toString(36).slice(2));
      localStorage.setItem("ep_device_id", deviceId);
    }

    const email = `${uniqueName}@echt.com`;
    
    // 1. نحاولو ندخلو (Sign In) أولاً
    const { data: signInData, error: signInError } = await sb.auth.signInWithPassword({ email, password: uniqueCode });

    if (signInError) {
      // 2. إلا كان الخطأ هو "Invalid login credentials" (يعني الحساب ما كاينش)
      if (signInError.message.includes('Invalid login credentials')) {
        
        // 3. نحسبو بصمة الهاتف ونحاولو نسجلو (Sign Up) حساب جديد
        const fingerprint = await getDeviceFingerprint();
        if (!fingerprint) return alert("⚠️ ما قدرناش نتعرفو على الجهاز. جرب متصفح آخر.");

        const { data: signUpData, error: signUpError } = await sb.auth.signUp({ 
          email, 
          password: uniqueCode,
          options: {
            data: { fingerprint: fingerprint } // 👈 كنصيفطو البصمة للسيرفر
          }
        });
        
        if (signUpError) {
          const errMsg = signUpError.message || "";
          
          // 👇 هنا التعديل ديال الرسالة (مترجمة ونقية بلا أي ذكر للإيميل ولا الهاتف)
          if (errMsg.includes('trial_already_used') || errMsg.includes('Database error') || errMsg.includes('missing_fingerprint')) {
            
            const msgMap = {
              ar: "لقد استفدت من التجربة المجانية ولديك حساب بالفعل.",
              ma: "راك استافدتي من التجربة المجانية وكتوفر على حساب بالفعل.",
              de: "Du hast bereits von der kostenlosen Testversion profitiert und hast ein Konto.",
              en: "You have already benefited from the free trial and have an account.",
              fr: "Vous avez déjà bénéficié de l'essai gratuit et possédez un compte.",
              es: "Ya has aprovechado la prueba gratuita y tienes una cuenta.",
              tr: "Zaten ücretsiz deneme sürümünden yararlandınız ve bir hesabınız var.",
              fa: "شما قبلاً از نسخه آزمایشی رایگان استفاده کرده‌اید و حساب دارید."
            };
            
            // كيرجع الرسالة حسب اللغة اللي ختارها المستخدم، وإلا كيرجع بالعربية
            return alert(msgMap[userLang] || msgMap['ar']);
          }
          
          if (errMsg.includes('User already registered')) {
            return alert("⚠️ هذا الاسم مستعمل من قبل. يرجى التأكد من كلمة المرور أو اختيار اسم آخر.");
          }
          
          // أي خطأ آخر
          return alert("⚠️ حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.");
        }
        
        if (!signUpData?.user) return alert("ما قدرناش نصاوبو الحساب.");
        
        const { error: upsertError } = await sb.from('profiles').upsert([{
          id: signUpData.user.id,
          email: uniqueName,
          unique_name: uniqueName,
          is_paid: false,
          active_device_id: deviceId,
          is_blocked: false,
          trial_started_at: new Date().toISOString()
        }], { onConflict: 'id' });
        
        if (upsertError) return alert("مشكل فـ إنشاء الملف الشخصي: " + upsertError.message);
        
        const userObj = { ...signUpData.user, name: uniqueName, isGuest: false };
        setUser(userObj);
        localStorage.setItem("ep_user", JSON.stringify(userObj));
        
      } else {
        return alert("مشكل فـ الدخول: " + signInError.message);
      }
    } else {
      // 4. تسجيل الدخول نجح
      await sb.from('profiles').update({ active_device_id: deviceId }).eq('id', signInData.user.id);
      const userObj = { ...signInData.user, name: uniqueName, isGuest: false };
      setUser(userObj);
      localStorage.setItem("ep_user", JSON.stringify(userObj));
    }
  };

  const handleGuest = () => {
    const guest = { name: "زائر", isGuest: true };
    setUser(guest);
    setIsPaid(false);
    setIsAdmin(false);
    setIsBlocked(false);
    setTrialActive(false);
    setTrialEndsAt(null);
    localStorage.setItem("ep_user", JSON.stringify(guest));
  };

  const logout = () => {
    localStorage.removeItem("ep_user");
    setIsPaid(false);
    setIsAdmin(false);
    setIsBlocked(false);
    setTrialActive(false);
    setTrialEndsAt(null);
    setUser(null);
    sb.auth.signOut();
  };

  const saveResult = (id, score, max) => setResults(r => ({ ...r, [id]: { score, max, date: Date.now() } }));
  
  const go = (v) => {
    setView(v);
    setExam(null);
    setShowHorenLessons(false);
    setIsSideMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const levelExams = EXAMS.filter(e => e.level === level);
  const uniqueTitles = Array.from(new Set(levelExams.map(e => e.title))).filter(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

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
            <p style={{color: "var(--muted)", fontSize: "0.95em", marginTop: 8}}>{t("lang_note", "ar")}</p>
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
            <input className="auth-input" name="unique_name" placeholder={t("unique_name_placeholder", userLang)} required />
            <input className="auth-input" name="unique_code" placeholder={t("unique_code_placeholder", userLang)} required />
            <button type="submit" className="auth-btn">{t("login", userLang)}</button>
          </form>
          <div style={{textAlign:"center", margin:"20px 0", color:"var(--muted)", fontSize: "0.9em"}}>{t("or", userLang)}</div>
          <button className="auth-btn guest" onClick={handleGuest}>
            👤 {t("guest", userLang)}
          </button>
        </div>
      </div>
    );
  }

  if (isBlocked) {
    return (
      <div className="auth-screen">
        <div className="auth-card" style={{ textAlign: "center" }}>
          <h2 style={{ color: "var(--red)", fontWeight: 900 }}>🚫 {t("account_blocked", userLang)}</h2>
          <p style={{ color: "var(--muted)" }}>{t("contact_support", userLang)}</p>
          <button className="auth-btn" onClick={logout}>{t("logout", userLang)}</button>
        </div>
      </div>
    );
  }

  if (exam) {
    return <ExamView
      exam={exam}
      userLang={userLang}
      dark={dark}
      setDark={setDark}
      onBack={() => {setExam(null); setTimeLeft(30*60);}}
      onNext={() => handleNextExam(exam)}
      onSave={saveResult}
      timeLeft={timeLeft}
      setTimeLeft={setTimeLeft}
    />;
  }

  return (
    <div style={{ paddingBottom: 100 }}>
      <div className={`menu-overlay ${isSideMenuOpen ? 'active' : ''}`} onClick={() => setIsSideMenuOpen(false)}></div>
      <nav className={`side-menu ${isSideMenuOpen ? 'active' : ''}`}>
        <div className="side-menu-header">
            <div className="logo-circle">De</div>
            <h2>EchtPrüfung</h2>
            <p style={{fontSize: '0.8em', opacity: 0.8}}>{user.name}</p>
        </div>
        <a href="#" onClick={(e) => {e.preventDefault(); setLevel('B1'); go('lesen'); setIsSideMenuOpen(false);}} className={`menu-item ${level === 'B1' ? 'active' : ''}`}>
            📚 {t("b1_level", userLang)}
        </a>
        <a href="#" onClick={(e) => {e.preventDefault(); setLevel('B2'); go('lesen'); setIsSideMenuOpen(false);}} className={`menu-item ${level === 'B2' ? 'active' : ''}`}>
            📚 {t("b2_level", userLang)}
        </a>
        {isAdmin && (
          <a href="#" onClick={(e) => {e.preventDefault(); go('admin'); setIsSideMenuOpen(false);}} className={`menu-item ${view === 'admin' ? 'active' : ''}`}>
            👑 {t("admin_panel", userLang)}
          </a>
        )}
      </nav>

      <div className="header">
        <div className="brand">
          <button className="btnI" onClick={() => setIsSideMenuOpen(true)} style={{ marginRight: 8 }}>
            ☰
          </button>
          <div className="logo"><LogoImage size={36} /></div>
          <div>
            <div className="header-title">EchtPrüfung</div>
            <div className="header-subtitle de">
              <span>Deutsch {level}</span> <span>•</span>
              <span style={{ fontSize: "1.2em" }}>{LANGS.find(l => l.c === userLang)?.f}</span>
              <span>{LANGS.find(l => l.c === userLang)?.n}</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <NotificationsBell userLang={userLang} />
          <button className="btnI" onClick={() => setDark(!dark)}>
            {dark ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg> : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
          </button>
          <button className="btnI" onClick={() => setSettings(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </button>
        </div>
      </div>

      <main style={{ margin: "0 12px", paddingTop: 10 }}>
        {view === "home" && (
          <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", minHeight: "450px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px 20px", border: "1px solid var(--line)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgba(15,27,51,0.3) 0%, rgba(15,27,51,0.95) 100%)", zIndex: 1 }} />
            <div style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%" }}>
              <div style={{ display: "inline-block", padding: 20, background: "rgba(255,255,255,0.1)", borderRadius: 28, backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <LogoImage size={90} />
              </div>
              <h2 className="de" style={{ margin: "20px 0 8px", fontSize: "2.2em", fontWeight: 900, color: "#FFF", textShadow: "0 2px 10px rgba(0,0,0,0.5)", letterSpacing: "-0.5px" }}>EchtPrüfung</h2>
              <div style={{ background: "rgba(245,184,46,0.15)", border: "1px solid var(--gold)", padding: "12px 20px", borderRadius: 16, margin: "0 auto 24px", maxWidth: "90%", backdropFilter: "blur(5px)" }}>
                <p style={{ margin: 0, color: "#FFF", fontSize: "1.1em", fontWeight: 900 }}>{t("banner_title", userLang)}</p>
                <p className="de" style={{ margin: "6px 0 0", color: "var(--gold)", fontSize: "0.85em", fontWeight: "bold", textAlign: "center" }}>{t("banner_sub", userLang)}</p>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", direction: "ltr", fontSize: "1.6em", fontWeight: 900, background: "rgba(255,255,255,0.95)", padding: "12px 32px", borderRadius: 20, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}>
                <span style={{ color: "#0F1B33" }}>B1</span><span style={{ color: "#DD0000" }}>&</span><span style={{ color: "#F5B82E" }}>B2</span>
              </div>
            </div>
          </div>
        )}

        {view === "lesen" && (
          <div>
            <h1 className="de" style={{ textAlign: "center", color: "var(--red)", marginBottom: 16, fontSize: "2.2em" }}>Lesen {level}</h1>
            {trialActive && !isPaid && (
              <div style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))", border: "1.5px solid #22C55E", borderRadius: 16, padding: 14, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: "2em" }}>🎁</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 900, color: "#22C55E", fontSize: "1em" }}>{t("trial_active", userLang)}</div>
                  <div style={{ color: "var(--muted)", fontSize: "0.85em" }}>{trialCountdown}</div>
                </div>
              </div>
            )}
            <div style={{ marginBottom: 16 }}>
              <input type="text" placeholder={t("search_placeholder", userLang)} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: "1px solid var(--line)", background: "var(--card)", color: "var(--text)", fontSize: "1em", outline: "none" }} />
            </div>
            {level === "B2" ? (
               <div className="card" style={{ textAlign: "center", padding: 40 }}><h2>{t("coming_soon", userLang)}</h2></div>
            ) : uniqueTitles.map(title => (
              <button key={title} className="card" onClick={() => setSelectedExamTitle(title)} style={{ width: "100%", textAlign: "right", display: "block", color: "var(--text)", padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div className="de" style={{ fontWeight: 900, fontSize: "1.2em" }}>{title}</div>
                    <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center", color: "var(--muted)", fontSize: ".9em" }}>
                      <span className="chip" style={{ background: "rgba(221,0,0,0.1)", color: "var(--red)", padding: "4px 10px", borderRadius: 8 }}>{level}</span>
                      <span>90 Min</span>
                    </div>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </div>
              </button>
            ))}
          </div>
        )}

        {view === "horen" && (
          <div>
            {level === "B2" ? (
               <div className="card" style={{ textAlign: "center", padding: 40, marginTop: 20 }}><h2>{t("coming_soon", userLang)}</h2></div>
            ) : !showHorenLessons ? (
              <HorenGateway onStart={() => setShowHorenLessons(true)} userLang={userLang} />
            ) : (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h1 className="de" style={{ margin: 0, color: "var(--red)", fontSize: "2.2em" }}>Hören {level}</h1>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={() => setShowHorenTrans(!showHorenTrans)} className="btnI" style={{ width: 40, height: 40, color: showHorenTrans ? "var(--blue)" : "var(--text)", borderColor: showHorenTrans ? "var(--blue)" : "var(--line)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 5h12M9 3v2c0 4.418-2.686 8-6 8m0-8h12m-6 0v2c0 4.418 2.686 8 6 8m-4-2l-4 8m2-4h4m-2 0l2 4"/></svg>
                    </button>
                    <button onClick={() => setShowHorenLessons(false)} className="btn ghost" style={{ width: "auto", padding: "8px 16px", fontSize: "0.9em" }}>{t("back_btn", userLang)}</button>
                  </div>
                </div>
                {HOREN_EXAMS.filter(ex => ex.level === level).map(ex => (
                  <HorenCard key={ex.id} exam={ex} userLang={userLang} showTranslation={showHorenTrans} />
                ))}
              </div>
            )}
          </div>
        )}

        {view === "schreiben" && <SchreibenView userLang={userLang} dark={dark} setDark={setDark} isPaid={isPaid} isAdmin={isAdmin} trialActive={trialActive} level={level} setLevel={setLevel} />}
        
        {view === "admin" && isAdmin && <AdminPanel userLang={userLang} onClose={() => go('home')} />}
        {(view === "sprechen" || view === "pruefung") && <div className="card" style={{ textAlign: "center", padding: 40 }}><h2>{t("coming_soon", userLang)}</h2></div>}
      </main>

      <nav className="nav">
        {[
          { id: "home", label: t("home", userLang), icon: "⌂" },
          { id: "lesen", label: t("lesen", userLang), icon: "📖" },
          { id: "horen", label: t("horen", userLang), icon: "🎧" },
          { id: "schreiben", label: t("schreiben", userLang), icon: "✎" },
          { id: "sprechen", label: t("sprechen", userLang), icon: "🎙" },
          { id: "pruefung", label: t("pruefung", userLang), icon: "🎓" }
        ].map((item) => (
          <button key={item.id} className={view === item.id ? "on" : ""} onClick={() => go(item.id)}>
            <span className="ic">{item.icon}</span>
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
                const isPremium = existingExam?.isPremium === true;
                const hasAccess = isPaid || trialActive || isAdmin;
                const showTrialHint = isPremium && trialActive && !isPaid && !isAdmin;

                if (isPremium && !hasAccess) {
                  return (
                    <button key={subName} className="btn ghost" style={{ color: "var(--red)", borderColor: "var(--red)", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", borderRadius: 14 }} onClick={() => wa(t("wa_upgrade_msg", userLang) + " - " + selectedExamTitle + " " + subName)}>
                      <span className="de" style={{ fontWeight: 800 }}>🔒 {subName} ({t("locked", userLang)})</span>
                      <span style={{ fontSize: "0.8em", fontWeight: "bold", color: "var(--red)" }}>⭐ {t("upgrade_pro", userLang)}</span>
                    </button>
                  );
                }

                return (
                  <button key={subName} className="btn ghost" disabled={!existingExam} style={{ padding: "16px", fontSize: "1.1em", display: "flex", justifyContent: "space-between", alignItems: "center", opacity: existingExam ? 1 : 0.4, borderRadius: 14 }} onClick={async () => {
                    if (!existingExam) return;
                    if (isPremium && hasAccess) {
                      const { data, error } = await sb.from('premium_lessons').select('data').eq('id', existingExam.id).single();
                      if (error || !data) {
                        alert("الدرس مازال ماحطيتوهش فسوبابيز: " + existingExam.id);
                      } else {
                        setExam(data.data); setSelectedExamTitle(null); setTimeLeft(30*60);
                      }
                    } else {
                      setExam(existingExam); setSelectedExamTitle(null); setTimeLeft(30*60);
                    }
                  }}>
                    <span className="de" style={{ fontWeight: 800, display: "flex", alignItems: "center", gap: 8 }}>
                      {subName}
                      {showTrialHint && <span style={{ fontSize: "0.7em", color: "#22C55E", padding: "2px 8px", background: "rgba(34,197,94,0.15)", borderRadius: 6, fontWeight: 900 }}>🎁 تجربة</span>}
                    </span>
                    {existingExam && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {settings && (
        <div className="overlay" onClick={() => setSettings(false)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <strong style={{fontSize:"1.3em"}}>{t("settings", userLang)}</strong>
              <button className="btnI" onClick={() => setSettings(false)}>✕</button>
            </div>
            <div style={{ marginBottom: 20 }}>
              <span style={{fontWeight:900, fontSize:"1.1em", display: "block", marginBottom: 12}}>{t("change_lang", userLang)}</span>
              <div className="lang-grid" style={{ maxHeight: 200 }}>
                {LANGS.map(lang => (
                  <button key={lang.c} onClick={() => { setUserLang(lang.c); localStorage.setItem("ep_lang", lang.c); }} className={`lang-btn ${userLang === lang.c ? "on" : ""}`} style={{ padding: "10px" }}>
                    <span style={{ fontSize: "1.2em" }}>{lang.f}</span>
                    <span style={{ fontSize: "0.85em" }}>{lang.n}</span>
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{fontWeight:900, fontSize:"1.1em"}}>{t("text_size", userLang)}</span>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <button className="btnI" onClick={() => setFs(Math.max(80, fs - 10))}>−</button>
                <span style={{ minWidth: 48, textAlign: "center", fontWeight: 900, fontSize:"1.1em" }}>{fs}%</span>
                <button className="btnI" onClick={() => setFs(Math.min(150, fs + 10))}>+</button>
              </div>
            </div>
            <button className="btn ghost" onClick={() => setFs(100)} style={{ padding: 14 }}>{t("reset_size", userLang)}</button>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <button onClick={logout} className="btn ghost" style={{ color: "var(--red)", borderColor: "var(--red)" }}>{t("logout", userLang)}</button>
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
