// ==========================================
// data-b1.js — الدروس + الترجمة (نسخة مصححة نهائية)
// ==========================================

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

var t = function(key, lang) {
  if (UI_TEXTS[lang] && UI_TEXTS[lang][key]) return UI_TEXTS[lang][key];
  if (UI_TEXTS.en[key]) return UI_TEXTS.en[key];
  return key;
};

var WA = "212600000000";
var wa = function(x) { return window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(x), "_blank"); };

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
  return { id: "sch" + (i + 4), title: title, level: "B1", isPremium: true, text: "", task: "", points: [] };
});

var SCHREIBEN_DATA = [
  {
    id: "sch1", title: "Urlaub Im Schwarzwald - Antwort An Petra", level: "B1", isPremium: false,
    text: "Liebe(r).......\n\nIch habe eine tolle Überraschung. stelle dir vor, was mir mein Onkel angeboten hat. Er rief mich am Samstag an. Er hat ein großes Ferienhaus im Schwarzwald. Das Haus kann ich für die Ferien kostenlos haben. Ich kann auch Freunde mitbringen! Wäre das nichts für uns? Wir könnten uns alle dort treffen. Du, deine Eltern und Freunde, und ich mit meiner Familie und meinen Freunden. Ich würde mich wahnsinnig freuen, wenn das klappen würde. Bitte schreibe mir so schnell du kannst, damit wir alles planen können. Urlaub im Schwarzwald - das wird traumhaft schön!\n\nHerzliche Grüße\nPetra",
    task: "Antworten Sie auf den Brief. Schreiben Sie etwas zu den folgenden Punkten:",
    points: ["Warum Sie gern nach Deutschland kommen möchten?", "Wie Sie anreisen wollen?", "Was Sie gemeinsam machen könnten?", "Wen Sie mitbringen möchten?"]
  },
  {
    id: "sch2", title: "Eva - Traumberuf Und Neuigkeiten", level: "B1", isPremium: false,
    text: "Liebe(r).......\n\nwie geht es denn so mit dem Deutsch lernen? Kommst du gut voran, und was machst du im Moment so? Stell dir vor, ich habe die neue Stelle bei der Zeitschrift VIA bekommen! ich arbeite jetzt als Journalistin, und das war ja immer mein Traumberuf!\n\nVIA wird vor allem von jüngeren Leuten gelesen. Deshalb schreiben wir viel über Berufe und Ausbildungen und auch über Freizeit und Sport. Für die nächsten Hefte von VIA planen wir jetzt eine neue Serie über Berufs wünsche. Was ist eigentlich dein Traumberuf? Wenn du möchtest, schicke ich dir gerne einmal ein Gratisheft von VIA, damit du siehst, was ich so mache.\n\nIch freue mich schon auf deine Antwort.\n\nHerzliche Grüße\nEva",
    task: "Schreiben Sie Ihrer Bekannten nun einen Antwortbrief, der die folgenden Punkte enthält:",
    points: ["Fortschritte beim Deutsch Lernen", "Auf Evas neue Stelle reagieren", "Was es Neues bei Ihnen gibt", "Ihr Traumberuf"]
  },
  {
    id: "sch3", title: "TIKKI TAKKA - Beschwerde", level: "B2", isPremium: false,
    text: "Das Party-Abenteuer für Kinder!\nErleben Sie spannende Kinder-Partys mit TIKKI TAKKA!\n\nAbenteuerliche Spiele und lustige Party-Animation, Spaßige Schatzsuchen und spannende Entdeckungsreisen, Zauberer, Clowns und Kinderschminken, Tolle Party-Pakete für unvergessliche Erlebnisse.\nTOLLE AKTIONSPREISE!\n\nAbenteuer TIKKI TAKKA\nBirkenweg 5, 12345 Beispielstadt\nwww.tikki-takka.de\n+49 1234 567890\n\nSie haben bei der Firma Abenteuer TIKKI TAKKA eine Schatzsuche für den Geburtstag Ihres Kindes gebucht. Trotz günstiger Preise war die Geburtstagsfeier nicht so schön wie erwartet und Sie sind nicht damit zufrieden. Schreiben Sie eine Beschwerde und gehen Sie dabei auf die genannten Punkte ein.",
    task: "Schreiben Sie eine Antwort. Behandeln Sie folgende Punkte:",
    points: ["Mit welchem Angebot waren Sie nicht zufrieden?", "Erklären Sie, warum das Angebot nicht begeistert hat.", "Vorschläge für Verbesserungen: Was könnte TIKKI TAKKA Ihrer Meinung nach besser machen?"]
  }
].concat(__schreibenPremium);

// ==========================================
// EXAMS
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
  { sub: "Teile 1", type: "headings", suf: "t1" }, { sub: "Teile 2", type: "mcq", suf: "t2" },
  { sub: "Teile 3", type: "matching", suf: "t3" }, { sub: "Sprach 1", type: "sprach1", suf: "sp1" },
  { sub: "Sprach 2", type: "sprach2", suf: "sp2" }
];

var __examsPremium = [];
__examsPremiumLessons.forEach(function(l) {
  __examsPremiumParts.forEach(function(p) {
    __examsPremium.push({ id: l.slug + "-" + p.suf, title: l.title, level: "B1", sub: p.sub, type: p.type, isPremium: true });
  });
});

