window.SAHLA_DATA = window.SAHLA_DATA || {};
window.SAHLA_DATA.b1 = window.SAHLA_DATA.b1 || {};

(function (root) {
  function normText(s) {
    return (s || "")
      .toString()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function normId(s) {
    return (s || "")
      .toString()
      .toLowerCase()
      .replace(/[\s\-_]+/g, "");
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function shuffle(arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function isUsableLesson(lesson) {
    if (!lesson || !Array.isArray(lesson.items) || lesson.items.length === 0) return false;
    var noteStr = (lesson.note || "") + " " + (lesson.text || "");
    if (noteStr.indexOf("غير مسرب") !== -1) return false;
    return true;
  }

  function mapSubToKey(sub, type) {
    var s = normId(sub);
    var t = normId(type);
    if (s === "teil1" || s === "teile1" || t === "headings") return "teil1";
    if (s === "teil2" || s === "teile2" || t === "mcq") return "teil2";
    if (s === "teil3" || s === "teile3" || t === "matching") return "teil3";
    if (s === "sprach1" || s === "sprachbaustein1" || t === "sprach1") return "sprach1";
    if (s === "sprach2" || s === "sprachbaustein2" || t === "sprach2") return "sprach2";
    return null;
  }

  function collectPools() {
    var pools = {
      teil1: [],
      teil2: [],
      teil3: [],
      sprach1: [],
      sprach2: []
    };
    var seen = {
      teil1: {},
      teil2: {},
      teil3: {},
      sprach1: {},
      sprach2: {}
    };

    function addLesson(key, lesson) {
      if (!key || !pools[key] || !isUsableLesson(lesson)) return;
      if (key === "teil1" && (!Array.isArray(lesson.options) || lesson.options.length < 5)) return;
      if (key === "teil2" && (!Array.isArray(lesson.paragraphs) || lesson.paragraphs.length === 0)) return;
      if (key === "teil3" && (!Array.isArray(lesson.ads) || lesson.ads.length < 5)) return;
      if (key === "sprach1" && !lesson.text) return;
      if (key === "sprach2" && (!lesson.text || !Array.isArray(lesson.wordBank) || lesson.wordBank.length === 0)) return;

      var uid = normId(lesson.id || lesson.title || Math.random());
      if (seen[key][uid]) return;
      seen[key][uid] = true;
      pools[key].push(lesson);
    }

    var lesen = root.SAHLA_DATA && root.SAHLA_DATA.b1 && root.SAHLA_DATA.b1.lesen;
    if (lesen) {
      ["teil1", "teil2", "teil3", "sprach1", "sprach2"].forEach(function (k) {
        if (Array.isArray(lesen[k])) {
          lesen[k].forEach(function (item) {
            addLesson(k, item);
          });
        }
      });
    }

    if (Array.isArray(root.EXAMS)) {
      root.EXAMS.forEach(function (item) {
        if (item.level && normId(item.level) !== "b1") return;
        var k = mapSubToKey(item.sub, item.type);
        addLesson(k, item);
      });
    }

    return pools;
  }

  function buildRandomTeil1(opts) {
    var pools = collectPools();
    var lessons = pools.teil1;
    if (lessons.length === 0) return null;

    var excludeIds = (opts && Array.isArray(opts.excludeIds)) ? opts.excludeIds : [];
    var filtered = lessons.filter(function (l) {
      return excludeIds.indexOf(l.id) === -1;
    });
    var primaryLessons = filtered.length >= 5 ? filtered : lessons;

    var chosenPairs = [];
    var usedHeadingTexts = {};
    var usedLessonIds = {};

    // First pass: at most 1 item per distinct lesson (aiming for 5 different topics)
    shuffle(primaryLessons).forEach(function (lesson) {
      if (chosenPairs.length >= 5) return;
      var items = shuffle(lesson.items || []);
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var ansKey = (it.c || "").toString().toLowerCase();
        var matchOpt = (lesson.options || []).find(function (o) {
          return (o.k || "").toString().toLowerCase() === ansKey;
        });
        if (!matchOpt || !matchOpt.de) continue;
        var hNorm = normText(matchOpt.de);
        if (usedHeadingTexts[hNorm]) continue;
        usedHeadingTexts[hNorm] = true;
        usedLessonIds[lesson.id || lesson.title] = true;
        chosenPairs.push({
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          item: clone(it),
          option: clone(matchOpt)
        });
        break;
      }
    });

    // Fallback pass if fewer than 5 distinct lessons are loaded
    if (chosenPairs.length < 5) {
      shuffle(lessons).forEach(function (lesson) {
        if (chosenPairs.length >= 5) return;
        var items = shuffle(lesson.items || []);
        for (var i = 0; i < items.length; i++) {
          if (chosenPairs.length >= 5) break;
          var it = items[i];
          var ansKey = (it.c || "").toString().toLowerCase();
          var matchOpt = (lesson.options || []).find(function (o) {
            return (o.k || "").toString().toLowerCase() === ansKey;
          });
          if (!matchOpt || !matchOpt.de) continue;
          var hNorm = normText(matchOpt.de);
          if (usedHeadingTexts[hNorm]) continue;
          usedHeadingTexts[hNorm] = true;
          chosenPairs.push({
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            item: clone(it),
            option: clone(matchOpt)
          });
        }
      });
    }

    if (chosenPairs.length === 0) return null;

    // Collect 5 distractor headings (unused anywhere in the 5 chosen pairs)
    var distractorCandidates = [];
    shuffle(lessons).forEach(function (lesson) {
      var correctKeys = {};
      (lesson.items || []).forEach(function (it) {
        correctKeys[(it.c || "").toString().toLowerCase()] = true;
      });
      (lesson.options || []).forEach(function (opt) {
        if (!opt || !opt.de) return;
        var hNorm = normText(opt.de);
        if (usedHeadingTexts[hNorm]) return;
        // Prefer pure distractors first, then any remaining unused heading
        distractorCandidates.push({
          option: clone(opt),
          isPureDistractor: !correctKeys[(opt.k || "").toString().toLowerCase()]
        });
      });
    });

    // Sort pure distractors before non-pure ones while preserving randomness within each group
    distractorCandidates.sort(function (a, b) {
      return (b.isPureDistractor ? 1 : 0) - (a.isPureDistractor ? 1 : 0);
    });

    var distractors = [];
    for (var d = 0; d < distractorCandidates.length && distractors.length < 5; d++) {
      var cand = distractorCandidates[d].option;
      var cNorm = normText(cand.de);
      if (usedHeadingTexts[cNorm]) continue;
      usedHeadingTexts[cNorm] = true;
      distractors.push(cand);
    }

    var allOptions = shuffle(
      chosenPairs.map(function (p, idx) {
        var o = clone(p.option);
        o._pairIndex = idx;
        return o;
      }).concat(distractors.map(function (o) {
        var copy = clone(o);
        copy._pairIndex = -1;
        return copy;
      }))
    );

    var keys = "abcdefghij".split("");
    var keyByPairIndex = {};
    var finalOptions = allOptions.map(function (opt, idx) {
      var k = keys[idx] || String.fromCharCode(97 + idx);
      if (opt._pairIndex >= 0) {
        keyByPairIndex[opt._pairIndex] = k;
      }
      delete opt._pairIndex;
      opt.k = k;
      return opt;
    });

    var finalItems = chosenPairs.map(function (p, idx) {
      var it = clone(p.item);
      it.n = idx + 1;
      it.c = keyByPairIndex[idx];
      it.sourceTitle = p.lessonTitle;
      return it;
    });

    var topicCount = Object.keys(usedLessonIds).length || chosenPairs.length;

    return {
      id: "random-t1-" + Date.now(),
      title: "Teil 1 — امتحان عشوائي مختلط",
      titleAr: "مطابقة النصوص والعناوين",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      isRandom: true,
      note: "مزيج من " + topicCount + " مواضيع — " + finalOptions.length + " عناوين (" + finalItems.length + " صحيحة + " + distractors.length + " تمويه)",
      options: finalOptions,
      items: finalItems
    };
  }

  function pickFromPool(poolKey, titlePrefix, excludeIds) {
    var pools = collectPools();
    var list = pools[poolKey] || [];
    if (list.length === 0) return null;

    var ex = Array.isArray(excludeIds) ? excludeIds : [];
    var filtered = list.filter(function (item) {
      return ex.indexOf(item.id) === -1;
    });
    var candidates = filtered.length > 0 ? filtered : list;
    var picked = clone(candidates[Math.floor(Math.random() * candidates.length)]);

    picked.sourceId = picked.id;
    picked.sourceTitle = picked.title;
    picked.isRandom = true;
    picked.title = titlePrefix + " · " + picked.title;
    return picked;
  }

  function pickRandomTeil2(opts) {
    return pickFromPool("teil2", "Teil 2 — امتحان عشوائي", opts && opts.excludeIds);
  }

  function buildRandomTeil3(opts) {
    var pools = collectPools();
    var lessons = pools.teil3;
    if (lessons.length === 0) return null;

    var excludeIds = (opts && Array.isArray(opts.excludeIds)) ? opts.excludeIds : [];
    var filtered = lessons.filter(function (l) {
      return excludeIds.indexOf(l.id) === -1;
    });
    var primaryLessons = filtered.length >= 8 ? filtered : lessons;

    var matchedPairs = [];
    var xItems = [];
    var usedItemTexts = {};
    var usedAdTexts = {};
    var usedLessonsForMatched = {};

    // Pick 8 matched (item, ad) pairs across distinct lessons first
    shuffle(primaryLessons).forEach(function (lesson) {
      if (matchedPairs.length >= 8) return;
      var items = shuffle(lesson.items || []);
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var ansKey = (it.c || "").toString().toUpperCase();
        if (!ansKey || ansKey === "X") continue;
        var matchAd = (lesson.ads || []).find(function (a) {
          return (a.k || "").toString().toUpperCase() === ansKey;
        });
        if (!matchAd || !matchAd.de) continue;
        var itNorm = normText(it.de);
        var adNorm = normText(matchAd.de);
        if (usedItemTexts[itNorm] || usedAdTexts[adNorm]) continue;

        usedItemTexts[itNorm] = true;
        usedAdTexts[adNorm] = true;
        usedLessonsForMatched[lesson.id || lesson.title] = true;
        matchedPairs.push({
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          item: clone(it),
          ad: clone(matchAd)
        });
        break;
      }
    });

    // Fallback pass if fewer than 8 Teil 3 lessons exist
    if (matchedPairs.length < 8) {
      shuffle(lessons).forEach(function (lesson) {
        if (matchedPairs.length >= 8) return;
        var items = shuffle(lesson.items || []);
        for (var i = 0; i < items.length; i++) {
          if (matchedPairs.length >= 8) break;
          var it = items[i];
          var ansKey = (it.c || "").toString().toUpperCase();
          if (!ansKey || ansKey === "X") continue;
          var matchAd = (lesson.ads || []).find(function (a) {
            return (a.k || "").toString().toUpperCase() === ansKey;
          });
          if (!matchAd || !matchAd.de) continue;
          var itNorm = normText(it.de);
          var adNorm = normText(matchAd.de);
          if (usedItemTexts[itNorm] || usedAdTexts[adNorm]) continue;

          usedItemTexts[itNorm] = true;
          usedAdTexts[adNorm] = true;
          matchedPairs.push({
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            item: clone(it),
            ad: clone(matchAd)
          });
        }
      });
    }

    // Pick 2 real "X" items from distinct lessons
    shuffle(lessons).forEach(function (lesson) {
      if (xItems.length >= 2) return;
      var items = shuffle(lesson.items || []);
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        if ((it.c || "").toString().toUpperCase() !== "X") continue;
        var itNorm = normText(it.de);
        if (usedItemTexts[itNorm]) continue;
        usedItemTexts[itNorm] = true;
        xItems.push({
          lessonTitle: lesson.title,
          item: clone(it)
        });
        break;
      }
    });

    if (xItems.length < 2) {
      shuffle(lessons).forEach(function (lesson) {
        if (xItems.length >= 2) return;
        var items = shuffle(lesson.items || []);
        for (var i = 0; i < items.length; i++) {
          if (xItems.length >= 2) break;
          var it = items[i];
          if ((it.c || "").toString().toUpperCase() !== "X") continue;
          var itNorm = normText(it.de);
          if (usedItemTexts[itNorm]) continue;
          usedItemTexts[itNorm] = true;
          xItems.push({
            lessonTitle: lesson.title,
            item: clone(it)
          });
        }
      });
    }

    // Collect 4 distractor ads (prefer unreferenced ads from Teil 3 lessons)
    var distractorAdCandidates = [];
    shuffle(lessons).forEach(function (lesson) {
      var usedKeys = {};
      (lesson.items || []).forEach(function (it) {
        var ak = (it.c || "").toString().toUpperCase();
        if (ak && ak !== "X") usedKeys[ak] = true;
      });
      (lesson.ads || []).forEach(function (ad) {
        if (!ad || !ad.de) return;
        var adNorm = normText(ad.de);
        if (usedAdTexts[adNorm]) return;
        distractorAdCandidates.push({
          ad: clone(ad),
          isUnused: !usedKeys[(ad.k || "").toString().toUpperCase()]
        });
      });
    });

    distractorAdCandidates.sort(function (a, b) {
      return (b.isUnused ? 1 : 0) - (a.isUnused ? 1 : 0);
    });

    var distractorAds = [];
    for (var d = 0; d < distractorAdCandidates.length && distractorAds.length < 4; d++) {
      var adObj = distractorAdCandidates[d].ad;
      var adNorm = normText(adObj.de);
      if (usedAdTexts[adNorm]) continue;
      usedAdTexts[adNorm] = true;
      distractorAds.push(adObj);
    }

    var allAds = shuffle(
      matchedPairs.map(function (p, idx) {
        var a = clone(p.ad);
        a._pairIndex = idx;
        return a;
      }).concat(distractorAds.map(function (a) {
        var copy = clone(a);
        copy._pairIndex = -1;
        return copy;
      }))
    );

    var adLetters = "ABCDEFGHIJKL".split("");
    var keyByPairIndex = {};
    var finalAds = allAds.map(function (ad, idx) {
      var k = adLetters[idx] || String.fromCharCode(65 + idx);
      if (ad._pairIndex >= 0) {
        keyByPairIndex[ad._pairIndex] = k;
      }
      delete ad._pairIndex;
      ad.k = k;
      return ad;
    });

    var combinedItems = shuffle(
      matchedPairs.map(function (p, idx) {
        var it = clone(p.item);
        it.c = keyByPairIndex[idx];
        it.sourceTitle = p.lessonTitle;
        return it;
      }).concat(xItems.map(function (x) {
        var it = clone(x.item);
        it.c = "X";
        it.sourceTitle = x.lessonTitle;
        return it;
      }))
    ).map(function (it, idx) {
      it.n = idx + 1;
      return it;
    });

    var topicCount = Object.keys(usedLessonsForMatched).length || matchedPairs.length;

    return {
      id: "random-t3-" + Date.now(),
      title: "Teil 3 — امتحان عشوائي مختلط",
      titleAr: "الإعلانات والحالات",
      level: "B1",
      sub: "Teile 3",
      type: "matching",
      isRandom: true,
      note: "مزيج من " + topicCount + " مواضيع — " + combinedItems.length + " حالات (" + matchedPairs.length + " مطابقة + " + xItems.length + " تمويه [X]) و" + finalAds.length + " إعلان (A-" + (adLetters[finalAds.length - 1] || "L") + ")",
      ads: finalAds,
      items: combinedItems
    };
  }

  function pickRandomSprach1(opts) {
    return pickFromPool("sprach1", "Sprachbaustein 1 — امتحان عشوائي", opts && opts.excludeIds);
  }

  function pickRandomSprach2(opts) {
    return pickFromPool("sprach2", "Sprachbaustein 2 — امتحان عشوائي", opts && opts.excludeIds);
  }

  function buildFullRandomExam(opts) {
    var t1 = buildRandomTeil1(opts);
    var t2 = pickRandomTeil2(opts);
    var t3 = buildRandomTeil3(opts);
    var sp1 = pickRandomSprach1(opts);
    var sp2 = pickRandomSprach2(opts);

    var parts = [
      { key: "teil1", label: "Teil 1", titleAr: "مطابقة النصوص والعناوين", exam: t1 },
      { key: "teil2", label: "Teil 2", titleAr: "النصوص الطويلة", exam: t2 },
      { key: "teil3", label: "Teil 3", titleAr: "الإعلانات والحالات", exam: t3 },
      { key: "sprach1", label: "Sprachbaustein 1", titleAr: "بناء الجملة", exam: sp1 },
      { key: "sprach2", label: "Sprachbaustein 2", titleAr: "المفردات والقواعد", exam: sp2 }
    ].filter(function (p) {
      return Boolean(p.exam);
    });

    return {
      id: "random-full-" + Date.now(),
      title: "امتحان كامل عشوائي B1",
      level: "B1",
      sub: "Prüfung",
      type: "full",
      isRandom: true,
      timerSeconds: 5400,
      parts: parts
    };
  }

  function generate(key, opts) {
    switch (key) {
      case "teil1":
        return buildRandomTeil1(opts);
      case "teil2":
        return pickRandomTeil2(opts);
      case "teil3":
        return buildRandomTeil3(opts);
      case "sprach1":
        return pickRandomSprach1(opts);
      case "sprach2":
        return pickRandomSprach2(opts);
      case "full":
        return buildFullRandomExam(opts);
      default:
        return null;
    }
  }

  root.SAHLA_DATA.b1.pruefungen = {
    title: "Zufällige Prüfungen",
    level: "B1",
    fullExamTimerSeconds: 5400,
    modes: [
      {
        id: "random-t1",
        order: 1,
        key: "teil1",
        title: "Teil 1",
        subtitleAr: "مطابقة النصوص والعناوين",
        badge: "عشوائي",
        ctaAr: "ابدأ الآن",
        type: "headings",
        noteAr: "مزيج من 5 مواضيع — 10 عناوين (5 صحيحة + 5 تمويه)"
      },
      {
        id: "random-t2",
        order: 2,
        key: "teil2",
        title: "Teil 2",
        subtitleAr: "النصوص الطويلة",
        badge: "عشوائي",
        ctaAr: "ابدأ الآن",
        type: "mcq",
        noteAr: "اختيار عشوائي لنص طويل كامل من دروس Teil 2"
      },
      {
        id: "random-t3",
        order: 3,
        key: "teil3",
        title: "Teil 3",
        subtitleAr: "الاعلانات والحالات",
        badge: "عشوائي",
        ctaAr: "ابدأ الآن",
        type: "matching",
        noteAr: "مزيج من 8 مواضيع — 10 حالات (8 مطابقة + 2 تمويه [X]) و12 إعلان (A-L)"
      },
      {
        id: "random-sp1",
        order: 4,
        key: "sprach1",
        title: "Sprachbaustein 1",
        subtitleAr: "بناء الجملة",
        badge: "عشوائي",
        ctaAr: "ابدأ الآن",
        type: "sprach1",
        noteAr: "اختيار عشوائي لموضوع بناء الجملة من دروس Sprachbaustein 1"
      },
      {
        id: "random-sp2",
        order: 5,
        key: "sprach2",
        title: "Sprachbaustein 2",
        subtitleAr: "المفردات والقواعد",
        badge: "عشوائي",
        ctaAr: "ابدأ الآن",
        type: "sprach2",
        noteAr: "اختيار عشوائي لموضوع المفردات والقواعد من دروس Sprachbaustein 2"
      },
      {
        id: "random-full",
        order: 6,
        key: "full",
        title: "امتحان كامل عشوائي",
        subtitleAr: "كل الأجزاء دفعة واحدة — Teil 1 · 2 · 3 · Sprachbaustein 1 · 2",
        badge: "90 دقيقة",
        ctaAr: "ابدأ",
        type: "full",
        timerSeconds: 5400
      }
    ],
    getPools: collectPools,
    buildRandomTeil1: buildRandomTeil1,
    pickRandomTeil2: pickRandomTeil2,
    buildRandomTeil3: buildRandomTeil3,
    pickRandomSprach1: pickRandomSprach1,
    pickRandomSprach2: pickRandomSprach2,
    buildFullRandomExam: buildFullRandomExam,
    generate: generate
  };
})(window);
