// ============================================================================
// b1_lesen_t1.js — B1 Lesen Teil 1 (28 دروس + 2 نسخ معدّلة = 30 درس كامل)
// ============================================================================
(function () {
  window.SAHLA_DATA = window.SAHLA_DATA || {};
  window.SAHLA_DATA.b1 = window.SAHLA_DATA.b1 || {};
  window.SAHLA_DATA.b1.lesen = window.SAHLA_DATA.b1.lesen || {};

  // نصوص مشتركة لتفادي التكرار داخل الملف مع إخراج 30 كائن درس مستقل تماماً
  const TEXTS_VERA_JAN = [
    "Wenn Sie verreisen, wünschen wir Ihnen erholsame und angenehme Ferientage. Bitte denken Sie daran, sich Ihre Zeitung an den Urlaubsort nachsenden zu lassen. Denn mit den Neuigkeiten von zu Hause und aus aller Welt lässt sich die schönste Zeit des Jahres erst richtig genießen – in ganz Europa kostenlos, die Höhe des Bezugspreises bleibt unverändert. Ausführliche Informationen und entsprechende Coupons finden Sie in unserem großen Reise-Service-Anzeigenteil oder rufen Sie uns einfach an: Telefon 01 30-18 58 50 zum Nulltarif. Hannoversche Allgemeine Neue Presse",
    "Im Luftkurort Stadtkyll in der Mittelgebirgslandschaft des Oberen Kylltals werden dreitägige Wanderungen ohne Gepäck veranstaltet. Die Rundwanderung im deutsch-belgischen Naturpark führt abends zu reservierten Zimmern. Die Betriebe übernehmen den Gepäcktransport zum nächsten Tagesziel. Die Wanderungen werden ganzjährig angeboten. In dem Wanderprogramm sind drei Übernachtungen mit Frühstück, dreimal Gepäcktransport, eine Wanderkarte, eine Wegbeschreibung und ein Wanderpass enthalten. Der Pauschalbetrag beträgt pro Person 89 Euro. Auskünfte: Verkehrsverein Erholungsgebiet Oberes Kylltal, Kurallee, 54589 Stadtkyll, Telefon (06597) 28 78.",
    "Für den einen ist es musikalischer Hochgenuss, für den anderen schlicht Lärm. Gemeint ist Musik, die aus Lautsprechern, Radios oder durch Musikinstrumente durch geöffnete Türen und Fenster bei sommerlichen Temperaturen ins Freie dringt. Die Gemeinde weist darauf hin, dass während der Mittagsruhe von 13 bis 15 Uhr und nachts von 22 bis 7 Uhr keine musikalische Ruhestörung erfolgen darf. Gartengeräte mit Motoren dürfen montags bis freitags nur von 8 bis 13 und von 15 bis 19 Uhr benutzt werden, an Sonnabenden von 9 bis 13 Uhr. An Sonn- und Feiertagen dürfen die Geräte nicht zum Einsatz kommen.",
    "Das erste deutsche Bücherdorf hat in Mühlbeck/Fredersdorf (Sachsen-Anhalt) seit Ende September seine Tore geöffnet. In acht Antiquariaten warten über 70 000 Bücher aus allen Bereichen der Literatur auf Interessenten. Das in reizvoller landschaftlicher Umgebung liegende Bücherdorf nahe Bitterfeld – unweit der A19 und des Flughafens Leipzig – ist aus allen Teilen Deutschlands leicht zu erreichen. Geöffnet sind die Antiquariate auch am Samstag und Sonntag. In Europa gibt es bereits acht solcher Bücherdörfer in Belgien, Frankreich, Großbritannien, den Niederlanden, Norwegen und der Schweiz. Initiatorin des deutschen Bücherdorfes ist Heidi Dehne (Tel. 03493/4 30 43).",
    "Die Bregenzer Festspiele sind bemüht, die Vorstellungen auch bei zweifelhafter Witterung bzw. leichtem Regen auf der Seebühne abzuhalten, weshalb es zu Verzögerungen des Beginns oder zu Unterbrechungen kommen kann. Sollte die Seeaufführung nicht stattfinden können, wird eine halbszenische Version von Porgy and Bess im Festspielhaus gegeben. Wir empfehlen unseren Gästen, bei unsicherer Wetterlage regenfester Kleidung den Vorzug zu geben und auf Schirme zu verzichten, da diese die Sicht beeinträchtigen. Das Spiel auf dem See wird ohne Pause gespielt. Die Spieldauer beträgt ca. 2 Std. 45 Min."
  ];

  const TEXTS_EVA_IRIS = [
    "Frauen lachen auf viele Arten. Sie kichern, glucksen und manchmal singen sie fast. Bei Männern dagegen kommt das viel seltener vor. Aber gemeinsam ist Männern und Frauen, dass sie in Vokalen lachen, die im Mundzentrum gebildet werden. Und das ist entscheidend: Nur wenn die Vokale im Mundzentrum gebildet werden, ist das Lachen für uns fröhlich und positiv. Damit ist bewiesen, dass das Lachen vom Weihnachtsmann, das wie ein tiefes Ho, ho, ho klingt, kaum als fröhlich empfunden wird. Denn dieser Laut wird im hinteren Teil des Mundraums gebildet.",
    "Viel Arbeit, viel Stress. Wer viel arbeitet, muss nicht unbedingt gestresst sein. Frauen in medizinischen Berufen zum Beispiel klagen trotz teilweise hoher Belastung deutlich weniger über stressbedingte Krankheiten als Raumpflegerinnen, Kindergärtnerinnen oder Berufsschullehrerinnen. Dies zeigt eine Untersuchung des Hamburger IPO-Instituts, das für eine Studie 1000 Frauen und Männer befragt hat. Vor Stress schützen laut Studie ein angenehmes Betriebsklima, ein gutes Verhältnis zur Chefin oder zum Chef und die Möglichkeit, die eigene Arbeit selbstständig zu planen.",
    "Ein neues Buch zeigt, wie Männer Fähigkeiten aus dem Arbeitsleben auf die Erziehung übertragen können und so zu erfolgreichen Vätern werden. Da wird die gemeinsame Kindererziehung zur Partnerarbeit (oder sogar zum Joint Venture). Geschicktes Verhandeln heißt, das Kind zu überzeugen, dass die Zähne geputzt werden müssen, und der Familienurlaub hat alle Qualitäten einer Tagung oder eines Seminars: Man erhält die Gelegenheit, die Kinder intensiv zu studieren.",
    "Eine Studie der Universität Essex hat ergeben, dass wir mit siebzig Jahren am glücklichsten sind. Zwar haben die meisten Menschen in diesem Alter gesundheitliche Probleme, aber dafür genießen sie viel Freizeit und haben keinen Stress mehr. Deshalb macht ihnen das Leben so viel Spaß wie nie zuvor. Die Studie besagt auch, dass wir einen ersten Höhepunkt der Lebensfreude mit fünfzehn Jahren erreichen. Danach geht es bergab. Zwischen dreißig und fünfzig Jahren tragen wir am meisten Verantwortung, das Leben ist geprägt von Sachzwängen.",
    "Warum bleiben manche Managerinnen erfolgreich, obwohl sie Nachrichten mitteilen, die ihr Publikum lieber nicht hören möchte? Ganz einfach: Sie verkaufen die schlechte Nachricht mit Humor. Ein Londoner Soziologe hat während einer Studie beobachtet, dass gerade bei Reden unangenehmen Inhalts oft heiter gelacht wird. Das Lachen wird bewusst provoziert, etwa durch bestimmte Wörter oder durch ein eigenes breites Lächeln. Die fröhliche Stimmung soll dafür sorgen, dass die Zuhörenden das Gefühl haben, sie würden mehr wissen als alle anderen."
  ];

  const TEXTS_PAUL_TAMARA = [
    "Immer wieder drehen indische Regisseure Szenen ihrer Kinofilme in den Schweizer Bergen. Warum nehmen sie die Strapazen und hohen Kosten einer solch langen Reise auf sich? Das Hamburger Abendblatt besuchte eines dieser Filmteams auf dem Drehplatz im idyllischen Berner Oberland und erhielt spannende und heitere Antworten.",
    "KIDTOURS – Ferien mit Kindern ist ein praktischer Ausflugsführer für Familien: mit 1000 Tipps, Tricks und Ideen für jeden Geschmack, jedes Alter und jedes Budget. Das übersichtliche, hübsch illustrierte Nachschlagewerk erhalten Sie für € 19,50 im Buchhandel oder direkt bei Werd Verlag, www.werd.net.",
    "Das Halbtax-Abo ist Ihr Schlüssel zu günstigen Reisen mit Bahn, Bus und Schiff und präsentiert sich im praktischen Kreditkartenformat. Schon beim Abo selbst können Sie zünftig sparen: Für ein Jahr halbtaxeln bezahlen Sie 150 Schweizer Franken. Und das ist noch nicht alles: Mit dem Halbtax-Abo sind Sie gut informiert: Zweimal jährlich erhalten Sie das Kundenmagazin mit vielen Reise-Ideen und exklusiven Reiseangeboten. Mit Ihrem Halbtax-Abo erhalten Sie 25% Preisnachlass auf Zugfahrten von der Schweiz nach Deutschland und Österreich, wenn Sie Ihre Fahrkarte in der Schweiz kaufen. SBB CFF FFS – Schweizerische Bundesbahnen",
    "Dokumentarfilm und Seifenoper zusammen heißt Doku-Soap, stammt aus England und macht sich seit Jahren auch auf deutschen TV-Kanälen breit. Vor allem Privatsender haben sich als erfolgreiche Doku-Soap-Sender etabliert. In vielen TV-Serien kann man das wirkliche Leben von Menschen verfolgen und mit ihnen mitleben. Zurzeit besonders erfolgreich: die Sendung „Tausche Familie“, die täglich um 18 Uhr viele Zuschauer vor den Fernseher lockt.",
    "Wir wollen dir bei der Berufswahl helfen: Die Deutsche Bahn, ein Unternehmen mit Zukunft. Viele Berufe ändern sich im Laufe der Zeit. Genauso wie die Interessen im Leben. Und trotzdem gibt es Neigungen und Fähigkeiten, die du lange Zeit in deinem Leben behalten wirst. So zum Beispiel die Freude am Kontakt mit Menschen. Oder die Begeisterung für fremde Sprachen. Oder das Arbeiten in der freien Natur und im Team. Oder das Interesse an Technik und die Freude am Handwerk. Je nachdem, wofür du dich interessierst, kannst du bei der Deutschen Bahn aus insgesamt 15 Lehrberufen wählen. Um die richtige Entscheidung zu treffen, lohnt es sich, sich gründlich zu informieren, zum Beispiel auf unserer Website www.bahn.de."
  ];

  const TEXTS_MIROSLAV_MARA = [
    "Ein neuer Trend in Sachen Wohnen setzt sich immer mehr durch: Ökodörfer. Ihre Vielfalt ist groß. Außerdem bieten sie eine echte Alternative zur Anonymität und dem Großstadtleben. Nicht nur auf sich selbst, sondern auch auf einen bewussten Umgang mit Gesellschaft und Natur soll in Zukunft geachtet werden. Bei den neuen Wohnungen setzt man auf ökologisches Bauen und auf erneuerbare Energien. Die meisten Ökosiedlungen verfügen über Seminarzentren, in denen Lehrgänge zu dieser neuen Form des Miteinanders angeboten werden.",
    "Angebot für Menschen, die durch ihren Beruf überlastet sind: „Yoga und Meditation für das innere Gleichgewicht“. Renate Loebner, ausgebildete Yogalehrerin, erklärt und zeigt in Wochenendseminaren in einem Haus am See, wie es funktioniert. Die Diplom-Biologin bezeichnet Yoga als Kraftquelle für Körper, Geist und Seele. Mit diesen Methoden können gestresste Menschen in kurzer Zeit wieder zur Ruhe kommen, da die körperlichen und geistigen Übungen relativ schnell zu erlernen sind.",
    "Grau, trocken und hart: Der Baustoff Beton hat einen eher langweiligen Ruf. Dabei ist er ein Multitalent. Je nach Rezeptur wird Beton nun sogar zum Luftreiniger in Großstädten. Der neue Zement mit dem Namen TioCem ist das Ergebnis eines knapp vierjährigen Forschungsprojekts. Er reagiert auf Licht und kann bis zu 90 Prozent der Schadstoffe aus der Luft entfernen.",
    "Immer mehr Menschen erfüllen sich einen Traum: ein eigenes Baumhaus. Die Baustile sind so unterschiedlich wie die Besitzer, sie dienen zum Beispiel als Gästezimmer oder Teehäuser. Viele nutzen sie sogar in den Sommermonaten zum Schlafen. Baumhaus-Spezialist Erwin Köstinger freut sich über diese Entwicklung: Baumhäuser können nicht nur zum Wohnen, sondern auch zum Arbeiten als Büro genutzt werden.",
    "In Großstädten gehören sie schon zum Alltagsleben: die Partys nach der Arbeit. Neben Musik und Tanz umfasst das Angebot bei solchen Partys auch die Möglichkeit zu einem Imbiss, in der Regel als Ersatz für das Abendessen. Kein Wunder, dass sich aus solchen Treffen, die in der Mehrzahl von Alleinstehenden besucht werden, schon jede Menge Freundschaften und Partnerschaften fürs Leben ergeben haben."
  ];

  const TEXTS_ANNIKA2_SONJA_CORINA = [
    "Rund 150.000 Sprachreisen werden von Deutschen jährlich unternommen. Der Wunsch, eine andere Sprache zu lernen, kann verschiedene Gründe haben: private, schulische oder berufliche. Das Angebot an Sprachreisen wächst ständig, über die Qualität ist jedoch wenig oder nichts bekannt. Im Marktplatz geht es diesmal um Kriterien für das Lernen mit Erfolg. Welche Methoden sind zu empfehlen, welche Anbieter kosten? Ihre Fragen werden am Hörertelefon unter 0800-839601 von Fachleuten beantwortet.",
    "Die Metropole Wien lädt zum winterlichen Eisvergnügen vor dem Wiener Rathaus ein: Vom 22. Januar bis 7. März kann man auf 1800 Quadratmetern übers Eis fahren. Die Musik dazu bestimmt den Fahrstil und reicht vom klassischen Walzer bis zur Diskomusik. Nachts werden auf der Eisbahn Partys veranstaltet, vom Samba-Fest bis zum Hip-Hop-Event. Speisen und Getränke gibt es an verschiedenen Ständen, Schlittschuhe und Stiefel kann man leihen. Informationen: Wiener Tourismusverband.",
    "Für das Aktionsprogramm der Europäischen Union (EU) zur beruflichen Weiterbildung, Leonardo da Vinci, können noch bis zum 31. März Anträge gestellt werden. Ziel des Programms ist es, europäische Projekte zur beruflichen Weiterbildung zu unterstützen. Anträge auf finanzielle Unterstützung können die Institutionen stellen, die mit mindestens zwei weiteren europäischen Partnern an einem Projekt arbeiten wollen. Information: Nationale Koordinierungsstelle Leonardo da Vinci, Fehrbelliner Platz 3, D-10707 Berlin, Tel. 030/8643-0, Fax -2637.",
    "Wien (SN/APA). Wie das Unterrichtsministerium mitteilte, sollen im kommenden Jahr monatlich 70.000 Euro für Kulturprojekte an Schulen zur Verfügung gestellt werden. Unterstützt würden damit Veranstaltungen und Projekte, die das Verständnis der Kinder und Jugendlichen für die Künste wecken, das Interesse am Musisch-Kreativen verstärken und zu Kontakten und einer Auseinandersetzung mit Künstlern führen. Dadurch soll in altersgemäßer Form die ganzheitliche Entwicklung der Persönlichkeit von Kindern und Jugendlichen gefördert werden.",
    "Zum sechsten Mal veranstaltet das Comitato Genitori Binningen/Bottmingen seine breit angelegte multikulturelle Kunstausstellung Arte. An der Veranstaltung nehmen 70 Künstlerinnen und Künstler aus der Region sowie Gäste aus Italien, Frankreich, Deutschland und weiteren Ländern teil. Bei dem vor 18 Jahren gegründeten Comitato handelt es sich um einen Elternverein, der damals italienischsprachigen Kindern bei ihren Schulproblemen hilfreich zur Seite stand. Da die jetzige dritte Kindergeneration nicht mehr diese Probleme hat, suchte das Comitato nach neuen Aufgaben und fand in der Organisation der alljährlichen Kunstausstellung ein neues, interessantes Betätigungsfeld."
  ];

  const TEXTS_NADJA_ANDREAS2 = [
    "Die Kunst- und Medienschule F+F Zürich bietet bereits zum dritten Mal den Computerkurs „Digitale Bildbearbeitung“ an. Im neuen Semester steht für zehn Samstage „Fotografie nach der Fotografie“, also die digitale Bearbeitung von Bildern, im Mittelpunkt. Dabei kommen verschiedene Softwareprodukte zum Einsatz. Der Kurs befasst sich aber nicht nur mit dem Vermitteln technischer Kenntnisse, sondern auch mit Themen- und Problembereichen rund um die digitale Foto- und Bildbearbeitung. Kurskosten: 800 Franken. Nähere Informationen und Anmeldung zu diesem Kurs: www.f-f.ch.",
    "Neuperlach-Süd – Nach dem Einkaufen einen Kaffee genießen, mit anderen ins Gespräch kommen, sich mit Bekannten treffen oder einfach entspannen – all das geht ab 11. Juli immer dienstags zwischen 14 und 18 Uhr im neuen Eiscafé der Dietrich-Bonhoeffer-Kirche. „Wir möchten damit einen Ort der Begegnung für Jung und Alt anbieten und zur Belebung des Stadtteils beitragen“, erklärt Pfarrer Sebastian Kühnen. Neben kalten und heißen Getränken sowie Kuchen steht während der Öffnungszeiten auch eine Mitarbeiterin für Gespräche zur Verfügung.",
    "Geheimnisse der modernen Konditorkunst: Der Meister des Süßen, Herwig Gasser. Über Jahre hinweg sammelte der Bäcker des berühmten Wiener Café Landtmann Mehlspeisenrezepte. Von der Birnentorte über den Apfelstrudel bis hin zum Heidelbeerstollen. Verlag Kettel, 110 Fotos, 300 Seiten. ISBN 3-85134-014-0.",
    "Am Montag wird in Stuttgart die BildungsDidacta eröffnet. Dort werden vor allem Lehrmaterialien vorgestellt. Bei vielen sich um Bildungssoftware. Für ein gelungenes Softwareprojekt wird am der Bildungssoftwarepreis digital vergeben. Dabei handelt es sich um die wichtige Auszeichnung für Lehr- und Lernprogramme im deutschsprachigen Raum. Die verzeichnen mit dem digital multimediale Gebote aus, die inhaltlich und formal als ragend und beispielgebend gelten können.",
    "Des Gallup-Instituts hat sich mit Kaffeehausverhaltens der Wiener. Ein Vorurteil hat sich dabei bestätigt: Kaffeehaus und der Wiener Seine Melange. Ergebnisse der Studie: 27 der Befragten gaben an, zumindest einmal im Monat in ein Café in der Nähe ihrer Wohnung zu gehen. Durchschnittlich 54 Minuten bleiben die Befragten in ihrem Stammcafé. Umso länger wird gegessen. Der Grund ein Kaffeehaus zu besuchen: Wichtiger ist das Plaudern mit Freunden – 77 Prozent der Befragten nannten dies als Grund für den Besuch im Kaffeehaus."
  ];

  const TEXTS_PETRA_JENNIFER = [
    "Ich möchte, dass Menschen, die meine Fotos gesehen haben, von nun an die Welt mit anderen Augen betrachten. Das könnte der neuseeländischen Fotografin Anne Geddes gelingen. Denn die Bilder, die sie für das Buch „Drunten im Garten“ von den kleinen Menschenkindern gemacht hat, sind ungewöhnlich und wunderschön: Babys auf Blumen, Blättern, Beeren, verkleidet als Morcheln, Melonen oder Marienkäfer, Babys in Tulpen und als Schmetterlinge. Ein Bildband, angereichert mit poetischen Texten und Ratschlägen.",
    "Die meisten Skikurse für Kinder beginnen im Alter von vier Jahren. Im Kärntner Baby-Dorf Trebesing ist das anders: Hier werden im Windel-Wedel-Camp bereits Kleinkinder ab zwei Jahren unterrichtet. Täglich zwei Stunden können die Skihaserln unter fachkundiger Anleitung auf einem flachen Hügel erste Geh- bzw. Fahrversuche auf zwei Brettern machen. Nach einigen Tagen Übung geht es dann mit dem Baby-Bus ins Skigebiet Innerkrems. Auch Ginas Baby- und Kinderhotel am Faaker See bietet seinen jüngsten Gästen Skikurse. Fast 1000 Knirpse haben in der Windelschule schon Skifahren gelernt. Auskunft: Tourismusverband Lieser-Maltatal und die Kinderhotels.",
    "Berlins jüngster Schriftsteller hat deutlich mehr Texte verfasst, als er Jahre zählt. Rund 50 Gedichte und Erzählungen tippte Daniel Story, 12, schon in seinen Computer. „Ich schreibe fast, seitdem es mich gibt“, sagt der Sechstklässler. Bereits mit sieben dichtete er die ersten Verse, jetzt mit zwölf ist er stolz auf seine erste Autorenlesung. Wenn Freunde Fußball spielen, tobt Daniels Phantasie im Kinderzimmer. Warum er lieber schreibt? Daniel: „Ich schreibe, weil ich nicht alles erleben kann, was ich denke.“",
    "Ob Sie privat oder geschäftlich unterwegs sind, mit dem Stadt-Ticket können Sie billig die öffentlichen Verkehrsmittel nutzen. Voraussetzung: Sie sind mit dem Flugzeug oder der Deutschen Bahn (über 100 km) angereist. Gegen einen Aufpreis von nur Euro 2,50 ermöglicht Ihnen das Stadt-Ticket auch nach der Ankunft am Zielort freie Fahrt mit U-, S- oder Straßenbahnen sowie Bussen – bis zu 48 Stunden. Übrigens: Ihr Stadt-Ticket gilt an zwei aufeinanderfolgenden Tagen, die Sie beim Kauf Ihres Fahrscheines selbst bestimmen.",
    "In Mecklenburg-Vorpommern können junge Leute jetzt für den halben Fahrpreis mit dem Taxi auf Discotour gehen. Tickets dafür sind bei allen Geschäftsstellen der Allgemeinen Ortskrankenkasse (AOK) sowie an Esso-Tankstellen zum halben Preis erhältlich. Junge Leute zwischen 16 und 25 Jahren können sie an Wochenenden und Feiertagen in der Zeit von 20 Uhr bis morgens 6 Uhr benutzen. Die Taxifahrer erhalten bei ihrer Zentrale dann den vollen Fahrpreis erstattet."
  ];

  const RITA_BASE = {
    level: "B1",
    sub: "Teile 1",
    type: "headings",
    points: 25,
    options: [
      { k: "a", de: "Schweizer sollen gesünder leben", ar: "يجب على السويسريين أن يعيشوا حياة أكثر صحة" },
      { k: "b", de: "Neu im Trend: Jung und Gesund - mit der Schokolade", ar: "الجديد في الموضة: الشباب والصحة - مع الشوكولاتة" },
      { k: "c", de: "Studie zeigt: Heiraten macht dick", ar: "دراسة تظهر: الزواج يزيد الوزن" },
      { k: "d", de: "Japanische Studie: Vielschläfer leben länger", ar: "دراسة يابانية: الأشخاص الذين ينامون كثيراً يعيشون أطول" },
      { k: "e", de: "Die Mehrheit der Schweizer treibt aktiv Sport", ar: "غالبية السويسريين يمارسون الرياضة بانتظام" },
      { k: "f", de: "Statistik: Unverheiratete haben oft ein paar Kilos zu viel", ar: "إحصائيات: غير المتزوجين غالباً ما يعانون من زيادة الوزن" },
      { k: "g", de: "Teures Essen für mehr Jugend und Schönheit", ar: "طعام باهظ الثمن من أجل المزيد من الشباب والجمال" },
      { k: "h", de: "USA: Nachfrage nach freien Lebensmitteln geht zurück", ar: "الولايات المتحدة: تراجع الطلب على الأغذية المجانية" },
      { k: "i", de: "Schokolade essen - jung bleiben", ar: "تناول الشوكولاتة - البقاء شاباً" },
      { k: "j", de: "Weniger schlafen - länger leben", ar: "النوم أقل - العيش أطول" }
    ],
    items: [
      {
        n: 1, c: "b",
        de: "Der Schokolade-Boom zeigt sich hierzulande nicht nur im hohen Verbrauch (jeder Schweizer isst fast 12 Kilo Schokolade im Jahr!), nein, er hat nun auch die Schönheitsindustrie erreicht. Vom 16. Januar bis zum 24. Februar bietet das Grand Hotel Bad Ragaz unter dem Namen Choco Therapy zahlreiche kosmetische Behandlungsmethoden mit Schokolade an. Die Bäder, Massagen und Hautcremes mit Kakao sind durchaus ernst gemeint, denn Kakao soll eine belebende Eigenschaft haben, die den Menschen jung und gesund aussehen lässt.",
        summaryAr: "يشهد قطاع التجميل في سويسرا توجهاً جديداً يعكس مدى ارتباط الشعب السويسري بالشوكولاتة التي يستهلك الفرد منها قرابة اثني عشر كيلوغراماً سنوياً حيث أطلق فندق \"جراند هوتيل باد راغاتس\" برنامجاً علاجياً مميزاً تحت مسمى \"Choco Therapy\" يمتد من منتصف يناير وحتى أواخر فبراير وتتضمن هذه الخدمة المبتكرة استخدام الكاكاو في جلسات الاستحمام والتدليك وصناعة الكريمات الجلدية نظراً لفوائده الكبيرة في تنشيط الدورة الدموية ومنح الجلد مظهراً حيوياً وشاباً يجمع بين الصحة والجمال."
      },
      {
        n: 2, c: "c",
        de: "Frisch verheiratete Paare nehmen oft schon in den Flitterwochen einige Kilos zu, weil sie ihre Essgewohnheiten ändern. Das belegt eine neue Studie. In Deutschland sind fast die Hälfte der verheirateten Frauen und circa zwei Drittel der Ehemänner übergewichtig. Alleinstehende sind vermutlich schlanker, weil sie besonderen Wert auf ihr Äußeres legen, mehr Sport treiben und sich selten Zeit für gemütliche Mahlzeiten nehmen.",
        summaryAr: "تؤكد دراسة حديثة أن الأزواج الجدد غالباً ما يكتسبون وزناً إضافياً منذ بداية شهر العسل نتيجة لتغير نمط عاداتهم الغذائية حيث تشير الأرقام في ألمانيا إلى أن قرابة نصف النساء المتزوجات وحوالي ثلثي الرجال المتزوجين يعانون من زيادة الوزن وفي المقابل يميل العزاب إلى الحفاظ على رشاقة أكبر نظراً لاهتمامهم المتزايد بمظهرهم الخارجي وحرصهم على ممارسة الرياضة بشكل مكثف بالإضافة إلى أنهم نادراً ما يخصصون وقتاً طويلاً لتناول الوجبات الجماعية المريحة التي تميز حياة المتزوجين."
      },
      {
        n: 3, c: "j",
        de: "Wer acht Stunden und länger schläft, hat eine deutlich kürzere Lebenserwartung. Das berichtete das Apothekenmagazin Gesundheit am Mittwoch und bezog sich dabei auf eine neue japanische Studie. Schlecht für die Männer, denn laut dieser Studie schlafen Männer im Durchschnitt eine halbe Stunde länger pro Nacht als Frauen. Aber es gibt auch eine gute Nachricht für die Viel- und Langschläfer: Wer lange schläft, hat weniger Gewichtsprobleme und fühlt sich gesünder.",
        summaryAr: "أفادت مجلة الصيدلية \"Gesundheit\" استناداً إلى دراسة يابانية حديثة بأن النوم لمدة ثماني ساعات أو أكثر يرتبط بشكل ملحوظ بقصر متوسط العمر المتوقع وهو ما يعد مؤشراً سلبياً للرجال الذين ينامون في المتوسط نصف ساعة إضافية كل ليلة مقارنة بالنساء إلا أن الدراسة حملت في طياتها خبراً سعيداً لمحبي النوم الطويل حيث تبين أنهم أقل عرضة للإصابة بمشاكل الوزن الزائد ويتمتعون بشعور أكبر بالصحة والحيوية مقارنة بغيرهم."
      },
      {
        n: 4, c: "a",
        de: "Nach dem Motto „beschwingt und bewegt“ starten die Schweizer Gesundheitsbehörden eine landesweite Bewegungskampagne. Dabei sollte die Schweizer Bevölkerung aufgerufen werden, ausgewogen zu essen und sich täglich zu bewegen. Fast zwei Drittel der Bevölkerung in der Schweiz sind wenig aktiv und essen zu viel. Die Kampagne soll den Leuten zeigen, wie Sport und gesunde Ernährung ohne großen Aufwand in den Alltag integriert werden können, z.B. mit einem Spaziergang am Mittag oder mit einem Apfel zum Znüni statt Schokolade.",
        summaryAr: "أطلقت السلطات الصحية السويسرية حملة وطنية تحت شعار \"بنشاط وحيوية\" تهدف إلى تشجيع السكان على تبني نمط حياة صحي يعتمد على الغذاء المتوازن والحركة اليومية خاصة وأن قرابة ثلثي الشعب السويسري يعانون من قلة النشاط والإفراط في الأكل وتسعى هذه الحملة إلى توعية الأفراد بكيفية دمج الرياضة والتغذية السليمة في تفاصيل يومهم البسيطة دون عناء كبير مثل استبدال الشوكولاتة بتفاحة في وجبة خفيفة أو ممارسة رياضة المشي خلال استراحة الغداء لضمان صحة أفضل للجميع."
      },
      {
        n: 5, c: "g",
        de: "„Du bist, was du isst“ hat als Slogan ausgedient. Heute muss es heißen: Gut aussehen mit dem richtigen Essen. Der Trend kommt aus den USA: Dort kaufen bereits viele Leute neue teure Lebensmittel mit wissenschaftlichen Inhaltsstoffen, die dem Kunden jüngeres und schöneres Aussehen versprechen. So bietet z.B. ein New Yorker Nobelhotel das Menü Gegen-Graue-Haare an, das gegen das Älterwerden wirken soll. Aber wer wird schon eine solche Mahlzeit bestellen? Millionen von Leuten, so die Trendforscher. Und zwar aus dem einfachen Grund, weil jeder jung und gut aussehen will, und das mit möglichst wenig Aufwand.",
        summaryAr: "تجاوز المفهوم التقليدي \"أنت ما تأكله\" حدود الصحة ليصبح الشعار الجديد هو \"الجمال من خلال الغذاء\" حيث يشير النص إلى توجه عالمي انطلق من الولايات المتحدة يعتمد على استهلاك أطعمة باهظة الثمن ومعززة بمكونات علمية تهدف للحفاظ على الشباب والجمال ومثال ذلك تقديم أحد الفنادق الفاخرة في نيويورك قائمة طعام خاصة لمحاربة الشيب وعلامات الشيخوخة ويتوقع خبراء التوجهات المستقبلية إقبال الملايين على هذا النوع من الابتكارات لرغبة الناس القوية في تحسين مظهرهم الخارجي بأقل مجهود ممكن."
      }
    ]
  };

  const CAROLINE_BASE = {
    level: "B1",
    sub: "Teile 1",
    type: "headings",
    points: 25,
    options: [
      { k: "a", de: "Familienbildung Schwerpunkt Beruf und Familie", ar: "التوفيق بين العمل والأسرة: محور تعليم الأسرة" },
      { k: "b", de: "Demonstration gegen Fluglärm", ar: "مظاهرة ضد الضوضاء الناتجة عن الطيران" },
      { k: "c", de: "Flughafen Frankfurt wird 10 Jahre", ar: "مطار فرانكفورت يحتفل بمرور 10 سنوات" },
      { k: "d", de: "Flughafen Frankfurt beliebter Veranstaltungsort", ar: "مطار فرانكفورت: مكان مفضل للفعاليات" },
      { k: "e", de: "Experten gegen Vergrößerung des Flughafens", ar: "خبراء يعارضون توسيع المطار" },
      { k: "f", de: "Diskussion über Flughafen und Arbeitsplätze", ar: "نقاش حول المطار وفرص العمل" },
      { k: "g", de: "Neue Kurse: Spiele für Mütter und Kinder", ar: "دورات جديدة: ألعاب للأمهات والأطفال" },
      { k: "h", de: "Umwelt und Flughafen: Ein Informationsabend der Bürger", ar: "البيئة والمطار: أمسية معلوماتية للمواطنين" },
      { k: "i", de: "Neue Kurse für Kinder", ar: "دورات جديدة للأطفال" },
      { k: "j", de: "Neue Kurse: Museumsführung für junge Väter", ar: "دورات جديدة: جولات في المتحف للآباء الشباب" }
    ],
    items: [
      {
        n: 1, c: "h",
        de: "Der Frankfurter Flughafen wird weiter ausgebaut. Eine Gruppe von Frankfurter Bürgern aus den östlichen Stadtteilen, die sich seit Jahren aktiv für den Naturschutz und die Umwelt einsetzt, lädt für Donnerstag dieser Woche um 19.30 Uhr zu einem Informationsabend über den Ausbau des Frankfurter Flughafens ein. Im Bürgerhaus Ostend, Parkstraße 24, Clubraum 12, werden verschiedene Sprecher zu hören sein. Die Gruppe möchte Antworten auf folgende Fragen suchen: Wie viel Lärm durch Flugzeuge verträgt die Stadt? Oder: Welche Auswirkungen hat der Flugverkehr auf Umwelt und Natur?",
        summaryAr: "تستمر أعمال التوسعة في مطار فرانكفورت، وهو ما دفع مجموعة من سكان الأحياء الشرقية الناشطين في مجال حماية البيئة منذ سنوات إلى الدعوة لتنظيم أمسية إعلامية يوم الخميس من هذا الأسبوع في تمام الساعة السابعة والنصف مساءً بدار المواطنين في حي \"أوست إند\" لمناقشة تداعيات هذا المشروع، حيث سيستضيف اللقاء عدة متحدثين للبحث في قضايا جوهرية تشغل الرأي العام، أبرزها مدى قدرة المدينة على استيعاب الضجيج الناتج عن حركة الطائرات، وتأثير هذا النشاط الجوي المتزايد على التوازن البيئي والطبيعة في المنطقة."
      },
      {
        n: 2, c: "d",
        de: "Der Frankfurter Flughafen erfreut sich bei vielen Firmen als beliebter Ort für Veranstaltungen und Tagungen. Dies zeigt ein Bericht des Frankfurter Flughafens, der beim zehnjährigen Jubiläum des Kongresszentrums vorgelegt wurde. Im Jubiläumsjahr haben am Frankfurter Flughafen 6800 Veranstaltungen mit insgesamt 72000 Teilnehmern stattgefunden. Im Jahr davor waren es nur 6300 Veranstaltungen mit 70000 Gästen. Im Kongresszentrum, das direkt gegenüber dem Hauptgebäude des Flughafens liegt, gibt es 28 Konferenzräume für bis zu 200 Teilnehmer. Modernste Technik wie Laptop-Anschlüsse und Internetzugänge in allen Konferenzräumen sind ebenso vorhanden wie ein Dolmetscherdienst und verschiedene Speisemöglichkeiten. Eine transportable Videokonferenz-Anlage ermöglicht Verbindungen in die ganze Welt.",
        summaryAr: "أصبح مطار فرانكفورت وجهة مفضلة للشركات لتنظيم الفعاليات والمؤتمرات حيث سجل تقرير بمناسبة الذكرى العاشرة لمركز المؤتمرات نمواً ملحوظاً بزيادة عدد الفعاليات إلى 6800 حدث استضافت 72 ألف مشارك مقارنة بالعام السابق ويوفر المركز الذي يقع مقابل مبنى المطار الرئيسي 28 قاعة مجهزة بأحدث التقنيات الرقمية وخدمات الترجمة الفورية بالإضافة إلى خيارات متنوعة للإطعام وتقنيات الفيديو المتطورة التي تتيح التواصل مع مختلف أنحاء العالم بكل سهولة ويسر."
      },
      {
        n: 3, c: "f",
        de: "Eine Bürgergruppe mit dem Namen „Südliches Frankfurt“ lädt für Montag kommender Woche, um 19.30 Uhr ins Pfarrhaus St. Mauritius, Mauritiusstraße 14, zu einer öffentlichen Expertenbefragung zum Thema „Arbeitsplätze am Frankfurter Flughafen“ ein. Der Gruppe liegen Berichte und Daten vor, die nach den Worten der Sprecher der Gruppe sehr fantastisch und zweifelhaft sind. Deshalb hat die Bürgergruppe Südliches Frankfurt den Personalleiter des Frankfurter Flughafens, einen Experten aus dem Wirtschaftsministerium, einen bekannten Stadtentwicklungsplaner und einen Soziologen, der sich mit der Arbeitsplatzentwicklung in der Frankfurter Region beschäftigt, eingeladen. Im Anschluss an die Vorträge der Experten haben die Gäste Zeit, Fragen zu stellen.",
        summaryAr: "تعتزم مجموعة مواطنين تحت اسم \"جنوب فرانكفورت\" تنظيم لقاء عام في دار رعية القديس موريتيوس مساء الاثنين القادم لمناقشة ملف الوظائف في المطار والتحقق من دقة البيانات الرسمية التي تصفها المجموعة بالمبالغ فيها وسيشهد اللقاء حضور نخبة من الخبراء من بينهم مدير الموارد البشرية بالمطار وممثل عن وزارة الاقتصاد ومخطط حضري وعالم اجتماع متخصص في تطور سوق العمل بالمنطقة لمواجهة التساؤلات المطروحة مع فتح المجال للجمهور لطرح استفساراتهم بعد انتهاء المداخلات الرسمية."
      },
      {
        n: 4, c: "a",
        de: "Das neue Halbjahresprogramm der Evangelischen Familienbildungsstätte bringt eine Übersicht über viele Veranstaltungen. Neben Kursen wie Geburtsvorbereitung und Babypflege steht diesmal das Thema „Berufstätige Eltern“ im Mittelpunkt. In Gruppen und Kursen vor allem für Frauen geht es darum, wie sich nach der Geburt eines Kindes Beruf und Familie miteinander vereinbaren lassen. Das Verhältnis zwischen Mann und Frau spielt eine große Rolle im Angebot der Familienbildung; hierzu gibt es wieder spezielle Programme nur für Frauen oder nur für Männer. Auch zum Verhältnis der Generationen (Großeltern und Enkelkinder) gibt es wieder Angebote. Darüber hinaus wartet das Programm mit Kursen für Entspannung und Zeitmanagement auf, die bei Fragen des Alltags helfen wollen.",
        summaryAr: "يركز البرنامج الجديد لمركز التعليم العائلي الإنجيلي على قضية التوفيق بين المسار المهني والحياة الأسرية للآباء العاملين بعد الولادة مع تخصيص دورات تدريبية تركز بشكل خاص على أدوار المرأة والرجل في الأسرة وتنمية الروابط بين الأجيال المختلفة مثل الأجداد والأحفاد كما يتضمن البرنامج مجموعة واسعة من الأنشطة التي تشمل التحضير للولادة ورعاية الأطفال وتقنيات الاسترخاء وإدارة الوقت لمساعدة الأسر على مواجهة ضغوط وتحديات الحياة اليومية بفعالية أكبر."
      },
      {
        n: 5, c: "i",
        de: "Die Volkshochschule Dornbirn bietet in den kommenden Wochen neue Kurse an. Am Mittwoch nächster Woche beginnen zwei Malkurse für Kinder. Zweieinhalb- bis vierjährige Kinder treffen sich um 15.30 Uhr, Kinder im Alter von fünf und sechs Jahren um 17.00 Uhr. Für Kinder im Alter zwischen eineinhalb und sechs Jahren und ihre Väter beginnt am Samstag um 10.00 Uhr eine feste Vater-Kind-Gruppe. Am darauffolgenden Samstag gibt es dann auch ein Treffen für Väter und Kinder bis dreieinhalb Jahren. Etwas anderes ist die Kultur- und Kreativwerkstatt am Montag nächster Woche. Aus Ton und Erde sollen Figuren nach afrikanischen Beispielen gebastelt werden. Zur Vorbereitung treffen sich die Teilnehmer am kommenden Montag zuerst im Museum. Anmeldung spätestens morgen bis 15.00 Uhr.",
        summaryAr: "تستعد مدرسة الشعب في دورنبيرن لإطلاق سلسلة من الدورات الجديدة تتنوع بين ورش عمل للرسم للأطفال بمختلف فئاتهم العمرية ومجموعات تفاعلية مخصصة للآباء وأبنائهم في عطلات نهاية الأسبوع بالإضافة إلى ورشة عمل ثقافية متميزة لصناعة تماثيل طينية مستوحاة من الفن الأفريقي تبدأ بلقاء تحضيري في المتحف ويُشترط على الراغبين في المشاركة استكمال إجراءات التسجيل في موعد أقصاه غداً الساعة الثالثة بعد الظهر لضمان مقاعدهم في هذه الأنشطة الإبداعية."
      }
    ]
  };

  const EVA_BASE = {
    level: "B1",
    sub: "Teile 1",
    type: "headings",
    points: 25,
    options: [
      { k: "a", de: "Zufriedenheit im Job schützt vor Stress", ar: "الرضا في العمل يقي من التوتر" },
      { k: "b", de: "Erfolgreiche Männer können auch gute Väter sein", ar: "الرجال الناجحون يمكن أن يكونوا آباء جيدين أيضًا" },
      { k: "c", de: "Keiner lacht so fröhlich wie der Weihnachtsmann", ar: "لا أحد يضحك بفرح مثل بابا نويل" },
      { k: "d", de: "Wie Männer und Frauen lachen", ar: "كيف يضحك الرجال والنساء" },
      { k: "e", de: "Weniger Arbeit – weniger Stress", ar: "عمل أقل - توتر أقل" },
      { k: "f", de: "Schlechte Nachrichten? Sagen Sie es mit einem Lächeln", ar: "أخبار سيئة؟ قلها بابتسامة" },
      { k: "g", de: "Der Beruf ist für Männer wichtiger als die Familie", ar: "المهنة أهم للرجال من العائلة" },
      { k: "h", de: "Auch ältere Menschen leiden unter Stress", ar: "حتى الأشخاص الأكبر سناً يعانون من التوتر" },
      { k: "i", de: "Frauen reagieren besser auf schlechte Nachrichten als Männer", ar: "النساء يتفاعلن بشكل أفضل مع الأخبار السيئة مقارنة بالرجال" },
      { k: "j", de: "Mit 70 Jahren macht das Leben am meisten Spaß", ar: "في سن السبعين تكون الحياة أكثر متعة" }
    ],
    items: [
      {
        n: 1, c: "d",
        de: TEXTS_EVA_IRIS[0],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على الاختلافات فكيفاش كيضحكو الرجال والعيالات. الأهم هو أن الضحك اللي كيخرج من وسط الفم هو اللي كيبان فرحان وإيجابي، عكس ضحكة بابا نويل اللي كتخرج من اللور ديال الحنجرة وما كتبانش مفرحة بزاف."
      },
      {
        n: 2, c: "a",
        de: TEXTS_EVA_IRIS[1],
        summaryAr: "الخلاصة هي أن هاد النص كيشرح بلي كثرة الخدمة ماشي ديما كتعني الستريس. دراسة بينات بلي بيئة العمل الزوينة، العلاقة المزيانة مع المدير، والاستقلالية فتنظيم الخدمة كيحميو من الضغط النفسي، واخا تكون الخدمة صعيبة."
      },
      {
        n: 3, c: "b",
        de: TEXTS_EVA_IRIS[2],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على كتاب جديد كيشرح كيفاش الآباء يقدرو يستعملو المهارات ديالهم فمجال العمل باش يربيو ولادهم وينجحو كآباء، بحال مهارات التفاوض والتخطيط المشترك."
      },
      {
        n: 4, c: "j",
        de: TEXTS_EVA_IRIS[3],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على دراسة لقات بلي الناس كيكونو أسعد فاش كيوصلو لـ 70 عام، حيت واخا كاين مشاكل صحية، عندهم وقت فراغ ومكاينش ستريس، عكس فترة الثلاثينات والخمسينات اللي كتكون عامرة بالمسؤوليات والضغوطات."
      },
      {
        n: 5, c: "f",
        de: TEXTS_EVA_IRIS[4],
        summaryAr: "الخلاصة هي أن هاد النص كيشرح كيفاش بعض المديرات كينجحو يوصلو أخبار خايبة للناس باستعمال روح الدعابة والضحك المفتعل، وهادشي كيخلي المستمعين يتقبلو ديك الأخبار فجو أحسن."
      }
    ]
  };

  const PAUL_BASE = {
    level: "B1",
    sub: "Teile 1",
    type: "headings",
    points: 25,
    options: [
      { k: "a", de: "Neue Untersuchung über Familien in der Schweiz", ar: "دراسة جديدة حول العائلات في سويسرا" },
      { k: "b", de: "Ein Jahr preiswert reisen", ar: "عام من السفر بتكلفة منخفضة" },
      { k: "c", de: "Buchtipp: Ausflüge für Familien", ar: "نصيحة كتاب: رحلات للعائلات" },
      { k: "d", de: "Bahnfahren im nächsten Jahr um 25% teurer!", ar: "السفر بالقطار أغلى بنسبة 25% في العام المقبل!" },
      { k: "e", de: "Ein Unternehmen mit vielen beruflichen Möglichkeiten", ar: "شركة توفر العديد من الفرص المهنية" },
      { k: "f", de: "Neue Kindersendung im Fernsehen", ar: "برنامج أطفال جديد على التلفاز" },
      { k: "g", de: "Der Film soll echt sein: Schweizer Filmteam in Indien", ar: "الفيلم يجب أن يكون حقيقياً: فريق سينمائي سويسري في الهند" },
      { k: "h", de: "Wie man im Zug Leute kennen lernt", ar: "كيف تتعرف على الناس في القطار" },
      { k: "i", de: "Jeden Tag ein Stück Wirklichkeit im Fernsehen", ar: "كل يوم قطعة من الواقع على التلفاز" },
      { k: "j", de: "Filmaufnahmen im Berner Oberland", ar: "تصوير الأفلام في منطقة بيرنر أوبيرلاند" }
    ],
    items: [
      {
        n: 1, c: "j",
        de: TEXTS_PAUL_TAMARA[0],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على المخرجين الهنود اللي كيصورو أفلامهم فجبال سويسرا، وواحد الجريدة مشات سولاتهم فموقع التصوير على سبب هاد التعب والمصاريف الغالية وعطاوهم أجوبة مشوقة."
      },
      {
        n: 2, c: "c",
        de: TEXTS_PAUL_TAMARA[1],
        summaryAr: "الخلاصة هي أن هاد النص كيعلن على واحد الكتاب كيعتبر دليل سياحي سميتو \"KIDTOURS\" مخصص للعائلات، فيه 1000 فكرة ونصيحة للرحلات مع الدراري الصغار لجميع الأعمار وبأثمنة مناسبة."
      },
      {
        n: 3, c: "b",
        de: TEXTS_PAUL_TAMARA[2],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على بطاقة اشتراك سنوية كتعطيك تخفيضات باش تسافر بثمن رخيص فالتران والكار والباخرة، وكتعطيك حتى تخفيضات إضافية على الرحلات لألمانيا والنمسا يلا شريتي التذكرة من سويسرا."
      },
      {
        n: 4, c: "i",
        de: TEXTS_PAUL_TAMARA[3],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على برامج تلفزيونية سميتها \"Doku-Soap\" اللي كتجمع بين الوثائقي والمسلسلات، وكتبع الحياة الحقيقية ديال الناس، بحال برنامج \"تبادل العائلات\" اللي ناجح بزاف وكيجلب بزاف ديال المشاهدين."
      },
      {
        n: 5, c: "e",
        de: TEXTS_PAUL_TAMARA[4],
        summaryAr: "الخلاصة هي أن هاد النص موجه للشباب باش يعاونهم يختارو مهنة المستقبل. شركة السكك الحديدية الألمانية كتقترح 15 تخصص مختلف ديال التكوين المهني على حساب الاهتمامات ديال كل واحد، بحال اللغات، التقنية، أو العمل مع الناس."
      }
    ]
  };

  const MIROSLAV_BASE = {
    level: "B1",
    sub: "Teile 1",
    type: "headings",
    points: 25,
    options: [
      { k: "a", de: "Baumaterial für saubere Luft", ar: "مواد بناء للهواء النظيف" },
      { k: "b", de: "Bäume als Lebensraum", ar: "الأشجار كموئل للحياة" },
      { k: "c", de: "Betonfreies Bauen wieder im Trend", ar: "البناء بدون خرسانة يعود إلى الواجهة" },
      { k: "d", de: "Entspannungstechniken im Alltag", ar: "تقنيات الاسترخاء في الحياة اليومية" },
      { k: "e", de: "Erst die Arbeit, dann das Vergnügen", ar: "الأعمال أولاً، ثم المتعة" },
      { k: "f", de: "Firmen organisieren Partys in der Freizeit", ar: "الشركات تنظم حفلات في أوقات الفراغ" },
      { k: "g", de: "Fortbildung zur Yogatrainerin", ar: "تدريب لتصبح مدربة يوغا" },
      { k: "h", de: "Holz als natürlicher Baustoff", ar: "الخشب كمادة بناء طبيعية" },
      { k: "i", de: "Neue umweltfreundliche Wohnformen", ar: "أنماط سكنية جديدة صديقة للبيئة" },
      { k: "j", de: "Seminar „Umweltbewusstes“ Bauen", ar: "ندوة حول البناء الواعي بيئياً" }
    ],
    items: [
      {
        n: 1, c: "i",
        de: TEXTS_MIROSLAV_MARA[0],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على توجه جديد فالسكن اللي هو القرى الإيكولوجية، اللي كتوفر بديل لزحام المدينة وكتركز على البناء البيئي والطاقة المتجددة والعيش المشترك."
      },
      {
        n: 2, c: "d",
        de: TEXTS_MIROSLAV_MARA[1],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على دورات ديال اليوغا والتأمل للناس اللي مضغوطين فالخدمة، باش يقدرو يرجعو التوازن الداخلي ديالهم ويتعلمو تقنيات الاسترخاء فمدة قصيرة."
      },
      {
        n: 3, c: "a",
        de: TEXTS_MIROSLAV_MARA[2],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على واحد النوع جديد ديال السيمان سميتو TioCem كيخلي البيطون ينقي الهواء فالتجمعات الكبيرة، حيت كيتفاعل مع الضوء وكيحيد بزاف ديال المواد السامة."
      },
      {
        n: 4, c: "b",
        de: TEXTS_MIROSLAV_MARA[3],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على الناس اللي كيحققو حلمهم وكيبنيو ديور فوق الشجر. هاد الديور كيستعملوهم كغرف للضيافة، بلايص للنعاس فالصيف، أو حتى مكاتب للخدمة."
      },
      {
        n: 5, c: "e",
        de: TEXTS_MIROSLAV_MARA[4],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على الحفلات اللي كتدار مورا الخدمة فالمدن الكبيرة، اللي كتكون فيها الموسيقى والماكلة، وكتعطي فرصة للناس (خصوصا العزاب) باش يتلاقاو ويتصاحبو."
      }
    ]
  };

  const ANNIKA2_BASE = {
    level: "B1",
    sub: "Teile 1",
    type: "headings",
    points: 25,
    options: [
      { k: "a", de: "Finanzielle Unterstützung für Kunstprojekte mit Schülern", ar: "الدعم المالي لمشاريع الفنون مع الطلاب" },
      { k: "b", de: "Winterveranstaltung auf dem Eis mit Musik", ar: "فعالية شتوية على الجليد مع الموسيقى" },
      { k: "c", de: "Aktionsprogramm der EU: Finanzielle Unterstützung für italienische Künstler", ar: "برنامج عمل الاتحاد الأوروبي: دعم مالي للفنانين الإيطاليين" },
      { k: "d", de: "Kunstausstellung von italienischen Schülern", ar: "معرض فني للطلاب الإيطاليين" },
      { k: "e", de: "Deutschlernen mit neuer Methode im Radio", ar: "تعلم الألمانية بطريقة جديدة عبر الإذاعة" },
      { k: "f", de: "Geld für gemeinsame europäische Projekte", ar: "تمويل للمشاريع الأوروبية المشتركة" },
      { k: "g", de: "Elternverein organisiert Kunstausstellung", ar: "جمعية أولياء الأمور تنظم معرضاً فنياً" },
      { k: "h", de: "Mit der Eisenbahn ins winterliche Wien", ar: "بالقطار إلى فيينا الشتوية" },
      { k: "i", de: "Mehr Geld für österreichische Musikschulen", ar: "المزيد من التمويل لمدارس الموسيقى النمساوية" },
      { k: "j", de: "Wie Sprachaufenthalte auswählen?", ar: "كيف تختار برامج الإقامة اللغوية؟" }
    ],
    items: [
      {
        n: 1, c: "j",
        de: TEXTS_ANNIKA2_SONJA_CORINA[0],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على الرحلات اللغوية اللي كيديروها الألمان باش يتعلمو لغات جديدة. حيت كاين بزاف ديال العروض والجودة مامعروفاش، كاين برنامج إذاعي كيستضف خبراء باش يجاوبو على أسئلة الناس ويعطيوهم نصائح على أحسن الطرق والبرامج."
      },
      {
        n: 2, c: "b",
        de: TEXTS_ANNIKA2_SONJA_CORINA[1],
        summaryAr: "الخلاصة هي أن هاد النص كيعلن على افتتاح حلبة تزلج على الجليد قدام بلدية فيينا. الناس يقدرو يتزلجو على الموسيقى اللي كتتنوع من الفالس للديسكو، وبالليل كيتنظمو حفلات مختلفة. وكاين حتى بلايص للماكلة وممكن تكري السكايات."
      },
      {
        n: 3, c: "f",
        de: TEXTS_ANNIKA2_SONJA_CORINA[2],
        summaryAr: "الخلاصة هي أن هاد النص كيعلن على آخر أجل لتقديم الطلبات للاستفادة من برنامج الاتحاد الأوروبي \"ليوناردو دا فينشي\" اللي كيدعم التكوين المهني. المؤسسات اللي باغة تخدم فمشاريع مشتركة مع جوج شركاء أوروبيين على الأقل تقدر تطلب الدعم المالي."
      },
      {
        n: 4, c: "a",
        de: TEXTS_ANNIKA2_SONJA_CORINA[3],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على قرار وزارة التعليم النمساوية باش تخصص 70 ألف أورو كل شهر لدعم المشاريع الثقافية والفنية فالمدارس. الهدف هو تشجيع الأطفال والشباب على الفن والإبداع وتطوير شخصيتهم بطريقة متكاملة."
      },
      {
        n: 5, c: "g",
        de: TEXTS_ANNIKA2_SONJA_CORINA[4],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على واحد الجمعية ديال الآباء (كوميتاتو) كانت فالبداية كتعاون الدراري الطاليانيين فمشاكل المدرسة. ملي مابقاوش هاد المشاكل، الجمعية بدلات النشاط ديالها وولات كتنظم معرض فني متعدد الثقافات كل عام بمشاركة فنانين من بزاف ديال الدول."
      }
    ]
  };

  const NADJA_BASE = {
    level: "B1",
    sub: "Teile 1",
    type: "headings",
    points: 25,
    options: [
      { k: "a", de: "Bilder mit dem Computer bearbeiten", ar: "تحرير الصور باستخدام الكمبيوتر" },
      { k: "b", de: "Kirche bietet Backkurs für Kinder an", ar: "الكنيسة تقدم دورة خبز للأطفال" },
      { k: "c", de: "Kirche eröffnet neuen Treffpunkt", ar: "الكنيسة تفتتح ملتقى جديدًا" },
      { k: "d", de: "Neu: Kochbuch über Wiener Fleischgerichte", ar: "جديد: كتاب طبخ عن أطباق اللحوم الفيينية" },
      { k: "e", de: "Neue Computerprogramme werden getestet", ar: "اختبار برامج كمبيوتر جديدة" },
      { k: "f", de: "Preis für bestes Lernprogramm", ar: "جائزة لأفضل برنامج تعليمي" },
      { k: "g", de: "Rezepte für Kuchen und Torten", ar: "وصفات للكيك والتورتة" },
      { k: "h", de: "Studie zeigt: Kaffeetrinker sind glücklicher", ar: "دراسة تظهر: شاربو القهوة أكثر سعادة" },
      { k: "i", de: "Warum die Wiener ins Café gehen", ar: "لماذا يذهب النمساويون إلى المقاهي" },
      { k: "j", de: "Zürcher Fotografen stellen aus", ar: "مصورون من زيورخ يعرضون أعمالهم" }
    ],
    items: [
      {
        n: 1, c: "a",
        de: TEXTS_NADJA_ANDREAS2[0],
        summaryAr: "الخلاصة هي أن هاد النص كيعلن على دورة تكوينية فمدرسة الفنون والإعلام بزيورخ لتعلم كيفية تعديل الصور رقمياً باستعمال برامج مختلفة. الدورة غتكون على مدى 10 سبتات والثمن ديالها 800 فرنك."
      },
      {
        n: 2, c: "c",
        de: TEXTS_NADJA_ANDREAS2[1],
        summaryAr: "الخلاصة هي أن هاد النص كيعلن على افتتاح مقهى جديد تابع للكنيسة، غيكون مفتوح كل ثلاثاء العشية باش الناس يتلاقاو، يشربو قهوة، ويهضرو. الهدف هو خلق فضاء للتواصل بين جميع الأعمار وتنشيط الحي."
      },
      {
        n: 3, c: "g",
        de: TEXTS_NADJA_ANDREAS2[2],
        summaryAr: "الخلاصة هي أن هاد النص كيعلن على كتاب جديد ديال واحد الحلواني مشهور ففيينا، جمع فيه بزاف ديال الوصفات ديال الحلويات العصرية والتقليدية بحال طارط التفاح وغيرها، الكتاب فيه 300 صفحة وصور."
      },
      {
        n: 4, c: "f",
        de: TEXTS_NADJA_ANDREAS2[3],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على معرض تعليمي فشتوتغارت غيتم فيه عرض برامج ومواد تعليمية جديدة. وغيتم تقديم جائزة مهمة لأحسن برنامج تعليمي فالمنطقة الناطقة بالألمانية، اعترافاً بالجودة والمحتوى المتميز."
      },
      {
        n: 5, c: "i",
        de: TEXTS_NADJA_ANDREAS2[4],
        summaryAr: "الخلاصة هي أن هاد النص كيهضر على دراسة دارت على العادات ديال سكان فيينا فالمقاهي. بينات الدراسة أن السبب الرئيسي (77%) علاش كيمشيو للقهوة هو باش يهدرو ويتجمعو مع الصحاب، وكيبقاو تقريبا ساعة فالمقهى المفضل ديالهم."
      }
    ]
  };

  const PETRA_BASE_ITEMS = [
    {
      n: 1, c: "b",
      de: TEXTS_PETRA_JENNIFER[0],
      summaryAr: "الخلاصة هي أن هاد النص كيهضر على كتاب صور جديد ديال المصورة 'آن جيديس'، اللي صورات فيه دراري صغار (رضع) وسط الجردة، لابسين بحال الفراشات والورد والخنافس، بطريقة فنية زوينة ومختلفة باش تخلي الناس يشوفو العالم بنظرة خرى."
    },
    {
      n: 2, c: "d",
      de: TEXTS_PETRA_JENNIFER[1],
      summaryAr: "الخلاصة هي أن هاد النص كيهضر على فنادق وأماكن فمنطقة كارينثيا كيوفروا دروس ديال السكي (التزلج) للدراري الصغار بزاف، ابتداءً من عامين، عكس البلايص العادية اللي كيبداو من 4 سنين. كيتعلمو بشوية فمرتفعات ساهلة قبل ما يمشيو للجبال."
    },
    {
      n: 3, c: "c",
      de: TEXTS_PETRA_JENNIFER[2],
      summaryAr: "الخلاصة هي أن هاد النص كيهضر على أصغر كاتب فبرلين، دري سميتو دانييل عندو 12 عام وكتب كتر من 50 قصيدة وقصة. بدا كيكتب منين كانت عندو 7 سنين، وفالوقت اللي صحابو كيلعبو كورة، هو كيفضل يكتب حيت الكتابة كتخليه يعيش الخيال ديالو."
    },
    {
      n: 4, c: "a",
      de: TEXTS_PETRA_JENNIFER[3],
      summaryAr: "الخلاصة هي أن هاد النص كيعلن على 'تذكرة المدينة' اللي كتعطيك الحق تستعمل وسائل النقل العام (طوبيس، تران، ميترو) بثمن رخيص (2.50 أورو) لمدة يومين، بشرط تكون سافرتي لداك المدينة بالطيارة ولا بالتران لمسافة كتر من 100 كيلومتر."
    },
    {
      n: 5, c: "e",
      de: TEXTS_PETRA_JENNIFER[4],
      summaryAr: "الخلاصة هي أن هاد النص كيهضر على مبادرة للشباب (من 16 لـ 25 عام) باش يقدروا يمشيو للديسكو بالليل (فالويكاند والعطل) ويرجعو فالطاكسي بنص الثمن. التذاكر كيتشراو من بعض الوكالات، ومول الطاكسي كيتعوض فالثمن كامل من بعد."
    }
  ];

  window.SAHLA_DATA.b1.lesen.teil1 = [
    // 1. Alex Und Cora
    {
      id: "b1-l1-alex-und-cora",
      order: 1,
      title: "Alex Und Cora",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Eltern trotz Kritik mit der Schule zufrieden", ar: "الآباء راضون عن المدرسة رغم الانتقادات" },
        { k: "b", de: "Elektromobilität für Angestellte", ar: "التنقل الكهربائي للموظفين" },
        { k: "c", de: "STÄRKUNG VON BUS UND BAHN", ar: "تعزيز الحافلات والقطارات" },
        { k: "d", de: "Schule und Umweltschutz", ar: "المدرسة وحماية البيئة" },
        { k: "e", de: "Bald keine Firmenwagen mehr?", ar: "هل ستختفي سيارات الشركات قريباً؟" },
        { k: "f", de: "Ticketpreise bei der Bahn", ar: "أسعار التذاكر في السكك الحديدية" },
        { k: "g", de: "Lehrerberuf wird immer attraktiver", ar: "مهنة التدريس تصبح أكثر جاذبية" },
        { k: "h", de: "Engagement für die Natur", ar: "الالتزام بالطبيعة" },
        { k: "i", de: "Preissenkungen bei Bus, Straßenbahn und U-Bahn!", ar: "تخفيضات في الحافلات والترام والمترو!" },
        { k: "j", de: "ZU WENIG LEHRER - STADT REAGIERT", ar: "نقص في المعلمين - المدينة تتخذ إجراءات" }
      ],
      items: [
        {
          n: 1, c: "b",
          de: "Sie haben Mitarbeiter, die gern mit dem Fahrrad zur Arbeit kommen? Warum dann nicht mehr E-Bikes leasen statt nur teure Firmenwagen? Gerade in Städten kommt man mit einem E-Bike schneller und bequemer ans Ziel als mit dem Auto. Und Parkplatzprobleme gibt es auch nicht. Sie fördern zudem die Gesundheit Ihrer Mitarbeiter und schonen die Umwelt, und dabei können Sie noch Steuern sparen. Bei der BikeLeasing GmbH bekommen Sie Angebote, die zu Ihnen passen. Melden Sie sich bei uns an, und wir kümmern uns um den Rest.",
          summaryAr: "تأجير الدراجات الكهربائية: البديل الذكي لسيارات الشركة تقدم شركة BikeLeasing GmbH حلاً عصرياً للشركات التي ترغب في دعم موظفيها الذين يفضلون التنقل بالدراجات. فبدلاً من الاكتفاء بالسيارات الفارهة، يبرز النص فوائد الاعتماد على الدراجات الكهربائية (E-Bikes)، خاصة في المدن، حيث تضمن: الكفاءة والراحة: وصول أسرع للمجال وتجنب ازدحام المدن ومشكلات البحث عن مواقف للسيارات. فوائد صحية وبيئية: تعزيز صحة الموظفين البدنية مع الحفاظ على البيئة. مزايا مالية: توفير في الضرائب للشركة."
        },
        {
          n: 2, c: "f",
          de: "Die Bahn erhöht dieses Jahr die Ticketpreise nicht. Dies soll die Bahn attraktiver machen, sodass mehr Menschen die Züge nutzen. Ob dies wirklich erfolgreich ist, bestreiten manche Experten. Sie argumentieren, dass das Auto in Deutschland zu beliebt ist. Günstiger werden außerdem die Tickets im öffentlichen Nahverkehr, weil dann nicht mehr so viele Berufstätige mit dem Auto zur Arbeit fahren. Ob diese Maßnahmen wirklich erfolgreich sind, wird sich zeigen. Experten sind sich einig: Ein Schritt in die richtige Richtung!",
          summaryAr: "يسلط النص الضوء على التوجهات الجديدة في قطاع النقل الألماني لزيادة الإقبال على القطارات والحافلات، وتلخص النقاط التالية أبرز ما جاء فيه: تثبيت أسعار التذاكر: قررت هيئة السكك الحديدية عدم رفع الأسعار هذا العام، بهدف جعل السفر بالقطار أكثر جاذبية وتشجيع الناس على استخدامه بدلاً من الوسائل الأخرى. تخفيضات النقل العام المحلي (ÖPNV): سيتم تخفيض أسعار تذاكر النقل الداخلي لتقليل عدد الموظفين الذين يعتمدون على سياراتهم الخاصة للذهاب إلى العمل. آراء الخبراء: هناك انقسام في الآراء؛ فبينما يرى البعض أنها \"خطوة في الاتجاه الصحيح\"، يشكك آخرون في نجاحها نظراً للشعبية الكبيرة التي تتمتع بها السيارات في ألمانيا."
        },
        {
          n: 3, c: "a",
          de: "Vergangenen Monat wurden etwa tausend Eltern von der Stiftung Schulqualität befragt, ob sie mit der Schule ihrer Kinder zufrieden sind. Dabei sagten 80%, dass die Schule gut oder sogar sehr gut sei. Und das, obwohl nur 40% der Eltern denken, dass die Kinder in der Schule auf den Beruf vorbereitet werden. Die Schülerinnen und Schüler sollten mehr über Ökonomie lernen. Außerdem sagten über 60%, dass das Thema Umweltschutz im Unterricht eine größere Rolle spielen sollte.",
          summaryAr: "أجرت مؤسسة \"جودة المدرسة\" استطلاعاً شمل نحو 1000 من الآباء والأمهات، وكشفت النتائج عن تباين مثير للاهتمام بين الرضا العام والتوقعات المستقبلية: رضا عام مرتفع: عبر 80% من المشاركين عن رضاهم عن المدارس، واصفين إياها بأنها \"جيدة\" أو \"جيدة جداً\". ضعف التأهيل المهني: رغم الرضا العالي، يرى 40% فقط من الأهالي أن المدرسة تجهز أطفالهم بشكل كافٍ لدخول سوق العمل. مطالب بتحديث المناهج: هناك رغبة في تعليم الطلاب المزيد عن الاقتصاد (Ökonomie). أيد أكثر من 60% ضرورة منح موضوع حماية البيئة مساحة أكبر في الجدول الدراسي."
        },
        {
          n: 4, c: "j",
          de: "Berlin. In der Hauptstadt herrscht weiterhin Lehrermangel: Tausende Lehrkräfte fehlen. Mittlerweile unterrichten sogar schon Studierende die Schülerinnen und Schüler der Hauptstadt, weil sich nicht genügend ausgebildete Lehrkräfte finden. Die Unterrichtsqualität leidet stark. Daher plant der Berliner Senat eine Werbekampagne, um den Lehrerberuf attraktiver zu gestalten. Dabei sollen auch Menschen in anderen Berufen angesprochen werden, zudem denkt man über eine Erhöhung der Gehälter für Lehrerinnen und Lehrer nach.",
          summaryAr: "تواجه العاصمة الألمانية أزمة تعليمية خانقة، حيث يلخص النص الوضع الحالي في النقاط التالية: عجز كبير في الكوادر: يغيب آلاف المعلمين المؤهلين عن المدارس، مما دفع السلطات للاستعانة بـ طلاب الجامعات للقيام بمهمة التدريس كحل مؤقت. تأثر جودة التعليم: أدى النقص الحاد والاعتماد على غير المتخصصين إلى تراجع ملحوظ في مستوى التعليم المقدم للطلاب. خطة \"السينات\" للإنقاذ: لمواجهة هذا الموقف، يخطط مجلس شيوخ برلين لعدة خطوات: إطلاق حملة إعلانية تهدف لتحسين صورة مهنة التدريس وجعلها أكثر جاذبية. استهداف المغيرين للمسار المهني (Quereinsteiger)، أي الأشخاص القادمين من مهن أخرى. دراسة خيار زيادة الرواتب كحافز مادي للمعلمين."
        },
        {
          n: 5, c: "h",
          de: "NaturVerband ist der größte Umweltverband in Deutschland. Er engagiert sich für Umwelt- und Tierschutz. Sie wollen sich auch aktiv gegen Umweltverschmutzung einsetzen? Sie wollen sich für mehr Naturschutz engagieren? Dann sind Sie bei uns richtig. Wir haben regelmäßige Treffen und führen Informationsveranstaltungen zu verschiedenen aktuellen Themen durch, außerdem gibt es eine monatliche Mitgliederzeitschrift. Melden Sie sich einfach bei uns.",
          summaryAr: "تُقدم هذه الجمعية نفسها كأكبر منظمة بيئية في البلاد، وهي مخصصة للأشخاص الذين لديهم شغف بالعمل الميداني والبيئي. إليك أهم ما يميزها: مجالات العمل: تركز بشكل أساسي على حماية البيئة (Umweltschutz) وحماية الحيوانات (Tierschutz). الأهداف: تدعو الجمعية كل من يرغب في مكافحة تلوث البيئة والمشاركة الفعالة في حماية الطبيعة (Naturschutz) للانضمام إليها. ما تقدمه للأعضاء: لقاءات دورية: تواصل مستمر بين الأعضاء لمناقشة القضايا البيئية. فعاليات إعلامية: تنظيم ندوات حول موضوعات الساعة والبيئة. مجلة شهرية: يحصل الأعضاء على مجلة خاصة لمواكبة أخبار الجمعية والمستجدات البيئية."
        }
      ]
    },

    // 2. Rita (الأصلي)
    {
      ...RITA_BASE,
      id: "b1-l1-rita",
      order: 2,
      title: "Rita",
      modGroup: "rita",
      isModified: false
    },

    // 2m. Rita (المعدل)
    {
      ...RITA_BASE,
      id: "b1-l1-rita-mod",
      order: 2,
      title: "Rita",
      modGroup: "rita",
      isModified: true,
      baseId: "b1-l1-rita",
      modTitle: "Rita المعدل",
      modNote: "ملاحظة: تم تعديل فقط صيغة عنوان",
      options: RITA_BASE.options.map(o =>
        o.k === "c"
          ? { k: "c", de: "Heiraten kann zu mehr Kilos führen – das zeigt eine Studie", ar: "الزواج يمكن أن يؤدي إلى زيادة الوزن - هذا ما تظهره دراسة" }
          : o
      ),
      items: RITA_BASE.items.map(it =>
        it.n === 5
          ? { ...it, summaryAr: "تجاوز المفهوم التقليدي \"أنت ما تأكله\" حدود الصحة ليصبح الشعار الجديد هو \"الجمال من خلال الغذاء\" حيث يشير النص إلى توجه عالمي انطلق من الولايات المتحدة يعتمد على استهلاك أطعمة باهظة الثمن ومعززة بمكونات علمية تهدف للحفاظ على الشباب والجمال ومثال ذلك تقديم أحد الفنادق الفاخرة في نيويورك قائمة طعام خاصة لمحاربة الشيب وعلامات الشيخوخة ويتوقع خبراء التوجهات المستقبلية إقبال الملايين على هذا النوع من الابتكارات لرغبة الناس القوية في تحسين مظهرهم الخارجي بأقل مجهود ممكن." }
          : it
      )
    },

    // 3. Caroline (الأصلي)
    {
      ...CAROLINE_BASE,
      id: "b1-l1-caroline",
      order: 3,
      title: "Caroline",
      modGroup: "caroline",
      isModified: false
    },

    // 3m. Caroline (المعدل)
    {
      ...CAROLINE_BASE,
      id: "b1-l1-caroline-mod",
      order: 3,
      title: "Caroline",
      modGroup: "caroline",
      isModified: true,
      baseId: "b1-l1-caroline",
      modTitle: "Caroline المعدل",
      modNote: "ملاحظة: التعديل موجود فقط في العنوان f",
      options: CAROLINE_BASE.options.map(o =>
        o.k === "f"
          ? { k: "f", de: "Info über den Flughafen und Arbeitsplätze", ar: "معلومات عن المطار وفرص العمل" }
          : o
      )
    },

    // 4. Vera
    {
      id: "b1-l1-vera",
      order: 4,
      title: "Vera",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Abendwanderungen ab 89 Euro", ar: "جولات مسائية بدءًا من 89 يورو" },
        { k: "b", de: "Ausflugsziele für Literaturinteressierte", ar: "وجهات سياحية لمحبي الأدب" },
        { k: "c", de: "Hinweis für Besucher der Bregenzer Festspiele", ar: "تنويه لزوار مهرجان بريجنز" },
        { k: "d", de: "Ihre Zeitung folgt Ihnen in den Urlaub", ar: "صحيفتك ترافقك في الإجازة" },
        { k: "e", de: "Laute Musik stört den Nachbarn", ar: "الموسيقى الصاخبة تزعج الجيران" },
        { k: "f", de: "Musikveranstaltungen am Nachmittag", ar: "فعاليات موسيقية في فترة ما بعد الظهر" },
        { k: "g", de: "Neue Zeitung für Ihre Urlaubsplanung", ar: "صحيفة جديدة لتخطيط عطلتك" },
        { k: "h", de: "Rekord: 70.000 Besucher im Bücherdorf", ar: "رقم قياسي: 70,000 زائر في قرية الكتب" },
        { k: "i", de: "Schlechtes Wetter: Festspiele abgesagt", ar: "طقس سيء: إلغاء المهرجانات" },
        { k: "j", de: "Wandern ohne Gepäck", ar: "المشي دون أمتعة" }
      ],
      items: [
        {
          n: 1, c: "d",
          de: TEXTS_VERA_JAN[0],
          summaryAr: "تقدم صحيفة \"هانوفرشه ألغماينه\" لقرائها المسافرين خدمة مميزة تتيح لهم متابعة أخبار وطنهم والعالم من خلال شحن النسخ الورقية إلى أماكن قضاء عطلاتهم في مختلف أنحاء أوروبا دون أي تكاليف إضافية حيث تظل قيمة الاشتراك ثابتة دون تغيير ويمكن للمهتمين الحصول على كافة التفاصيل والقسائم اللازمة من خلال الإعلانات المخصصة لخدمة السفر أو عبر الاتصال بالرقم المجاني الموضح لضمان بقائهم على اتصال دائم بما يهمهم من أخبار حتى خلال أجمل أوقات السنة."
        },
        {
          n: 2, c: "j",
          de: TEXTS_VERA_JAN[1],
          summaryAr: "تنظم منطقة \"شتادت كيل\" السياحية جولات مشي دائرية تمتد لثلاثة أيام في المحمية الطبيعية الواقعة بين ألمانيا وبلجيكا وتتميز هذه الرحلات بخدمة نقل الأمتعة بين الفنادق بشكل مستقل ليتفرغ السائح للمشي بحرية وتتوفر هذه التجربة طوال العام مقابل مبلغ مالي قدره تسعة وثمانون يورو للفرد الواحد يشمل الإقامة لثلاث ليالٍ مع وجبات الإفطار بالإضافة إلى خرائط المسارات ودليل كامل للطريق مما يوفر الراحة والمتعة لهواة الطبيعة في المناطق الجبلية المتوسطة."
        },
        {
          n: 3, c: "e",
          de: TEXTS_VERA_JAN[2],
          summaryAr: "أصدرت البلدية توجيهات صارمة بخصوص الضوضاء الناتجة عن الموسيقى والأدوات ذات المحركات لضمان راحة السكان خاصة في الأجواء الصيفية حيث تمنع تماماً أي إزعاج موسيقي خلال فترة القيلولة الممتدة من الواحدة حتى الثالثة ظهراً وكذلك خلال ساعات الليل من العاشرة مساءً حتى السابعة صباحاً كما قيدت استخدام أدوات الحدائق الآلية بساعات عمل محددة أيام الأسبوع والسبت مع حظرها بشكل كامل في أيام الأحد والعطلات الرسمية احتراماً لحق الجميع في السكينة."
        },
        {
          n: 4, c: "b",
          de: TEXTS_VERA_JAN[3],
          summaryAr: "أصبحت منطقة \"مولبيك فريدرسدورف\" في ولاية ساكسونيا أنهالت مقراً لأول قرية كتب ألمانية حيث تضم ثمانية متاجر متخصصة في الكتب القديمة تعرض ما يزيد عن سبعين ألف مؤلف في شتى مجالات الأدب وتقع هذه القرية في محيط طبيعي جذاب بالقرب من الطريق السريع ومطار لايبزيغ مما يسهل الوصول إليها من كافة المناطق وتفتح المتاجر أبوابها للجمهور حتى في عطلات نهاية الأسبوع لتنضم ألمانيا بذلك إلى قائمة الدول الأوروبية التي تتبنى هذا المفهوم الثقافي الفريد."
        },
        {
          n: 5, c: "c",
          de: TEXTS_VERA_JAN[4],
          summaryAr: "تبذل إدارة مهرجان بريغنتس قصارى جهدها لتقديم العروض على المسرح العائم حتى في حال تقلب الطقس أو هطول أمطار خفيفة مما قد يترتب عليه بعض التأخير أو التوقف المؤقت وفي حال استحالة العرض في الهواء الطلق يتم تقديم نسخة بديلة داخل دار المهرجان وتناشد الإدارة الزوار بضرورة ارتداء ملابس واقية من المطر مع الامتناع عن استخدام المظلات لعدم حجب الرؤية عن الآخرين علماً أن العرض يستمر لمدة ساعتين وخمس وأربعين دقيقة دون أي فواصل استراحة."
        }
      ]
    },

    // 5. Eva
    {
      ...EVA_BASE,
      id: "b1-l1-eva",
      order: 5,
      title: "Eva"
    },

    // 6. Paul
    {
      ...PAUL_BASE,
      id: "b1-l1-paul",
      order: 6,
      title: "Paul"
    },

    // 7. Iris
    {
      ...EVA_BASE,
      id: "b1-l1-iris",
      order: 7,
      title: "Iris",
      options: EVA_BASE.options.map(o => {
        if (o.k === "a") return { ...o, ar: "الرضا في العمل يحمي من التوتر" };
        if (o.k === "j") return { ...o, ar: "في سن السبعين، تكون الحياة أكثر متعة" };
        return o;
      })
    },

    // 8. Jan
    {
      id: "b1-l1-jan",
      order: 8,
      title: "Jan",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Hinweis für Besucher der Bregenzer Festspiele", ar: "إشعار لزوار مهرجانات بريغنز" },
        { k: "b", de: "Abendwanderungen ab 89 Euro", ar: "رحلات مسائية ابتداءً من 89 يورو" },
        { k: "c", de: "Musikveranstaltungen am Nachmittag", ar: "فعاليات موسيقية بعد الظهر" },
        { k: "d", de: "Ihre Zeitung folgt Ihnen in den Urlaub", ar: "صحيفتك ترافقك في الإجازة" },
        { k: "e", de: "Schlechtes Wetter: Festspiele abgesagt", ar: "طقس سيء: إلغاء المهرجانات" },
        { k: "f", de: "Rekord: 70.000 Besucher im Bücherdorf", ar: "رقم قياسي: 70,000 زائر في قرية الكتب" },
        { k: "g", de: "Wandern ohne Gepäck", ar: "التنزه بدون أمتعة" },
        { k: "h", de: "Neues für Literaturinteressierte", ar: "جديد لمحبي الأدب" },
        { k: "i", de: "Neue Zeitung für Ihre Urlaubsplanung", ar: "صحيفة جديدة لتخطيط عطلتك" },
        { k: "j", de: "Laute Musik stört den Nachbarn", ar: "الموسيقى الصاخبة تزعج الجيران" }
      ],
      items: [
        {
          n: 1, c: "d",
          de: "**Abonnenten-Service** Wenn Sie verreisen, wünschen wir Ihnen erholsame und angenehme Ferien. Bitte denken Sie daran, sich Ihre Zeitung an den Urlaubsort nachsenden zu lassen. Denn mit den Neuigkeiten von zu Hause und aus aller Welt lässt sich die schönste Zeit des Jahres erst richtig genießen. Ausführliche Informationen und entsprechende Coupons finden Sie in unserem großen Reise-Service-Anzeigenteil oder rufen Sie uns einfach an: Telefon 01 30-18 58 50 zum Nulltarif. Hannoversche Allgemeine Neue Presse",
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على خدمة تحويل الجريدة لمكان العطلة ديالك بالمجان في جميع أنحاء أوروبا، باش تبقى ديما متبع الأخبار بلا ما تخلص مصاريف إضافية."
        },
        {
          n: 2, c: "g",
          de: TEXTS_VERA_JAN[1],
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على تنظيم رحلات مشي لمدة تلات أيام فمنطقة جبلية بلا ما تهز الباجاج ديالك، حيت الشركات كيتكلفو بنقلو للفندق التالي. البرنامج كيشمل المبيت والفطور ونقل الأمتعة بـ 89 أورو للشخص."
        },
        {
          n: 3, c: "j",
          de: TEXTS_VERA_JAN[2],
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على قوانين البلدية لاحترام أوقات الراحة وتجنب الإزعاج بالصوت العالي بحال الموسيقى أو آلات الحدائق. النص كيحدد الأوقات المسموح والممنوع فيها إحداث الضجيج باش ما يزعجوش الجيران."
        },
        {
          n: 4, c: "h",
          de: TEXTS_VERA_JAN[3],
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على افتتاح أول \"قرية للكتب\" في ألمانيا، كتوفر على أكتر من 70 ألف كتاب قديم في 8 مكتبات مختلفة، وهي وجهة مثالية لعشاق القراءة والأدب وكتفتح حتى في عطلة نهاية الأسبوع."
        },
        {
          n: 5, c: "a",
          de: TEXTS_VERA_JAN[4],
          summaryAr: "الخلاصة هي أن هاد النص كيوجه إرشادات لزوار مهرجان بريغينز بخصوص حالة الطقس المتقلبة. كينصحو الناس يلبسو حوايج ضد الشتا وما يستعملوش المظلات (البارابلوي) حيت كتحجب الرؤية على الآخرين، وكيوضحو الإجراءات البديلة يلا طاحت الشتا بزاف."
        }
      ]
    },

    // 9. Miroslav
    {
      ...MIROSLAV_BASE,
      id: "b1-l1-miroslav",
      order: 9,
      title: "Miroslav"
    },

    // 10. Andreas 1
    {
      id: "b1-l1-andreas-1",
      order: 10,
      title: "Andreas 1",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Märchen-Festspiele in Bremen", ar: "مهرجان الحكايات الخيالية في بريمن" },
        { k: "b", de: "Griechische Botschaft bietet Sprachkurse für Schüler", ar: "السفارة اليونانية تقدم دورات لغة للطلاب" },
        { k: "c", de: "Universitätsstadt wird 300 Jahre", ar: "المدينة الجامعية تحتفل بمرور 300 عام" },
        { k: "d", de: "Wissenschaft: Von der Körpergröße hängt das Gehalt ab", ar: "العلم: يعتمد الراتب على طول القامة" },
        { k: "e", de: "Durch Handel reich geworden", ar: "أصبح ثريًا من خلال التجارة" },
        { k: "f", de: "Interessante Universitätsstadt mit hoher Lebensqualität", ar: "مدينة جامعية مثيرة للاهتمام ذات جودة حياة عالية" },
        { k: "g", de: "Latein in deutschen Schulen wieder beliebter", ar: "اللغة اللاتينية أصبحت أكثر شعبية في المدارس الألمانية" },
        { k: "h", de: "Wer wenig lacht, verdient auch weniger", ar: "من يضحك قليلاً، يكسب أقل أيضًا" },
        { k: "i", de: "Fremdsprachen: Schüler lernen nur Englisch und Französisch", ar: "اللغات الأجنبية: الطلاب يتعلمون الإنجليزية والفرنسية فقط" },
        { k: "j", de: "Griechisch wird in deutschen Schulen kaum unterrichtet", ar: "اليونانية نادراً ما تُدرّس في المدارس الألمانية" }
      ],
      items: [
        {
          n: 1, c: "j",
          de: "In Deutschland lernen nur ganz wenige Schüler Griechisch. Es sind insgesamt nur 0,14% aller Schüler. Vor 30 Jahren waren es noch 0,48%. So berichtet die griechische Botschaft in Berlin in ihrem Europabericht. Griechisch wird meistens von Zwölftklässlern als dritte Fremdsprache neben Französisch und Englisch gewählt. Die wenigen Schüler, die Griechisch wählen, haben Verwandte in Griechenland.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على قلة التلاميذ اللي كيقراو اللغة اليونانية فالمدارس الألمانية، بحيث النسبة ديالهم قليلة بزاف، واللي كيقراوها غالبا كيكونو عندهم عائلات فاليونان وكياخدوها كلغة أجنبية تالتة."
        },
        {
          n: 2, c: "e",
          de: "Dem Meer verdankt die Hansestadt Bremen ihre Bedeutung. Bremer Kaufleute und Seefahrer nutzten die günstige geografische Lage, um in aller Welt heimisch zu werden. Seit Generationen haben sie Handel getrieben, sodass Geld in die Stadt floss. Dies sieht man der Stadt heute noch an: das Alte Rathaus, das Kaufmannshaus, die historische Innenstadt. Außerdem war Bremen auch immer eine Heimat für das Märchen der Bremer Stadtmusikanten.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على مدينة بريمن الألمانية وكيفاش الموقع ديالها الجغرافي حدا البحر خلاها تولي مدينة تجارية مهمة وغنية على مر الأجيال، وهادشي كيبان فالمعالم التاريخية ديالها."
        },
        {
          n: 3, c: "f",
          de: "Freiburg, die Hauptstadt des Schwarzwaldes, liegt in einer der sonnigsten Gegenden Deutschlands. Wo es so viel Sonne gibt, da ist auch viel Lebensfreude, und nicht zuletzt gehören auch badische Küche und badischer Wein zum Besten, was in Deutschland geboten wird. Zum einmaligen Flair der gemütlichen Universitätsstadt trägt auch ihre Lage bei: Frankreich und die Schweiz sind nicht weit entfernt. Die Stadt selbst lockt mit vielen alten Straßen, zahlreichen Museen und Baudenkmälern. Über alles hinaus ragt die große Kirche, die nach 300-jähriger Bauzeit 1513 vollendet wurde.",
          summaryAr: "الخلاصة هي أن هاد النص كيوصف مدينة فرايبورغ كمدينة جامعية زوينة ومشمسة، كتميز بالماكلة الزوينة والنبيذ، والموقع ديالها القريب من فرنسا وسويسرا، بالإضافة للمعالم والمتاحف التاريخية."
        },
        {
          n: 4, c: "d",
          de: "In einer wissenschaftlichen Untersuchung hat man erforscht, warum bestimmte Menschen mehr Geld verdienen als andere. Britische Wissenschaftler behaupten, größeren Menschen zahlt der Chef mehr. Im Laufe des vergangenen Jahres haben zwei weitere Untersuchungen festgestellt: Wer wenig lacht oder häufig mit Kollegen trinken geht, verdient mehr. Nur: Nicht lachen und mit Kollegen trinken gehen, das kann man lernen. Aber wachsen?",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على دراسة علمية كتقول بلي كاين علاقة بين الطول والراتب، يعني الناس الطوال كيتخلصو كتر. وزادو دراسات خرى كتقول بلي اللي كيضحك قليل وكيخرج مع صحابو فالخدمة حتى هو كيتخلص مزيان."
        },
        {
          n: 5, c: "g",
          de: "Das Statistische Bundesamt berichtet, dass in deutschen Schulen allgemein wieder mehr Latein gelernt wird. Allein in Thüringen hat sich die Anzahl in den letzten beiden Jahren verdoppelt. Während der Tiefpunkt bei Latein im vorletzten Jahr erreicht war, wählen zurzeit wieder mehr Schüler Latein als erste Fremdsprache. Als vorteilhaft hat sich offenbar vor allem das Wittenbergische Modell erwiesen, das Latein in der fünften Klasse mit einer modernen Fremdsprache (Französisch, Englisch usw.) kombiniert. Allerdings sind hier meist nur drei Stunden für beide Sprachen pro Woche vorgesehen. Das sei bei Weitem zu wenig, kritisieren Lateinlehrer.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على رجوع الإقبال على تعلم اللغة اللاتينية فالمدارس الألمانية. رغم هادشي، الأساتذة كينتاقدو بلي السوايع المخصصة ليها قليلة بزاف وما كافياش."
        }
      ]
    },

    // 11. Annika 2
    {
      ...ANNIKA2_BASE,
      id: "b1-l1-annika-2",
      order: 11,
      title: "Annika 2"
    },

    // 12. Sonja
    {
      ...ANNIKA2_BASE,
      id: "b1-l1-sonja",
      order: 12,
      title: "Sonja",
      options: ANNIKA2_BASE.options.map(o => {
        if (o.k === "a") return { ...o, ar: "دعم مالي للمشاريع الفنية مع الطلاب" };
        if (o.k === "g") return { ...o, ar: "جمعية الآباء تنظم معرضًا فنيًا" };
        if (o.k === "j") return { ...o, ar: "كيف تختار الإقامات اللغوية؟" };
        return o;
      })
    },

    // 13. Nadja / Claudia
    {
      ...NADJA_BASE,
      id: "b1-l1-nadja-claudia",
      order: 13,
      title: "Nadja / Claudia"
    },

    // 14. Karla
    {
      id: "b1-l1-karla",
      order: 14,
      title: "Karla",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Autofahrer schlafen schlechter", ar: "سائقو السيارات ينامون بشكل أسوأ" },
        { k: "b", de: "Dieses Getränk bei Hitze vermeiden", ar: "تجنب هذا المشروب في الطقس الحار" },
        { k: "c", de: "Genuss, der uns gut tut", ar: "متعة تفيدنا" },
        { k: "d", de: "Kaffee hat keinen Einfluss auf Gesundheit", ar: "القهوة ليس لها تأثير على الصحة" },
        { k: "e", de: "Kaffeekonsum steigt auf sechs Tassen täglich", ar: "استهلاك القهوة يرتفع إلى ستة أكواب يومياً" },
        { k: "f", de: "Leichter Schlaf bei heller Nacht", ar: "نوم خفيف في ليلة مضيئة" },
        { k: "g", de: "Mehr trinken bei starker Hitze", ar: "شرب المزيد عند الحر الشديد" },
        { k: "h", de: "Stress auf dem Arbeitsweg führt zu Schlafmangel", ar: "التوتر أثناء التنقل للعمل يؤدي إلى قلة النوم" },
        { k: "i", de: "Wenn Genussmittel gefährlich werden", ar: "عندما تصبح المواد الترفيهية خطيرة" },
        { k: "j", de: "Wissenschaftler empfehlen Mittagsschlaf", ar: "العلماء ينصحون بقيلولة الظهيرة" }
      ],
      items: [
        {
          n: 1, c: "i",
          de: "Schätzungen zufolge werden weltweit täglich etwa drei Milliarden Tassen Kaffee getrunken. Viele benötigen das Koffein, um wach in den Tag zu starten. Aber ab einer bestimmten Menge kann Koffein zu einem erhöhten Blutdruck führen. Laut Wissenschaftlern gilt dieser als einer der wichtigsten Risikofaktoren für Herz-Kreislauf-Erkrankungen. Sie stellten fest: Bei mehr als sechs Tassen Kaffee pro Tag nimmt das Risiko für Herzerkrankungen um bis zu 22 Prozent zu.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على استهلاك القهوة. الكافيين كيفيقنا ولكن يلا شربنا كثر من 6 كيسان فالنهار، كيتزاد الخطر ديال أمراض القلب والشرايين بـ 22%."
        },
        {
          n: 2, c: "b",
          de: "Um den Kreislauf in Schwung zu bringen, trinken viele Menschen Kaffee. Vor allem, wenn sie mehrere Stunden arbeiten und sich konzentrieren müssen. Diese Energie vom Koffein hält aber nicht sehr lange, denn der Kreislauf sinkt wieder und die Müdigkeit kehrt zurück. Vor allem bei hohen Temperaturen sollte man nicht zu viel Kaffee trinken, weil einen das noch mehr ins Schwitzen bringt.",
          summaryAr: "الخلاصة هي أن هاد النص كيشرح بلي القهوة كتعطي طاقة مؤقتة وكترجع العيا من بعد. وكينصح باش مانشربوش القهوة بزاف فاش كيكون الصهد حيت كتخلينا نعرقو كتر."
        },
        {
          n: 3, c: "h",
          de: "Wer eine neue Arbeitsstelle sucht, sollte sich über Folgendes im Klaren sein: Berufliches Pendeln wird oftmals als anstrengend angesehen. Eine gesundheitliche Belastung für viele Pendler ist zu wenig Schlaf. Wer nicht genug schläft, wird oft müde und unkonzentriert. Gründe für Schlafstörungen können auch die vielen Alltagsprobleme von Pendlern sein: Verspätungen, Staus, Baustellen oder einfach nur viel Verkehr.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على المعاناة ديال الناس اللي كيسافرو يوميا للخدمة (النافيت). هادشي كيسبب ليهم قلة النعاس والعيا بسبب الزحام، التأخيرات، ومشاكل الطريق."
        },
        {
          n: 4, c: "f",
          de: "Ist der Vollmond daran schuld, dass wir nachts schlecht schlafen? Bisher konnte noch keine Studie zu 100 Prozent beweisen, dass der Vollmond wirklich zu Schlafstörungen führt. Allerdings vermutet man, dass die Qualität des Schlafes bei manchen durch die Helligkeit des Vollmondes leidet. Allein die Erwartung, bei einer Vollmondnacht schlechter zu schlafen, kann diesen Effekt auslösen. Deshalb raten Schlafforscher sensiblen Menschen dazu, die Schlafzimmer abzudunkeln.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على واش القمر البدر (القمر مكمول) كيخسر النعاس. مكاينش دليل قاطع، ولكن الضو ديالو أو غير التفكير فهادشي يقدر يطير النعاس. النصيحة هي تظلم البيت مزيان."
        },
        {
          n: 5, c: "c",
          de: "Kann Kaffeetrinken doch gesund sein? Wenn man englischen Studien glaubt, dann gibt es mehr gesundheitliche Vorteile als Nachteile – eine gute Nachricht für regelmäßige Kaffeegenießer. Den größten positiven Effekt sollen diejenigen erreichen, die drei bis vier Tassen Kaffee am Tag trinken. Laut Forschern soll das Kaffeetrinken das Risiko für bestimmte Krankheiten senken, wie zum Beispiel Krebserkrankungen. Auf den Kreislauf soll dieses beliebte Getränk keine negativen Auswirkungen haben.",
          summaryAr: "الخلاصة هي أن هاد النص كيقول بلي القهوة تقدر تكون صحية. دراسات نڭليزية بينات بلي شرب 3 حتى 4 كيسان فالنهار كينقص الخطر ديال بعض الأمراض بحال السرطان، وماعندوش تأثير خايب على الدورة الدموية."
        }
      ]
    },

    // 15. Viktor
    {
      id: "b1-l1-viktor",
      order: 15,
      title: "Viktor",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Nur wenige lesen im Zug", ar: "قليلون فقط يقرؤون في القطار" },
        { k: "b", de: "Bahnfahren bei älteren Menschen immer beliebter", ar: "السفر بالقطار يزداد شعبية لدى كبار السن" },
        { k: "c", de: "Per Internet leichter ans Ziel", ar: "الوصول إلى الهدف بسهولة عبر الإنترنت" },
        { k: "d", de: "Männer fahren besser", ar: "الرجال يقودون بشكل أفضل" },
        { k: "e", de: "Hilfe beim Reisen mit der Bahn", ar: "المساعدة في السفر بالقطار" },
        { k: "f", de: "Frauen finden den richtigen Weg", ar: "النساء يجدن الطريق الصحيح" },
        { k: "g", de: "Neuer Deutschkurs in Solothurn", ar: "دورة لغة ألمانية جديدة في سولوتورن" },
        { k: "h", de: "Jetzt wird auch im Zug gelernt", ar: "الآن يتم التعلم أيضًا في القطار" },
        { k: "i", de: "Lesen im Zug ist beliebt", ar: "القراءة في القطار شائعة" },
        { k: "j", de: "Neue Verkehrsregeln für Autofahrer", ar: "قواعد مرور جديدة لسائقي السيارات" }
      ],
      items: [
        {
          n: 1, c: "f",
          de: "Frauen kommen genauso gut an ihr Ziel wie Männer, sie geben nur nicht so damit an. Das ergab eine Studie der Eberhard-Karls-Universität Tübingen mit 600 Testpersonen. Obwohl Frauen sich so gut zurechtfinden wie Männer: Wenn Frauen allein unterwegs sind, fragen sie öfter nach dem Weg und freuen sich, wenn ihnen Freunde helfen. Die Tübinger Forscher nennen das ein kommunikatives Orientierungsmodell. Männer dagegen verfahren sich lieber dreimal, als einmal um Hilfe zu bitten. Dabei spielt offensichtlich die Erziehung eine Rolle.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على دراسة بينات بلي العيالات كيعرفو يوصلو للوجهة ديالهم بحال الرجال، ولكن هما كيسولو على الطريق وكيفرحو بالمساعدة، عكس الرجال اللي كيفضلو يتلفو ومايسولوش بسبب طريقة التربية."
        },
        {
          n: 2, c: "i",
          de: "Bahnfahren ist entspannend und lädt zum Lesen ein. Deswegen liest auch etwa die Hälfte aller Reisenden während ihrer Bahnfahrt. Frauen sind dabei lesefreudiger als Männer: 63 Prozent von ihnen steigen mit dem Buch in den Zug. Wer lesend unterwegs ist, verbringt im Durchschnitt etwa eine Stunde und 28 Minuten mit dem Lesen eines Buches oder einer Zeitung. Ein Zehntel aller Bahnreisenden gesteht, dass sie keine Buchleser sind. Dies sind die wesentlichen Ergebnisse einer Studie der Stiftung Lesen in Zusammenarbeit mit der Deutschen Bahn.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على القراية فالتران. دراسة بينات بلي النص ديال المسافرين كيقراو، والعيالات كيقراو كتر من الرجال. وبزاف كيدوزو تقريبا ساعة ونص فالتصفح ديال كتاب ولا جريدة."
        },
        {
          n: 3, c: "e",
          de: "Der frühere Verein junger Mädchen heißt nun Compagna und hat sich zu einem modernen gemeinnützigen Dienstleistungsbetrieb gewandelt. Das wichtigste Ziel des Vereins ist es weiterhin, Menschen zu begleiten. Diese Dienstleistung richtet sich vor allem an Menschen, die auf Hilfe angewiesen sind: alleinreisende Kinder, alte und behinderte Menschen. Die Reisenden werden am Ausgangsbahnhof abgeholt und mit den öffentlichen Verkehrsmitteln bis zum Zielort begleitet.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على جمعية ولات كتقدم خدمات باش تعاون الناس اللي محتاجين المساعدة فالسفر بحال الدراري الصغار، الشيوخ، وذوي الاحتياجات الخاصة، كيرافقوهم فوسائل النقل حتى كيوصلو للوجهة ديالهم."
        },
        {
          n: 4, c: "h",
          de: "Christine Zumstein, Leiterin der Volkshochschule Solothurn (VHS), ist begeistert: Super gelaufen seien die Kurse, die die VHS in den Morgenzügen des Quartals angeboten hat. Weil sich das Pilotprojekt von VHS und RBS auf der Strecke Solothurn–Bern bestens bewährt hat, sollen künftig auch Pendlerinnen und Pendler in umgekehrter Richtung die Möglichkeit erhalten, während der Bahnfahrt Sprachen zu lernen – im Zug ab Bern, mit einem Kurs in neuer Rechtschreibung. Ebenfalls angeboten werden Englisch, Italienisch und Französisch.",
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على نجاح تجربة تقديم دروس اللغات ديال مدرسة تعليم الكبار (VHS) داخل التران وقت السفر. وبسبب هاد النجاح غادي يوسعو المبادرة باش تشمل لغات بحال النڭليزية، الطاليانية، والفرنسية."
        },
        {
          n: 5, c: "c",
          de: "Sie sind in der Schweiz zu einem Fest eingeladen, aber auf der Einladung steht nur die Adresse? Kein Problem, auch ohne Auto: Seit einiger Zeit hat der Internet-Fahrplan der Schweizerischen Bundesbahnen (www.sbb.ch) einen großen Bruder. Bis jetzt konnte man nur Verbindungen von Bahnhöfen zu Bahnhöfen oder Haltestellen abfragen. Neuerdings ist das auch für den Weg von einer Adresse zu einer anderen möglich. Der elektronische Fahrplan führt Sie automatisch zum Haltepunkt des öffentlichen Verkehrs, der am nächsten bei der Zieladresse liegt. Das ist mit dem Verkehrsleitsystem für Autos vergleichbar, das Sie aber auch in der verkehrten Richtung durch Einbahnstraßen führen kann. Beim öffentlichen Verkehr kommt das glücklicherweise nicht vor.",
          summaryAr: "الخلاصة هي أن هاد النص كيشرح ميزة جديدة فموقع السكك الحديدية السويسرية، ولات كتعطيك المسار من عنوان لعنوان ماشي غير من محطة لمحطة، بحال الجي بي إس ديال الطوموبيلات ولكن بالنسبة للنقل العمومي."
        }
      ]
    },

    // 16. Moritz
    {
      id: "b1-l1-moritz",
      order: 16,
      title: "Moritz",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Bürgermeister eröffnet Weihnachtsmarkt", ar: "عمدة المدينة يفتتح سوق عيد الميلاد" },
        { k: "b", de: "Glasflaschen nicht so gut wie gedacht", ar: "الزجاجات ليست جيدة كما كان يُعتقد" },
        { k: "c", de: "Innenstadt mit Christbäumen geschmückt", ar: "تزيين وسط المدينة بأشجار عيد الميلاد" },
        { k: "d", de: "Laufend die Welt vom Müll befreien", ar: "تحرير العالم من القمامة أثناء الجري" },
        { k: "e", de: "Mit der eigenen Dose in den Supermarkt", ar: "التسوق في السوبر ماركت بعلبتك الخاصة" },
        { k: "f", de: "Neue Sportart aus Schweden", ar: "رياضة جديدة من السويد" },
        { k: "g", de: "Plastikflaschen immer beliebter", ar: "الزجاجات البلاستيكية تزداد شعبية" },
        { k: "h", de: "Regionale Produkte im Supermarkt", ar: "منتجات إقليمية في السوبر ماركت" },
        { k: "i", de: "Supermarkt setzt auf Plastik", ar: "سوبر ماركت يعتمد على البلاستيك" },
        { k: "j", de: "Weihnachtsmarkt für Kunst-Begeisterte", ar: "سوق عيد الميلاد لعشاق الفن" }
      ],
      items: [
        {
          n: 1, c: "e",
          de: "Man muss auch mal mutig sein! Das dachte sich Jannik. Warum ist es so mutig? Seit drei Jahren kauft er regelmäßig in einem Unverpackt-Laden ein. „Dabei spare ich nicht nur eine Menge Plastik“, sagt er. „Auch an der Frische der Produkte merkt man einen Unterschied. Die Schokolade bei uns ist immer knackiger als im Supermarkt.“ Offenbar sind Unverpackt-Läden gerade im Trend. Das merkt man auch daran, dass in den letzten zwei Jahren doppelt so viele Läden eröffnet haben. Doch es funktioniert: Die Kundinnen und Kunden geben mehr aus, weil es der Umwelt gut geht.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على تريند ديال المحلات اللي كتبيع السلعة بلا بلاستيك (Unverpackt). الناس بحال يانيك كيمشيو يتقداو تما وكيجيبو معاهم العلب ديالهم، وهادشي كيعاون البيئة وكيخلي المنتجات تكون طرية كتر."
        },
        {
          n: 2, c: "d",
          de: "Warum nicht das Angenehme mit dem Nützlichen verbinden? „Umweltschutz fängt mit kleinen Schritten an. Ich fahre jetzt seit Monaten mit meinem Rad zur Arbeit. Da tue ich etwas für mich, aber auch für die Umwelt“, sagt Lea. Seit ihrem Auslandssemester in Schweden ist sie überzeugt: „Dort ist Umweltschutz ganz selbstverständlich. Warum kann man nicht auch hier sein Hobby mit dem Umweltschutz verbinden?“",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على دمج الهواية مع حماية البيئة. شابة سميتها ليا بدات كتمشي للخدمة بالبيكالة من بعد ما شافت فالسويد كيفاش الناس كيحافظو على البيئة بطريقة عادية ويومية."
        },
        {
          n: 3, c: "b",
          de: "Wir merken deutlich, dass Getränke in Glasflaschen wieder beliebter werden, besonders aber Mineralwasser, berichtet Jürgen Fischer auf der Getränkemesse in Düsseldorf. Auch die Verkaufszahlen bestätigen diesen Trend. Dabei sind Glasflaschen nicht unbedingt besser für die Umwelt als Plastikflaschen. Der Grund ist der teilweise ange Tir es für Milch zum Beispiel nur die die Mich Glasflaschen ab Durchschnitt wind ene En 721 Kilometer transportiert be ankommt.",
          summaryAr: "الخلاصة هي أن هاد النص كيشرح بلي واخا القراعي ديال الدجاج رجع ليهم الإقبال (بحال الما سيدي علي)، هما ماشي ديما حسن من البلاستيك للبيئة، والسبب هو المسافة الطويلة اللي كيقطعوها فالنقل اللي كتزيد من التلوث."
        },
        {
          n: 4, c: "a",
          de: "Am 25. November beginnt wieder der Frankfurter Weihnachtsmarkt. Los geht es um 17:05 Uhr mit einem Glockenspiel von der Nikolaikirche. Danach gibt es eine Rede des Bürgermeisters. „Es ist für mich immer etwas ganz Besonderes, den Weihnachtsbaum mit seinen 6500 Lichtern zu sehen“, erzählt dieser der Frankfurter Rundschau. 700 Sterne sollen den Baum verschönern. Das hr-Abendprogramm sorgt für gemütliche Stimmung mit Weihnachtsliedern.",
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على افتتاح سوق الكريسماس ففرانكفورت نهار 25 نونبر. العمدة غادي يلقي كلمة والافتتاح غيكون فيه دقات الأغراس ديال الكنيسة، مع شجرة كبيرة مزينة بآلاف البولات وبرنامج موسيقي."
        },
        {
          n: 5, c: "j",
          de: "Ein Spaziergang in der Regensburger Altstadt ist in der Weihnachtszeit besonders schön. Im Schatten des Alten Rathauses und der Lucr Markt zum Träumen ein. Suchen Sie noch ein besonderes Geschenk? Dann sind Sie dort genau richtig, denn Handwerker poloenberen und verkaufen ihre Produkte aus Metall, Glas oder Holz. Und Kreativen wird ohne Behere für Musik und Theater geboten. Außerdem gibt es heißen Apfelsaft aus der Region.",
          summaryAr: "الخلاصة هي أن هاد النص كيوصف سوق الكريسماس فالمدينة القديمة ديال ريغنسبورغ كوجهة مثالية لمحبي الفن والناس اللي كيقلبو على هدايا مميزة، حيت كاينين حرفيين كيبيعو منتجات ديال الدجاج والخشب والمعدن، مع عروض ديال المسرح والموسيقى."
        }
      ]
    },

    // 17. Corina
    {
      ...ANNIKA2_BASE,
      id: "b1-l1-corina",
      order: 17,
      title: "Corina",
      options: ANNIKA2_BASE.options.map(o =>
        o.k === "a" ? { ...o, ar: "دعم مالي لمشاريع فنية مع الطلاب" } : o
      )
    },

    // 18. Petra
    {
      id: "b1-l1-petra",
      order: 18,
      title: "Petra",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Angebot für Reisende: Für wenig Geld öffentliche Verkehrsmittel benutzen", ar: "عرض للمسافرين: استخدام وسائل النقل العام بتكلفة منخفضة" },
        { k: "b", de: "Bildband: Babys im Garten", ar: "كتاب مصور: الأطفال في الحديقة" },
        { k: "c", de: "Ein Schüler mit vielen Ideen", ar: "طالب ذو أفكار متعددة" },
        { k: "d", de: "Früh übt sich: Hotels bieten Skikurse für Zweijährige an", ar: "التعلم المبكر: الفنادق تقدم دورات تزلج للأطفال بعمر السنتين" },
        { k: "e", de: "Neu: Taxi – Tickets für Discobesucher", ar: "جديد: تذاكر تاكسي لرواد الديسكو" },
        { k: "f", de: "Straßenbahn und Bus im Flugticket enthalten", ar: "الترام والحافلة مشمولان في تذكرة الطيران" },
        { k: "g", de: "Handbuch für Hobby-Fotografen", ar: "دليل للمصورين الهواة" },
        { k: "h", de: "Neu: Mit dem Taxi gratis zur Disco", ar: "جديد: بسيارة الأجرة مجانًا إلى الديسكو" },
        { k: "i", de: "Schulkinder schreiben spannende Geschichten", ar: "أطفال المدارس يكتبون قصصاً مثيرة" },
        { k: "j", de: "Skikurs für Eltern und Kinder", ar: "دورة تزلج للآباء والأطفال" }
      ],
      items: PETRA_BASE_ITEMS
    },

    // 19. Tamara / Jakob
    {
      ...PAUL_BASE,
      id: "b1-l1-tamara-jakob",
      order: 19,
      title: "Tamara / Jakob",
      options: PAUL_BASE.options.map(o => {
        if (o.k === "j") return { ...o, ar: "تصوير أفلام في منطقة برن العليا" };
        if (o.k === "c") return { ...o, ar: "اقتراح كتاب: رحلات للعائلات" };
        if (o.k === "e") return { ...o, ar: "شركة توفر العديد من الفرص الوظيفية" };
        return o;
      })
    },

    // 20. Nicole
    {
      id: "b1-l1-nicole",
      order: 20,
      title: "Nicole",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Sportkurse für ältere Menschen", ar: "دورات رياضية لكبار السن" },
        { k: "b", de: "Für Jugendliche ist der Computer etwas Alltägliches", ar: "الحاسوب شيء يومي بالنسبة للشباب" },
        { k: "c", de: "Das Interesse am Handel über Internet nimmt stark ab", ar: "الاهتمام بالتجارة عبر الإنترنت يتراجع بشدة" },
        { k: "d", de: "Arbeiten am Computer verursacht häufig Rückenschmerzen", ar: "العمل على الحاسوب يسبب غالباً آلام الظهر" },
        { k: "e", de: "Internetnutzer machen viele Dinge gleichzeitig", ar: "مستخدمو الإنترنت يقومون بالعديد من الأشياء في نفس الوقت" },
        { k: "f", de: "Firmen müssen auch über Internet für Produkte werben", ar: "يجب على الشركات الترويج لمنتجاتها عبر الإنترنت أيضًا" },
        { k: "g", de: "Auch Freizeitsportarten sollten trainiert werden", ar: "يجب تدريب الرياضات الترفيهية أيضًا" },
        { k: "h", de: "Was man gegen Rückenschmerzen tun kann", ar: "ما يمكن فعله ضد آلام الظهر" },
        { k: "i", de: "Kinder wollen mit dem Computer nur spielen", ar: "الأطفال يريدون اللعب فقط بالحاسوب" },
        { k: "j", de: "Internetnutzer interessieren sich nicht fürs Fernsehen", ar: "مستخدمو الإنترنت لا يهتمون بالتلفاز" }
      ],
      items: [
        {
          n: 1, c: "h",
          de: "Falsche Körperhaltung, mangelnde Bewegung und psychische Faktoren sind meistens die Hauptfaktoren für Rückenschmerzen. Hier finden Sie ein ganzheitliches Trainingsprogramm, das hilft: Alle Übungen lassen sich im Alltag gut umsetzen und sind auch bei Vorschäden der Wirbelsäule durchführbar. Mit speziellem Entspannungstraining. 114 Seiten, durchgehend Farbabbildungen, 18×25 cm, gebunden.",
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على كتاب فيه برنامج تدريبي شامل باش تعالج حريق الظهر اللي كيجي من الڭلسة العوجة، قلة الحركة، والستريس. التمارين ساهلة تدار كل نهار وفيها حتى تقنيات للاسترخاء."
        },
        {
          n: 2, c: "b",
          de: "Der Computer gehört heute wie selbstverständlich in das Jugendzimmer. Wie früher die Modelleisenbahn oder die Barbie-Puppe. Was aber genau treiben die Kids mit den hochgerüsteten Rechenmaschinen auf dem Schreibtisch? Das wollte die Jugendzeitschrift Bravo wissen. Selbstverständlich spielen, aber auch andere, nützlichere Dinge wie Texte schreiben oder Hausaufgaben für die Schule erledigen, Tabellen erstellen – und natürlich im Internet herumsurfen.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على كيفاش البيسي ولى حاجة عادية وضرورية فبيوت الشباب بحال اللعب شحال هادي. مجلة سولاب الشباب ولقات بلي كيستعملوه ماشي غير للعب، ولكن حتى للقراية، كتابة النصوص، والتصفح فالأنترنيت."
        },
        {
          n: 3, c: "g",
          de: "Inline-Skating ist ein idealer Ausdauersport – nicht nur für die jüngere Generation. Das haben jetzt Untersuchungen am Institut für Sportwissenschaften an der Universität Frankfurt bestätigt. Danach trainiert Inline-Skating das Herz-Kreislauf-System, beansprucht die wichtigsten Muskelgruppen und fördert die Koordination. Die Faszination dieser rasanten Freizeitsportart wirke generationenübergreifend und erfasst die Jungen wie die Alten, sagt Dr. Hans Jürgen Ahrens. Allerdings fragt der Arzt kritisch, warum jeder Skifahrer, Windsurfer oder Tennisspieler zu Beginn Trainingsstunden bei einem Profi belege, oft aber nicht der Inliner: Dabei lässt sich das Verletzungsrisiko durch regelmäßiges Fahrtraining deutlich verringern. In einem Kurs sollten die wichtigsten Sturz-, Brems- und Fahrtechniken erlernt werden.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على رياضة الرولر (سكاتينڭ) كرياضة مفيدة بزاف للقلب والعضلات ومناسبة لجميع الأعمار. ولكن طبيب كينصح الناس باش يتعلمو القواعد والتقنيات ديالها عند شي محترف فالأول باش يتفاداو الإصابات والطيحات."
        },
        {
          n: 4, c: "e",
          de: "Eine Studie der Fernsehgesellschaften ARD und ZDF besagt, dass deutsche Internetnutzer sich auch mit anderen Dingen beschäftigen, wenn sie im Internet sind. Ein Großteil der beobachteten Personen telefoniert beim Surfen, hört nebenbei Musik oder arbeitet mit anderen Computerprogrammen. Aber auch Konkurrenzmedien wie Fernsehen und Zeitschriften finden große Aufmerksamkeit, während im Internet nach Informationen gesucht wird.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على دراسة بينات بلي الناس فاش كيكونو مكونيكطين فالأنترنيت مكيركزوش غير فيه، كيديرو حوايج خرين فدقة وحدة بحال يهضرو فالتليفون، يسمعو الموسيقى، يتفرجو فالتلفزة ولا يقراو المجلات."
        },
        {
          n: 5, c: "f",
          de: "Geschäfte über das Internet werden in Deutschland auch in Zukunft Milliarden Euro einbringen. In spätestens zwei Jahren werden 20 Prozent aller europäischen Geschäfte über das Internet abgewickelt, sagen die Fachleute. Heutzutage ist es kaum vorstellbar, dass ein Unternehmen allein mit klassischen Verkaufsmethoden und ohne zusätzliches Online-Marketing erfolgreich sein wird. Wer heute nicht anfängt, diese Möglichkeiten zu nutzen, kann in Zukunft seine Kunden verlieren. Das Argument, dass die angebotene Ware sich ja auch ohne Internet gut verkaufe, stimmt so nicht mehr. Denn das Internet beeinflusst auch das Käuferverhalten auf der Straße.",
          summaryAr: "الخلاصة هي أن هاد النص كيشرح الأهمية ديال التجارة الإلكترونية (التسويق فالأنترنيت) بالنسبة للشركات. الخبراء كيقولو بلي الشركات اللي ما كتبيعش فالأنترنيت وما كديرش إشهار تما غادي تضيع الكليان ديالها فالمستقبل حيت الأنترنيت كيبدل طريقة الشراء ديال الناس."
        }
      ]
    },

    // 21. Andreas 2
    {
      ...NADJA_BASE,
      id: "b1-l1-andreas-2",
      order: 21,
      title: "Andreas 2",
      options: NADJA_BASE.options.map(o => {
        if (o.k === "a") return { ...o, ar: "تحرير الصور باستخدام الحاسوب" };
        if (o.k === "c") return { ...o, ar: "الكنيسة تفتتح ملتقى جديد" };
        if (o.k === "i") return { ...o, ar: "لماذا يذهب النمساويون إلى المقهى" };
        return o;
      })
    },

    // 22. Thomas / Anna
    {
      id: "b1-l1-thomas-anna",
      order: 22,
      title: "Thomas / Anna",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Eine Karte – viele Vorteile", ar: "بطاقة واحدة – مزايا متعددة" },
        { k: "b", de: "Endlich Ferien ohne Kinder", ar: "أخيراً عطلة بدون أطفال" },
        { k: "c", de: "Günstiger Urlaub für Vereinsmitglieder", ar: "إجازة بأسعار مناسبة لأعضاء النادي" },
        { k: "d", de: "Meer statt Berge", ar: "البحر بدلاً من الجبال" },
        { k: "e", de: "Neues Wohnprojekt für Alleinerziehende", ar: "مشروع سكني جديد للآباء العزاب" },
        { k: "f", de: "Reisebüros weltweit vernetzt", ar: "وكالات السفر مترابطة عالمياً" },
        { k: "g", de: "Schweizer Seen weiterhin sehr beliebt", ar: "البحيرات السويسرية لا تزال تحظى بشعبية كبيرة" },
        { k: "h", de: "Söhne schenken mehr als Töchter", ar: "الأبناء يهدون أكثر من البنات" },
        { k: "i", de: "Söhne werden großzügiger beschenkt", ar: "الأبناء يحصلون على هدايا أكثر سخاءً" },
        { k: "j", de: "Beratung: Wo auch Kinder ihren Spaß haben", ar: "استشارة: أين يمكن للأطفال الاستمتاع أيضاً" }
      ],
      items: [
        {
          n: 1, c: "i",
          de: "Das fängt ja gut an: Schon im Kinderzimmer werden Jungs bevorzugt – sie bekommen mehr geschenkt als Mädchen. Das ist das Ergebnis einer Untersuchung vom Bundesverband des Spielwaren-Einzelhandels. Bundesweit wurden 6500 Familien nach ihren Schenkgewohnheiten befragt. Fast immer wurden für die Söhne – auch schon im Babyalter – mehr gekauft. Zuständig für die Geschenke sind übrigens meist die Mütter.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على واحد الدراسة بينات بلي العائلات كيشريو هدايا للدراري (الذكور) كتر من البنات، وهادشي كيبدا من الصغر. وغالباً الأمهات هما اللي كيتكلفو بشريان هاد الهدايا."
        },
        {
          n: 2, c: "a",
          de: "In diesem Sommer werden weitere 200 Großstadt-Jugendherbergen auf der ganzen Welt miteinander vernetzt. ICYN heißt das Zauberwort – International Communication Youth Network. Das System wurde speziell für Jugendherbergen entwickelt. Für nur 15 Euro Jahresgebühr kann man mit der ICYN-Karte weltweit nicht nur Übernachtungen in anderen Herbergen reservieren, sondern auch unbegrenzt im Internet surfen, sogar gratis übers Internet telefonieren, Bahn- und Flugtickets bargeldlos buchen sowie günstige Konzerttickets bekommen.",
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على شبكة جديدة (ICYN) كتربط بيوت الشباب فالعالم. بـ 15 أورو فالعام، هاد لاكارت كتعطيك بزاف ديال المزايا بحال حجز البيوت، الأنترنيت والمكالمات فابور، وتخفيضات على التذاكر ديال السفر والحفلات."
        },
        {
          n: 3, c: "j",
          de: "Ob zu Hause, irgendwo in der Schweiz oder im Ausland: Ferien mit Kindern wollen gut geplant sein. Wo gibt es denn Orte, wo Kinder noch Abenteuer erleben, Hotels oder Wohnungen, in denen sie sich wohlfühlen, wo aber gleichzeitig auch die Eltern auf ihre Rechnung kommen? Ruth Michaela Richter gibt Tipps, verrät Adressen und zeigt Beispiele. Damit werden sogar Städtereisen oder Schlossferien in England interessant.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على التخطيط للعطلة مع الدراري الصغار. واحد الكاتبة سميتها 'روت' كتعطي نصائح وعناوين ديال بلايص فين يقدرو الدراري يستمتعو وفي نفس الوقت الآباء يرتاحو، حتى فالسفر للمدن ولا لقصور نڭليز."
        },
        {
          n: 4, c: "d",
          de: "Die Sehnsucht nach dem Meer ist in der Schweiz groß, vor allem bei der jüngeren Generation. Ein Drittel der Schweizerinnen und Schweizer würde nach einer Umfrage im Tausch für eine Meeresküste die Hälfte der Berge hergeben. Die Zeitschrift „mare“ ließ über 1000 Personen in der Schweiz nach ihrem Verhältnis zum Meer befragen. Rund 42 Prozent der 15- bis 34-Jährigen würden – treu dem Motto der Jugendbewegung der 80er Jahre: „Nieder mit den Alpen, freie Sicht aufs Mittelmeer“ – den Tausch eingehen. In der Deutschschweiz könnten sich nur 29 Prozent von den Bergen trennen, in der Romandie sind es 37 und im Tessin 43 Prozent.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على شحال السويسريين (خصوصا الشباب) كيتوحشو البحر. دراسة بينات بلي بزاف منهم مستعدين يتخلاو على نص الجبال ديالهم مقابل يكون عندهم بحر، وهاد النسبة كتختلف على حساب المنطقة فالسويسرا."
        },
        {
          n: 5, c: "c",
          de: "Ob für die traditionelle Familie oder für Alleinerziehende: Der Verein für Familienherbergen in Gelsenkirchen bietet schon seit Jahren preisgünstige Ferien. Über 1100 Zimmer und Wohnungen – auch für das kleine Portemonnaie – stehen zwischen Nordsee und Sizilien den Mitgliedern im neuen Katalog zur Auswahl. Nichtmitglieder erhalten diesen Katalog gegen eine Gebühr von 5 Euro. Infos: Telefon 061/981 25 25 oder www.ferienwohnung.ch",
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على عروض سياحية رخيصة كتقدمها جمعية فـ 'غيلسنكيرشن' للعائلات والأمهات/الآباء العزاب. عندهم كتر من 1100 بلاصة رخيصة، والأعضاء كياخدو الكاطالوڭ فابور باش يختارو العطلة ديالهم."
        }
      ]
    },

    // 23. Sophie
    {
      id: "b1-l1-sophie",
      order: 23,
      title: "Sophie",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Arbeitsplatz: Bezahlung wichtiger als Zufriedenheit", ar: "مكان العمل: الراتب أهم من الرضا الوظيفي" },
        { k: "b", de: "Ausstellungseröffnung an bayerischem Gymnasium", ar: "افتتاح معرض في ثانوية بافارية" },
        { k: "c", de: "Frauen: mehr Spaß am Beruf als Männer", ar: "النساء: يستمتعن بالعمل أكثر من الرجال" },
        { k: "d", de: "Gründe für Zufriedenheit am Arbeitsplatz", ar: "أسباب الرضا في مكان العمل" },
        { k: "e", de: "Immer mehr Teilzeitarbeitsplätze für Männer", ar: "المزيد من وظائف الدوام الجزئي للرجال" },
        { k: "f", de: "Karriere ist Männern weniger wichtig als Frauen", ar: "المسار المهني أقل أهمية للرجال من النساء" },
        { k: "g", de: "Technik für Kleinkinder", ar: "التكنولوجيا للأطفال الصغار" },
        { k: "h", de: "Technisches Museum vergibt Umwelt- und Technikpreis", ar: "المتحف التقني يمنح جائزة البيئة والتقنية" },
        { k: "i", de: "Umwelt- und Technikpreis", ar: "جائزة البيئة والتقنية" },
        { k: "j", de: "Wünsche von berufstätigen Eltern", ar: "رغبات الآباء العاملين" }
      ],
      items: [
        {
          n: 1, c: "j",
          de: "Eine aktuelle Umfrage der Arbeiterkammer unter berufstätigen Eltern zeigt den dringenden Wunsch nach flexiblen Arbeitszeiten (60% der Eltern) und nach Kindergärten im oder in der Nähe des Betriebes (58%). Frauen verlangen aber deutlich mehr Teilzeitarbeitsplätze (50%) als Männer (36%). 52% aller Eltern wünschen eine Ersatzperson, die den Vater oder die Mutter bei Krankheit des Kindes im Betrieb vertritt. Die Arbeiterkammer fordert, dass sich die Arbeitszeiten am Bedarf der Eltern orientieren.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على شنو باغين الآباء والأمهات الخدامين من المشغلين ديالهم. دراسة بينات بلي بزاف باغين وقت خدمة مرن (فليكسيبل)، روض ديال الدراري حدا الخدمة، والعيالات باغين خدمة بنص نهار كتر من الرجال."
        },
        {
          n: 2, c: "i",
          de: "MÜNCHEN: Schüler an bayerischen Gymnasien, die sich für Umwelt oder Technik interessieren, können sich auch dieses Jahr wieder um den Carl Friedrich von Martius Umwelt- und Technikpreis bewerben. Bei diesem Wettbewerb werden Facharbeiten aus dem letzten Schuljahr bewertet. Nähere Informationen erhältlich beim GSF-Forschungszentrum unter der Telefonnummer 089/311 87 27 12.",
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على جائزة فالبيئة والتكنولوجيا مخصصة للتلامذ ديال الثانويات فمنطقة بافاريا الألمانية. التلامذ يقدرو يشاركو بالأبحاث اللي صاوبوها فالعام اللي فات."
        },
        {
          n: 3, c: "g",
          de: "WIEN. Eine einmalige Abteilung für drei- bis sechsjährige Kinder wurde im Technischen Museum (15., Mariahilferstraße 112) eröffnet. In einem speziell für Kinder eingerichteten Bereich können die jüngsten Besucher Technik angreifen. Dort gibt es unter anderem Plasmascheiben, die Blitze erzeugen, ein Laufrad und ein Hüpfklavier, mit dem die Kinder Töne erspringen können. Viel Spaß macht den Kleinen auch, in einem Elektroauto herumzukurven und sich in verschiedenen Zerrspiegeln zu betrachten.",
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على افتتاح جناح جديد فمتحف التقنية ففيينا مخصص للدراري الصغار (بين 3 و 6 سنين). الدراري يقدرو يلعبو ويكتاشفو التكنولوجيا بيديهم، بحال بيانو كينقزو عليه باش يخرج الصوت وطوموبيلات بالضو."
        },
        {
          n: 4, c: "c",
          de: "HAMBURG. Männer haben mehr Karrierechancen, Frauen dafür mehr Freude am Beruf: Das ergab eine große Umfrage in Hamburg. Obwohl nur 8% der weiblichen Arbeitnehmer an ihre Aufstiegschancen glauben, geben 61% an, dass ihre Arbeit ihnen Spaß mache. Bei den Männern ist dieses Verhältnis 23 zu 57 Prozent.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على دراسة فمدينة هامبورغ بينات بلي الرجال عندهم فرص كتر للترقية فالخدمة، ولكن العيالات كيعجبهم الحال وكيستمتعو بخدمتهم كتر من الرجال، واخا عارفين بلي فرصهم فالترقية قليلة."
        },
        {
          n: 5, c: "d",
          de: "Für Zufriedenheit am Arbeitsplatz kann Geld allein nicht entscheidend sein. Dies gilt in besonderem Maß für hochqualifizierte europäische Arbeitskräfte, wie eine vergleichende internationale Management-Studie zeigt. Sowohl in Europa wie auch unter japanischen und amerikanischen Managern wird der Möglichkeit, neben der Arbeit auch Zeit für das Privatleben zu haben, ein zentraler Stellenwert beigemessen. Viel stärker als in Japan spielt es unter europäischen Angestellten eine Rolle, dass die Arbeit Spaß macht. Die Analysen zeigen auch, dass neben dem Gehalt der Ruf des Unternehmens für die Arbeitsplatzwahl von europäischen Arbeitnehmern besonders wichtig ist.",
          summaryAr: "الخلاصة هي أن هاد النص كيشرح بلي الفلوس بوحدها ماكافياش باش الواحد يكون مرتاح فالخدمة. دراسة عالمية بينات بلي الخدامين الأوروبيين (والأمريكيين واليابانيين) كيعطيو أهمية كبيرة لوقت الفراغ والحياة الشخصية، وبالنسبة للأوروبيين، مهم بزاف تكون الخدمة ممتعة وتكون الشركة عندها سمعة زوينة."
        }
      ]
    },

    // 24. Alicia
    {
      id: "b1-l1-alicia",
      order: 24,
      title: "Alicia",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Berufliche Weiterbildung für Eltern", ar: "التكوين المهني المستمر للآباء" },
        { k: "b", de: "Bürgertreffen: Flughafen und Naturschutz", ar: "اجتماع المواطنين: المطار وحماية البيئة" },
        { k: "c", de: "Demonstration gegen Fluglärm", ar: "مظاهرة ضد ضجيج الطائرات" },
        { k: "d", de: "Experten gegen Vergrößerung des Flughafens", ar: "خبراء ضد توسيع المطار" },
        { k: "e", de: "Familienbildung Schwerpunkt Beruf und Familie", ar: "التعليم الأسري مع التركيز على العمل والأسرة" },
        { k: "f", de: "Flughafen Frankfurt beliebter Veranstaltungsort", ar: "مطار فرانكفورت: موقع شهير للفعاليات" },
        { k: "g", de: "Flughafen Frankfurt wird 10 Jahre", ar: "مطار فرانكفورت يبلغ 10 سنوات" },
        { k: "h", de: "Info-Veranstaltung: Berufseinstieg am Flughafen", ar: "فعالية معلوماتية - بدء العمل في المطار" },
        { k: "i", de: "Neue Kurse für Kinder", ar: "دورات جديدة للأطفال" },
        { k: "j", de: "Neue Kurse: Museumsführung für junge Väter", ar: "دورات جديدة: جولات في المتحف للآباء الشباب" }
      ],
      items: [
        {
          n: 1, c: "b",
          de: CAROLINE_BASE.items[0].de,
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على مجموعة ديال المواطنين كينظمو أمسية إعلامية باش يناقشو توسيع مطار فرانكفورت وتأثير هادشي على البيئة والضجيج ديال الطيارات."
        },
        {
          n: 2, c: "f",
          de: CAROLINE_BASE.items[1].de,
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على مطار فرانكفورت كوجهة مفضلة لتنظيم الفعاليات والمؤتمرات. المطار فيه مركز مؤتمرات مجهز بأحدث التقنيات وكيستقبل آلاف الفعاليات كل عام."
        },
        {
          n: 3, c: "h",
          de: "Die Agentur für Arbeit lädt für kommende Woche um 19:30 Uhr zu einem Themenabend zur „Ausbildung am Frankfurter Flughafen“ ein. Die Veranstaltung richtet sich an Schüler, Abiturienten und alle Interessierten. Eingeladen sind der Personalleiter des Frankfurter Flughafens, ein Vertreter der Stadtverwaltung und ein Soziologe, der sich mit der Arbeitsplatzentwicklung in der Frankfurter Region beschäftigt. Im Anschluss an die Vorträge der Experten haben die Gäste Zeit, Fragen zu stellen.",
          summaryAr: "الخلاصة هي أن هاد النص كيعلن على أمسية كينظمها مكتب الشغل للناس اللي باغين يديرو التكوين المهني (Ausbildung) فمطار فرانكفورت. غيحضرو خبراء بحال مدير الموارد البشرية باش يجاوبو على أسئلة الحاضرين."
        },
        {
          n: 4, c: "e",
          de: CAROLINE_BASE.items[3].de,
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على برنامج جديد لمركز التثقيف الأسري كيركز على الآباء والأمهات العاملين. كيقدمو دورات كتعاونهم يوازنو بين الخدمة والعائلة، بالإضافة لدورات أخرى لجميع أفراد الأسرة."
        },
        {
          n: 5, c: "i",
          de: CAROLINE_BASE.items[4].de,
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على دورات جديدة كتقدمها مدرسة تعليم الكبار، خاصة للأطفال والآباء ديالهم. كاين دروس فالرسم وورشات إبداعية بحال صناعة التماثيل من الطين."
        }
      ]
    },

    // 25. Annika 1
    {
      id: "b1-l1-annika-1",
      order: 25,
      title: "Annika 1",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Der öffentliche Verkehr auf einen Blick", ar: "وسائل النقل العام في لمحة" },
        { k: "b", de: "Türen auf für fremde Kulturen", ar: "الانفتاح على الثقافات الأجنبية" },
        { k: "c", de: "Skifahren in der Schweiz", ar: "التزلج في سويسرا" },
        { k: "d", de: "Schlank werden und trotzdem gut essen", ar: "تخفيف الوزن ومع ذلك تناول طعام جيد" },
        { k: "e", de: "„Herr Ober: Es schmeckt mir nicht!“, sagen nur wenige Gäste", ar: "نادراً ما يقول الزبائن: النادل، الطعام لا يعجبني!" },
        { k: "f", de: "Die schönsten Bahnstrecken in Deutschland", ar: "أجمل خطوط القطارات في ألمانيا" },
        { k: "g", de: "Die Deutschen beschweren sich sofort", ar: "الألمان يشتكون فوراً" },
        { k: "h", de: "Wanderungen im Schnee", ar: "التنزه في الثلج" },
        { k: "i", de: "Hauptsache es schmeckt - Gesundheit ist Nebensache", ar: "المهم أن يكون الطعم لذيذاً - الصحة أمر ثانوي" },
        { k: "j", de: "Immer beliebter: Studienreisen in die Schweiz", ar: "الأكثر شعبية: الرحلات الدراسية إلى سويسرا" }
      ],
      items: [
        {
          n: 1, c: "i",
          de: "Es stimmt: Wir essen einfach zu viel Fett, zu viel Fleisch und zu wenig Ballaststoffe. Doch die wenigsten scheint das zu kümmern. Die Hausmannskost mit Kohlrouladen, Schweinebraten und Currywurst sind nach wie vor die Lieblingsgerichte der Deutschen. Und nur jeder Fünfte will sich der Figur zuliebe beim Essen einschränken. Das ergab die neueste Umfrage der Gesellschaft für Konsumforschung über Trends in der Ernährung.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على واحد الدراسة بينات بلي الألمان مازال عزيز عليهم الماكلة التقليدية اللي فيها ليدام واللحم بزاف، وما مسوقينش بزاف للصحة ولا للرشاقة ديالهم."
        },
        {
          n: 2, c: "a",
          de: "Sämtliche Informationen zu den Bahnlinien und ausgesuchten Busverbindungen in der Bundesrepublik können Sie in gesammelter Form auf der Webseite des Verkehrsclubs Deutschland (www.vcd.net) finden. Unter dem Menüpunkt „Fahrpläne Bus und Bahn Deutschland“ können Sie die wichtigsten Daten zum Fernverkehr, zu Regional- und S-Bahnen sowie zu Buslinien abrufen. Per Suchbefehl erhalten Sie außerdem Auskunft über Verkehrsverbünde und rund 8000 Bahnhöfe in Deutschland.",
          summaryAr: "الخلاصة هي أن هاد النص كيشرح بلي تقدر تلقى كاع المعلومات على خطوط التران والكيران فألمانيا فموقع واحد، اللي كيعطيك التوقيت والمعلومات على كاع المحطات."
        },
        {
          n: 3, c: "h",
          de: "Immer mehr Gäste in den Wintersportorten wollen auch in der kalten Jahreszeit ihrem Hobby, dem Wandern, frönen und suchen Ruhe und Erholung abseits des Pistenrummels. Sie finden beides auf markierten und vom Schnee geräumten Winterwanderwegen in den Bergen. Der Autor Emanuel Balsinger stellt drei Dutzend Routen in der Schweiz vor und liefert sämtliche Informationen zu einfachen Spaziergängen im Schnee oder anspruchsvollen, längeren Wanderungen. Das Buch kostet CHF 34,80. Erhältlich im Buchhandel oder direkt bei: Werd Verlag, Postfach, 8021 Zürich.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على واحد الكتاب جديد كيقدم كتر من 30 طريق للمشي فالثلج فجبال سويسرا، للناس اللي كيعجبهم المشي بعيداً على الصداع ديال التزلج."
        },
        {
          n: 4, c: "e",
          de: "Der Service im Restaurant ist schlecht, das Essen lauwarm und mäßig. Beschweren Sie sich? Nein? Dann befinden Sie sich in großer Gesellschaft. Nach dem Ergebnis einer Studie der Bundesforschungsanstalt für Ernährung hat nur jeder Dritte beim Anblick des bestellten Menüs daran gedacht, sich zu beschweren. Wenige von ihnen machten ihrem Ärger auch tatsächlich Luft. Die übrigen zwei Drittel hielten lieber still, weil sie den Aufwand scheuten, keine Zeit hatten oder es peinlich fanden. Dabei hatten die Aufmüpfigen durchweg Erfolg. Die meisten erhielten eine Ersatzleistung. Seltener gab es eine Entschuldigung und noch seltener Preisnachlass.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على واحد الدراسة لقات بلي أغلب الناس مكيشكاوش فاش كتكون الماكلة ولا الخدمة خايبة فالمطعم حيت كيجيهم الحرج، واخا الناس اللي كيتشكاو غالباً كياخدو تعويض."
        },
        {
          n: 5, c: "b",
          de: "Die Jugendaustausch-Organisation AFS Interkulturelle Programme Schweiz sucht Familien, die während eines Jahres Schüler und Schülerinnen aus dem Ausland beherbergen möchten. Die 16- bis 19-jährigen Jungen und Mädchen kommen vorwiegend aus Neuseeland und Australien, aber auch aus Südafrika, Chile, Simbabwe, Costa Rica und Kolumbien. In ihrem Austauschjahr möchten sie unsere Kultur und Sprache kennenlernen. Wer sich mit neuen Gedanken und Menschen aus fremden Kulturen auseinandersetzen möchte, wendet sich an: AFS Interkulturelle Programme Schweiz, CH-8037 Zürich, Langstr., Tel. 01-2116041.",
          summaryAr: "الخلاصة هي أن هاد النص كيهضر على واحد المنظمة فسويسرا كتقلب على عائلات يستاضفو تلاميذ من دول أجنبية لمدة عام، باش يتعرفو على ثقافات جديدة ويتبادلو الأفكار."
        }
      ]
    },

    // 26. Jennifer
    {
      id: "b1-l1-jennifer",
      order: 26,
      title: "Jennifer",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Angebot für Reisende: Für wenig Geld öffentliche Verkehrsmittel benutzen", ar: "عرض للمسافرين: استخدام وسائل النقل العامة بتكلفة منخفضة" },
        { k: "b", de: "Bildband: Babys im Garten", ar: "كتاب مصور: الأطفال في الحديقة" },
        { k: "c", de: "Ein Schüler mit vielen Ideen", ar: "طالب ذو أفكار عديدة" },
        { k: "d", de: "Früh übt sich: Hotels bieten Skikurse für Zweijährige an", ar: "التدريب المبكر: الفنادق تقدم دورات تزلج للأطفال بعمر سنتين" },
        { k: "e", de: "Handbuch für Hobby-Fotografen", ar: "دليل للمصورين الهواة" },
        { k: "f", de: "Neu: Mit dem Taxi gratis zur Disco", ar: "جديد: بسيارة الأجرة مجاناً إلى الديسكو" },
        { k: "g", de: "Neu: Taxi – Tickets für Discobesucher", ar: "جديد: تذاكر تاكسي لزوار الديسكو" },
        { k: "h", de: "Schulkinder schreiben spannende Geschichten", ar: "أطفال المدارس يكتبون قصصاً مثيرة" },
        { k: "i", de: "Skikurs für Eltern und Kinder", ar: "دورة تزلج للآباء والأطفال" },
        { k: "j", de: "Straßenbahn und Bus im Flugticket enthalten", ar: "الترام والحافلة مشمولان في تذكرة الطيران" }
      ],
      items: PETRA_BASE_ITEMS.map(it => it.n === 5 ? { ...it, c: "g" } : it)
    },

    // 27. Mara
    {
      ...MIROSLAV_BASE,
      id: "b1-l1-mara",
      order: 27,
      title: "Mara",
      options: MIROSLAV_BASE.options.map(o =>
        o.k === "i" ? { ...o, ar: "أشكال سكنية جديدة صديقة للبيئة" } : (o.k === "e" ? { ...o, ar: "العمل أولاً، ثم الترفيه" } : o)
      ),
      items: [
        {
          n: 1, c: "i",
          de: TEXTS_MIROSLAV_MARA[0],
          summaryAr: "واحد التريند جديد فالسكن كيبان: القرى البيئية. كتوفر بديل لحياة المدينة و كتركز على البناء البيئي والطاقات المتجددة باش تحافظ على الطبيعة والمجتمع."
        },
        {
          n: 2, c: "d",
          de: TEXTS_MIROSLAV_MARA[1],
          summaryAr: "عرض للناس لي مضغوطين فالخدمة: اليوجا والتأمل باش يرجعو التوازن. التمارين ساهلة وكترجع الراحة للناس لي مبرزطين فوقت قصير."
        },
        {
          n: 3, c: "a",
          de: TEXTS_MIROSLAV_MARA[2],
          summaryAr: "بيطون جديد سميتو TioCem كيتفاعل مع الضوء و كيقدر ينقي 90 فالمية ديال التلوث من الهواء فالمدن الكبيرة، واخا البيطون العادي معروف بلي ممل."
        },
        {
          n: 4, c: "b",
          de: TEXTS_MIROSLAV_MARA[3],
          summaryAr: "الناس بداو كيبنيو ديور فوق الشجر باش يحققو الحلم ديالهم، كاين لي كيديرهم للضياف، للنعاس فالصيف، ولا حتى بيروات ديال الخدمة."
        },
        {
          n: 5, c: "e",
          de: TEXTS_MIROSLAV_MARA[4],
          summaryAr: "فالمدن الكبيرة، الحفلات مورا الخدمة ولات عادية. فيها الماكلة و الشطيح، و بزاف ديال العزاب كيتلاقاو تما و كيديرو صحاب ولا شركاء حياة."
        }
      ]
    },

    // 28. Miroslav 2
    {
      id: "b1-l1-miroslav-2",
      order: 28,
      title: "Miroslav 2",
      level: "B1",
      sub: "Teile 1",
      type: "headings",
      points: 25,
      options: [
        { k: "a", de: "Fremdsprachengymnasium im Grünen", ar: "ثانوية للغات الأجنبية في الطبيعة" },
        { k: "b", de: "Wohnen in der Natur", ar: "السكن في الطبيعة" },
        { k: "c", de: "Neu eröffnet: Lokal mit typischer Wiener Küche", ar: "افتتاح جديد: مطعم يقدم المطبخ الفييني التقليدي" },
        { k: "d", de: "Mehrheit der österreichischen Schüler ernährt sich ungesund", ar: "أغلبية الطلاب النمساويين يتغذون بشكل غير صحي" },
        { k: "e", de: "Beim Wandern die Natur entdecken", ar: "اكتشاف الطبيعة من خلال التنزه" },
        { k: "f", de: "Gute Noten für Österreichs Schulen", ar: "تقييمات جيدة للمدارس النمساوية" },
        { k: "g", de: "Moderne Architektur zerstört Umwelt", ar: "العمارة الحديثة تدمر البيئة" },
        { k: "h", de: "Ernährungstipps für Jung und Alt", ar: "نصائح غذائية للشباب وكبار السن" },
        { k: "i", de: "Österreichische Experten entdecken neue Pflanzenart", ar: "خبراء نمساويون يكتشفون نوعاً جديداً من النباتات" },
        { k: "j", de: "Gut Essen trotz kleiner Brieftasche", ar: "تناول طعام جيد رغم ضيق الميزانية" }
      ],
      items: [
        {
          n: 1, c: "b",
          de: "Der Stararchitekt Norman Foster plant jetzt ein Natur-Wohnprojekt auf den Aspang-Gründen und will das historische Gebiet damit zu neuem Leben erwecken. Grünflächen und ein Teich sollen im Mittelpunkt der künftigen Stadt-Oase liegen. Wohnungen mit freiem Blick aufs Grüne, Geschäfte und Bildungseinrichtungen soll es ebenso geben wie Bürotürme, die bis zu 110 Meter hoch in den Himmel wachsen. Der Stararchitekt, der auch für den Umbau des Berliner Reichstagsgebäudes verantwortlich ist, plant weiters den optimalen Anschluss des Areals an die U- und S-Bahn.",
          summaryAr: "المهندس المعماري المشهور نورمان فوستر كيخطط لمشروع سكني جديد وسط الطبيعة، فيه مساحات خضراء، بركة ديال الماء، ديور كيطلّو على الطبيعة، و أبراج مكتبية عالية، زائد ربط مزيان مع وسائل النقل (الميترو)."
        },
        {
          n: 2, c: "e",
          de: "Viele Wunder der Natur warten direkt vor unserer Haustür – wir kennen jedoch nur die wenigsten davon. Deshalb haben jetzt drei Schweizer Experten 14 tolle Wanderrouten mit den interessantesten „Natur-Geheimtipps“ zusammengestellt. Auf insgesamt 240 Seiten werden in dem Wanderführer besondere Pflanzenarten ebenso detailreich beschrieben wie häufig zu beobachtende oder gefährdete Tierarten und kulturhistorische Besonderheiten der Schweiz. Weiteres Plus des schlauen Buches: Es ist so handlich, dass es sogar in die Hosentasche passt!",
          summaryAr: "تلاتة ديال الخبراء سويسريين صاوبو كتاب صغير وعملي فيه 14 طريق للمشي، كيوصفو فيه نباتات و حيوانات نادرة فالطبيعة، باش الناس يكتشفو أسرار الطبيعة السويسرية."
        },
        {
          n: 3, c: "j",
          de: "Oft ist es schwierig, sich in dem großen Angebot an Restaurants und Gasthäusern in Wien zurechtzufinden, vor allem wenn man nicht viel Geld ausgeben möchte. Die neue Broschüre „Wiener Küche“ listet 80 empfehlenswerte Beisln, Cafés und Restaurants auf, wo man preiswert typische Wiener Speisen genießen kann. Gratis unter Tel. 4000/8080 (Tonband).",
          summaryAr: "باش تلقى مطعم رخيص فمدينة فيينا قاصحة شوية، ولكن واحد الكتيب جديد سميتو 'المطبخ الفييني' جمع 80 بلاصة (مطاعم ومقاهي) فين تقدر تاكل ماكلة فيينية مزيانة وبثمن مناسب للناس لي ماعندهومش فلوس بزاف."
        },
        {
          n: 4, c: "f",
          de: "Die Mehrheit der Österreicher hat am heimischen Schulsystem nichts auszusetzen. In einer im Juni durchgeführten Umfrage des Meinungsforschungsinstituts Ifes gaben 74 Prozent von 2000 Befragten den Schulen die Note 1 oder 2. Befragt nach dem vorhandenen Fremdsprachenangebot sprachen sich immerhin 39 Prozent dafür aus, dass dieser Bereich noch weiter ausgebaut werden sollte. Vor allem die Jungen (57 Prozent) können von anderen Sprachen nicht genug bekommen.",
          summaryAr: "الأغلبية ديال النمساويين عاجبهم النظام التعليمي ديالهم وعطاو للمدارس نقط مزيانة (1 ولا 2) فواحد الاستطلاع. وبزاف منهم، خصوصا الشباب، بغاو المدارس تزيد تطور العروض ديال اللغات الأجنبية."
        },
        {
          n: 5, c: "h",
          de: "Jetzt liegt ein idealer Wegweiser durch den Ernährungsdschungel druckfrisch auf dem Tisch. Das praxisorientierte Schulbuch, das auch für Erwachsene eine empfehlenswerte Lektüre ist, zeigt die wichtigsten Zusammenhänge zwischen Nährstoffen, Lebensmitteln und den täglichen Essgewohnheiten auf und beinhaltet ein umfangreiches Basiswissen über die wesentlichen Fragen zur Ernährung. Dazu gibt es in jedem Kapitel zahlreiche Tipps, Aufgaben und einfache Rezepte zum Probieren. Brigitte Pleyer: „(Er)lebensmittel“, rororo, 15 Euro.",
          summaryAr: "كاين كتاب مدرسي جديد كيشرح العلاقة بين المواد الغذائية والعادات اليومية ديال الماكلة، وهاد الكتاب مزيان حتى للكبار. فيه بزاف ديال النصائح، التمارين، ووصفات ساهلة للتجربة."
        }
      ]
    }
  ];
})();
