// ==========================================
// components.js
// واجهات التطبيق (اللوجو، الهورن، القراية، الكتابة، الأدمن...)
// ==========================================

const { useState, useEffect, useRef } = React;

const LogoImage = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#111111" /><stop offset="100%" stopColor="#222222" /></linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFCE00" /><stop offset="100%" stopColor="#F5B82E" /></linearGradient>
    </defs>
    <rect width="100" height="100" rx="24" fill="url(#bgGrad)" />
    <rect width="98" height="98" x="1" y="1" rx="23" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
    <rect x="18" y="28" width="36" height="10" rx="4" fill="#111111" />
    <rect x="18" y="44" width="36" height="10" rx="4" fill="#DD0000" />
    <rect x="18" y="60" width="36" height="10" rx="4" fill="url(#goldGrad)" />
    <path d="M 54 70 L 54 30 L 70 30 C 84 30, 84 52, 70 52 L 54 52" stroke="url(#goldGrad)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="80" cy="80" r="5" fill="#DD0000" />
  </svg>
);

const globalTransCache = {};

function AutoTrans({ text, lang, force = false }) {
  const [translated, setTranslated] = useState(text);
  
  useEffect(() => {
    if (!text) return;
    if (!force && ['ar', 'ma', 'en', 'fr', 'de'].includes(lang)) {
      setTranslated(text);
      return;
    }
    
    const cacheKey = `${lang}_${text}`;
    if (globalTransCache[cacheKey]) {
      setTranslated(globalTransCache[cacheKey]);
      return;
    }

    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`)
      .then(res => res.json())
      .then(data => {
        if (data && data[0]) {
          const result = data[0].map(item => item[0]).join('');
          globalTransCache[cacheKey] = result;
          setTranslated(result);
        }
      })
      .catch(() => setTranslated(text));
  }, [text, lang, force]);

  return <span>{translated}</span>;
}

function SmartTrans({ obj, lang }) {
  if (!obj) return "";
  const textDe = obj.de || obj.en || (obj.q ? obj.q : "") || (typeof obj === 'string' ? obj : "");
  
  if (typeof obj === 'object' && obj[lang]) {
    return <span>{obj[lang]}</span>;
  }
  
  if (['ar', 'ma', 'en', 'fr'].includes(lang)) {
     return <span>{typeof obj === 'object' ? (obj[lang] || obj['en'] || obj['ar'] || textDe) : textDe}</span>;
  }

  return <AutoTrans text={textDe} lang={lang} />;
}

function HorenCard({ exam, userLang, showTranslation }) {
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [audioTime, setAudioTime] = useState(0);
  const audioInterval = useRef(null);

  const pts = 5;
  const total = exam.items.length * pts;
  const score = exam.items.filter(it => ans[it.n] === it.c).length * pts;

  useEffect(() => {
    return () => {
      clearInterval(audioInterval.current);
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const playHorenAudio = (segments) => {
    if (!window.speechSynthesis) {
      alert("المتصفح ديالك ماكيدعمش النطق الصوتي.");
      setIsPlaying(false);
      return;
    }
    window.speechSynthesis.cancel();
    let currentIndex = 0;

    const playNext = () => {
      if (currentIndex >= segments.length) {
        setIsPlaying(false);
        clearInterval(audioInterval.current);
        return;
      }
      const segment = segments[currentIndex];
      const utterance = new SpeechSynthesisUtterance(segment.text);
      utterance.lang = 'de-DE';
      utterance.pitch = segment.pitch || 1;
      utterance.rate = segment.rate || 1;
      utterance.onend = () => {
        currentIndex++;
        setTimeout(playNext, 500);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
        clearInterval(audioInterval.current);
      };
      window.speechSynthesis.speak(utterance);
    };
    playNext();
  };

  const toggleAudio = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      clearInterval(audioInterval.current);
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    setAudioTime(0);
    audioInterval.current = setInterval(() => {
      setAudioTime(prev => prev + 1);
    }, 1000);
    playHorenAudio(exam.audio);
  };

  const pickHoren = (n, c) => {
    if (done) return;
    setAns(prev => ({ ...prev, [n]: prev[n] === c ? undefined : c }));
  };

  const labelR = userLang === 'ar' || userLang === 'ma' ? "صحيح" : userLang === 'fr' ? "Vrai" : userLang === 'en' ? "True" : userLang === 'hi' ? "सही" : "";
  const labelF = userLang === 'ar' || userLang === 'ma' ? "خطأ" : userLang === 'fr' ? "Faux" : userLang === 'en' ? "False" : userLang === 'hi' ? "गलत" : "";

  // هنا درنا الترجمة ديال (المعدل)
  const displayTitle = exam.title.replace("(المعدل)", t("modified", userLang));

  return (
    <div className="card" style={{ padding: 20, marginBottom: 24, border: "1px solid var(--line)" }}>
      <h3 className="de" style={{ fontSize: "1.3em", fontWeight: 900, margin: "0 0 16px", color: "var(--ink)" }}>
        {displayTitle}
      </h3>

      <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--paper)", padding: 16, borderRadius: 20, marginBottom: 20 }}>
        <button onClick={toggleAudio} style={{
          width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
          background: isPlaying ? "var(--red)" : "#22C55E", color: "#FFF",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 20px rgba(34, 197, 94, 0.3)", transition: "all 0.2s"
        }}>
          {isPlaying ? <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg> : <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>}
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900, color: "var(--muted)", fontSize: "0.9em", marginBottom: 6 }}>
            <span style={{ color: isPlaying ? "var(--red)" : "var(--ink)", direction: 'ltr' }}>{Math.floor(audioTime / 60)}:{(audioTime % 60).toString().padStart(2, '0')}</span>
            <span>Audio Player</span>
          </div>
          <div style={{ height: 8, background: "var(--line)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: isPlaying ? "100%" : "0%", background: isPlaying ? "var(--red)" : "#22C55E", transition: isPlaying ? "width 60s linear" : "none" }} />
          </div>
        </div>
      </div>

      <div style={{ border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
        <div style={{ display: "flex", background: "var(--paper)", borderBottom: "1px solid var(--line)", fontWeight: 900, color: "var(--muted)", fontSize: "0.85em", padding: "12px 0" }}>
          <div style={{ width: 60, textAlign: "center", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.3em' }}>R</span>
            {labelR && <span style={{ fontSize: '0.7em', fontWeight: 'normal', marginTop: 2 }}>{labelR}</span>}
          </div>
          <div style={{ width: 60, textAlign: "center", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.3em' }}>F</span>
            {labelF && <span style={{ fontSize: '0.7em', fontWeight: 'normal', marginTop: 2 }}>{labelF}</span>}
          </div>
          <div style={{ flex: 1, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>AUSSAGE</div>
        </div>
        {exam.items.map((it) => {
          const isRight = ans[it.n] === "R";
          const isFalsch = ans[it.n] === "F";
          const isCorrect = ans[it.n] === it.c;
          
          let rClass = "rf-circle", fClass = "rf-circle";
          
          if (done) {
            if (it.c === "R") rClass += " good"; else if (isRight) rClass += " bad"; else rClass += " faded";
            if (it.c === "F") fClass += " good"; else if (isFalsch) fClass += " bad"; else fClass += " faded";
          } else {
            if (isRight) rClass += " sel";
            if (isFalsch) fClass += " sel";
          }
          
          let rowBg = "var(--card)";
          if (done) {
            rowBg = isCorrect ? "var(--okbg)" : "var(--badbg)";
          }
          
          return (
            <div key={it.n} style={{ display: "flex", alignItems: "center", borderBottom: "1px solid var(--line)", padding: "12px 0", background: rowBg }}>
              <div style={{ width: 60, display: "flex", justifyContent: "center" }}>
                <div className={rClass} onClick={() => pickHoren(it.n, "R")}></div>
              </div>
              <div style={{ width: 60, display: "flex", justifyContent: "center" }}>
                <div className={fClass} onClick={() => pickHoren(it.n, "F")}></div>
              </div>
              <div style={{ flex: 1, fontSize: "0.95em", lineHeight: 1.6, paddingRight: 10 }}>
                <span style={{ opacity: 0.5, marginLeft: 8, fontWeight: 900 }}>{it.n}</span>
                <span className="de">{it.de}</span>
                {showTranslation && (
                  <div style={{ marginTop: 8, fontSize: "0.85em", color: "var(--muted)", direction: userLang === 'hi' ? 'ltr' : "rtl", textAlign: userLang === 'hi' ? 'left' : "right" }}>
                    <SmartTrans obj={it} lang={userLang} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => setShowStory(!showStory)} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--blue)", fontWeight: 800, background: "rgba(37, 99, 235, 0.1)", padding: "10px 16px", borderRadius: 12 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          {t("story_memo", userLang)}
        </button>
        <div style={{ display: "flex", gap: 10 }}>
          {!done ? (
            <button onClick={() => setDone(true)} style={{ background: "#22C55E", color: "#FFF", padding: "10px 24px", borderRadius: 12, fontWeight: 900, boxShadow: "0 6px 15px rgba(34,197,94,0.3)" }}>{t("check_btn", userLang)}</button>
          ) : (
            <div style={{ fontWeight: 900, color: score === total ? "var(--okc)" : "var(--red)", display: "flex", alignItems: "center", fontSize: "1.1em" }}>{score} / {total}</div>
          )}
        </div>
      </div>
      {showStory && (
        <div className="t2-ar" style={{ marginTop: 16 }}>
          {userLang === 'ar' || userLang === 'ma' ? exam.items[0].story : (
            <AutoTrans text={exam.items[0].story} lang={userLang} force={true} />
          )}
        </div>
      )}
    </div>
  );
}

function HorenGateway({ onStart, userLang }) {
  return (
    <div style={{ paddingBottom: 100 }}>
      <h1 className="de" style={{ fontSize: "2.6em", fontWeight: 900, margin: "4px 0 14px", textAlign: "center" }}>Hören</h1>
      <div className="horen-gateway-card">
        <div className="horen-gateway-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
        </div>
        <h2 style={{ fontSize: "1.5em", fontWeight: 900, margin: 0 }}>{t("listen_title", userLang)}</h2>
        <p style={{ color: "var(--muted)", fontSize: "1em", margin: 0, lineHeight: 1.6 }}>
          {t("listen_desc", userLang)}
        </p>
        <button className="horen-start-btn" onClick={onStart}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 3l14 9-14 9V3z"/></svg>
          {t("start_now", userLang)}
        </button>
      </div>
    </div>
  );
}

function ExamView({ exam, onBack, onNext, dark, setDark, onSave, userLang, timeLeft, setTimeLeft }) {
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(null);
  const [modalGap, setModalGap] = useState(null);
  const [activeGap, setActiveGap] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [excluded, setExcluded] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mode, setMode] = useState("exam");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) setScrollProgress((currentScrollY / totalScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pts = exam.type === "matching" ? 2.5 : (exam.type.includes("sprach") ? 1.5 : 5);
  const total = exam.items.length * pts;
  const score = exam.items.filter(it => ans[it.n] === it.c).length * pts;

  const usedElsewhere = (n, k) => {
    if ((exam.type !== "matching" && exam.type !== "headings") || k === "X") return false;
    return Object.entries(ans).some(([id, v]) => Number(id) !== n && v === k);
  };

  const pick = (it, k) => {
    if (done !== null) return;
    if (usedElsewhere(it.n, k)) return;
    if (ans[it.n] === k) {
      const newAns = { ...ans };
      delete newAns[it.n];
      setAns(newAns);
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
    const isDone = done !== null || (mode === "practice" && sel !== undefined);
    if (isDone) {
      if (k === it.c) return "opt good";
      if (sel === k) return "opt bad";
      return "opt faded";
    }
    if (mode === "exam") {
      if (sel === k) return "opt sel";
      return "opt" + (usedElsewhere(it.n, k) ? " dis" : "");
    }
    if (sel === undefined) return "opt" + (usedElsewhere(it.n, k) ? " dis" : "");
    return "opt" + (usedElsewhere(it.n, k) ? " dis" : "");
  };

  const finish = () => { setDone(score); onSave(exam.id, score, total); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const reset = () => { setAns({}); setDone(null); setShowTranslation(false); setExcluded({}); window.scrollTo(0, 0); };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ paddingBottom: 120 }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 4, zIndex: 100, backgroundImage: "linear-gradient(to right, #111 33.33%, #DD0000 33.33%, #DD0000 66.66%, #FFCE00 66.66%)", backgroundSize: `${scrollProgress}% 100%`, backgroundRepeat: "no-repeat" }} />

      <div style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={onBack} className="btnI" style={{ width: 36, height: 36 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div>
            <div className="de" style={{ fontWeight: 900, fontSize: "1em", lineHeight: 1.2 }}>{exam.title}</div>
            <div className="de" style={{ fontSize: ".7em", color: "var(--muted)", fontWeight: "bold" }}>{exam.type === "horen" ? "HÖREN" : "LESEN"} · {exam.sub.toUpperCase()}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
           <div className="timer-badge" style={{ padding: '4px 10px', fontSize: '14px' }}>
             ⏱️ {formatTime(timeLeft)}
           </div>
           <button onClick={() => setShowTranslation(!showTranslation)} className="btnI" style={{ width: 40, height: 40, color: showTranslation ? "var(--blue)" : "var(--text)", borderColor: showTranslation ? "var(--blue)" : "var(--line)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 5h12M9 3v2c0 4.418-2.686 8-6 8m0-8h12m-6 0v2c0 4.418 2.686 8 6 8m-4-2l-4 8m2-4h4m-2 0l2 4"/></svg>
           </button>
           <button onClick={() => setDark(!dark)} className="btnI" style={{ width: 36, height: 36 }}>
            {dark ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg> : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
           </button>
        </div>
      </div>

      <div style={{ margin: "10px 12px" }}>
        {exam.type !== "matching" && exam.type !== "horen" && (
          <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
            <button className={"modeBtn " + (mode === "exam" ? "on" : "")} onClick={() => { setMode("exam"); reset(); }}>🎯 {t("exam_mode", userLang)}</button>
            <button className={"modeBtn " + (mode === "practice" ? "on" : "")} onClick={() => { setMode("practice"); reset(); }}>📚 {t("practice_mode", userLang)}</button>
          </div>
        )}

        {exam.type === "horen" && (
          <HorenCard exam={exam} userLang={userLang} showTranslation={showTranslation} />
        )}

        {exam.type === "mcq" && exam.paragraphs && exam.paragraphs.length > 0 && (
          <div className="card" style={{ padding: 20 }}>
            {exam.paragraphs.map((p, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <p className="de" style={{ lineHeight: 1.8, fontSize: "1.05em", margin: 0 }}>{p.de}</p>
                {showTranslation && <div className="t2-ar"><SmartTrans obj={p} lang={userLang} /></div>}
              </div>
            ))}
          </div>
        )}

        {(exam.type === "sprach1" || exam.type === "sprach2") && (
          <div className="card" style={{ fontSize: "1.1em", lineHeight: 2.2, padding: 20 }}>
            {exam.text.split(/\.{3,}\s*\((\d+)\)\s*\.{3,}/g).map((part, i) => {
              if (i % 2 === 1) {
                const gapNum = parseInt(part);
                const it = exam.items.find(x => x.n === gapNum);
                const sel = ans[gapNum];
                const isDone = done !== null;
                
                let content = <span className="inline-gap" onClick={() => { if(!isDone) { exam.type === "sprach2" ? setActiveGap(gapNum) : setModalGap(gapNum); } }}>{sel || `(${gapNum})`}</span>;
                if (isDone) {
                  if (sel === it.c) content = <span className="sp1-correct">{sel}</span>;
                  else if (sel) content = <span style={{display:'inline-flex', gap:4}}><span className="sp1-wrong">{sel}</span><span className="sp1-correct">{it.c}</span></span>;
                  else content = <span className="sp1-correct">{it.c}</span>;
                }
                return <React.Fragment key={i}>{content}</React.Fragment>;
              }
              return <span key={i} className="de" style={{ whiteSpace: "pre-wrap" }}>{part}</span>;
            })}
            {showTranslation && (
              <div className="t2-ar" style={{ marginTop: 20 }}>
                {exam.transText ? <SmartTrans obj={exam.transText} lang={userLang} /> : <AutoTrans text={exam.text.replace(/\.{3,}\s*\(\d+\)\s*\.{3,}/g, " ___ ")} lang={userLang} force={true} />}
              </div>
            )}
          </div>
        )}

        {exam.type === "matching" && exam.ads && exam.ads.map(ad => (
          <div key={ad.k} className="card" style={{ padding: 16 }}>
            <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 12 }}>
              <span className="de" style={{ color: "var(--red)", fontWeight: 900, fontSize: "1.1em" }}>ANZEIGE {ad.k}</span>
              <div className="de" style={{ fontWeight: 900, marginTop: 6 }}>{ad.t}</div>
              <div className="de" style={{ fontSize: "0.9em", color: "var(--muted)", marginTop: 4, whiteSpace: "pre-wrap" }}>{ad.de}</div>
              {showTranslation && <div style={{ marginTop: 4, fontSize: "0.85em", color: "var(--muted)", direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right' }}><SmartTrans obj={ad} lang={userLang} /></div>}
            </div>
            {exam.items.map(it => {
              const isSel = ans[it.n] === ad.k;
              const isElse = ans[it.n] && ans[it.n] !== ad.k;
              const isExc = excluded[it.n]?.[ad.k];
              let st = { padding: 12, borderRadius: 12, background: "var(--paper)", opacity: 1, border: "2px solid transparent", marginBottom: 8, direction: "ltr", textAlign: "left", transition: "all 0.2s", cursor: (done !== null || isExc || isElse) ? "default" : "pointer" };
              
              if (isSel) { st.background = "rgba(37, 99, 235, 0.1)"; st.borderColor = "var(--blue)"; st.color = "var(--blue)"; }
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
                    setExcluded(prev => {
                      const n = {...prev}; if(!n[it.n]) n[it.n] = {};
                      n[it.n][ad.k] = !n[it.n][ad.k]; return n;
                    });
                  }} style={{ width: 28, height: 28, borderRadius: 8, border: `1px solid ${isExc ? "var(--red)" : "var(--line)"}`, marginTop: 10, color: isExc ? "var(--red)" : "transparent", background: isExc ? "var(--badbg)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>✕</button>
                  <div style={{ fontWeight: 900, marginTop: 12, width: 20, color: isSel ? "var(--blue)" : "var(--muted)" }}>{it.n}</div>
                  <div onClick={() => { if(!isExc && !isElse && done === null) pick(it, ad.k); }} style={st}>
                    <span className="de">{it.de}</span>
                    {showTranslation && <div style={{ marginTop: 8, fontSize: "0.85em", color: "var(--muted)", direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right' }}><SmartTrans obj={it} lang={userLang} /></div>}
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {(exam.type === "headings" || exam.type === "mcq") && exam.items && exam.items.map((it, idx) => {
          const sel = ans[it.n];
          const isDone = done !== null || (mode === "practice" && sel !== undefined);
          return (
            <div key={it.n} className="card" style={{ padding: 16 }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                <div className="letter" style={{ width: 36, height: 36, fontSize: "1.1em", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>{idx + 1}</div>
                <div style={{ flex: 1 }}>
                  {exam.type === "headings" && (
                    <div style={{ lineHeight: 1.6, fontSize: "1.05em" }}>
                      <div className="de">{it.de}</div>
                      {showTranslation && <div style={{ marginTop: 8, color: "var(--muted)", fontSize: "0.9em", direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right' }}><SmartTrans obj={it} lang={userLang} /></div>}
                    </div>
                  )}
                  {exam.type === "mcq" && (
                    <div>
                      <p className="de" style={{ fontWeight: 900, margin: 0, fontSize: "1.05em" }}>{it.q}</p>
                      {showTranslation && <div style={{ marginTop: 8, color: "var(--muted)", fontSize: "0.9em", direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right' }}><SmartTrans obj={{de: it.q}} lang={userLang} /></div>}
                    </div>
                  )}
                </div>
              </div>
              {(exam.type === "headings" ? exam.options : it.opts).map(o => (
                <button key={o.k} className={cls(it, o.k)} onClick={() => pick(it, o.k)} disabled={isDone} style={{ padding: 14 }}>
                  <div className="letter" style={{ width: 28, height: 28, fontSize: "0.9em" }}>{o.k}</div>
                  <div className="de" style={{ flex: 1, textAlign: "left" }}>
                    {o.de}
                    {showTranslation && <div style={{ marginTop: 6, fontSize: "0.85em", color: "var(--muted)", direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right' }}><SmartTrans obj={o} lang={userLang} /></div>}
                  </div>
                </button>
              ))}
              {isDone && mode === "practice" && (
                <div className={sel === it.c ? "fb good" : "fb bad"} style={{ marginTop: 12, padding: 14, fontSize: "0.95em", borderRadius: 12 }}>
                  <b>{sel === it.c ? t("correct", userLang) : (sel ? t("wrong", userLang) : t("no_answer", userLang))}</b>
                  {sel !== it.c && <span style={{fontWeight:900}}> — {t("the_answer", userLang)}: {it.c}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {modalGap !== null && exam.type === "sprach1" && (
        <div className="overlay" onClick={() => setModalGap(null)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20}}>
              <h3 style={{margin:0, fontSize:"1.3em", fontWeight: 900}}>{t("gap_num", userLang)} ({modalGap})</h3>
              <button className="btnI" onClick={() => setModalGap(null)}>✕</button>
            </div>
            <div className="modal-list" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {exam.items.find(x => x.n === modalGap).opts.map((opt, i) => (
                <button key={i} className={"btn ghost"} style={{ textAlign: 'left', direction: 'ltr', borderColor: ans[modalGap] === opt ? "var(--blue)" : "var(--line)", background: ans[modalGap] === opt ? "rgba(37,99,235,0.1)" : "var(--card)", color: ans[modalGap] === opt ? "var(--blue)" : "var(--text)" }} onClick={() => pick(exam.items.find(x => x.n === modalGap), opt)}>
                  <span style={{ opacity: 0.5, fontWeight: 900, marginRight: 12 }}>{String.fromCharCode(65 + i)}</span>
                  <span className="de" style={{fontSize:"1.05em", flex: 1}}>{opt}</span>
                  {ans[modalGap] === opt && <span style={{ color: "var(--blue)", fontSize:"1.2em" }}>✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeGap !== null && exam.type === "sprach2" && (
         <div className="overlay" onClick={() => setActiveGap(null)}>
           <div className="sheet" onClick={e => e.stopPropagation()}>
             <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20}}>
               <h3 style={{margin:0, fontSize:"1.3em", fontWeight: 900}}>{t("choose_word_gap", userLang)} ({activeGap})</h3>
               <button className="btnI" onClick={() => setActiveGap(null)}>✕</button>
             </div>
             <div className="word-bank" style={{marginBottom:0, gridTemplateColumns: "1fr"}}>
               {exam.wordBank.map(w => {
                 const isUsed = Object.values(ans).includes(w.w) && ans[activeGap] !== w.w;
                 return (
                   <button key={w.k} className={"word-btn" + (isUsed ? " used" : "")} onClick={() => pickSprach2(w.w)} style={{ padding: "14px", borderColor: ans[activeGap] === w.w ? "var(--blue)" : "var(--line)", background: ans[activeGap] === w.w ? "rgba(37,99,235,0.1)" : "var(--card)", color: ans[activeGap] === w.w ? "var(--blue)" : "var(--text)" }}>
                     <span style={{ opacity: 0.5, marginRight: 10, fontWeight: 900, fontSize:"0.9em" }}>{w.k}</span> <span style={{fontSize:"1.05em"}}>{w.w}</span>
                   </button>
                 )
               })}
             </div>
           </div>
         </div>
      )}

      <div className="bottom-bar">
        <button onClick={done !== null ? reset : finish} className="btn-prev-bar">
          {done !== null ? t("reset_btn", userLang) : t("check_btn", userLang)}
        </button>
        <button onClick={() => done !== null ? onBack() : onNext()} className="btn-correct-bar">
          {done !== null ? t("back_btn", userLang) : t("next_btn", userLang)}
        </button>
        <button className="btn-next-bar" onClick={done !== null ? onBack : onNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
      </div>
    </div>
  );
}

function SchreibenView({ userLang, dark, setDark }) {
  const [selected, setSelected] = useState(null);
  const [showTransText, setShowTransText] = useState(false);
  const [showTransTask, setShowTransTask] = useState(false);
  const [userText, setUserText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzeStep, setAnalyzeStep] = useState(0);
  const [result, setResult] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30 * 60); 

  useEffect(() => {
    let timer;
    if (selected && !result && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [selected, result, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const wordCount = userText.trim() === "" ? 0 : userText.trim().split(/\s+/).length;
  const insertChar = (char) => setUserText(prev => prev + char);

  const checkWithAI = () => {
    if (!userText.trim()) return;
    setIsAnalyzing(true);
    setAnalyzeStep(1);
    setResult(null);
    let currentStep = 1;
    const interval = setInterval(() => {
      currentStep++;
      setAnalyzeStep(currentStep);
      if (currentStep > 4) {
        clearInterval(interval);
        finishAnalysis();
      }
    }, 800); 
  };

  const finishAnalysis = () => {
    const cleanText = userText.replace(/[^a-zA-ZäöüÄÖÜß\s]/g, '').trim();
    const words = cleanText.split(/\s+/).filter(w => w.length > 0);
    const isGibberish = words.length < 10 || /(.)\1{3,}/.test(userText) || cleanText.length < 15;

    if (isGibberish) {
      setResult({
        score: 0, maxScore: 45, contentScore: "0/5",
        generalEval: userLang === 'hi' ? "नमस्ते, पाठ की सामग्री खाली है और यह वह नहीं है जो आवश्यक है। आपको जर्मन शब्दों के साथ एक वास्तविक प्रतिक्रिया लिखनी होगी।" : "سلام كَشْ بو، فمحتوى الرسالة خالي من المعلومات وهاداشي ماشي هو المطلوب. خصك تكتب رد حقيقي فيه كلمات ألمانية مفهومة.",
        contentFeedback: userLang === 'hi' ? "आपने कार्य के किसी भी बिंदु का उल्लेख नहीं किया। कोई पठनीय सामग्री नहीं है।" : "ما ذكرت حتى نقطة من النقط المطلوبة فالمهمة. ما كاينش محتوى مقروء.",
        errors: []
      });
    } else {
      setResult({
        score: 35, maxScore: 45, contentScore: "4/5",
        generalEval: userLang === 'hi' ? "अच्छा प्रयास! आपने अधिकांश आवश्यक बिंदुओं का उत्तर दिया है, लेकिन कुछ छोटी भाषाई त्रुटियां हैं।" : "مجهود جيد! لقد أجبت على معظم النقاط المطلوبة، ولكن هناك بعض الأخطاء اللغوية البسيطة.",
        contentFeedback: userLang === 'hi' ? "आपने कार्य में अधिकांश आवश्यक बिंदुओं का उल्लेख किया है।" : "لقد ذكرت أغلب النقاط المطلوبة في المهمة.",
        errors: [{ error: "Ich habe gehen", fix: "Ich bin gegangen", type: userLang === 'hi' ? "व्याकरण (Grammatik)" : "قواعد (Grammatik)" }]
      });
    }
    setIsAnalyzing(false);
  };

  if (!selected) {
    return (
      <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h1 className="de" style={{ margin: 0, fontSize: "2.5em", fontWeight: 900, color: "var(--ink)" }}>Schreiben</h1>
        </div>
        <div style={{ display: "flex", background: "var(--line)", borderRadius: 99, padding: 4, marginBottom: 20, width: "fit-content", margin: "0 auto 20px" }}>
          <div style={{ background: "#22C55E", color: "#FFF", padding: "10px 30px", borderRadius: 99, fontWeight: 900 }}>B1</div>
          <div style={{ color: "var(--muted)", padding: "10px 30px", fontWeight: 900 }}>B2</div>
        </div>
        <div style={{ position: "relative", marginBottom: 20 }}>
          <input type="text" placeholder={t("search_placeholder", userLang)} style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: "1px solid var(--line)", background: "var(--card)", color: "var(--text)", fontSize: "1em", outline: "none" }} />
        </div>
        {SCHREIBEN_DATA.map(item => {
          if (item.isPremium) return null; // الدروس المدفوعة ما كتبانش هنا
          return (
            <div key={item.id} onClick={() => { setSelected(item); setUserText(""); setResult(null); setShowTransText(false); setShowTransTask(false); setTimeLeft(30 * 60); }} className="card" style={{ padding: 20, marginBottom: 16, cursor: "pointer", border: "1px solid var(--line)" }}>
              <div className="de" style={{ fontWeight: 900, fontSize: "1.1em", marginBottom: 12 }}>{item.title}</div>
              <div style={{ display: "inline-block", background: "rgba(34, 197, 94, 0.1)", color: "#22C55E", padding: "4px 12px", borderRadius: 8, fontSize: "0.85em", fontWeight: 900 }}>{item.level}</div>
            </div>
          );
        })}
      </div>
    );
  }

  if (result) {
    return (
      <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button onClick={() => setResult(null)} className="btnI" style={{ width: 40, height: 40 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <h2 style={{ margin: 0, fontSize: "1.2em", fontWeight: 900 }}>{userLang === 'hi' ? 'संपादक पर वापस जाएं' : 'رجوع إلى المحرر'}</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20 }}>
          <div style={{ width: 120, height: 120, borderRadius: "50%", border: "8px solid var(--line)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderTopColor: result.score === 0 ? "var(--red)" : "#22C55E" }}>
            <span style={{ fontSize: "2.5em", fontWeight: 900 }}>{result.score}</span>
            <span style={{ color: "var(--muted)", fontSize: "0.8em" }}>/ {result.maxScore} {userLang === 'hi' ? 'अंक' : 'نقطة'}</span>
          </div>
        </div>
        <div className="card" style={{ padding: 20, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, fontSize: "1.4em", fontWeight: 900, color: "var(--ink)" }}>⚠️ {userLang === 'hi' ? 'सामान्य मूल्यांकन' : 'التقييم العام'}</div>
          <p style={{ fontSize: "1.05em", lineHeight: 1.8, color: "var(--text)", marginBottom: 16 }}>{result.generalEval}</p>
          <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 16, padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: "1.5em", fontWeight: 900, color: "var(--ink)" }}>{result.contentScore}</span>
              <span style={{ fontWeight: 900, color: "var(--muted)" }}>Content</span>
            </div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.9em" }}>{result.contentFeedback}</p>
          </div>
        </div>
        <div className="card" style={{ padding: 20, marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "1.2em", fontWeight: 900 }}>
              <div style={{ width: 4, height: 24, background: "#22C55E", borderRadius: 4 }}></div> {userLang === 'hi' ? 'आपका पाठ' : 'النص الخاص بك'}
            </div>
          </div>
          <div className="de" style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 16, borderRadius: 12, whiteSpace: "pre-wrap" }}>{userText}</div>
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "1.2em", fontWeight: 900, marginBottom: 16 }}>
            <div style={{ width: 4, height: 24, background: "#22C55E", borderRadius: 4 }}></div> {userLang === 'hi' ? 'त्रुटियों का विस्तृत विश्लेषण' : 'التحليل التفصيلي للأخطاء'}
          </div>
          {result.errors.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px", border: "2px dashed var(--line)", borderRadius: 16 }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(221,0,0,0.1)", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto 16px", color: "var(--red)", fontSize: "1.5em", fontWeight: 900 }}>!</div>
              <h3 style={{ margin: "0 0 8px", color: "var(--red)", fontSize: "1.3em" }}>{userLang === 'hi' ? 'दिखाने के लिए कोई त्रुटि नहीं' : 'لا توجد أخطاء للعرض'}</h3>
              <p style={{ margin: 0, color: "var(--muted)" }}>{userLang === 'hi' ? 'इस प्रयास में कोई त्रुटि नहीं मिली।' : 'لم يتم العثور على أخطاء في هذه المحاولة.'}</p>
            </div>
          ) : (
            <div>
              {result.errors.map((err, i) => (
                <div key={i} style={{ background: "var(--paper)", padding: 12, borderRadius: 12, marginBottom: 8, borderRight: "4px solid var(--red)" }}>
                  <div style={{ color: "var(--red)", fontWeight: 900, textDecoration: "line-through" }}>{err.error}</div>
                  <div style={{ color: "#22C55E", fontWeight: 900 }}>{userLang === 'hi' ? 'सुझाव' : 'الاقتراح'}: {err.fix}</div>
                  <div style={{ color: "var(--muted)", fontSize: "0.8em", marginTop: 4 }}>{err.type}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 12px", paddingBottom: 120 }}>
      {isAnalyzing && (
        <div style={{ position: "fixed", inset: 0, background: "var(--paper)", zIndex: 999, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 20 }}>
          <div style={{ position: "relative", marginBottom: 30 }}>
             <div style={{ width: 120, height: 120, borderRadius: "50%", border: "4px solid rgba(34, 197, 94, 0.2)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
             </div>
             <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "4px solid transparent", borderTopColor: "#22C55E", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
          </div>
          <h2 style={{ fontSize: "1.8em", fontWeight: 900, marginBottom: 10 }}>{userLang === 'hi' ? 'स्मार्ट सुधार' : 'جاري التصحيح الذكي'}</h2>
          <p style={{ color: "var(--muted)", marginBottom: 40 }}>{userLang === 'hi' ? 'हम उन्नत AI तकनीकों का उपयोग करके आपके पाठ की समीक्षा कर रहे हैं' : 'نقوم بمراجعة نصك باستخدام تقنيات AI المطورة'}</p>
          <div style={{ width: "100%", maxWidth: 300 }}>
            {[userLang === 'hi' ? "स्मार्ट सुधारक तैयार करना..." : "تحضير المصحح الذكي...", userLang === 'hi' ? "वाक्य संरचना का विश्लेषण..." : "تحليل بنية الجمل...", userLang === 'hi' ? "व्याकरण और शब्दावली की समीक्षा..." : "مراجعة القواعد والمفردات...", userLang === 'hi' ? "अंतिम रिपोर्ट तैयार करना..." : "توليد التقرير النهائي..."].map((step, idx) => (
              <div key={idx} style={{ color: analyzeStep === idx + 1 ? "#22C55E" : analyzeStep > idx + 1 ? "var(--text)" : "var(--line)", fontWeight: analyzeStep === idx + 1 ? 900 : 400, marginBottom: 8, textAlign: "center", transition: "all 0.3s" }}>
                {analyzeStep === idx + 1 && "✨ "} {step}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setSelected(null)} className="btnI" style={{ width: 40, height: 40 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <h2 className="de" style={{ margin: 0, fontSize: "1.2em", fontWeight: 900 }}>{selected.title}</h2>
        </div>
        <div className="timer-badge" style={{ padding: '6px 12px', fontSize: '15px' }}>
          ⏱️ {formatTime(timeLeft)}
        </div>
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 6, height: 20, background: "#22C55E", borderRadius: 4 }}></div>
          <span style={{ color: "var(--muted)", fontWeight: 900, fontSize: "0.85em", letterSpacing: 1 }}>SITUATION</span>
          <span style={{ background: "rgba(34, 197, 94, 0.1)", color: "#22C55E", padding: "2px 10px", borderRadius: 6, fontSize: "0.8em", fontWeight: 900 }}>{selected.level}</span>
        </div>
        <div className="de" style={{ fontSize: "1.05em", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{selected.text}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingTop: 16, borderTop: "1px dashed var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#22C55E", fontWeight: 900 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 5h12M9 3v2c0 4.418-2.686 8-6 8m0-8h12m-6 0v2c0 4.418 2.686 8 6 8m-4-2l-4 8m2-4h4m-2 0l2 4"/></svg> {t("trans_text", userLang)}
          </div>
          <button onClick={() => setShowTransText(!showTransText)} style={{ background: "rgba(34, 197, 94, 0.1)", color: "#22C55E", padding: "8px 16px", borderRadius: 8, fontWeight: 900 }}>
            {showTransText ? t("hide", userLang) : t("show", userLang)}
          </button>
        </div>
        {showTransText && (
          <div style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid rgba(34, 197, 94, 0.2)", padding: 16, borderRadius: 12, marginTop: 12, direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right', lineHeight: 1.8, whiteSpace: "pre-wrap", fontFamily: "'Cairo', sans-serif" }}>
            {selected.transText[userLang] || <AutoTrans text={selected.text} lang={userLang} force={true} />}
          </div>
        )}
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 6, height: 20, background: "#22C55E", borderRadius: 4 }}></div>
          <span style={{ color: "var(--muted)", fontWeight: 900, fontSize: "0.85em", letterSpacing: 1 }}>AUFGABE</span>
          <span style={{ marginLeft: "auto", background: "var(--line)", color: "var(--muted)", padding: "4px 12px", borderRadius: 8, fontSize: "0.8em", fontWeight: 900 }}>150–180 {t("words_count", userLang)}</span>
        </div>
        <div className="de" style={{ fontSize: "1.05em", marginBottom: 16 }}>{selected.task}</div>
        {selected.points.map((pt, idx) => (
          <div key={idx} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "center" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#22C55E", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 900, flexShrink: 0 }}>{idx + 1}</div>
            <div className="de" style={{ background: "var(--paper)", padding: "12px 16px", borderRadius: 12, flex: 1, border: "1px solid var(--line)" }}>{pt}</div>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingTop: 16, borderTop: "1px dashed var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#22C55E", fontWeight: 900 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 5h12M9 3v2c0 4.418-2.686 8-6 8m0-8h12m-6 0v2c0 4.418 2.686 8 6 8m-4-2l-4 8m2-4h4m-2 0l2 4"/></svg> {t("trans_task", userLang)}
          </div>
          <button onClick={() => setShowTransTask(!showTransTask)} style={{ background: "rgba(34, 197, 94, 0.1)", color: "#22C55E", padding: "8px 16px", borderRadius: 8, fontWeight: 900 }}>
            {showTransTask ? t("hide", userLang) : t("show", userLang)}
          </button>
        </div>
        {showTransTask && (
          <div style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid rgba(34, 197, 94, 0.2)", padding: 16, borderRadius: 12, marginTop: 12, direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right', lineHeight: 1.8, fontFamily: "'Cairo', sans-serif" }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>{selected.transTask[userLang] || <AutoTrans text={selected.task} lang={userLang} force={true} />}</div>
            {(selected.transPoints[userLang] || selected.transPoints['en'] || selected.transPoints['ar']).map((p, i) => <div key={i} style={{ marginBottom: 4 }}>{p}</div>)}
          </div>
        )}
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <div className="keyboard-area">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(c => (
              <button key={c} onClick={() => insertChar(c)} className="key-btn">{c}</button>
            ))}
          </div>
          <div className="word-counter">
            <span style={{ color: wordCount >= 150 && wordCount <= 180 ? "#22C55E" : "var(--muted)" }}>{wordCount}</span> / 150-180
          </div>
        </div>
        <textarea value={userText} onChange={(e) => setUserText(e.target.value)} placeholder={userLang === 'hi' ? '...यहाँ अपना उत्तर लिखना शुरू करें' : '...ابدأ في كتابة إجابتك هنا'} className="de" style={{ width: "100%", minHeight: 250, padding: 20, border: "none", background: "var(--card)", color: "var(--text)", fontSize: "1.05em", lineHeight: 1.6, resize: "vertical", outline: "none" }}></textarea>
      </div>

      <div className="bottom-bar" style={{ maxWidth: 400 }}>
        <button onClick={checkWithAI} disabled={isAnalyzing} className="btn-correct-bar">
          ✨ {isAnalyzing ? (userLang === 'hi' ? 'सुधार हो रहा है...' : 'جاري التصحيح...') : t("ai_correct", userLang)}
        </button>
      </div>
    </div>
  );
}

function NotificationsBell({ userLang }) {
  const [notifs, setNotifs] = useState([]);
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ep_seen_notifs') || '[]'); } catch { return []; }
  });

  useEffect(() => {
    const load = () => {
      sb.from('notifications').select('*').eq('is_active', true)
        .order('created_at', { ascending: false })
        .then(({ data }) => { if (data) setNotifs(data); });
    };
    load();
    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, []);

  const unread = notifs.filter(n => !seen.includes(n.id)).length;

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next && unread > 0) {
      setTimeout(() => {
        const ids = notifs.map(n => n.id);
        localStorage.setItem('ep_seen_notifs', JSON.stringify(ids));
        setSeen(ids);
      }, 1500);
    }
  };

  const isRTL = ['ar', 'ma', 'fa'].includes(userLang);

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={toggle} className="btnI" style={{ position: 'relative' }}>
        🔔
        {unread > 0 && (
          <span style={{
            position: 'absolute', top: -4, right: -4, background: 'var(--red)',
            color: '#FFF', borderRadius: '50%', minWidth: 18, height: 18,
            fontSize: 11, display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontWeight: 900, padding: '0 4px'
          }}>{unread}</span>
        )}
      </button>

      {open && (
        <>
          <div style={{ position: 'fixed', inset: 0, zIndex: 999 }}
               onClick={() => setOpen(false)} />
          <div style={{
            position: 'absolute', top: 48, right: 0, width: 320, maxHeight: 420,
            overflowY: 'auto', background: 'var(--paper)', borderRadius: 16,
            padding: 14, zIndex: 1000, border: '1px solid var(--line)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
            direction: isRTL ? 'rtl' : 'ltr'
          }}>
            <div style={{ fontWeight: 900, fontSize: '1.05em', marginBottom: 12, color: 'var(--blue)' }}>
              📬 {t('notifications', userLang)}
            </div>
            {notifs.length === 0 ? (
              <p style={{ opacity: 0.6, fontSize: '0.9em', textAlign: 'center', padding: 20 }}>
                {t('no_notifications', userLang)}
              </p>
            ) : notifs.map(n => (
              <div key={n.id} style={{
                padding: 10, marginBottom: 8, borderRadius: 10,
                background: seen.includes(n.id) ? 'var(--card)' : 'rgba(37,99,235,0.08)',
                borderLeft: seen.includes(n.id) ? 'none' : '3px solid var(--blue)'
              }}>
                <div style={{ fontWeight: 900, fontSize: '0.95em', marginBottom: 4 }}>{n.title}</div>
                <div style={{ fontSize: '0.85em', lineHeight: 1.6, color: 'var(--muted)' }}>{n.message}</div>
                <div style={{ fontSize: '0.7em', opacity: 0.5, marginTop: 6 }}>
                  {new Date(n.created_at).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function AdminPanel({ userLang, onClose }) {
  const [users, setUsers] = useState([]);
  const [notifs, setNotifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('users');
  const [notifTitle, setNotifTitle] = useState("");
  const [notifMsg, setNotifMsg] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => { loadAll(); }, []);

  const loadAll = async () => {
    setLoading(true);
    const [u, n] = await Promise.all([
      sb.from('profiles').select('*').order('email'),
      sb.from('notifications').select('*').order('created_at', { ascending: false })
    ]);
    setUsers(u.data || []);
    setNotifs(n.data || []);
    setLoading(false);
  };

  const togglePaid = async (id, current) => {
    await sb.from('profiles').update({ is_paid: !current }).eq('id', id);
    setUsers(prev => prev.map(u => u.id === id ? { ...u, is_paid: !current } : u));
  };

  const toggleBlock = async (id, current) => {
    await sb.from('profiles').update({ is_blocked: !current }).eq('id', id);
    setUsers(prev => prev.map(u => u.id === id ? { ...u, is_blocked: !current } : u));
  };

  const deleteNotif = async (id) => {
    if (!window.confirm(t('confirm_delete_notif', userLang) || 'حذف؟')) return;
    await sb.from('notifications').delete().eq('id', id);
    setNotifs(prev => prev.filter(n => n.id !== id));
  };

  const toggleNotif = async (id, cur) => {
    await sb.from('notifications').update({ is_active: !cur }).eq('id', id);
    setNotifs(prev => prev.map(n => n.id === id ? { ...n, is_active: !cur } : n));
  };

  const sendNotification = async () => {
    if (!notifTitle.trim() || !notifMsg.trim()) return alert(t('fill_all_fields', userLang) || 'عمر جميع الحقول');
    setSending(true);
    const { error } = await sb.from('notifications').insert([{ 
      title: notifTitle.trim(), message: notifMsg.trim(), is_active: true 
    }]);
    setSending(false);
    if (error) return alert("مشكل: " + error.message);
    setNotifTitle(""); setNotifMsg("");
    alert("✅ " + (t('sent_success', userLang) || 'تم الإرسال بنجاح!'));
    loadAll();
  };

  const filtered = users.filter(u => {
    const q = search.toLowerCase();
    return (u.email || '').toLowerCase().includes(q) || 
           (u.unique_name || '').toLowerCase().includes(q);
  });

  const stats = {
    total: users.length,
    paid: users.filter(u => u.is_paid).length,
    blocked: users.filter(u => u.is_blocked).length
  };

  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontSize: "1.5em", fontWeight: 900 }}>👑 {t("admin_panel", userLang)}</h2>
        <button onClick={onClose} className="btnI">✕</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
        {[
          { label: userLang === 'en' ? 'Users' : 'المستخدمين', val: stats.total, color: '#2563EB' },
          { label: userLang === 'en' ? 'Paid' : 'مخلصين', val: stats.paid, color: '#22C55E' },
          { label: userLang === 'en' ? 'Blocked' : 'محظورين', val: stats.blocked, color: '#DD0000' }
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--card)', padding: 14, borderRadius: 12, borderLeft: `4px solid ${s.color}` }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button onClick={() => setTab('users')} className={tab === 'users' ? 'btn' : 'btn ghost'} style={{ padding: 12, width: 'auto', flex: 1, fontSize: '0.9em' }}>
          👥 {t('users', userLang)}
        </button>
        <button onClick={() => setTab('notifs')} className={tab === 'notifs' ? 'btn' : 'btn ghost'} style={{ padding: 12, width: 'auto', flex: 1, fontSize: '0.9em' }}>
          📢 {t('notifications', userLang)}
        </button>
      </div>

      {tab === 'users' && (
        <div>
          <input type="text" placeholder={t('search_users', userLang) || '🔍 بحث...'} value={search} onChange={e => setSearch(e.target.value)}
            className="auth-input" style={{ marginBottom: 12 }} />
          <div className="card">
            {loading ? <p>Loading...</p> : filtered.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--muted)' }}>ماكاينش نتائج</p>
            ) : filtered.map(u => (
              <div key={u.id} style={{ borderBottom: "1px solid var(--line)", padding: "12px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ fontWeight: 900 }}>
                    {u.unique_name || u.email}
                    {u.is_admin && <span style={{ marginLeft: 6 }}>👑</span>}
                  </div>
                  <div style={{ fontSize: "0.75em", color: "var(--muted)" }}>
                    {u.is_paid ? "✅ " + t("paid", userLang) : "❌"} | {u.is_blocked ? "🚫 " + t("blocked", userLang) : "🟢"}
                    {u.active_device_id && " | 📱"}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: 'wrap' }}>
                  <button className="btn ghost" style={{ padding: "6px 10px", fontSize: "0.75em", width: "auto", color: u.is_paid ? "var(--red)" : "var(--okc)" }}
                    onClick={() => togglePaid(u.id, u.is_paid)}>
                    {u.is_paid ? "❌ " + t("mark_unpaid", userLang) : "💰 " + t("mark_paid", userLang)}
                  </button>
                  <button className="btn ghost" style={{ padding: "6px 10px", fontSize: "0.75em", width: "auto", color: u.is_blocked ? "var(--okc)" : "var(--red)" }}
                    onClick={() => toggleBlock(u.id, u.is_blocked)}>
                    {u.is_blocked ? "🔓 " + t("unblock", userLang) : "🚫 " + t("block", userLang)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'notifs' && (
        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <h3 style={{ margin: "0 0 12px", fontWeight: 900 }}>📤 {t('new_notif', userLang) || 'إرسال إشعار جديد'}</h3>
            <input className="auth-input" placeholder={t("title_ar", userLang)}
              value={notifTitle} onChange={e => setNotifTitle(e.target.value)} />
            <textarea className="auth-input" rows={3} placeholder={t("message_ar", userLang)}
              value={notifMsg} onChange={e => setNotifMsg(e.target.value)} />
            <button className="btn" onClick={sendNotification} disabled={sending}>
              {sending ? "⏳..." : t("send_notification", userLang)}
            </button>
          </div>

          <h3 style={{ fontWeight: 900, marginBottom: 12 }}>📋 {t('previous_notifs', userLang) || 'الإشعارات السابقة'} ({notifs.length})</h3>
          {notifs.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: 30, color: 'var(--muted)' }}>
              {t('no_notifications', userLang)}
            </div>
          ) : notifs.map(n => (
            <div key={n.id} className="card" style={{ opacity: n.is_active ? 1 : 0.5, marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 8 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 900 }}>{n.title}</div>
                  <div style={{ fontSize: "0.85em", color: "var(--muted)", marginTop: 4 }}>{n.message}</div>
                  <div style={{ fontSize: "0.7em", opacity: 0.5, marginTop: 6 }}>
                    {new Date(n.created_at).toLocaleString()}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <button onClick={() => toggleNotif(n.id, n.is_active)}
                    className="btn ghost" style={{ padding: "4px 8px", fontSize: "0.7em", width: "auto" }}>
                    {n.is_active ? "👁️" : "🚫"}
                  </button>
                  <button onClick={() => deleteNotif(n.id)}
                    className="btn ghost" style={{ padding: "4px 8px", fontSize: "0.7em", width: "auto", color: "var(--red)" }}>
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
