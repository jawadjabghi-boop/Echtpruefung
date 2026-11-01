// ==========================================
// data-b1.js — الجزء 1 من 3
// ==========================================

var WA = "212600000000";
var wa = function(x) { return window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(x), "_blank"); };

var supabaseUrl = 'https://ldatleskngsvoxwbiqtd.supabase.co';
var supabaseKey = 'sb_publishable_6UXiEWOS8YkGZTiT2jQRlA_K7HgONtL';
var sb = null;
try {
  if (typeof supabase !== 'undefined') {
    sb = supabase.createClient(supabaseUrl, supabaseKey);
  }
} catch(e) { console.error("Supabase error:", e); }

var LANGS = [
  { c:"ma", n:"الدارجة", f:"🇲🇦" }, { c:"ar", n:"العربية", f:"📜" },
  { c:"hi", n:"हिन्दी", f:"🇮🇳" }, { c:"id", n:"Indonesia", f:"🇮🇩" },
  { c:"tl", n:"Filipino", f:"🇵🇭" }, { c:"fa", n:"فارسی", f:"🇮🇷" },
  { c:"sw", n:"Kiswahili", f:"🇰🇪" }, { c:"fr", n:"Français", f:"🇫🇷" },
  { c:"en", n:"English", f:"🇬🇧" }, { c:"uz", n:"O'zbek", f:"🇺🇿" },
  { c:"ne", n:"नेपाली", f:"🇳🇵" }
];