var __examsMain = [
  {
    id:"alex-t1", title:"Alex Und Cora", level:"B1", sub:"Teile 1", type:"headings", isPremium: false,
    options:[
      {k:"a", de:"Eltern trotz Kritik mit der Schule zufrieden"}, {k:"b", de:"Elektromobilität für Angestellte"},
      {k:"c", de:"STÄRKUNG VON BUS UND BAHN"}, {k:"d", de:"Schule und Umweltschutz"},
      {k:"e", de:"Bald keine Firmenwagen mehr?"}, {k:"f", de:"Ticketpreise bei der Bahn"},
      {k:"g", de:"Lehrerberuf wird immer attraktiver"}, {k:"h", de:"Engagement für die Natur"},
      {k:"i", de:"Preissenkungen bei Bus, Straßenbahn und U-Bahn!"}, {k:"j", de:"ZU WENIG LEHRER - STADT REAGIERT"}
    ],
    items:[
      {n:1, c:"b", de:"Sie haben Mitarbeiter, die gern mit dem Fahrrad zur Arbeit kommen? Warum dann nicht mehr E-Bikes leasen statt nur teure Firmenwagen?"},
      {n:2, c:"h", de:"NaturVerband ist der größte Umweltverband in Deutschland. Er engagiert sich für Umwelt- und Tierschutz."},
      {n:3, c:"f", de:"Die Bahn erhöht dieses Jahr die Ticketpreise nicht. Günstiger werden außerdem die Tickets im öffentlichen Nahverkehr."},
      {n:4, c:"a", de:"Vergangenen Monat wurden etwa tausend Eltern befragt. Dabei sagten 80%, dass die Schule gut oder sogar sehr gut sei."},
      {n:5, c:"j", de:"Berlin. In der Hauptstadt herrscht weiterhin Lehrermangel: Tausende Lehrkräfte fehlen. Daher plant der Berliner Senat eine Werbekampagne."}
    ]
  },
  {
    id:"alex-t2", title:"Alex Und Cora", level:"B1", sub:"Teile 2", type:"mcq", isPremium: false,
    paragraphs: [
      { de: "Egal ob Hund, Katze oder Maus: Haustiere sind in Deutschland sehr beliebt." },
      { de: "In deutschen Haushalten gibt es rund 34 Millionen Haustiere. Besonders Katzen sind sehr beliebt." },
      { de: "Der Hundeexperte Marius Klotz sieht es kritisch: Wichtig sind klare Regeln, die der Hund verstehen kann." }
    ],
    items:[
      { n:1, c:"C", q:"Die Hundebesitzerin Elli Herfeld", opts:[
        {k:"A", de:"feiert ihren Geburtstag immer mit ihrem Hund."},
        {k:"B", de:"sieht ihren Hund als festes Familienmitglied."},
        {k:"C", de:"backt ihrem Hund zum Geburtstag einen Kuchen."}
      ]},
      { n:2, c:"A", q:"In Seniorenheimen gibt es oft Tiere, damit", opts:[
        {k:"A", de:"die Senioren etwas tun, was gut für sie ist."},
        {k:"B", de:"sie auf die älteren Menschen aufpassen."},
        {k:"C", de:"die Senioren mehr spazieren gehen."}
      ]},
      { n:3, c:"A", q:"Bettina Schröther …", opts:[
        {k:"A", de:"verbringt die ganze Freizeit mit ihrem Hund."},
        {k:"B", de:"macht mit ihrem Hund regelmäßig Wellnessurlaube."},
        {k:"C", de:"lässt ihren Hund in einer Hundeschule erziehen."}
      ]},
      { n:4, c:"C", q:"Nach Meinung von Hundeexperte Marius Klotz sollte man", opts:[
        {k:"A", de:"sich zur Ernährung des Tiers beraten lassen."},
        {k:"B", de:"seinen Hund immer gut behandeln."},
        {k:"C", de:"die Regeln bei der Hundeerziehung beachten."}
      ]}
    ]
  },
  {
    id:"alex-t3", title:"Alex Und Cora", level:"B1", sub:"Teile 3", type:"matching", isPremium: false,
    ads:[
      {k:"A", t:"Café Simon", de:"Hausgemachte Pralinen, Kuchen, Torten und Eis"},
      {k:"B", t:"Tourismusschulen", de:"Höhere Lehranstalt, Hotelhandelsschule, Tourismusfachschule"},
      {k:"C", t:"Liederbühne Robinson", de:"Kleinkunst, Vegetarische Spezialitäten"},
      {k:"D", t:"Interkulturelle Arbeit", de:"Berufsbegleitende Fortbildung für Fachkräfte"},
      {k:"E", t:"Restaurantcafé Chesa W. Pressl", de:"Schweizer und bayerische Küche, Fischspezialitäten"},
      {k:"F", t:"BIZ (Berufsinformationszentrum)", de:"Informationen zu Ausbildung und Studium"},
      {k:"G", t:"Abendkurs für Einsteiger", de:"Computer Grundwissen"},
      {k:"H", t:"MortizCafé", de:"Kaffee so viel du willst"},
      {k:"I", t:"Bachls Kerzenstub'n", de:"TANZEN + ESSEN, Live-Musik mit TANZ"},
      {k:"J", t:"Internationales Studium", de:"Fremdsprachen + Betriebswirtschaft, B.A. in European Administration"},
      {k:"K", t:"USA-Aufenthalt für Schüler", de:"Ein Schuljahr an einer High School"},
      {k:"L", t:"Samstagswerkstatt", de:"Aufbau des Autos, Reparatur und Pflege"}
    ],
    items:[
      {n:1, c:"H", de:"Sie verbringen gern viele Stunden im Cafe, wollen aber nicht viel Geld ausgeben."},
      {n:2, c:"G", de:"Sie haben gerade den Beruf gewechselt und brauchen für die neue Aufgabe Grundkenntnisse für die Arbeit am Computer."},
      {n:3, c:"D", de:"Sie arbeiten in einem Krankenhaus und haben dort häufig mit Patienten aus aller Welt zu tun. Sie möchten für diese Arbeit noch besser qualifiziert sein."},
      {n:4, c:"X", de:"Sie möchten gern einen Tanzkurs für Anfänger besuchen. Sie haben nur abends Zeit."},
      {n:5, c:"J", de:"Sie möchten beruflich etwas mit Fremdsprachen machen. Deshalb wollen Sie im Ausland studieren um später vielleicht auch dort zu arbeiten."},
      {n:6, c:"A", de:"Sie wollen mit einem Bekannten einen gemütlichen Nachmittag in der Stadt verbringen. Sie wissen, dass Ihr Bekannter am Liebsten süße Sachen isst."},
      {n:7, c:"I", de:"Ihr Freund aus den USA ist zu Besuch. Er ist Weinkenner und möchte europäische Weine probieren."},
      {n:8, c:"X", de:"In Ihrer Freizeit möchten Sie sich mit anderen Ländern, fremden Kulturen und Traditionen beschäftigen."},
      {n:9, c:"F", de:"Die Tochter Ihrer Freunde hat gerade Abitur gemacht und ist nicht sicher, was sie später machen will. Sie braucht Informationen und Beratung."},
      {n:10, c:"C", de:"Sie möchten mit Freunden in einem Lokal mit Unterhaltungsprogramm essen. Ihre Freunde essen aber weder Fleisch noch Fisch."}
    ]
  },
  {
    id:"alex-sp1", title:"Alex Und Cora", level:"B1", sub:"Sprach 1", type:"sprach1", isPremium: false,
    text: "Schaffhausen, den...\nHallo Isabelle,\nwie geht es dir? Hast du deine Prüfungen geschafft?\nWie du ja weißt, .....(1)..... ich seit zwei Monaten in einem Altersheim .....(2)..... der Nähe von Schaffhausen. Die Arbeit in .....(3)..... Haus gefällt mir gut, obwohl es manchmal auch sehr stressig ist. Besonders schön ist der enge .....(4)..... zu einigen der alten Menschen. Eine Frau, Anna Ringier, mag ich .....(5)..... gern. Sie ist schon 96 Jahre alt und sitzt im Rollstuhl, aber sie ist immer fröhlich. Gestern hat sie mir .....(6)..... ganzes Leben erzählt. Sie hat bis zum 84. Lebensjahr .....(7)..... gearbeitet. Schon als achtjähriges Mädchen musste sie bei einem Bauern arbeiten, .....(8)..... ihre Eltern die neunköpfige Familie nicht ernähren konnten. Später arbeitete Anna als Schneiderin.\nNeben ihrer Arbeit hat Anna .....(9)..... auf eine Sache nie verzichtet: das Bergsteigen! Das war immer ihre große Leidenschaft. Diese Frau ist wirklich sehr beeindruckend!\nAber du .....(10)..... bestimmt auch viel erlebt. Ich würde mich sehr freuen, wenn du mir bald wieder einmal schreibst!\nHerzliche Grüße\ndeine Julie",
    items:[
      {n:1, c:"arbeite", opts:["arbeite","arbeiten","arbeiteten"]},
      {n:2, c:"in", opts:["auf","bei","in"]},
      {n:3, c:"diesem", opts:["diesem","diesen","dieses"]},
      {n:4, c:"Kontakt", opts:["Kontakt","Kontakte","Kontakten"]},
      {n:5, c:"besonders", opts:["besondere","besonderes","besonders"]},
      {n:6, c:"ihr", opts:["ihr","ihre","ihres"]},
      {n:7, c:"hart", opts:["hart","harte","härter"]},
      {n:8, c:"weil", opts:["daher","deshalb","weil"]},
      {n:9, c:"aber", opts:["aber","als","wie"]},
      {n:10, c:"hast", opts:["bist","hast","wirst"]}
    ]
  },
  {
    id:"alex-sp2", title:"Alex Und Cora", level:"B1", sub:"Sprach 2", type:"sprach2", isPremium: false,
    wordBank:[{k:"a",w:"an"},{k:"b",w:"Bekannte"},{k:"c",w:"bereits"},{k:"d",w:"dafür"},{k:"e",w:"darüber"},{k:"f",w:"dass"},{k:"g",w:"Familie"},{k:"h",w:"kann"},{k:"i",w:"mich"},{k:"j",w:"mit"},{k:"k",w:"muss"},{k:"l",w:"ob"},{k:"m",w:"sehr"},{k:"n",w:"was"},{k:"o",w:"welche"}],
    text: "Sehr geehrte Damen und Herren,\n\nnachdem ich Ihr Inserat gelesen habe, möchte ich .....(1)..... gern genauer über Ihr Restaurant informieren. In einem Monat feiere ich meinen 30. Geburtstag und möchte dazu viele Freunde und .....(2)..... einladen. .....(3)..... wäre Ihr Hotel sicher sehr gut geeignet. Deshalb noch einige Fragen .....(4)..... Sie: Ich rechne ungefähr mit 25 Personen. Wie hoch ist die Miete für den passenden Raum und .....(5)..... Gerichte können Sie mir empfehlen? Da fast alle Gäste mit dem Auto kommen werden, wäre es auch wichtig, .....(6)..... genügend Parkplätze vorhanden sind.\n\nEs wäre .....(7)..... freundlich von Ihnen, wenn Sie mir möglichst bald Bescheid geben könnten, damit ich die Einladungen verschicken .....(8)...... Bitte senden Sie mir einen Prospekt Ihres Hotels .....(9)..... genauer Wegbeschreibung. Sollten Ihre Räume für den Monat Mai .....(10)..... ausgebucht sein, geben Sie mir bitte umgehend Bescheid.\n\nMit freundlichen Grüßen\nBarbara Heuberger",
    items:[{n:1, c:"mich"},{n:2, c:"Bekannte"},{n:3, c:"dafür"},{n:4, c:"an"},{n:5, c:"welche"},{n:6, c:"dass"},{n:7, c:"sehr"},{n:8, c:"kann"},{n:9, c:"mit"},{n:10, c:"bereits"}]
  },
  {
    id:"rita-t1", title:"Rita", level:"B1", sub:"Teile 1", type:"headings", isPremium: false,
    options:[
      {k:"a", de:"Japanische Studie: Vielschläfer leben länger"}, {k:"b", de:"USA: Nachfrage nach funktionellen Lebensmitteln geht zurück"},
      {k:"c", de:"Studie zeigt: Heiraten macht dick"}, {k:"d", de:"Die Mehrheit der Schweizer treibt aktiv Sport"},
      {k:"e", de:"Neu im Trend: Jung und Gesund - mit Schokolade"}, {k:"f", de:"Schweizer sollen gesünder leben"},
      {k:"g", de:"Statistik: Unverheiratete haben oft ein paar Kilos zu viel"}, {k:"h", de:"Teures Essen für mehr Jugend und Schönheit"},
      {k:"i", de:"Weniger schlafen - länger leben"}, {k:"j", de:"Schokolade essen - jung bleiben"}
    ],
    items:[
      {n:1, c:"h", de:"Du bist, was du isst, hat als Slogan ausgedient. Heute muss es heißen: Gut aussehen mit dem richtigen Essen. Dort kaufen bereits viele Leute neue teure Lebensmittel, die jüngeres Aussehen versprechen."},
      {n:2, c:"c", de:"Frisch verheiratete Paare nehmen oft schon in den Flitterwochen einige Kilos zu, weil sie ihre Essgewohnheiten ändern."},
      {n:3, c:"e", de:"Der Schokolade-Boom hat nun auch die Schönheitsindustrie erreicht. Vom 16. Januar bis zum 24. Februar bietet das Grand Hotel Bad Ragaz unter dem Namen Choco Therapy Behandlungen mit Schokolade an."},
      {n:4, c:"f", de:"Nach dem Motto „beschwingt und bewegt“ starten die Schweizer Gesundheitsbehörden eine landesweite Bewegungskampagne. Dabei soll die Schweizer Bevölkerung aufgerufen werden, ausgewogen zu essen und sich täglich zu bewegen."},
      {n:5, c:"i", de:"Wer acht Stunden und länger schläft, hat eine deutlich kürzere Lebenserwartung. Das berichtete das Apothekenmagazin Gesundheit und bezog sich auf eine neue japanische Studie."}
    ]
  },
  {
    id:"rita-t2", title:"Rita", level:"B1", sub:"Teile 2", type:"mcq", isPremium: false,
    paragraphs: [
      { de: "Endlich wird der Traum von Louis Palmer wahr: Der Schweizer startet mit seinem Auto, das mit Sonnenenergie fährt, zur Weltumrundung." },
      { de: "Entwickelt für mich ein Fahrzeug für eine Weltreise, die mit Sonnenenergie fährt, forderte Louis Palmer Studenten auf. Heute ist das Auto fertig: ein dreirädriges Fahrzeug mit zwei Sitzplätzen." },
      { de: "Phase eins begann mit 23 Jahren: Er zog aus, um 50 Länder auf allen Kontinenten zu bereisen: Anstatt an die Uni zu gehen, habe ich die Welt studiert." }
    ],
    items:[
      { n:1, c:"C", q:"Mit 23 Jahren wollte Louis Palmer", opts:[
        {k:"A", de:"für Studenten Reisen nach Südamerika organisieren"},
        {k:"B", de:"mit dem Fahrrad durch 50 verschiedene Länder fahren"},
        {k:"C", de:"viele verschiedene Länder kennen lernen"}
      ]},
      { n:2, c:"C", q:"Sein Projekt konnte Palmer realisieren,", opts:[
        {k:"A", de:"weil er einen Preis von einer Universität gewonnen hat"},
        {k:"B", de:"weil er finanzielle Unterstützung von vier Universitäten erhalten hat."},
        {k:"C", de:"weil ihn Firmen und Universitäten unterstützt haben"}
      ]},
      { n:3, c:"A", q:"Palmers Auto", opts:[
        {k:"A", de:"fährt mit alternativer Energie"},
        {k:"B", de:"geht auf eine dreijährige Weltreise"},
        {k:"C", de:"hat genug Platz für sieben Personen"}
      ]},
      { n:4, c:"A", q:"Louis Palmer", opts:[
        {k:"A", de:"wird sich in nächster Zeit nicht langweilen"},
        {k:"B", de:"möchte mit seinem Auto nicht durch Großstädte fahren"},
        {k:"C", de:"hat für die Weltreise sechs Sprachen gelernt"}
      ]},
      { n:5, c:"C", q:"Schon als Jugendlicher", opts:[
        {k:"A", de:"baute Louis an einem umweltfreundlichen Auto"},
        {k:"B", de:"wollte Louis etwas für die Umwelt tun."},
        {k:"C", de:"wusste Louis genau, wie er sein Leben einteilen will"}
      ]}
    ]
  },
  {
    id:"rita-t3", title:"Rita", level:"B1", sub:"Teile 3", type:"matching", isPremium: false,
    ads:[
      {k:"A", t:"Surf & Travel", de:"Kurztrips der Deutschen Bahn"},
      {k:"B", t:"Für den Fernsehfilm", de:"Kleindarsteller und Statisten gesucht"},
      {k:"C", t:"Messejobs", de:"Hostessen und Promoter für Messen"},
      {k:"D", t:"Verkehrsmuseum Erfurt", de:"Mobilität und Technik, Geschichte des Autos"},
      {k:"E", t:"ADAC Urlaub mobil", de:"Berlin plus Autoreise durch Deutschland"},
      {k:"F", t:"Filmclub", de:"Filmvorführungen, Kino"},
      {k:"G", t:"Ökomobil", de:"Garten- und Landschaftsbau, Ausbildung"},
      {k:"H", t:"Jung gebliebener Rentner", de:"Sucht Freizeitpartnerin für Kino, Reisen"},
      {k:"I", t:"Feng Shui für den Garten", de:"Vortragsabend, Beratung"},
      {k:"J", t:"Studentinnen/SchülerInnen gesucht", de:"Betreuung im Kinderferienlager"},
      {k:"K", t:"Gemeinsam schöne Dinge genießen", de:"Akademikerin sucht Partner für Konzerte"},
      {k:"L", t:"Samstagswerkstatt", de:"Aufbau des Autos, Reparatur und Pflege"}
    ],
    items:[
      {n:1, c:"H", de:"Ihre Bekannte ist Mitte dreißig und sucht einen Partner, mit dem sie regelmäßig ins Kino gehen kann."},
      {n:2, c:"I", de:"Sie wollen Ihren Garten verändern und suchen Beratung/Tipps."},
      {n:3, c:"J", de:"Der Sohn Ihrer Freunde hat gerade das Abitur gemacht und sucht im Sommer für zwei Monate einen Job."},
      {n:4, c:"X", de:"Ihr Freund möchte im Nebenjob Gartenarbeiten übernehmen."},
      {n:5, c:"K", de:"Ihr 45-jähriger Onkel sucht eine Partnerin, mit der er zusammen verreisen kann."},
      {n:6, c:"B", de:"Sie möchten gern bei einem Film mitspielen und etwas Geld verdienen."},
      {n:7, c:"D", de:"Der Sohn Ihrer Freunde interessiert sich für die Geschichte des Autos. Am Sonntag wollen Sie ihm etwas Interessantes machen."},
      {n:8, c:"X", de:"Sie suchen eine Stelle und brauchen Tipps für ihre Bewerbungen."},
      {n:9, c:"E", de:"Im Urlaub wollen Sie mit dem Auto eine Reise durch Deutschland machen und suchen ein passendes Angebot."},
      {n:10, c:"L", de:"Ihre Bekannte möchte lernen, wie sie kleinere Reparaturen an ihrem Wagen selbst machen."}
    ]
  },
  {
    id:"rita-sp1", title:"Rita", level:"B1", sub:"Sprach 1", type:"sprach1", isPremium: false,
    text: "Liebe Catherine,\nich hab's geschafft! Endlich habe ich einen Job bekommen. Wie versprochen möchte ich dir gleich .....(1)..... erzählen. Am Anfang .....(2)..... ich ziemlich enttäuscht, weil ich auf meine vielen Bewerbungsschreiben insgesamt .....(3)..... zwei Antworten bekommen habe. Aber zum Glück hat einer davon .....(4).....: Ich werde nun zwei Nachmittage in der Woche als Babysitterin .....(5)..... einer Familie arbeiten, die zwei Kinder hat. Sie sind 3 und 5 Jahre alt und .....(6)..... sind sehr nett. Wir haben in der .....(7)..... Woche bereits Vieles gemeinsam gemacht, sind in den Zoo und .....(8)..... Kindermuseum gegangen. .....(9)..... kann man eine Stadt gar nicht kennenlernen, und es macht mir viel Spaß!\nFür heute wünsche ich dir alles Gute, schreibe mir bald, wie es dir .....(10)..... .\nLiebe Grüße\nDeine Tanja",
    items:[
      {n:1, c:"davon", opts:["dafür","damit","davon"]}, {n:2, c:"war", opts:["bin","habe","war"]},
      {n:3, c:"nur", opts:["doch","nur","schon"]}, {n:4, c:"gepasst", opts:["gepasst","passen","passt"]},
      {n:5, c:"bei", opts:["an","bei","zu"]}, {n:6, c:"beide", opts:["beide","beiden","beides"]},
      {n:7, c:"ersten", opts:["erster","ersten","erstes"]}, {n:8, c:"ins", opts:["im","in","ins"]},
      {n:9, c:"Besser", opts:["Am besten","Besser","Gut"]}, {n:10, c:"geht", opts:["geht","geht's","ging"]}
    ]
  },
  {
    id:"rita-sp2", title:"Rita", level:"B1", sub:"Sprach 2", type:"sprach2", isPremium: false,
    wordBank:[{k:"a",w:"der"},{k:"b",w:"die"},{k:"c",w:"Erst"},{k:"d",w:"geeignet"},{k:"e",w:"gerne"},{k:"f",w:"hätte"},{k:"g",w:"in"},{k:"h",w:"muss"},{k:"i",w:"nach"},{k:"j",w:"noch"},{k:"k",w:"schon"},{k:"l",w:"wann"},{k:"m",w:"wäre"},{k:"n",w:"wenn"},{k:"o",w:"wo"}],
    text: "Ihre Anzeige in der Frankfurter Rundschau\n\nSehr geehrte Frau Herrmann ,\n\nich habe Ihre Anzeige in der Frankfurter Rundschau vom 5. Oktober gelesen und interessiere mich sehr für die 3-Zimmer-Wohnung.\n\nZurzeit wohne ich noch in Krakau (Polen). Demnächst .....(1)..... ich aber aus beruflichen Gründen mit meinem Sohn (3 Jahre) .....(2)..... Frankfurt umziehen. Deshalb suche ich zum 1. November eine Wohnung, .....(3)..... möglichst zentral gelegen sein sollte. Ihre Wohnung .....(4)..... deshalb genau richtig für uns.\n\nIch hätte jedoch noch einige Fragen zu Ihrer Anzeige: Ist die Wohnung auch für Kleinkinder .....(5).....? Und gibt es in der näheren Umgebung einen Spielplatz, .....(6)..... mein Sohn spielen könnte? Außerdem würde ich .....(7)..... wissen, ob die Haltung von Haustieren in .....(8)..... Wohnung erlaubt ist. .....(9)..... es möglich ist, würden wir nämlich gerne unseren Hund mitbringen.\n\nIch danke Ihnen .....(10)..... jetzt für Ihre Antwort und grüße Sie freundlich.\n\nKASIA KLOC",
    items:[{n:1, c:"muss"},{n:2, c:"nach"},{n:3, c:"die"},{n:4, c:"wäre"},{n:5, c:"geeignet"},{n:6, c:"wo"},{n:7, c:"gerne"},{n:8, c:"der"},{n:9, c:"wenn"},{n:10, c:"schon"}]
  },
  {
    id:"caroline-t1", title:"Caroline", level:"B1", sub:"Teile 1", type:"headings", isPremium: false,
    options:[
      {k:"a", de:"Diskussion über Flughafen und Arbeitsplätze"}, {k:"b", de:"Flughafen Frankfurt beliebter Veranstaltungsort"},
      {k:"c", de:"Umwelt und Flughafen: Ein Informationsabend der Bürger"}, {k:"d", de:"Neue Kurse: Museumsführung für junge Väter"},
      {k:"e", de:"Neue Kurse für Kinder"}, {k:"f", de:"Experten gegen Vergrößerung des Flughafens"},
      {k:"g", de:"Demonstration gegen Fluglärm"}, {k:"h", de:"Familienbildung Schwerpunkt Beruf und Familie"},
      {k:"i", de:"Flughafen Frankfurt wird 10 Jahre"}, {k:"j", de:"Neue Kurse: Spiele für Mütter und Kinder"}
    ],
    items:[
      {n:1, c:"b", de:"Der Frankfurter Flughafen erfreut sich bei vielen Firmen als beliebter Ort für Veranstaltungen und Tagungen."},
      {n:2, c:"h", de:"Das neue Halbjahresprogramm der Evangelischen Familienbildungsstätte bringt eine Übersicht. Diesmal steht das Thema Berufstätige Eltern im Mittelpunkt."},
      {n:3, c:"e", de:"Die Volkshochschule Dornbirn bietet in den kommenden Wochen neue Kurse an. Am Mittwoch beginnen zwei Malkurse für Kinder."},
      {n:4, c:"c", de:"Der Frankfurter Flughafen wird weiter ausgebaut. Eine Gruppe von Frankfurter Bürgern lädt zu einem Informationsabend über den Ausbau ein."},
      {n:5, c:"a", de:"Eine Bürgergruppe lädt zu einer öffentlichen Expertenbefragung zum Thema Arbeitsplätze am Frankfurter Flughafen ein."}
    ]
  },
  {
    id:"caroline-t2", title:"Caroline", level:"B1", sub:"Teile 2", type:"mcq", isPremium: false,
    paragraphs: [
      { de: "Anne und Melanie (beide 6) stehen Erzieherinnen mit Vorschlägen hilfreich zur Seite. Sie sind die Problemlöser im Kindergarten." },
      { de: "Im Rahmen dieses Projekts werden in städtischen Kindergärten zwei Wanderstationen mit je drei Multimedia-Computern installiert." },
      { de: "Bevor jedoch die Computer in die Kindergärten kamen, waren die Eltern aufzuklären. Bei manchen Eltern löste das Stichwort Computer akute Ängste aus." },
      { de: "Diese Ängste haben sich inzwischen gelegt und die Erfahrung vor Ort zeigt, dass sie weitgehend überflüssig sind. Die Erzieherinnen achten auch darauf, dass die Kinder nie länger als 15 bis 20 Minuten vor den Computern sitzen, und holen vor allem kreative Software auf den Bildschirm." },
      { de: "Das einsame Dämmern vor dem Computer ist wohl ohnehin eher Sache der Erwachsenen – die Kinder spielen immer zu zweit oder zu dritt an der Maschine. Eva Schilling hat beobachtet, dass die Kinder am Computer sehr friedlich miteinander umgehen, sie helfen sich gegenseitig, es gibt wenig Konflikte." }
    ],
    items:[
      { n:1, c:"A", q:"Das Schulamt hat ein Projekt gestartet, bei dem", opts:[
        {k:"A", de:"Computer in Kindergärten aufgestellt werden."},
        {k:"B", de:"Computerspiele für Vierjährige entwickelt werden sollen."},
        {k:"C", de:"Kinder neue Farbdrucker ausprobieren sollen."}
      ]},
      { n:2, c:"A", q:"Die Kinder", opts:[
        {k:"A", de:"hatten großen Spaß bei dem Projekt."},
        {k:"B", de:"wollten lieber draußen im Freien spielen."},
        {k:"C", de:"wussten nicht, wann sie ins Studio im Netz gehen sollten."}
      ]},
      { n:3, c:"A", q:"Eltern fürchten, dass", opts:[
        {k:"A", de:"der Computer ihren Kindern schadet."},
        {k:"B", de:"ihre Kinder nicht so früh aufstehen können."},
        {k:"C", de:"ihre Kinder vor dem Computer Angst haben."}
      ]},
      { n:4, c:"C", q:"Die Erzieherinnen", opts:[
        {k:"A", de:"arbeiten jeden Tag 15 bis 20 Minuten am Computer."},
        {k:"B", de:"spielen immer mit zwei oder drei Kindern am Computer."},
        {k:"C", de:"wählen für die Kinder die Software aus."}
      ]},
      { n:5, c:"B", q:"Wenn die Kinder am Computer sitzen, dann", opts:[
        {k:"A", de:"gibt es häufig Streit."},
        {k:"B", de:"hilft ein Kind dem anderen."},
        {k:"C", de:"können sich die meisten nicht lange konzentrieren."}
      ]}
    ]
  },
  {
    id:"caroline-t3", title:"Caroline", level:"B1", sub:"Teile 3", type:"matching", isPremium: false,
    ads:[
      {k:"A", t:"Museum der Stadt Füssen", de:"Lechhalde 3 · 87629 Füssen"},
      {k:"B", t:"Franziskaner Stüberl", de:"Gutbürgerliche Allgäuer und Bayerische Küche"},
      {k:"C", t:"Sennerei-Genossenschaft Bayern", de:"Allgäuer Emmentaler, Bergkäse"},
      {k:"D", t:"Sprachen lernen & Leute treffen", de:"Bildungsurlaub für Erwachsene"},
      {k:"E", t:"Jahreskonzert Füssen", de:"Mozart, Klavierkonzert"},
      {k:"F", t:"Das Heimatmuseum Füssen", de:"Montag bis Freitag geöffnet"},
      {k:"G", t:"bonCas", de:"Spezialitätenkäserei"},
      {k:"H", t:"Alfa Sprachreisen", de:"High-School-Programme für 12- bis 18-Jährige"},
      {k:"I", t:"Amadeus", de:"Cafe, Bistro"},
      {k:"J", t:"Free-System", de:"Englisch, Französisch, Intensivkurse"},
      {k:"K", t:"Ritterstub’n", de:"Fischspezialitäten"},
      {k:"L", t:"Alpenrösle", de:"Hotel-Restaurant"}
    ],
    items:[
      {n:1, c:"E", de:"Sie wollen am Wochenende gerne in ein Klavierkonzert gehen."},
      {n:2, c:"F", de:"Sie sind in Füssen und wollen am Montag ins Museum gehen."},
      {n:3, c:"B", de:"Sie sind in Süddeutschland im Urlaub und möchten gerne eine bayerische Spezialität essen."},
      {n:4, c:"K", de:"Sie haben sich mit Bekannten zu einem Fischessen verabredet."},
      {n:5, c:"C", de:"Sie sind in Bayern und wollen Käsespezialitäten einkaufen."},
      {n:6, c:"X", de:"Sie möchten einen Deutschkurs in Wien besuchen."},
      {n:7, c:"H", de:"Ihr 16 jähriger Sohn soll in den Ferien im Ausland Englisch lernen."},
      {n:8, c:"X", de:"Sie interessieren sich für einen Sprachkurs auf CD."},
      {n:9, c:"X", de:"Sie wollen, dass Ihre 10-jährige Tochter in den Ferien eine Fremdsprache lernt."},
      {n:10, c:"L", de:"Eine Bekannte will ihren Geburtstag in einem Restaurant feiern und dort auch übernachten."}
    ]
  },
  {
    id:"caroline-sp1", title:"Caroline", level:"B1", sub:"Sprach 1", type:"sprach1", isPremium: false,
    text: "Liebe Catherine,\nseit ich dir letzte Mal von meinem Sprachhaufenhalt in der Schweiz .....(1)..... habe, ist viel passiert. Ich kenne .....(2)..... Land jetzt schon recht gut. Die Schweiz ist ja wirklich nicht groß. .....(3)..... in jeder Gegend wird ein anderer Dialekt oder gar eine andere Sprache gesprochen. Das ist .....(4)..... mich fast unglaublich! Bei uns in Australien fährt man mit dem Auto 24 Stunden lang geradeaus, und .....(5)..... man ankommt, dann sprechen die Leute dort immer noch dieselbe Sprache. Am Anfang hat mich das Sprachgemisch .....(6)..... sehr verwirrt, aber .....(7)..... verstehe ich fast alles, wenn jemand auf Schweizerdeutsch zu mir spricht. Ich kann aber nur auf Hochdeutsch antworten. Zwischen der Schule hier und unserem Schulsystem in Australien gibt es einige .....(8).....: In der Schweiz sprechen die Lehrer viel und die Schüler .....(9)..... Vieles im Kopf behalten oder aufschreiben. In Australien arbeiten wir meistens im Rahmen von Projekten und machen eigentlich alle Aufgaben auf .....(10)..... Computer.\nViele Grüße\nJack",
    items:[
      {n:1, c:"erzählt", opts:["erzähle","erzählen","erzählt"]}, {n:2, c:"dieses", opts:["diese","diesen","dieses"]},
      {n:3, c:"aber", opts:["aber","obwohl","sondern"]}, {n:4, c:"für", opts:["an","für","vor"]},
      {n:5, c:"wenn", opts:["als","wann","wenn"]}, {n:6, c:"schon", opts:["wenn","ganz","schon"]},
      {n:7, c:"jetzt", opts:["früher","jetzt","seit"]}, {n:8, c:"Unterschiede", opts:["Unterschied","Unterschiede","Unterschieden"]},
      {n:9, c:"müssen", opts:["brauchen","haben","müssen"]}, {n:10, c:"dem", opts:["dem","den","der"]}
    ]
  },
  {
    id:"caroline-sp2", title:"Caroline", level:"B1", sub:"Sprach 2", type:"sprach2", isPremium: false,
    wordBank:[{k:"a",w:"bei"},{k:"b",w:"bereits"},{k:"c",w:"einmal"},{k:"d",w:"Eure"},{k:"e",w:"ganz"},{k:"f",w:"garantieren"},{k:"g",w:"Gestern"},{k:"h",w:"können"},{k:"i",w:"machen"},{k:"j",w:"nur"},{k:"k",w:"statt"},{k:"l",w:"Technisch"},{k:"m",w:"Über"},{k:"n",w:"Unser"},{k:"o",w:"wenn"}],
    text: "QUANTUM-SYSTEM\n\nDas Lotterie – Systemspiel\n\nOtto – Suhr- Allee 100. D- 10120 Berlin\n\nSehr geehrte Lottospieler,\n\nwer möchte nicht auch .....(1)..... bei sechs Richtigen im Lotto dabei sein? Vertrauen Sie beim Lottospiel nicht .....(2)..... auf das Glück, denn Sie .....(3)..... Ihre Chancen selbst stark verbessern, .....(4)..... Sie mit unserem Lotterie-System spielen – und das für nur 5 Euro in der Woche! .....(5)..... allein zu spielen, spielen Sie mit uns in einer starken Spielergemeinschaft. Dadurch erhöhen sich .....(6)..... automatisch Ihre Chancen! Und was Sie gewinnen können? .....(7)..... unserem Quantum-System spielen Sie mit einer Chance auf einen Gewinn von 1 Million Euro! Alle Gewinne erhalten Sie umgehend und ungekürzt zu 100% – das .....(8)..... wir Ihnen!\n\nDavon habe ich mich selbst überzeugt! Spielen Sie mit uns das Quantum-System: .....(9)..... 700 Quantum-Systemspielgruppen haben zusammen schon über sieben Millionen Euro gewonnen.\n\nHerzliche Grüße\nIhre SABINE MEIER-PÜTZ\n\nPS: Als besondere Gewinnchance erhalten Sie heute das Vier-Richtige-Gratisspiel. .....(10)..... Sie hier unbedingt mit und gewinnen Sie! Ich drücke Ihnen die Daumen……",
    items:[{n:1, c:"einmal"},{n:2, c:"nur"},{n:3, c:"können"},{n:4, c:"wenn"},{n:5, c:"statt"},{n:6, c:"ganz"},{n:7, c:"bei"},{n:8, c:"garantieren"},{n:9, c:"Über"},{n:10, c:"machen"}]
  },
  {
    id:"vera-t1", title:"Vera", level:"B1", sub:"Teile 1", type:"headings", isPremium: false,
    options:[
      {k:"a", de:"Abendwanderungen ab 89 Euro"}, {k:"b", de:"Ausflugsziele für Literaturinteressierte"},
      {k:"c", de:"Hinweis für Besucher der Bregenzer Festspiele"}, {k:"d", de:"Ihre Zeitung folgt Ihnen in den Urlaub"},
      {k:"e", de:"Laute Musik stört den Nachbarn"}, {k:"f", de:"Musikveranstaltungen am Nachmittag"},
      {k:"g", de:"Neue Zeitung für Ihre Urlaubsplanung"}, {k:"h", de:"Rekord: 70.000 Besucher im Bücherdorf"},
      {k:"i", de:"Schlechtes Wetter: Festspiele abgesagt"}, {k:"j", de:"Wandern ohne Gepäck"}
    ],
    items:[
      {n:1, c:"d", de:"Wenn Sie verreisen, wünschen wir ihnen erholsame Ferien. Bitte denken Sie daran, sich ihre Zeitung in den Urlaubtort nachsenden zu lassen."},
      {n:2, c:"j", de:"Im Luftkurort Stadtkylf werden dreitägige Wanderungen ohne Gepäck veranstaltet. Die Betriebe übernehmen den Gepäcktransport."},
      {n:3, c:"e", de:"Für den einen ist es musikalischer Hochgenuss für den anderen schlicht Lärm. Die Gemeinde weist auf Mittagsruhe hin."},
      {n:4, c:"b", de:"Das erste deutsche Bücherdorf hat in Mühlbeck seine Tore geöffnet. In acht Antiquariaten warten über 70 000 Bücher."},
      {n:5, c:"c", de:"Die Bregenzer Festspiele sind bemüht, die Vorstellungen auch bei leichtem Regen auf der Seebühne abzuhalten."}
    ]
  }
];

