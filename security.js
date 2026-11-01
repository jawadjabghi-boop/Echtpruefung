/* ==========================================================
   SECURITY.JS — EchtPrüfung B1
   Multi-layer client-side protection
   Version: 1.0
   ========================================================== */
(function () {
  'use strict';

  // ============================================================
  // 1. FUNCTION INTEGRITY — قفل الدوال الأصلية
  // ============================================================
  try {
    Object.freeze(window.crypto);
    Object.freeze(window.crypto.subtle);
    const _fetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      get: () => _fetch,
      set: () => { console.warn('🔒 fetch locked'); },
      configurable: false,
    });
  } catch (e) {
    console.warn('Integrity lock partial:', e);
  }

  // ============================================================
  // 2. ANTI-DEVTOOLS — تحذير عند فتح Console
  // ============================================================
  let devtoolsOpen = false;
  setInterval(function () {
    const w = window.outerWidth - window.innerWidth > 160;
    const h = window.outerHeight - window.innerHeight > 160;
    const isOpen = w || h;
    if (isOpen && !devtoolsOpen) {
      devtoolsOpen = true;
      console.clear();
      console.log('%c⚠️ STOP', 'color:#c53030;font-size:32px;font-weight:bold;');
      console.log(
        '%cهذا التطبيق محمي. أي محاولة تلاعب تُسجَّل تلقائياً.',
        'color:#c53030;font-size:16px;'
      );
    } else if (!isOpen) {
      devtoolsOpen = false;
    }
  }, 1000);

  // ============================================================
  // 3. PROOF OF WORK — إثبات العمل (مقاومة البوتات)
  // ============================================================
  async function generatePoW(fingerprint, difficulty, maxIter) {
    difficulty = (typeof difficulty === 'number') ? difficulty : 3;
    maxIter = (typeof maxIter === 'number') ? maxIter : 2000000;
    if (!fingerprint) return null;

    const target = '0'.repeat(difficulty);
    const enc = new TextEncoder();

    for (let nonce = 0; nonce < maxIter; nonce++) {
      const data = enc.encode(fingerprint + ':' + nonce);
      const buf = await crypto.subtle.digest('SHA-256', data);
      const hash = Array.from(new Uint8Array(buf))
        .map(function (b) { return b.toString(16).padStart(2, '0'); })
        .join('');

      if (hash.startsWith(target)) {
        return { nonce: nonce, hash: hash };
      }
      if (nonce % 200 === 0) {
        await new Promise(function (r) { setTimeout(r, 0); });
      }
    }
    return null;
  }

  let _powCache = null;
  let _powKey = null;

  async function getPoW(fingerprint) {
    if (!fingerprint) return null;
    if (_powKey === fingerprint && _powCache) return _powCache;
    const result = await generatePoW(fingerprint, 3);
    if (result) {
      _powCache = result;
      _powKey = fingerprint;
    }
    return result;
  }

  // ============================================================
  // 4. HONEYPOT — الفخ للبوتات
  // ============================================================
  (function injectHoneypotCSS() {
    const style = document.createElement('style');
    style.textContent =
      '.hp-field{position:absolute!important;left:-9999px!important;' +
      'top:-9999px!important;opacity:0!important;' +
      'pointer-events:none!important;height:0!important;width:0!important;}';
    document.head.appendChild(style);
  })();

  function checkHoneypot(formEl) {
    if (!formEl) return true;
    const hp = formEl.querySelector('[name="website_hp"]');
    if (!hp) return true;
    return hp.value === '';
  }

  // ============================================================
  // 5. TIME GATE — بوابة الوقت
  // ============================================================
  let _formOpenTime = null;

  function markFormOpen() {
    _formOpenTime = Date.now();
  }

  function isTimeGateValid(minSec) {
    minSec = (typeof minSec === 'number') ? minSec : 3;
    if (!_formOpenTime) return false;
    return (Date.now() - _formOpenTime) >= (minSec * 1000);
  }

  function getTimeSpentSec() {
    if (!_formOpenTime) return 0;
    return Math.floor((Date.now() - _formOpenTime) / 1000);
  }

  // ============================================================
  // 6. BEHAVIOR TRACKING — تتبع تفاعل المستخدم
  // ============================================================
  let _interacted = false;

  ['mousemove', 'keydown', 'touchstart', 'scroll', 'click'].forEach(function (evt) {
    document.addEventListener(evt, function () {
      _interacted = true;
    }, { once: true, passive: true });
  });

  function hasUserInteracted() {
    return _interacted;
  }

  // ============================================================
  // 7. RATE LIMIT — حد المحاولات (client-side)
  // ============================================================
  const RATE_KEY = 'ep_signup_attempts_v1';
  const RATE_WINDOW_MS = 60 * 60 * 1000;
  const RATE_MAX = 3;

  function checkRateLimit() {
    try {
      const raw = localStorage.getItem(RATE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      const now = Date.now();
      const recent = arr.filter(function (t) { return now - t < RATE_WINDOW_MS; });
      return {
        allowed: recent.length < RATE_MAX,
        used: recent.length,
        max: RATE_MAX
      };
    } catch (e) {
      return { allowed: true, used: 0, max: RATE_MAX };
    }
  }

  function recordAttempt() {
    try {
      const raw = localStorage.getItem(RATE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      const now = Date.now();
      const recent = arr.filter(function (t) { return now - t < RATE_WINDOW_MS; });
      recent.push(now);
      localStorage.setItem(RATE_KEY, JSON.stringify(recent));
    } catch (e) {
      // silent
    }
  }

  // ============================================================
  // 8. LOCAL ENCRYPTION — AES-GCM
  // ============================================================
  async function deriveKey(fingerprint) {
    if (!fingerprint) return null;
    const km = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(fingerprint),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );
    return crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: new TextEncoder().encode('echtpruefung-salt-v1'),
        iterations: 100000,
        hash: 'SHA-256'
      },
      km,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  async function encryptLocal(plaintext, fingerprint) {
    try {
      const key = await deriveKey(fingerprint);
      if (!key) return null;
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const ct = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        new TextEncoder().encode(plaintext)
      );
      const combined = new Uint8Array(iv.length + ct.byteLength);
      combined.set(iv, 0);
      combined.set(new Uint8Array(ct), iv.length);
      return btoa(String.fromCharCode.apply(null, combined));
    } catch (e) {
      console.error('encryptLocal error:', e);
      return null;
    }
  }

  async function decryptLocal(ciphertext, fingerprint) {
    try {
      const key = await deriveKey(fingerprint);
      if (!key) return null;
      const combined = Uint8Array.from(atob(ciphertext), function (c) {
        return c.charCodeAt(0);
      });
      const iv = combined.slice(0, 12);
      const ct = combined.slice(12);
      const pt = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        ct
      );
      return new TextDecoder().decode(pt);
    } catch (e) {
      console.error('decryptLocal error:', e);
      return null;
    }
  }

  // ============================================================
  // EXPORT
  // ============================================================
  window.Security = {
    generatePoW: generatePoW,
    getPoW: getPoW,
    checkHoneypot: checkHoneypot,
    markFormOpen: markFormOpen,
    isTimeGateValid: isTimeGateValid,
    getTimeSpentSec: getTimeSpentSec,
    hasUserInteracted: hasUserInteracted,
    checkRateLimit: checkRateLimit,
    recordAttempt: recordAttempt,
    encryptLocal: encryptLocal,
    decryptLocal: decryptLocal,
    isDevtoolsOpen: function () { return devtoolsOpen; }
  };

  console.log('%c🔒 Security.js loaded', 'color:#38a169;font-weight:bold;');
})();