var UI_TEXTS = {
  ma: { welcome:"مرحبا بيك", choose_lang:"ختار اللغة ديالك", home:"الرئيسية", lesen:"قراية", horen:"سماع", schreiben:"كتابة", sprechen:"هضرة", pruefung:"امتحان", exam_mode:"نمط الامتحان", practice_mode:"نمط التدريب", banner_title:"تدرب على الامتحان الحقيقي واذهب للحصول عليه!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"الكود الفريد الخاص بك", login:"تسجيل الدخول", guest:"دخول كزائر", support:"الدعم الفني", start_now:"ابدأ الآن", listen_lessons:"دروس الاستماع", search_placeholder:"...بحث عن موضوع", listen_title:"دروس الاستماع", listen_desc:"هنا كتلقى جميع دروس الهورن. اضغط على الزر لبدء الاستماع وحل الأسئلة.", gap_num:"الفراغ", choose_word_gap:"اختر الكلمة للفراغ", story_memo:"قصة للحفظ", check_btn:"تصحيح", next_btn:"التالي", back_btn:"رجوع", reset_btn:"إعادة", coming_soon:"قريباً...", settings:"الإعدادات", change_lang:"تغيير اللغة / Language", text_size:"حجم النص", reset_size:"إعادة الحجم الأصلي", logout:"خروج", whatsapp:"واتساب", lang_note:"اللغة التي تختارها ستبقى معك طوال التطبيق", or:"أو", correct:"✓ صحيح", wrong:"✗ غلط", no_answer:"⚠️ لم تجب", the_answer:"الجواب", b1_level:"المستوى B1", b2_level:"المستوى B2", side_menu:"القائمة الجانبية", ai_correct:"✨ تصحيح AI", trans_text:"ترجمة النص", trans_task:"ترجمة المهمة", show:"إظهار", hide:"إخفاء", words_count:"كلمة", locked:"مقفول", upgrade_pro:"ترقية إلى Pro", trial_active:"تجربة مجانية نشطة", trial_ended:"انتهت التجربة", wa_upgrade_msg:"سلام، بغيت نرقّي حسابي لـ Pro باش نحل جميع الدروس", admin_panel:"لوحة التحكم", notifications:"الإشعارات", block:"حظر", unblock:"إلغاء الحظر", mark_paid:"تفعيل الدفع", mark_unpaid:"إلغاء الدفع", save:"حفظ", cancel:"إلغاء", users:"المستخدمين", name:"الاسم", code:"الكود", status:"الحالة", paid:"مخلص", blocked:"محظور", actions:"إجراءات", send_notification:"إرسال إشعار", title_ar:"العنوان", message_ar:"الرسالة", no_notifications:"لا توجد إشعارات حالياً", unique_name_placeholder:"الاسم الفريد (Unique Name)", unique_code_placeholder:"الكود الفريد (Unique Code)", login_or_register:"دخول / إنشاء حساب", account_blocked:"تم حظر حسابك", contact_support:"تواصل مع الدعم الفني", please_wait:"جاري التحميل...", results:"النتائج", score:"النقطة", date:"التاريخ", search_users:"بحث عن مستخدم...", delete_notif:"حذف", confirm_delete_notif:"واش بصح باغي تحذف هاد الإشعار؟", sent_success:"تم الإرسال بنجاح!", fill_all_fields:"عمر جميع الحقول", sending:"جاري الإرسال...", previous_notifs:"الإشعارات السابقة", new_notif:"إرسال إشعار جديد", active:"نشط", inactive:"موقوف" },
  ar: { welcome:"مرحباً بك", choose_lang:"اختر لغتك", home:"الرئيسية", lesen:"قراءة", horen:"استماع", schreiben:"كتابة", sprechen:"تحدث", pruefung:"امتحان", exam_mode:"نمط الامتحان", practice_mode:"نمط التدريب", banner_title:"تدرب على الامتحان الحقيقي واذهب للحصول عليه!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"الكود الفريد الخاص بك", login:"تسجيل الدخول", guest:"دخول كزائر", support:"الدعم الفني", start_now:"ابدأ الآن", listen_lessons:"دروس الاستماع", search_placeholder:"...بحث عن موضوع", listen_title:"دروس الاستماع", listen_desc:"هنا تجد جميع دروس الاستماع. اضغط على الزر لبدء الاستماع وحل الأسئلة.", gap_num:"الفراغ", choose_word_gap:"اختر الكلمة للفراغ", story_memo:"قصة للحفظ", check_btn:"تصحيح", next_btn:"التالي", back_btn:"رجوع", reset_btn:"إعادة", coming_soon:"قريباً...", settings:"الإعدادات", change_lang:"تغيير اللغة", text_size:"حجم النص", reset_size:"إعادة الحجم الأصلي", logout:"خروج", whatsapp:"واتساب", lang_note:"اللغة التي تختارها ستبقى معك طوال التطبيق", or:"أو", correct:"✓ صحيح", wrong:"✗ خطأ", no_answer:"⚠️ لم تجب", the_answer:"الجواب", b1_level:"المستوى B1", b2_level:"المستوى B2", side_menu:"القائمة الجانبية", ai_correct:"✨ تصحيح AI", trans_text:"ترجمة النص", trans_task:"ترجمة المهمة", show:"إظهار", hide:"إخفاء", words_count:"كلمة", locked:"مقفول", upgrade_pro:"ترقية إلى Pro", trial_active:"تجربة مجانية نشطة", trial_ended:"انتهت التجربة", wa_upgrade_msg:"مرحباً، أريد ترقية حسابي إلى Pro لفتح جميع الدروس", admin_panel:"لوحة التحكم", notifications:"الإشعارات", block:"حظر", unblock:"إلغاء الحظر", mark_paid:"تفعيل الدفع", mark_unpaid:"إلغاء الدفع", save:"حفظ", cancel:"إلغاء", users:"المستخدمون", name:"الاسم", code:"الكود", status:"الحالة", paid:"مدفوع", blocked:"محظور", actions:"إجراءات", send_notification:"إرسال إشعار", title_ar:"العنوان", message_ar:"الرسالة", no_notifications:"لا توجد إشعارات حالياً", unique_name_placeholder:"الاسم الفريد", unique_code_placeholder:"الكود الفريد", login_or_register:"دخول / إنشاء حساب", account_blocked:"تم حظر حسابك", contact_support:"تواصل مع الدعم الفني", please_wait:"جاري التحميل...", results:"النتائج", score:"النقطة", date:"التاريخ", search_users:"بحث عن مستخدم...", delete_notif:"حذف", confirm_delete_notif:"هل تريد حقاً حذف هذا الإشعار؟", sent_success:"تم الإرسال بنجاح!", fill_all_fields:"يرجى ملء جميع الحقول", sending:"جاري الإرسال...", previous_notifs:"الإشعارات السابقة", new_notif:"إرسال إشعار جديد", active:"نشط", inactive:"موقوف" },
  en: { welcome:"Welcome", choose_lang:"Choose language", home:"Home", lesen:"Reading", horen:"Listening", schreiben:"Writing", sprechen:"Speaking", pruefung:"Exam", exam_mode:"Exam Mode", practice_mode:"Practice Mode", banner_title:"Train for the real exam and get it!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Your Unique ID", login:"Login", guest:"Login as Guest", support:"Technical Support", start_now:"Start Now", listen_lessons:"Listening Lessons", search_placeholder:"Search for a topic...", listen_title:"Listening Lessons", listen_desc:"Here you will find all listening lessons. Click the button to start listening and solving questions.", gap_num:"Gap", choose_word_gap:"Choose word for gap", story_memo:"Story to memorize", check_btn:"Check", next_btn:"Next", back_btn:"Back", reset_btn:"Reset", coming_soon:"Coming soon...", settings:"Settings", change_lang:"Change Language", text_size:"Text Size", reset_size:"Reset to original size", logout:"Logout", whatsapp:"WhatsApp", lang_note:"The language you choose will remain with you throughout the app", or:"or", correct:"✓ Correct", wrong:"✗ Wrong", no_answer:"⚠️ No answer", the_answer:"Answer", b1_level:"Level B1", b2_level:"Level B2", side_menu:"Side Menu", ai_correct:"✨ AI Check", trans_text:"Translate Text", trans_task:"Translate Task", show:"Show", hide:"Hide", words_count:"Words", locked:"Locked", upgrade_pro:"Upgrade to Pro", trial_active:"Free Trial Active", trial_ended:"Trial Ended", wa_upgrade_msg:"Hello, I want to upgrade to Pro to unlock all lessons", admin_panel:"Admin Panel", notifications:"Notifications", block:"Block", unblock:"Unblock", mark_paid:"Mark as Paid", mark_unpaid:"Mark as Unpaid", save:"Save", cancel:"Cancel", users:"Users", name:"Name", code:"Code", status:"Status", paid:"Paid", blocked:"Blocked", actions:"Actions", send_notification:"Send Notification", title_ar:"Title", message_ar:"Message", no_notifications:"No notifications yet", unique_name_placeholder:"Unique Name", unique_code_placeholder:"Unique Code", login_or_register:"Login / Register", account_blocked:"Your account has been blocked", contact_support:"Contact technical support", please_wait:"Loading...", results:"Results", score:"Score", date:"Date", search_users:"Search users...", delete_notif:"Delete", confirm_delete_notif:"Are you sure you want to delete this notification?", sent_success:"Sent successfully!", fill_all_fields:"Please fill all fields", sending:"Sending...", previous_notifs:"Previous Notifications", new_notif:"Send New Notification", active:"Active", inactive:"Inactive" },
  fr: { welcome:"Bienvenue", choose_lang:"Choisissez la langue", home:"Accueil", lesen:"Lecture", horen:"Écoute", schreiben:"Écriture", sprechen:"Expression orale", pruefung:"Examen", exam_mode:"Mode Examen", practice_mode:"Mode Entraînement", banner_title:"Entraînez-vous pour le vrai examen et obtenez-le !", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Votre identifiant unique", login:"Se connecter", guest:"Entrer en tant qu'invité", support:"Support Technique", start_now:"Commencer", listen_lessons:"Leçons d'écoute", search_placeholder:"Rechercher un sujet...", listen_title:"Leçons d'écoute", listen_desc:"Ici vous trouverez toutes les leçons d'écoute. Cliquez sur le bouton pour commencer à écouter et à répondre aux questions.", gap_num:"Espace", choose_word_gap:"Choisir le mot pour l'espace", story_memo:"Histoire à mémoriser", check_btn:"Vérifier", next_btn:"Suivant", back_btn:"Retour", reset_btn:"Réinitialiser", coming_soon:"Bientôt...", settings:"Paramètres", change_lang:"Changer de langue", text_size:"Taille du texte", reset_size:"Rétablir la taille d'origine", logout:"Déconnexion", whatsapp:"WhatsApp", lang_note:"La langue que vous choisissez restera avec vous tout au long de l'application", or:"ou", correct:"✓ Correct", wrong:"✗ Faux", no_answer:"⚠️ Sans réponse", the_answer:"Réponse", b1_level:"Niveau B1", b2_level:"Niveau B2", side_menu:"Menu Latéral", ai_correct:"✨ Correction IA", trans_text:"Traduire le texte", trans_task:"Traduire la tâche", show:"Afficher", hide:"Masquer", words_count:"Mots", locked:"Verrouillé", upgrade_pro:"Passer à Pro", trial_active:"Essai Gratuit Actif", trial_ended:"Essai Terminé", wa_upgrade_msg:"Bonjour, je souhaite passer à Pro pour débloquer toutes les leçons", admin_panel:"Panneau d'Admin", notifications:"Notifications", block:"Bloquer", unblock:"Débloquer", mark_paid:"Marquer Payé", mark_unpaid:"Marquer Non Payé", save:"Enregistrer", cancel:"Annuler", users:"Utilisateurs", name:"Nom", code:"Code", status:"Statut", paid:"Payé", blocked:"Bloqué", actions:"Actions", send_notification:"Envoyer Notification", title_ar:"Titre", message_ar:"Message", no_notifications:"Aucune notification pour le moment", unique_name_placeholder:"Nom unique", unique_code_placeholder:"Code unique", login_or_register:"Connexion / Inscription", account_blocked:"Votre compte a été bloqué", contact_support:"Contactez le support technique", please_wait:"Chargement...", results:"Résultats", score:"Score", date:"Date", search_users:"Rechercher des utilisateurs...", delete_notif:"Supprimer", confirm_delete_notif:"Voulez-vous vraiment supprimer cette notification ?", sent_success:"Envoyé avec succès !", fill_all_fields:"Veuillez remplir tous les champs", sending:"Envoi...", previous_notifs:"Notifications Précédentes", new_notif:"Envoyer une Nouvelle Notification", active:"Actif", inactive:"Inactif" }
};

function t(key, lang) {
  if (UI_TEXTS[lang] && UI_TEXTS[lang][key]) return UI_TEXTS[lang][key];
  if (UI_TEXTS.en[key]) return UI_TEXTS.en[key];
  return key;
}

// ==========================================
// SCHREIBEN_DATA
// ==========================================
var __schreibenPremium = [
  "Sophie - Würzburg Und Freizeit", "Nadja - Garten Am Stadtrand", "Nicole - Probleme Mit Dem Bruder",
  "Andreas - Neuer Kollege Und Büroalltag", "Annika - Gemeinsamer Sommerurlaub",
  "Iris - Abschlussparty Organisieren", "Caroline - Gastschülerin Aus Marokko",
  "Vera - Arbeitsweg Und Neue Stelle", "Jennifer - Einladung Zur Hochzeit",
  "Andreas - Neue Wohnung Und Computer", "Thomas - Überraschungsausflug",
  "Tamara - Treffen Und Neuer Job", "Jan - Urlaub In Rom", "Viktor - Urlaub In Malta",
  "Anna - Katze Und Blumen", "Nora - Neue Wohnung Und Leute Kennenlernen",
  "Claudia - Zoobesuch Und Geburtstag", "Karla - Umzug Und Neue Arbeit",
  "Mara - Reise Und Neuer Freund", "Annika - Gemeinsamer Urlaub (Teil 2)",
  "Sonja - Musikfestival", "Rita - Hochzeit Und Neuigkeiten", "Anne - Laras Geburtstag",
  "Paul - Ausflug In Die Berge", "Jakob - Nachbarn Und Wohnung", "Emilia", "Tobias",
  "Naco", "Alicia", "Cora Und Alex", "Miroslav", "Corinna", "Moritz"
].map(function(title, i) {
  return {
    id: "sch" + (i + 4),
    title: title,
    level: "B1",
    isPremium: true,
    text: "",
    task: "",
    points: [],
    transText: {},
    transTask: {},
    transPoints: {}
  };
});

var SCHREIBEN_DATA = [
  {
    id: "sch1", title: "Urlaub Im Schwarzwald - Antwort An Petra", level: "B1",
    text: "Liebe(r).......\n\nIch habe eine tolle Überraschung. stelle dir vor, was mir mein Onkel angeboten hat. Er rief mich am Samstag an. Er hat ein großes Ferienhaus im Schwarzwald. Das Haus kann ich für die Ferien kostenlos haben. Ich kann auch Freunde mitbringen! Wäre das nichts für uns? Wir könnten uns alle dort treffen. Du, deine Eltern und Freunde, und ich mit meiner Familie und meinen Freunden. Ich würde mich wahnsinnig freuen, wenn das klappen würde. Bitte schreibe mir so schnell du kannst, damit wir alles planen können. Urlaub im Schwarzwald - das wird traumhaft schön!\n\nHerzliche Grüße\nPetra",
    task: "Antworten Sie auf den Brief. Schreiben Sie etwas zu den folgenden Punkten:",
    points: ["Warum Sie gern nach Deutschland kommen möchten?", "Wie Sie anreisen wollen?", "Was Sie gemeinsam machen könnten?", "Wen Sie mitbringen möchten?"],
    transText: {},
    transTask: {},
    transPoints: {}
  },
  {
    id: "sch2", title: "Eva - Traumberuf Und Neuigkeiten", level: "B1",
    text: "Liebe(r).......\n\nwie geht es denn so mit dem Deutsch lernen? Kommst du gut voran, und was machst du im Moment so? Stell dir vor, ich habe die neue Stelle bei der Zeitschrift VIA bekommen! ich arbeite jetzt als Journalistin, und das war ja immer mein Traumberuf!\n\nVIA wird vor allem von jüngeren Leuten gelesen. Deshalb schreiben wir viel über Berufe und Ausbildungen und auch über Freizeit und Sport. Für die nächsten Hefte von VIA planen wir jetzt eine neue Serie über Berufs wünsche. Was ist eigentlich dein Traumberuf? Wenn du möchtest, schicke ich dir gerne einmal ein Gratisheft von VIA, damit du siehst, was ich so mache.\n\nIch freue mich schon auf deine Antwort.\n\nHerzliche Grüße\nEva",
    task: "Schreiben Sie Ihrer Bekannten nun einen Antwortbrief, der die folgenden Punkte enthält:",
    points: ["Fortschritte beim Deutsch Lernen", "Auf Evas neue Stelle reagieren", "Was es Neues bei Ihnen gibt", "Ihr Traumberuf"],
    transText: {},
    transTask: {},
    transPoints: {}
  },
  {
    id: "sch3", title: "TIKKI TAKKA - Beschwerde", level: "B2",
    text: "Das Party-Abenteuer für Kinder!\nErleben Sie spannende Kinder-Partys mit TIKKI TAKKA!\n\nAbenteuerliche Spiele und lustige Party-Animation, Spaßige Schatzsuchen und spannende Entdeckungsreisen, Zauberer, Clowns und Kinderschminken, Tolle Party-Pakete für unvergessliche Erlebnisse.\nTOLLE AKTIONSPREISE!\n\nAbenteuer TIKKI TAKKA\nBirkenweg 5, 12345 Beispielstadt\nwww.tikki-takka.de\n+49 1234 567890\n\nSie haben bei der Firma Abenteuer TIKKI TAKKA eine Schatzsuche für den Geburtstag Ihres Kindes gebucht. Trotz günstiger Preise war die Geburtstagsfeier nicht so schön wie erwartet und Sie sind nicht damit zufrieden. Schreiben Sie eine Beschwerde und gehen Sie dabei auf die genannten Punkte ein.",
    task: "Schreiben Sie eine Antwort. Behandeln Sie folgende Punkte:",
    points: ["Mit welchem Angebot waren Sie nicht zufrieden?", "Erklären Sie, warum das Angebot nicht begeistert hat.", "Vorschläge für Verbesserungen: Was könnte TIKKI TAKKA Ihrer Meinung nach besser machen?"],
    transText: {},
    transTask: {},
    transPoints: {}
  }
].concat(__schreibenPremium);

// ==========================================
// EXAMS — دروس القراءة (Lesen)
// ==========================================
var __examsPremiumLessons = [
  { title: "Eva", slug: "eva" }, { title: "Paul", slug: "paul" }, { title: "Iris", slug: "iris" },
  { title: "Jan", slug: "jan" }, { title: "Miroslav", slug: "miroslav" }, { title: "Andreas 1", slug: "andreas1" },
  { title: "Annika 2", slug: "annika2" }, { title: "Sonja", slug: "sonja" }, { title: "Nadja / Claudia", slug: "nadjaclaudia" },
  { title: "Karla", slug: "karla" }, { title: "Viktor", slug: "viktor" }, { title: "Moritz", slug: "moritz" },
  { title: "Corina", slug: "corina" }, { title: "Petra", slug: "petra" }, { title: "Tamara / Jakob", slug: "tamarajakob" },
  { title: "Nicole", slug: "nicole" }, { title: "Andreas 2", slug: "andreas2" }, { title: "Thomas / Anna", slug: "thomasanna" },
  { title: "Sophie", slug: "sophie" }, { title: "Alicia", slug: "alicia" }, { title: "Annika 1", slug: "annika1" },
  { title: "Jennifer", slug: "jennifer" }, { title: "Mara", slug: "mara" }, { title: "Miroslav 2", slug: "miroslav2" }
];

var __examsPremiumParts = [
  { sub: "Teile 1", type: "headings", suf: "t1" },
  { sub: "Teile 2", type: "mcq", suf: "t2" },
  { sub: "Teile 3", type: "matching", suf: "t3" },
  { sub: "Sprach 1", type: "sprach1", suf: "sp1" },
  { sub: "Sprach 2", type: "sprach2", suf: "sp2" }
];

var __examsPremium = [];
__examsPremiumLessons.forEach(function(l) {
  __examsPremiumParts.forEach(function(p) {
    __examsPremium.push({
      id: l.slug + "-" + p.suf,
      title: l.title,
      level: "B1",
      sub: p.sub,
      type: p.type,
      isPremium: true
    });
  });
});

var __examsMain = [
  {
    id: "alex-t1", title: "Alex", level: "B1", sub: "Teile 1", type: "headings", isPremium: false,
    options: [
      { k: "a", de: "Ein Wochenendausflug mit dem Fahrrad", ar: "رحلة نهاية أسبوع بالدراجة", ma: "خرجة نهاية السيمانة بالبيكالا", en: "A weekend trip by bike", fr: "Une excursion à vélo le week-end" },
      { k: "b", de: "Neue Arbeitsstelle in einer anderen Stadt", ar: "وظيفة جديدة في مدينة أخرى", ma: "خدمة جديدة ف مدينة أخرى", en: "New job in another city", fr: "Nouvel emploi dans une autre ville" },
      { k: "c", de: "Ein Umzug in die eigene Wohnung", ar: "الانتقال إلى شقة خاصة", ma: "الانتقال لدار بوحدها", en: "Moving into your own apartment", fr: "Déménagement dans son propre appartement" },
      { k: "d", de: "Ein Sprachkurs für Anfänger", ar: "دورة لغة للمبتدئين", ma: "دورة اللغة للمبتدئين", en: "A language course for beginners", fr: "Un cours de langue pour débutants" },
      { k: "e", de: "Ein Wochenende mit der Familie verbringen", ar: "قضاء نهاية الأسبوع مع العائلة", ma: "تعدي نهاية السيمانة مع العائلة", en: "Spending a weekend with family", fr: "Passer un week-end en famille" }
    ],
    items: [
      { n: 1, c: "b", de: "Alex ist letzte Woche in eine neue Stadt gezogen, weil er dort einen Job als Informatiker gefunden hat.", ar: "انتقل أليكس الأسبوع الماضي إلى مدينة جديدة لأنه وجد وظيفة كمبرمج هناك.", ma: "أليكس انتقل السيمانة اللي فاتت ل مدينة جديدة حيت لقى خدمة كمبرمج تما.", en: "Alex moved to a new city last week because he found a job as a computer scientist there.", fr: "Alex a déménagé dans une nouvelle ville la semaine dernière parce qu'il y a trouvé un emploi d'informaticien." },
      { n: 2, c: "c", de: "Nach langem Suchen hat Alex endlich eine eigene Wohnung gefunden. Sie liegt im dritten Stock und hat einen großen Balkon.", ar: "بعد بحث طويل، وجد أليكس أخيراً شقة خاصة به. تقع في الطابق الثالث ولها شرفة كبيرة.", ma: "من بعد قلب طويل، لقى أليكس أخيراً دار بوحدو. كاينة ف الطابق الثالث وفيها بالكون كبير.", en: "After a long search, Alex has finally found his own apartment. It's on the third floor and has a large balcony.", fr: "Après de longues recherches, Alex a enfin trouvé son propre appartement. Il est au troisième étage et dispose d'un grand balcon." },
      { n: 3, c: "a", de: "Am Wochenende möchte Alex mit seinen neuen Kollegen eine Radtour machen. Sie fahren an einem See und durch einen Park.", ar: "في نهاية الأسبوع، يريد أليكس القيام بجولة بالدراجة مع زملائه الجدد. سيمرون ببحيرة وعبر حديقة.", ma: "ف نهاية السيمانة، أليكس باغي يدير جولة بالبيكالا مع الزملاء الجدد ديالو. غادي يدوزو على بحيرة وعلى حديقة.", en: "At the weekend, Alex wants to go on a bike tour with his new colleagues. They will ride past a lake and through a park.", fr: "Le week-end, Alex aimerait faire une sortie à vélo avec ses nouveaux collègues. Ils passeront devant un lac et à travers un parc." },
      { n: 4, c: "d", de: "Alex möchte eine neue Sprache lernen und sucht einen Kurs, der am Abend stattfindet und nicht zu teuer ist.", ar: "يريد أليكس تعلم لغة جديدة ويبحث عن دورة تُعقد في المساء وليست غالية جداً.", ma: "أليكس باغي يتعلم لغة جديدة وكيقلب على دورة كتكون ف العشية وماشي غالية بزاف.", en: "Alex wants to learn a new language and is looking for a course that takes place in the evening and isn't too expensive.", fr: "Alex souhaite apprendre une nouvelle langue et cherche un cours qui a lieu le soir et qui n'est pas trop cher." },
      { n: 5, c: "e", de: "Am nächsten Wochenende kommen Alex' Eltern zu Besuch. Er plant ein gemeinsames Essen und einen Ausflug in die Berge.", ar: "في نهاية الأسبوع القادم سيأتي والدا أليكس للزيارة. يخطط لتناول طعام معاً ورحلة إلى الجبال.", ma: "ف نهاية السيمانة الجاية غادي يجيو الوالدين ديال أليكس للزيارة. كيخطط لماكلة مشتركة وخرجة للجبال.", en: "Next weekend, Alex's parents are coming to visit. He is planning a meal together and a trip to the mountains.", fr: "Le week-end prochain, les parents d'Alex viennent en visite. Il prévoit un repas ensemble et une excursion en montagne." }
    ]
  },
  {
    id: "alex-t2", title: "Alex", level: "B1", sub: "Teile 2", type: "mcq", isPremium: false,
    paragraphs: [
      { de: "Alex ist 28 Jahre alt und arbeitet seit zwei Wochen in einem großen Softwareunternehmen in München. Früher hat er in Hamburg gewohnt, aber der neue Job hat ihn zum Umzug bewegt. Am Anfang war es nicht einfach, weil er niemanden kannte und sich oft allein fühlte.", ar: "أليكس يبلغ 28 عاماً ويعمل منذ أسبوعين في شركة برمجيات كبيرة في ميونخ. سابقاً كان يعيش في هامبورغ، لكن الوظيفة الجديدة دفعته للانتقال. في البداية لم يكن الأمر سهلاً لأنه لم يكن يعرف أحداً وغالباً ما كان يشعر بالوحدة.", ma: "أليكس عندو 28 عام وكيخدم من جوج سيمانات ف شركة كبيرة ديال البرمجيات ف ميونخ. قبل كان ساكن ف هامبورغ، ولكن الخدمة الجديدة خلاتو ينتقل. ف البداية ماشي ساهل حيت ما كان يعرف حتى واحد وبزاف ديال المرات كان كيحس بوحدو.", en: "Alex is 28 years old and has been working at a large software company in Munich for two weeks. He used to live in Hamburg, but the new job prompted him to move. At first it wasn't easy because he didn't know anyone and often felt lonely.", fr: "Alex a 28 ans et travaille depuis deux semaines dans une grande entreprise de logiciels à Munich. Il vivait auparavant à Hambourg, mais son nouvel emploi l'a poussé à déménager. Au début, ce n'était pas facile car il ne connaissait personne et se sentait souvent seul." },
      { de: "Inzwischen hat Alex aber schon einige Kollegen kennengelernt. Besonders gut versteht er sich mit Lisa, die ihm beim Einleben hilft. Sie hat ihm auch Tipps für die Wohnungssuche gegeben. Ohne ihre Hilfe hätte er wahrscheinlich noch länger in einem Hotel wohnen müssen.", ar: "لكن في هذه الأثناء تعرّف أليكس بالفعل على بعض الزملاء. يتفاهم بشكل خاص مع ليزا التي تساعده على التكيف. كما أعطته نصائح للبحث عن شقة. لولا مساعدتها لكان على الأرجح سيضطر للسكن في فندق لفترة أطول.", ma: "ولكن ف هاد الوقت أليكس تعرف على شي زملاء. كيفهم بزاف مع ليزا اللي كتعاونو يتأقلم. حتى هي عطاتو نصائح على البحث على دار. لولا المساعدة ديالها كان على الأرجح غادي يبقى ساكن ف فندق مدة أطول.", en: "In the meantime, Alex has already met some colleagues. He gets along particularly well with Lisa, who helps him settle in. She also gave him tips on finding an apartment. Without her help, he probably would have had to stay in a hotel longer.", fr: "Entre-temps, Alex a déjà rencontré quelques collègues. Il s'entend particulièrement bien avec Lisa, qui l'aide à s'intégrer. Elle lui a aussi donné des conseils pour trouver un appartement. Sans son aide, il aurait probablement dû rester plus longtemps à l'hôtel." },
      { de: "Neben der Arbeit möchte Alex auch neue Freunde finden. Er hat sich deshalb in einem Sportverein angemeldet. Zweimal pro Woche spielt er jetzt Fußball. Das tut ihm gut, denn nach der Arbeit braucht er Bewegung.", ar: "إلى جانب العمل، يريد أليكس أيضاً تكوين صداقات جديدة. لذلك سجّل في نادٍ رياضي. الآن يلعب كرة القدم مرتين في الأسبوع. هذا مفيد له لأنه يحتاج للحركة بعد العمل.", ma: "بجانب الخدمة، أليكس باغي حتى يلقى صحاب جداد. داكشي علاش سجل ف نادي رياضي. دابا كيلعب الكورة جوج مرات ف السيمانة. هادشي مزيان ليه، حيت من بعد الخدمة كيحتاج الحركة.", en: "Besides work, Alex also wants to make new friends. That's why he signed up at a sports club. He now plays football twice a week. It does him good because he needs exercise after work.", fr: "En plus du travail, Alex souhaite aussi se faire de nouveaux amis. C'est pourquoi il s'est inscrit dans un club de sport. Il joue maintenant au football deux fois par semaine. Cela lui fait du bien car il a besoin de bouger après le travail." }
    ],
    items: [
      { n: 1, c: "A", q: "Warum ist Alex nach München gezogen?", qar: "لماذا انتقل أليكس إلى ميونخ؟", qma: "علاش أليكس انتقل ل ميونخ؟", qen: "Why did Alex move to Munich?", qfr: "Pourquoi Alex a-t-il déménagé à Munich ?",
        opts: [
          { k: "A", de: "wegen seiner neuen Arbeitsstelle", ar: "بسبب وظيفته الجديدة", ma: "بسبب الخدمة الجديدة ديالو", en: "because of his new job", fr: "à cause de son nouvel emploi" },
          { k: "B", de: "um seine Familie zu besuchen", ar: "لزيارة عائلته", ma: "باش يزور العائلة ديالو", en: "to visit his family", fr: "pour rendre visite à sa famille" },
          { k: "C", de: "um Deutsch zu lernen", ar: "لتعلم الألمانية", ma: "باش يتعلم الألمانية", en: "to learn German", fr: "pour apprendre l'allemand" }
        ]
      },
      { n: 2, c: "B", q: "Wie hat Alex seine neue Wohnung gefunden?", qar: "كيف وجد أليكس شقته الجديدة؟", qma: "كيفاش لقى أليكس الدار الجديدة ديالو؟", qen: "How did Alex find his new apartment?", qfr: "Comment Alex a-t-il trouvé son nouvel appartement ?",
        opts: [
          { k: "A", de: "durch eine Zeitungsanzeige", ar: "من خلال إعلان في الجريدة", ma: "من خلال إعلان ف الجرنان", en: "through a newspaper ad", fr: "grâce à une annonce dans le journal" },
          { k: "B", de: "mit Hilfe einer Kollegin", ar: "بمساعدة زميلة", ma: "بمساعدة زميلة", en: "with the help of a colleague", fr: "avec l'aide d'une collègue" },
          { k: "C", de: "über eine Immobilienfirma", ar: "عبر شركة عقارية", ma: "عبر شركة عقارية", en: "through a real estate company", fr: "par l'intermédiaire d'une agence immobilière" }
        ]
      },
      { n: 3, c: "A", q: "Was macht Alex in seiner Freizeit?", qar: "ماذا يفعل أليكس في وقت فراغه؟", qma: "شنو كيدير أليكس ف وقت الفراغ ديالو؟", qen: "What does Alex do in his free time?", qfr: "Que fait Alex pendant son temps libre ?",
        opts: [
          { k: "A", de: "Er spielt Fußball im Verein", ar: "يلعب كرة القدم في النادي", ma: "كيلعب الكورة ف النادي", en: "He plays football at a club", fr: "Il joue au football dans un club" },
          { k: "B", de: "Er geht jeden Tag schwimmen", ar: "يذهب للسباحة كل يوم", ma: "كيمشي يعوم كل يوم", en: "He goes swimming every day", fr: "Il va nager tous les jours" },
          { k: "C", de: "Er liest viele Bücher", ar: "يقرأ الكثير من الكتب", ma: "كيقرا بزاف ديال الكتب", en: "He reads a lot of books", fr: "Il lit beaucoup de livres" }
        ]
      }
    ]
  },
  {
    id: "alex-t3", title: "Alex", level: "B1", sub: "Teile 3", type: "matching", isPremium: false,
    ads: [
      { k: "A", t: "Sportverein", de: "TSV München e.V. – Fußball, Tennis, Schwimmen. Neumitglieder willkommen! Jeden Dienstag und Donnerstag ab 18 Uhr.", ar: "نادي رياضي – كرة قدم، تنس، سباحة. الأعضاء الجدد مرحب بهم! كل ثلاثاء وخميس من الساعة 18.", ma: "نادي رياضي – كورة، تنس، عوم. الأعضاء الجدد مرحب بيهم! كل ثلاثاء وخميس من 18.", en: "Sports club – football, tennis, swimming. New members welcome! Every Tuesday and Thursday from 6 pm.", fr: "Club de sport – football, tennis, natation. Nouveaux membres bienvenus ! Chaque mardi et jeudi à partir de 18h." },
      { k: "B", t: "Sprachschule Lingua", de: "Deutsch als Fremdsprache – Abendkurse für Anfänger und Fortgeschrittene. Kleine Gruppen, faire Preise.", ar: "مدرسة لغات – الألمانية كلغة أجنبية – دورات مسائية للمبتدئين والمتقدمين. مجموعات صغيرة، أسعار معقولة.", ma: "مدرسة اللغات – الألمانية كلغة أجنبية – دورات ف العشية للمبتدئين والمتقدمين. مجموعات صغيرة، أثمنة معقولة.", en: "Language school – German as a foreign language – evening courses for beginners and advanced. Small groups, fair prices.", fr: "École de langues – Allemand langue étrangère – cours du soir pour débutants et avancés. Petits groupes, prix raisonnables." },
      { k: "C", t: "Wohnungsvermittlung Schneider", de: "Suchen Sie eine Wohnung? Wir haben viele Angebote in München und Umgebung. Kostenlose Erstberatung!", ar: "هل تبحث عن شقة؟ لدينا العديد من العروض في ميونخ والمناطق المجاورة. استشارة أولى مجانية!", ma: "كتقلب على دار؟ عندنا بزاف ديال العروض ف ميونخ والنواحي. استشارة أولى فابور!", en: "Looking for an apartment? We have many offers in Munich and surroundings. Free initial consultation!", fr: "Vous cherchez un appartement ? Nous avons de nombreuses offres à Munich et dans les environs. Première consultation gratuite !" },
      { k: "D", t: "Restaurant Bella Italia", de: "Authentische italienische Küche. Familientreffen und Feiern jeder Art. Reservierung empfohlen.", ar: "مطبخ إيطالي أصيل. لقاءات عائلية واحتفالات من كل نوع. يوصى بالحجز.", ma: "مطبخ إيطالي أصيل. لقاءات عائلية وحفلات من كل نوع. كنوصيو بالحجز.", en: "Authentic Italian cuisine. Family gatherings and celebrations of all kinds. Reservation recommended.", fr: "Cuisine italienne authentique. Réunions de famille et fêtes en tout genre. Réservation recommandée." },
      { k: "E", t: "Fahrradverleih Müller", de: "Tagesausflüge mit dem Rad? Wir verleihen Fahrräder für die ganze Familie. Auch E-Bikes vorhanden.", ar: "رحلات يومية بالدراجة؟ نؤجر دراجات للعائلة بأكملها. تتوفر أيضاً دراجات كهربائية.", ma: "خرجات يومية بالبيكالا؟ كنكريو بيكالات للعائلة كاملة. حتى البيكالات الكهربائية متوفرين.", en: "Day trips by bike? We rent bicycles for the whole family. E-bikes also available.", fr: "Excursions d'une journée à vélo ? Nous louons des vélos pour toute la famille. Vélos électriques également disponibles." },
      { k: "F", t: "Hotel Sonnenhof", de: "Ruhig gelegenes Hotel am Stadtrand. Ideal für Geschäftsreisen. Wöchentliche und monatliche Tarife.", ar: "فندق هادئ على أطراف المدينة. مثالي لرحلات العمل. أسعار أسبوعية وشهرية.", ma: "فندق هادي ف حدود المدينة. مثالي لسفرات الخدمة. أثمنة أسبوعية وشهرية.", en: "Quietly located hotel on the outskirts. Ideal for business trips. Weekly and monthly rates.", fr: "Hôtel calme en périphérie. Idéal pour les voyages d'affaires. Tarifs hebdomadaires et mensuels." },
      { k: "G", t: "Kino am Ring", de: "Aktuelle Filme in Originalsprache. Mittwochs Kinotag mit 50% Rabatt auf alle Tickets.", ar: "أفلام حديثة باللغة الأصلية. الأربعاء يوم السينما مع خصم 50% على جميع التذاكر.", ma: "أفلام جديدة باللغة الأصلية. الأربعاء نهار السينما مع تخفيض 50% على جميع التذاكر.", en: "Current films in the original language. Wednesday is cinema day with 50% off all tickets.", fr: "Films actuels en version originale. Le mercredi, journée cinéma avec 50 % de réduction sur tous les billets." },
      { k: "H", t: "Bäckerei Krüger", de: "Frisches Brot und Kuchen jeden Tag. Auch für größere Bestellungen und Feiern geeignet.", ar: "خبز وكعك طازج كل يوم. مناسب أيضاً للطلبات الكبيرة والاحتفالات.", ma: "خبز وكيك طري كل يوم. مناسب حتى للطلبات الكبيرة والحفلات.", en: "Fresh bread and cake every day. Also suitable for larger orders and celebrations.", fr: "Pain et gâteaux frais chaque jour. Convient également aux commandes plus importantes et aux fêtes." }
    ],
    items: [
      { n: 1, c: "B", de: "Alex möchte einen Deutschkurs am Abend machen.", ar: "يريد أليكس حضور دورة ألمانية في المساء.", ma: "أليكس باغي يدير دورة الألمانية ف العشية.", en: "Alex wants to take a German course in the evening.", fr: "Alex souhaite suivre un cours d'allemand le soir." },
      { n: 2, c: "E", de: "Am Wochenende möchte Alex mit Kollegen eine Radtour machen.", ar: "في نهاية الأسبوع يريد أليكس القيام بجولة بالدراجة مع الزملاء.", ma: "ف نهاية السيمانة أليكس باغي يدير جولة بالبيكالا مع الزملاء.", en: "At the weekend, Alex wants to go on a bike tour with colleagues.", fr: "Le week-end, Alex veut faire une sortie à vélo avec ses collègues." },
      { n: 3, c: "A", de: "Alex sucht eine Möglichkeit, Sport zu treiben und neue Leute kennenzulernen.", ar: "يبحث أليكس عن فرصة لممارسة الرياضة والتعرف على أشخاص جدد.", ma: "أليكس كيقلب على فرصة يدير رياضة ويتعرف على ناس جداد.", en: "Alex is looking for an opportunity to do sports and meet new people.", fr: "Alex cherche une occasion de faire du sport et de rencontrer de nouvelles personnes." },
      { n: 4, c: "D", de: "Alex' Eltern kommen zu Besuch und er möchte mit ihnen Essen gehen.", ar: "والدا أليكس قادمان للزيارة ويريد تناول الطعام معهما.", ma: "الوالدين ديال أليكس جايين للزيارة وباغي يكل معاهم.", en: "Alex's parents are coming to visit and he wants to eat out with them.", fr: "Les parents d'Alex viennent en visite et il veut manger au restaurant avec eux." },
      { n: 5, c: "F", de: "Bevor Alex seine Wohnung hatte, brauchte er eine Unterkunft für einige Wochen.", ar: "قبل أن يحصل أليكس على شقته، كان يحتاج إلى مكان للإقامة لعدة أسابيع.", ma: "قبل ما ياخد أليكس الدار ديالو، كان محتاج بلاصة يسكن فيها شي سيمانات.", en: "Before Alex had his apartment, he needed accommodation for a few weeks.", fr: "Avant d'avoir son appartement, Alex avait besoin d'un logement pour quelques semaines." }
    ]
  },
  {
    id: "alex-sp1", title: "Alex", level: "B1", sub: "Sprach 1", type: "sprach1", isPremium: false,
    text: "Alex ist vor zwei Wochen nach München gezogen. Am Anfang hatte er große Probleme, weil er noch keine Wohnung hatte. Er musste .....(1)..... Woche in einem Hotel wohnen. Zum Glück hat ihm eine Kollegin geholfen. Sie hat ihm .....(2)..... verschiedene Wohnungen informiert. Jetzt wohnt Alex in einer kleinen, aber schönen Wohnung .....(3)..... Stadtzentrum. Er freut sich .....(4)..... seine neue Umgebung. Am Wochenende möchte er .....(5)..... seinen Kollegen Fußball spielen.",
    items: [
      { n: 1, c: "eine", opts: ["eine", "einen", "einem"], exp: "Woche مؤنث (die Woche) ف Akkusativ → eine." },
      { n: 2, c: "über", opts: ["über", "auf", "an"], exp: "informieren über + Akkusativ." },
      { n: 3, c: "am", opts: ["am", "im", "ans"], exp: "am Stadtzentrum (an + dem)." },
      { n: 4, c: "über", opts: ["über", "auf", "von"], exp: "sich freuen über + Akkusativ." },
      { n: 5, c: "mit", opts: ["mit", "bei", "zu"], exp: "mit + Dativ (مع الزملاء)." }
    ]
  },
  {
    id: "alex-sp2", title: "Alex", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: false,
    text: "Am Samstag hat Alex .....(1)..... erste Fußballspiel mit dem neuen Verein. Er ist ein bisschen nervös, weil er die anderen Spieler noch nicht gut .....(2)...... Aber er hat .....(3)..... den letzten Wochen viel trainiert. Sein Trainer hat ihm gesagt, dass er sehr talentiert .....(4)...... Nach dem Spiel möchte Alex .....(5)..... seinen neuen Freunden etwas trinken gehen.",
    wordBank: [
      { k: "a", w: "sein" }, { k: "b", w: "kennt" }, { k: "c", w: "in" }, { k: "d", w: "ist" },
      { k: "e", w: "mit" }, { k: "f", w: "hat" }, { k: "g", w: "war" }, { k: "h", w: "auf" }
    ],
    items: [
      { n: 1, c: "sein" }, { n: 2, c: "kennt" }, { n: 3, c: "in" }, { n: 4, c: "ist" }, { n: 5, c: "mit" }
    ]
  },
  {
    id: "rita-t1", title: "Rita", level: "B1", sub: "Teile 1", type: "headings", isPremium: false,
    options: [
      { k: "a", de: "Ein Kurs für digitale Fotografie", ar: "دورة في التصوير الرقمي", ma: "دورة ف التصوير الرقمي", en: "A course in digital photography", fr: "Un cours de photographie numérique" },
      { k: "b", de: "Ein neues Hobby für die Freizeit", ar: "هواية جديدة لوقت الفراغ", ma: "هواية جديدة لوقت الفراغ", en: "A new hobby for free time", fr: "Un nouveau passe-temps pour le temps libre" },
      { k: "c", de: "Hilfe bei der Jobsuche", ar: "مساعدة في البحث عن عمل", ma: "مساعدة ف البحث على خدمة", en: "Help with job search", fr: "Aide à la recherche d'emploi" },
      { k: "d", de: "Ein Umzug in eine andere Stadt", ar: "الانتقال إلى مدينة أخرى", ma: "الانتقال ل مدينة أخرى", en: "A move to another city", fr: "Un déménagement dans une autre ville" },
      { k: "e", de: "Ein Sprachkurs im Ausland", ar: "دورة لغة في الخارج", ma: "دورة اللغة فالخارج", en: "A language course abroad", fr: "Un cours de langue à l'étranger" }
    ],
    items: [
      { n: 1, c: "b", de: "Rita hat letztes Jahr mit dem Malen angefangen. Sie malt jeden Abend nach der Arbeit und findet es sehr entspannend.", ar: "بدأت ريتا بالرسم العام الماضي. ترسم كل مساء بعد العمل وتجد ذلك مريحاً جداً.", ma: "ريتا بدات بالرسم العام اللي فات. كترسم كل عشية من بعد الخدمة وكتلقاها مرتاحة بزاف.", en: "Rita started painting last year. She paints every evening after work and finds it very relaxing.", fr: "Rita a commencé à peindre l'année dernière. Elle peint chaque soir après le travail et trouve cela très relaxant." },
      { n: 2, c: "a", de: "Rita interessiert sich für Fotografie und möchte lernen, wie man mit einer Kamera richtig gute Bilder macht.", ar: "ريتا مهتمة بالتصوير وتريد تعلم كيفية التقاط صور جيدة حقاً بالكاميرا.", ma: "ريتا مهتمة بالتصوير وباغية تتعلم كيفاش تاخد تصاور مزيانين بالكاميرا.", en: "Rita is interested in photography and wants to learn how to take really good pictures with a camera.", fr: "Rita s'intéresse à la photographie et veut apprendre à prendre de très bonnes photos avec un appareil." },
      { n: 3, c: "d", de: "Rita wird nächsten Monat nach Berlin ziehen, weil ihr Freund dort eine Stelle bekommen hat.", ar: "ستنتقل ريتا إلى برلين الشهر القادم لأن صديقها حصل على وظيفة هناك.", ma: "ريتا غادي تنتقل ل برلين الشهر الجاي حيت صاحبها لقى خدمة تما.", en: "Rita will move to Berlin next month because her boyfriend got a job there.", fr: "Rita va déménager à Berlin le mois prochain parce que son copain y a trouvé un emploi." },
      { n: 4, c: "c", de: "Rita sucht schon seit Monaten einen Job. Sie braucht Hilfe beim Schreiben von Bewerbungen.", ar: "ريتا تبحث منذ شهور عن عمل. تحتاج مساعدة في كتابة طلبات التوظيف.", ma: "ريتا كتقلب من شهور على خدمة. كتحتاج مساعدة ف كتابة طلبات الخدمة.", en: "Rita has been looking for a job for months. She needs help writing applications.", fr: "Rita cherche un emploi depuis des mois. Elle a besoin d'aide pour rédiger des candidatures." },
      { n: 5, c: "e", de: "Rita möchte ihren Sommer in Spanien verbringen und dort intensiv Spanisch lernen.", ar: "تريد ريتا قضاء صيفها في إسبانيا وتعلم الإسبانية بشكل مكثف هناك.", ma: "ريتا باغية تعدي الصيف ديالها ف إسبانيا وتتعلم الإسبانية مكثف تما.", en: "Rita wants to spend her summer in Spain and learn Spanish intensively there.", fr: "Rita veut passer son été en Espagne et y apprendre l'espagnol de manière intensive." }
    ]
  },
  {
    id: "rita-t2", title: "Rita", level: "B1", sub: "Teile 2", type: "mcq", isPremium: false,
    paragraphs: [
      { de: "Rita ist 34 Jahre alt und arbeitet als Verkäuferin in einem kleinen Geschäft in Köln. Sie wohnt allein in einer Zweizimmerwohnung, die ihr sehr gefällt. Obwohl sie ihre Arbeit mag, träumt sie schon lange von einer Karriere im Marketing.", ar: "ريتا تبلغ 34 عاماً وتعمل بائعة في متجر صغير في كولونيا. تعيش وحدها في شقة بغرفتين تحبها كثيراً. على الرغم من أنها تحب عملها، إلا أنها تحلم منذ فترة طويلة بمهنة في التسويق.", ma: "ريتا عندها 34 عام وكتخدم كبائعة ف حانوت صغير ف كولونيا. كتعيش بوحدها ف دار بجوج بيوت كتحبها بزاف. بالرغم من أنها كتحب الخدمة ديالها، ولكن كتحلم من مدة بمهنة ف التسويق.", en: "Rita is 34 years old and works as a saleswoman in a small shop in Cologne. She lives alone in a two-room apartment that she likes very much. Although she likes her job, she has long dreamed of a career in marketing.", fr: "Rita a 34 ans et travaille comme vendeuse dans un petit magasin à Cologne. Elle vit seule dans un deux-pièces qu'elle aime beaucoup. Bien qu'elle aime son travail, elle rêve depuis longtemps d'une carrière dans le marketing." },
      { de: "Letzte Woche hat Rita ein Praktikum in einer Marketingagentur begonnen. Sie arbeitet dort zwei Tage pro Woche und bekommt kein Geld dafür, aber die Erfahrung ist wertvoll.", ar: "بدأت ريتا الأسبوع الماضي تدريباً في وكالة تسويق. تعمل هناك يومين في الأسبوع ولا تتقاضى أجراً، لكن الخبرة قيّمة.", ma: "ريتا بدات السيمانة اللي فاتت تدريب ف وكالة تسويق. كتخدم تما جوج أيام ف السيمانة وماكتقبضش فلوس، ولكن التجربة غالية.", en: "Last week Rita started an internship at a marketing agency. She works there two days a week and doesn't get paid, but the experience is valuable.", fr: "La semaine dernière, Rita a commencé un stage dans une agence de marketing. Elle y travaille deux jours par semaine et n'est pas rémunérée, mais l'expérience est précieuse." },
      { de: "Trotz der zusätzlichen Engagements bleibt Rita optimistisch. Ihr größter Wunsch ist es, irgendwann eine eigene kleine Werbeagentur zu leiten.", ar: "على الرغم من الالتزامات الإضافية، تبقى ريتا متفائلة. أكبر أمنيتها هي أن تدير في يوم ما وكالة إعلانات صغيرة خاصة بها.", ma: "بالرغم من الالتزامات الإضافية، ريتا كتبقى متفائلة. أكبر أمنية ديالها هي أنها تدير شي نهار وكالة إعلانات صغيرة ديالها.", en: "Despite the additional commitments, Rita remains optimistic. Her greatest wish is to one day run her own small advertising agency.", fr: "Malgré ses engagements supplémentaires, Rita reste optimiste. Son plus grand souhait est de diriger un jour sa propre petite agence de publicité." }
    ],
    items: [
      { n: 1, c: "A", q: "Was ist Ritas aktueller Beruf?", qar: "ما هي مهنة ريتا الحالية؟", qma: "شنو هي الخدمة الحالية ديال ريتا؟", qen: "What is Rita's current job?", qfr: "Quel est le métier actuel de Rita ?",
        opts: [
          { k: "A", de: "Verkäuferin", ar: "بائعة", ma: "بائعة", en: "saleswoman", fr: "vendeuse" },
          { k: "B", de: "Marketing-Managerin", ar: "مديرة تسويق", ma: "مديرة التسويق", en: "marketing manager", fr: "responsable marketing" },
          { k: "C", de: "Lehrerin", ar: "مدرسة", ma: "أستاذة", en: "teacher", fr: "enseignante" }
        ]
      },
      { n: 2, c: "B", q: "Warum macht Rita ein Praktikum?", qar: "لماذا تقوم ريتا بتدريب؟", qma: "علاش ريتا كتدير تدريب؟", qen: "Why is Rita doing an internship?", qfr: "Pourquoi Rita fait-elle un stage ?",
        opts: [
          { k: "A", de: "um Geld zu verdienen", ar: "لكسب المال", ma: "باش تربح الفلوس", en: "to earn money", fr: "pour gagner de l'argent" },
          { k: "B", de: "um Erfahrung zu sammeln", ar: "لجمع الخبرة", ma: "باش تجمع التجربة", en: "to gain experience", fr: "pour acquérir de l'expérience" },
          { k: "C", de: "weil sie arbeitslos ist", ar: "لأنها عاطلة عن العمل", ma: "حيت هي عاطلة", en: "because she is unemployed", fr: "parce qu'elle est au chômage" }
        ]
      },
      { n: 3, c: "C", q: "Was ist Ritas größter Wunsch?", qar: "ما هي أكبر أمنية لريتا؟", qma: "شنو هي أكبر أمنية ديال ريتا؟", qen: "What is Rita's greatest wish?", qfr: "Quel est le plus grand souhait de Rita ?",
        opts: [
          { k: "A", de: "in Spanien zu leben", ar: "العيش في إسبانيا", ma: "تعيش ف إسبانيا", en: "to live in Spain", fr: "vivre en Espagne" },
          { k: "B", de: "in Rente zu gehen", ar: "التقاعد", ma: "تمشي ف التقاعد", en: "to retire", fr: "prendre sa retraite" },
          { k: "C", de: "eine eigene Werbeagentur zu leiten", ar: "إدارة وكالة إعلانات خاصة", ma: "تدير وكالة إعلانات ديالها", en: "to run her own advertising agency", fr: "diriger sa propre agence de publicité" }
        ]
      }
    ]
  },
  {
    id: "rita-t3", title: "Rita", level: "B1", sub: "Teile 3", type: "matching", isPremium: false,
    ads: [
      { k: "A", t: "Foto-Kurse Köln", de: "Lernen Sie fotografieren! Kurse für Anfänger und Fortgeschrittene. Wochenendkurse und Abendkurse.", ar: "تعلم التصوير! دورات للمبتدئين والمتقدمين. دورات نهاية الأسبوع ودورات مسائية.", ma: "تعلم التصوير! دورات للمبتدئين والمتقدمين. دورات نهاية السيمانة ودورات ف العشية.", en: "Learn photography! Courses for beginners and advanced. Weekend and evening courses.", fr: "Apprenez la photographie ! Cours pour débutants et avancés. Cours du week-end et du soir." },
      { k: "B", t: "Jobcenter Köln", de: "Kostenlose Beratung für Arbeitssuchende. Hilfe beim Lebenslauf und bei Bewerbungen. Termine nach Vereinbarung.", ar: "استشارة مجانية للباحثين عن عمل. مساعدة في السيرة الذاتية والطلبات. مواعيد بالاتفاق.", ma: "استشارة فابور للباحثين على الخدمة. مساعدة ف CV والطلبات. مواعيد بالاتفاق.", en: "Free advice for job seekers. Help with CV and applications. Appointments by arrangement.", fr: "Conseil gratuit pour les demandeurs d'emploi. Aide pour le CV et les candidatures. Rendez-vous sur arrangement." },
      { k: "C", t: "Umzugshelfer Plus", de: "Professionelle Umzugshilfe in ganz Deutschland. Faire Preise, erfahrenes Team. Kostenloses Angebot.", ar: "مساعدة احترافية في الانتقال في جميع أنحاء ألمانيا. أسعار عادلة، فريق ذو خبرة. عرض مجاني.", ma: "مساعدة احترافية ف الانتقال ف ألمانيا كاملة. أثمنة عادلة، فريق عندو خبرة. عرض فابور.", en: "Professional moving help throughout Germany. Fair prices, experienced team. Free quote.", fr: "Aide au déménagement professionnelle dans toute l'Allemagne. Prix équitables, équipe expérimentée. Devis gratuit." },
      { k: "D", t: "Sprachinstitut Madrid", de: "Spanisch lernen in Madrid! Intensivkurse im Sommer, Unterkunft in Gastfamilien möglich.", ar: "تعلم الإسبانية في مدريد! دورات مكثفة في الصيف، إقامة مع عائلات مضيفة ممكنة.", ma: "تعلم الإسبانية ف مدريد! دورات مكثفة ف الصيف، إقامة مع عائلات مضيفة ممكنة.", en: "Learn Spanish in Madrid! Intensive summer courses, accommodation with host families possible.", fr: "Apprenez l'espagnol à Madrid ! Cours intensifs d'été, hébergement en famille d'accueil possible." },
      { k: "E", t: "Malkurse Kunterbunt", de: "Malen für Erwachsene jeden Mittwoch. Material inklusive. Neue Kurse beginnen im Mai.", ar: "الرسم للبالغين كل أربعاء. المواد مشمولة. تبدأ دورات جديدة في مايو.", ma: "الرسم للكبار كل أربعاء. المواد مشمولة. دورات جديدة كتبدا ف ماي.", en: "Painting for adults every Wednesday. Materials included. New courses start in May.", fr: "Peinture pour adultes chaque mercredi. Matériel inclus. Nouveaux cours en mai." },
      { k: "F", t: "Marketing Jobs Berlin", de: "Suchen Sie einen Job im Marketing? Viele offene Stellen in Berlin. Jetzt bewerben!", ar: "هل تبحث عن وظيفة في التسويق؟ العديد من الوظائف الشاغرة في برلين. تقدم الآن!", ma: "كتقلب على خدمة ف التسويق؟ بزاف ديال الوظائف الشاغرة ف برلين. تقدم دابا!", en: "Looking for a job in marketing? Many open positions in Berlin. Apply now!", fr: "Vous cherchez un emploi dans le marketing ? De nombreux postes ouverts à Berlin. Postulez maintenant !" },
      { k: "G", t: "Wohnungstausch Köln-Berlin", de: "Wir vermitteln Wohnungstausch zwischen Köln und Berlin. Perfekt für Berufspendler.", ar: "نقوم بوساطة تبادل الشقق بين كولونيا وبرلين. مثالي للمتنقلين لأغراض العمل.", ma: "كنوسطو تبادل الدور بين كولونيا وبرلين. مثالي للناس اللي كيتنقلو على حساب الخدمة.", en: "We arrange apartment exchanges between Cologne and Berlin. Perfect for commuters.", fr: "Nous organisons des échanges d'appartements entre Cologne et Berlin. Parfait pour les navetteurs." },
      { k: "H", t: "Buchhandlung Leselust", de: "Große Auswahl an Kunst- und Fotobüchern. Signierstunden mit Autoren jeden Monat.", ar: "مجموعة كبيرة من كتب الفن والتصوير. جلسات توقيع مع مؤلفين كل شهر.", ma: "مجموعة كبيرة ديال كتب الفن والتصوير. جلسات توقيع مع مؤلفين كل شهر.", en: "Large selection of art and photography books. Book signings with authors every month.", fr: "Grand choix de livres d'art et de photographie. Séances de dédicaces avec des auteurs chaque mois." }
    ],
    items: [
      { n: 1, c: "A", de: "Rita möchte lernen, bessere Fotos zu machen.", ar: "تريد ريتا تعلم التقاط صور أفضل.", ma: "ريتا باغية تتعلم تاخد تصاور أحسن.", en: "Rita wants to learn to take better photos.", fr: "Rita veut apprendre à prendre de meilleures photos." },
      { n: 2, c: "D", de: "Rita plant einen Sprachaufenthalt in Spanien im Sommer.", ar: "تخطط ريتا لإقامة لغوية في إسبانيا في الصيف.", ma: "ريتا كتخطط لإقامة لغوية ف إسبانيا ف الصيف.", en: "Rita is planning a language stay in Spain in summer.", fr: "Rita prévoit un séjour linguistique en Espagne cet été." },
      { n: 3, c: "B", de: "Rita braucht Unterstützung bei ihrer Bewerbung.", ar: "تحتاج ريتا دعماً في طلب التوظيف.", ma: "ريتا كتحتاج دعم ف طلب الخدمة ديالها.", en: "Rita needs support with her application.", fr: "Rita a besoin d'aide pour sa candidature." },
      { n: 4, c: "C", de: "Rita zieht nach Berlin u Transport.", ar: "ستنتقل ريتا إلى برلين وتحتاج مساعدة في النقل.", ma: "ريتا غادي تنتقل ل برلين وكتحتاج مساعدة ف النقل.", en: "Rita is moving to Berlin and needs help with transport.", fr: "Rita déménage à Berlin et a besoin d'aide pour le transport." },
      { n: 5, c: "E", de: "Rita möchte in ihrer Freizeit kreativ sein und etwas Neues ausprobieren.", ar: "تريد ريتا أن تكون مبدعة في وقت فراغها وتجرب شيئاً جديداً.", ma: "ريتا باغية تكون مبدعة ف وقت الفراغ ديالها وتجرب شي حاجة جديدة.", en: "Rita wants to be creative in her free time and try something new.", fr: "Rita veut être créative pendant son temps libre et essayer quelque chose de nouveau." }
    ]
  },
  {
    id: "rita-sp1", title: "Rita", level: "B1", sub: "Sprach 1", type: "sprach1", isPremium: false,
    text: "Rita wohnt .....(1)..... vielen Jahren in Köln. Sie arbeitet als Verkäuferin, aber sie möchte .....(2)..... eine Karriere im Marketing beginnen. Deshalb macht sie .....(3)..... Praktikum in einer Agentur. Sie arbeitet dort zwei Tage pro Woche und lernt jeden Tag etwas Neues. Ihr größter Traum ist es, .....(4)..... eigene Werbeagentur zu leiten. Sie ist sehr motiviert und freut sich .....(5)..... ihre berufliche Zukunft.",
    items: [
      { n: 1, c: "seit", opts: ["seit", "vor", "für"], exp: "seit + Dativ للمدة المستمرة." },
      { n: 2, c: "mit", opts: ["mit", "auf", "an"], exp: "beginnen mit + Dativ." },
      { n: 3, c: "ein", opts: ["ein", "einen", "einem"], exp: "das Praktikum ف Akkusativ → ein." },
      { n: 4, c: "eine", opts: ["eine", "einen", "einer"], exp: "die Werbeagentur ف Akkusativ → eine." },
      { n: 5, c: "auf", opts: ["auf", "über", "an"], exp: "sich freuen auf + Akkusativ للمستقبل." }
    ]
  },
  {
    id: "rita-sp2", title: "Rita", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: false,
    text: "Rita hat .....(1)..... einem Jahr mit dem Malen angefangen. Am Anfang war sie nicht sehr gut, aber jetzt malt sie .....(2)..... Wochenende. Sie hat .....(3)..... ihrer Freundin einen Malkurs geschenkt bekommen. Der Kurs findet .....(4)..... Mittwochabend statt. Rita freut sich sehr .....(5)..... den Kurs.",
    wordBank: [
      { k: "a", w: "vor" }, { k: "b", w: "am" }, { k: "c", w: "von" }, { k: "d", w: "jeden" },
      { k: "e", w: "auf" }, { k: "f", w: "seit" }, { k: "g", w: "im" }, { k: "h", w: "für" }
    ],
    items: [
      { n: 1, c: "vor" }, { n: 2, c: "am" }, { n: 3, c: "von" }, { n: 4, c: "jeden" }, { n: 5, c: "auf" }
    ]
  },
  {
    id: "caroline-t1", title: "Caroline", level: "B1", sub: "Teile 1", type: "headings", isPremium: false,
    options: [
      { k: "a", de: "Ein Familientreffen am Wochenende", ar: "لقاء عائلي في نهاية الأسبوع", ma: "لقاء عائلي ف نهاية السيمانة", en: "A family reunion at the weekend", fr: "Une réunion de famille le week-end" },
      { k: "b", de: "Neue Möbel für die Wohnung", ar: "أثاث جديد للشقة", ma: "أثاث جديد للدار", en: "New furniture for the apartment", fr: "Nouveaux meubles pour l'appartement" },
      { k: "c", de: "Ein Kochkurs für Anfänger", ar: "دورة طبخ للمبتدئين", ma: "دورة الطبخ للمبتدئين", en: "A cooking course for beginners", fr: "Un cours de cuisine pour débutants" },
      { k: "d", de: "Ein Besuch im Museum", ar: "زيارة متحف", ma: "زيارة متحف", en: "A visit to the museum", fr: "Une visite au musée" },
      { k: "e", de: "Ein Urlaub am Meer", ar: "عطلة على البحر", ma: "عطلة ف البحر", en: "A holiday by the sea", fr: "Des vacances à la mer" }
    ],
    items: [
      { n: 1, c: "a", de: "Caroline freut sich auf Sonntag, weil ihre Schwester mit der ganzen Familie zu Besuch kommt.", ar: "تتطلع كارولين ليوم الأحد لأن أختها ستأتي للزيارة مع العائلة بأكملها.", ma: "كارولين كتطلع لنهار الأحد حيت أختها غادي تجي للزيارة مع العائلة كاملة.", en: "Caroline is looking forward to Sunday because her sister is coming to visit with the whole family.", fr: "Caroline attend dimanche avec impatience car sa sœur vient en visite avec toute la famille." },
      { n: 2, c: "c", de: "Caroline möchte lernen, wie man einfache Gerichte selbst kocht. Sie sucht einen Kurs am Abend.", ar: "تريد كارولين تعلم كيفية طهي أطباق بسيطة بنفسها. تبحث عن دورة في المساء.", ma: "كارولين باغية تتعلم كيفاش تطيب أطباق بسيطة براسها. كتقلب على دورة ف العشية.", en: "Caroline wants to learn how to cook simple dishes herself. She is looking for an evening course.", fr: "Caroline veut apprendre à cuisiner elle-même des plats simples. Elle cherche un cours du soir." },
      { n: 3, c: "b", de: "Caroline hat eine neue Wohnung und braucht noch einen Schrank, einen Tisch und Stühle.", ar: "لدى كارولين شقة جديدة وتحتاج بعد إلى خزانة وطاولة وكراسي.", ma: "كارولين عندها دار جديدة ومازال محتاجة خزانة وطاولة وكراسي.", en: "Caroline has a new apartment and still needs a wardrobe, a table and chairs.", fr: "Caroline a un nouvel appartement et a encore besoin d'une armoire, d'une table et de chaises." },
      { n: 4, c: "e", de: "Im Juli möchte Caroline mit ihrem Mann für zwei Wochen ans Mittelmeer fahren.", ar: "في يوليو تريد كارولين السفر مع زوجها لمدة أسبوعين إلى البحر الأبيض المتوسط.", ma: "ف يوليوز كارولين باغية تسافر مع راجلها لمدة جوج سيمانات للبحر الأبيض المتوسط.", en: "In July, Caroline wants to go to the Mediterranean with her husband for two weeks.", fr: "En juillet, Caroline veut partir deux semaines en Méditerranée avec son mari." },
      { n: 5, c: "d", de: "Am Samstag möchte Caroline mit ihren Kindern die neue Ausstellung über alte Ägypter sehen.", ar: "يوم السبت تريد كارولين رؤية المعرض الجديد عن قدماء المصريين مع أطفالها.", ma: "نهار السبت كارولين باغية تشوف معرض الجديد على المصريين القدماء مع ولادها.", en: "On Saturday, Caroline wants to see the new exhibition about ancient Egyptians with her children.", fr: "Samedi, Caroline veut voir avec ses enfants la nouvelle exposition sur les anciens Égyptiens." }
    ]
  },
  {
    id: "caroline-t2", title: "Caroline", level: "B1", sub: "Teile 2", type: "mcq", isPremium: false,
    paragraphs: [
      { de: "Caroline ist 42 Jahre alt und arbeitet als Lehrerin an einer Grundschule in Stuttgart. Sie ist verheiratet und hat zwei Kinder, einen Sohn und eine Tochter. Die Familie wohnt in einem kleinen Haus am Stadtrand mit einem großen Garten.", ar: "كارولين تبلغ 42 عاماً وتعمل معلمة في مدرسة ابتدائية في شتوتغارت. هي متزوجة ولديها طفلان، ابن وابنة. تعيش العائلة في منزل صغير على أطراف المدينة مع حديقة كبيرة.", ma: "كارولين عندها 42 عام وكتخدم أستاذة ف مدرسة ابتدائية ف شتوتغارت. هي متزوجة وعندها جوج ولاد، ولد وبنت. العائلة كتعيش ف دار صغيرة ف حدود المدينة مع جنان كبير.", en: "Caroline is 42 years old and works as a teacher at a primary school in Stuttgart. She is married and has two children, a son and a daughter. The family lives in a small house on the outskirts of the city with a large garden.", fr: "Caroline a 42 ans et travaille comme enseignante dans une école primaire à Stuttgart. Elle est mariée et a deux enfants, un fils et une fille. La famille vit dans une petite maison en périphérie de la ville avec un grand jardin." },
      { de: "In ihrer Freizeit kocht Caroline sehr gerne. Sie hat von ihrer Großmutter viele traditionelle Rezepte gelernt. Besonders stolz ist sie auf ihren Apfelkuchen, den sie bei jedem Familienfest backt.", ar: "في وقت فراغها، تحب كارولين الطبخ كثيراً. تعلمت من جدتها العديد من الوصفات التقليدية. تشعر بفخر خاص بفطيرة التفاح التي تخبزها في كل احتفال عائلي.", ma: "ف وقت الفراغ ديالها، كارولين كتحب تطيب بزاف. تعلمت من جدتها بزاف ديال الوصفات التقليدية. كتحس بفخر خاص ب تارت التفاح اللي كتطيب ف كل حفلة عائلية.", en: "In her free time, Caroline loves to cook. She learned many traditional recipes from her grandmother. She is particularly proud of her apple pie, which she bakes at every family celebration.", fr: "Pendant son temps libre, Caroline adore cuisiner. Elle a appris de nombreuses recettes traditionnelles de sa grand-mère. Elle est particulièrement fière de sa tarte aux pommes, qu'elle prépare à chaque fête de famille." },
      { de: "Für die Zukunft hat Caroline große Pläne: Sie möchte ein kleines Kochbuch mit den Familienrezepten veröffentlichen. Außerdem träumt sie davon, einmal ein eigenes kleines Café zu eröffnen.", ar: "للمستقبل، لدى كارولين خطط كبيرة: تريد نشر كتاب طبخ صغير بوصفات العائلة. بالإضافة إلى ذلك، تحلم بافتتاح مقهى صغير خاص بها في يوم من الأيام.", ma: "للمستقبل، كارولين عندها خطط كبار: باغية تنشر كتاب طبخ صغير بوصفات العائلة. زيد على هادشي، كتحلم بافتتاح قهوة صغيرة ديالها شي نهار.", en: "For the future, Caroline has big plans: she wants to publish a small cookbook with the family recipes. In addition, she dreams of opening her own small café one day.", fr: "Pour l'avenir, Caroline a de grands projets : elle veut publier un petit livre de cuisine avec les recettes de famille. De plus, elle rêve d'ouvrir un jour son propre petit café." }
    ],
    items: [
      { n: 1, c: "A", q: "Was ist Caroline von Beruf?", qar: "ما هي مهنة كارولين؟", qma: "شنو هي الخدمة ديال كارولين؟", qen: "What is Caroline's profession?", qfr: "Quelle est la profession de Caroline ?",
        opts: [
          { k: "A", de: "Lehrerin", ar: "معلمة", ma: "أستاذة", en: "teacher", fr: "enseignante" },
          { k: "B", de: "Köchin", ar: "طباخة", ma: "طيابة", en: "cook", fr: "cuisinière" },
          { k: "C", de: "Verkäuferin", ar: "بائعة", ma: "بائعة", en: "saleswoman", fr: "vendeuse" }
        ]
      },
      { n: 2, c: "B", q: "Wo hat Caroline ihre Rezepte gelernt?", qar: "أين تعلمت كارولين وصفاتها؟", qma: "فين تعلمت كارولين الوصفات ديالها؟", qen: "Where did Caroline learn her recipes?", qfr: "Où Caroline a-t-elle appris ses recettes ?",
        opts: [
          { k: "A", de: "in einer Kochschule", ar: "في مدرسة طبخ", ma: "ف مدرسة الطبخ", en: "in a cooking school", fr: "dans une école de cuisine" },
          { k: "B", de: "von ihrer Großmutter", ar: "من جدتها", ma: "من جدتها", en: "from her grandmother", fr: "de sa grand-mère" },
          { k: "C", de: "aus dem Internet", ar: "من الإنترنت", ma: "من الأنترنيت", en: "from the internet", fr: "sur Internet" }
        ]
      },
      { n: 3, c: "C", q: "Was möchte Caroline in der Zukunft machen?", qar: "ماذا تريد كارولين أن تفعل في المستقبل؟", qma: "شنو باغية دير كارولين ف المستقبل؟", qen: "What does Caroline want to do in the future?", qfr: "Que veut faire Caroline à l'avenir ?",
        opts: [
          { k: "A", de: "in Rente gehen", ar: "التقاعد", ma: "تمشي ف التقاعد", en: "retire", fr: "prendre sa retraite" },
          { k: "B", de: "nach Berlin ziehen", ar: "الانتقال إلى برلين", ma: "تنتقل ل برلين", en: "move to Berlin", fr: "déménager à Berlin" },
          { k: "C", de: "ein kleines Café eröffnen", ar: "افتتاح مقهى صغير", ma: "تفتح قهوة صغيرة", en: "open a small café", fr: "ouvrir un petit café" }
        ]
      }
    ]
  },
  {
    id: "caroline-t3", title: "Caroline", level: "B1", sub: "Teile 3", type: "matching", isPremium: false,
    ads: [
      { k: "A", t: "Kochschule Delikat", de: "Kochkurse für Erwachsene und Kinder. Jeden Samstag von 10-14 Uhr. Alle Materialien inklusive.", ar: "دورات طبخ للبالغين والأطفال. كل سبت من 10 إلى 14. جميع المواد مشمولة.", ma: "دورات الطبخ للكبار والدراري. كل سبت من 10 حتى 14. جميع المواد مشمولة.", en: "Cooking courses for adults and children. Every Saturday from 10 am to 2 pm. All materials included.", fr: "Cours de cuisine pour adultes et enfants. Chaque samedi de 10h à 14h. Tous les matériaux inclus." },
      { k: "B", t: "Möbelhaus Nord", de: "Riesige Auswahl an Möbeln für jedes Zimmer. Kostenlose Lieferung ab 200 Euro Einkauf.", ar: "مجموعة كبيرة من الأثاث لكل غرفة. توصيل مجاني من 200 يورو شراء.", ma: "اختيار كبير ديال الأثاث لكل غرفة. توصيل فابور من 200 يورو شراء.", en: "Huge selection of furniture for every room. Free delivery from 200 euros purchase.", fr: "Vaste choix de meubles pour chaque pièce. Livraison gratuite à partir de 200 euros d'achat." },
      { k: "C", t: "Museum Alte Kulturen", de: "Neue Sonderausstellung: 'Das alte Ägypten'. Familienkarten nur 15 Euro. Jeden Tag 9-18 Uhr.", ar: "معرض خاص جديد: 'مصر القديمة'. تذاكر عائلية بـ 15 يورو فقط. كل يوم 9-18.", ma: "معرض خاص جديد: 'مصر القديمة'. تذاكر عائلية غير 15 يورو. كل يوم 9-18.", en: "New special exhibition: 'Ancient Egypt'. Family tickets only 15 euros. Every day 9 am - 6 pm.", fr: "Nouvelle exposition spéciale : 'L'Égypte ancienne'. Billets famille seulement 15 euros. Tous les jours de 9h à 18h." },
      { k: "D", t: "Reisebüro Sonnenschein", de: "Traumurlaub am Mittelmeer! All-inclusive-Angebote für Familien. Frühbucher-Rabatt 20%.", ar: "عطلة الأحلام على البحر الأبيض المتوسط! عروض شاملة للعائلات. خصم الحجز المبكر 20%.", ma: "عطلة الأحلام ف البحر الأبيض المتوسط! عروض شاملة للعائلات. تخفيض الحجز المبكر 20%.", en: "Dream holiday on the Mediterranean! All-inclusive offers for families. Early booking discount 20%.", fr: "Vacances de rêve en Méditerranée ! Offres tout compris pour les familles. Réduction réservation anticipée 20 %." },
      { k: "E", t: "Familienzentrum Regenbogen", de: "Offene Treffen für Familien jeden Sonntag. Spiele, Kaffee und Kuchen. Kostenlos.", ar: "لقاءات مفتوحة للعائلات كل أحد. ألعاب وقهوة وكعك. مجاناً.", ma: "لقاءات مفتوحة للعائلات كل أحد. ألعاب وقهوة وكيك. فابور.", en: "Open meetings for families every Sunday. Games, coffee and cake. Free.", fr: "Rencontres ouvertes pour familles chaque dimanche. Jeux, café et gâteaux. Gratuit." },
      { k: "F", t: "Buchhandlung Kapitel", de: "Kochbücher, Familienromane und mehr. Autorenlesungen jeden Freitag.", ar: "كتب الطبخ، روايات عائلية والمزيد. قراءات مؤلفين كل جمعة.", ma: "كتب الطبخ، روايات عائلية والمزيد. قراءات مؤلفين كل جمعة.", en: "Cookbooks, family novels and more. Author readings every Friday.", fr: "Livres de cuisine, romans familiaux et plus. Lectures d'auteurs chaque vendredi." },
      { k: "G", t: "Gartencenter Grün", de: "Alles für Haus und Garten. Pflanzen, Blumen, Gartenmöbel. Fachberatung inklusive.", ar: "كل شيء للمنزل والحديقة. نباتات، زهور، أثاث حدائق. استشارة متخصصة مشمولة.", ma: "كلشي للدار والجنان. نباتات، زهور، أثاث الجنان. استشارة متخصصة مشمولة.", en: "Everything for home and garden. Plants, flowers, garden furniture. Expert advice included.", fr: "Tout pour la maison et le jardin. Plantes, fleurs, meubles de jardin. Conseil spécialisé inclus." },
      { k: "H", t: "Restaurant Zur Post", de: "Traditionelle deutsche Küche. Familientische für 6-10 Personen. Jetzt reservieren!", ar: "مطبخ ألماني تقليدي. طاولات عائلية لـ 6-10 أشخاص. احجز الآن!", ma: "مطبخ ألماني تقليدي. طاولات عائلية ل 6-10 أشخاص. احجز دابا!", en: "Traditional German cuisine. Family tables for 6-10 people. Reserve now!", fr: "Cuisine allemande traditionnelle. Tables familiales pour 6 à 10 personnes. Réservez maintenant !" }
    ],
    items: [
      { n: 1, c: "B", de: "Caroline hat eine neue Wohnung und braucht noch Möbel.", ar: "لدى كارولين شقة جديدة وتحتاج بعد إلى أثاث.", ma: "كارولين عندها دار جديدة ومازال محتاجة الأثاث.", en: "Caroline has a new apartment and still needs furniture.", fr: "Caroline a un nouvel appartement et a encore besoin de meubles." },
      { n: 2, c: "A", de: "Caroline möchte lernen, wie man besser kocht.", ar: "تريد كارولين تعلم كيفية الطبخ بشكل أفضل.", ma: "كارولين باغية تتعلم كيفاش تطيب مزيان.", en: "Caroline wants to learn how to cook better.", fr: "Caroline veut apprendre à mieux cuisiner." },
      { n: 3, c: "D", de: "Im Juli plant Caroline einen Urlaub am Meer mit ihrer Familie.", ar: "في يوليو تخطط كارولين لعطلة على البحر مع عائلتها.", ma: "ف يوليوز كارولين كتخطط لعطلة ف البحر مع العائلة ديالها.", en: "In July, Caroline is planning a holiday by the sea with her family.", fr: "En juillet, Caroline prévoit des vacances à la mer avec sa famille." },
      { n: 4, c: "C", de: "Am Samstag will Caroline mit ihren Kindern etwas Kulturelles unternehmen.", ar: "يوم السبت تريد كارولين القيام بنشاط ثقافي مع أطفالها.", ma: "نهار السبت كارولين باغية دير شي حاجة ثقافية مع ولادها.", en: "On Saturday, Caroline wants to do something cultural with her children.", fr: "Samedi, Caroline veut faire quelque chose de culturel avec ses enfants." },
      { n: 5, c: "E", de: "Caroline möchte andere Familien in ihrer Nachbarschaft kennenlernen.", ar: "تريد كارولين التعرف على عائلات أخرى في حيها.", ma: "كارولين باغية تتعرف على عائلات أخرى ف الحومة ديالها.", en: "Caroline wants to meet other families in her neighborhood.", fr: "Caroline veut rencontrer d'autres familles dans son quartier." }
    ]
  },
  {
    id: "caroline-sp1", title: "Caroline", level: "B1", sub: "Sprach 1", type: "sprach1", isPremium: false,
    text: "Caroline arbeitet .....(1)..... Lehrerin an einer Grundschule. Sie wohnt .....(2)..... ihrer Familie in einem kleinen Haus. In ihrer Freizeit kocht sie sehr gerne. Sie hat viele Rezepte .....(3)..... ihrer Großmutter gelernt. Am Sonntag kommt ihre Schwester zu Besuch. Caroline freut sich .....(4)..... das Familientreffen. Sie möchte .....(5)..... ihren Kindern einen Apfelkuchen backen.",
    items: [
      { n: 1, c: "als", opts: ["als", "wie", "für"], exp: "als للمهنة: arbeiten als Lehrerin." },
      { n: 2, c: "mit", opts: ["mit", "bei", "zu"], exp: "mit + Dativ (مع العائلة)." },
      { n: 3, c: "von", opts: ["von", "bei", "aus"], exp: "lernen von + Dativ." },
      { n: 4, c: "auf", opts: ["auf", "über", "an"], exp: "sich freuen auf + Akkusativ للمستقبل." },
      { n: 5, c: "mit", opts: ["mit", "bei", "zu"], exp: "mit + Dativ (مع الأطفال)." }
    ]
  },
  {
    id: "caroline-sp2", title: "Caroline", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: false,
    text: "Caroline hat viele Rezepte .....(1)..... ihrer Großmutter gelernt. Jedes Jahr .....(2)..... Weihnachten backt sie besondere Kekse. Ihre Kinder helfen ihr oft .....(3)..... der Küche. Sie hat .....(4)..... ein kleines Kochbuch mit Familienrezepten geschrieben. Es liegt .....(5)..... dem Küchentisch.",
    wordBank: [
      { k: "a", w: "von" }, { k: "b", w: "zu" }, { k: "c", w: "in" }, { k: "d", w: "schon" },
      { k: "e", w: "auf" }, { k: "f", w: "für" }, { k: "g", w: "an" }, { k: "h", w: "bei" }
    ],
    items: [
      { n: 1, c: "von" }, { n: 2, c: "zu" }, { n: 3, c: "in" }, { n: 4, c: "schon" }, { n: 5, c: "auf" }
    ]
  },
  {
    id: "vera-t1", title: "Vera", level: "B1", sub: "Teile 1", type: "headings", isPremium: false,
    options: [
      { k: "a", de: "Ein Sprachkurs in Deutschland", ar: "دورة لغة في ألمانيا", ma: "دورة اللغة ف ألمانيا", en: "A language course in Germany", fr: "Un cours de langue en Allemagne" },
      { k: "b", de: "Ein neuer Arbeitsplatz", ar: "مكان عمل جديد", ma: "بلاصة خدمة جديدة", en: "A new workplace", fr: "Un nouveau lieu de travail" },
      { k: "c", de: "Ein gemeinsamer Ausflug mit Freunden", ar: "رحلة مشتركة مع الأصدقاء", ma: "خرجة مشتركة مع الصحاب", en: "A trip with friends", fr: "Une sortie entre amis" },
      { k: "d", de: "Ein neues Hobby entdecken", ar: "اكتشاف هواية جديدة", ma: "اكتشاف هواية جديدة", en: "Discovering a new hobby", fr: "Découvrir un nouveau passe-temps" },
      { k: "e", de: "Eine Wohnung in einer anderen Stadt", ar: "شقة في مدينة أخرى", ma: "دار ف مدينة أخرى", en: "An apartment in another city", fr: "Un appartement dans une autre ville" }
    ],
    items: [
      { n: 1, c: "a", de: "Vera möchte ihr Deutsch verbessern und sucht einen Kurs, der zweimal pro Woche stattfindet.", ar: "تريد فيرا تحسين لغتها الألمانية وتبحث عن دورة تُعقد مرتين في الأسبوع.", ma: "فيرا باغية تحسن الألمانية ديالها وكتقلب على دورة كتدار جوج مرات ف السيمانة.", en: "Vera wants to improve her German and is looking for a course that takes place twice a week.", fr: "Vera veut améliorer son allemand et cherche un cours qui a lieu deux fois par semaine." },
      { n: 2, c: "e", de: "Vera wird nächsten Monat nach Hamburg umziehen, weil sie dort studieren möchte.", ar: "ستنتقل فيرا إلى هامبورغ الشهر القادم لأنها تريد الدراسة هناك.", ma: "فيرا غادي تنتقل ل هامبورغ الشهر الجاي حيت باغية تقرا تما.", en: "Vera will move to Hamburg next month because she wants to study there.", fr: "Vera va déménager à Hambourg le mois prochain parce qu'elle veut y étudier." },
      { n: 3, c: "b", de: "Vera hat eine Stelle als Kellnerin in einem Restaurant gefunden.", ar: "وجدت فيرا وظيفة نادلة في مطعم.", ma: "فيرا لقاو خدمة نادلة ف مطعم.", en: "Vera has found a job as a waitress in a restaurant.", fr: "Vera a trouvé un emploi de serveuse dans un restaurant." },
      { n: 4, c: "c", de: "Am Wochenende will Vera mit ihren Freunden ins Schwimmbad fahren.", ar: "في نهاية الأسبوع تريد فيرا الذهاب إلى المسبح مع أصدقائها.", ma: "ف نهاية السيمانة فيرا باغية تمشي للمسبح مع صحابها.", en: "At the weekend, Vera wants to go to the swimming pool with her friends.", fr: "Le week-end, Vera veut aller à la piscine avec ses amis." },
      { n: 5, c: "d", de: "Vera hat mit dem Klavierspielen angefangen und nimmt seit zwei Monaten Unterricht.", ar: "بدأت فيرا بالعزف على البيانو وتأخذ دروساً منذ شهرين.", ma: "فيرا بدات تعزف على البيانو وكتاخد دروس من جوج شهور.", en: "Vera has started playing the piano and has been taking lessons for two months.", fr: "Vera a commencé à jouer du piano et prend des cours depuis deux mois." }
    ]
  },
  { id: "vera-t2", title: "Vera", level: "B1", sub: "Teile 2", type: "mcq", isPremium: true },
  { id: "vera-t3", title: "Vera", level: "B1", sub: "Teile 3", type: "matching", isPremium: true },
  { id: "vera-sp1", title: "Vera", level: "B1", sub: "Sprach 1", type: "sprach1", isPremium: true },
  { id: "vera-sp2", title: "Vera", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: true }
];

var EXAMS = __examsMain.concat(__examsPremium);

// ==========================================
// HOREN_EXAMS — دروس الاستماع (Hören)
// ==========================================
var HOREN_EXAMS = [
  {
    id: "h1", title: "Einkäufe im Internet", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Verstehen. Teil 1. Sie hören nun 5 kurze Texte. Dazu sollen Sie 5 Aufgaben lösen.", pitch: 1.0, rate: 0.95 },
      { text: "In der heutigen Sendung geht es um persönliche Erfahrungen mit dem Einkaufen im Internet. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich erledige meine Einkäufe fast ausschließlich online. Das spart mir viel Zeit, besonders nach einem langen Arbeitstag. In ein Geschäft gehe ich nur, wenn es wirklich notwendig ist.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 42.", pitch: 1.0, rate: 0.95 },
      { text: "Ehrlich gesagt ist mir das Zwischenmenschliche beim Einkaufen nicht so wichtig. Ich bevorzuge es, meine Sachen schnell und ohne lange Gespräche zu besorgen.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 43.", pitch: 1.0, rate: 0.95 },
      { text: "Wenn ich dann im Internet etwas bestellen möchte, werde ich ständig unterbrochen. Ich finde einfach keine ruhige Minute, um in Ruhe Preise zu vergleichen.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44.", pitch: 1.0, rate: 0.95 },
      { text: "Ich kaufe regelmäßig im Internet ein. Für mich ist das sehr praktisch, vor allem wenn ich spezielle Produkte suche. Ich hatte bisher keine schlechten Erfahrungen.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 45.", pitch: 1.0, rate: 0.95 },
      { text: "Ich bestelle meine Medikamente immer über eine Online-Apotheke. Das ist einfacher und meist auch günstiger. Früher bin ich dafür in die Stadt gefahren, aber jetzt finde ich den Lieferservice viel komfortabler.", pitch: 0.85, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Herr Pawliczek erledigt alle seine Einkäufe im Internet.", ar:"السيد بافليتشيك كيقضي جميع مشترياتو فالإنترنت.", story:"فاطمة شرات شوية حوايج من التسوق عبر الإنترنت، ومن بعد وصلها الكولي، ولكن السيدة شميدت لقاتهم فالدار وحطاتهم ليها حتى رجعات." },
      { n:2, c:"F", de:"Frau Zimmermann legt beim Einkaufen großen Wert auf persönlichen Kontakt.", ar:"السيدة تسيمرمان كتعطي قيمة كبيرة للتواصل الشخصي.", story:"فاطمة شرات شوية حوايج من التسوق عبر الإنترنت، ومن بعد وصلها الكولي، ولكن السيدة شميدت لقاتهم فالدار وحطاتهم ليها حتى رجعات." },
      { n:3, c:"R", de:"Frau Schmidt findet zu Hause nicht genug Ruhe, um im Internet einzukaufen.", ar:"السيدة شميدت ما كتلقاش الهدوء الكافي فالدار باش تشري من الإنترنت.", story:"فاطمة شرات شوية حوايج من التسوق عبر الإنترنت، ومن بعد وصلها الكولي، ولكن السيدة شميدت لقاتهم فالدار وحطاتهم ليها حتى رجعات." },
      { n:4, c:"F", de:"Frau Ruttnigg ist vom Einkaufen im Internet nicht überzeugt.", ar:"السيدة روتنيغ ماشي مقتنعة بالتسوق عبر الإنترنت.", story:"فاطمة شرات شوية حوايج من التسوق عبر الإنترنت، ومن بعد وصلها الكولي، ولكن السيدة شميدت لقاتهم فالدار وحطاتهم ليها حتى رجعات." },
      { n:5, c:"F", de:"Herr Krause kauft seine Medikamente am liebsten in der nächsten Stadt.", ar:"السيد كراوزه كيفضل يشري دواوه من المدينة القريبة.", story:"فاطمة شرات شوية حوايج من التسوق عبر الإنترنت، ومن بعد وصلها الكولي، ولكن السيدة شميدت لقاتهم فالدار وحطاتهم ليها حتى رجعات." }
    ]
  },
  {
    id: "h2", title: "Bus zur Arbeit (Andreas 1 und 2)", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Guten Tag und herzlich willkommen bei Radio Aktuell. Heute hören Sie kurze Beiträge zum Thema Arbeitsweg. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich fahre jeden Tag mit dem Auto zur Arbeit. Morgens ist das für mich am bequemsten. Der Bus wäre vielleicht günstiger, aber ich möchte flexibel sein und nicht an Fahrpläne gebunden.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 42.", pitch: 1.0, rate: 0.95 },
      { text: "Ich arbeite in der Innenstadt und laufe morgens ein kleines Stück zu Fuß. Danach nehme ich die Straßenbahn. Ich finde diese Kombination aus Bewegung und öffentlichem Verkehrsmittel sehr angenehm.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 43.", pitch: 1.0, rate: 0.95 },
      { text: "Früher bin ich oft mit dem Auto zur Arbeit gefahren, aber seit einem Jahr mache ich das nicht mehr. Ich habe festgestellt, dass ich das Auto eigentlich gar nicht mehr brauche.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 44.", pitch: 1.0, rate: 0.95 },
      { text: "Ich fahre immer auf dieselbe Weise zur Arbeit. Mit dem Bus. Ich benutze nie andere Verkehrsmittel. Der Bus ist für mich zuverlässig und bequem.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 45.", pitch: 1.0, rate: 0.95 },
      { text: "Zur Arbeit fahre ich manchmal mit dem Fahrrad, manchmal mit dem Bus. Der Firmenbus ist nur eine von vielen Möglichkeiten. Ich finde es gut, verschiedene Optionen zu haben.", pitch: 1.1, rate: 1.0 }
    ],
    items: [
      { n:1, c:"F", de:"Die Sprecherin könnte sich vorstellen, mit dem Bus zur Arbeit zu fahren.", ar:"المتحدثة يمكنها تخيل الذهاب بالحافلة.", story:"أحمد كيمشي شوية على رجليه كل نهار، حيث هو عمره ما كيمشي بالطوموبيل وكيفضل الحركة." },
      { n:2, c:"R", de:"Die Sprecherin findet es gut, dass sie zur Arbeit ein Stück zu Fuß gehen kann.", ar:"المتحدثة تحب أنها تمشي شوية على رجليها.", story:"أحمد كيمشي شوية على رجليه كل نهار، حيث هو عمره ما كيمشي بالطوموبيل وكيفضل الحركة." },
      { n:3, c:"F", de:"Der Sprecher fährt nie mit dem Auto zur Arbeit.", ar:"المتحدث لا يقود السيارة أبداً.", story:"أحمد كيمشي شوية على رجليه كل نهار، حيث هو عمره ما كيمشي بالطوموبيل وكيفضل الحركة." },
      { n:4, c:"R", de:"Der Sprecher benutzt für den Weg zur Arbeit zurzeit verschiedene Verkehrsmittel.", ar:"المتحدث يستخدم وسائل نقل مختلفة.", story:"أحمد كيمشي شوية على رجليه كل نهار، حيث هو عمره ما كيمشي بالطوموبيل وكيفضل الحركة." },
      { n:5, c:"F", de:"Für die Sprecherin ist der Firmenbus die einzige Möglichkeit zur Arbeit zu kommen.", ar:"حافلة الشركة هي الخيار الوحيد.", story:"أحمد كيمشي شوية على رجليه كل نهار، حيث هو عمره ما كيمشي بالطوموبيل وكيفضل الحركة." }
    ]
  },
  {
    id: "h3", title: "Bus zur Arbeit (Vera)", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich fahre nie mit dem Auto zur Arbeit. Das ist mir zu teuer und ich möchte auch etwas für meine Gesundheit tun.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42.", pitch: 1.0, rate: 0.95 },
      { text: "Normalerweise nehme ich die Straßenbahn oder gehe ein Stück zu Fuß. Ich könnte mir auch vorstellen, in Zukunft mit dem Bus zu fahren, wenn die Verbindung besser ist.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 43.", pitch: 1.0, rate: 0.95 },
      { text: "Aber den ganzen Weg laufe ich nicht, das wäre zu weit.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 44.", pitch: 1.0, rate: 0.95 },
      { text: "Ich benutze also verschiedene Verkehrsmittel, je nachdem wie das Wetter ist oder wie viel Zeit ich habe.", pitch: 1.05, rate: 1.0 },
      { text: "Nummer 45.", pitch: 1.0, rate: 0.95 },
      { text: "Der Firmenbus ist auf jeden Fall nicht die einzige Möglichkeit für mich, zur Arbeit zu kommen.", pitch: 1.0, rate: 0.95 }
    ],
    items: [
      { n:1, c:"F", de:"Die Sprecherin könnte sich vorstellen, mit dem Bus zur Arbeit zu fahren.", ar:"المتحدثة يمكنها تخيل الذهاب بالحافلة.", story:"يوسف عمره ما كيمشي بالطوموبيل للخدمة، كيختار الطرام ولا كيمشي على رجليه باش يوفر الفلوس ويدير شوية الرياضة." },
      { n:2, c:"F", de:"Die Sprecherin geht den ganzen Weg zur Arbeit zu Fuß.", ar:"المتحدثة تمشي الطريق كله إلى العمل.", story:"يوسف عمره ما كيمشي بالطوموبيل للخدمة، كيختار الطرام ولا كيمشي على رجليه باش يوفر الفلوس ويدير شوية الرياضة." },
      { n:3, c:"R", de:"Der Sprecher fährt nie mit dem Auto zur Arbeit.", ar:"المتحدث لا يقود السيارة أبداً.", story:"يوسف عمره ما كيمشي بالطوموبيل للخدمة، كيختار الطرام ولا كيمشي على رجليه باش يوفر الفلوس ويدير شوية الرياضة." },
      { n:4, c:"R", de:"Der Sprecher benutzt für den Weg zur Arbeit zurzeit verschiedene Verkehrsmittel.", ar:"المتحدث يستخدم وسائل نقل مختلفة.", story:"يوسف عمره ما كيمشي بالطوموبيل للخدمة، كيختار الطرام ولا كيمشي على رجليه باش يوفر الفلوس ويدير شوية الرياضة." },
      { n:5, c:"F", de:"Für die Sprecherin ist der Firmenbus die einzige Möglichkeit zur Arbeit zu kommen.", ar:"حافلة الشركة هي الخيار الوحيد.", story:"يوسف عمره ما كيمشي بالطوموبيل للخدمة، كيختار الطرام ولا كيمشي على رجليه باش يوفر الفلوس ويدير شوية الرياضة." }
    ]
  },
  {
    id: "h4", title: "Arbeitsplatz für Vater", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Mit Beiträgen von Deutschlehrer Orhan Yiğit. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Mein Vater hat eine Arbeit. Er ist nicht immer glücklich, aber er mag seinen Job. Ich finde, er braucht keinen neuen Arbeitsplatz. Wichtiger ist, dass er genug Freizeit hat. Wir könnten dann mehr Zeit zusammen verbringen.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 42.", pitch: 1.0, rate: 0.95 },
      { text: "Ich bin kein sehr guter Schüler. Manche Fächer sind schwer für mich. Ich versuche besser zu werden, aber das klappt nicht immer. Meine Eltern sagen, ich soll mehr lernen. Trotzdem weiß ich, dass gute Noten wichtig sind.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 43.", pitch: 1.0, rate: 0.95 },
      { text: "Ich bin gern allein. Manchmal lese ich oder höre Musik. Dann will ich nicht gestört werden. Aber meine Familie klopft oft an meine Tür. Ich finde das nervig.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44.", pitch: 1.0, rate: 0.95 },
      { text: "Meine Mutter und ich streiten oft. Sie sagt, ich mache zu wenig im Haushalt. Manchmal verstehe ich sie nicht. Ich finde, sie ist zu streng. Aber vielleicht will sie nur das Beste für mich.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45.", pitch: 1.0, rate: 0.95 },
      { text: "Meine Eltern sind nett, aber ich verbringe meine Zeit lieber mit Freunden. Wir gehen ins Kino oder treffen uns im Park. Natürlich liebe ich meine Familie, aber ich brauche auch meine Freiheit.", pitch: 1.1, rate: 1.0 }
    ],
    items: [
      { n:1, c:"F", de:"Die Sprecherin wünscht sich einen Arbeitsplatz für ihren Vater.", ar:"المتحدثة تتمنى وظيفة لوالدها.", story:"سفيان تلميذ مزيان، وماشي ديما كيقلق القسم، ولكن للأسف العلاقة ديالو ماشي مزيانة مع مو، وهاد الشي كيأثر عليه مرات." },
      { n:2, c:"R", de:"Der Sprecher ist kein besonders guter Schüler.", ar:"المتحدث ليس تلميذاً جيداً جداً.", story:"سفيان تلميذ مزيان، وماشي ديما كيقلق القسم، ولكن للأسف العلاقة ديالو ماشي مزيانة مع مو، وهاد الشي كيأثر عليه مرات." },
      { n:3, c:"R", de:"Die Sprecherin möchte nicht immer gestört werden.", ar:"المتحدثة لا تريد أن يتم إزعاجها دائماً.", story:"سفيان تلميذ مزيان، وماشي ديما كيقلق القسم، ولكن للأسف العلاقة ديالو ماشي مزيانة مع مو، وهاد الشي كيأثر عليه مرات." },
      { n:4, c:"R", de:"Der Sprecher versteht sich nicht gut mit seiner Mutter.", ar:"المتحدث لا يتفاهم جيداً مع والدته.", story:"سفيان تلميذ مزيان، وماشي ديما كيقلق القسم، ولكن للأسف العلاقة ديالو ماشي مزيانة مع مو، وهاد الشي كيأثر عليه مرات." },
      { n:5, c:"F", de:"Die Sprecherin ist am liebsten mit ihren Eltern zusammen.", ar:"المتحدثة تفضل أن تكون مع والديها.", story:"سفيان تلميذ مزيان، وماشي ديما كيقلق القسم، ولكن للأسف العلاقة ديالو ماشي مزيانة مع مو، وهاد الشي كيأثر عليه مرات." }
    ]
  },
  {
    id: "h5", title: "Einzelkind", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich bin Karim. Ich habe einen Bruder und eine Schwester. Als Kind musste ich sehr früh lernen, Rücksicht auf die anderen zu nehmen.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42.", pitch: 1.0, rate: 0.95 },
      { text: "Das war manchmal anstrengend, aber heute habe ich ein sehr gutes Verhältnis zu meinem Bruder. Wir helfen uns immer.", pitch: 1.0, rate: 0.95 },
      { text: "Nummer 43.", pitch: 1.0, rate: 0.95 },
      { text: "Meine Schwester und mein Bruder verstehen sich auch sehr gut. Wir sind immer für einander da.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44.", pitch: 1.0, rate: 0.95 },
      { text: "Ich wäre nie gerne ein Einzelkind gewesen.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 45.", pitch: 1.0, rate: 0.95 },
      { text: "Auch wenn es oft stressig war, möchte ich meine Geschwister nicht missen.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"F", de:"Die Sprecherin wäre lieber ein Einzelkind.", ar:"المتحدثة تفضل أن تكون طفلة وحيدة.", story:"كريم عندو علاقة زوينة مع خوه، ومن صغرو كان خاصو يقرا بكري، وحتى ختو علاقتها ممتازة مع خوها، وديما كيشجعو بعضياتهم." },
      { n:2, c:"R", de:"Der Sprecher hat heute ein gutes Verhältnis zu seinem Bruder.", ar:"المتحدث لديه علاقة جيدة بأخيه اليوم.", story:"كريم عندو علاقة زوينة مع خوه، ومن صغرو كان خاصو يقرا بكري، وحتى ختو علاقتها ممتازة مع خوها، وديما كيشجعو بعضياتهم." },
      { n:3, c:"F", de:"Die Sprecherin würde heute gern noch eine Schwester haben.", ar:"المتحدثة تود أن تحصل على أخت أخرى اليوم.", story:"كريم عندو علاقة زوينة مع خوه، ومن صغرو كان خاصو يقرا بكري، وحتى ختو علاقتها ممتازة مع خوها، وديما كيشجعو بعضياتهم." },
      { n:4, c:"R", de:"Die Sprecherin hat schon früh lernen müssen, dass man im Zusammenleben viel Rücksicht nehmen muss.", ar:"كان على المتحدثة أن تتعلم مبكراً أنه يجب مراعاة الآخرين.", story:"كريم عندو علاقة زوينة مع خوه، ومن صغرو كان خاصو يقرا بكري، وحتى ختو علاقتها ممتازة مع خوها، وديما كيشجعو بعضياتهم." },
      { n:5, c:"R", de:"Die Sprecherin versteht sich sehr gut mit ihrem Bruder.", ar:"المتحدثة تتفاهم جيداً مع أخيها.", story:"كريم عندو علاقة زوينة مع خوه، ومن صغرو كان خاصو يقرا بكري، وحتى ختو علاقتها ممتازة مع خوها، وديما كيشجعو بعضياتهم." }
    ]
  },
  {
    id: "h6", title: "Urlaub", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen Teil 1. Sie hören nun 5 kurze Texte. Mit Beiträgen von Deutschlehrer Orhan Yiğit. Das heutige Thema ist Urlaubserinnerungen.", pitch: 1.0, rate: 0.95 },
      { text: "Nummer 41. Als Kind wollte ich unbedingt Urlaub wie meine Freunde machen, Sonne, Strand und Meer. Doch meine Eltern fuhren lieber in die Berge. Während andere im Wasser spielten, mussten wir wandern gehen. Ich fand das oft langweilig.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 42. Einmal waren wir im Schwarzwald zum Wandern. Ich war damals noch klein und fand das wirklich anstrengend. Es hat oft geregnet und die Wege waren rutschig. Die Natur war zwar schön, aber dieser Urlaub hat mir keinen Spaß gemacht.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 43. Wir sind früher oft in den Ferien an einen See gefahren. Dort haben wir gezeltet oder in kleinen Pensionen übernachtet. Ich habe viele Kinder kennengelernt und es war immer spannend. Bei meinen Verwandten waren wir nie, meine Eltern wollten lieber neue Orte sehen.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 44. Mit meiner Familie haben wir meistens Städtereisen gemacht. Wir sind mit dem Auto gefahren und haben Museen besucht. Fahrradtouren waren nicht unser Ding. Ich kann mich nur an einen Ausflug mit dem Rad erinnern, aber das war nicht regelmäßig.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 45. Ich durfte bei der Urlaubsplanung immer mitreden. Meine Eltern fragten mich, was ich machen möchte, und wir haben gemeinsam entschieden. Manchmal haben wir Vorschläge gesammelt und uns dann geeinigt. Das war schön, denn ich fühlte mich ernst genommen.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Der Sprecher hätte gern Urlaub wie die anderen Kinder gemacht.", ar:"كان يتمنى قضاء عطلة مثل الأطفال الآخرين.", story:"مريم كتحب تسافر فالعيطلة، ولكن عطلة المشي فالجبال ما كتعجبهاش بزاف، وكتفضل تدوز العطلة مع الوالدين." },
      { n:2, c:"R", de:"Dem Sprecher hat der Wanderurlaub nicht so gut gefallen.", ar:"لم تعجبه عطلة المشي كثيراً.", story:"مريم كتحب تسافر فالعيطلة، ولكن عطلة المشي فالجبال ما كتعجبهاش بزاف، وكتفضل تدوز العطلة مع الوالدين." },
      { n:3, c:"F", de:"Die Sprecherin hat die Ferien bei Verwandten verbracht.", ar:"قضت المتحدثة العطلة عند الأقارب.", story:"مريم كتحب تسافر فالعيطلة، ولكن عطلة المشي فالجبال ما كتعجبهاش بزاف، وكتفضل تدوز العطلة مع الوالدين." },
      { n:4, c:"F", de:"Die Sprecherin hat mit ihren Eltern regelmäßig Fahrradausflüge gemacht.", ar:"قامت المتحدثة برحلات دراجات منتظمة مع والديها.", story:"مريم كتحب تسافر فالعيطلة، ولكن عطلة المشي فالجبال ما كتعجبهاش بزاف، وكتفضل تدوز العطلة مع الوالدين." },
      { n:5, c:"R", de:"Der Sprecher hat den Urlaub mit den Eltern gemeinsam geplant.", ar:"خطط المتحدث للعطلة مع والديه معاً.", story:"مريم كتحب تسافر فالعيطلة، ولكن عطلة المشي فالجبال ما كتعجبهاش بزاف، وكتفضل تدوز العطلة مع الوالدين." }
    ]
  },
  {
    id: "h7", title: "Kinder in der Schule", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen Teil 1. Sie hören nun 5 kurze Texte. Mit Beiträgen von Deutschlehrer Orhan Yiğit. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Also, ich finde es sehr wichtig, dass meine Kinder gute Noten bekommen. Die Schule ist der Schlüssel für ihre Zukunft. Ich achte darauf, dass sie lernen und ihre Hausaufgaben machen.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Für mich ist es selbstverständlich, dass Eltern immer für ihre Kinder da sind. Ich höre zu und unterstütze sie, wann immer sie mich brauchen.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 43. Ich denke, ich spreche schon sehr oft mit meiner Tochter. Wir erzählen uns alles. Ich sehe keinen Grund, warum ich noch mehr sprechen sollte.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Mir ist es sehr wichtig, dass meine Kinder gesund leben. Sie sollen Obst und Gemüse essen, viel Wasser trinken und sich jeden Tag bewegen.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Ich möchte, dass mein Kind seine eigenen Ideen verwirklichen kann. Wichtig ist, dass es glücklich ist und das macht, was ihm wirklich Spaß macht.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"F", de:"Für die Sprechenden ist es unwichtig, ob ihre Kinder in der Schule gut sind.", ar:"بالنسبة للمتحدثين، من غير المهم ما إذا كان أطفالهم جيدين في المدرسة.", story:"أي أب وأم خاصهم ديما يكونو مع ولادهم ويساندوهم، وكيتمنّاو ولادهم يعيشو بصحة مزيانة، ويخليو كل طفل يحقق الأفكار والأحلام ديالو." },
      { n:2, c:"R", de:"Der Sprecher findet es wichtig, dass Eltern immer für ihre Kinder da sind.", ar:"يرى المتحدث أنه من المهم أن يكون الآباء موجودين دائماً من أجل أطفالهم.", story:"أي أب وأم خاصهم ديما يكونو مع ولادهم ويساندوهم، وكيتمنّاو ولادهم يعيشو بصحة مزيانة، ويخليو كل طفل يحقق الأفكار والأحلام ديالو." },
      { n:3, c:"F", de:"Die Sprecherin glaubt, dass sie mehr mit ihrer Tochter sprechen müsste.", ar:"تعتقد المتحدثة أنه يجب عليها التحدث أكثر مع ابنتها.", story:"أي أب وأم خاصهم ديما يكونو مع ولادهم ويساندوهم، وكيتمنّاو ولادهم يعيشو بصحة مزيانة، ويخليو كل طفل يحقق الأفكار والأحلام ديالو." },
      { n:4, c:"R", de:"Es ist dem Sprecher wichtig, dass seine Kinder gesund leben.", ar:"من المهم للمتحدث أن يعيش أطفاله بصحة جيدة.", story:"أي أب وأم خاصهم ديما يكونو مع ولادهم ويساندوهم، وكيتمنّاو ولادهم يعيشو بصحة مزيانة، ويخليو كل طفل يحقق الأفكار والأحلام ديالو." },
      { n:5, c:"R", de:"Der Sprecher möchte, dass sein Kind die eigenen Ideen realisieren kann.", ar:"يريد المتحدث أن يتمكن طفله من تحقيق أفكاره الخاصة.", story:"أي أب وأم خاصهم ديما يكونو مع ولادهم ويساندوهم، وكيتمنّاو ولادهم يعيشو بصحة مزيانة، ويخليو كل طفل يحقق الأفكار والأحلام ديالو." }
    ]
  },
  {
    id: "h8", title: "Radwege", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich fahre jeden Tag mit dem Fahrrad zur Arbeit. Die Radwege in der Stadt machen das einfacher und sicherer.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Ich fahre nur am Wochenende Fahrrad. Die Radwege, die es schon gibt, reichen mir völlig aus. Ich finde, es ist nicht nötig, noch mehr zu bauen.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 43. Ich finde Radwege sehr wichtig. Sie machen das Fahren viel sicherer, besonders für Kinder. Ich wünsche mir sogar, dass es noch mehr Radwege in der Stadt gibt.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 44. Wenn Fahrradfahrer auf der Straße fahren, wird der Verkehr oft langsamer. Es ist gefährlich für alle. Deshalb finde ich es besser, wenn Fahrräder einen eigenen Weg haben.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Ich fühle mich auf Radwegen viel sicherer. Auf der Straße habe ich oft Angst, besonders wenn Autos schnell fahren. Deshalb finde ich, Radwege machen das Radfahren deutlich sicherer.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Für den Sprecher haben Radwege Vorteile.", ar:"بالنسبة للمتحدث، مسارات الدراجات لها مزايا.", story:"إنشاء مسارات خاصة بالدراجات عندو بزاف ديال الفوائد، حيث كيخلي ركوب الدراجة أكثر أماناً، ولكن كاينين ناس كيشوفو أن هاد المسارات كتعرقل حركة المرور." },
      { n:2, c:"F", de:"Die Sprecherin möchte mehr Radwege.", ar:"تريد المتحدثة المزيد من مسارات الدراجات.", story:"إنشاء مسارات خاصة بالدراجات عندو بزاف ديال الفوائد، حيث كيخلي ركوب الدراجة أكثر أماناً، ولكن كاينين ناس كيشوفو أن هاد المسارات كتعرقل حركة المرور." },
      { n:3, c:"F", de:"Die Sprecherin meint, dass Radwege unnötig sind.", ar:"ترى المتحدثة أن مسارات الدراجات غير ضرورية.", story:"إنشاء مسارات خاصة بالدراجات عندو بزاف ديال الفوائد، حيث كيخلي ركوب الدراجة أكثر أماناً، ولكن كاينين ناس كيشوفو أن هاد المسارات كتعرقل حركة المرور." },
      { n:4, c:"R", de:"Der Sprecher denkt, dass Radfahrer auf der Straße den Verkehr behindern.", ar:"يعتقد المتحدث أن راكبي الدراجات على الطريق يعيقون حركة المرور.", story:"إنشاء مسارات خاصة بالدراجات عندو بزاف ديال الفوائد، حيث كيخلي ركوب الدراجة أكثر أماناً، ولكن كاينين ناس كيشوفو أن هاد المسارات كتعرقل حركة المرور." },
      { n:5, c:"R", de:"Für den Sprecher machen Radwege das Radfahren sicherer.", ar:"بالنسبة للمتحدث، مسارات الدراجات تجعل ركوب الدراجات أكثر أماناً.", story:"إنشاء مسارات خاصة بالدراجات عندو بزاف ديال الفوائد، حيث كيخلي ركوب الدراجة أكثر أماناً، ولكن كاينين ناس كيشوفو أن هاد المسارات كتعرقل حركة المرور." }
    ]
  },
  {
    id: "h9", title: "Fremdsprache", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich bin dagegen, dass Kinder so früh eine Fremdsprache lernen. Sie sollten erst mal ihre Muttersprache richtig beherrschen.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Ich bin überzeugt, dass frühes Fremdsprachenlernen für viele Kinder eher Nachteile bringt. Es überfordert sie oft.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 43. Ich finde es schade, dass ich im Kindergarten keine Fremdsprache lernen konnte. Heute fällt es mir schwer.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 44. Meiner Meinung nach sollten Fremdsprachen erst ab der Schulzeit eingeführt werden. Das ist früh genug.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Ich spreche mich klar dagegen aus, Kindern schon früh eine Fremdsprache beizubringen.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Die Sprecherin ist dagegen, dass Kinder so früh eine Fremdsprache lernen.", ar:"المتحدثة ضد أن يتعلم الأطفال لغة أجنبية في وقت مبكر جداً.", story:"بعض الآباء كيشوفو أن الأطفال خاصهم يتعلمو لغة أجنبية من بكري، والأفضل يبداو بها فالمدرسة، ولكن كاين اللي كيشوف أن تعلم لغة أجنبية عندو عيوب بالنسبة لعدد كبير من الأطفال." },
      { n:2, c:"R", de:"Die Sprecherin meint, dass das frühe Lernen einer Fremdsprache für viele Kinder Nachteile hat.", ar:"ترى المتحدثة أن التعلم المبكر للغة الأجنبية له عيوب بالنسبة للعديد من الأطفال.", story:"بعض الآباء كيشوفو أن الأطفال خاصهم يتعلمو لغة أجنبية من بكري، والأفضل يبداو بها فالمدرسة، ولكن كاين اللي كيشوف أن تعلم لغة أجنبية عندو عيوب بالنسبة لعدد كبير من الأطفال." },
      { n:3, c:"R", de:"Der Sprecher findet es schade, dass er im Kindergarten keine Fremdsprache lernen konnte.", ar:"يأسف المتحدث لأنه لم يتمكن من تعلم لغة أجنبية في رياض الأطفال.", story:"بعض الآباء كيشوفو أن الأطفال خاصهم يتعلمو لغة أجنبية من بكري، والأفضل يبداو بها فالمدرسة، ولكن كاين اللي كيشوف أن تعلم لغة أجنبية عندو عيوب بالنسبة لعدد كبير من الأطفال." },
      { n:4, c:"R", de:"Die Sprecherin meint, dass das Fremdsprachenlernen erst in der Schule beginnen sollte.", ar:"ترى المتحدثة أن تعلم اللغات الأجنبية يجب أن يبدأ فقط في المدرسة.", story:"بعض الآباء كيشوفو أن الأطفال خاصهم يتعلمو لغة أجنبية من بكري، والأفضل يبداو بها فالمدرسة، ولكن كاين اللي كيشوف أن تعلم لغة أجنبية عندو عيوب بالنسبة لعدد كبير من الأطفال." },
      { n:5, c:"R", de:"Der Sprecher ist dagegen, dass Kinder schon früh Fremdsprache lernen.", ar:"المتحدث ضد أن يتعلم الأطفال لغة أجنبية في وقت مبكر.", story:"بعض الآباء كيشوفو أن الأطفال خاصهم يتعلمو لغة أجنبية من بكري، والأفضل يبداو بها فالمدرسة، ولكن كاين اللي كيشوف أن تعلم لغة أجنبية عندو عيوب بالنسبة لعدد كبير من الأطفال." }
    ]
  },
  {
    id: "h10", title: "Sport als für Kultur", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Verstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Sport spielt eine viel größere Rolle in meinem Leben als Kultur. Ich treibe regelmäßig Sport, weil es mir hilft, fit zu bleiben und Stress abzubauen.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 42. Sobald sich die Gelegenheit ergibt, besuche ich eine Theateraufführung. Ich genieße es, verschiedene Inszenierungen zu erleben.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Ehrlich gesagt kann ich mit moderner Musik wenig anfangen. Viele Lieder klingen für mich gleich und haben keine wirkliche Tiefe. Ich bevorzuge klassische Musik oder Jazz.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 44. Kunstausstellungen besuche ich nur selten. Natürlich ist Kunst wichtig, aber ich habe nie wirklich großes Interesse daran entwickelt.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 45. Ich bedauere es sehr, dass ich nicht mehr Zeit für kulturelle Erlebnisse habe. Ich liebe es, mich mit Kunst, Musik und Literatur zu beschäftigen, aber mein Alltag lässt mir kaum Raum dafür.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Der Sprecher interessiert sich für Sport als für Kultur.", ar:"المتحدث مهتم بالرياضة أكثر من الثقافة.", story:"سارة مهتمة بالرياضة أكثر من الثقافة، ولكن كتقدر تمشي للمسرح بزاف ديال المرات، وكتحاول تخصص وقت أكثر للثقافة." },
      { n:2, c:"R", de:"Die Sprecherin geht so oft sie kann ins Theater.", ar:"المتحدثة تذهب إلى المسرح قدر ما تستطيع.", story:"سارة مهتمة بالرياضة أكثر من الثقافة، ولكن كتقدر تمشي للمسرح بزاف ديال المرات، وكتحاول تخصص وقت أكثر للثقافة." },
      { n:3, c:"F", de:"Der Sprecher hört besonders gern moderne Musik.", ar:"المتحدث يحب الاستماع إلى الموسيقى الحديثة بشكل خاص.", story:"سارة مهتمة بالرياضة أكثر من الثقافة، ولكن كتقدر تمشي للمسرح بزاف ديال المرات، وكتحاول تخصص وقت أكثر للثقافة." },
      { n:4, c:"F", de:"Die Sprecherin geht oft in Kunstausstellungen.", ar:"المتحدثة تذهب كثيراً إلى معارض الفن.", story:"سارة مهتمة بالرياضة أكثر من الثقافة، ولكن كتقدر تمشي للمسرح بزاف ديال المرات، وكتحاول تخصص وقت أكثر للثقافة." },
      { n:5, c:"R", de:"Die Sprecherin hätte gerne mehr Zeit für die Kultur.", ar:"المتحدثة تود لو كان لديها المزيد من الوقت للثقافة.", story:"سارة مهتمة بالرياضة أكثر من الثقافة، ولكن كتقدر تمشي للمسرح بزاف ديال المرات، وكتحاول تخصص وقت أكثر للثقافة." }
    ]
  },
  {
    id: "h11", title: "Computer", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen, Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich habe zu Hause einen Computer. Eigentlich benutze ich ihn oft, besonders um E-Mails zu schreiben oder Filme zu schauen.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 42. Ich benutze meinen Computer nicht nur am Arbeitsplatz. Auch zu Hause mache ich viele Dinge am Computer, zum Beispiel Fotos bearbeiten oder Musik hören.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 43. Computer mag ich überhaupt nicht. Ich finde, sie machen das Leben komplizierter. Ich schreibe lieber Briefe mit der Hand und telefoniere direkt mit Freunden.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Ich habe kein großes Vertrauen zu Computern. Oft funktionieren sie nicht richtig und dann weiß ich nicht, was ich machen soll.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 45. Im täglichen Leben brauche ich keinen Computer. Ich gehe lieber in die Bibliothek, um Informationen zu finden und schreibe Notizen mit der Hand.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Der Sprecher hat zu Hause keinen Computer.", ar:"المتحدث ليس لديه كمبيوتر في المنزل.", story:"محمد كيرفض يستعمل الكمبيوتر، حيث ما عندوش ثقة كبيرة فالكمبيوترات وكيخاف يعتمد عليهم بزاف." },
      { n:2, c:"F", de:"Der Sprecher benutzt den Computer nur am Arbeitsplatz.", ar:"المتحدث يستخدم الكمبيوتر فقط في العمل.", story:"محمد كيرفض يستعمل الكمبيوتر، حيث ما عندوش ثقة كبيرة فالكمبيوترات وكيخاف يعتمد عليهم بزاف." },
      { n:3, c:"R", de:"Die Sprecherin lehnt Computer ab.", ar:"المتحدثة ترفض أجهزة الكمبيوتر.", story:"محمد كيرفض يستعمل الكمبيوتر، حيث ما عندوش ثقة كبيرة فالكمبيوترات وكيخاف يعتمد عليهم بزاف." },
      { n:4, c:"R", de:"Die Sprecherin hat kein großes Vertrauen zu Computern.", ar:"المتحدثة ليس لديها ثقة كبيرة بأجهزة الكمبيوتر.", story:"محمد كيرفض يستعمل الكمبيوتر، حيث ما عندوش ثقة كبيرة فالكمبيوترات وكيخاف يعتمد عليهم بزاف." },
      { n:5, c:"F", de:"Die Sprecherin braucht den Computer im täglichen Leben.", ar:"المتحدثة تحتاج الكمبيوتر في الحياة اليومية.", story:"محمد كيرفض يستعمل الكمبيوتر، حيث ما عندوش ثقة كبيرة فالكمبيوترات وكيخاف يعتمد عليهم بزاف." }
    ]
  },
  {
    id: "h12", title: "Arbeit zu fahren", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich finde Busfahren ehrlich gesagt nicht so gut, der Bus ist oft zu voll und unpünktlich. Deshalb nehme ich lieber mein Auto oder fahre mit dem Fahrrad.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Zu Fuß zur Arbeit gehen? Nein, das mache ich fast nie. Es ist zu weit und ich brauche über eine Stunde. Ich nehme meistens das Auto oder fahre mit dem Motorrad.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Meine Frau nimmt jeden Morgen das Auto zur Arbeit. Ich finde das völlig in Ordnung. Wir haben nur ein Auto und sie hat einen längeren Weg. Ich fahre mit dem Fahrrad.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Ich fahre jeden Tag mit meinem Motorrad zur Arbeit. Es ist praktisch, weil ich keinen Parkplatz suchen muss und schneller durch den Verkehr komme.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 45. Mit dem Fahrrad zur Arbeit fahre ich eigentlich nie. Ich habe gar kein Fahrrad mehr. Ich habe mir vor 2 Jahren ein Motorrad gekauft und das benutze ich jetzt jeden Tag.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"F", de:"Der Sprecher könnte sich vorstellen, mit dem Bus zur Arbeit zu fahren.", ar:"المتحدث يمكنه تخيل الذهاب بالحافلة.", story:"مراتو ديما عندها الطوموبيل، وهاد الشي علاش هو كيمشي للخدمة بالموتور ديالها." },
      { n:2, c:"F", de:"Die Sprecherin geht gern zu Fuß.", ar:"المتحدثة تحب المشي على الأقدام.", story:"مراتو ديما عندها الطوموبيل، وهاد الشي علاش هو كيمشي للخدمة بالموتور ديالها." },
      { n:3, c:"R", de:"Der Sprecher findet es in Ordnung, dass seine Frau immer das Auto hat.", ar:"المتحدث يجد أنه لا بأس أن تكون السيارة دائماً مع زوجته.", story:"مراتو ديما عندها الطوموبيل، وهاد الشي علاش هو كيمشي للخدمة بالموتور ديالها." },
      { n:4, c:"F", de:"Die Sprecherin fährt jeden Tag mit ihrem Motorrad zur Arbeit.", ar:"المتحدثة تذهب إلى العمل بالدراجة النارية كل يوم.", story:"مراتو ديما عندها الطوموبيل، وهاد الشي علاش هو كيمشي للخدمة بالموتور ديالها." },
      { n:5, c:"F", de:"Die Sprecherin fährt immer mit dem Fahrrad zur Arbeit.", ar:"المتحدثة تذهب إلى العمل بالدراجة دائماً.", story:"مراتو ديما عندها الطوموبيل، وهاد الشي علاش هو كيمشي للخدمة بالموتور ديالها." }
    ]
  },
  {
    id: "h13", title: "Handys", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Also, ich finde Handys oft störend. Neulich war ich im Café und jemand telefonierte laut neben mir. Ich finde, man sollte mehr Rücksicht nehmen.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Ich telefoniere eigentlich nie mit Freunden. Wir schreiben uns ab und zu Nachrichten. Aber telefonieren mag ich nicht. Das ist mir oft zu laut und zu privat.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 43. Meine Partnerin rufe ich selten mit dem Handy an. Meistens sehen wir uns sowieso zu Hause. Telefonieren finde ich anstrengend, besonders unterwegs.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Ich finde Handys für Kinder problematisch. Viele schauen den ganzen Tag auf den Bildschirm. Sie spielen nicht mehr draußen oder mit Freunden.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 45. Ich habe schon ein gutes Smartphone. Es funktioniert einwandfrei, und ich brauche kein weiteres. Ein neues Handy interessiert mich nicht.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Die Sprecherin fühlt sich durch Handys gestört.", ar:"المتحدثة تشعر بالإزعاج من الهواتف المحمولة.", story:"بزاف ديال الناس كيشوفو أن الهواتف كتسبب الإزعاج، وخصوصاً بالنسبة للأطفال، حيث الهواتف ماشي مزيانة للأطفال وكتقدر تأثر عليهم." },
      { n:2, c:"F", de:"Der Sprecher benützt das Handy für Gespräche mit Freunden.", ar:"المتحدث يستخدم الهاتف للمحادثات مع الأصدقاء.", story:"بزاف ديال الناس كيشوفو أن الهواتف كتسبب الإزعاج، وخصوصاً بالنسبة للأطفال، حيث الهواتف ماشي مزيانة للأطفال وكتقدر تأثر عليهم." },
      { n:3, c:"F", de:"Der Sprecher ruft gerne seine Partnerin mit dem Handy an.", ar:"المتحدث يحب الاتصال بشريكته عبر الهاتف.", story:"بزاف ديال الناس كيشوفو أن الهواتف كتسبب الإزعاج، وخصوصاً بالنسبة للأطفال، حيث الهواتف ماشي مزيانة للأطفال وكتقدر تأثر عليهم." },
      { n:4, c:"R", de:"Die Sprecherin findet Handys für Kinder nicht gut.", ar:"المتحدثة ترى أن الهواتف ليست جيدة للأطفال.", story:"بزاف ديال الناس كيشوفو أن الهواتف كتسبب الإزعاج، وخصوصاً بالنسبة للأطفال، حيث الهواتف ماشي مزيانة للأطفال وكتقدر تأثر عليهم." },
      { n:5, c:"F", de:"Der Sprecher hätte auch gern ein Handy.", ar:"المتحدث يود أيضاً الحصول على هاتف.", story:"بزاف ديال الناس كيشوفو أن الهواتف كتسبب الإزعاج، وخصوصاً بالنسبة للأطفال، حيث الهواتف ماشي مزيانة للأطفال وكتقدر تأثر عليهم." }
    ]
  },
  {
    id: "h14", title: "Filme", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich sehe mir am liebsten lustige Filme an. Nach einem langen Tag möchte ich einfach lachen und mich entspannen.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Ich schaue am liebsten politische Sendungen. Es ist wichtig, informiert zu sein und zu verstehen, was in der Welt passiert.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Ich mag Familienfilme. Sie sind warmherzig und man kann sie mit Kindern zusammen anschauen. Das ist schön.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Das Kind sieht sich am liebsten spannende Krimis an. Es liebt die Spannung und das Rätselraten.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 45. Ich sehe mir am liebsten Liebes- und Familienfilme an. Sie berühren das Herz und geben ein gutes Gefühl.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Der Mann sieht sich am liebsten lustige Filme an.", ar:"الرجل يفضل مشاهدة الأفلام المضحكة.", story:"فالعائلة كل واحد عندو الذوق ديالو فالأفلام: الأب كيفضل الأفلام المضحكة، الطفل كيفضل أفلام الجريمة المشوقة، أما الأخت كتفضل أفلام الحب والعائلة." },
      { n:2, c:"R", de:"Die Frau sieht sich am liebsten politische Sendungen an.", ar:"المرأة تفضل مشاهدة البرامج السياسية.", story:"فالعائلة كل واحد عندو الذوق ديالو فالأفلام: الأب كيفضل الأفلام المضحكة، الطفل كيفضل أفلام الجريمة المشوقة، أما الأخت كتفضل أفلام الحب والعائلة." },
      { n:3, c:"R", de:"Der Mann sieht gern Familienfilme.", ar:"الرجل يحب مشاهدة الأفلام العائلية.", story:"فالعائلة كل واحد عندو الذوق ديالو فالأفلام: الأب كيفضل الأفلام المضحكة، الطفل كيفضل أفلام الجريمة المشوقة، أما الأخت كتفضل أفلام الحب والعائلة." },
      { n:4, c:"R", de:"Das Kind sieht sich am liebsten spannende Krimis an.", ar:"الطفل يفضل مشاهدة أفلام الجريمة المشوقة.", story:"فالعائلة كل واحد عندو الذوق ديالو فالأفلام: الأب كيفضل الأفلام المضحكة، الطفل كيفضل أفلام الجريمة المشوقة، أما الأخت كتفضل أفلام الحب والعائلة." },
      { n:5, c:"R", de:"Die Sprecherin sieht sich am liebsten Liebes- und Familienfilme an.", ar:"المتحدثة تفضل مشاهدة أفلام الحب والعائلة.", story:"فالعائلة كل واحد عندو الذوق ديالو فالأفلام: الأب كيفضل الأفلام المضحكة، الطفل كيفضل أفلام الجريمة المشوقة، أما الأخت كتفضل أفلام الحب والعائلة." }
    ]
  },
  {
    id: "h15", title: "Urlaub oft auf dem Land", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Die Familie von Yusuf macht oft Urlaub auf dem Land. Aber dieses Mal fahren sie in die Stadt, nach Wien.", pitch: 1.0, rate: 1.0 },
      { text: "Nummer 42. Der Sprecher findet Stadturlaub in Wien interessanter als die Berge. Er mag die Kultur und die Museen.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Die Sprecherin meint, dass sich ihre ganze Familie im Urlaub gut erholt. Alle sind zufrieden.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 44. Die Sprecherin findet den Urlaub in Österreich langweilig. Sie möchte lieber etwas Aufregendes erleben.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 45. Die Sprecherin denkt, dass Österreich vor allem für ältere Menschen interessant ist. Für junge Leute gibt es nicht so viel.", pitch: 0.85, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Die Sprecherin verbringt ihren Urlaub oft auf dem Land.", ar:"المتحدثة تقضي عطلتها غالباً في الريف.", story:"العائلة ديال يوسف كيديرو العطلة غالباً فالقرية أو البادية، ولكن هاد المرة مشاو يديرو عطلة فالمدينة فـ فيينا، والأجمل أن العائلة كاملة كانت فالعطلة." },
      { n:2, c:"R", de:"Der Sprecher findet Stadturlaub in Wien interessanter als die Berge.", ar:"المتحدث يجد عطلة المدينة في فيينا أكثر إثارة من الجبال.", story:"العائلة ديال يوسف كيديرو العطلة غالباً فالقرية أو البادية، ولكن هاد المرة مشاو يديرو عطلة فالمدينة فـ فيينا، والأجمل أن العائلة كاملة كانت فالعطلة." },
      { n:3, c:"R", de:"Die Sprecherin meint, dass sich ihre ganze Familie im Urlaub gut erholt.", ar:"المتحدثة ترى أن عائلتها بأكملها ترتاح جيداً في العطلة.", story:"العائلة ديال يوسف كيديرو العطلة غالباً فالقرية أو البادية، ولكن هاد المرة مشاو يديرو عطلة فالمدينة فـ فيينا، والأجمل أن العائلة كاملة كانت فالعطلة." },
      { n:4, c:"F", de:"Die Sprecherin findet den Urlaub in Österreich langweilig.", ar:"المتحدثة تجد العطلة في النمسا مملة.", story:"العائلة ديال يوسف كيديرو العطلة غالباً فالقرية أو البادية، ولكن هاد المرة مشاو يديرو عطلة فالمدينة فـ فيينا، والأجمل أن العائلة كاملة كانت فالعطلة." },
      { n:5, c:"F", de:"Die Sprecherin denkt, dass Österreich vor allem für ältere Menschen interessant ist.", ar:"المتحدثة تعتقد أن النمسا مثيرة للاهتمام خاصة لكبار السن.", story:"العائلة ديال يوسف كيديرو العطلة غالباً فالقرية أو البادية، ولكن هاد المرة مشاو يديرو عطلة فالمدينة فـ فيينا، والأجمل أن العائلة كاملة كانت فالعطلة." }
    ]
  },
  {
    id: "h16", title: "Fleisch", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich esse nicht mehr so viel Fleisch wie früher. Ich achte mehr auf meine Gesundheit und die Umwelt.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Ich bin überzeugt, dass die Lebensmittel in den Supermärkten kontrolliert werden. Das gibt mir Sicherheit.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Ich habe Angst vor Krankheiten, weil die Lebensmittel so schlecht sind. Man weiß ja nie, was drin ist.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Mir gefällt die Atmosphäre auf dem Wochenmarkt. Es ist schön, dort einzukaufen und die Leute zu treffen.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Ich finde, dass die meisten Menschen zu viel Geld für unwichtige Dinge ausgeben. Man sollte bewusster einkaufen.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Der Sprecher isst nicht mehr so viel Fleisch wie früher.", ar:"المتحدث لم يعد يأكل الكثير من اللحوم كما في السابق.", story:"سارة ولات ما كتاكلش اللحم بزاف، وكتفضل تشري المواد الغذائية من السوبرماركت حيث المواد الغذائية فالسوبرماركيت مراقَبة. ولكن كتحب حتى الأجواء ديال السوق الأسبوعي، وكتحاول ما تصرفش الفلوس على الحوايج اللي ماشي مهمة." },
      { n:2, c:"R", de:"Die Sprecherin ist überzeugt, dass die Lebensmittel in den Supermärkten kontrolliert werden.", ar:"المتحدثة مقتنعة بأن المواد الغذائية في السوبرماركت تخضع للرقابة.", story:"سارة ولات ما كتاكلش اللحم بزاف، وكتفضل تشري المواد الغذائية من السوبرماركت حيث المواد الغذائية فالسوبرماركيت مراقَبة. ولكن كتحب حتى الأجواء ديال السوق الأسبوعي، وكتحاول ما تصرفش الفلوس على الحوايج اللي ماشي مهمة." },
      { n:3, c:"F", de:"Die Sprecherin hat Angst vor Krankheiten, weil die Lebensmittel so schlecht sind.", ar:"المتحدثة تخاف من الأمراض لأن المواد الغذائية سيئة.", story:"سارة ولات ما كتاكلش اللحم بزاف، وكتفضل تشري المواد الغذائية من السوبرماركت حيث المواد الغذائية فالسوبرماركيت مراقَبة. ولكن كتحب حتى الأجواء ديال السوق الأسبوعي، وكتحاول ما تصرفش الفلوس على الحوايج اللي ماشي مهمة." },
      { n:4, c:"R", de:"Dem Sprecher gefällt die Atmosphäre auf dem Wochenmarkt.", ar:"المتحدث يحب أجواء السوق الأسبوعي.", story:"سارة ولات ما كتاكلش اللحم بزاف، وكتفضل تشري المواد الغذائية من السوبرماركت حيث المواد الغذائية فالسوبرماركيت مراقَبة. ولكن كتحب حتى الأجواء ديال السوق الأسبوعي، وكتحاول ما تصرفش الفلوس على الحوايج اللي ماشي مهمة." },
      { n:5, c:"R", de:"Der Sprecher findet, dass die meisten Menschen zu viel Geld für unwichtige Dinge ausgeben.", ar:"المتحدث يرى أن معظم الناس ينفقون الكثير من المال على أشياء غير مهمة.", story:"سارة ولات ما كتاكلش اللحم بزاف، وكتفضل تشري المواد الغذائية من السوبرماركت حيث المواد الغذائية فالسوبرماركيت مراقَبة. ولكن كتحب حتى الأجواء ديال السوق الأسبوعي، وكتحاول ما تصرفش الفلوس على الحوايج اللي ماشي مهمة." }
    ]
  },
  {
    id: "h17", title: "Meinung", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Willkommen zu unserem heutigen Radiobeitrag. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich arbeite sehr gern im Büro. Nur zu Hause zu bleiben und mich den ganzen Tag um mein Kind zu kümmern, wäre auf Dauer nichts für mich.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Ich bin alleinerziehend und muss arbeiten, weil sonst das Geld einfach nicht reicht. Es ist manchmal stressig, aber ich habe keine andere Wahl.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 43. Ich finde es nicht gut, wenn beide Eltern arbeiten müssen. Die Kinder brauchen doch jemanden, der immer da ist.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Meiner Meinung nach sollten kleine Kinder möglichst von ihrer Mutter betreut werden. Ich war die ersten 3 Jahre zu Hause und habe mich um meine Tochter gekümmert.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 45. Seitdem mein Kind in der Kita ist, läuft alles perfekt. Ich kann pünktlich zur Arbeit und habe selten Probleme.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"F", de:"Der Sprecher würde lieber zu Hause bleiben und sich um sein Kind kümmern.", ar:"المتحدث يفضل البقاء في المنزل ورعاية طفله.", story:"فهاد العائلة إلا ما خدموش بجوج الوالدين، الفلوس ما غاديش تكفي، وداكشي علاش الوالدين بجوج خاصهم يخدمو، ولكن فالنفس الوقت كيبغيو الأطفال تهتم بيهم الأم ديالهم بنفسها." },
      { n:2, c:"R", de:"Die Sprecherin muss arbeiten, weil sonst das Geld nicht reicht.", ar:"المتحدثة يجب أن تعمل وإلا لن يكفي المال.", story:"فهاد العائلة إلا ما خدموش بجوج الوالدين، الفلوس ما غاديش تكفي، وداكشي علاش الوالدين بجوج خاصهم يخدمو، ولكن فالنفس الوقت كيبغيو الأطفال تهتم بيهم الأم ديالهم بنفسها." },
      { n:3, c:"R", de:"Der Sprecher findet es nicht gut, wenn beide Eltern arbeiten müssen.", ar:"المتحدث لا يجد أنه من الجيد أن يعمل كلا الوالدين.", story:"فهاد العائلة إلا ما خدموش بجوج الوالدين، الفلوس ما غاديش تكفي، وداكشي علاش الوالدين بجوج خاصهم يخدمو، ولكن فالنفس الوقت كيبغيو الأطفال تهتم بيهم الأم ديالهم بنفسها." },
      { n:4, c:"R", de:"Die Sprecherin ist der Meinung, dass Kinder von der eigenen Mutter betreut werden sollten.", ar:"المتحدثة ترى أن الأطفال يجب أن ترعاهم أمهم.", story:"فهاد العائلة إلا ما خدموش بجوج الوالدين، الفلوس ما غاديش تكفي، وداكشي علاش الوالدين بجوج خاصهم يخدمو، ولكن فالنفس الوقت كيبغيو الأطفال تهتم بيهم الأم ديالهم بنفسها." },
      { n:5, c:"F", de:"Der Sprecher hat trotz Kindertagesstätte manchmal Probleme bei der Arbeit.", ar:"المتحدث رغم وجود الحضانة يواجه أحياناً مشاكل في العمل.", story:"فهاد العائلة إلا ما خدموش بجوج الوالدين، الفلوس ما غاديش تكفي، وداكشي علاش الوالدين بجوج خاصهم يخدمو، ولكن فالنفس الوقت كيبغيو الأطفال تهتم بيهم الأم ديالهم بنفسها." }
    ]
  },
  {
    id: "h18", title: "München", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Der Zug um 18:16 Uhr fährt direkt nach München. Sie müssen nicht umsteigen.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Sie müssen Frau Meissner noch die Pläne für Ihr Wohnzimmer schicken. Vergessen Sie das nicht!", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Die Schnellbahn S7 hat den ganzen Tag über Verspätung. Das ist heute leider so.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Das Wetter in Füssen-Reutte ist zum Schifahren besser als in Garmisch. Dort liegt mehr Schnee.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Den Kunden werden heute die Computer der Firma Hypersoft besonders günstig angeboten. Das ist ein tolles Angebot.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Der Zug um 18:16 Uhr fährt direkt nach München.", ar:"القطار الساعة 18:16 يتجه مباشرة إلى ميونخ.", story:"قبل ما يمشي لـ Füssen-Reutte، كيشوف الطقس تما، ومن بعد كيلقى عرض رخيص بزاف عند شركة Hypersoft." },
      { n:2, c:"R", de:"Sie müssen Frau Meissner noch die Pläne für Ihr Wohnzimmer schicken.", ar:"يجب عليك إرسال مخططات غرفة المعيشة إلى السيدة مايسنر.", story:"قبل ما يمشي لـ Füssen-Reutte، كيشوف الطقس تما، ومن بعد كيلقى عرض رخيص بزاف عند شركة Hypersoft." },
      { n:3, c:"R", de:"Die Schnellbahn S7 hat den ganzen Tag über Verspätung.", ar:"القطار السريع S7 متأخر طوال اليوم.", story:"قبل ما يمشي لـ Füssen-Reutte، كيشوف الطقس تما، ومن بعد كيلقى عرض رخيص بزاف عند شركة Hypersoft." },
      { n:4, c:"R", de:"Das Wetter in Füssen-Reutte ist zum Schifahren besser als in Garmisch.", ar:"الطقس في فوسن-رويتي أفضل للتزلج من غارميش.", story:"قبل ما يمشي لـ Füssen-Reutte، كيشوف الطقس تما، ومن بعد كيلقى عرض رخيص بزاف عند شركة Hypersoft." },
      { n:5, c:"R", de:"Den Kunden werden heute die Computer der Firma Hypersoft besonders günstig angeboten.", ar:"يُعرض على العملاء اليوم أجهزة كمبيوتر شركة هايبيرسوفت بأسعار خاصة.", story:"قبل ما يمشي لـ Füssen-Reutte، كيشوف الطقس تما، ومن بعد كيلقى عرض رخيص بزاف عند شركة Hypersoft." }
    ]
  },
  {
    id: "h19", title: "Haushalt", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich muss im Haushalt fast alles alleine machen. Das ist manchmal ganz schön anstrengend.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Ich wasche das Geschirr und die Wäsche. Das ist meine Aufgabe zu Hause.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Ich bin berufstätig und habe keine Zeit für die Hausarbeit. Ich brauche Hilfe.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Ich teile mir mit meiner Partnerin die Arbeit je nach Situation auf. Das funktioniert gut.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Ich bin froh, dass mein Mann so viele Hausarbeiten übernimmt. Das ist nicht selbstverständlich.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Die Sprecherin muss im Haushalt fast alles alleine machen.", ar:"المتحدثة يجب أن تقوم بكل شيء تقريباً في المنزل وحدها.", story:"أحمد كيدير تقريباً كلشي بوحدو فالدار، ولكن دابا قرر يقسم الأشغال مع الشريكة ديالو باش ما يبقاش عليه كلشي." },
      { n:2, c:"R", de:"Der Sprecher wäscht das Geschirr und die Wäsche.", ar:"المتحدث يغسل الأطباق والملابس.", story:"أحمد كيدير تقريباً كلشي بوحدو فالدار، ولكن دابا قرر يقسم الأشغال مع الشريكة ديالو باش ما يبقاش عليه كلشي." },
      { n:3, c:"R", de:"Die Sprecherin ist berufstätig und hat keine Zeit für die Hausarbeit.", ar:"المتحدثة عاملة وليس لديها وقت لأعمال المنزل.", story:"أحمد كيدير تقريباً كلشي بوحدو فالدار، ولكن دابا قرر يقسم الأشغال مع الشريكة ديالو باش ما يبقاش عليه كلشي." },
      { n:4, c:"R", de:"Der Sprecher teilt sich mit seiner Partnerin die Arbeit je nach Situation auf.", ar:"المتحدث يتقاسم العمل مع شريكته حسب الحالة.", story:"أحمد كيدير تقريباً كلشي بوحدو فالدار، ولكن دابا قرر يقسم الأشغال مع الشريكة ديالو باش ما يبقاش عليه كلشي." },
      { n:5, c:"R", de:"Die Sprecherin ist froh, dass ihr Mann so viele Hausarbeiten übernimmt.", ar:"المتحدثة سعيدة لأن زوجها يتولى الكثير من أعمال المنزل.", story:"أحمد كيدير تقريباً كلشي بوحدو فالدار، ولكن دابا قرر يقسم الأشغال مع الشريكة ديالو باش ما يبقاش عليه كلشي." }
    ]
  },
  {
    id: "h20", title: "City-Kino", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Die nächste Bahn nach Füssen fährt um 10.55 Uhr ab. Sie haben noch etwas Zeit.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Der Parkplatz ist in der Fortunastraße. Dort können Sie Ihr Auto abstellen.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Im City-Kino werden alte Filme gezeigt. Das ist ein nostalgischer Abend.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Das Zugteam bringt Ihnen Südtiroler Käsespezialitäten an Ihren Platz. Guten Appetit!", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Die Frau hat um 15 Uhr einen Arzttermin. Sie muss pünktlich sein.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Die nächste Bahn nach Füssen fährt um 10.55 Uhr ab.", ar:"القطار التالي إلى فوسن ينطلق الساعة 10:55.", story:"أحمد لقى الباركينغ كاين فـ Fortunastraße، ومن بعد مشى للطبيب حيث كان عندو موعد مع الطبيب مع 3 ديال العشية." },
      { n:2, c:"R", de:"Der Parkplatz ist in der Fortunastraße.", ar:"موقف السيارات في شارع فورتونا.", story:"أحمد لقى الباركينغ كاين فـ Fortunastraße، ومن بعد مشى للطبيب حيث كان عندو موعد مع الطبيب مع 3 ديال العشية." },
      { n:3, c:"R", de:"Im City-Kino werden alte Filme gezeigt.", ar:"في سينما سيتي تُعرض أفلام قديمة.", story:"أحمد لقى الباركينغ كاين فـ Fortunastraße، ومن بعد مشى للطبيب حيث كان عندو موعد مع الطبيب مع 3 ديال العشية." },
      { n:4, c:"R", de:"Das Zugteam bringt Ihnen Südtiroler Käsespezialitäten an Ihren Platz.", ar:"فريق القطار يجلب لك تخصصات جبن جنوب تيرول إلى مقعدك.", story:"أحمد لقى الباركينغ كاين فـ Fortunastraße، ومن بعد مشى للطبيب حيث كان عندو موعد مع الطبيب مع 3 ديال العشية." },
      { n:5, c:"R", de:"Die Frau hat um 15 Uhr einen Arzttermin.", ar:"المرأة لديها موعد مع الطبيب الساعة 15:00.", story:"أحمد لقى الباركينغ كاين فـ Fortunastraße، ومن بعد مشى للطبيب حيث كان عندو موعد مع الطبيب مع 3 ديال العشية." }
    ]
  },
  {
    id: "h21", title: "Einkäufe im Internet (المعدل)", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Verstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich erledige alle meine Einkäufe im Internet. Das ist so bequem und ich muss nicht in die Stadt fahren.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Ich lege beim Einkaufen großen Wert auf persönlichen Kontakt. Ich gehe lieber in ein Geschäft und spreche mit den Verkäufern.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Ich finde zu Hause nicht genug Ruhe, um im Internet einzukaufen. Ständig werde ich unterbrochen.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Ich bin vom Einkaufen im Internet nicht überzeugt. Ich habe Angst vor Betrug und schlechter Qualität.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Ich kaufe meine Medikamente am liebsten in der nächsten Stadt. Da kann ich mich beraten lassen.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Der Sprecher erledigt alle seine Einkäufe im Internet.", ar:"المتحدث يقضي جميع مشترياته عبر الإنترنت.", story:"كريم كيقضي كاع التقديات ديالو فالإنترنت، ولكن ختو ما كتلقاش فالدار الهدوء الكافي باش تشري من الإنترنت." },
      { n:2, c:"R", de:"Die Sprecherin legt beim Einkaufen großen Wert auf persönlichen Kontakt.", ar:"المتحدثة تعطي قيمة كبيرة للتواصل الشخصي عند التسوق.", story:"كريم كيقضي كاع التقديات ديالو فالإنترنت، ولكن ختو ما كتلقاش فالدار الهدوء الكافي باش تشري من الإنترنت." },
      { n:3, c:"R", de:"Die Sprecherin findet zu Hause nicht genug Ruhe, um im Internet einzukaufen.", ar:"المتحدثة لا تجد الهدوء الكافي في المنزل للتسوق عبر الإنترنت.", story:"كريم كيقضي كاع التقديات ديالو فالإنترنت، ولكن ختو ما كتلقاش فالدار الهدوء الكافي باش تشري من الإنترنت." },
      { n:4, c:"R", de:"Die Sprecherin ist vom Einkaufen im Internet nicht überzeugt.", ar:"المتحدثة غير مقتنعة بالتسوق عبر الإنترنت.", story:"كريم كيقضي كاع التقديات ديالو فالإنترنت، ولكن ختو ما كتلقاش فالدار الهدوء الكافي باش تشري من الإنترنت." },
      { n:5, c:"R", de:"Der Sprecher kauft seine Medikamente am liebsten in der nächsten Stadt.", ar:"المتحدث يفضل شراء أدويته من المدينة القريبة.", story:"كريم كيقضي كاع التقديات ديالو فالإنترنت، ولكن ختو ما كتلقاش فالدار الهدوء الكافي باش تشري من الإنترنت." }
    ]
  },
  {
    id: "h22", title: "Radwege (المعدل)", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich sehe in Radwegen klare Vorteile. Sie machen das Radfahren sicherer und fördern die Gesundheit.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Ich wünsche mir mehr Radwege in meiner Stadt. Das würde den Verkehr entlasten.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Ich halte Radwege für überflüssig. Fahrradfahrer können auch auf der Straße fahren.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Ich bin der Meinung, dass Radfahrer auf der Straße den Verkehr behindern. Sie sind oft langsam.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Ich finde, dass Radwege das Radfahren sicherer machen. Besonders für Kinder ist das wichtig.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Der Sprecher sieht in Radwegen klare Vorteile", ar:"المتحدث يرى في مسارات الدراجات مزايا واضحة.", story:"حميد كيشوف بلي طرقان البيسكليت فيهم فوايد واضحة، حيت مالين البيسكليتات فالشارع كيعرقلو السير، وهاد الطرقان كيخليو الركوب ديال البيسكليت آمن كثر." },
      { n:2, c:"R", de:"Die Sprecherin wünscht sich mehr Radwege in ihrer Stadt.", ar:"المتحدثة تتمنى المزيد من مسارات الدراجات في مدينتها.", story:"حميد كيشوف بلي طرقان البيسكليت فيهم فوايد واضحة، حيت مالين البيسكليتات فالشارع كيعرقلو السير، وهاد الطرقان كيخليو الركوب ديال البيسكليت آمن كثر." },
      { n:3, c:"F", de:"Die Sprecherin hält Radwege für überflüssig.", ar:"المتحدثة تعتبر مسارات الدراجات غير ضرورية.", story:"حميد كيشوف بلي طرقان البيسكليت فيهم فوايد واضحة، حيت مالين البيسكليتات فالشارع كيعرقلو السير، وهاد الطرقان كيخليو الركوب ديال البيسكليت آمن كثر." },
      { n:4, c:"R", de:"Der Sprecher ist der Meinung, dass Radfahrer auf der Straße den Verkehr behindern.", ar:"المتحدث يرى أن راكبي الدراجات على الطريق يعيقون حركة المرور.", story:"حميد كيشوف بلي طرقان البيسكليت فيهم فوايد واضحة، حيت مالين البيسكليتات فالشارع كيعرقلو السير، وهاد الطرقان كيخليو الركوب ديال البيسكليت آمن كثر." },
      { n:5, c:"R", de:"Der Sprecher findet, dass Radwege das Radfahren sicherer machen.", ar:"المتحدث يرى أن مسارات الدراجات تجعل ركوب الدراجات أكثر أماناً.", story:"حميد كيشوف بلي طرقان البيسكليت فيهم فوايد واضحة، حيت مالين البيسكليتات فالشارع كيعرقلو السير، وهاد الطرقان كيخليو الركوب ديال البيسكليت آمن كثر." }
    ]
  },
  {
    id: "h23", title: "Kinder in der Schule (المعدل)", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Für die Sprecherin steht der schulische Erfolg ihrer Kinder nicht an erster Stelle. Wichtiger ist, dass sie sich gut entwickeln.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Die Sprecherin ist immer für ihre Kinder da. Sie unterstützt sie, egal was passiert.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Die Sprecherin glaubt nicht, dass sie mehr mit ihrer Tochter sprechen müsste. Sie verstehen sich gut.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Der Sprecher achtet sehr auf die Ernährung seiner Kinder. Sie sollen gesund aufwachsen.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Der Sprecher möchte, dass sein Kind die eigenen Ideen realisieren kann. Das ist ihm wichtig.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Für die Sprecherin steht der schulische Erfolg ihrer Kinder nicht an erster Stelle.", ar:"بالنسبة للمتحدثة، النجاح المدرسي لأطفالها ليس في المقام الأول.", story:"الأب ديما كيكون حاضر مع ولادو، وكيهتم بالتغذية ديالهم باش يبقاو بصحة مزيانة، وفنفس الوقت كيشجع كل طفل يحقق الأفكار ديالو." },
      { n:2, c:"R", de:"Die Sprecherin ist immer für ihre Kinder da.", ar:"المتحدثة دائماً موجودة من أجل أطفالها.", story:"الأب ديما كيكون حاضر مع ولادو، وكيهتم بالتغذية ديالهم باش يبقاو بصحة مزيانة، وفنفس الوقت كيشجع كل طفل يحقق الأفكار ديالو." },
      { n:3, c:"F", de:"Die Sprecherin glaubt, dass sie mehr mit ihrer Tochter sprechen müsste.", ar:"المتحدثة تعتقد أنه يجب عليها التحدث أكثر مع ابنتها.", story:"الأب ديما كيكون حاضر مع ولادو، وكيهتم بالتغذية ديالهم باش يبقاو بصحة مزيانة، وفنفس الوقت كيشجع كل طفل يحقق الأفكار ديالو." },
      { n:4, c:"R", de:"Der Sprecher achtet sehr auf die Ernährung seiner Kinder.", ar:"المتحدث يهتم كثيراً بتغذية أطفاله.", story:"الأب ديما كيكون حاضر مع ولادو، وكيهتم بالتغذية ديالهم باش يبقاو بصحة مزيانة، وفنفس الوقت كيشجع كل طفل يحقق الأفكار ديالو." },
      { n:5, c:"R", de:"Der Sprecher möchte, dass sein Kind die eigenen Ideen realisieren kann.", ar:"المتحدث يريد أن يتمكن طفله من تحقيق أفكاره الخاصة.", story:"الأب ديما كيكون حاضر مع ولادو، وكيهتم بالتغذية ديالهم باش يبقاو بصحة مزيانة، وفنفس الوقت كيشجع كل طفل يحقق الأفكار ديالو." }
    ]
  },
  {
    id: "h24", title: "Urlaub (المعدل)", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich bin als Kind mit meiner Familie nie in Urlaub gefahren. Wir hatten einfach kein Geld dafür.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Ich hatte als Kind andere Urlaubswünsche als meine Eltern. Ich wollte unbedingt ans Meer.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Die Sprecherin fand die Fahrt in die Ferien immer aufregend. Es war ein Abenteuer.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Die Sprecherin hat immer mit ihren Eltern Urlaub gemacht. Das war schön.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Ich habe den Urlaub mit den Eltern gemeinsam geplant. Wir haben zusammen entschieden.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Der Sprecher ist als Kind mit seiner Familie nie in Urlaub gefahren.", ar:"المتحدث لم يسافر مع عائلته في عطلة عندما كان طفلاً.", story:"كريم عمره ما سافر فالعطلة مع العائلة، والولد عندو رغبات أخرى بالنسبة للعطلة، ولكن الوالدين باغين يقضيو العطلة مع أولادهم باش يفرحو كاملين." },
      { n:2, c:"R", de:"Der Sprecher hatte als Kind andere Urlaubswünsche als seine Eltern.", ar:"كان لدى المتحدث رغبات عطلة مختلفة عن والديه عندما كان طفلاً.", story:"كريم عمره ما سافر فالعطلة مع العائلة، والولد عندو رغبات أخرى بالنسبة للعطلة، ولكن الوالدين باغين يقضيو العطلة مع أولادهم باش يفرحو كاملين." },
      { n:3, c:"F", de:"Die Sprecherin fand die Fahrt in die Ferien immer aufregend.", ar:"كانت المتحدثة تجد الرحلة إلى العطلة مثيرة دائماً.", story:"كريم عمره ما سافر فالعطلة مع العائلة، والولد عندو رغبات أخرى بالنسبة للعطلة، ولكن الوالدين باغين يقضيو العطلة مع أولادهم باش يفرحو كاملين." },
      { n:4, c:"F", de:"Die Sprecherin hat immer mit ihren Eltern Urlaub gemacht.", ar:"كانت المتحدثة تذهب دائماً في عطلة مع والديها.", story:"كريم عمره ما سافر فالعطلة مع العائلة، والولد عندو رغبات أخرى بالنسبة للعطلة، ولكن الوالدين باغين يقضيو العطلة مع أولادهم باش يفرحو كاملين." },
      { n:5, c:"R", de:"Der Sprecher hat den Urlaub mit den Eltern gemeinsam geplant.", ar:"خطط المتحدث للعطلة مع والديه معاً.", story:"كريم عمره ما سافر فالعطلة مع العائلة، والولد عندو رغبات أخرى بالنسبة للعطلة، ولكن الوالدين باغين يقضيو العطلة مع أولادهم باش يفرحو كاملين." }
    ]
  },
  {
    id: "h25", title: "Einzelkind (المعدل)", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Die Sprecherin muss sich oft um ihre Geschwister kümmern. Das ist manchmal anstrengend.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Der Sprecher hat heute ein gutes Verhältnis zu seinem Bruder. Sie helfen sich gegenseitig.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Die Sprecherin wünscht sich, dass ihre Eltern mehr mit ihr unternehmen. Sie fühlt sich manchmal vernachlässigt.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Die Sprecherin wäre gerne Einzelkind. Dann hätte sie mehr Aufmerksamkeit.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Die Sprecherin verbringt nicht gerne Zeit mit ihrem Bruder. Sie findet ihn oft nervig.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Die Sprecherin muss sich oft um ihre Geschwister kümmern.", ar:"المتحدثة يجب أن تعتني بأشقائها كثيراً.", story:"عمر عندو علاقة زوينة مع خوه، ولكن ختو ما كتحبش تدوز الوقت مع خوها، وكتتمنى أن الوالدين يدوزو معاها وقت أكثر باش متحسش بالإهمال." },
      { n:2, c:"R", de:"Der Sprecher hat heute ein gutes Verhältnis zu seinem Bruder.", ar:"المتحدث لديه علاقة جيدة بأخيه اليوم.", story:"عمر عندو علاقة زوينة مع خوه، ولكن ختو ما كتحبش تدوز الوقت مع خوها، وكتتمنى أن الوالدين يدوزو معاها وقت أكثر باش متحسش بالإهمال." },
      { n:3, c:"R", de:"Die Sprecherin wünscht sich, dass ihre Eltern mehr mit ihr unternehmen.", ar:"تتمنى المتحدثة أن يقوم والداها بالمزيد من الأنشطة معها.", story:"عمر عندو علاقة زوينة مع خوه، ولكن ختو ما كتحبش تدوز الوقت مع خوها، وكتتمنى أن الوالدين يدوزو معاها وقت أكثر باش متحسش بالإهمال." },
      { n:4, c:"F", de:"Die Sprecherin wäre gerne Einzelkind.", ar:"المتحدثة تود أن تكون طفلة وحيدة.", story:"عمر عندو علاقة زوينة مع خوه، ولكن ختو ما كتحبش تدوز الوقت مع خوها، وكتتمنى أن الوالدين يدوزو معاها وقت أكثر باش متحسش بالإهمال." },
      { n:5, c:"R", de:"Die Sprecherin verbringt nicht gerne Zeit mit ihrem Bruder.", ar:"المتحدثة لا تحب قضاء الوقت مع أخيها.", story:"عمر عندو علاقة زوينة مع خوه، ولكن ختو ما كتحبش تدوز الوقت مع خوها، وكتتمنى أن الوالدين يدوزو معاها وقت أكثر باش متحسش بالإهمال." }
    ]
  },
  {
    id: "h26", title: "Kinder in der Schule (Kinder / Stelle) (المعدل)", level: "B1", sub: "Teile 1", type: "horen", isPremium: true,
    audio: [
      { text: "Hörverstehen. Teil 1. Sie hören nun 5 kurze Texte. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Für die Sprecherin steht der schulische Erfolg ihrer Kinder nicht an erster Stelle. Wichtiger ist, dass sie sich gut entwickeln.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Die Sprecherin ist immer für ihre Kinder da. Sie unterstützt sie, egal was passiert.", pitch: 0.9, rate: 1.0 },
      { text: "Nummer 43. Die Sprecherin glaubt nicht, dass sie mehr mit ihrer Tochter sprechen müsste. Sie verstehen sich gut.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 44. Der Sprecher achtet sehr auf die Ernährung seiner Kinder. Sie sollen gesund aufwachsen.", pitch: 0.85, rate: 1.0 },
      { text: "Nummer 45. Der Sprecher möchte, dass sein Kind die eigenen Ideen realisieren kann. Das ist ihm wichtig.", pitch: 1.05, rate: 1.0 }
    ],
    items: [
      { n:1, c:"R", de:"Für die Sprecherin steht der schulische Erfolg ihrer Kinder nicht an erster Stelle.", ar:"بالنسبة للمتحدثة، النجاح المدرسي لأطفالها ليس في المقام الأول.", story:"الأب ديما كيكون حاضر مع ولادو، وكيهتم بالتغذية ديالهم باش يبقاو بصحة مزيانة، وفنفس الوقت كيشجع كل طفل يحقق الأفكار ديالو." },
      { n:2, c:"R", de:"Die Sprecherin ist immer für ihre Kinder da.", ar:"المتحدثة دائماً موجودة من أجل أطفالها.", story:"الأب ديما كيكون حاضر مع ولادو، وكيهتم بالتغذية ديالهم باش يبقاو بصحة مزيانة، وفنفس الوقت كيشجع كل طفل يحقق الأفكار ديالو." },
      { n:3, c:"F", de:"Die Sprecherin glaubt, dass sie mehr mit ihrer Tochter sprechen müsste.", ar:"المتحدثة تعتقد أنه يجب عليها التحدث أكثر مع ابنتها.", story:"الأب ديما كيكون حاضر مع ولادو، وكيهتم بالتغذية ديالهم باش يبقاو بصحة مزيانة، وفنفس الوقت كيشجع كل طفل يحقق الأفكار ديالو." },
      { n:4, c:"R", de:"Der Sprecher achtet sehr auf die Ernährung seiner Kinder.", ar:"المتحدث يهتم كثيراً بتغذية أطفاله.", story:"الأب ديما كيكون حاضر مع ولادو، وكيهتم بالتغذية ديالهم باش يبقاو بصحة مزيانة، وفنفس الوقت كيشجع كل طفل يحقق الأفكار ديالو." },
      { n:5, c:"R", de:"Der Sprecher möchte, dass sein Kind die eigenen Ideen realisieren kann.", ar:"المتحدث يريد أن يتمكن طفله من تحقيق أفكاره الخاصة.", story:"الأب ديما كيكون حاضر مع ولادو، وكيهتم بالتغذية ديالهم باش يبقاو بصحة مزيانة، وفنفس الوقت كيشجع كل طفل يحقق الأفكار ديالو." }
    ]
  }
];