var EXAMS = __examsMain.concat(__examsPremium);

// ==========================================
// HOREN_EXAMS
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
      { n:1, c:"R", de:"Herr Pawliczek erledigt alle seine Einkäufe im Internet.", story:"فاطمة شرات شوية حوايج من التسوق عبر الإنترنت، ومن بعد وصلها الكولي، ولكن السيدة شميدت لقاتهم فالدار وحطاتهم ليها حتى رجعات." },
      { n:2, c:"F", de:"Frau Zimmermann legt beim Einkaufen großen Wert auf persönlichen Kontakt." },
      { n:3, c:"R", de:"Frau Schmidt findet zu Hause nicht genug Ruhe, um im Internet einzukaufen." },
      { n:4, c:"F", de:"Frau Ruttnigg ist vom Einkaufen im Internet nicht überzeugt." },
      { n:5, c:"F", de:"Herr Krause kauft seine Medikamente am liebsten in der nächsten Stadt." }
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
      { n:1, c:"F", de:"Die Sprecherin könnte sich vorstellen, mit dem Bus zur Arbeit zu fahren.", story:"أحمد كيمشي شوية على رجليه كل نهار، حيث هو عمره ما كيمشي بالطوموبيل وكيفضل الحركة." },
      { n:2, c:"R", de:"Die Sprecherin findet es gut, dass sie zur Arbeit ein Stück zu Fuß gehen kann." },
      { n:3, c:"F", de:"Der Sprecher fährt nie mit dem Auto zur Arbeit." },
      { n:4, c:"R", de:"Der Sprecher benutzt für den Weg zur Arbeit zurzeit verschiedene Verkehrsmittel." },
      { n:5, c:"F", de:"Für die Sprecherin ist der Firmenbus die einzige Möglichkeit zur Arbeit zu kommen." }
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
      { n:1, c:"F", de:"Die Sprecherin könnte sich vorstellen, mit dem Bus zur Arbeit zu fahren.", story:"يوسف عمره ما كيمشي بالطوموبيل للخدمة، كيختار الطرام ولا كيمشي على رجليه باش يوفر الفلوس ويدير شوية الرياضة." },
      { n:2, c:"F", de:"Die Sprecherin geht den ganzen Weg zur Arbeit zu Fuß." },
      { n:3, c:"R", de:"Der Sprecher fährt nie mit dem Auto zur Arbeit." },
      { n:4, c:"R", de:"Der Sprecher benutzt für den Weg zur Arbeit zurzeit verschiedene Verkehrsmittel." },
      { n:5, c:"F", de:"Für die Sprecherin ist der Firmenbus die einzige Möglichkeit zur Arbeit zu kommen." }
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
      { n:1, c:"F", de:"Die Sprecherin wünscht sich einen Arbeitsplatz für ihren Vater.", story:"سفيان تلميذ مزيان، وماشي ديما كيقلق القسم، ولكن للأسف العلاقة ديالو ماشي مزيانة مع مو، وهاد الشي كيأثر عليه مرات." },
      { n:2, c:"R", de:"Der Sprecher ist kein besonders guter Schüler." },
      { n:3, c:"R", de:"Die Sprecherin möchte nicht immer gestört werden." },
      { n:4, c:"R", de:"Der Sprecher versteht sich nicht gut mit seiner Mutter." },
      { n:5, c:"F", de:"Die Sprecherin ist am liebsten mit ihren Eltern zusammen." }
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
      { n:1, c:"F", de:"Die Sprecherin wäre lieber ein Einzelkind.", story:"كريم عندو علاقة زوينة مع خوه، ومن صغرو كان خاصو يقرا بكري، وحتى ختو علاقتها ممتازة مع خوها، وديما كيشجعو بعضياتهم." },
      { n:2, c:"R", de:"Der Sprecher hat heute ein gutes Verhältnis zu seinem Bruder." },
      { n:3, c:"F", de:"Die Sprecherin würde heute gern noch eine Schwester haben." },
      { n:4, c:"R", de:"Die Sprecherin hat schon früh lernen müssen, dass man im Zusammenleben viel Rücksicht nehmen muss." },
      { n:5, c:"R", de:"Die Sprecherin versteht sich sehr gut mit ihrem Bruder." }
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
      { n:1, c:"R", de:"Der Sprecher hätte gern Urlaub wie die anderen Kinder gemacht.", story:"مريم كتحب تسافر فالعيطلة، ولكن عطلة المشي فالجبال ما كتعجبهاش بزاف، وكتفضل تدوز العطلة مع الوالدين." },
      { n:2, c:"R", de:"Dem Sprecher hat der Wanderurlaub nicht so gut gefallen." },
      { n:3, c:"F", de:"Die Sprecherin hat die Ferien bei Verwandten verbracht." },
      { n:4, c:"F", de:"Die Sprecherin hat mit ihren Eltern regelmäßig Fahrradausflüge gemacht." },
      { n:5, c:"R", de:"Der Sprecher hat den Urlaub mit den Eltern gemeinsam geplant." }
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
      { n:1, c:"F", de:"Für die Sprechenden ist es unwichtig, ob ihre Kinder in der Schule gut sind.", story:"أي أب وأم خاصهم ديما يكونو مع ولادهم ويساندوهم، وكيتمنّاو ولادهم يعيشو بصحة مزيانة، ويخليو كل طفل يحقق الأفكار والأحلام ديالو." },
      { n:2, c:"R", de:"Der Sprecher findet es wichtig, dass Eltern immer für ihre Kinder da sind." },
      { n:3, c:"F", de:"Die Sprecherin glaubt, dass sie mehr mit ihrer Tochter sprechen müsste." },
      { n:4, c:"R", de:"Es ist dem Sprecher wichtig, dass seine Kinder gesund leben." },
      { n:5, c:"R", de:"Der Sprecher möchte, dass sein Kind die eigenen Ideen realisieren kann." }
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
      { n:1, c:"R", de:"Für den Sprecher haben Radwege Vorteile.", story:"إنشاء مسارات خاصة بالدراجات عندو بزاف ديال الفوائد، حيث كيخلي ركوب الدراجة أكثر أماناً، ولكن كاينين ناس كيشوفو أن هاد المسارات كتعرقل حركة المرور." },
      { n:2, c:"F", de:"Die Sprecherin möchte mehr Radwege." },
      { n:3, c:"F", de:"Die Sprecherin meint, dass Radwege unnötig sind." },
      { n:4, c:"R", de:"Der Sprecher denkt, dass Radfahrer auf der Straße den Verkehr behindern." },
      { n:5, c:"R", de:"Für den Sprecher machen Radwege das Radfahren sicherer." }
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
      { n:1, c:"R", de:"Die Sprecherin ist dagegen, dass Kinder so früh eine Fremdsprache lernen.", story:"بعض الآباء كيشوفو أن الأطفال خاصهم يتعلمو لغة أجنبية من بكري، والأفضل يبداو بها فالمدرسة، ولكن كاين اللي كيشوف أن تعلم لغة أجنبية عندو عيوب بالنسبة لعدد كبير من الأطفال." },
      { n:2, c:"R", de:"Die Sprecherin meint, dass das frühe Lernen einer Fremdsprache für viele Kinder Nachteile hat." },
      { n:3, c:"R", de:"Der Sprecher findet es schade, dass er im Kindergarten keine Fremdsprache lernen konnte." },
      { n:4, c:"R", de:"Die Sprecherin meint, dass das Fremdsprachenlernen erst in der Schule beginnen sollte." },
      { n:5, c:"R", de:"Der Sprecher ist dagegen, dass Kinder schon früh Fremdsprache lernen." }
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
      { n:1, c:"R", de:"Der Sprecher interessiert sich für Sport als für Kultur.", story:"سارة مهتمة بالرياضة أكثر من الثقافة، ولكن كتقدر تمشي للمسرح بزاف ديال المرات، وكتحاول تخصص وقت أكثر للثقافة." },
      { n:2, c:"R", de:"Die Sprecherin geht so oft sie kann ins Theater." },
      { n:3, c:"F", de:"Der Sprecher hört besonders gern moderne Musik." },
      { n:4, c:"F", de:"Die Sprecherin geht oft in Kunstausstellungen." },
      { n:5, c:"R", de:"Die Sprecherin hätte gerne mehr Zeit für die Kultur." }
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
      { n:1, c:"R", de:"Der Sprecher hat zu Hause keinen Computer.", story:"محمد كيرفض يستعمل الكمبيوتر، حيث ما عندوش ثقة كبيرة فالكمبيوترات وكيخاف يعتمد عليهم بزاف." },
      { n:2, c:"F", de:"Der Sprecher benutzt den Computer nur am Arbeitsplatz." },
      { n:3, c:"R", de:"Die Sprecherin lehnt Computer ab." },
      { n:4, c:"R", de:"Die Sprecherin hat kein großes Vertrauen zu Computern." },
      { n:5, c:"F", de:"Die Sprecherin braucht den Computer im täglichen Leben." }
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
      { n:1, c:"F", de:"Der Sprecher könnte sich vorstellen, mit dem Bus zur Arbeit zu fahren.", story:"مراتو ديما عندها الطوموبيل، وهاد الشي علاش هو كيمشي للخدمة بالموتور ديالها." },
      { n:2, c:"F", de:"Die Sprecherin geht gern zu Fuß." },
      { n:3, c:"R", de:"Der Sprecher findet es in Ordnung, dass seine Frau immer das Auto hat." },
      { n:4, c:"F", de:"Die Sprecherin fährt jeden Tag mit ihrem Motorrad zur Arbeit." },
      { n:5, c:"F", de:"Die Sprecherin fährt immer mit dem Fahrrad zur Arbeit." }
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
      { n:1, c:"R", de:"Die Sprecherin fühlt sich durch Handys gestört.", story:"بزاف ديال الناس كيشوفو أن الهواتف كتسبب الإزعاج، وخصوصاً بالنسبة للأطفال، حيث الهواتف ماشي مزيانة للأطفال وكتقدر تأثر عليهم." },
      { n:2, c:"F", de:"Der Sprecher benützt das Handy für Gespräche mit Freunden." },
      { n:3, c:"F", de:"Der Sprecher ruft gerne seine Partnerin mit dem Handy an." },
      { n:4, c:"R", de:"Die Sprecherin findet Handys für Kinder nicht gut." },
      { n:5, c:"F", de:"Der Sprecher hätte auch gern ein Handy." }
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
      { n:1, c:"R", de:"Der Mann sieht sich am liebsten lustige Filme an.", story:"فالعائلة كل واحد عندو الذوق ديالو فالأفلام: الأب كيفضل الأفلام المضحكة، الطفل كيفضل أفلام الجريمة المشوقة، أما الأخت كتفضل أفلام الحب والعائلة." },
      { n:2, c:"R", de:"Die Frau sieht sich am liebsten politische Sendungen an." },
      { n:3, c:"R", de:"Der Mann sieht gern Familienfilme." },
      { n:4, c:"R", de:"Das Kind sieht sich am liebsten spannende Krimis an." },
      { n:5, c:"R", de:"Die Sprecherin sieht sich am liebsten Liebes- und Familienfilme an." }
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
      { n:1, c:"R", de:"Die Sprecherin verbringt ihren Urlaub oft auf dem Land.", story:"العائلة ديال يوسف كيديرو العطلة غالباً فالقرية أو البادية، ولكن هاد المرة مشاو يديرو عطلة فالمدينة فـ فيينا، والأجمل أن العائلة كاملة كانت فالعطلة." },
      { n:2, c:"R", de:"Der Sprecher findet Stadturlaub in Wien interessanter als die Berge." },
      { n:3, c:"R", de:"Die Sprecherin meint, dass sich ihre ganze Familie im Urlaub gut erholt." },
      { n:4, c:"F", de:"Die Sprecherin findet den Urlaub in Österreich langweilig." },
      { n:5, c:"F", de:"Die Sprecherin denkt, dass Österreich vor allem für ältere Menschen interessant ist." }
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
      { n:1, c:"R", de:"Der Sprecher isst nicht mehr so viel Fleisch wie früher.", story:"سارة ولات ما كتاكلش اللحم بزاف، وكتفضل تشري المواد الغذائية من السوبرماركت حيث المواد الغذائية فالسوبرماركيت مراقَبة. ولكن كتحب حتى الأجواء ديال السوق الأسبوعي، وكتحاول ما تصرفش الفلوس على الحوايج اللي ماشي مهمة." },
      { n:2, c:"R", de:"Die Sprecherin ist überzeugt, dass die Lebensmittel in den Supermärkten kontrolliert werden." },
      { n:3, c:"F", de:"Die Sprecherin hat Angst vor Krankheiten, weil die Lebensmittel so schlecht sind." },
      { n:4, c:"R", de:"Dem Sprecher gefällt die Atmosphäre auf dem Wochenmarkt." },
      { n:5, c:"R", de:"Der Sprecher findet, dass die meisten Menschen zu viel Geld für unwichtige Dinge ausgeben." }
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
      { n:1, c:"F", de:"Der Sprecher würde lieber zu Hause bleiben und sich um sein Kind kümmern.", story:"فهاد العائلة إلا ما خدموش بجوج الوالدين، الفلوس ما غاديش تكفي، وداكشي علاش الوالدين بجوج خاصهم يخدمو، ولكن فالنفس الوقت كيبغيو الأطفال تهتم بيهم الأم ديالهم بنفسها." },
      { n:2, c:"R", de:"Die Sprecherin muss arbeiten, weil sonst das Geld nicht reicht." },
      { n:3, c:"R", de:"Der Sprecher findet es nicht gut, wenn beide Eltern arbeiten müssen." },
      { n:4, c:"R", de:"Die Sprecherin ist der Meinung, dass Kinder von der eigenen Mutter betreut werden sollten." },
      { n:5, c:"F", de:"Der Sprecher hat trotz Kindertagesstätte manchmal Probleme bei der Arbeit." }
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
      { n:1, c:"R", de:"Der Zug um 18:16 Uhr fährt direkt nach München.", story:"قبل ما يمشي لـ Füssen-Reutte، كيشوف الطقس تما، ومن بعد كيلقى عرض رخيص بزاف عند شركة Hypersoft." },
      { n:2, c:"R", de:"Sie müssen Frau Meissner noch die Pläne für Ihr Wohnzimmer schicken." },
      { n:3, c:"R", de:"Die Schnellbahn S7 hat den ganzen Tag über Verspätung." },
      { n:4, c:"R", de:"Das Wetter in Füssen-Reutte ist zum Schifahren besser als in Garmisch." },
      { n:5, c:"R", de:"Den Kunden werden heute die Computer der Firma Hypersoft besonders günstig angeboten." }
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
      { n:1, c:"R", de:"Die Sprecherin muss im Haushalt fast alles alleine machen.", story:"أحمد كيدير تقريباً كلشي بوحدو فالدار، ولكن دابا قرر يقسم الأشغال مع الشريكة ديالو باش ما يبقاش عليه كلشي." },
      { n:2, c:"R", de:"Der Sprecher wäscht das Geschirr und die Wäsche." },
      { n:3, c:"R", de:"Die Sprecherin ist berufstätig und hat keine Zeit für die Hausarbeit." },
      { n:4, c:"R", de:"Der Sprecher teilt sich mit seiner Partnerin die Arbeit je nach Situation auf." },
      { n:5, c:"R", de:"Die Sprecherin ist froh, dass ihr Mann so viele Hausarbeiten übernimmt." }
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
      { n:1, c:"R", de:"Die nächste Bahn nach Füssen fährt um 10.55 Uhr ab.", story:"أحمد لقى الباركينغ كاين فـ Fortunastraße، ومن بعد مشى للطبيب حيث كان عندو موعد مع الطبيب مع 3 ديال العشية." },
      { n:2, c:"R", de:"Der Parkplatz ist in der Fortunastraße." },
      { n:3, c:"R", de:"Im City-Kino werden alte Filme gezeigt." },
      { n:4, c:"R", de:"Das Zugteam bringt Ihnen Südtiroler Käsespezialitäten an Ihren Platz." },
      { n:5, c:"R", de:"Die Frau hat um 15 Uhr einen Arzttermin." }
    ]
  }
];
