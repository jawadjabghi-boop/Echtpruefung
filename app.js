const { useState, useEffect, useRef } = React;

// ✅ 1. إعدادات الواتساب
const WA = "212680193427"; 
const wa = (t) => window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(t), "_blank");

// ✅ 2. إعدادات Supabase
const supabaseUrl = 'https://ldatleskngsvoxwbiqtd.supabase.co';
const supabaseKey = 'sb_publishable_6UXiEWOS8YkGZTiT2jQRlA_K7HgONtL';
const sb = supabase.createClient(supabaseUrl, supabaseKey);

// ✅ 3. ربط البيانات
const { UI_TEXTS, LANGS, SCHREIBEN_DATA, PRUEFUNG_DATA, EXAMS, HOREN_EXAMS } = window;
const t = (key, lang) => (UI_TEXTS && UI_TEXTS[lang] && UI_TEXTS[lang][key]) || (UI_TEXTS && UI_TEXTS.en && UI_TEXTS.en[key]) || key;

// ✅ 4. لائحة الدروس
const PLACEHOLDER_LESSONS = {
  "Lesen": {
    "Teile 1": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2"],
    "Teile 2": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2"],
    "Teile 3": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2"],
    "Sprach 1": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Corina", "Petra", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Liebe Olivia."],
    "Sprach 2": ["Alex Und Cora", "Rita", "Caroline", "Vera", "Eva", "Paul", "Iris", "Jan", "Miroslav", "Andreas 1", "Annika 2", "Sonja", "Nadja / Claudia", "Karla", "Viktor", "Moritz", "Petra", "Corina", "Tamara / Jakob", "Nicole", "Andreas 2", "Thomas / Anna", "Sophie", "Alicia", "Annika 1", "Jennifer", "Mara", "Miroslav 2."]
  },
  "Hören": {
    "Teile 1": ["Einkäufe im Internet", "Bus zur Arbeit", "Arbeitsplatz für Vater", "Einzelkind", "Urlaub", "Kinder in der Schule", "Radwege", "Fremdsprache"],
    "Teile 2": ["Vorlesung", "Interview", "Radiobericht"],
    "Teile 3": ["Gespräch im Büro", "Dialog im Alltag"]
  },
  "Schreiben": [
    "Urlaub Im Schwarzwald", "Eva - Traumberuf", "Sophie - Würzburg", "Nadja - Garten", 
    "Nicole - Probleme", "Andreas - Neuer Kollege", "Annika - Sommerurlaub", 
    "Iris - Abschlussparty", "Caroline - Gastschülerin", "Vera - Arbeitsweg", 
    "Jennifer - Einladung", "Andreas - Neue Wohnung", "Thomas - Überraschungsausflug", 
    "Tamara - Treffen", "Jan - Urlaub", "Viktor - Urlaub", "Anna - Katze", 
    "Nora - Neue Wohnung", "Claudia - Zoobesuch", "Karla - Umzug", "Mara - Reise", 
    "Annika - Urlaub 2", "Sonja - Musikfestival", "Rita - Hochzeit", 
    "Anne - Geburtstag", "Paul - Ausflug", "Jakob - Nachbarn", "Emilia", 
    "Tobias", "Naco", "Alicia", "Cora Und Alex", "Miroslav", "Corinna", "Moritz"
  ],
  "Sprechen": []
};

// ✅ 5. الدروس المعدلة المجانية (كاملة بلا اختصار)
const FREE_MODIFIED_LESSONS = [
  {
    id: "rita-t1-mod", title: "Rita", sub: "Teile 1", level: "B1", type: "headings", desc: "المعدل",
    options: [
      { k: "a", de: "Schweizer sollen gesunder leben", ar: "يجب على السويسريين أن يعيشوا حياة أكثر صحة" },
      { k: "b", de: "Neu im Trend: Jung und Gesund - mit dem Schokolade", ar: "الجديد في الموضة: الشباب والصحة - مع الشوكولاتة" },
      { k: "c", de: "Heiraten kann zu mehr Kilos führen – das zeigt eine Studie", ar: "الزواج يمكن أن يؤدي إلى زيادة الوزن - هذا ما تظهره دراسة" },
      { k: "d", de: "Japanische Studie: Vielschläfer leben länger", ar: "دراسة يابانية: الأشخاص الذين ينامون كثيراً يعيشون أطول" },
      { k: "e", de: "Die Mehrheit der Schweizer treibt aktiv Sport", ar: "غالبية السويسريين يمارسون الرياضة بانتظام" },
      { k: "f", de: "Statistik: Unverheiratete haben oft ein paar Kilos zu viel", ar: "إحصائيات: غير المتزوجين غالباً ما يعانون من زيادة الوزن" },
      { k: "g", de: "Teures Essen für mehr Jugend und Schönheit", ar: "طعام باهظ الثمن من أجل شباب وجمال دائم" },
      { k: "h", de: "USA: Nachfrage nach freuen Lebensmitteln geht zurück", ar: "الولايات المتحدة: تراجع الطلب على الأغذية المجانية" },
      { k: "i", de: "Schokolade essen - jung bleiben", ar: "تناول الشوكولاتة - البقاء شاباً" },
      { k: "j", de: "Weniger schlafen - länger leben", ar: "النوم أقل - العيش أطول" }
    ],
    items: [
      { n: 1, c: "b", de: "Der Schokolade-Boom zeigt sich hierzulande nicht nur im hohen Verbrauch (jeder Schweizer isst fast 12 Kilo Schokolade im Jahr!), nein, er hat nun auch die Schönheitsindustrie erreicht. Vom 16. Januar bis zum 24. Februar bietet das Grand Hotel Bad Ragaz unter dem Namen Choco Therapy zahlreiche kosmetische Behandlungsmethoden mit Schokolade an Die Bäder Massagen und Hautcremes mit Kakao sind durchaus ernst gemeint, denn Kakao soll eine belebende Eigenschaft haben, die den Menschen jung und gesund aussehen lässt.", ar: "يشهد قطاع التجميل في سويسرا توجهاً جديداً يعكس مدى ارتباط الشعب السويسري بالشوكولاتة التي يستهلك الفرد منها قرابة اثني عشر كيلوغراماً سنوياً حيث أطلق فندق \"جراند هوتيل باد راغاتس\" برنامجاً علاجياً مميزاً تحت مسمى \"Choco Therapy\" يمتد من منتصف يناير وحتى أواخر فبراير وتتضمن هذه الخدمة المبتكرة استخدام الكاكاو في جلسات الاستحمام والتدليك وصناعة الكريمات الجلدية نظراً لفوائده الكبيرة في تنشيط الدورة الدموية ومنح الجلد مظهراً حيوياً وشاباً يجمع بين الصحة والجمال." },
      { n: 2, c: "c", de: "Frisch verheiratete Paare nehmen oft schon in den Flitterwochen einige Kilos zu, weil sie ihre Essgewohnheiten ändern. Das belegt eine neue Studie. In Deutschland sind fast die Hälfte der verheirateten Frauen und circa zwei Drittel der Ehrenmänner übergewichtig. Alleinstehende sind vermutlich schlanker, weil sie besonderen Wert auf ihr Äußeres legen, mehr Sport treiben und sich selten Zeit für gemütliche Mahlzeiten nehmen.", ar: "تؤكد دراسة حديثة أن الأزواج الجدد غالباً ما يكتسبون وزناً إضافياً منذ بداية شهر العسل نتيجة لتغير نمط عاداتهم الغذائية حيث تشير الأرقام في ألمانيا إلى أن قرابة نصف النساء المتزوجات وحوالي ثلثي الرجال المتزوجين يعانون من زيادة الوزن وفي المقابل يميل العزاب إلى الحفاظ على رشاقة أكبر نظراً لاهتمامهم المتزايد بمظهرهم الخارجي وحرصهم على ممارسة الرياضة بشكل مكثف بالإضافة إلى أنهم نادراً ما يخصصون وقتاً طويلاً لتناول الوجبات الجماعية المريحة التي تميز حياة المتزوجين." },
      { n: 3, c: "j", de: "Wer acht Stunden und länger schläft, hat eine deutlich kürzere Lebenserwartung. Das berichtete das Apothekenmagazin Gesundheit am Mittwoch und bezog sich dabei auf eine neue japanische Studie Schlecht für die Männer, denn laut dieser Studie schlafen Männer im Durchschnitt eine halbe Stunde länger pro Nacht als Frauen. Aber es gibt auch eine gute Nachricht für die Viel-und Langschläfer: Wer lange schläft, hat weniger Gewichtsprobleme und fünf sich gesünder.", ar: "أفادت مجلة الصيدلية \"Gesundheit\" استناداً إلى دراسة يابانية حديثة بأن النوم لمدة ثماني ساعات أو أكثر يرتبط بشكل ملحوظ بقصر متوسط العمر المتوقع وهو ما يعد مؤشراً سلبياً للرجال الذين ينامون في المتوسط نصف ساعة إضافية كل ليلة مقارنة بالنساء إلا أن الدراسة حملت في طياتها خبراً سعيداً لمحبي النوم الطويل حيث تبين أنهم أقل عرضة للإصابة بمشاكل الوزن الزائد ويتمتعون بشعور أكبر بالصحة والحيوية مقارنة بغيرهم." },
      { n: 4, c: "a", de: "Nach dem Motto beschwingt und bewegt starten die Schweizer Gesundheitsbehörden eine landesweite Bewegungskampagne. Dabei sollte die Schweizer Bevölkerung aufgerufen werden, ausgewogen zu essen und sich täglich zu bewegen. Fast zwei Drittel der Bevölkerung in der Schweiz sind wenig aktiv und essen zu viel. Die Kampagne soll den Leuten zeigen, wie Sport und gesunde Ernährung ohne großen Aufwand in den Alltag integriert werden können, z.B. mit einem Spaziergang am Mittag oder mit einem Apfel zum Znüni statt Schokolade.", ar: "أطلقت السلطات الصحية السويسرية حملة وطنية تحت شعار \"بنشاط وحيوية\" تهدف إلى تشجيع السكان على تبني نمط حياة صحي يعتمد على الغذاء المتوازن والحركة اليومية خاصة وأن قرابة ثلثي الشعب السويسري يعانون من قلة النشاط والإفراط في الأكل وتسعى هذه الحملة إلى توعية الأفراد بكيفية دمج الرياضة والتغذية السليمة في تفاصيل يومهم البسيطة دون عناء كبير مثل استبدال الشوكولاتة بتفاحة في وجبة خفيفة أو ممارسة رياضة المشي خلال استراحة الغداء لضمان صحة أفضل للجميع." },
      { n: 5, c: "g", de: "Du bist,was du isst hat als Slogan ausgedient. Heute muss es heißen: Gut aussehen mit dem richtigen Essen. Der Trend kommt aus den USA: Dort kaufen bereits viele Leute neue teure Lebensmittel mit wissenschaftlichen Inhaltsstoffen, die dem Kunden jüngeres und schöneres Aussehen versprechen. So bietet z.B. ein New Yorker Nobelhotel das Menü Gegen-Graue-Haare an, das gegen das Älterwerden wirken soll. Aber wer wird schon eine solche Mahlzeit bestellen? Millionen von Leuten, so die Trendforscher. Und zwar aus dem einfachen Grund, weil jeder jung und gut aussehen will, und das mit möglichst wenig Aufwand.", ar: "تجاوز المفهوم التقليدي \"أنت ما تأكله\" حدود الصحة ليصبح الشعار الجديد هو \"الجمال من خلال الغذاء\" حيث يشير النص إلى توجه عالمي انطلق من الولايات المتحدة يعتمد على استهلاك أطعمة باهظة الثمن ومعززة بمكونات علمية تهدف للحفاظ على الشباب والجمال ومثال ذلك تقديم أحد الفنادق الفاخرة في نيويورك قائمة طعام خاصة لمحاربة الشيب وعلامات الشيخوخة ويتوقع خبراء التوجهات المستقبلية إقبال الملايين على هذا النوع من الابتكارات لرغبة الناس القوية في تحسين مظهرهم الخارجي بأقل مجهود ممكن." }
    ]
  },
  {
    id: "caroline-t1-mod", title: "Caroline", sub: "Teile 1", level: "B1", type: "headings", desc: "المعدل",
    options: [
      { k: "a", de: "Familienbildung Schwerpunkt Beruf und Familie", ar: "التعليم الأسري مع التركيز على العمل والأسرة" },
      { k: "b", de: "Demonstration gegen Fluglärm", ar: "مظاهرة ضد ضوضاء الطائرات" },
      { k: "c", de: "Flughafen Frankfurt wird 10 Jahre", ar: "مطار فرانكفورت يحتفل بمرور 10 سنوات" },
      { k: "d", de: "Flughafen Frankfurt beliebter Veranstaltungsort", ar: "مطار فرانكفورت وجهة مفضلة للفعاليات" },
      { k: "e", de: "Experten gegen Vergrößerung des Flughafens", ar: "خبراء ضد توسيع المطار" },
      { k: "f", de: "Info über den Flughafen und Arbeitsplätze", ar: "معلومات عن المطار وفرص العمل" },
      { k: "g", de: "Neue Kurse: Spiele für Mütter und Kinder", ar: "دورات جديدة: ألعاب للأمهات والأطفال" },
      { k: "h", de: "Umwelt und Flughafen: Ein Informationsabend der Bürger", ar: "البيئة والمطار: أمسية معلوماتية للمواطنين" },
      { k: "i", de: "Neue Kurse für Kinder", ar: "دورات جديدة للأطفال" },
      { k: "j", de: "Neue Kurse: Museumsführung für junge Väter", ar: "دورات جديدة: جولة في المتحف للآباء الشباب" }
    ],
    items: [
      { n: 1, c: "h", de: "Der Frankfurter Flughafen wird weiter ausgebaut. Eine Gruppe von Frankfurter Bürgern aus den östlichen Stadtteilen, die sich seit Jahren aktiv für den Naturschutz und die Umwelt einsetzt, lädt für Donnerstag dieser Woche um 19.30 Uhr zu einem Informationsabend über den Ausbau des Frankfurter Flughafens ein. Im Bürgerhaus Ostend, Parkstraße 24, Clubraurn 12, werden verschiedene Sprecher zu hören sein. Die Gruppe möchte Antworten auf folgende Fragen suchen: Wie viel Lärm durch Flugzeuge verträgt die Stadt? Oder Welche Auswirkungen hat der Flugverkehr auf Umwelt und Natur?", ar: "تستمر أعمال التوسعة في مطار فرانكفورت، وهو ما دفع مجموعة من سكان الأحياء الشرقية الناشطين في مجال حماية البيئة منذ سنوات إلى الدعوة لتنظيم أمسية إعلامية يوم الخميس من هذا الأسبوع في تمام الساعة السابعة والنصف مساءً بدار المواطنين في حي \"أوست إند\" لمناقشة تداعيات هذا المشروع، حيث سيستضيف اللقاء عدة متحدثين للبحث في قضايا جوهرية تشغل الرأي العام، أبرزها مدى قدرة المدينة على استيعاب الضجيج الناتج عن حركة الطائرات، وتأثير هذا النشاط الجوي المتزايد على التوازن البيئي والطبيعة في المنطقة." },
      { n: 2, c: "d", de: "Der Frankfurter Flughafen erfreut sich bei vielen Firmen als beliebter Ort für Veranstaltungen und Tagungen. Dies zeigt ein Bericht des Frankfurter Flughafens, der beim zehnjährigen Jubiläum des Kongresszentruns vorgelegt wurde. Im Jubiläumsjahr haben am Frankfurter Flughafen 6800 Veranstaltungen mit insgesamt 72000 Teilnehmern stattgefunden. Im Jahr davor waren es nur 6300 Veranstaltungen mit 70000 Gästen. Im Kongresszentrum, das direkt gegenüber dem Hauptgebäude des Flughafens liegt, gibt es 28 Konferenzräume für bis zu 200 Teilnehmer. Modernste Technik wie Laptop-Anschlüsse und Internetzugänge in allen Konferenzräumen sind ebenso vorhanden, wie ein Dolmetscherdienst und verschiedene Speisemöglichkeiten. Eine transportable Videokonferenz-Anlage ermöglicht Verbindungen in die ganze Welt.", ar: "أصبح مطار فرانكفورت وجهة مفضلة للشركات لتنظيم الفعاليات والمؤتمرات حيث سجل تقرير بمناسبة الذكرى العاشرة لمركز المؤتمرات نمواً ملحوظاً بزيادة عدد الفعاليات إلى 6800 حدث استضافت 72 ألف مشارك مقارنة بالعام السابق ويوفر المركز الذي يقع مقابل مبنى المطار الرئيسي 28 قاعة مجهزة بأحدث التقنيات الرقمية وخدمات الترجمة الفورية بالإضافة إلى خيارات متنوعة للإطعام وتقنيات الفيديو المتطورة التي تتيح التواصل مع مختلف أنحاء العالم بكل سهولة ويسر." },
      { n: 3, c: "f", de: "Eine Bürgergruppe mit dem Namen Südliches Frankfurt lädt für Montag kommender Woche, um 19.30 Uhr ins Pfarrhaus St. Mauritius, Mauritiusstraße 14, zu einer öffentlichen Expertenbefragung zum Thema Arbeitsplätze am Frankfurter Flughafen ein. Der Gruppe liegen Berichte und Daten vor, die nach den Worten der Sprecher der Gruppe sehr fantastisch und zweifelhaft sind. Deshalb hat die Bürgergruppe Südliches Frankfurt den Personalleiter des Frankfurter Flughafens, einen Experten aus dem Wirtschaftsministerium, einen bekannten Stadtentwicklungsplaner und einen Soziologen, der sich mit der Arbeitsplatzentwicklung in der Frankfurter Region beschäftigt, eingeladen. Im Anschluss an die Vorträge der Experten haben die Gäste Zeit, Fragen zu stellen.", ar: "تعتزم مجموعة مواطنين تحت اسم \"جنوب فرانكفورت\" تنظيم لقاء عام في دار رعية القديس موريتيوس مساء الاثنين القادم لمناقشة ملف الوظائف في المطار والتحقق من دقة البيانات الرسمية التي تصفها المجموعة بالمبالغ فيها وسيشهد اللقاء حضور نخبة من الخبراء من بينهم مدير الموارد البشرية بالمطار وممثل عن وزارة الاقتصاد ومخطط حضري وعالم اجتماع متخصص في تطور سوق العمل بالمنطقة لمواجهة التساؤلات المطروحة مع فتح المجال للجمهور لطرح استفساراتهم بعد انتهاء المداخلات الرسمية." },
      { n: 4, c: "a", de: "Das neue Halbjahresprogramm der Evangelischen Familienbildungsstätte bringt eine Übersicht über viele Veranstaltungen. Neben Kursen wie Geburtsvorbereitung und Babypflege steht diesmal das Thema Berufstätige Eltern im Mittelpunkt. In Gruppen und Kursen vor allem für Frauen geht es darum, wie sich nach der Geburt eines Kindes Beruf und Familie miteinander vereinbaren lassen. Das Verhältnis zwischen Mann und Frau spielt eine große Rolle im Angebot der Familienbildung; hierzu gibt es wieder spezielle Programme nur für Frauen oder nur für Männer. Auch zum Verhältnis der Generationen (Großeltern und Enkelkinder) gibt es wieder Angebote. Darüber hinaus wartet das Programm mit Kursen für Entspannung und Zeitmanagement auf, die bei Fragen des Alltags helfen wollen.", ar: "يركز البرنامج الجديد لمركز التعليم العائلي الإنجيلي على قضية التوفيق بين المسار المهني والحياة الأسرية للآباء العاملين بعد الولادة مع تخصيص دورات تدريبية تركز بشكل خاص على أدوار المرأة والرجل في الأسرة وتنمية الروابط بين الأجيال المختلفة مثل الأجداد والأحفاد كما يتضمن البرنامج مجموعة واسعة من الأنشطة التي تشمل التحضير للولادة ورعاية الأطفال وتقنيات الاسترخاء وإدارة الوقت لمساعدة الأسر على مواجهة ضغوط وتحديات الحياة اليومية بفعالية أكبر." },
      { n: 5, c: "i", de: "Die Volkshochschule Dornbirn bietet in den kommenden Wochen neue Kurse an. Am Mittwoch nächster Woche beginnen zwei Malkurse für Kinder. Zweieinhalb- bis vierjährige Kinder treffen sich um 15.30 Uhr, Kinder im Alter von fünf und sechs Jahren um 17.00 Uhr. Für Kinder im Alter zwischen eineinhalb und sechs Jahren und ihre Väter beginnt am Samstag um 10.00 Uhr eine feste Vater-Kind-Gruppe. Am darauf-folgenden Samstag gibt es dann auch ein Treffen für Väter und Kinder bis dreieinhalb Jahren. Etwas anderes ist die Kultur- und Kreativwerkstatt am Montag nächster Woche. Aus Ton und Erde sollen Figuren nach afrikanischen Beispielen gebastelt werden. Zur Vorbereitung treffen sich die Teilnehmer am kommenden Montag zuerst im Museum. Anmeldung spätestens morgen bis 15.00 Uhr.", ar: "تستعد مدرسة الشعب في دورنبيرن لإطلاق سلسلة من الدورات الجديدة تتنوع بين ورش عمل للرسم للأطفال بمختلف فئاتهم العمرية ومجموعات تفاعلية مخصصة للآباء وأبنائهم في عطلات نهاية الأسبوع بالإضافة إلى ورشة عمل ثقافية متميزة لصناعة تماثيل طينية مستوحاة من الفن الأفريقي تبدأ بلقاء تحضيري في المتحف ويُشترط على الراغبين في المشاركة استكمال إجراءات التسجيل في موعد أقصاه غداً الساعة الثالثة بعد الظهر لضمان مقاعدهم في هذه الأنشطة الإبداعية." }
    ]
  }
];

// ✅ 6. لائحة الدول
const EXAM_COUNTRIES = [
  { country: "Ägypten", ar: "مصر", flag: "🇪🇬", cities: "Kairo", institutes: "Vivat Lingua, SIS, AKF Sprachschule, Lingocare, WiPDaF, Westfalia Bildungszentrum" },
  { country: "Indien", ar: "الهند", flag: "🇮🇳", cities: "Ahmedabad, Alappuzha, Bangalore, Chennai, Kerala, Chandigarh, Kochi, Kollam, Manimuthy, Prune, Trivandrum", institutes: "Sprachschule CAS, Vivat Lingua, Sprachenakademie Aachen, DEFA, Tandem, Lingualeaps, Speakeasy, ACZEPTA, Quadrigo, IIK, Dekra" },
  { country: "Kirgisistan", ar: "قيرغيزستان", flag: "🇰🇬", cities: "Bischkek, Osch", institutes: "Volkshochschule im Landkreis Cham" },
  { country: "Kolumbien", ar: "كولومبيا", flag: "🇨🇴", cities: "Bogota", institutes: "CDC Mexiko, C2 Barcelona Languages" },
  { country: "Malaysia", ar: "ماليزيا", flag: "🇲🇾", cities: "Selangor", institutes: "Sprachenakademie Aachen" },
  { country: "Marokko", ar: "المغرب", flag: "🇲🇦", cities: "Casablanca, Meknès, Tanger", institutes: "Atlas Bildungs Center, Prisma Bildungsplattform, IIK" },
  { country: "Philippinen", ar: "الفلبين", flag: "🇵🇭", cities: "Davao", institutes: "Berlitz Deutschland" },
  { country: "Tadschikistan", ar: "طاجيكستان", flag: "🇹🇯", cities: "Duschanbe", institutes: "bfz gGmbH, Bremer Volkshochschule" },
  { country: "Tunesien", ar: "تونس", flag: "🇹🇳", cities: "Tunis", institutes: "Sprachenakademie Aachen" },
  { country: "Türkei", ar: "تركيا", flag: "🇹🇷", cities: "Ankara, Istanbul, Adana", institutes: "Sprachportal, IFB" },
  { country: "Usbekistan", ar: "أوزبكستان", flag: "🇺🇿", cities: "Taschkent, Fergana, Samarkand", institutes: "Berlitz, Bildung und Beruf" },
  { country: "Vietnam", ar: "فيتنام", flag: "🇻🇳", cities: "Hanoi, Ho Chi Minh", institutes: "Alpha Sprachschule, IBK Merseburg, IIK, Jacura Group, UNS, Sprachportal Akademie, SDI München" }
];

// ✅ 7. الأيقونات العصرية
const Icons = {
  Home: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Book: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  Headphones: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  Edit: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>,
  Mic: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>,
  Graduation: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Menu: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>,
  Moon: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  Sun: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>,
  Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  Translate: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h12M9 3v2c0 4.418-2.686 8-6 8m0-8h12m-6 0v2c0 4.418 2.686 8 6 8m-4-2l-4 8m2-4h4m-2 0l2 4"/></svg>,
  Play: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>,
  Pause: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>,
  Check: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  ArrowLeft: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>,
  ArrowRight: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>,
  Target: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Practice: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  Clock: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Eye: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  X: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Gift: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
  Lock: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
};

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
  
  if (typeof obj === 'object' && obj[lang]) return <span>{obj[lang]}</span>;
  if (['ar', 'ma', 'en', 'fr'].includes(lang)) return <span>{typeof obj === 'object' ? (obj[lang] || obj['en'] || obj['ar'] || textDe) : textDe}</span>;

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
      utterance.onend = () => { currentIndex++; setTimeout(playNext, 500); };
      utterance.onerror = () => { setIsPlaying(false); clearInterval(audioInterval.current); };
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
    audioInterval.current = setInterval(() => setAudioTime(prev => prev + 1), 1000);
    playHorenAudio(exam.audio);
  };

  const pickHoren = (n, c) => {
    if (done) return;
    setAns(prev => ({ ...prev, [n]: prev[n] === c ? undefined : c }));
  };

  const labelR = userLang === 'ar' || userLang === 'ma' ? "صحيح" : userLang === 'fr' ? "Vrai" : userLang === 'en' ? "True" : userLang === 'hi' ? "सही" : "";
  const labelF = userLang === 'ar' || userLang === 'ma' ? "خطأ" : userLang === 'fr' ? "Faux" : userLang === 'en' ? "False" : userLang === 'hi' ? "गलत" : "";

  return (
    <div className="card" style={{ padding: 20, marginBottom: 24, border: "1px solid var(--line)" }}>
      <h3 className="de" style={{ fontSize: "1.3em", fontWeight: 900, margin: "0 0 16px", color: "var(--ink)" }}>{exam.title}</h3>

      <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--paper)", padding: 16, borderRadius: 20, marginBottom: 20 }}>
        <button onClick={toggleAudio} style={{ width: 56, height: 56, borderRadius: "50%", flexShrink: 0, background: isPlaying ? "var(--red)" : "#22C55E", color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(34, 197, 94, 0.3)", transition: "all 0.2s" }}>
          {isPlaying ? <Icons.Pause /> : <Icons.Play />}
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
          if (done) rowBg = isCorrect ? "var(--okbg)" : "var(--badbg)";
          
          return (
            <div key={it.n} style={{ display: "flex", alignItems: "center", borderBottom: "1px solid var(--line)", padding: "12px 0", background: rowBg }}>
              <div style={{ width: 60, display: "flex", justifyContent: "center" }}><div className={rClass} onClick={() => pickHoren(it.n, "R")}></div></div>
              <div style={{ width: 60, display: "flex", justifyContent: "center" }}><div className={fClass} onClick={() => pickHoren(it.n, "F")}></div></div>
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
        <button onClick={() => setShowStory(!showStory)} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--blue)", fontWeight: 800, background: "rgba(37, 99, 235, 0.1)", padding: "10px 16px", borderRadius: 12, border: "none" }}>
          <Icons.Eye /> {t("story_memo", userLang)}
        </button>
        <div style={{ display: "flex", gap: 10 }}>
          {!done ? (
            <button onClick={() => setDone(true)} style={{ background: "#22C55E", color: "#FFF", padding: "10px 24px", borderRadius: 12, fontWeight: 900, boxShadow: "0 6px 15px rgba(34,197,94,0.3)", border: "none" }}>{t("check_btn", userLang)}</button>
          ) : (
            <div style={{ fontWeight: 900, color: score === total ? "var(--okc)" : "var(--red)", display: "flex", alignItems: "center", fontSize: "1.1em" }}>{score} / {total}</div>
          )}
        </div>
      </div>
      {showStory && (
        <div className="t2-ar" style={{ marginTop: 16 }}>
          {userLang === 'ar' || userLang === 'ma' ? exam.items[0].story : <AutoTrans text={exam.items[0].story} lang={userLang} force={true} />}
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
        <div className="horen-gateway-icon"><Icons.Headphones /></div>
        <h2 style={{ fontSize: "1.5em", fontWeight: 900, margin: 0 }}>{t("listen_title", userLang)}</h2>
        <p style={{ color: "var(--muted)", fontSize: "1em", margin: 0, lineHeight: 1.6 }}>{t("listen_desc", userLang)}</p>
        <button className="horen-start-btn" onClick={onStart}><Icons.Play /> {t("start_now", userLang)}</button>
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
          <button onClick={onBack} className="btnI" style={{ width: 36, height: 36 }}><Icons.ArrowLeft /></button>
          <div>
            <div className="de" style={{ fontWeight: 900, fontSize: "1em", lineHeight: 1.2 }}>{exam.title}</div>
            <div className="de" style={{ fontSize: ".7em", color: "var(--muted)", fontWeight: "bold" }}>{exam.type === "horen" ? "HÖREN" : "LESEN"} · {exam.sub.toUpperCase()}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
           <div className="timer-badge" style={{ padding: '4px 10px', fontSize: '14px' }}>
             <Icons.Clock /> {formatTime(timeLeft)}
           </div>
           <button onClick={() => setShowTranslation(!showTranslation)} className="btnI" style={{ width: 40, height: 40, color: showTranslation ? "var(--blue)" : "var(--text)", borderColor: showTranslation ? "var(--blue)" : "var(--line)" }}>
            <Icons.Translate />
           </button>
           <button onClick={() => setDark(!dark)} className="btnI" style={{ width: 36, height: 36 }}>
            {dark ? <Icons.Sun /> : <Icons.Moon />}
           </button>
        </div>
      </div>

      <div style={{ margin: "10px 12px" }}>
        {exam.type !== "matching" && exam.type !== "horen" && (
          <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
            <button className={"modeBtn " + (mode === "exam" ? "on" : "")} onClick={() => { setMode("exam"); reset(); }}><Icons.Target /> {t("exam_mode", userLang)}</button>
            <button className={"modeBtn " + (mode === "practice" ? "on" : "")} onClick={() => { setMode("practice"); reset(); }}><Icons.Practice /> {t("practice_mode", userLang)}</button>
          </div>
        )}

        {exam.type === "horen" && <HorenCard exam={exam} userLang={userLang} showTranslation={showTranslation} />}

        {exam.type === "mcq" && (
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

        {exam.type === "matching" && exam.ads.map(ad => (
          <div key={ad.k} className="card" style={{ padding: 16 }}>
            <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 12 }}>
              <span className="de" style={{ color: "var(--red)", fontWeight: 900, fontSize: "1.1em" }}>ANZEIGE {ad.k}</span>
              <div className="de" style={{ fontWeight: 900, marginTop: 6 }}>{ad.t}</div>
              <div className="de" style={{ fontSize: "0.9em", color: "var(--muted)", marginTop: 4 }}>{ad.de}</div>
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
                    setExcluded(prev => { const n = {...prev}; if(!n[it.n]) n[it.n] = {}; n[it.n][ad.k] = !n[it.n][ad.k]; return n; });
                  }} style={{ width: 28, height: 28, borderRadius: 8, border: `1px solid ${isExc ? "var(--red)" : "var(--line)"}`, marginTop: 10, color: isExc ? "var(--red)" : "transparent", background: isExc ? "var(--badbg)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}><Icons.X /></button>
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

        {(exam.type === "headings" || exam.type === "mcq") && exam.items.map((it, idx) => {
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
              <button className="btnI" onClick={() => setModalGap(null)}><Icons.X /></button>
            </div>
            <div className="modal-list" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {exam.items.find(x => x.n === modalGap).opts.map((opt, i) => (
                <button key={i} className={"btn ghost"} style={{ textAlign: 'left', direction: 'ltr', borderColor: ans[modalGap] === opt ? "var(--blue)" : "var(--line)", background: ans[modalGap] === opt ? "rgba(37,99,235,0.1)" : "var(--card)", color: ans[modalGap] === opt ? "var(--blue)" : "var(--text)" }} onClick={() => pick(exam.items.find(x => x.n === modalGap), opt)}>
                  <span style={{ opacity: 0.5, fontWeight: 900, marginRight: 12 }}>{String.fromCharCode(65 + i)}</span>
                  <span className="de" style={{fontSize:"1.05em", flex: 1}}>{opt}</span>
                  {ans[modalGap] === opt && <span style={{ color: "var(--blue)", fontSize:"1.2em" }}><Icons.Check /></span>}
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
               <button className="btnI" onClick={() => setActiveGap(null)}><Icons.X /></button>
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
          <Icons.ArrowLeft />
        </button>
      </div>
    </div>
  );
}
function SchreibenView({ userLang, dark, setDark, supabaseLessons, isPaid, trialActive, isAdmin, wa, onLessonClick }) {
  const [selected, setSelected] = useState(null);
  const [showTransText, setShowTransText] = useState(false);
  const [showTransTask, setShowTransTask] = useState(false);
  const [userText, setUserText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzeStep, setAnalyzeStep] = useState(0);
  const [result, setResult] = useState(null);
  
  const [timeLeft, setTimeLeft] = useState(90 * 60); 

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
        
        {PLACEHOLDER_LESSONS["Schreiben"].map((title, idx) => {
          const localExams = SCHREIBEN_DATA.filter(e => e.title === title);
          const sbExams = supabaseLessons.filter(les => les.title === title || les.data?.title === title);
          const totalVersions = localExams.length + sbExams.length;
          
          return (
            <div key={idx} onClick={() => {
              if (localExams.length > 0) {
                setSelected(localExams[0]);
                setUserText("");
                setResult(null);
                setShowTransText(false);
                setShowTransTask(false);
                setTimeLeft(90 * 60);
              } else {
                onLessonClick(title, "Schreiben");
              }
            }} className="card" style={{ padding: 20, marginBottom: 16, cursor: "pointer", border: "1px solid var(--line)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div className="de" style={{ fontWeight: 900, fontSize: "1.1em", marginBottom: 12 }}>{title}</div>
                {totalVersions > 1 && (
                  <span style={{ background: "#e8f5e9", color: "#2e7d32", padding: "2px 10px", borderRadius: 6, fontSize: "0.8em", fontWeight: 900 }}>
                    {totalVersions} <AutoTrans text="تعديلات" lang={userLang} force={true} />
                  </span>
                )}
              </div>
              <div style={{ display: "inline-block", background: "rgba(34, 197, 94, 0.1)", color: "#22C55E", padding: "4px 12px", borderRadius: 8, fontSize: "0.85em", fontWeight: 900 }}>B1</div>
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
            <Icons.ArrowLeft />
          </button>
          <h2 style={{ margin: 0, fontSize: "1.2em", fontWeight: 900 }}>{userLang === 'hi' ? 'संपादक पर वापस जाएं' : 'رجوع إلى المحرر'}</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20 }}>
          <div style={{ width: 120, height: 120, borderRadius: "50%", border: "8px solid var(--line)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderTopColor: result.score === 0 ? "var(--red)" : "#22C55E" }}>
            <span style={{ fontSize: "2.5em", fontWeight: 900 }}>{result.score}</span>
            <span style={{ color: "var(--muted)", fontSize: "0.8em" }}>/ {result.maxScore} {userLang === 'hi' ? 'अंक' : 'نقطة'}</span>
          </div>
          <div style={{ background: result.score < 20 ? "var(--red)" : "#22C55E", color: "#FFF", padding: "4px 16px", borderRadius: 20, fontWeight: 900, marginTop: 12, fontSize: "0.9em" }}>
            {result.score < 20 ? (userLang === 'hi' ? 'अभ्यास की जरूरत है' : 'يحتاج لتدريب') : (userLang === 'hi' ? 'उत्कृष्ट' : 'ممتاز')}
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
                <Icons.Edit />
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
          <div style={{ width: "80%", height: 8, background: "var(--line)", borderRadius: 99, marginTop: 40, overflow: "hidden" }}>
             <div style={{ height: "100%", width: `${(analyzeStep / 4) * 100}%`, background: "#22C55E", transition: "width 0.3s" }}></div>
          </div>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setSelected(null)} className="btnI" style={{ width: 40, height: 40 }}>
            <Icons.ArrowLeft />
          </button>
          <h2 className="de" style={{ margin: 0, fontSize: "1.2em", fontWeight: 900 }}>{selected.title}</h2>
        </div>
        
        <div className="timer-badge" style={{ padding: '6px 12px', fontSize: '15px' }}>
          <Icons.Clock /> {formatTime(timeLeft)}
        </div>
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 6, height: 20, background: "#22C55E", borderRadius: 4 }}></div>
          <span style={{ color: "var(--muted)", fontWeight: 900, fontSize: "0.85em", letterSpacing: 1 }}>SITUATION</span>
          <span style={{ background: "rgba(34, 197, 94, 0.1)", color: "#22C55E", padding: "2px 10px", borderRadius: 6, fontSize: "0.8em", fontWeight: 900 }}>{selected.level || 'B1'}</span>
        </div>
        <div className="de" style={{ fontSize: "1.05em", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{selected.text}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingTop: 16, borderTop: "1px dashed var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#22C55E", fontWeight: 900 }}>
            <Icons.Translate /> {t("trans_text", userLang)}
          </div>
          <button onClick={() => setShowTransText(!showTransText)} style={{ background: "rgba(34, 197, 94, 0.1)", color: "#22C55E", padding: "8px 16px", borderRadius: 8, fontWeight: 900, border: "none" }}>
            {showTransText ? t("hide", userLang) : t("show", userLang)}
          </button>
        </div>
        {showTransText && (
          <div style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid rgba(34, 197, 94, 0.2)", padding: 16, borderRadius: 12, marginTop: 12, direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right', lineHeight: 1.8, whiteSpace: "pre-wrap", fontFamily: "'Cairo', sans-serif" }}>
            {selected.transText?.[userLang] || <AutoTrans text={selected.text} lang={userLang} force={true} />}
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
        {selected.points?.map((pt, idx) => (
          <div key={idx} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "center" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#22C55E", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 900, flexShrink: 0 }}>{idx + 1}</div>
            <div className="de" style={{ background: "var(--paper)", padding: "12px 16px", borderRadius: 12, flex: 1, border: "1px solid var(--line)" }}>{pt}</div>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingTop: 16, borderTop: "1px dashed var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#22C55E", fontWeight: 900 }}>
            <Icons.Translate /> {t("trans_task", userLang)}
          </div>
          <button onClick={() => setShowTransTask(!showTransTask)} style={{ background: "rgba(34, 197, 94, 0.1)", color: "#22C55E", padding: "8px 16px", borderRadius: 8, fontWeight: 900, border: "none" }}>
            {showTransTask ? t("hide", userLang) : t("show", userLang)}
          </button>
        </div>
        {showTransTask && (
          <div style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid rgba(34, 197, 94, 0.2)", padding: 16, borderRadius: 12, marginTop: 12, direction: userLang === 'hi' ? 'ltr' : 'rtl', textAlign: userLang === 'hi' ? 'left' : 'right', lineHeight: 1.8, fontFamily: "'Cairo', sans-serif" }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>{selected.transTask?.[userLang] || <AutoTrans text={selected.task} lang={userLang} force={true} />}</div>
            {(selected.transPoints?.[userLang] || selected.transPoints?.['en'] || selected.transPoints?.['ar'] || []).map((p, i) => <div key={i} style={{ marginBottom: 4 }}>{p}</div>)}
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
          <Icons.Edit /> {isAnalyzing ? (userLang === 'hi' ? 'सुधार हो रहा है...' : 'جاري التصحيح...') : t("ai_correct", userLang)}
        </button>
      </div>
    </div>
  );
}

function AdminPanel({ userLang, onClose }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notifTitle, setNotifTitle] = useState("");
  const [notifMsg, setNotifMsg] = useState("");

  useEffect(() => {
    sb.from('profiles').select('*').then(({ data, error }) => {
      if (!error && data) setUsers(data);
      setLoading(false);
    });
  }, []);

  const togglePaid = async (id, current) => {
    await sb.from('profiles').update({ is_paid: !current }).eq('id', id);
    setUsers(users.map(u => u.id === id ? { ...u, is_paid: !current } : u));
  };

  const toggleBlock = async (id, current) => {
    await sb.from('profiles').update({ is_blocked: !current }).eq('id', id);
    setUsers(users.map(u => u.id === id ? { ...u, is_blocked: !current } : u));
  };

  const sendNotification = async () => {
    if (!notifTitle || !notifMsg) return alert("عمر العنوان والرسالة");
    const { error } = await sb.from('notifications').insert([{ title: notifTitle, message: notifMsg, is_active: true }]);
    if (error) alert("مشكل: " + error.message);
    else {
      alert("✅ تصيفط الإشعار بنجاح!");
      setNotifTitle(""); setNotifMsg("");
    }
  };

  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontSize: "1.5em", fontWeight: 900, display: "flex", alignItems: "center", gap: 8 }}>
          <Icons.Lock /> {t("admin_panel", userLang)}
        </h2>
        <button onClick={onClose} className="btnI"><Icons.X /></button>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ margin: "0 0 16px", fontWeight: 900, display: "flex", alignItems: "center", gap: 8 }}>
          <Icons.Headphones /> {t("notifications", userLang)}
        </h3>
        <input className="auth-input" placeholder={t("title_ar", userLang)} value={notifTitle} onChange={e => setNotifTitle(e.target.value)} />
        <textarea className="auth-input" rows={3} placeholder={t("message_ar", userLang)} value={notifMsg} onChange={e => setNotifMsg(e.target.value)} />
        <button className="btn" onClick={sendNotification}>{t("send_notification", userLang)}</button>
      </div>

      <div className="card">
        <h3 style={{ margin: "0 0 16px", fontWeight: 900, display: "flex", alignItems: "center", gap: 8 }}>
          <Icons.Target /> {t("users", userLang)} ({users.length})
        </h3>
        {loading ? <p>Loading...</p> : users.map(u => (
          <div key={u.id} style={{ borderBottom: "1px solid var(--line)", padding: "12px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontWeight: 900 }}>{u.email || u.unique_name}</div>
              <div style={{ fontSize: "0.8em", color: "var(--muted)" }}>
                {u.is_paid ? "✅ مخلص" : "❌ غير مخلص"} | {u.is_blocked ? "🚫 محظور" : "🟢 نشط"}
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn ghost" style={{ padding: "8px 12px", fontSize: "0.8em", width: "auto", color: u.is_paid ? "var(--red)" : "var(--okc)" }} onClick={() => togglePaid(u.id, u.is_paid)}>
                {u.is_paid ? t("mark_unpaid", userLang) : t("mark_paid", userLang)}
              </button>
              <button className="btn ghost" style={{ padding: "8px 12px", fontSize: "0.8em", width: "auto", color: u.is_blocked ? "var(--okc)" : "var(--red)" }} onClick={() => toggleBlock(u.id, u.is_blocked)}>
                {u.is_blocked ? t("unblock", userLang) : t("block", userLang)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [trialActive, setTrialActive] = useState(false);
  const [trialEndsAt, setTrialEndsAt] = useState(null);
  const [trialCountdown, setTrialCountdown] = useState("");
  const [notifications, setNotifications] = useState([]);
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
  const [showHorenLessons, setShowHorenLessons] = useState(false);
  const [showHorenTrans, setShowHorenTrans] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  
  const [supabaseLessons, setSupabaseLessons] = useState([]);
  const [activeTab, setActiveTab] = useState("Teile 1");
  const [activeHorenTab, setActiveHorenTab] = useState("Teil 1");
  const [activeHorenTeil, setActiveHorenTeil] = useState(null);
  const [selectedExamGroup, setSelectedExamGroup] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1500);
    const savedUser = localStorage.getItem("ep_user");
    const savedLang = localStorage.getItem("ep_lang");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      if (parsed.isGuest || parsed.id) setUser(parsed);
      else localStorage.removeItem("ep_user");
    }
    if (savedLang) setUserLang(savedLang);
    
    sb.from('notifications').select('*').eq('is_active', true).then(({ data }) => {
      if (data) setNotifications(data);
    });

    sb.from('premium_lessons').select('*').then(({ data }) => {
      if (data) setSupabaseLessons(data);
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  
  useEffect(() => {
    if (user && !user.isGuest && user.id) {
      const deviceId = localStorage.getItem("ep_device_id");
      sb.from('profiles').select('is_paid, active_device_id, trial_started_at, is_blocked, is_admin').eq('id', user.id).single()
        .then(({ data, error }) => {
          if (error) return;
          if (data) {
            if (data.is_blocked) {
              alert("⚠️ تم حظر حسابك.");
              logout();
              return;
            }
            setIsAdmin(!!data.is_admin);
            if (data.active_device_id && data.active_device_id !== deviceId) {
              alert("⚠️ تم تسجيل الدخول من هاتف آخر.");
              logout();
              return;
            }
            setIsPaid(!!data.is_paid);
            if (data.trial_started_at && !data.is_paid) {
              const end = new Date(data.trial_started_at).getTime() + 48 * 60 * 60 * 1000;
              if (Date.now() < end) { setTrialActive(true); setTrialEndsAt(end); }
              else { setTrialActive(false); setTrialEndsAt(null); }
            }
          }
        });
    } else {
      setIsPaid(false); setIsAdmin(false); setIsBlocked(false); setTrialActive(false); setTrialEndsAt(null);
    }
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
    if (exam) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) { clearInterval(interval); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [exam]);

  const handleLangSelect = (c) => { setUserLang(c); localStorage.setItem("ep_lang", c); };
  
  const handleAuth = async (e) => {
    e.preventDefault();
    const uniqueName = e.target.unique_name.value.trim();
    const uniqueCode = e.target.unique_code.value.trim();
    if (!uniqueName || !uniqueCode) return;
    
    let deviceId = localStorage.getItem("ep_device_id") || crypto.randomUUID();
    localStorage.setItem("ep_device_id", deviceId);

    const email = `${uniqueName}@echt.com`;
    const { data, error } = await sb.auth.signInWithPassword({ email, password: uniqueCode });

    if (error) {
      const { data: newData, error: newError } = await sb.auth.signUp({ email, password: uniqueCode });
      if (newError) return alert("مشكل: " + newError.message);
      if (!newData?.user) return alert("ما قدرناش نصاوبو الحساب.");
      
      const { error: insertError } = await sb.from('profiles').insert([{ 
        id: newData.user.id, email: uniqueName, is_paid: false, active_device_id: deviceId, is_blocked: false, trial_started_at: new Date().toISOString()
      }]);
      if (insertError) return alert("مشكل فـ إنشاء الملف الشخصي: " + insertError.message);
      
      const userObj = { ...newData.user, name: uniqueName, isGuest: false };
      setUser(userObj); localStorage.setItem("ep_user", JSON.stringify(userObj));
    } else {
      await sb.from('profiles').update({ active_device_id: deviceId }).eq('id', data.user.id);
      const userObj = { ...data.user, name: uniqueName, isGuest: false };
      setUser(userObj); localStorage.setItem("ep_user", JSON.stringify(userObj));
    }
  };
  
  const handleGuest = () => {
    const guest = { name: "زائر", isGuest: true };
    setUser(guest); setIsPaid(false); setIsAdmin(false); setIsBlocked(false); setTrialActive(false); setTrialEndsAt(null);
    localStorage.setItem("ep_user", JSON.stringify(guest));
  };
  
  const logout = () => { 
    localStorage.removeItem("ep_user"); setIsPaid(false); setIsAdmin(false); setIsBlocked(false); setTrialActive(false); setTrialEndsAt(null); setUser(null); sb.auth.signOut(); 
  };

  const saveResult = (id, score, max) => setResults(r => ({ ...r, [id]: { score, max, date: Date.now() } }));
  const go = (v) => { setView(v); setExam(null); setShowHorenLessons(false); setIsSideMenuOpen(false); window.scrollTo(0, 0); };

  const handleLessonClick = async (title, sub) => {
    const localExams = EXAMS.filter(e => e.title === title && e.sub === sub);
    const localHoren = HOREN_EXAMS.filter(e => e.title === title);
    const localSchreiben = SCHREIBEN_DATA.filter(e => e.title === title);
    const freeMods = FREE_MODIFIED_LESSONS.filter(e => e.title === title && e.sub === sub);
    
    const sbExams = supabaseLessons.filter(les => {
      const lesTitle = les.title || les.data?.title;
      return lesTitle === title;
    }).map(les => les.data || les);

    let allVersions = [];
    if (localHoren.length > 0) allVersions = [...localHoren, ...sbExams];
    else if (localSchreiben.length > 0) allVersions = [...localSchreiben, ...sbExams];
    else allVersions = [...localExams, ...freeMods, ...sbExams];

    if (allVersions.length === 0) {
      alert(`⚠️ الدرس "${title}" مازال ما تحطش.`);
    } else if (allVersions.length === 1) {
      setExam(allVersions[0]);
      setTimeLeft(90 * 60);
    } else {
      setSelectedExamGroup(allVersions);
    }
  };

  if (!isReady) return <div className="splash-screen"><div className="splash-logo"><LogoImage size={180} /></div><h1 className="de" style={{ color: "var(--text)", fontSize: "2.5em", marginTop: 20, fontWeight: 900 }}>EchtPrüfung</h1></div>;

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
                <span style={{ fontSize: "1.6em" }}>{l.f}</span><span style={{ fontSize: "0.95em", fontWeight: 800 }}>{l.n}</span>
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
          <div style={{ textAlign: "center", marginBottom: 30 }}><LogoImage size={80} /><h2 style={{ marginTop: 16, fontWeight: 900, fontSize: "1.5em" }}>{t("welcome", userLang)}</h2></div>
          <form onSubmit={handleAuth}>
            <input className="auth-input" name="unique_name" placeholder="الاسم الفريد" required />
            <input className="auth-input" name="unique_code" placeholder="الكود الفريد" required />
            <button type="submit" className="auth-btn">{t("login", userLang)}</button>
          </form>
          <div style={{textAlign:"center", margin:"20px 0", color:"var(--muted)", fontSize: "0.9em"}}>{t("or", userLang)}</div>
          <button className="auth-btn guest" onClick={handleGuest}><Icons.Home /> {t("guest", userLang)}</button>
          <button onClick={() => wa("مرحباً، نسيت كلمة السر ديالي فـ EchtPrüfung.")} style={{ width: "100%", padding: "10px", background: "transparent", color: "var(--badc)", border: "none", fontWeight: 800, cursor: "pointer", fontSize: "0.95em", marginTop: 10 }}>هل نسيت كلمة السر؟</button>
        </div>
      </div>
    );
  }

  if (exam) {
    return <ExamView exam={exam} userLang={userLang} dark={dark} setDark={setDark} onBack={() => {setExam(null); setTimeLeft(90*60);}} onNext={() => setExam(null)} onSave={saveResult} timeLeft={timeLeft} setTimeLeft={setTimeLeft} />;
  }

  return (
    <div style={{ paddingBottom: 100 }}>
      <div className={`menu-overlay ${isSideMenuOpen ? 'active' : ''}`} onClick={() => setIsSideMenuOpen(false)}></div>
      <nav className={`side-menu ${isSideMenuOpen ? 'active' : ''}`}>
        <div className="side-menu-header"><div className="logo-circle">De</div><h2>EchtPrüfung</h2><p style={{fontSize: '0.8em', opacity: 0.8}}>{user.name}</p></div>
        <a href="#" onClick={(e) => {e.preventDefault(); setLevel('B1'); go('lesen');}} className={`menu-item ${level === 'B1' ? 'active' : ''}`}><Icons.Book /> {t("b1_level", userLang)}</a>
        <a href="#" onClick={(e) => {e.preventDefault(); setLevel('B2'); go('lesen');}} className={`menu-item ${level === 'B2' ? 'active' : ''}`}><Icons.Book /> {t("b2_level", userLang)}</a>
        {isAdmin && <a href="#" onClick={(e) => {e.preventDefault(); go('admin');}} className={`menu-item ${view === 'admin' ? 'active' : ''}`}><Icons.Lock /> {t("admin_panel", userLang)}</a>}
      </nav>

      <div className="header">
        <div className="brand">
          <button className="btnI" onClick={() => setIsSideMenuOpen(true)} style={{ marginRight: 8 }}><Icons.Menu /></button>
          <div className="logo"><LogoImage size={36} /></div>
          <div>
            <div className="header-title">EchtPrüfung</div>
            <div className="header-subtitle de"><span>Deutsch {level}</span> <span>•</span><span style={{ fontSize: "1.2em" }}>{LANGS.find(l => l.c === userLang)?.f}</span><span>{LANGS.find(l => l.c === userLang)?.n}</span></div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button className="btnI" onClick={() => setDark(!dark)}>{dark ? <Icons.Sun /> : <Icons.Moon />}</button>
          <button className="btnI" onClick={() => setSettings(true)}><Icons.Settings /></button>
        </div>
      </div>

      <main style={{ margin: "0 12px", paddingTop: 10 }}>
        {view === "home" && (
          <>
            <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", minHeight: "450px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px 20px", border: "1px solid var(--line)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              {notifications.length > 0 && <div style={{ width: "100%", maxWidth: 400, background: "rgba(255,206,0,0.9)", padding: 16, borderRadius: 16, marginBottom: 16, zIndex: 10, position: "relative" }}><div style={{ fontWeight: 900, fontSize: "1.1em", color: "#111", display: "flex", alignItems: "center", gap: 8 }}><Icons.Headphones /> {notifications[0].title}</div><div style={{ fontSize: "0.9em", color: "#333", marginTop: 4 }}>{notifications[0].message}</div></div>}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgba(15,27,51,0.3) 0%, rgba(15,27,51,0.95) 100%)", zIndex: 1 }} />
              
              <div style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%" }}>
                <div style={{ display: "inline-block", padding: 20, background: "rgba(255,255,255,0.1)", borderRadius: 28, backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}><LogoImage size={90} /></div>
                <h2 className="de" style={{ margin: "20px 0 8px", fontSize: "2.2em", fontWeight: 900, color: "#FFF", textShadow: "0 2px 10px rgba(0,0,0,0.5)", letterSpacing: "-0.5px" }}>EchtPrüfung</h2>
                <div style={{ background: "rgba(245,184,46,0.15)", border: "1px solid var(--gold)", padding: "12px 20px", borderRadius: 16, margin: "0 auto 24px", maxWidth: "90%", backdropFilter: "blur(5px)" }}><p style={{ margin: 0, color: "#FFF", fontSize: "1.1em", fontWeight: 900 }}>{t("banner_title", userLang)}</p><p className="de" style={{ margin: "6px 0 0", color: "var(--gold)", fontSize: "0.85em", fontWeight: "bold", textAlign: "center" }}>{t("banner_sub", userLang)}</p></div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", direction: "ltr", fontSize: "1.6em", fontWeight: 900, background: "rgba(255,255,255,0.95)", padding: "12px 32px", borderRadius: 20, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}><span style={{ color: "#0F1B33" }}>B1</span><span style={{ color: "#DD0000" }}>&</span><span style={{ color: "#F5B82E" }}>B2</span></div>
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h3 style={{ fontWeight: 900, fontSize: "1.3em", color: "var(--text)", marginBottom: 12 }}>
                <AutoTrans text="الامتحانات الدولية" lang={userLang} force={true} />
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                {EXAM_COUNTRIES.map((c, idx) => (
                  <button key={idx} onClick={() => setSelectedCountry(c)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 8px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16 }}>
                    <span style={{ fontSize: "2em" }}>{c.flag}</span>
                    <span style={{ fontWeight: 900, fontSize: "0.8em", color: "#1e293b" }}><AutoTrans text={c.ar} lang={userLang} force={true} /></span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {view === "lesen" && (
          <div>
            <h1 className="de" style={{ textAlign: "center", color: "var(--red)", marginBottom: 16, fontSize: "2.2em" }}>Lesen {level}</h1>
            {trialActive && !isPaid && <div style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))", border: "1.5px solid #22C55E", borderRadius: 16, padding: 14, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}><div style={{ color: "#22C55E" }}><Icons.Gift /></div><div style={{ flex: 1 }}><div style={{ fontWeight: 900, color: "#22C55E", fontSize: "1em" }}>{t("trial_active", userLang)}</div><div style={{ color: "var(--muted)", fontSize: "0.85em" }}>{trialCountdown} — جميع الدروس المدفوعة محلولة</div></div></div>}
            <div style={{ marginBottom: 16 }}><input type="text" placeholder={t("search_placeholder", userLang)} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: "1px solid var(--line)", background: "var(--card)", color: "var(--text)", fontSize: "1em", outline: "none" }} /></div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, background: "var(--card)", padding: 16, borderRadius: 24, border: "1px solid var(--line)", marginBottom: 20 }}>
              {[{ id: "Prüfungen", icon: <Icons.Book /> }, { id: "Teile 1", icon: <Icons.Edit /> }, { id: "Teile 2", icon: <Icons.Edit /> }, { id: "Teile 3", icon: <Icons.Edit /> }, { id: "Sprach 1", icon: <Icons.Translate /> }, { id: "Sprach 2", icon: <Icons.Translate /> }].map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: "14px 8px", borderRadius: 16, fontWeight: 900, fontSize: "0.85em", border: activeTab === tab.id ? "2px solid var(--blue)" : "2px solid transparent", background: activeTab === tab.id ? "rgba(37, 99, 235, 0.1)" : "transparent", color: activeTab === tab.id ? "var(--blue)" : "var(--muted)", transition: "all 0.2s", cursor: "pointer" }}><span style={{ fontSize: "1.6em" }}>{tab.icon}</span>{tab.id}</button>
              ))}
            </div>
            
            {level === "B2" ? <div className="card" style={{ textAlign: "center", padding: 40 }}><h2>{t("coming_soon", userLang)}</h2></div> : (
              PLACEHOLDER_LESSONS["Lesen"][activeTab]
                ?.filter(name => name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((name, idx) => {
                  const localExams = EXAMS.filter(e => e.title === name && e.sub === activeTab && e.level === level);
                  const freeMods = FREE_MODIFIED_LESSONS.filter(e => e.title === name && e.sub === activeTab);
                  const sbExams = supabaseLessons.filter(les => (les.title === name || les.data?.title === name) && (les.sub === activeTab || les.data?.sub === activeTab));
                  const totalVersions = localExams.length + freeMods.length + sbExams.length;
                  
                  return (
                    <button key={idx} className="card" onClick={() => handleLessonClick(name, activeTab)} style={{ width: "100%", textAlign: "right", display: "block", color: "var(--text)", padding: 20, marginBottom: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div className="de" style={{ fontWeight: 900, fontSize: "1.2em" }}>{name}</div>
                          <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center", color: "var(--muted)", fontSize: ".9em" }}><span className="chip" style={{ background: "rgba(221,0,0,0.1)", color: "var(--red)", padding: "4px 10px", borderRadius: 8 }}>{activeTab}</span><span>90 Min</span></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                           {totalVersions > 1 && <span style={{ background: "#e8f5e9", color: "#2e7d32", padding: "2px 8px", borderRadius: 6, fontSize: "0.75em", fontWeight: 900 }}>{totalVersions} <AutoTrans text="تعديلات" lang={userLang} force={true} /></span>}
                           <div style={{ color: "var(--blue)" }}><Icons.ArrowRight /></div>
                        </div>
                      </div>
                    </button>
                  );
                })
            )}
          </div>
        )}

        {view === "horen" && (
          <div style={{ padding: "20px 12px", paddingBottom: 100, direction: "rtl" }}>
            {!activeHorenTeil ? (
              <>
                <h1 className="de" style={{ fontSize: "2.8em", fontWeight: 900, color: "#1e293b", marginBottom: 20, textAlign: "right" }}>Hören</h1>

                <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                  <div style={{ display: "flex", background: "#f1f5f9", borderRadius: 99, padding: 4, border: "1px solid #e2e8f0" }}>
                    <button style={{ background: "#10B981", color: "white", padding: "10px 40px", borderRadius: 99, fontWeight: 900, border: "none", fontSize: "1.1em" }}>B1</button>
                    <button style={{ background: "transparent", color: "#64748b", padding: "10px 40px", borderRadius: 99, fontWeight: 900, border: "none", fontSize: "1.1em" }}>B2</button>
                  </div>
                </div>

                <div style={{ display: "flex", background: "#ffffff", borderRadius: 20, padding: 8, marginBottom: 24, boxShadow: "0 4px 15px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
                  <button style={{ flex: 1, padding: "16px", borderRadius: 16, background: "transparent", color: "#64748b", fontWeight: 900, border: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <Icons.Book />
                    <span>الأكواد</span>
                  </button>
                  <button style={{ flex: 1, padding: "16px", borderRadius: 16, background: "#0ea5e9", color: "white", fontWeight: 900, border: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, boxShadow: "0 4px 12px rgba(14, 165, 233, 0.3)" }}>
                    <Icons.Headphones />
                    <span>الجمل</span>
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ background: "#ffffff", borderRadius: 24, padding: 24, border: "1px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                      <div style={{ width: 60, height: 60, borderRadius: 20, background: "#ecfdf5", display: "flex", justifyContent: "center", alignItems: "center", color: "#10B981" }}>
                        <Icons.Headphones />
                      </div>
                      <span style={{ background: "#f1f5f9", color: "#64748b", padding: "4px 12px", borderRadius: 8, fontWeight: 900, fontSize: "0.9em" }}>B1</span>
                    </div>
                    <h2 className="de" style={{ fontSize: "1.8em", fontWeight: 900, margin: "0 0 20px", color: "#1e293b" }}>Teil 1</h2>
                    <button onClick={() => setActiveHorenTeil("Teile 1")} style={{ width: "100%", padding: "18px", borderRadius: 16, background: "#ecfdf5", color: "#10B981", fontWeight: 900, fontSize: "1.1em", border: "1.5px solid #10B981", display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
                      <Icons.Play />
                      ابدأ الآن
                    </button>
                  </div>

                  <div style={{ background: "#ffffff", borderRadius: 24, padding: 24, border: "1px solid #fef3c7", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                      <div style={{ width: 60, height: 60, borderRadius: 20, background: "#fef3c7", display: "flex", justifyContent: "center", alignItems: "center", color: "#f59e0b" }}>
                        <Icons.Lock />
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <span style={{ background: "#f1f5f9", color: "#64748b", padding: "4px 12px", borderRadius: 8, fontWeight: 900, fontSize: "0.9em" }}>B1</span>
                        <span style={{ background: "#fef3c7", color: "#d97706", padding: "4px 12px", borderRadius: 8, fontWeight: 900, fontSize: "0.9em" }}>PRO</span>
                      </div>
                    </div>
                    <h2 className="de" style={{ fontSize: "1.8em", fontWeight: 900, margin: "0 0 20px", color: "#d97706" }}>Teil 2</h2>
                    <button onClick={() => wa(t("wa_upgrade_msg", userLang) + " - Hören Teil 2")} style={{ width: "100%", padding: "18px", borderRadius: 16, background: "#fffbeb", color: "#d97706", fontWeight: 900, fontSize: "1.1em", border: "1.5px solid #f59e0b", display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
                      <Icons.Lock />
                      فتح الوصول
                    </button>
                  </div>

                  <div style={{ background: "#ffffff", borderRadius: 24, padding: 24, border: "1px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                      <div style={{ width: 60, height: 60, borderRadius: 20, background: "#e0f2fe", display: "flex", justifyContent: "center", alignItems: "center", color: "#0ea5e9" }}>
                        <Icons.Edit />
                      </div>
                      <span style={{ background: "#f1f5f9", color: "#64748b", padding: "4px 12px", borderRadius: 8, fontWeight: 900, fontSize: "0.9em" }}>B1</span>
                    </div>
                    <h2 className="de" style={{ fontSize: "1.8em", fontWeight: 900, margin: "0 0 20px", color: "#1e293b" }}>Teil 3</h2>
                    <button onClick={() => setActiveHorenTeil("Teile 3")} style={{ width: "100%", padding: "18px", borderRadius: 16, background: "#ecfdf5", color: "#10B981", fontWeight: 900, fontSize: "1.1em", border: "1.5px solid #10B981", display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
                      <Icons.Play />
                      ابدأ الآن
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <button onClick={() => setActiveHorenTeil(null)} className="btnI" style={{ width: 40, height: 40 }}>
                    <Icons.ArrowLeft />
                  </button>
                  <h2 className="de" style={{ margin: 0, fontSize: "1.8em", fontWeight: 900 }}>{activeHorenTeil}</h2>
                </div>

                {HOREN_EXAMS.filter(ex => ex.sub === activeHorenTeil || activeHorenTeil === "Teile 1").map((ex) => (
                  <HorenCard key={ex.id} exam={ex} userLang={userLang} showTranslation={showHorenTrans} />
                ))}
                
                {HOREN_EXAMS.filter(ex => ex.sub === activeHorenTeil || activeHorenTeil === "Teile 1").length === 0 && (
                   <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 40 }}>لا توجد دروس في هذا القسم حالياً.</p>
                )}
              </div>
            )}
          </div>
        )}

        {view === "schreiben" && (
          <SchreibenView 
            userLang={userLang} 
            dark={dark} 
            setDark={setDark} 
            supabaseLessons={supabaseLessons} 
            isPaid={isPaid} 
            trialActive={trialActive} 
            isAdmin={isAdmin} 
            wa={wa} 
            onLessonClick={handleLessonClick} 
          />
        )}

        {view === "pruefung" && (
          <div>
            <h1 className="de" style={{ textAlign: "center", color: "var(--red)", marginBottom: 16, fontSize: "2.2em" }}>
              <AutoTrans text="Zufällige Prüfungen" lang={userLang} force={true} />
            </h1>
            <div style={{ paddingBottom: 80 }}>
              {PRUEFUNG_DATA.map(exam => (
                <div key={exam.id} className="card" style={{ padding: 20, border: "1.5px solid var(--line)", marginBottom: 16, borderRadius: 16, background: "var(--card)", cursor: "pointer" }} onClick={() => wa(t("wa_upgrade_msg", userLang) + " - " + exam.title)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ fontWeight: 900, fontSize: "1.2em", color: "var(--text)" }}>
                      <AutoTrans text={exam.title} lang={userLang} force={true} />
                    </div>
                    <span style={{ background: "var(--gold)", color: "var(--ink)", padding: "2px 10px", borderRadius: 6, fontWeight: 900, fontSize: "0.8em" }}>PRO</span>
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: "0.95em", marginBottom: 16, lineHeight: 1.5 }}>
                    <AutoTrans text={exam.desc} lang={userLang} force={true} />
                  </div>
                  <button style={{ width: "100%", padding: 12, borderRadius: 10, background: "rgba(245,184,46,0.1)", color: "var(--gold)", border: "1px solid var(--gold)", fontWeight: 900, cursor: "pointer" }}>
                    <AutoTrans text="فتح الوصول" lang={userLang} force={true} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "admin" && isAdmin && <AdminPanel userLang={userLang} onClose={() => go('home')} />}

        {view === "sprechen" && (
          <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
             <h1 className="de" style={{ textAlign: "center", color: "var(--red)", marginBottom: 16, fontSize: "2.2em" }}>Sprechen {level}</h1>
             <div className="card" style={{ textAlign: "center", padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
               <div style={{ color: "var(--red)" }}><Icons.Mic /></div>
               <h2 style={{ fontWeight: 900, color: "var(--muted)" }}>
                 <AutoTrans text="سيتم إضافته قريباً" lang={userLang} force={true} />
               </h2>
             </div>
          </div>
        )}
      </main>

      <nav className="nav">
        {[
          { id: "home", label: t("home", userLang), icon: <Icons.Home /> }, 
          { id: "lesen", label: t("lesen", userLang), icon: <Icons.Book /> }, 
          { id: "horen", label: t("horen", userLang), icon: <Icons.Headphones /> }, 
          { id: "schreiben", label: t("schreiben", userLang), icon: <Icons.Edit /> }, 
          { id: "sprechen", label: t("sprechen", userLang), icon: <Icons.Mic /> }, 
          { id: "pruefung", label: t("pruefung", userLang), icon: <Icons.Graduation /> }
        ].map((item) => (
          <button key={item.id} className={view === item.id ? "on" : ""} onClick={() => go(item.id)}><span className="ic">{item.icon}</span><span>{item.label}</span></button>
        ))}
      </nav>

      {selectedExamGroup && (
        <div className="overlay" onClick={() => setSelectedExamGroup(null)} style={{ direction: 'rtl' }}>
          <div className="sheet" onClick={e => e.stopPropagation()} style={{ padding: 0, overflow: 'hidden', borderRadius: 24, border: 'none' }}>
            <div style={{ background: '#f0fdf4', padding: '24px', borderBottom: '1px solid #dcfce7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.3em", fontWeight: 900, color: '#1e293b' }}><AutoTrans text="التعديلات المتاحة" lang={userLang} force={true} /></h3>
                <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.9em' }}>{selectedExamGroup.length} <AutoTrans text="تعديلات لهذا الموضوع" lang={userLang} force={true} /></p>
              </div>
              <div style={{ background: '#10b981', color: 'white', width: 40, height: 40, borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2em' }}>
                <Icons.Book />
              </div>
            </div>

            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              {selectedExamGroup.map((ex, idx) => {
                const isMod = ex.desc?.includes('معدل') || ex.id?.includes('-mod') || ex.title?.includes('المعدل');
                const cleanTitle = ex.title.replace(' المعدل', '').replace(' (معدل)', '');
                
                return (
                  <button key={ex.id || idx} onClick={() => { setExam(ex); setSelectedExamGroup(null); setTimeLeft(90*60); }} style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ background: '#dcfce7', color: '#15803d', width: 32, height: 32, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900 }}>{idx + 1}</span>
                      <span className="de" style={{ fontWeight: 800, fontSize: '1.1em', color: '#1e293b' }}>
                        {cleanTitle} {isMod && <AutoTrans text="المعدل" lang={userLang} force={true} />}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ background: '#f1f5f9', color: '#64748b', padding: '4px 10px', borderRadius: 8, fontSize: '0.8em', fontWeight: 900 }}>B1</span>
                      {isMod && <span style={{ color: '#f59e0b' }}><Icons.Lock /></span>}
                    </div>
                  </button>
                );
              })}
            </div>

            <div style={{ padding: '0 20px 20px' }}>
              <button onClick={() => setSelectedExamGroup(null)} style={{ width: '100%', padding: 16, borderRadius: 16, border: '1px solid #e2e8f0', background: '#fff', color: '#64748b', fontWeight: 900, fontSize: '1em' }}>
                <AutoTrans text="إغلاق" lang={userLang} force={true} />
              </button>
            </div>

          </div>
        </div>
      )}

      {selectedCountry && (
        <div className="overlay" onClick={() => setSelectedCountry(null)} style={{ direction: 'rtl' }}>
          <div className="sheet" onClick={e => e.stopPropagation()} style={{ padding: 0, overflow: 'hidden', borderRadius: 24, border: 'none' }}>
            <div style={{ background: '#e0f2fe', padding: '24px', borderBottom: '1px solid #bae6fd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.3em", fontWeight: 900, color: '#0c4a6e', display: "flex", alignItems: "center", gap: 8 }}>{selectedCountry.flag} <AutoTrans text={selectedCountry.ar} lang={userLang} force={true} /></h3>
                <p style={{ margin: '4px 0 0', color: '#0369a1', fontSize: '0.9em' }}><AutoTrans text="مراكز الامتحانات المتاحة" lang={userLang} force={true} /></p>
              </div>
              <div style={{ background: '#0ea5e9', color: 'white', width: 40, height: 40, borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2em' }}>
                <Icons.Target />
              </div>
            </div>
            
            <div style={{ padding: 20 }}>
              <div style={{ background: '#f8fafc', padding: 16, borderRadius: 12, marginBottom: 12, border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: 900, color: '#0f172a', marginBottom: 8 }}><AutoTrans text="المدن" lang={userLang} force={true} />:</div>
                <div style={{ color: '#334155', fontSize: '0.95em' }}>{selectedCountry.cities}</div>
              </div>
              <div style={{ background: '#f8fafc', padding: 16, borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: 900, color: '#0f172a', marginBottom: 8 }}><AutoTrans text="المعاهد والمراكز" lang={userLang} force={true} />:</div>
                <div style={{ color: '#334155', fontSize: '0.95em', lineHeight: 1.6 }}>{selectedCountry.institutes}</div>
              </div>
            </div>

            <div style={{ padding: '0 20px 20px' }}>
              <button onClick={() => setSelectedCountry(null)} style={{ width: '100%', padding: 16, borderRadius: 16, border: '1px solid #e2e8f0', background: '#fff', color: '#64748b', fontWeight: 900, fontSize: '1em' }}>
                <AutoTrans text="إغلاق" lang={userLang} force={true} />
              </button>
            </div>
          </div>
        </div>
      )}

      {settings && (
        <div className="overlay" onClick={() => setSettings(false)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}><strong style={{fontSize:"1.3em"}}>{t("settings", userLang)}</strong><button className="btnI" onClick={() => setSettings(false)}><Icons.X /></button></div>
            <div style={{ marginBottom: 20 }}>
              <span style={{fontWeight:900, fontSize:"1.1em", display: "block", marginBottom: 12}}>{t("change_lang", userLang)}</span>
              <div className="lang-grid" style={{ maxHeight: 200 }}>{LANGS.map(lang => <button key={lang.c} onClick={() => { setUserLang(lang.c); localStorage.setItem("ep_lang", lang.c); }} className={`lang-btn ${userLang === lang.c ? "on" : ""}`} style={{ padding: "10px" }}><span style={{ fontSize: "1.2em" }}>{lang.f}</span><span style={{ fontSize: "0.85em" }}>{lang.n}</span></button>)}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}><span style={{fontWeight:900, fontSize:"1.1em"}}>{t("text_size", userLang)}</span><div style={{ display: "flex", gap: 10, alignItems: "center" }}><button className="btnI" onClick={() => setFs(Math.max(80, fs - 10))}>−</button><span style={{ minWidth: 48, textAlign: "center", fontWeight: 900, fontSize:"1.1em" }}>{fs}%</span><button className="btnI" onClick={() => setFs(Math.min(150, fs + 10))}>+</button></div></div>
            <button className="btn ghost" onClick={() => setFs(100)} style={{ padding: 14 }}>{t("reset_size", userLang)}</button>
            <div style={{ marginTop: 20, textAlign: "center" }}><button onClick={logout} className="btn ghost" style={{ color: "var(--red)", borderColor: "var(--red)" }}>{t("logout", userLang)}</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
