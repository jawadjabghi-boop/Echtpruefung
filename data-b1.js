// ==========================================
// data-b1.js — الدروس الصحيحة (Alex, Rita, Caroline, Vera) مطابقة للكود القديم
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
  ma: { welcome:"مرحبا بيك", choose_lang:"ختار اللغة ديالك", home:"الرئيسية", lesen:"قراية", horen:"سماع", schreiben:"كتابة", sprechen:"هضرة", pruefung:"امتحان", exam_mode:"نمط الامتحان", practice_mode:"نمط التدريب", banner_title:"تدرب على الامتحان الحقيقي واذهب للحصول عليه!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"الكود الفريد الخاص بك", login:"تسجيل الدخول", guest:"دخول كزائر", support:"الدعم الفني", start_now:"ابدأ الآن", listen_lessons:"دروس الاستماع", search_placeholder:"...بحث عن موضوع", listen_title:"دروس الاستماع", listen_desc:"هنا كتلقى جميع دروس الهورن. اضغط على الزر لبدء الاستماع وحل الأسئلة.", gap_num:"الفراغ", choose_word_gap:"اختر الكلمة للفراغ", story_memo:"قصة للحفظ", check_btn:"تصحيح", next_btn:"التالي", back_btn:"رجوع", reset_btn:"إعادة", coming_soon:"قريباً...", settings:"الإعدادات", change_lang:"تغيير اللغة / Language", text_size:"حجم النص", reset_size:"إعادة الحجم الأصلي", logout:"خروج", whatsapp:"واتساب", lang_note:"اللغة التي تختارها ستبقى معك طوال التطبيق", or:"أو", correct:"✓ صحيح", wrong:"✗ غلط", no_answer:"⚠️ لم تجب", the_answer:"الجواب" },
  ar: { welcome:"مرحباً بك", choose_lang:"اختر لغتك", home:"الرئيسية", lesen:"قراءة", horen:"استماع", schreiben:"كتابة", sprechen:"تحدث", pruefung:"امتحان", exam_mode:"نمط الامتحان", practice_mode:"نمط التدريب", banner_title:"تدرب على الامتحان الحقيقي واذهب للحصول عليه!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"الكود الفريد الخاص بك", login:"تسجيل الدخول", guest:"دخول كزائر", support:"الدعم الفني", start_now:"ابدأ الآن", listen_lessons:"دروس الاستماع", search_placeholder:"...بحث عن موضوع", listen_title:"دروس الاستماع", listen_desc:"هنا كتلقى جميع دروس الهورن. اضغط على الزر لبدء الاستماع وحل الأسئلة.", gap_num:"الفراغ", choose_word_gap:"اختر الكلمة للفراغ", story_memo:"قصة للحفظ", check_btn:"تصحيح", next_btn:"التالي", back_btn:"رجوع", reset_btn:"إعادة", coming_soon:"قريباً...", settings:"الإعدادات", change_lang:"تغيير اللغة / Language", text_size:"حجم النص", reset_size:"إعادة الحجم الأصلي", logout:"خروج", whatsapp:"واتساب", lang_note:"اللغة التي تختارها ستبقى معك طوال التطبيق", or:"أو", correct:"✓ صحيح", wrong:"✗ غلط", no_answer:"⚠️ لم تجب", the_answer:"الجواب" },
  en: { welcome:"Welcome", choose_lang:"Choose language", home:"Home", lesen:"Reading", horen:"Listening", schreiben:"Writing", sprechen:"Speaking", pruefung:"Exam", exam_mode:"Exam Mode", practice_mode:"Practice Mode", banner_title:"Train for the real exam and get it!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Your Unique ID", login:"Login", guest:"Login as Guest", support:"Technical Support", start_now:"Start Now", listen_lessons:"Listening Lessons", search_placeholder:"Search for a topic...", listen_title:"Listening Lessons", listen_desc:"Here you will find all listening lessons. Click the button to start listening and solving questions.", gap_num:"Gap", choose_word_gap:"Choose word for gap", story_memo:"Story to memorize", check_btn:"Check", next_btn:"Next", back_btn:"Back", reset_btn:"Reset", coming_soon:"Coming soon...", settings:"Settings", change_lang:"Change Language", text_size:"Text Size", reset_size:"Reset to original size", logout:"Logout", whatsapp:"WhatsApp", lang_note:"The language you choose will remain with you throughout the app", or:"or", correct:"✓ Correct", wrong:"✗ Wrong", no_answer:"⚠️ No answer", the_answer:"Answer" },
  fr: { welcome:"Bienvenue", choose_lang:"Choisissez la langue", home:"Accueil", lesen:"Lecture", horen:"Écoute", schreiben:"Écriture", sprechen:"Expression orale", pruefung:"Examen", exam_mode:"Mode Examen", practice_mode:"Mode Entraînement", banner_title:"Entraînez-vous pour le vrai examen et obtenez-le !", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Votre identifiant unique", login:"Se connecter", guest:"Entrer en tant qu'invité", support:"Support Technique", start_now:"Commencer", listen_lessons:"Leçons d'écoute", search_placeholder:"Rechercher un sujet...", listen_title:"Leçons d'écoute", listen_desc:"Ici vous trouverez toutes les leçons d'écoute. Cliquez sur le bouton pour commencer à écouter et à répondre aux questions.", gap_num:"Espace", choose_word_gap:"Choisir le mot pour l'espace", story_memo:"Histoire à mémoriser", check_btn:"Vérifier", next_btn:"Suivant", back_btn:"Retour", reset_btn:"Réinitialiser", coming_soon:"Bientôt...", settings:"Paramètres", change_lang:"Changer de langue", text_size:"Taille du texte", reset_size:"Rétablir la taille d'origine", logout:"Déconnexion", whatsapp:"WhatsApp", lang_note:"La langue que vous choisissez restera avec vous tout au long de l'application", or:"ou", correct:"✓ Correct", wrong:"✗ Faux", no_answer:"⚠️ Sans réponse", the_answer:"Réponse" }
};

var t = function(key, lang) {
  if (UI_TEXTS[lang] && UI_TEXTS[lang][key]) return UI_TEXTS[lang][key];
  if (UI_TEXTS.en[key]) return UI_TEXTS.en[key];
  return key;
};

var SCHREIBEN_DATA = [
  { id: "sch1", title: "Urlaub Im Schwarzwald - Antwort An Petra", level: "B1", isPremium: false, text: "Liebe(r).......\n\nIch habe eine tolle Überraschung. stelle dir vor, was mir mein Onkel angeboten hat. Er rief mich am Samstag an. Er hat ein großes Ferienhaus im Schwarzwald. Das Haus kann ich für die Ferien kostenlos haben. Ich kann auch Freunde mitbringen! Wäre das nichts für uns? Wir könnten uns alle dort treffen. Du, deine Eltern und Freunde, und ich mit meiner Familie und meinen Freunden. Ich würde mich wahnsinnig freuen, wenn das klappen würde. Bitte schreibe mir so schnell du kannst, damit wir alles planen können. Urlaub im Schwarzwald - das wird traumhaft schön!\n\nHerzliche Grüße\nPetra", task: "Antworten Sie auf den Brief. Schreiben Sie etwas zu den folgenden Punkten:", points: ["Warum Sie gern nach Deutschland kommen möchten?", "Wie Sie anreisen wollen?", "Was Sie gemeinsam machen könnten?", "Wen Sie mitbringen möchten?"] },
  { id: "sch2", title: "Eva - Traumberuf Und Neuigkeiten", level: "B1", isPremium: false, text: "Liebe(r).......\n\nwie geht es denn so mit dem Deutsch lernen? Kommst du gut voran, und was machst du im Moment so? Stell dir vor, ich habe die neue Stelle bei der Zeitschrift VIA bekommen! ich arbeite jetzt als Journalistin, und das war ja immer mein Traumberuf!\n\nVIA wird vor allem von jüngeren Leuten gelesen. Deshalb schreiben wir viel über Berufe und Ausbildungen und auch über Freizeit und Sport. Für die nächsten Hefte von VIA planen wir jetzt eine neue Serie über Berufs wünsche. Was ist eigentlich dein Traumberuf? Wenn du möchtest, schicke ich dir gerne einmal ein Gratisheft von VIA, damit du siehst, was ich so mache.\n\nIch freue mich schon auf deine Antwort.\n\nHerzliche Grüße\nEva", task: "Schreiben Sie Ihrer Bekannten nun einen Antwortbrief, der die folgenden Punkte enthält:", points: ["Fortschritte beim Deutsch Lernen", "Auf Evas neue Stelle reagieren", "Was es Neues bei Ihnen gibt", "Ihr Traumberuf"] },
  { id: "sch3", title: "TIKKI TAKKA - Beschwerde", level: "B2", isPremium: false, text: "Das Party-Abenteuer für Kinder!\nErleben Sie spannende Kinder-Partys mit TIKKI TAKKA!\n\nAbenteuerliche Spiele und lustige Party-Animation, Spaßige Schatzsuchen und spannende Entdeckungsreisen, Zauberer, Clowns und Kinderschminken, Tolle Party-Pakete für unvergessliche Erlebnisse.\nTOLLE AKTIONSPREISE!\n\nAbenteuer TIKKI TAKKA\nBirkenweg 5, 12345 Beispielstadt\nwww.tikki-takka.de\n+49 1234 567890\n\nSie haben bei der Firma Abenteuer TIKKI TAKKA eine Schatzsuche für den Geburtstag Ihres Kindes gebucht. Trotz günstiger Preise war die Geburtstagsfeier nicht so schön wie erwartet und Sie sind nicht damit zufrieden. Schreiben Sie eine Beschwerde und gehen Sie dabei auf die genannten Punkte ein.", task: "Schreiben Sie eine Antwort. Behandeln Sie folgende Punkte:", points: ["Mit welchem Angebot waren Sie nicht zufrieden?", "Erklären Sie, warum das Angebot nicht begeistert hat.", "Vorschläge für Verbesserungen: Was könnte TIKKI TAKKA Ihrer Meinung nach besser machen?"] }
];

var EXAMS = [
// ================= ALEX =================
{
  id:"alex-t1", title:"Alex Und Cora", level:"B1", sub:"Teile 1", type:"headings",
  options:[
    {k:"a", de:"Eltern trotz Kritik mit der Schule zufrieden", ar:"الآباء راضون عن المدرسة رغم الانتقادات", ma:"الوالدين مرتاحين مع المدرسة رغم الانتقادات", en:"Parents satisfied with school despite criticism", fr:"Parents satisfaits de l'école malgré les critiques"},
    {k:"b", de:"Elektromobilität für Angestellte", ar:"التنقل الكهربائي للموظفين", ma:"الدراجات الكهربائية للموظفين", en:"E-mobility for employees", fr:"Mobilité électrique pour les employés"},
    {k:"c", de:"STÄRKUNG VON BUS UND BAHN", ar:"تعزيز الحافلات والقطارات", ma:"تقوية الطوبيسات والقطارات", en:"Strengthening of bus and train", fr:"Renforcement des bus et des trains"},
    {k:"d", de:"Schule und Umweltschutz", ar:"المدرسة وحماية البيئة", ma:"المدرسة والحفاظ على البيئة", en:"School and environmental protection", fr:"École et protection de l'environnement"},
    {k:"e", de:"Bald keine Firmenwagen mehr?", ar:"هل ستختفي سيارات الشركات قريباً؟", ma:"قريباش غادي تحيد الطوموبيلات ديال الشركات؟", en:"Soon no more company cars?", fr:"Bientôt plus de voitures de société ?"},
    {k:"f", de:"Ticketpreise bei der Bahn", ar:"أسعار التذاكر في السكك الحديدية", ma:"أثمنة التذاكر فالقطار", en:"Train ticket prices", fr:"Prix des billets de train"},
    {k:"g", de:"Lehrerberuf wird immer attraktiver", ar:"مهنة التدريس تصبح أكثر جاذبية", ma:"مهنة الأستاذ ولات كتعجب كثر", en:"Teaching profession is becoming more attractive", fr:"Le métier d'enseignant devient plus attractif"},
    {k:"h", de:"Engagement für die Natur", ar:"الالتزام بالطبيعة", ma:"الاهتمام بالطبيعة", en:"Commitment to nature", fr:"Engagement pour la nature"},
    {k:"i", de:"Preissenkungen bei Bus, Straßenbahn und U-Bahn!", ar:"تخفيضات في الحافلات والترام والمترو!", ma:"تخفيضات فالطوبيس والطرامواي والميترو!", en:"Price reductions for bus, tram and subway!", fr:"Réductions de prix pour bus, tram et métro !"},
    {k:"j", de:"ZU WENIG LEHRER - STADT REAGIERT", ar:"نقص في المعلمين - المدينة تتخذ إجراءات", ma:"قلال الأساتذة - المدينة دارت شي حلول", en:"TOO FEW TEACHERS - CITY REACTS", fr:"PAS ASSEZ D'ENSEIGNANTS - LA VILLE RÉAGIT"}
  ],
  items:[
    {n:1, c:"b", de:"Sie haben Mitarbeiter, die gern mit dem Fahrrad zur Arbeit kommen? Warum dann nicht mehr E-Bikes leasen statt nur teure Firmenwagen?", ar:"الإعلان يروّج لتأجير الدراجات الكهربائية بدل سيارات الشركة.", ma:"الإعلان كيشجع على كراء البيسكليتات الكهربائية بلاصة طوموبيلات الشركة.", en:"The ad promotes leasing e-bikes instead of company cars.", fr:"L'annonce fait la promotion de la location de vélos électriques au lieu de voitures de société."},
    {n:2, c:"h", de:"NaturVerband ist der größte Umweltverband in Deutschland. Er engagiert sich für Umwelt- und Tierschutz.", ar:"جمعية تعمل في حماية البيئة والحيوانات.", ma:"جمعية كتخدم فحماية البيئة والحيوانات.", en:"An association working for environmental and animal protection.", fr:"Une association qui œuvre pour la protection de l'environnement et des animaux."},
    {n:3, c:"f", de:"Die Bahn erhöht dieses Jahr die Ticketpreise nicht. Günstiger werden außerdem die Tickets im öffentlichen Nahverkehr.", ar:"النص يتكلم عن عدم رفع أسعار تذاكر القطار هذا العام.", ma:"النص كيهضر على عدم رفع أثمنة تذاكر القطار هاد العام.", en:"The text talks about not increasing train ticket prices this year.", fr:"Le texte parle de la non-augmentation des prix des billets de train cette année."},
    {n:4, c:"a", de:"Vergangenen Monat wurden etwa tausend Eltern befragt. Dabei sagten 80%, dass die Schule gut oder sogar sehr gut sei.", ar:"80% من الآباء راضون عن المدرسة، لكن 40% فقط يرون أن أبناءهم مجهزون للمهنة.", ma:"80% من الوالدين مرتاحين مع المدرسة، ولكن غير 40% كيشوفو بلي ولادهم واجدين للمهنة.", en:"80% of parents are satisfied with the school, but only 40% think their children are prepared for a profession.", fr:"80 % des parents sont satisfaits de l'école, mais seulement 40 % pensent que leurs enfants sont préparés à un métier."},
    {n:5, c:"j", de:"Berlin. In der Hauptstadt herrscht weiterhin Lehrermangel: Tausende Lehrkräfte fehlen. Daher plant der Berliner Senat eine Werbekampagne.", ar:"نقص كبير في المعلمين في برلين، والمدينة تطلق حملة لجذب المعلمين.", ma:"نقص كبير فالأساتذة فبرلين، والمدينة كتحضر حملة لجذب الأساتذة.", en:"A major teacher shortage in Berlin, and the city is launching a campaign to attract teachers.", fr:"Une grave pénurie d'enseignants à Berlin, et la ville lance une campagne pour attirer les enseignants."}
  ]
},
{
  id:"alex-t2", title:"Alex Und Cora", level:"B1", sub:"Teile 2", type:"mcq",
  paragraphs: [
    { de: "Egal ob Hund, Katze oder Maus: Haustiere sind in Deutschland sehr beliebt.", ar: "سواء كان كلباً أو قطة أو فأراً: الحيوانات الأليفة تحظى بشعبية كبيرة في ألمانيا.", ma: "سواء كان كلب ولا قط ولا فار: الحيوانات الأليفة كيعجبو بزاف فألمانيا.", en: "Whether dog, cat or mouse: pets are very popular in Germany.", fr: "Qu'il s'agisse de chiens, de chats ou de souris : les animaux de compagnie sont très populaires en Allemagne." },
    { de: "In deutschen Haushalten gibt es rund 34 Millionen Haustiere. Besonders Katzen sind sehr beliebt.", ar: "يوجد في الأسر الألمانية حوالي 34 مليون حيوان أليف. القطط تحظى بشعبية خاصة.", ma: "كاين فالدور ديال الألمان حوالي 34 مليون حيوان أليف. القطط كيعجبو بزاف.", en: "There are around 34 million pets in German households. Cats are particularly popular.", fr: "Il y a environ 34 millions d'animaux de compagnie dans les foyers allemands. Les chats sont particulièrement populaires." },
    { de: "Der Hundeexperte Marius Klotz sieht es kritisch: Wichtig sind klare Regeln, die der Hund verstehen kann.", ar: "خبير الكلاب ماريوس كلوتز يرى الأمر بشكل نقدي: المهم هو القواعد الواضحة التي يمكن للكلب فهمها.", ma: "خبير الكلاب ماريوس كلوتز كيشوفها بنقد: المهم هو القواعد الواضحة اللي يقدر الكلب يفهمها.", en: "Dog expert Marius Klotz sees it critically: Clear rules that the dog can understand are important.", fr: "L'expert canin Marius Klotz est critique : des règles claires que le chien peut comprendre sont importantes." }
  ],
  items:[
    { n:1, c:"C", q:"Die Hundebesitzerin Elli Herfeld", qar:"مالكة الكلب إيلي هيرفيلد", qma:"مولات الكلب إيلي هيرفيلد", qen:"The dog owner Elli Herfeld", qfr:"La propriétaire du chien Elli Herfeld",
      opts:[
        {k:"A", de:"feiert ihren Geburtstag immer mit ihrem Hund.", ar:"تحتفل بعيد ميلادها دائماً مع كلبها.", ma:"كتحتفل بعيد ميلادها ديما مع الكلب ديالها.", en:"always celebrates her birthday with her dog.", fr:"fête toujours son anniversaire avec son chien."},
        {k:"B", de:"sieht ihren Hund als festes Familienmitglied.", ar:"تعتبر كلبها فرداً ثابتاً في العائلة.", ma:"كتشوف الكلب ديالها بحال شي فرد من العائلة.", en:"sees her dog as a permanent family member.", fr:"considère son chien comme un membre permanent de la famille."},
        {k:"C", de:"backt ihrem Hund zum Geburtstag einen Kuchen.", ar:"تخبز لكلبها كعكة عيد ميلاد.", ma:"كتطيب للكلب ديالها كيكة فعيد ميلادو.", en:"bakes her dog a cake for his birthday.", fr:"prépare un gâteau d'anniversaire pour son chien."}
      ]
    },
    { n:2, c:"A", q:"In Seniorenheimen gibt es oft Tiere, damit", qar:"غالباً ما توجد حيوانات في دور رعاية المسنين لكي", qma:"فدار المسنين غالباً كيكونو حيوانات باش", qen:"There are often animals in retirement homes so that", qfr:"Il y a souvent des animaux dans les maisons de retraite pour que",
      opts:[
        {k:"A", de:"die Senioren etwas tun, was gut für sie ist.", ar:"يقوم كبار السن بشيء مفيد لهم.", ma:"يديرو ناس الكبار شي حاجة مفيدة ليهم.", en:"the seniors do something that is good for them.", fr:"les seniors fassent quelque chose qui est bon pour eux."},
        {k:"B", de:"sie auf die älteren Menschen aufpassen.", ar:"يعتنون بكبار السن.", ma:"يعيطو على الناس الكبار.", en:"they take care of the elderly.", fr:"ils s'occupent des personnes âgées."},
        {k:"C", de:"die Senioren mehr spazieren gehen.", ar:"يمشي كبار السن أكثر.", ma:"يمشيو الناس الكبار بزاف.", en:"the seniors go for more walks.", fr:"les seniors se promènent davantage."}
      ]
    },
    { n:3, c:"A", q:"Bettina Schröther …", qar:"بيتينا شرودر...", qma:"بيتينا شرودر...", qen:"Bettina Schröther ...", qfr:"Bettina Schröther ...",
      opts:[
        {k:"A", de:"verbringt die ganze Freizeit mit ihrem Hund.", ar:"تقضي كل وقت فراغها مع كلبها.", ma:"كتدوز كل وقت الفراغ ديالها مع الكلب ديالها.", en:"spends all her free time with her dog.", fr:"passe tout son temps libre avec son chien."},
        {k:"B", de:"macht mit ihrem Hund regelmäßig Wellnessurlaube.", ar:"تأخذ عطلات صحية مع كلبها بانتظام.", ma:"كتاخد عطلات ديال الراحة مع الكلب ديالها بانتظام.", en:"regularly takes wellness holidays with her dog.", fr:"prend régulièrement des vacances bien-être avec son chien."},
        {k:"C", de:"lässt ihren Hund in einer Hundeschule erziehen.", ar:"تترك كلبها يتدرب في مدرسة للكلاب.", ma:"كتخلي الكلب ديالها يتدرب فمدرسة ديال الكلاب.", en:"has her dog trained in a dog school.", fr:"fait dresser son chien dans une école de chiens."}
      ]
    },
    { n:4, c:"C", q:"Nach Meinung von Hundeexperte Marius Klotz sollte man", qar:"وفقاً لرأي خبير الكلاب ماريوس كلوتز يجب على المرء", qma:"على حساب خبير الكلاب ماريوس كلوتز خاص الواحد", qen:"According to dog expert Marius Klotz, one should", qfr:"Selon l'avis de l'expert canin Marius Klotz, on devrait",
      opts:[
        {k:"A", de:"sich zur Ernährung des Tiers beraten lassen.", ar:"استشارة حول تغذية الحيوان.", ma:"ياخد نصيحة على الماكلة ديال الحيوان.", en:"get advice on the animal's nutrition.", fr:"demander conseil sur l'alimentation de l'animal."},
        {k:"B", de:"seinen Hund immer gut behandeln.", ar:"معاملة كلبه دائماً بشكل جيد.", ma:"يعامل الكلب ديالو ديما مزيان.", en:"always treat his dog well.", fr:"toujours bien traiter son chien."},
        {k:"C", de:"die Regeln bei der Hundeerziehung beachten.", ar:"مراعاة القواعد في تربية الكلاب.", ma:"يحترم القواعد فتربية الكلاب.", en:"pay attention to the rules of dog training.", fr:"respecter les règles d'éducation canine."}
      ]
    }
  ]
},
{
  id:"alex-t3", title:"Alex Und Cora", level:"B1", sub:"Teile 3", type:"matching",
  ads:[
    {k:"A", t:"Café Simon", de:"Hausgemachte Pralinen, Kuchen, Torten und Eis", ar:"شوكولاتة، كعك، تورتات وآيس كريم منزلية الصنع", ma:"شوكولا، كيك، تورتة وآيس كريم ديال الدار", en:"Homemade pralines, cakes, tarts and ice cream", fr:"Pralines, gâteaux, tartes et glaces faits maison"},
    {k:"B", t:"Tourismusschulen", de:"Höhere Lehranstalt, Hotelhandelsschule, Tourismusfachschule", ar:"مؤسسات تعليمية عليا، مدرسة تجارة الفنادق، مدرسة السياحة", ma:"مدارس عليا، مدرسة ديال الفندقة والسياحة", en:"Higher education, hotel trade school, tourism school", fr:"Enseignement supérieur, école de commerce hôtelier, école de tourisme"},
    {k:"C", t:"Liederbühne Robinson", de:"Kleinkunst, Vegetarische Spezialitäten", ar:"فنون صغيرة، أطباق نباتية خاصة", ma:"فنون، ماكلة نباتية", en:"Small arts, vegetarian specialties", fr:"Petit art, spécialités végétariennes"},
    {k:"D", t:"Interkulturelle Arbeit", de:"Berufsbegleitende Fortbildung für Fachkräfte", ar:"تدريب مهني للمتخصصين أثناء العمل", ma:"تكوين مهني للأطر خلال الخدمة", en:"In-service training for professionals", fr:"Formation continue pour professionnels"},
    {k:"E", t:"Restaurantcafé Chesa W. Pressl", de:"Schweizer und bayerische Küche, Fischspezialitäten", ar:"مطبخ سويسري وبافاري، أسماك متخصصة", ma:"ماكلة سويسرية وبافارية، سمك", en:"Swiss and Bavarian cuisine, fish specialties", fr:"Cuisine suisse et bavaroise, spécialités de poisson"},
    {k:"F", t:"BIZ (Berufsinformationszentrum)", de:"Informationen zu Ausbildung und Studium", ar:"معلومات حول التكوين والدراسة", ma:"معلومات على التكوين والدراسة", en:"Information on training and studies", fr:"Informations sur la formation et les études"},
    {k:"G", t:"Abendkurs für Einsteiger", de:"Computer Grundwissen", ar:"أساسيات الكمبيوتر", ma:"أساسيات ديال الكمبيوتر", en:"Computer basics", fr:"Bases de l'informatique"},
    {k:"H", t:"MortizCafé", de:"Kaffee so viel du willst", ar:"قهوة بقدر ما تريد", ma:"قهوة باللي بغيتي", en:"Coffee as much as you want", fr:"Café autant que tu veux"},
    {k:"I", t:"Bachls Kerzenstub'n", de:"TANZEN + ESSEN, Live-Musik mit TANZ", ar:"رقص وأكل، موسيقى حية مع رقص", ma:"رقص وماكلة، موسيقى حية مع الرقص", en:"DANCE + FOOD, Live music with DANCE", fr:"DANSE + NOURRITURE, Musique live avec DANSE"},
    {k:"J", t:"Internationales Studium", de:"Fremdsprachen + Betriebswirtschaft, B.A. in European Administration", ar:"لغات أجنبية + إدارة أعمال، بكالوريوس في الإدارة الأوروبية", ma:"لغات أجنبية + إدارة، إجازة فالإدارة الأوروبية", en:"Foreign languages + Business administration, B.A. in European Administration", fr:"Langues étrangères + Gestion d'entreprise, B.A. en Administration Européenne"},
    {k:"K", t:"USA-Aufenthalt für Schüler", de:"Ein Schuljahr an einer High School", ar:"سنة دراسية في مدرسة ثانوية", ma:"عام دراسي فمدرسة ثانوية بأمريكا", en:"One school year at a High School", fr:"Une année scolaire dans un lycée"},
    {k:"L", t:"Samstagswerkstatt", de:"Aufbau des Autos, Reparatur und Pflege", ar:"بنية السيارة، الإصلاح والصيانة", ma:"بنية الطوموبيل، التصليح والصيانة", en:"Car structure, repair and maintenance", fr:"Structure de la voiture, réparation et entretien"}
  ],
  items:[
    {n:1, c:"H", de:"Sie verbringen gern viele Stunden im Cafe, wollen aber nicht viel Geld ausgeben.", ar:"تحب قضاء ساعات طويلة في المقهى، ولكنك لا ترغب في إنفاق الكثير من المال.", ma:"كتحب تدوز ساعات فالمقهى، ولكن ما بغيتيش تصرف فلوس بزاف.", en:"You like spending many hours in a cafe but don't want to spend much money.", fr:"Vous aimez passer de nombreuses heures dans un café mais ne voulez pas dépenser beaucoup d'argent."},
    {n:2, c:"G", de:"Sie haben gerade den Beruf gewechselt und brauchen für die neue Aufgabe Grundkenntnisse für die Arbeit am Computer.", ar:"لقد غيرت مهنتك مؤخرًا وتحتاج إلى معرفة أساسية للعمل على الكمبيوتر من أجل المهمة الجديدة.", ma:"بدلتي الخدمة دابا وكتحتاج تعرف أساسيات الكمبيوتر للمهمة الجديدة.", en:"You have just changed jobs and need basic computer skills for the new task.", fr:"Vous venez de changer de métier et avez besoin de connaissances informatiques de base pour votre nouvelle tâche."},
    {n:3, c:"D", de:"Sie arbeiten in einem Krankenhaus und haben dort häufig mit Patienten aus aller Welt zu tun. Sie möchten für diese Arbeit noch besser qualifiziert sein.", ar:"تعمل في مستشفى وتتعامل غالبًا مع مرضى من جميع أنحاء العالم. ترغب في أن تكون أكثر تأهيلاً لهذه الوظيفة.", ma:"كتخدم فالمستشفى وكتعامل مع مرضى من العالم كامل. بغيتي تكون واجد كثر لهاد الخدمة.", en:"You work in a hospital and often deal with patients from all over the world. You want to be better qualified for this work.", fr:"Vous travaillez dans un hôpital et avez souvent affaire à des patients du monde entier. Vous souhaitez être mieux qualifié pour ce travail."},
    {n:4, c:"X", de:"Sie möchten gern einen Tanzkurs für Anfänger besuchen. Sie haben nur abends Zeit.", ar:"ترغب في حضور دورة رقص للمبتدئين. لديك وقت فقط في المساء.", ma:"بغيتي تمشي لدورة ديال الرقص للمبتدئين. عندك غير الليل.", en:"You would like to attend a dance course for beginners. You only have time in the evening.", fr:"Vous souhaitez suivre un cours de danse pour débutants. Vous n'avez le temps que le soir."},
    {n:5, c:"J", de:"Sie möchten beruflich etwas mit Fremdsprachen machen. Deshalb wollen Sie im Ausland studieren um später vielleicht auch dort zu arbeiten.", ar:"ترغب في العمل في مجال يتعلق باللغات الأجنبية. لذلك تريد الدراسة في الخارج وربما العمل هناك لاحقًا.", ma:"بغيتي تخدم شي حاجة فاللغات. داكشي علاش بغيتي تقرا فالخارج وربما تخدم تما من بعد.", en:"You want to work in a field related to foreign languages. That's why you want to study abroad and maybe work there later.", fr:"Vous souhaitez travailler dans un domaine lié aux langues étrangères. C'est pourquoi vous voulez étudier à l'étranger et peut-être y travailler plus tard."},
    {n:6, c:"A", de:"Sie wollen mit einem Bekannten einen gemütlichen Nachmittag in der Stadt verbringen. Sie wissen, dass Ihr Bekannter am Liebsten süße Sachen isst.", ar:"تريد قضاء فترة بعد الظهر المريحة في المدينة مع أحد معارفك. تعلم أن صديقك يفضل تناول الأشياء الحلوة.", ma:"بغيتي تدوز شي نهار مريح فالمدينة مع شي صاحب. عارف بلي صحابك كيحب الحلويات.", en:"You want to spend a cozy afternoon in the city with an acquaintance. You know that your acquaintance loves eating sweet things.", fr:"Vous voulez passer un après-midi agréable en ville avec une connaissance. Vous savez que votre connaissance aime manger des choses sucrées."},
    {n:7, c:"I", de:"Ihr Freund aus den USA ist zu Besuch. Er ist Weinkenner und möchte europäische Weine probieren.", ar:"صديقك من الولايات المتحدة يزورك. هو خبير في النبيذ ويرغب في تذوق النبيذ الأوروبي.", ma:"صاحبك من أمريكا جاي يزورك. هو خبير فنبيذ وبغى يدوق النبيذ الأوروبي.", en:"Your friend from the USA is visiting. He is a wine connoisseur and wants to try European wines.", fr:"Votre ami des États-Unis est en visite. Il est connaisseur en vin et souhaite goûter des vins européens."},
    {n:8, c:"X", de:"In Ihrer Freizeit möchten Sie sich mit anderen Ländern, fremden Kulturen und Traditionen beschäftigen.", ar:"في وقت فراغك، ترغب في التعرف على بلدان أخرى وثقافات وتقاليد مختلفة.", ma:"فوقت الفراغ ديالك، بغيتي تعرف بلدان وثقافات وتقاليد أخرى.", en:"In your free time, you want to deal with other countries, foreign cultures and traditions.", fr:"Pendant votre temps libre, vous souhaitez vous intéresser à d'autres pays, cultures et traditions étrangères."},
    {n:9, c:"F", de:"Die Tochter Ihrer Freunde hat gerade Abitur gemacht und ist nicht sicher, was sie später machen will. Sie braucht Informationen und Beratung.", ar:"ابنة أصدقائك أنهت للتو الثانوية العامة وهي غير متأكدة مما تريد فعله لاحقًا. تحتاج إلى معلومات واستشارة.", ma:"بنت صحابك دازت الباك دابا وما عارفاش شنو بغات دير من بعد. كتحتاج معلومات ونصيحة.", en:"Your friend's daughter has just graduated from high school and is unsure what she wants to do later. She needs information and advice.", fr:"La fille de vos amis vient d'obtenir son baccalauréat et ne sait pas ce qu'elle veut faire plus tard. Elle a besoin d'informations et de conseils."},
    {n:10, c:"C", de:"Sie möchten mit Freunden in einem Lokal mit Unterhaltungsprogramm essen. Ihre Freunde essen aber weder Fleisch noch Fisch.", ar:"ترغب في تناول الطعام مع أصدقائك في مكان يقدم برنامج ترفيهي. لكن أصدقاؤك لا يتناولون اللحوم أو الأسماك.", ma:"بغيتي تاكل مع صحابك فشي بلاصة فيها برنامج ترفيهي. ولكن صحابك ما كياكلوش اللحم ولا الحوت.", en:"You want to eat with friends in a restaurant with an entertainment program. But your friends eat neither meat nor fish.", fr:"Vous souhaitez manger avec des amis dans un restaurant avec un programme de divertissement. Mais vos amis ne mangent ni viande ni poisson."}
  ]
},
{
  id:"alex-sp1", title:"Alex Und Cora", level:"B1", sub:"Sprach 1", type:"sprach1",
  text: "Schaffhausen, den...\nHallo Isabelle,\nwie geht es dir? Hast du deine Prüfungen geschafft?\nWie du ja weißt, .....(1)..... ich seit zwei Monaten in einem Altersheim .....(2)..... der Nähe von Schaffhausen. Die Arbeit in .....(3)..... Haus gefällt mir gut, obwohl es manchmal auch sehr stressig ist. Besonders schön ist der enge .....(4)..... zu einigen der alten Menschen. Eine Frau, Anna Ringier, mag ich .....(5)..... gern. Sie ist schon 96 Jahre alt und sitzt im Rollstuhl, aber sie ist immer fröhlich. Gestern hat sie mir .....(6)..... ganzes Leben erzählt. Sie hat bis zum 84. Lebensjahr .....(7)..... gearbeitet. Schon als achtjähriges Mädchen musste sie bei einem Bauern arbeiten, .....(8)..... ihre Eltern die neunjährige Familie nicht ernähren konnten. Später arbeitete Anna als Schneiderin.\nNeben ihrer Arbeit hat Anna .....(9)..... auf eine Sache nie verzichtet: das Bergsteigen! Das war immer ihre große Leidenschaft. Diese Frau ist wirklich sehr beeindruckend!\nAber du .....(10)..... bestimmt auch viel erlebt. Ich würde mich sehr freuen, wenn du mir bald wieder einmal schreibst!\nHerzliche Grüße\ndeine Julie",
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
  id:"alex-sp2", title:"Alex Und Cora", level:"B1", sub:"Sprach 2", type:"sprach2",
  wordBank:[{k:"a",w:"an"},{k:"b",w:"Bekannte"},{k:"c",w:"bereits"},{k:"d",w:"dafür"},{k:"e",w:"darüber"},{k:"f",w:"dass"},{k:"g",w:"Familie"},{k:"h",w:"kann"},{k:"i",w:"mich"},{k:"j",w:"mit"},{k:"k",w:"muss"},{k:"l",w:"ob"},{k:"m",w:"sehr"},{k:"n",w:"was"},{k:"o",w:"welche"}],
  text: "Sehr geehrte Damen und Herren,\n\nnachdem ich Ihr Inserat gelesen habe, möchte ich .....(1)..... gern genauer über Ihr Restaurant informieren. In einem Monat feiere ich meinen 30. Geburtstag und möchte dazu viele Freunde und .....(2)..... einladen. .....(3)..... wäre Ihr Hotel sicher sehr gut geeignet. Deshalb noch einige Fragen .....(4)..... Sie: Ich rechne ungefähr mit 25 Personen. Wie hoch ist die Miete für den passenden Raum und .....(5)..... Gerichte können Sie mir empfehlen? Da fast alle Gäste mit dem Auto kommen werden, wäre es auch wichtig, .....(6)..... genügend Parkplätze vorhanden sind.\n\nEs wäre .....(7)..... freundlich von Ihnen, wenn Sie mir möglichst bald Bescheid geben könnten, damit ich die Einladungen verschicken .....(8)...... Bitte senden Sie mir einen Prospekt Ihres Hotels .....(9)..... genauer Wegbeschreibung. Sollten Ihre Räume für den Monat Mai .....(10)..... ausgebucht sein, geben Sie mir bitte umgehend Bescheid.\n\nMit freundlichen Grüßen\nBarbara Heuberger",
  items:[{n:1, c:"mich"},{n:2, c:"Bekannte"},{n:3, c:"dafür"},{n:4, c:"an"},{n:5, c:"welche"},{n:6, c:"dass"},{n:7, c:"sehr"},{n:8, c:"kann"},{n:9, c:"mit"},{n:10, c:"bereits"}]
},

// ================= RITA =================
{
  id:"rita-t1", title:"Rita", level:"B1", sub:"Teile 1", type:"headings",
  options:[
    {k:"a", de:"Japanische Studie: Vielschläfer leben länger", ar:"دراسة يابانية: من ينامون كثيراً يعيشون أطول", ma:"دراسة يابانية: اللي كينعسو بزاف كيعيشو كثر", en:"Japanese study: heavy sleepers live longer", fr:"Étude japonaise : les gros dormeurs vivent plus longtemps"},
    {k:"b", de:"USA: Nachfrage nach funktionellen Lebensmitteln geht zurück", ar:"الولايات المتحدة: تراجع الطلب على الأطعمة الوظيفية", ma:"أمريكا: الطلب على الماكلة الصحية نقص", en:"USA: Demand for functional foods is falling", fr:"États-Unis : la demande d'aliments fonctionnels diminue"},
    {k:"c", de:"Studie zeigt: Heiraten macht dick", ar:"دراسة تظهر: الزواج يزيد الوزن", ma:"دراسة كتقول: الزواج كيزيد فالوزن", en:"Study shows: Marriage makes you fat", fr:"Une étude montre : le mariage fait grossir"},
    {k:"d", de:"Die Mehrheit der Schweizer treibt aktiv Sport", ar:"غالبية السويسريين يمارسون الرياضة بانتظام", ma:"أغلبية السويسريين كيديرو الرياضة", en:"The majority of Swiss people actively do sports", fr:"La majorité des Suisses font du sport activement"},
    {k:"e", de:"Neu im Trend: Jung und Gesund - mit Schokolade", ar:"الجديد في الموضة: الشباب والصحة - مع الشوكولاتة", ma:"ترند جديد: الشباب والصحة بالشوكولا", en:"New trend: Young and healthy - with chocolate", fr:"Nouvelle tendance : Jeune et en bonne santé - avec du chocolat"},
    {k:"f", de:"Schweizer sollen gesünder leben", ar:"يجب على السويسريين أن يعيشوا حياة أكثر صحة", ma:"السويسريين خاصهم يعيشو حياة صحية كثر", en:"Swiss people should live healthier", fr:"Les Suisses devraient vivre plus sainement"},
    {k:"g", de:"Statistik: Unverheiratete haben oft ein paar Kilos zu viel", ar:"إحصائية: العزاب غالباً ما يعانون من زيادة الوزن", ma:"إحصائية: اللي ماعندهمش الدار كيكونو زايدين شوية فالوزن", en:"Statistics: Unmarried people often have a few extra kilos", fr:"Statistiques : Les célibataires ont souvent quelques kilos en trop"},
    {k:"h", de:"Teures Essen für mehr Jugend und Schönheit", ar:"طعام باهظ الثمن من أجل المزيد من الشباب والجمال", ma:"ماكلة غالية على قبل الشباب والزين", en:"Expensive food for more youth and beauty", fr:"Nourriture chère pour plus de jeunesse et de beauté"},
    {k:"i", de:"Weniger schlafen - länger leben", ar:"النوم أقل - العيش أطول", ma:"نعس قليل - عيش كثر", en:"Sleep less - live longer", fr:"Dormir moins - vivre plus longtemps"},
    {k:"j", de:"Schokolade essen - jung bleiben", ar:"تناول الشوكولاتة - البقاء شاباً", ma:"كول الشوكولا - بقى شاب", en:"Eat chocolate - stay young", fr:"Manger du chocolat - rester jeune"}
  ],
  items:[
    {n:1, c:"h", de:"Du bist, was du isst, hat als Slogan ausgedient. Heute muss es heißen: Gut aussehen mit dem richtigen Essen. Dort kaufen bereits viele Leute neue teure Lebensmittel, die jüngeres Aussehen versprechen.", ar:"اتجاه جديد من أمريكا: أطعمة غالية تعد بمظهر أصغر، والناس مستعدون لدفع الكثير.", ma:"ترند جديد من أمريكا: ماكلة غالية كتعطي مظهر صغير، والناس واجدين يخلصو بزاف.", en:"New trend from the USA: expensive foods promise a younger appearance, and people are willing to pay a lot.", fr:"Nouvelle tendance des États-Unis : des aliments chers promettent une apparence plus jeune, et les gens sont prêts à payer cher."},
    {n:2, c:"c", de:"Frisch verheiratete Paare nehmen oft schon in den Flitterwochen einige Kilos zu, weil sie ihre Essgewohnheiten ändern.", ar:"المتزوجون حديثاً يكتسبون وزناً بسبب تغيير عاداتهم الغذائية.", ma:"اللي تزوجو جديد كيزيدو فالوزن حيت كيبدلو عادات الماكلة ديالهم.", en:"Newly married couples often gain weight because they change their eating habits.", fr:"Les jeunes mariés prennent souvent du poids parce qu'ils changent leurs habitudes alimentaires."},
    {n:3, c:"e", de:"Der Schokolade-Boom hat nun auch die Schönheitsindustrie erreicht. Vom 16. Januar bis zum 24. Februar bietet das Grand Hotel Bad Ragaz unter dem Namen Choco Therapy Behandlungen mit Schokolade an.", ar:"النص يتكلم عن علاجات تجميل بالشوكولاتة في فندق سويسري.", ma:"النص كيهضر على علاجات ديال الزين بالشوكولا فشي فندق سويسري.", en:"The text is about chocolate beauty treatments in a Swiss hotel.", fr:"Le texte parle de soins de beauté au chocolat dans un hôtel suisse."},
    {n:4, c:"f", de:"Nach dem Motto „beschwingt und bewegt“ starten die Schweizer Gesundheitsbehörden eine landesweite Bewegungskampagne. Dabei soll die Schweizer Bevölkerung aufgerufen werden, ausgewogen zu essen und sich täglich zu bewegen.", ar:"حملة صحية سويسرية لتشجيع الناس على الرياضة وأكل متوازن.", ma:"حملة صحية سويسرية باش تشجع الناس على الرياضة والماكلة المتوازنة.", en:"A Swiss health campaign to encourage people to exercise and eat a balanced diet.", fr:"Une campagne de santé suisse pour encourager les gens à faire du sport et à manger équilibré."},
    {n:5, c:"i", de:"Wer acht Stunden und länger schläft, hat eine deutlich kürzere Lebenserwartung. Das berichtete das Apothekenmagazin Gesundheit und bezog sich auf eine neue japanische Studie.", ar:"الدراسة اليابانية تقول إن النوم الطويل يقلل العمر، والعنوان الصحيح هو النوم أقل.", ma:"الدراسة اليابانية كتقول بلي النعاس الطويل كينقص العمر، والعنوان الصحيح هو نعس قليل.", en:"The Japanese study says that long sleep reduces lifespan, and the correct title is sleep less.", fr:"L'étude japonaise dit que dormir longtemps réduit l'espérance de vie, et le bon titre est dormir moins."}
  ]
},
{
  id:"rita-t2", title:"Rita", level:"B1", sub:"Teile 2", type:"mcq",
  paragraphs: [
    { de: "Endlich wird der Traum von Louis Palmer wahr: Der Schweizer startet mit seinem Auto, das mit Sonnenenergie fährt, zur Weltumrundung.", ar: "أخيراً يتحقق حلم لويس بالمر: يبدأ السويسري رحلته حول العالم بسيارته التي تعمل بالطاقة الشمسية.", ma: "أخيراً تحقق الحلم ديال لويس بالمر: السويسري غادي يدور العالم بالطوموبيل ديالو اللي كتمشي بالطاقة الشمسية.", en: "Louis Palmer's dream is finally coming true: the Swiss man is starting his trip around the world in a solar-powered car.", fr: "Le rêve de Louis Palmer se réalise enfin : le Suisse entame son tour du monde dans une voiture solaire." },
    { de: "Entwickelt für mich ein Fahrzeug für eine Weltreise, die mit Sonnenenergie fährt, forderte Louis Palmer Studenten auf. Heute ist das Auto fertig: ein dreirädriges Fahrzeug mit zwei Sitzplätzen.", ar: "\"طوروا لي مركبة لرحلة حول العالم تعمل بالطاقة الشمسية\"، طلب لويس بالمر من طلاب في جامعات سويسرية.", ma: "\"طورو ليا طوموبيل تدور العالم بالطاقة الشمسية\"، هادشي طلبو لويس بالمر من طلبة فجامعات سويسرية.", en: "\"Develop a solar-powered vehicle for a trip around the world for me,\" Louis Palmer asked students at Swiss universities.", fr: "\"Développez-moi un véhicule solaire pour un tour du monde\", a demandé Louis Palmer à des étudiants d'universités suisses." },
    { de: "Phase eins begann mit 23 Jahren: Er zog aus, um 50 Länder auf allen Kontinenten zu bereisen: Anstatt an die Uni zu gehen, habe ich die Welt studiert.", ar: "بدأت المرحلة الأولى في سن 23: خرج للسفر إلى 50 دولة في جميع القارات: \"بدلاً من الذهاب إلى الجامعة، درست العالم\".", ma: "المرحلة الأولى بدات فسن 23: خرج باش يسافر لـ 50 بلاد فجميع القارات: \"بلاصة ما نمشي للجامعة، قريت العالم\".", en: "Phase one began at the age of 23: He set out to travel to 50 countries on all continents: \"Instead of going to university, I studied the world.\"", fr: "La première phase a commencé à l'âge de 23 ans : Il est parti voyager dans 50 pays sur tous les continents : \"Au lieu d'aller à l'université, j'ai étudié le monde.\"" }
  ],
  items:[
    { n:1, c:"C", q:"Mit 23 Jahren wollte Louis Palmer", qar:"في سن 23 أراد لويس بالمر", qma:"فسن 23 لويس بالمر بغى", qen:"At 23, Louis Palmer wanted", qfr:"À 23 ans, Louis Palmer voulait",
      opts:[
        {k:"A", de:"für Studenten Reisen nach Südamerika organisieren", ar:"تنظيم رحلات للطلاب إلى أمريكا الجنوبية", ma:"ينظم رحلات للطلبة لأمريكا الجنوبية", en:"organize trips to South America for students", fr:"organiser des voyages en Amérique du Sud pour les étudiants"},
        {k:"B", de:"mit dem Fahrrad durch 50 verschiedene Länder fahren", ar:"السفر بالدراجة عبر 50 دولة مختلفة", ma:"يسافر بالبيسكليت عبر 50 بلاد", en:"travel by bike through 50 different countries", fr:"voyager à vélo à travers 50 pays différents"},
        {k:"C", de:"viele verschiedene Länder kennen lernen", ar:"التعرف على دول كثيرة مختلفة", ma:"يتعرف على بزاف ديال البلدان", en:"get to know many different countries", fr:"découvrir de nombreux pays différents"}
      ]
    },
    { n:2, c:"C", q:"Sein Projekt konnte Palmer realisieren,", qar:"تمكن بالمر من تحقيق مشروعه", qma:"بالمر قدر يحقق المشروع ديالو", qen:"Palmer was able to realize his project", qfr:"Palmer a pu réaliser son projet",
      opts:[
        {k:"A", de:"weil er einen Preis von einer Universität gewonnen hat", ar:"لأنه فاز بجائزة من جامعة", ma:"حيت ربح جايزة من جامعة", en:"because he won a prize from a university", fr:"parce qu'il a gagné un prix d'une université"},
        {k:"B", de:"weil er finanzielle Unterstützung von vier Universitäten erhalten hat.", ar:"لأنه تلقى دعماً مالياً من أربع جامعات", ma:"حيت خد دعم مالي من 4 جامعات", en:"because he received financial support from four universities.", fr:"parce qu'il a reçu un soutien financier de quatre universités."},
        {k:"C", de:"weil ihn Firmen und Universitäten unterstützt haben", ar:"لأن الشركات والجامعات دعمته", ma:"حيت الشركات والجامعات دعموه", en:"because companies and universities supported him", fr:"parce que des entreprises et des universités l'ont soutenu"}
      ]
    },
    { n:3, c:"A", q:"Palmers Auto", qar:"سيارة بالمر", qma:"طوموبيل بالمر", qen:"Palmer's car", qfr:"La voiture de Palmer",
      opts:[
        {k:"A", de:"fährt mit alternativer Energie", ar:"تسير بالطاقة البديلة", ma:"كتمشي بالطاقة البديلة", en:"runs on alternative energy", fr:"roule à l'énergie alternative"},
        {k:"B", de:"geht auf eine dreijährige Weltreise", ar:"تذهب في رحلة حول العالم لمدة ثلاث سنوات", ma:"غادي تدور العالم لمدة 3 سنين", en:"goes on a three-year world trip", fr:"part pour un tour du monde de trois ans"},
        {k:"C", de:"hat genug Platz für sieben Personen", ar:"لديها مساحة كافية لسبعة أشخاص", ma:"فيها بلاصة لـ 7 ديال الناس", en:"has enough space for seven people", fr:"a assez de place pour sept personnes"}
      ]
    },
    { n:4, c:"A", q:"Louis Palmer", qar:"لويس بالمر", qma:"لويس بالمر", qen:"Louis Palmer", qfr:"Louis Palmer",
      opts:[
        {k:"A", de:"wird sich in nächster Zeit nicht langweilen", ar:"لن يشعر بالملل في المستقبل القريب", ma:"ماغاديش يحس بالملل فالمستقبل القريب", en:"will not be bored in the near future", fr:"ne va pas s'ennuyer dans un proche avenir"},
        {k:"B", de:"möchte mit seinem Auto nicht durch Großstädte fahren", ar:"لا يريد القيادة في المدن الكبرى", ma:"ما بغاش يسوق فالمدن الكبار", en:"doesn't want to drive through big cities", fr:"ne veut pas conduire dans les grandes villes"},
        {k:"C", de:"hat für die Weltreise sechs Sprachen gelernt", ar:"تعلم ست لغات لرحلة حول العالم", ma:"تعلم 6 ديال اللغات باش يدور العالم", en:"learned six languages for the world trip", fr:"a appris six langues pour le tour du monde"}
      ]
    },
    { n:5, c:"C", q:"Schon als Jugendlicher", qar:"حتى وهو مراهق", qma:"حتى وهو صغير", qen:"Even as a teenager", qfr:"Même adolescent",
      opts:[
        {k:"A", de:"baute Louis an einem umweltfreundlichen Auto", ar:"بنى لويس سيارة صديقة للبيئة", ma:"بنى لويس طوموبيل صديقة للبيئة", en:"Louis built an eco-friendly car", fr:"Louis a construit une voiture écologique"},
        {k:"B", de:"wollte Louis etwas für die Umwelt tun.", ar:"أراد لويس فعل شيء للبيئة", ma:"بغى لويس يدير شي حاجة للبيئة", en:"Louis wanted to do something for the environment.", fr:"Louis voulait faire quelque chose pour l'environnement."},
        {k:"C", de:"wusste Louis genau, wie er sein Leben einteilen will", ar:"عرف لويس بالضبط كيف يقسم حياته", ma:"عرف لويس مزيان كيفاش يقسم الحياة ديالو", en:"Louis knew exactly how he wanted to divide his life", fr:"Louis savait exactement comment il voulait diviser sa vie"}
      ]
    }
  ]
},
{
  id:"rita-t3", title:"Rita", level:"B1", sub:"Teile 3", type:"matching",
  ads:[
    {k:"A", t:"Surf & Travel", de:"Kurztrips der Deutschen Bahn", ar:"رحلات قصيرة بالقطار الألماني", ma:"رحلات قصيرة بالقطار الألماني", en:"Short trips by Deutsche Bahn", fr:"Courts trajets avec la Deutsche Bahn"},
    {k:"B", t:"Für den Fernsehfilm", de:"Kleindarsteller und Statisten gesucht", ar:"مطلوب ممثلون إضافيون في فيلم تلفزيوني", ma:"مطلوبين ممثلين ففيلم تلفزيوني", en:"Extras and background actors wanted for a TV movie", fr:"Figurants et acteurs recherchés pour un téléfilm"},
    {k:"C", t:"Messejobs", de:"Hostessen und Promoter für Messen", ar:"عمل كمضيفين في المعارض", ma:"خدامة ديال الضيافة فالمعارض", en:"Hosts and promoters for trade fairs", fr:"Hôtes et promoteurs pour les foires"},
    {k:"D", t:"Verkehrsmuseum Erfurt", de:"Mobilität und Technik, Geschichte des Autos", ar:"متحف النقل وتاريخ السيارات", ma:"متحف النقل وتاريخ الطوموبيلات", en:"Transport museum, history of the car", fr:"Musée des transports, histoire de la voiture"},
    {k:"E", t:"ADAC Urlaub mobil", de:"Berlin plus Autoreise durch Deutschland", ar:"باقة برلين ثم رحلة بالسيارة في ألمانيا", ma:"باكية برلين ومن بعد رحلة بالطوموبيل فألمانيا", en:"Berlin plus car trip through Germany", fr:"Berlin plus voyage en voiture à travers l'Allemagne"},
    {k:"F", t:"Filmclub", de:"Filmvorführungen, Kino", ar:"نادي سينما", ma:"نادي ديال السينما", en:"Film club, cinema", fr:"Ciné-club, cinéma"},
    {k:"G", t:"Ökomobil", de:"Garten- und Landschaftsbau, Ausbildung", ar:"مؤسسة لتكوين في البستنة", ma:"مؤسسة للتكوين فالبستنة", en:"Landscape gardening, training", fr:"Aménagement paysager, formation"},
    {k:"H", t:"Jung gebliebener Rentner", de:"Sucht Freizeitpartnerin für Kino, Reisen", ar:"متقاعد يبحث عن شريكة للسينما والسفر", ma:"متقاعد كيقلب على شريكة للسينما والسفر", en:"Young-at-heart pensioner seeks companion for cinema, travel", fr:"Retraité resté jeune cherche compagne pour cinéma, voyages"},
    {k:"I", t:"Feng Shui für den Garten", de:"Vortragsabend, Beratung", ar:"أمسية حول تصميم الحدائق بالفنغ شوي", ma:"أمسية على تصميم الجنانات بالفنغ شوي", en:"Lecture evening, advice on garden Feng Shui", fr:"Soirée conférence, conseils Feng Shui pour le jardin"},
    {k:"J", t:"Studentinnen/SchülerInnen gesucht", de:"Betreuung im Kinderferienlager", ar:"مشرفون لمخيم صيفي للأطفال", ma:"مشرفين لمخيم صيفي ديال الدراري", en:"Students wanted for holiday camp supervision", fr:"Étudiants recherchés pour la garde en colonie de vacances"},
    {k:"K", t:"Gemeinsam schöne Dinge genießen", de:"Akademikerin sucht Partner für Konzerte", ar:"أكاديمية تبحث عن شريك للحفلات والسفر", ma:"أكاديمية كتقلب على شريك للحفلات والسفر", en:"Academic seeks partner for concerts and travel", fr:"Universitaire cherche partenaire pour concerts et voyages"},
    {k:"L", t:"Samstagswerkstatt", de:"Aufbau des Autos, Reparatur und Pflege", ar:"ورشة لتعلم إصلاح السيارة", ma:"ورشة باش تتعلم تصليح الطوموبيل", en:"Saturday workshop, car repair", fr:"Atelier du samedi, réparation auto"}
  ],
  items:[
    {n:1, c:"H", de:"Ihre Bekannte ist Mitte dreißig und sucht einen Partner, mit dem sie regelmäßig ins Kino gehen kann.", ar:"معرفتك في منتصف الثلاثينيات وتبحث عن شريك يمكنها الذهاب معه إلى السينما بانتظام.", ma:"صحابك فمنتصف الثلاثينات وكتقلب على شريك تقدر تمشي معاه للسينما.", en:"Your acquaintance is in her mid-thirties and is looking for a partner to go to the cinema with regularly.", fr:"Votre connaissance a la trentaine et cherche un partenaire avec qui aller régulièrement au cinéma."},
    {n:2, c:"I", de:"Sie wollen Ihren Garten verändern und suchen Beratung/Tipps.", ar:"ترغب في تغيير حديقتك وتبحث عن استشارات أو نصائح.", ma:"بغيتي تبدل الجنينة ديالك وكتقلب على نصايح.", en:"You want to change your garden and are looking for advice/tips.", fr:"Vous voulez changer votre jardin et cherchez des conseils."},
    {n:3, c:"J", de:"Der Sohn Ihrer Freunde hat gerade das Abitur gemacht und sucht im Sommer für zwei Monate einen Job.", ar:"ابن أصدقائك قد أنهى للتو الثانوية العامة ويبحث عن عمل لمدة شهرين في الصيف.", ma:"ولد صحابك داز الباك دابا وكيقلب على خدمة فالصيف لشهرين.", en:"Your friend's son has just graduated and is looking for a job for two months in the summer.", fr:"Le fils de vos amis vient d'avoir son bac et cherche un emploi pour deux mois en été."},
    {n:4, c:"X", de:"Ihr Freund möchte im Nebenjob Gartenarbeiten übernehmen.", ar:"يريد صديقك العمل في وظيفة جانبية تتعلق بأعمال الحدائق.", ma:"صاحبك بغى يدير شي خدمة جانبية فالبستنة.", en:"Your friend wants to take on garden work as a side job.", fr:"Votre ami veut prendre un petit boulot dans le jardinage."},
    {n:5, c:"K", de:"Ihr 45-jähriger Onkel sucht eine Partnerin, mit der er zusammen verreisen kann.", ar:"عمك البالغ من العمر 45 عامًا يبحث عن شريكة يمكنه السفر معها.", ma:"عمك اللي عندو 45 عام كيقلب على شريكة يسافر معاها.", en:"Your 45-year-old uncle is looking for a partner to travel with.", fr:"Votre oncle de 45 ans cherche une partenaire pour voyager."},
    {n:6, c:"B", de:"Sie möchten gern bei einem Film mitspielen und etwas Geld verdienen.", ar:"ترغب في المشاركة في فيلم وكسب بعض المال.", ma:"بغيتي تمثل فشي فيلم وتربح شي فلوس.", en:"You would like to act in a film and earn some money.", fr:"Vous aimeriez jouer dans un film et gagner de l'argent."},
    {n:7, c:"D", de:"Der Sohn Ihrer Freunde interessiert sich für die Geschichte des Autos. Am Sonntag wollen Sie ihm etwas Interessantes machen.", ar:"ابن أصدقائك مهتم بتاريخ السيارات، وتريد أن تقدم له شيئًا مثيرًا للاهتمام يوم الأحد.", ma:"ولد صحابك مهتم بتاريخ الطوموبيلات، وبغيتي تمشي بيه لشي بلاصة زوينة نهار الأحد.", en:"Your friend's son is interested in car history. On Sunday you want to do something interesting for him.", fr:"Le fils de vos amis s'intéresse à l'histoire de l'automobile. Dimanche, vous voulez lui faire découvrir quelque chose d'intéressant."},
    {n:8, c:"X", de:"Sie suchen eine Stelle und brauchen Tipps für ihre Bewerbungen.", ar:"تبحث عن وظيفة وتحتاج إلى نصائح لطلبات التوظيف الخاصة بك.", ma:"كتقلب على خدمة وكتحتاج نصايح على الCV ديالك.", en:"You are looking for a job and need tips for your applications.", fr:"Vous cherchez un emploi et avez besoin de conseils pour vos candidatures."},
    {n:9, c:"E", de:"Im Urlaub wollen Sie mit dem Auto eine Reise durch Deutschland machen und suchen ein passendes Angebot.", ar:"في الإجازة، تريد القيام برحلة بالسيارة عبر ألمانيا وتبحث عن عرض مناسب.", ma:"فالعطلة بغيتي تسافر بالطوموبيل فألمانيا وكتقلب على عرض مناسب.", en:"On vacation you want to take a car trip through Germany and are looking for a suitable offer.", fr:"En vacances, vous voulez faire un voyage en voiture à travers l'Allemagne et cherchez une offre adaptée."},
    {n:10, c:"L", de:"Ihre Bekannte möchte lernen, wie sie kleinere Reparaturen an ihrem Wagen selbst machen.", ar:"ترغب معارفك في تعلم كيفية إجراء إصلاحات بسيطة على سيارتها بنفسها.", ma:"صحابك بغات تتعلم كيفاش تصلح الطوموبيل ديالها بوحدها.", en:"Your acquaintance wants to learn how to do minor repairs on her car herself.", fr:"Votre connaissance veut apprendre à faire elle-même de petites réparations sur sa voiture."}
  ]
},
{
  id:"rita-sp1", title:"Rita", level:"B1", sub:"Sprach 1", type:"sprach1",
  text: "Liebe Catherine,\nich hab's geschafft! Endlich habe ich einen Job bekommen. Wie versprochen möchte ich dir gleich .....(1)..... erzählen. Am Anfang .....(2)..... ich ziemlich enttäuscht, weil ich auf meine vielen Bewerbungsschreiben insgesamt .....(3)..... zwei Antworten bekommen habe. Aber zum Glück hat einer davon .....(4).....: Ich werde nun zwei Nachmittage in der Woche als Babysitterin .....(5)..... einer Familie arbeiten, die zwei Kinder hat. Sie sind 3 und 5 Jahre alt und .....(6)..... sind sehr nett. Wir haben in der .....(7)..... Woche bereits Vieles gemeinsam gemacht, sind in den Zoo und .....(8)..... Kindermuseum gegangen. .....(9)..... kann man eine Stadt gar nicht kennenlernen, und es macht mir viel Spaß!\nFür heute wünsche ich dir alles Gute, schreibe mir bald, wie es dir .....(10)..... .\nLiebe Grüße\nDeine Tanja",
  items:[
    {n:1, c:"davon", opts:["dafür","damit","davon"]},
    {n:2, c:"war", opts:["bin","habe","war"]},
    {n:3, c:"nur", opts:["doch","nur","schon"]},
    {n:4, c:"gepasst", opts:["gepasst","passen","passt"]},
    {n:5, c:"bei", opts:["an","bei","zu"]},
    {n:6, c:"beide", opts:["beide","beiden","beides"]},
    {n:7, c:"ersten", opts:["erster","ersten","erstes"]},
    {n:8, c:"ins", opts:["im","in","ins"]},
    {n:9, c:"Besser", opts:["Am besten","Besser","Gut"]},
    {n:10, c:"geht", opts:["geht","geht's","ging"]}
  ]
},
{
  id:"rita-sp2", title:"Rita", level:"B1", sub:"Sprach 2", type:"sprach2",
  wordBank:[{k:"a",w:"der"},{k:"b",w:"die"},{k:"c",w:"Erst"},{k:"d",w:"geeignet"},{k:"e",w:"gerne"},{k:"f",w:"hätte"},{k:"g",w:"in"},{k:"h",w:"muss"},{k:"i",w:"nach"},{k:"j",w:"noch"},{k:"k",w:"schon"},{k:"l",w:"wann"},{k:"m",w:"wäre"},{k:"n",w:"wenn"},{k:"o",w:"wo"}],
  text: "Ihre Anzeige in der Frankfurter Rundschau\n\nSehr geehrte Frau Herrmann ,\n\nich habe Ihre Anzeige in der Frankfurter Rundschau vom 5. Oktober gelesen und interessiere mich sehr für die 3-Zimmer-Wohnung.\n\nZurzeit wohne ich noch in Krakau (Polen). Demnächst .....(1)..... ich aber aus beruflichen Gründen mit meinem Sohn (3 Jahre) .....(2)..... Frankfurt umziehen. Deshalb suche ich zum 1. November eine Wohnung, .....(3)..... möglichst zentral gelegen sein sollte. Ihre Wohnung .....(4)..... deshalb genau richtig für uns.\n\nIch hätte jedoch noch einige Fragen zu Ihrer Anzeige: Ist die Wohnung auch für Kleinkinder .....(5).....? Und gibt es in der näheren Umgebung einen Spielplatz, .....(6)..... mein Sohn spielen könnte? Außerdem würde ich .....(7)..... wissen, ob die Haltung von Haustieren in .....(8)..... Wohnung erlaubt ist. .....(9)..... es möglich ist, würden wir nämlich gerne unseren Hund mitbringen.\n\nIch danke Ihnen .....(10)..... jetzt für Ihre Antwort und grüße Sie freundlich.\n\nKASIA KLOC",
  items:[{n:1, c:"muss"},{n:2, c:"nach"},{n:3, c:"die"},{n:4, c:"wäre"},{n:5, c:"geeignet"},{n:6, c:"wo"},{n:7, c:"gerne"},{n:8, c:"der"},{n:9, c:"wenn"},{n:10, c:"schon"}]
},

// ================= CAROLINE =================
{
  id:"caroline-t1", title:"Caroline", level:"B1", sub:"Teile 1", type:"headings",
  options:[
    {k:"a", de:"Diskussion über Flughafen und Arbeitsplätze", ar:"نقاش حول المطار وفرص العمل", ma:"نقاش على المطار والخدمة", en:"Discussion about airport and jobs", fr:"Discussion sur l'aéroport et l'emploi"},
    {k:"b", de:"Flughafen Frankfurt beliebter Veranstaltungsort", ar:"مطار فرانكفورت: مكان مفضل للفعاليات", ma:"مطار فرانكفورت: بلاصة مفضلة للفعاليات", en:"Frankfurt Airport popular event location", fr:"L'aéroport de Francfort, lieu d'événements populaire"},
    {k:"c", de:"Umwelt und Flughafen: Ein Informationsabend der Bürger", ar:"البيئة والمطار: أمسية معلوماتية للمواطنين", ma:"البيئة والمطار: أمسية للمواطنين", en:"Environment and airport: citizens' info evening", fr:"Environnement et aéroport : soirée d'information citoyenne"},
    {k:"d", de:"Neue Kurse: Museumsführung für junge Väter", ar:"دورات جديدة: جولات في المتحف للآباء الشباب", ma:"دورات جديدة: جولات فالمتحف للآباء الشباب", en:"New courses: museum tour for young fathers", fr:"Nouveaux cours : visite de musée pour jeunes pères"},
    {k:"e", de:"Neue Kurse für Kinder", ar:"دورات جديدة للأطفال", ma:"دورات جديدة للدراري", en:"New courses for children", fr:"Nouveaux cours pour enfants"},
    {k:"f", de:"Experten gegen Vergrößerung des Flughafens", ar:"خبراء يعارضون توسيع المطار", ma:"خبراء ضد توسيع المطار", en:"Experts against airport expansion", fr:"Experts contre l'agrandissement de l'aéroport"},
    {k:"g", de:"Demonstration gegen Fluglärm", ar:"مظاهرة ضد الضوضاء الناتجة عن الطيران", ma:"مظاهرة ضد الصداع ديال الطيارات", en:"Demonstration against aircraft noise", fr:"Manifestation contre le bruit des avions"},
    {k:"h", de:"Familienbildung Schwerpunkt Beruf und Familie", ar:"التوفيق بين العمل والأسرة: محور تعليم الأسرة", ma:"التوفيق بين الخدمة والعائلة", en:"Family education focus on work and family", fr:"Éducation familiale axée sur le travail et la famille"},
    {k:"i", de:"Flughafen Frankfurt wird 10 Jahre", ar:"مطار فرانكفورت يحتفل بمرور 10 سنوات", ma:"مطار فرانكفورت كيحتفل بمرور 10 سنين", en:"Frankfurt Airport turns 10", fr:"L'aéroport de Francfort fête ses 10 ans"},
    {k:"j", de:"Neue Kurse: Spiele für Mütter und Kinder", ar:"دورات جديدة: ألعاب للأمهات والأطفال", ma:"دورات جديدة: ألعاب للأمهات والدراري", en:"New courses: games for mothers and children", fr:"Nouveaux cours : jeux pour mères et enfants"}
  ],
  items:[
    {n:1, c:"b", de:"Der Frankfurter Flughafen erfreut sich bei vielen Firmen als beliebter Ort für Veranstaltungen und Tagungen.", ar:"مطار فرانكفورت مكان مفضل للشركات لتنظيم الفعاليات والمؤتمرات.", ma:"مطار فرانكفورت بلاصة مفضلة للشركات باش ينظمو الفعاليات.", en:"Frankfurt Airport is a popular location for events and conferences for many companies.", fr:"L'aéroport de Francfort est un lieu populaire pour les événements et conférences de nombreuses entreprises."},
    {n:2, c:"h", de:"Das neue Halbjahresprogramm der Evangelischen Familienbildungsstätte bringt eine Übersicht. Diesmal steht das Thema Berufstätige Eltern im Mittelpunkt.", ar:"برنامج لمراكز التعليم الأسري حول التوفيق بين العمل والأسرة.", ma:"برنامج ديال مراكز التعليم الأسري على التوفيق بين الخدمة والعائلة.", en:"A program for family education centers on balancing work and family.", fr:"Un programme pour les centres d'éducation familiale sur la conciliation travail-famille."},
    {n:3, c:"e", de:"Die Volkshochschule Dornbirn bietet in den kommenden Wochen neue Kurse an. Am Mittwoch beginnen zwei Malkurse für Kinder.", ar:"دورات جديدة للأطفال، من رسم وأنشطة للآباء والأطفال وورشة طين.", ma:"دورات جديدة للدراري، بحال الرسم والأنشطة.", en:"New courses for children, including painting and activities.", fr:"Nouveaux cours pour enfants, dont peinture et activités."},
    {n:4, c:"c", de:"Der Frankfurter Flughafen wird weiter ausgebaut. Eine Gruppe von Frankfurter Bürgern lädt zu einem Informationsabend über den Ausbau ein.", ar:"أمسية معلومات يدعو إليها مواطنون ناشطون في البيئة حول توسعة المطار.", ma:"أمسية معلوماتية دعا ليها ناس ناشطين فالبيئة على توسيع المطار.", en:"An info evening hosted by environmentally active citizens about the airport expansion.", fr:"Une soirée d'information organisée par des citoyens actifs sur l'environnement concernant l'expansion de l'aéroport."},
    {n:5, c:"a", de:"Eine Bürgergruppe lädt zu einer öffentlichen Expertenbefragung zum Thema Arbeitsplätze am Frankfurter Flughafen ein.", ar:"لقاء عام مع خبراء حول فرص العمل في المطار.", ma:"لقاء عام مع الخبراء على فرص الخدمة فالمطار.", en:"A public expert panel on jobs at Frankfurt Airport.", fr:"Une table ronde publique d'experts sur l'emploi à l'aéroport de Francfort."}
  ]
},
{
  id:"caroline-t2", title:"Caroline", level:"B1", sub:"Teile 2", type:"mcq",
  paragraphs: [
    { de: "Anne und Melanie (beide 6) stehen Erzieherinnen mit Vorschlägen hilfreich zur Seite. Sie sind die Problemlöser im Kindergarten.", ar: "آن وميلاني (كلاهما 6 سنوات) تساعدان المربيات باقتراحات مفيدة.", ma: "آن وميلاني (بجوج عندهم 6 سنين) كيعاونو المربيات بالاقتراحات.", en: "Anne and Melanie (both 6) help educators with suggestions. They are the problem solvers in kindergarten.", fr: "Anne et Melanie (toutes deux 6 ans) aident les éducatrices avec des suggestions." },
    { de: "Im Rahmen dieses Projekts werden in städtischen Kindergärten zwei Wanderstationen mit je drei Multimedia-Computern installiert.", ar: "في إطار هذا المشروع، سيتم تركيب محطتين متنقلتين في رياض الأطفال البلدية.", ma: "فهاد المشروع، غادي يحطو جوج محطات متنقلين فرض الأطفال.", en: "As part of this project, two mobile stations will be installed in municipal kindergartens.", fr: "Dans le cadre de ce projet, deux stations mobiles seront installées dans les jardins d'enfants municipaux." },
    { de: "Bevor jedoch die Computer in die Kindergärten kamen, waren die Eltern aufzuklären. Bei manchen Eltern löste das Stichwort Computer akute Ängste aus.", ar: "لكن قبل أن تصل أجهزة الكمبيوتر إلى رياض الأطفال، كان لا بد من توعية الآباء.", ma: "ولكن قبل ما توصل الكمبيوترات لرض الأطفال، كان خاص توعية الوالدين.", en: "However, before the computers arrived in the kindergartens, the parents had to be educated.", fr: "Cependant, avant l'arrivée des ordinateurs dans les jardins d'enfants, il fallait informer les parents." },
    { de: "Diese Ängste haben sich inzwischen gelegt und die Erfahrung vor Ort zeigt, dass sie weitgehend überflüssig sind. Die Erzieherinnen achten auch darauf, dass die Kinder nie länger als 15 bis 20 Minuten vor den Computern sitzen, und holen vor allem kreative Software auf den Bildschirm.", ar: "لقد هدأت هذه المخاوف في غضون ذلك، وتظهر التجربة الميدانية أنها زائدة عن الحاجة إلى حد كبير. يحرص المربيات أيضاً على ألا يجلس الأطفال أمام الكمبيوتر لأكثر من 15 إلى 20 دقيقة، ويجلبون برامج إبداعية إلى الشاشة قبل كل شيء.", ma: "هاد المخاوف هدات دابا، والتجربة كتبين بلي هادشي زايد. المربيات كيحرصو بلي الدراري ما يقعدوش كثر من 15 ولا 20 دقيقة قدام الكمبيوتر، وكتجيبو ليهم برامج إبداعية.", en: "These fears have now subsided and experience on site shows that they are largely superfluous. The educators also make sure that the children never sit in front of the computers for longer than 15 to 20 minutes, and above all bring creative software to the screen.", fr: "Ces craintes se sont depuis lors apaisées et l'expérience sur le terrain montre qu'elles sont largement superflues. Les éducatrices veillent également à ce que les enfants ne restent jamais plus de 15 à 20 minutes devant les ordinateurs, et mettent surtout des logiciels créatifs à l'écran." },
    { de: "Das einsame Dämmern vor dem Computer ist wohl ohnehin eher Sache der Erwachsenen – die Kinder spielen immer zu zweit oder zu dritt an der Maschine. Eva Schilling hat beobachtet, dass die Kinder am Computer sehr friedlich miteinander umgehen, sie helfen sich gegenseitig, es gibt wenig Konflikte.", ar: "على أي حال، فإن النعاس الوحيد أمام الكمبيوتر هو بالأحرى من شؤون البالغين - فالأطفال يلعبون دائماً في مجموعات من شخصين أو ثلاثة على الجهاز. لاحظت إيفا شيلينغ أن الأطفال يتعاملون مع بعضهم البعض بسلام شديد على الكمبيوتر، ويساعدون بعضهم البعض، ولا يوجد سوى القليل من الصراعات.", ma: "القعدة بوحدك قدام الكمبيوتر هي حاجة ديال الكبار - الدراري ديما كيلعبو بجوج ولا بثلاثة. إيفا شيلينغ لاحظات بلي الدراري كيتعاملو مزيان مع بعضياتهم قدام الكمبيوتر، كيعاونو بعضياتهم، وما كاينش المشاكل.", en: "Lonely brooding in front of the computer is probably more a matter for adults anyway - the children always play in twos or threes on the machine. Eva Schilling has observed that the children treat each other very peacefully on the computer, they help each other, there are few conflicts.", fr: "La rêverie solitaire devant l'ordinateur est de toute façon plutôt l'affaire des adultes - les enfants jouent toujours à deux ou à trois sur la machine. Eva Schilling a observé que les enfants se traitent très paisiblement sur l'ordinateur, ils s'entraident, il y a peu de conflits." }
  ],
  items:[
    { n:1, c:"A", q:"Das Schulamt hat ein Projekt gestartet, bei dem", qar:"بدأ مكتب المدرسة مشروعاً حيث", qma:"بدا مكتب المدرسة شي مشروع فين", qen:"The school authority started a project where", qfr:"L'administration scolaire a lancé un projet où",
      opts:[
        {k:"A", de:"Computer in Kindergärten aufgestellt werden.", ar:"يتم وضع أجهزة الكمبيوتر في رياض الأطفال.", ma:"كيحطو الكمبيوترات فرض الأطفال.", en:"computers are set up in kindergartens.", fr:"des ordinateurs sont installés dans les jardins d'enfants."},
        {k:"B", de:"Computerspiele für Vierjährige entwickelt werden sollen.", ar:"تطوير ألعاب كمبيوتر للأطفال في الرابعة.", ma:"يطورو ألعاب للدراري اللي عندهم 4 سنين.", en:"computer games for four-year-olds should be developed.", fr:"des jeux informatiques pour les enfants de quatre ans doivent être développés."},
        {k:"C", de:"Kinder neue Farbdrucker ausprobieren sollen.", ar:"يجب أن يجرب الأطفال طابعات ملونة جديدة.", ma:"الدراري خاصهم يجربو طابعات ملونة جداد.", en:"children should try out new color printers.", fr:"les enfants devraient essayer de nouvelles imprimantes couleur."}
      ]
    },
    { n:2, c:"A", q:"Die Kinder", qar:"الأطفال", qma:"الدراري", qen:"The children", qfr:"Les enfants",
      opts:[
        {k:"A", de:"hatten großen Spaß bei dem Projekt.", ar:"استمتعوا كثيراً بالمشروع.", ma:"مبسطين بزاف بالمشروع.", en:"had a lot of fun with the project.", fr:"se sont beaucoup amusés avec le projet."},
        {k:"B", de:"wollten lieber draußen im Freien spielen.", ar:"أرادوا اللعب في الخارج.", ma:"بغاو يلعبو برا.", en:"would rather play outside.", fr:"préféraient jouer dehors."},
        {k:"C", de:"wussten nicht, wann sie ins Studio im Netz gehen sollten.", ar:"لم يعرفوا متى يذهبون إلى استوديو الإنترنت.", ma:"ما عرفوش إمتى يمشيو لاستوديو الأنترنيت.", en:"didn't know when to go to the internet studio.", fr:"ne savaient pas quand aller au studio internet."}
      ]
    },
    { n:3, c:"A", q:"Eltern fürchten, dass", qar:"الآباء يخافون من أن", qma:"الوالدين كيخافو من أن", qen:"Parents fear that", qfr:"Les parents craignent que",
      opts:[
        {k:"A", de:"der Computer ihren Kindern schadet.", ar:"الكمبيوتر يضر أطفالهم.", ma:"الكمبيوتر يضر الدراري ديالهم.", en:"the computer harms their children.", fr:"l'ordinateur nuise à leurs enfants."},
        {k:"B", de:"ihre Kinder nicht so früh aufstehen können.", ar:"أطفالهم لا يستطيعون الاستيقاظ مبكراً.", ma:"الدراري ديالهم ما يقدروش يفيقو بكري.", en:"their children can't get up so early.", fr:"leurs enfants ne puissent pas se lever si tôt."},
        {k:"C", de:"ihre Kinder vor dem Computer Angst haben.", ar:"أطفالهم يخافون من الكمبيوتر.", ma:"الدراري ديالهم كيخافو من الكمبيوتر.", en:"their children are afraid of the computer.", fr:"leurs enfants aient peur de l'ordinateur."}
      ]
    },
    { n:4, c:"C", q:"Die Erzieherinnen", qar:"المربيات", qma:"المربيات", qen:"The educators", qfr:"Les éducatrices",
      opts:[
        {k:"A", de:"arbeiten jeden Tag 15 bis 20 Minuten am Computer.", ar:"يعملون يومياً 15 إلى 20 دقيقة على الكمبيوتر.", ma:"كيخدمو كل نهار 15 لـ 20 دقيقة على الكمبيوتر.", en:"work on the computer every day for 15 to 20 minutes.", fr:"travaillent sur l'ordinateur tous les jours pendant 15 à 20 minutes."},
        {k:"B", de:"spielen immer mit zwei oder drei Kindern am Computer.", ar:"يلعبون دائماً مع طفلين أو ثلاثة على الكمبيوتر.", ma:"كيلعبو ديما مع جوج ولا ثلاثة دراري على الكمبيوتر.", en:"always play with two or three children on the computer.", fr:"jouent toujours avec deux ou trois enfants sur l'ordinateur."},
        {k:"C", de:"wählen für die Kinder die Software aus.", ar:"يختارون البرامج للأطفال.", ma:"كيختارو البرامج للدراري.", en:"choose the software for the children.", fr:"choisissent le logiciel pour les enfants."}
      ]
    },
    { n:5, c:"B", q:"Wenn die Kinder am Computer sitzen, dann", qar:"عندما يجلس الأطفال على الكمبيوتر، فإنهم", qma:"ملي كيقعدو الدراري على الكمبيوتر، كيديرو", qen:"When the children sit at the computer, then", qfr:"Lorsque les enfants sont assis à l'ordinateur, alors",
      opts:[
        {k:"A", de:"gibt es häufig Streit.", ar:"غالباً ما يكون هناك شجار.", ma:"غالباً كيكون الشجار.", en:"there is often arguing.", fr:"il y a souvent des disputes."},
        {k:"B", de:"hilft ein Kind dem anderen.", ar:"يساعد طفل الآخر.", ma:"كينعاون طفل الآخر.", en:"one child helps the other.", fr:"un enfant aide l'autre."},
        {k:"C", de:"können sich die meisten nicht lange konzentrieren.", ar:"معظمهم لا يستطيعون التركيز لفترة طويلة.", ma:"أغلبهم ما يقدروش يركزو لمدة طويلة.", en:"most of them can't concentrate for long.", fr:"la plupart d'entre eux ne peuvent pas se concentrer longtemps."}
      ]
    }
  ]
},
{
  id:"caroline-t3", title:"Caroline", level:"B1", sub:"Teile 3", type:"matching",
  ads:[
    {k:"A", t:"Museum der Stadt Füssen", de:"Lechhalde 3 · 87629 Füssen", ar:"متحف مدينة فوسن", ma:"متحف مدينة فوسن", en:"Museum of the city of Füssen", fr:"Musée de la ville de Füssen"},
    {k:"B", t:"Franziskaner Stüberl", de:"Gutbürgerliche Allgäuer und Bayerische Küche", ar:"مطعم بافاري", ma:"مطعم بافاري", en:"Bavarian restaurant", fr:"Restaurant bavarois"},
    {k:"C", t:"Sennerei-Genossenschaft Bayern", de:"Allgäuer Emmentaler, Bergkäse", ar:"تعاونية أجبان", ma:"تعاونية أجبان", en:"Cheese cooperative", fr:"Coopérative fromagère"},
    {k:"D", t:"Sprachen lernen & Leute treffen", de:"Bildungsurlaub für Erwachsene", ar:"تعلم اللغات", ma:"تعلم اللغات", en:"Language learning", fr:"Apprentissage des langues"},
    {k:"E", t:"Jahreskonzert Füssen", de:"Mozart, Klavierkonzert", ar:"حفل موسيقي", ma:"حفل موسيقي", en:"Annual concert", fr:"Concert annuel"},
    {k:"F", t:"Das Heimatmuseum Füssen", de:"Montag bis Freitag geöffnet", ar:"متحف التراث", ma:"متحف التراث", en:"Heritage museum", fr:"Musée du patrimoine"},
    {k:"G", t:"bonCas", de:"Spezialitätenkäserei", ar:"مصنع أجبان", ma:"مصنع أجبان", en:"Cheese factory", fr:"Fromagerie"},
    {k:"H", t:"Alfa Sprachreisen", de:"High-School-Programme für 12- bis 18-Jährige", ar:"رحلات لغوية", ma:"رحلات لغوية", en:"Language trips", fr:"Voyages linguistiques"},
    {k:"I", t:"Amadeus", de:"Cafe, Bistro", ar:"مقهى", ma:"مقهى", en:"Cafe", fr:"Café"},
    {k:"J", t:"Free-System", de:"Englisch, Französisch, Intensivkurse", ar:"نظام لغات", ma:"نظام لغات", en:"Language system", fr:"Système de langues"},
    {k:"K", t:"Ritterstub’n", de:"Fischspezialitäten", ar:"مطعم أسماك", ma:"مطعم أسماك", en:"Fish restaurant", fr:"Restaurant de poisson"},
    {k:"L", t:"Alpenrösle", de:"Hotel-Restaurant", ar:"فندق ومطعم", ma:"فندق ومطعم", en:"Hotel-restaurant", fr:"Hôtel-restaurant"}
  ],
  items:[
    {n:1, c:"E", de:"Sie wollen am Wochenende gerne in ein Klavierkonzert gehen.", ar:"ترغب في الذهاب إلى حفل بيانو في نهاية الأسبوع.", ma:"بغيتي تمشي لحفل بيانو فآخر السيمانة.", en:"You want to go to a piano concert on the weekend.", fr:"Vous voulez aller à un concert de piano le week-end."},
    {n:2, c:"F", de:"Sie sind in Füssen und wollen am Montag ins Museum gehen.", ar:"أنت في فوسن وتريد الذهاب إلى المتحف يوم الاثنين.", ma:"نتا ففوسن وبغيتي تمشي للمتحف نهار الاثنين.", en:"You are in Füssen and want to go to the museum on Monday.", fr:"Vous êtes à Füssen et voulez aller au musée lundi."},
    {n:3, c:"B", de:"Sie sind in Süddeutschland im Urlaub und möchten gerne eine bayerische Spezialität essen.", ar:"أنت في جنوب ألمانيا في إجازة وترغب في تذوق إحدى الأطباق البافارية.", ma:"نتا فجنوب ألمانيا فالعطلة وبغيتي تاكل ماكلة بافارية.", en:"You are on vacation in southern Germany and want to eat a Bavarian specialty.", fr:"Vous êtes en vacances dans le sud de l'Allemagne et souhaitez manger une spécialité bavaroise."},
    {n:4, c:"K", de:"Sie haben sich mit Bekannten zu einem Fischessen verabredet.", ar:"لقد قمت بترتيب لقاء مع معارفك لتناول وجبة سمك.", ma:"دوزتي موعد مع صحابك باش تاكلو الحوت.", en:"You have arranged to meet acquaintances for a fish dinner.", fr:"Vous avez organisé un dîner de poisson avec des connaissances."},
    {n:5, c:"C", de:"Sie sind in Bayern und wollen Käsespezialitäten einkaufen.", ar:"أنت في بافاريا وترغب في شراء منتجات الجبن المتخصصة.", ma:"نتا فبافاريا وبغيتي تشري الجبن.", en:"You are in Bavaria and want to buy cheese specialties.", fr:"Vous êtes en Bavière et voulez acheter des spécialités fromagères."},
    {n:6, c:"X", de:"Sie möchten einen Deutschkurs in Wien besuchen.", ar:"ترغب في حضور دورة لتعلم اللغة الألمانية في فيينا.", ma:"بغيتي تمشي لدورة ديال الألمانية ففيينا.", en:"You want to attend a German course in Vienna.", fr:"Vous voulez suivre un cours d'allemand à Vienne."},
    {n:7, c:"H", de:"Ihr 16 jähriger Sohn soll in den Ferien im Ausland Englisch lernen.", ar:"ابنك البالغ من العمر 16 عاماً يجب أن يتعلم الإنجليزية في الخارج خلال العطلة.", ma:"ولدك اللي عندو 16 عام خاصو يتعلم الإنجليزية فالخارج فالعطلة.", en:"Your 16-year-old son should learn English abroad during the holidays.", fr:"Votre fils de 16 ans devrait apprendre l'anglais à l'étranger pendant les vacances."},
    {n:8, c:"X", de:"Sie interessieren sich für einen Sprachkurs auf CD.", ar:"تهتم بدورة لتعلم اللغة على أقراص مدمجة.", ma:"مهتم بدورة ديال اللغة على سي دي.", en:"You are interested in a language course on CD.", fr:"Vous êtes intéressé par un cours de langue sur CD."},
    {n:9, c:"X", de:"Sie wollen, dass Ihre 10-jährige Tochter in den Ferien eine Fremdsprache lernt.", ar:"ترغب في أن تتعلم ابنتك البالغة من العمر 10 سنوات لغة أجنبية خلال العطلة.", ma:"بغيتي بنتك اللي عندها 10 سنين تتعلم لغة فالعطلة.", en:"You want your 10-year-old daughter to learn a foreign language during the holidays.", fr:"Vous voulez que votre fille de 10 ans apprenne une langue étrangère pendant les vacances."},
    {n:10, c:"L", de:"Eine Bekannte will ihren Geburtstag in einem Restaurant feiern und dort auch übernachten.", ar:"ترغب إحدى معارفك في الاحتفال بعيد ميلادها في مطعم والإقامة هناك أيضاً.", ma:"صحابك بغات تحتفل بعيد ميلادها فمطعم وتبات تما.", en:"An acquaintance wants to celebrate her birthday in a restaurant and stay overnight.", fr:"Une connaissance veut fêter son anniversaire dans un restaurant et y passer la nuit."}
  ]
},
{
  id:"caroline-sp1", title:"Caroline", level:"B1", sub:"Sprach 1", type:"sprach1",
  text: "Liebe Catherine,\nseit ich dir letzte Mal von meinem Sprachhaufenhalt in der Schweiz .....(1)..... habe, ist viel passiert. Ich kenne .....(2)..... Land jetzt schon recht gut. Die Schweiz ist ja wirklich nicht groß. .....(3)..... in jeder Gegend wird ein anderer Dialekt oder gar eine andere Sprache gesprochen. Das ist .....(4)..... mich fast unglaublich! Bei uns in Australien fährt man mit dem Auto 24 Stunden lang geradeaus, und .....(5)..... man ankommt, dann sprechen die Leute dort immer noch dieselbe Sprache. Am Anfang hat mich das Sprachgemisch .....(6)..... sehr verwirrt, aber .....(7)..... verstehe ich fast alles, wenn jemand auf Schweizerdeutsch zu mir spricht. Ich kann aber nur auf Hochdeutsch antworten. Zwischen der Schule hier und unserem Schulsystem in Australien gibt es einige .....(8).....: In der Schweiz sprechen die Lehrer viel und die Schüler .....(9)..... Vieles im Kopf behalten oder aufschreiben. In Australien arbeiten wir meistens im Rahmen von Projekten und machen eigentlich alle Aufgaben auf .....(10)..... Computer.\nViele Grüße\nJack",
  items:[
    {n:1, c:"erzählt", opts:["erzähle","erzählen","erzählt"]},
    {n:2, c:"dieses", opts:["diese","diesen","dieses"]},
    {n:3, c:"aber", opts:["aber","obwohl","sondern"]},
    {n:4, c:"für", opts:["an","für","vor"]},
    {n:5, c:"wenn", opts:["als","wann","wenn"]},
    {n:6, c:"schon", opts:["wenn","ganz","schon"]},
    {n:7, c:"jetzt", opts:["früher","jetzt","seit"]},
    {n:8, c:"Unterschiede", opts:["Unterschied","Unterschiede","Unterschieden"]},
    {n:9, c:"müssen", opts:["brauchen","haben","müssen"]},
    {n:10, c:"dem", opts:["dem","den","der"]}
  ]
},
{
  id:"caroline-sp2", title:"Caroline", level:"B1", sub:"Sprach 2", type:"sprach2",
  wordBank:[{k:"a",w:"bei"},{k:"b",w:"bereits"},{k:"c",w:"einmal"},{k:"d",w:"Eure"},{k:"e",w:"ganz"},{k:"f",w:"garantieren"},{k:"g",w:"Gestern"},{k:"h",w:"können"},{k:"i",w:"machen"},{k:"j",w:"nur"},{k:"k",w:"statt"},{k:"l",w:"Technisch"},{k:"m",w:"Über"},{k:"n",w:"Unser"},{k:"o",w:"wenn"}],
  text: "QUANTUM-SYSTEM\n\nDas Lotterie – Systemspiel\n\nOtto – Suhr- Allee 100. D- 10120 Berlin\n\nSehr geehrte Lottospieler,\n\nwer möchte nicht auch .....(1)..... bei sechs Richtigen im Lotto dabei sein? Vertrauen Sie beim Lottospiel nicht .....(2)..... auf das Glück, denn Sie .....(3)..... Ihre Chancen selbst stark verbessern, .....(4)..... Sie mit unserem Lotterie-System spielen – und das für nur 5 Euro in der Woche! .....(5)..... allein zu spielen, spielen Sie mit uns in einer starken Spielergemeinschaft. Dadurch erhöhen sich .....(6)..... automatisch Ihre Chancen! Und was Sie gewinnen können? .....(7)..... unserem Quantum-System spielen Sie mit einer Chance auf einen Gewinn von 1 Million Euro! Alle Gewinne erhalten Sie umgehend und ungekürzt zu 100% – das .....(8)..... wir Ihnen!\n\nDavon habe ich mich selbst überzeugt! Spielen Sie mit uns das Quantum-System: .....(9)..... 700 Quantum-Systemspielgruppen haben zusammen schon über sieben Millionen Euro gewonnen.\n\nHerzliche Grüße\nIhre SABINE MEIER-PÜTZ\n\nPS: Als besondere Gewinnchance erhalten Sie heute das Vier-Richtige-Gratisspiel. .....(10)..... Sie hier unbedingt mit und gewinnen Sie! Ich drücke Ihnen die Daumen……",
  items:[{n:1, c:"einmal"},{n:2, c:"nur"},{n:3, c:"können"},{n:4, c:"wenn"},{n:5, c:"statt"},{n:6, c:"ganz"},{n:7, c:"bei"},{n:8, c:"garantieren"},{n:9, c:"Über"},{n:10, c:"machen"}]
},

// ================= VERA (غير Teil 1) =================
{
  id:"vera-t1", title:"Vera", level:"B1", sub:"Teile 1", type:"headings",
  options:[
    {k:"a", de:"Abendwanderungen ab 89 Euro", ar:"جولات مسائية من 89 يورو", ma:"جولات فالليل من 89 يورو", en:"Evening hikes from 89 euros", fr:"Randonnées nocturnes à partir de 89 euros"},
    {k:"b", de:"Ausflugsziele für Literaturinteressierte", ar:"أهداف سياحية لمحبي الأدب", ma:"بلايص سياحية لمحبي الكتب", en:"Excursion destinations for literature lovers", fr:"Destinations d'excursion pour les amateurs de littérature"},
    {k:"c", de:"Hinweis für Besucher der Bregenzer Festspiele", ar:"ملاحظة لزوار مهرجان بريغنتس", ma:"ملاحظة لزوار مهرجان بريغنتس", en:"Notice for visitors to the Bregenz Festival", fr:"Avis aux visiteurs du festival de Bregenz"},
    {k:"d", de:"Ihre Zeitung folgt Ihnen in den Urlaub", ar:"صحيفتك تتبعك في العطلة", ma:"الجريدة ديالك كتتبعك فالعطلة", en:"Your newspaper follows you on vacation", fr:"Votre journal vous suit en vacances"},
    {k:"e", de:"Laute Musik stört den Nachbarn", ar:"الموسيقى الصاخبة تزعج الجار", ma:"الموسيقى اللي عالية كتقلق الجيران", en:"Loud music disturbs the neighbor", fr:"La musique forte dérange le voisin"},
    {k:"f", de:"Musikveranstaltungen am Nachmittag", ar:"فعاليات موسيقية بعد الظهر", ma:"حفلات موسيقية فالعشية", en:"Afternoon music events", fr:"Événements musicaux l'après-midi"},
    {k:"g", de:"Neue Zeitung für Ihre Urlaubsplanung", ar:"صحيفة جديدة لتخطيط عطلتك", ma:"جريدة جديدة لتخطيط العطلة", en:"New newspaper for your vacation planning", fr:"Nouveau journal pour planifier vos vacances"},
    {k:"h", de:"Rekord: 70.000 Besucher im Bücherdorf", ar:"رقم قياسي: 70,000 زائر في قرية الكتب", ma:"رقم قياسي: 70,000 زائر فقرية الكتب", en:"Record: 70,000 visitors in the book village", fr:"Record : 70 000 visiteurs dans le village du livre"},
    {k:"i", de:"Schlechtes Wetter: Festspiele abgesagt", ar:"طقس سيئ: إلغاء المهرجانات", ma:"الجو خايب: المهرجانات تلغات", en:"Bad weather: festivals canceled", fr:"Mauvais temps : festivals annulés"},
    {k:"j", de:"Wandern ohne Gepäck", ar:"المشي بدون أمتعة", ma:"المشي بلا حوايج", en:"Hiking without luggage", fr:"Randonnée sans bagages"}
  ],
  items:[
    {n:1, c:"d", de:"Wenn Sie verreisen, wünschen wir ihnen erholsame Ferien. Bitte denken Sie daran, sich ihre Zeitung in den Urlaubtort nachsenden zu lassen.", ar:"صحيفتك تتبعك في العطلة.", ma:"الجريدة ديالك كتتبعك فالعطلة.", en:"Your newspaper follows you on vacation.", fr:"Votre journal vous suit en vacances."},
    {n:2, c:"j", de:"Im Luftkurort Stadtkylf werden dreitägige Wanderungen ohne Gepäck veranstaltet. Die Betriebe übernehmen den Gepäcktransport.", ar:"المشي بدون أمتعة.", ma:"المشي بلا حوايج.", en:"Hiking without luggage.", fr:"Randonnée sans bagages."},
    {n:3, c:"e", de:"Für den einen ist es musikalischer Hochgenuss für den anderen schlicht Lärm. Die Gemeinde weist auf Mittagsruhe hin.", ar:"الموسيقى الصاخبة تزعج الجار.", ma:"الموسيقى اللي عالية كتقلق الجيران.", en:"Loud music disturbs the neighbor.", fr:"La musique forte dérange le voisin."},
    {n:4, c:"b", de:"Das erste deutsche Bücherdorf hat in Mühlbeck seine Tore geöffnet. In acht Antiquariaten warten über 70 000 Bücher.", ar:"أهداف سياحية لمحبي الأدب (قرية الكتب).", ma:"بلايص سياحية لمحبي الكتب (قرية الكتب).", en:"Excursion destinations for literature lovers (book village).", fr:"Destinations d'excursion pour les amateurs de littérature (village du livre)."},
    {n:5, c:"c", de:"Die Bregenzer Festspiele sind bemüht, die Vorstellungen auch bei leichtem Regen auf der Seebühne abzuhalten.", ar:"ملاحظة لزوار مهرجان بريغنتس.", ma:"ملاحظة لزوار مهرجان بريغنتس.", en:"Notice for visitors to the Bregenz Festival.", fr:"Avis aux visiteurs du festival de Bregenz."}
  ]
}
];

var HOREN_EXAMS = [
  {
    id: "h1", title: "Einkäufe im Internet", level: "B1", sub: "Teile 1", type: "horen",
    audio: [
      { text: "Verstehen. Teil 1. Sie hören nun 5 kurze Texte. Dazu sollen Sie 5 Aufgaben lösen.", pitch: 1.0, rate: 0.95 },
      { text: "In der heutigen Sendung geht es um persönliche Erfahrungen mit dem Einkaufen im Internet. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Ich erledige meine Einkäufe fast ausschließlich online. Das spart mir viel Zeit, besonders nach einem langen Arbeitstag. In ein Geschäft gehe ich nur, wenn es wirklich notwendig ist.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 42.", pitch: 1.0, rate: 0.95 },
      { text: "Ehrlich gesagt ist mir das Zwischenmenschliche beim Einkaufen nicht so wichtig. Ich bevorzuge es, meine Sachen schnell und ohne lange Gespräche zu besorgen.", pitch: 1.2, rate: 1.0 },
      { text: "Nummer 43.", pitch: 1.0, rate: 0.95 },
      { text: "Wenn ich dann im Internet enterbrochen. Ich finde einfach keine ruhige Minute, um in Ruhe Preise zu vergleichen.", pitch: 1.2, rate: 1.0 },
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
    id: "h2", title: "Bus zur Arbeit (Andreas 1 und 2)", level: "B1", sub: "Teile 1", type: "horen",
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
    id: "h3", title: "Bus zur Arbeit (Vera)", level: "B1", sub: "Teile 1", type: "horen",
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
    id: "h4", title: "Arbeitsplatz für Vater", level: "B1", sub: "Teile 1", type: "horen",
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
    id: "h5", title: "Einzelkind", level: "B1", sub: "Teile 1", type: "horen",
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
    id: "h6", title: "Urlaub", level: "B1", sub: "Teile 1", type: "horen",
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
    id: "h7", title: "Kinder in der Schule", level: "B1", sub: "Teile 1", type: "horen",
    audio: [
      { text: "Hörverstehen Teil 1. Sie hören nun 5 kurze Texte. Mit Beiträgen von Deutschlehrer Orhan Yiğit. Nummer 41.", pitch: 1.0, rate: 0.95 },
      { text: "Also, ich finde es sehr wichtig, dass meine Kinder gute Noten bekommen. Die Schule ist der Schlüssel für ihre Zukunft. Ich achte darauf, dass sie lernen und ihre Hausaufgaben machen.", pitch: 1.1, rate: 1.0 },
      { text: "Nummer 42. Für mich ist es selbstverständlich, dass Eltern immer für ihre Kinder da sind. Ich höre zu und unterstütze sie, wann immer sie mich brauchen.", pitch: 0.8, rate: 1.0 },
      { text: "Nummer 43. Ich denke, ich spreche schon sehr oft mit meiner Tochter. Wir erzählen uns alles. Ich sehe keinen Grund, warum ich noch mehr sprechen sollte.", pitch:
