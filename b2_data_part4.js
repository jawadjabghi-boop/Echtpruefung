
// ==========================================
// b2_data_part4.js - Lesen Teil 3, Hören Rest, Schreiben, Prüfungen & Placeholders
// ==========================================

// --- 1. Lesen Teil 3 ---
window.B2_EXAMS = window.B2_EXAMS || [];
window.B2_EXAMS.push(
  {
    id: "b2-lesen-t3-aflam",
    title: "Aflam -Fernsehprogramme.",
    sub: "Teile 3",
    level: "B2",
    type: "matching",
    ads: [
      { k: "A", t: "ANZEIGE A", de: "Ullrich Kasten und Hans-Hermann Hertle schildern in ihrer hervorragenden Dokumentation anhand von Archivmaterial minutiös sämtliche Stationen des Mauerbaus. Sie erzählen die Vorgeschichte der Berlin-Krise und beleuchten die Hintergründe der Teilung Deutschlands. Ferner haben sie Zeitzeugen nach ihren Reaktionen auf das einschneidende Ereignis befragt. Zu Wort kommen in dem Film nicht nur namhafte Vertreter der internationalen Politik, sondern auch Grenzsoldaten, Flüchtlinge und Angehörige von Maueropfern", ar: "وثائقي ممتاز كيهضر بالتفصيل على تاريخ بناء جدار برلين و تقسيم ألمانيا.", ma: "وثائقي ممتاز كيهضر بالتفصيل على تاريخ بناء جدار برلين و تقسيم ألمانيا." },
      { k: "B", t: "ANZEIGE B", de: "Ob Klassik, Rock'n'Roll oder Jazz, Joja Wendt, Hamburger Pianist mit enormen Entertainer-Qualitäten, variiert bekannte Songs und stellt seine Fingerfertigkeit auch in eigenen Kompositionen unter Beweis. Stargast in dem heutigen Fernseh-Special ist die Schlagersängerin Michelle mit dem Titel 'Ich schicke dir jetzt einen Engel'.", ar: "برنامج موسيقي خاص مع عازف البيانو جوجا فيندت.", ma: "برنامج موسيقي خاص مع عازف البيانو جوجا فيندت." },
      { k: "C", t: "ANZEIGE C", de: "Gut kochen kann Amanda nicht. Folglich steht ihr kleines, von der Mutter geerbtes Restaurant in Manhattan kurz vor dem Aus. Da entflieht plötzlich ein Krebs aus ihrem Einkaufskorb und sorgt mit seinen Zauberkünsten für lukullische Sensationen. Tom, Manager eines Gourmet-Restaurants an der Fifth Avenue, kommt als einer der ersten in deren Genuss. Amanda hat sich in ihn verliebt, als der schon bekannte Krebs unter Toms Hosenbein flüchtet. Seine Zauber-kräfte werden dringend gebraucht, denn Tom gehört zu den Männern, die ziemlich viel Angst vor Liebesbeziehungen haben.", ar: "فيلم كوميدي رومانسي على وحدا سميتها أماندا لي المطعم ديالها كينقذو واحد السلطعون سحري.", ma: "فيلم كوميدي رومانسي على وحدا سميتها أماندا لي المطعم ديالها كينقذو واحد السلطعون سحري." },
      { k: "D", t: "ANZEIGE D", de: "Aus Sorge um die nationale Sicherheit versteckt der amerikanische Geheimdienst den genialen, aber vermeintlich psychisch kranken Physiker Arthur Vincenti. Der völlig verrückte New Yorker Psychiater Dr. Snow erhält den Auftrag, ihn zu heilen. Immer nachts wird er mit verbundenen Augen zu dem Versteck gebracht. Aber auch einige Gangster sind nicht untätig. Sie haben es auf das Wissen des Geheimnisträgers Vincenti abgesehen, das sie fremden Spionen verkaufen möchten.", ar: "فيلم ديال الجوسسة و التشويق. المخابرات الأمريكية كتخبّي واحد العالم فيزياء.", ma: "فيلم ديال الجوسسة و التشويق. المخابرات الأمريكية كتخبّي واحد العالم فيزياء." },
      { k: "E", t: "ANZEIGE E", de: "Er schreit wie am Spieß, wenn er lange Hosen tragen soll, und lacht sich kaputt, wenn er die Katze in eine Mülltüte gesteckt hat. Alles ist einfacher, als sich um den 5-jährigen Calvin zu kümmern. Doch sein liebevoller Vater Russell, der den Jungen allein erzieht, meistert sämtliche Katastrophen mit Bravour und Geduld. Weil sich Kind und Karriere nicht unter einen Hut bringen ließen, verlor der Jurist einen tollen Job in einer renommierten Chicagoer Anwaltskanzlei. Jetzt sitzt er mit seinem Sohn in einem Dorf in Kansas und arbeitet in der Kanzlei eines Freundes. Die Bekanntschaft mit der attraktiven Beth bringt neuen Schwung in sein Leben. Doch da taucht Russells Ex-Ehefrau wieder auf.", ar: "كوميديا عائلية على أب كايربي بوحدو ولدو الصغير لي مشاغب بزاف.", ma: "كوميديا عائلية على أب كايربي بوحدو ولدو الصغير لي مشاغب بزاف." },
      { k: "F", t: "ANZEIGE F", de: "Hier in Berlin bei meinen Freunden habe ich mein Zuhause hinter mir gelassen. Hier geht's mir gut. Ich bin endlich frei, sagt Sascha. Der 16-Jährige ist einer der Jugendlichen, die hierzulande auf der Straße leben. Sie schlafen in Notunterkünften, Treppenhäusern und U-Bahn-Stationen, betteln tagsüber Passanten um Kleingeld an. Peter Schmidt hat Sascha mehrere Wochen lang begleitet und ihn nach seinen Wünschen und Hoffnungen gefragt. Zudem beleuchtet der Filmautor die individuelle Geschichte des Jugendlichen.", ar: "فيلم وثائقي على ساشا، شاب عندو 16 عام كيعيش فالشارع فبرلين.", ma: "فيلم وثائقي على ساشا، شاب عندو 16 عام كيعيش فالشارع فبرلين." },
      { k: "G", t: "ANZEIGE G", de: "Mit Sandalen und T-Shirt hängen sie in den Felswänden, ihr Handy halten sie für eine Lebensversicherung, die Alpen für einen Freizeitpark, Vierzig Menschen verunglücken jedes Jahr tödlich am Montblanc, bis zu eintausend Einsätze fliegt die Bergwacht Chamonix pro Saison. Filmer Oliver Baumgart begleitet die Retter zwei Wochen lang.", ar: "وثائقي كيتبع فرقة الإنقاذ الجبلي فمون بلون.", ma: "وثائقي كيتبع فرقة الإنقاذ الجبلي فمون بلون." },
      { k: "H", t: "ANZEIGE H", de: "'Schwere Jungs' bildet den Auftakt zu einer sechsteiligen Reihe mit Actionkomödien: Hau-drauf-Filme, wie sie schon unzählige Male mit dem Schläger-Duo Terence Hill und Bud Spencer über den Bildschirm flimmerten. Die Beiden Gauner Joe und Bob fliehen aus dem Gefängnis und finden als Mönche getarnt Unterschlupf in einer Missionsstation.", ar: "فيلم كوميدي ديال الأكشن فيه جوج ديال المجرمين كيهربو من الحبس.", ma: "فيلم كوميدي ديال الأكشن فيه جوج ديال المجرمين كيهربو من الحبس." },
      { k: "I", t: "ANZEIGE I", de: "Nach den Weltcup-Siegen in Willingen und Sapporo stehen die Chancen für das österreichische Team gut, beim Skispringen ganz weit vorn zu landen. Überflieger Gregor Schlierenzauer und sein Mannschaftskollege Thomas Morgenstern sind jedenfalls in blendender Verfassung. Die deutschen Springer Martin Schmitt und Jörg Ritzerfeld werden sich anstrengen müssen. Übertragung von der 120-Meter-Skisprungschanze im Utah Olympic Park.", ar: "نقل مباشر لمنافسة فالقفز على الجليد (سكي).", ma: "نقل مباشر لمنافسة فالقفز على الجليد (سكي)." },
      { k: "J", t: "ANZEIGE J", de: "Man darf gespannt sein, wie viel Spott die für ihre spitzen Zungen bekannten Basler Fasnächtler für das vergangene Jahr übrig haben. DRS überträgt die Straßenfasnacht, den Umzug der Pfeifen- und Trommlergruppen, die ihre Themen präsentieren, live. Die fachkundigen Kommentare zum Karneval am Oberrhein liefern Robert Pichler und der Basler Fastnachtsjournalist Roger Thiriet.", ar: "بث مباشر لكرنفال بازل فالشارع.", ma: "بث مباشر لكرنفال بازل فالشارع." },
      { k: "K", t: "ANZEIGE K", de: "Dreizehn Alben hat die vielköpfige korsische Gruppe 'I Muvrini' um die Brüder Jean-Francois und Alain Bernardini bereits veröffentlicht. Hierzulande galten die 'wilden Schafe' noch bis vor Kurzem als Geheimtipp. Inzwischen sind die Musiker mit ihrer Mischung aus korsischer Folklore, afrikanischen und keltischen Elementen, aber auch aus Jazz, Pop und Cajun bei uns bekannt.", ar: "كيهضر على فرقة موسيقية من كورسيكا سميتها 'إي موفريني'.", ma: "كيهضر على فرقة موسيقية من كورسيكا سميتها 'إي موفريني'." },
      { k: "L", t: "ANZEIGE L", de: "Man sollte meinen, Schauspieler Hendrik Höfgen wäre gegen unmoralische Angebote gefeit. Schließlich feierte er zur Zeit der Weimarer Republik große Erfolge in der Rolle des Mephisto. Der Mann müsste also wissen, wie schnell es gehen kann, dass man seine Seele verkauft. Als die Nazis die Macht ergreifen, stellt Höfgen seine Kunst ganz in den Dienst der neuen Herrscher. Und bald wird er zum Intendanten des Staatstheaters ernannt. Das Drama um Kunst und Politik entstand nach dem gleichnamigen Roman von Klaus Mann.", ar: "فيلم درامي مقتبس من رواية ديال كلاوس مان.", ma: "فيلم درامي مقتبس من رواية ديال كلاوس مان." }
    ],
    items: [
      { n: 1, c: "L", de: "Ein Bekannter möchte einen Film sehen, der nach dem Werk eines Schriftstellers gedreht wurde.", ar: "أحد المعارف يرغب في مشاهدة فيلم تم تصويره بناءً على عمل لأحد الكتاب.", ma: "أحد المعارف يرغب في مشاهدة فيلم تم تصويره بناءً على عمل لأحد الكتاب." },
      { n: 2, c: "I", de: "Bekannte interessieren sich für Wintersportveranstaltungen.", ar: "المعارف يهتمون بالفعاليات الرياضية الشتوية.", ma: "المعارف يهتمون بالفعاليات الرياضية الشتوية." },
      { n: 3, c: "B", de: "Sie suchen eine Musiksendung. Sie mögen besonders Klaviermusik.", ar: "هم يبحثون عن برنامج موسيقي. يحبون بشكل خاص موسيقى البيانو.", ma: "هم يبحثون عن برنامج موسيقي. يحبون بشكل خاص موسيقى البيانو." },
      { n: 4, c: "H", de: "Sie mögen Filme mit viel Action und viel Spaß. Ihre Lieblingshelden können auch mal zuschlagen.", ar: "يحبون الأفلام التي تحتوي على الكثير من الحركة والمرح.", ma: "يحبون الأفلام التي تحتوي على الكثير من الحركة والمرح." },
      { n: 5, c: "X", de: "Ein Bekannter interessiert sich für koreanische Geschichte.", ar: "أحد المعارف مهتم بالتاريخ الكوري.", ma: "أحد المعارف مهتم بالتاريخ الكوري." },
      { n: 6, c: "E", de: "Sie mögen Familienkomödien, besonders mit frechen Kindern.", ar: "يحبون الكوميديا العائلية، خاصة تلك التي تحتوي على أطفال مشاغبين.", ma: "يحبون الكوميديا العائلية، خاصة تلك التي تحتوي على أطفال مشاغبين." },
      { n: 7, c: "A", de: "Eine Bekannte interessiert sich für die Geschichte des bis 1989 geteilten Berlins.", ar: "إحدى المعارف مهتمة بتاريخ برلين المقسمة حتى عام 1989.", ma: "إحدى المعارف مهتمة بتاريخ برلين المقسمة حتى عام 1989." },
      { n: 8, c: "D", de: "Sie sehen gern spannende, aber auch spaßige Agentenfilme.", ar: "يحبون مشاهدة أفلام الجاسوسية المثيرة والممتعة في نفس الوقت.", ma: "يحبون مشاهدة أفلام الجاسوسية المثيرة والممتعة في نفس الوقت." },
      { n: 9, c: "F", de: "Sie würden gern etwas über Großstadtjugendliche erfahren, die am Rand der Gesellschaft leben.", ar: "يرغبون في معرفة المزيد عن الشباب في المدن الكبرى الذين يعيشون على هامش المجتمع.", ma: "يرغبون في معرفة المزيد عن الشباب في المدن الكبرى الذين يعيشون على هامش المجتمع." },
      { n: 10, c: "G", de: "Sie möchten im nächsten Urlaub bergsteigen und sich über die Risiken informieren.", ar: "يرغبون في تسلق الجبال في العطلة القادمة والتعرف على المخاطر المرتبطة بذلك.", ma: "يرغبون في تسلق الجبال في العطلة القادمة والتعرف على المخاطر المرتبطة بذلك." }
    ]
  },
  {
    id: "b2-lesen-t3-aflam-mod1",
    title: "Aflam -Fernsehprogramme (معدل)",
    sub: "Teile 3",
    level: "B2",
    type: "matching",
    ads: [
      { k: "A", t: "ANZEIGE A", de: "Ullrich Kasten und Hans-Hermann Hertle schildern in ihrer hervorragenden Dokumentation anhand von Archivmaterial minutiös sämtliche Stationen des Mauerbaus. Sie erzählen die Vorgeschichte der Berlin-Krise und beleuchten die Hintergründe der Teilung Deutschlands. Ferner haben sie Zeitzeugen nach ihren Reaktionen auf das einschneidende Ereignis befragt. Zu Wort kommen in dem Film nicht nur namhafte Vertreter der internationalen Politik, sondern auch Grenzsoldaten, Flüchtlinge und Angehörige von Maueropfern", ar: "وثائقي ممتاز كيهضر بالتفصيل على تاريخ بناء جدار برلين و تقسيم ألمانيا.", ma: "وثائقي ممتاز كيهضر بالتفصيل على تاريخ بناء جدار برلين و تقسيم ألمانيا." },
      { k: "B", t: "ANZEIGE B", de: "Ob Klassik, Rock'n'Roll oder Jazz, Joja Wendt, Hamburger Pianist mit enormen Entertainer-Qualitäten, variiert bekannte Songs und stellt seine Fingerfertigkeit auch in eigenen Kompositionen unter Beweis. Stargast in dem heutigen Fernseh-Special ist die Schlagersängerin Michelle mit dem Titel 'Ich schicke dir jetzt einen Engel'.", ar: "برنامج موسيقي خاص مع عازف البيانو جوجا فيندت.", ma: "برنامج موسيقي خاص مع عازف البيانو جوجا فيندت." },
      { k: "C", t: "ANZEIGE C", de: "Gut kochen kann Amanda nicht. Folglich steht ihr kleines, von der Mutter geerbtes Restaurant in Manhattan kurz vor dem Aus. Da entflieht plötzlich ein Krebs aus ihrem Einkaufskorb und sorgt mit seinen Zauberkünsten für lukullische Sensationen. Tom, Manager eines Gourmet-Restaurants an der Fifth Avenue, kommt als einer der ersten in deren Genuss. Amanda hat sich in ihn verliebt, als der schon bekannte Krebs unter Toms Hosenbein flüchtet. Seine Zauber-kräfte werden dringend gebraucht, denn Tom gehört zu den Männern, die ziemlich viel Angst vor Liebesbeziehungen haben.", ar: "فيلم كوميدي رومانسي على وحدا سميتها أماندا لي المطعم ديالها كينقذو واحد السلطعون سحري.", ma: "فيلم كوميدي رومانسي على وحدا سميتها أماندا لي المطعم ديالها كينقذو واحد السلطعون سحري." },
      { k: "D", t: "ANZEIGE D", de: "Aus Sorge um die nationale Sicherheit versteckt der amerikanische Geheimdienst den genialen, aber vermeintlich psychisch kranken Physiker Arthur Vincenti. Der völlig verrückte New Yorker Psychiater Dr. Snow erhält den Auftrag, ihn zu heilen. Immer nachts wird er mit verbundenen Augen zu dem Versteck gebracht. Aber auch einige Gangster sind nicht untätig. Sie haben es auf das Wissen des Geheimnisträgers Vincenti abgesehen, das sie fremden Spionen verkaufen möchten.", ar: "فيلم ديال الجوسسة و التشويق. المخابرات الأمريكية كتخبّي واحد العالم فيزياء.", ma: "فيلم ديال الجوسسة و التشويق. المخابرات الأمريكية كتخبّي واحد العالم فيزياء." },
      { k: "E", t: "ANZEIGE E", de: "Er schreit wie am Spieß, wenn er lange Hosen tragen soll, und lacht sich kaputt, wenn er die Katze in eine Mülltüte gesteckt hat. Alles ist einfacher, als sich um den 5-jährigen Calvin zu kümmern. Doch sein liebevoller Vater Russell, der den Jungen allein erzieht, meistert sämtliche Katastrophen mit Bravour und Geduld. Weil sich Kind und Karriere nicht unter einen Hut bringen ließen, verlor der Jurist einen tollen Job in einer renommierten Chicagoer Anwaltskanzlei. Jetzt sitzt er mit seinem Sohn in einem Dorf in Kansas und arbeitet in der Kanzlei eines Freundes. Die Bekanntschaft mit der attraktiven Beth bringt neuen Schwung in sein Leben. Doch da taucht Russells Ex-Ehefrau wieder auf.", ar: "كوميديا عائلية على أب كايربي بوحدو ولدو الصغير لي مشاغب بزاف.", ma: "كوميديا عائلية على أب كايربي بوحدو ولدو الصغير لي مشاغب بزاف." },
      { k: "F", t: "ANZEIGE F", de: "Hier in Berlin bei meinen Freunden habe ich mein Zuhause hinter mir gelassen. Hier geht's mir gut. Ich bin endlich frei, sagt Sascha. Der 16-Jährige ist einer der Jugendlichen, die hierzulande auf der Straße leben. Sie schlafen in Notunterkünften, Treppenhäusern und U-Bahn-Stationen, betteln tagsüber Passanten um Kleingeld an. Peter Schmidt hat Sascha mehrere Wochen lang begleitet und ihn nach seinen Wünschen und Hoffnungen gefragt. Zudem beleuchtet der Filmautor die individuelle Geschichte des Jugendlichen.", ar: "فيلم وثائقي على ساشا، شاب عندو 16 عام كيعيش فالشارع فبرلين.", ma: "فيلم وثائقي على ساشا، شاب عندو 16 عام كيعيش فالشارع فبرلين." },
      { k: "G", t: "ANZEIGE G", de: "Mit Sandalen und T-Shirt hängen sie in den Felswänden, ihr Handy halten sie für eine Lebensversicherung, die Alpen für einen Freizeitpark, Vierzig Menschen verunglücken jedes Jahr tödlich am Montblanc, bis zu eintausend Einsätze fliegt die Bergwacht Chamonix pro Saison. Filmer Oliver Baumgart begleitet die Retter zwei Wochen lang.", ar: "وثائقي كيتبع فرقة الإنقاذ الجبلي فمون بلون.", ma: "وثائقي كيتبع فرقة الإنقاذ الجبلي فمون بلون." },
      { k: "H", t: "ANZEIGE H", de: "'Schwere Jungs' bildet den Auftakt zu einer sechsteiligen Reihe mit Actionkomödien: Hau-drauf-Filme, wie sie schon unzählige Male mit dem Schläger-Duo Terence Hill und Bud Spencer über den Bildschirm flimmerten. Die Beiden Gauner Joe und Bob fliehen aus dem Gefängnis und finden als Mönche getarnt Unterschlupf in einer Missionsstation.", ar: "فيلم كوميدي ديال الأكشن فيه جوج ديال المجرمين كيهربو من الحبس.", ma: "فيلم كوميدي ديال الأكشن فيه جوج ديال المجرمين كيهربو من الحبس." },
      { k: "I", t: "ANZEIGE I", de: "Nach den Weltcup-Siegen in Willingen und Sapporo stehen die Chancen für das österreichische Team gut, beim Skispringen ganz weit vorn zu landen. Überflieger Gregor Schlierenzauer und sein Mannschaftskollege Thomas Morgenstern sind jedenfalls in blendender Verfassung. Die deutschen Springer Martin Schmitt und Jörg Ritzerfeld werden sich anstrengen müssen. Übertragung von der 120-Meter-Skisprungschanze im Utah Olympic Park.", ar: "نقل مباشر لمنافسة فالقفز على الجليد (سكي).", ma: "نقل مباشر لمنافسة فالقفز على الجليد (سكي)." },
      { k: "J", t: "ANZEIGE J", de: "Man darf gespannt sein, wie viel Spott die für ihre spitzen Zungen bekannten Basler Fasnächtler für das vergangene Jahr übrig haben. DRS überträgt die Straßenfasnacht, den Umzug der Pfeifen- und Trommlergruppen, die ihre Themen präsentieren, live. Die fachkundigen Kommentare zum Karneval am Oberrhein liefern Robert Pichler und der Basler Fastnachtsjournalist Roger Thiriet.", ar: "بث مباشر لكرنفال بازل فالشارع.", ma: "بث مباشر لكرنفال بازل فالشارع." },
      { k: "K", t: "ANZEIGE K", de: "Dreizehn Alben hat die vielköpfige korsische Gruppe 'I Muvrini' um die Brüder Jean-Francois und Alain Bernardini bereits veröffentlicht. Hierzulande galten die 'wilden Schafe' noch bis vor Kurzem als Geheimtipp. Inzwischen sind die Musiker mit ihrer Mischung aus korsischer Folklore, afrikanischen und keltischen Elementen, aber auch aus Jazz, Pop und Cajun bei uns bekannt.", ar: "كيهضر على فرقة موسيقية من كورسيكا سميتها 'إي موفريني'.", ma: "كيهضر على فرقة موسيقية من كورسيكا سميتها 'إي موفريني'." },
      { k: "L", t: "ANZEIGE L", de: "Man sollte meinen, Schauspieler Hendrik Höfgen wäre gegen unmoralische Angebote gefeit. Schließlich feierte er zur Zeit der Weimarer Republik große Erfolge in der Rolle des Mephisto. Der Mann müsste also wissen, wie schnell es gehen kann, dass man seine Seele verkauft. Als die Nazis die Macht ergreifen, stellt Höfgen seine Kunst ganz in den Dienst der neuen Herrscher. Und bald wird er zum Intendanten des Staatstheaters ernannt. Das Drama um Kunst und Politik entstand nach dem gleichnamigen Roman von Klaus Mann.", ar: "فيلم درامي مقتبس من رواية ديال كلاوس مان.", ma: "فيلم درامي مقتبس من رواية ديال كلاوس مان." }
    ],
    items: [
      { n: 1, c: "L", de: "Ein Bekannter möchte einen Film sehen, der nach dem Werk eines Schriftstellers gedreht wurde.", ar: "أحد المعارف يرغب في مشاهدة فيلم تم تصويره بناءً على عمل لأحد الكتاب.", ma: "أحد المعارف يرغب في مشاهدة فيلم تم تصويره بناءً على عمل لأحد الكتاب." },
      { n: 2, c: "I", de: "Ihre Bekannten verfolgen gern sportliche Wettkämpfe.", ar: "أصدقاؤهم يحبون متابعة المنافسات الرياضية.", ma: "أصدقاؤهم يحبون متابعة المنافسات الرياضية." },
      { n: 3, c: "B", de: "Sie suchen eine abwechslungsreiche Musiksendung mit Klaviermusik.", ar: "إنهم يبحثون عن برنامج موسيقي متنوع يتضمن موسيقى البيانو.", ma: "إنهم يبحثون عن برنامج موسيقي متنوع يتضمن موسيقى البيانو." },
      { n: 4, c: "H", de: "Sie mögen Filme mit viel Action und viel Spaß. Ihre Lieblingshelden können auch mal zuschlagen.", ar: "إنهم يحبون الأفلام التي تحتوي على الكثير من الحركة والمرح.", ma: "إنهم يحبون الأفلام التي تحتوي على الكثير من الحركة والمرح." },
      { n: 5, c: "X", de: "Ein Bekannter interessiert sich für koreanische Geschichte.", ar: "أحد المعارف يهتم بالتاريخ الكوري.", ma: "أحد المعارف يهتم بالتاريخ الكوري." },
      { n: 6, c: "E", de: "Sie mögen Familienkomödien, besonders mit frechen Kindern.", ar: "إنهم يحبون الكوميديا العائلية، خاصة تلك التي تحتوي على أطفال مشاغبين.", ma: "إنهم يحبون الكوميديا العائلية، خاصة تلك التي تحتوي على أطفال مشاغبين." },
      { n: 7, c: "A", de: "Eine Bekannte interessiert sich für informative Beiträge zur neueren Geschichte.", ar: "إحدى المعارف تهتم بالمقالات المعلوماتية حول التاريخ الحديث.", ma: "إحدى المعارف تهتم بالمقالات المعلوماتية حول التاريخ الحديث." },
      { n: 8, c: "D", de: "Sie sehen gern spannende, aber auch spaßige Agentenfilme.", ar: "إنهم يحبون مشاهدة أفلام الجاسوسية المثيرة والممتعة في نفس الوقت.", ma: "إنهم يحبون مشاهدة أفلام الجاسوسية المثيرة والممتعة في نفس الوقت." },
      { n: 9, c: "F", de: "Sie würden gern etwas über Großstadtjugendliche erfahren, die am Rand der Gesellschaft leben.", ar: "يرغبون في معرفة المزيد عن شباب المدن الكبرى الذين يعيشون على هامش المجتمع.", ma: "يرغبون في معرفة المزيد عن شباب المدن الكبرى الذين يعيشون على هامش المجتمع." },
      { n: 10, c: "G", de: "Sie möchten im nächsten Urlaub bergsteigen und sich über die Risiken informieren.", ar: "يرغبون في تسلق الجبال في الإجازة القادمة ويريدون الاطلاع على المخاطر المحتملة.", ma: "يرغبون في تسلق الجبال في الإجازة القادمة ويريدون الاطلاع على المخاطر المحتملة." }
    ]
  },
  {
    id: "b2-lesen-t3-sport-anzeigen",
    title: "Sport Ist Gesund إعلانات",
    sub: "Teile 3",
    level: "B2",
    type: "matching",
    ads: [
      { k: "A", t: "ANZEIGE A", de: "Die Nachfrage nach individueller Farb- und Stilberatung ist groß. Denn wer heute im Geschäfts- wie auch im Privatleben erfolgreich sein möchte, muss sich in Outfit und Benehmen vorteilhaft präsentieren können. Der Leitfaden zeigt Ihnen, wie Sie sich selbst am besten in Szene setzen. Von der passenden und farblich stimmigen Garderobe über Make-up und Accessoires bis zu modernen Umgangsformen. Nutzen Sie also diesen \"Kurs\" als Eintrittskarte in diese reizvolle Welt der Selbstdarstellung. Sie werden garantiert mit einem überzeugenden und gewinnenden persönlichen Auftritt davon profitieren.", ar: "الطلب على استشارات تنسيق الألوان والمظهر كبير بزاف.", ma: "الطلب على استشارات تنسيق الألوان والمظهر كبير بزاف." },
      { k: "B", t: "ANZEIGE B", de: "Die meisten Menschen kennen keine Strategien, wie sie ihr Lernverhalten und die Fähigkeit, sich Informationen zu merken, gezielt trainieren können. Dieses Buch gibt zunächst einen Überblick, wie das menschliche Gedächtnis funktioniert, und bietet dann eine Fülle von Techniken an, mit denen auch Ungeübte sich das Lernen und Arbeiten leichter machen können.", ar: "أغلب الناس ما كيعرفوش شي طرق باش يحسنو من القدرة ديالهم على التعلم.", ma: "أغلب الناس ما كيعرفوش شي طرق باش يحسنو من القدرة ديالهم على التعلم." },
      { k: "C", t: "ANZEIGE C", de: "Dieses erstmals 1788 erschienene Buch handelt von dem Umgang der Menschen miteinander und gibt Ratschläge, wie man sich im Umgang mit Menschen verschiedenster Alters- und Rangstufen richtig verhält. Es definiert, was Gutes und was schlechtes Verhalten ist, und galt so lange Zeit als ein Leitfaden für “richtiges” Benehmen.", ar: "هذا النص يتحدث عن كتاب قديم جداً، نُشر لأول مرة عام 1788.", ma: "هذا النص يتحدث عن كتاب قديم جداً، نُشر لأول مرة عام 1788." },
      { k: "D", t: "ANZEIGE D", de: "Tim Gallwey entwickelte die Theorie vom Tennis-Spiel, das sich im Kopf abspielt. Er zeigt, wie jeder sein Leben frei von Angst und mit Eleganz spielen kann, ohne in Selbstzweifel oder Unkonzentriertheit zu verfallen. Das Gallwey'sche Tennisspiel setzt ungeahnte Energien frei und zeigt das grenzenlose Potential des menschlichen Körpers und Geistes, wenn es darum geht, seine Lebensziele zu verfolgen und zu erreichen.", ar: "الكاتب تيم غالوي طور واحد النظرية سماها 'لعبة التنس الداخلية'.", ma: "الكاتب تيم غالوي طور واحد النظرية سماها 'لعبة التنس الداخلية'." },
      { k: "E", t: "ANZEIGE E", de: "Jeder Mensch kann seine kommunikativen Möglichkeiten entdecken und damit sein Leben bereichern. Die Themen des Buches sind: Die Grundlagen der Kommunikation, Rede und Vortrag, Gespräche erfolgreich führen, Sicherheit gewinnen und Redeängste überwinden, Zeitmanagement für Redner und Konferenzleiter und vieles mehr. Ein ausführlicher Praxisteil mit zahlreichen Übungen ermöglicht es dem Leser, seine rhetorischen Fähigkeiten zu trainieren.", ar: "كل شخص عندو القدرة يكتشف الإمكانيات ديالو فالتواصل ويحسن من حياتو.", ma: "كل شخص عندو القدرة يكتشف الإمكانيات ديالو فالتواصل ويحسن من حياتو." },
      { k: "F", t: "ANZEIGE F", de: "Gute Umgangsformen sind wieder “in”. Aber gilt das auch in der Schule? Auf humorvolle Weise erzählt die Autorin aus ihrem Alltag als Lehrerin an einer Realschule. Von gutem Benehmen kann da nicht immer die Rede sein - übrigens auch nicht bei den Eltern.", ar: "هذا النص كيهضر على كتاب كيطرح سؤال مهم: واخا كيقولو أن آداب السلوك رجعات للموضة، واش هادشي كاين بصح فالمدرسة؟", ma: "هذا النص كيهضر على كتاب كيطرح سؤال مهم: واخا كيقولو أن آداب السلوك رجعات للموضة، واش هادشي كاين بصح فالمدرسة؟" },
      { k: "G", t: "ANZEIGE G", de: "Frieder Schulze \"Reden wir miteinander oder aneinander vorbei?\" Manche Missverständnisse entstehen, wenn Menschen miteinander reden, besonders im privaten Bereich erleben wir das oft. Wenn Kommunikation erfolgreich sein soll, ist die Fähigkeit erforderlich, den anderen zu durchschauen und seelische Vorgänge und menschliche Probleme zu erkennen. Viele Beispiele zeigen, wie psychologische Aspekte menschliche Kommunikation verkomplizieren können und wie man damit am besten klar kommen kann.", ar: "هذا النص كيهضر على كتاب ديال 'فريدر شولز' بعنوان 'واش كنهضرو مع بعضياتنا ولا كل واحد فجهة؟'.", ma: "هذا النص كيهضر على كتاب ديال 'فريدر شولز' بعنوان 'واش كنهضرو مع بعضياتنا ولا كل واحد فجهة؟'." },
      { k: "H", t: "ANZEIGE H", de: "Der Körper lügt nicht, Gesten und Gebärden decken die Ebene des Unbewusstsein auf: Wer einen erhobenen Zeigefinger oder eine gerümpfte Nase sieht, versteht sofort, was der Gesprächspartner meint, auch wenn der mit Worten etwas anderes sagt. Dieses Buch gibt einen anschaulichen Überblick über die Signale, die wir ständig mit unserem Körper senden, und hilft uns zu verstehen, was jemand in Wahrheit gerade denkt und meint.", ar: "هذا النص كيهضر على كتاب الفكرة ديالو هي أن 'الجسد لا يكذب'.", ma: "هذا النص كيهضر على كتاب الفكرة ديالو هي أن 'الجسد لا يكذب'." },
      { k: "I", t: "ANZEIGE I", de: "Rolph Barth \"Basiswissen: Bewerbungstraining\" Die Konkurrenz auf dem Arbeitsmarkt um immer knapper werdende freie Stellen ist groß. Umso wichtiger ist es zu wissen, wie man sich richtig bewirbt. Dieses Buch gibt Arbeitsuchenden umfassende Informationen zur erfolgreichen Bewerbung und bereitet optimal auf das Vorstellungsgespräch vor. Im Übungsteil werden gute Formulierungen für das Anschreiben und das sichere Auftreten des Bewerbers im Gespräch trainiert.", ar: "هذا النص كيهضر على كتاب لـ 'رولف بارت' حول كيفية تقديم طلب عمل ناجح.", ma: "هذا النص كيهضر على كتاب لـ 'رولف بارت' حول كيفية تقديم طلب عمل ناجح." },
      { k: "J", t: "ANZEIGE J", de: "Brigitte Hübner \"Richtig präsentieren\" Dieses Buch ist ein Leitfaden für alle, die Teamsitzungen, Besprechungen, Workshops und Konferenzen durchführen. Anhand vieler praktischer Beispiele erhält der Leser Anregungen zum gekonnten visualisieren, zur gut geplanten und sicher durchgeführten Präsentation und zur effektiv gestalteten Besprechung. Es zeigt, wie durch den Einsatz von Bildern und Grafiken Präsentationen aufgelockert und Informationen besser verstanden werden können.", ar: "هذا النص كيهضر على كتاب لـ 'بريجيت هوبنر' بعنوان 'فن التقديم الصحيح'.", ma: "هذا النص كيهضر على كتاب لـ 'بريجيت هوبنر' بعنوان 'فن التقديم الصحيح'." },
      { k: "K", t: "ANZEIGE K", de: "Helga Sinn-Krummacher \"Delfin oder Delphin? So schreibt man das jetzt richtig\" Dieses Trainingsbuch ist für den Arbeitsplatz und für zu Hause gedacht. Auf humorvolle Art werden die neuen Rechtschreibregeln der deutschen Sprache vorgestellt und eingeübt. Es enthält außerdem die neue amtliche Wortliste zur Rechtschreibung und die neuen Zeichensetzungsregeln.", ar: "هذا النص كيهضر على واحد الكتاب تدريبي لـ 'هيلجا سين-كرومماخر' كيعلم قواعد الإملاء الجديدة.", ma: "هذا النص كيهضر على واحد الكتاب تدريبي لـ 'هيلجا سين-كرومماخر' كيعلم قواعد الإملاء الجديدة." },
      { k: "L", t: "ANZEIGE L", de: "Viele Menschen wissen nicht mehr, wo Ihnen der Kopf steht. Zu viele Termine und Aufgaben stellen Sie unter ständigen Zeitdruck. Mit Zeitmanagement lernen Sie, wie Sie Ihre Zeit so einteilen können, dass Sie wieder Zeit zum Leben haben. Sie erkennen Ihre persönlichen Zeitdiebe, Sie lernen, Prioritäten und erreichbare Ziele zu setzen. Durch das Führen eines Zeitplanbuchs lernen Sie wieder (und dauerhaft), aus der Zeitfalle herauszukommen.", ar: "بزاف ديال الناس كيحسو براسهم تايهين بسبب كثرة المواعيد والمهام.", ma: "بزاف ديال الناس كيحسو براسهم تايهين بسبب كثرة المواعيد والمهام." }
    ],
    items: [
      { n: 1, c: "X", de: "Eine Bekannte interessiert sich für Bücher über den Tennissport.", ar: "معرفة تهتم بكتب عن رياضة التنس.", ma: "معرفة تهتم بكتب عن رياضة التنس." },
      { n: 2, c: "L", de: "Ein befreundetes Ehepaar steht andauernd unter Stress und möchte wieder mehr Zeit für sich und andere haben", ar: "زوجان صديقان يعيشان تحت ضغط مستمر ويرغبان في تخصيص وقت أكثر لأنفسهم وللآخرين.", ma: "زوجان صديقان يعيشان تحت ضغط مستمر ويرغبان في تخصيص وقت أكثر لأنفسهم وللآخرين." },
      { n: 3, c: "X", de: "Eine Bekannte möchte bei ihren Partys eine perfekte Gastgeberin sein", ar: "معرفة ترغب في أن تكون مضيفة مثالية في حفلاتها.", ma: "معرفة ترغب في أن تكون مضيفة مثالية في حفلاتها." },
      { n: 4, c: "B", de: "Eine Studentin sucht Informationen, wie sie besser und systematischer lernen kann.", ar: "طالبة تبحث عن معلومات حول كيفية التعلم بشكل أفضل وأكثر تنظيمًا.", ma: "طالبة تبحث عن معلومات حول كيفية التعلم بشكل أفضل وأكثر تنظيمًا." },
      { n: 5, c: "H", de: "Ein Bekannter möchte wissen, welche Botschaften durch Gestik und Mimik transportiert werden.", ar: "معرفة يرغب في معرفة الرسائل التي تنقلها الإيماءات وتعبيرات الوجه.", ma: "معرفة يرغب في معرفة الرسائل التي تنقلها الإيماءات وتعبيرات الوجه." },
      { n: 6, c: "A", de: "Eine Bekannte möchte ihr äußeres Erscheinungsbild optimieren.", ar: "معرفة ترغب في تحسين مظهرها الخارجي.", ma: "معرفة ترغب في تحسين مظهرها الخارجي." },
      { n: 7, c: "I", de: "Ein Bekannter ist sich noch unsicher, wie er sich bei einem Vorstellungsgespräch am besten präsentiert.", ar: "معرفة لا يزال مترددًا في كيفية تقديم نفسه بشكل مثالي في مقابلة العمل.", ma: "معرفة لا يزال مترددًا في كيفية تقديم نفسه بشكل مثالي في مقابلة العمل." },
      { n: 8, c: "C", de: "Ein Bekannter schreibt an einer Hausarbeit über gesellschaftliche Normen und Verhaltensregeln verschiedener Jahrhunderte.", ar: "معرفة يكتب بحثًا عن المعايير الاجتماعية وقواعد السلوك عبر القرون المختلفة.", ma: "معرفة يكتب بحثًا عن المعايير الاجتماعية وقواعد السلوك عبر القرون المختلفة." },
      { n: 9, c: "X", de: "Ein Bekannter möchte Kalligraphie (Schmuckschriften) lernen.", ar: "معرفة يرغب في تعلم فن الخط (الكتابات الزخرفية).", ma: "معرفة يرغب في تعلم فن الخط (الكتابات الزخرفية)." },
      { n: 10, c: "E", de: "Eine Bekannte ist sehr verunsichert, weil sie auf Konferenzen immer wieder Angst hat, frei zu sprechen.", ar: "معرفة تشعر بعدم الثقة لأنها تخشى التحدث بحرية في المؤتمرات.", ma: "معرفة تشعر بعدم الثقة لأنها تخشى التحدث بحرية في المؤتمرات." }
    ]
  },
  {
    id: "b2-lesen-t3-sport-anzeigen-mod1",
    title: "Sport Ist Gesund إعلانات (المعدل)",
    sub: "Teile 3",
    level: "B2",
    type: "matching",
    ads: [
      { k: "A", t: "ANZEIGE A", de: "Die Nachfrage nach individueller Farb- und Stilberatung ist groß. Denn wer heute im Geschäfts- wie auch im Privatleben erfolgreich sein möchte, muss sich in Outfit und Benehmen vorteilhaft präsentieren können. Der Leitfaden zeigt Ihnen, wie Sie sich selbst am besten in Szene setzen. Von der passenden und farblich stimmigen Garderobe über Make-up und Accessoires bis zu modernen Umgangsformen. Nutzen Sie also diesen \"Kurs\" als Eintrittskarte in diese reizvolle Welt der Selbstdarstellung. Sie werden garantiert mit einem überzeugenden und gewinnenden persönlichen Auftritt davon profitieren.", ar: "الطلب على استشارات تنسيق الألوان والمظهر كبير بزاف.", ma: "الطلب على استشارات تنسيق الألوان والمظهر كبير بزاف." },
      { k: "B", t: "ANZEIGE B", de: "Die meisten Menschen kennen keine Strategien, wie sie ihr Lernverhalten und die Fähigkeit, sich Informationen zu merken, gezielt trainieren können. Dieses Buch gibt zunächst einen Überblick, wie das menschliche Gedächtnis funktioniert, und bietet dann eine Fülle von Techniken an, mit denen auch Ungeübte sich das Lernen und Arbeiten leichter machen können.", ar: "أغلب الناس ما كيعرفوش شي طرق باش يحسنو من القدرة ديالهم على التعلم.", ma: "أغلب الناس ما كيعرفوش شي طرق باش يحسنو من القدرة ديالهم على التعلم." },
      { k: "C", t: "ANZEIGE C", de: "Dieses erstmals 1788 erschienene Buch handelt von dem Umgang der Menschen miteinander und gibt Ratschläge, wie man sich im Umgang mit Menschen verschiedenster Alters- und Rangstufen richtig verhält. Es definiert, was Gutes und was schlechtes Verhalten ist, und galt so lange Zeit als ein Leitfaden für “richtiges” Benehmen.", ar: "هذا النص يتحدث عن كتاب قديم جداً، نُشر لأول مرة عام 1788.", ma: "هذا النص يتحدث عن كتاب قديم جداً، نُشر لأول مرة عام 1788." },
      { k: "D", t: "ANZEIGE D", de: "Tim Gallwey entwickelte die Theorie vom Tennis-Spiel, das sich im Kopf abspielt. Er zeigt, wie jeder sein Leben frei von Angst und mit Eleganz spielen kann, ohne in Selbstzweifel oder Unkonzentriertheit zu verfallen. Das Gallwey'sche Tennisspiel setzt ungeahnte Energien frei und zeigt das grenzenlose Potential des menschlichen Körpers und Geistes, wenn es darum geht, seine Lebensziele zu verfolgen und zu erreichen.", ar: "الكاتب تيم غالوي طور واحد النظرية سماها 'لعبة التنس الداخلية'.", ma: "الكاتب تيم غالوي طور واحد النظرية سماها 'لعبة التنس الداخلية'." },
      { k: "E", t: "ANZEIGE E", de: "Jeder Mensch kann seine kommunikativen Möglichkeiten entdecken und damit sein Leben bereichern. Die Themen des Buches sind: Die Grundlagen der Kommunikation, Rede und Vortrag, Gespräche erfolgreich führen, Sicherheit gewinnen und Redeängste überwinden, Zeitmanagement für Redner und Konferenzleiter und vieles mehr. Ein ausführlicher Praxisteil mit zahlreichen Übungen ermöglicht es dem Leser, seine rhetorischen Fähigkeiten zu trainieren.", ar: "كل شخص عندو القدرة يكتشف الإمكانيات ديالو فالتواصل ويحسن من حياتو.", ma: "كل شخص عندو القدرة يكتشف الإمكانيات ديالو فالتواصل ويحسن من حياتو." },
      { k: "F", t: "ANZEIGE F", de: "Gute Umgangsformen sind wieder “in”. Aber gilt das auch in der Schule? Auf humorvolle Weise erzählt die Autorin aus ihrem Alltag als Lehrerin an einer Realschule. Von gutem Benehmen kann da nicht immer die Rede sein - übrigens auch nicht bei den Eltern.", ar: "هذا النص كيهضر على كتاب كيطرح سؤال مهم: واخا كيقولو أن آداب السلوك رجعات للموضة، واش هادشي كاين بصح فالمدرسة؟", ma: "هذا النص كيهضر على كتاب كيطرح سؤال مهم: واخا كيقولو أن آداب السلوك رجعات للموضة، واش هادشي كاين بصح فالمدرسة؟" },
      { k: "G", t: "ANZEIGE G", de: "Frieder Schulze \"Reden wir miteinander oder aneinander vorbei?\" Manche Missverständnisse entstehen, wenn Menschen miteinander reden, besonders im privaten Bereich erleben wir das oft. Wenn Kommunikation erfolgreich sein soll, ist die Fähigkeit erforderlich, den anderen zu durchschauen und seelische Vorgänge und menschliche Probleme zu erkennen. Viele Beispiele zeigen, wie psychologische Aspekte menschliche Kommunikation verkomplizieren können und wie man damit am besten klar kommen kann.", ar: "هذا النص كيهضر على كتاب ديال 'فريدر شولز' بعنوان 'واش كنهضرو مع بعضياتنا ولا كل واحد فجهة؟'.", ma: "هذا النص كيهضر على كتاب ديال 'فريدر شولز' بعنوان 'واش كنهضرو مع بعضياتنا ولا كل واحد فجهة؟'." },
      { k: "H", t: "ANZEIGE H", de: "Der Körper lügt nicht, Gesten und Gebärden decken die Ebene des Unbewusstsein auf: Wer einen erhobenen Zeigefinger oder eine gerümpfte Nase sieht, versteht sofort, was der Gesprächspartner meint, auch wenn der mit Worten etwas anderes sagt. Dieses Buch gibt einen anschaulichen Überblick über die Signale, die wir ständig mit unserem Körper senden, und hilft uns zu verstehen, was jemand in Wahrheit gerade denkt und meint.", ar: "هذا النص كيهضر على كتاب الفكرة ديالو هي أن 'الجسد لا يكذب'.", ma: "هذا النص كيهضر على كتاب الفكرة ديالو هي أن 'الجسد لا يكذب'." },
      { k: "I", t: "ANZEIGE I", de: "Rolph Barth \"Basiswissen: Bewerbungstraining\" Die Konkurrenz auf dem Arbeitsmarkt um immer knapper werdende freie Stellen ist groß. Umso wichtiger ist es zu wissen, wie man sich richtig bewirbt. Dieses Buch gibt Arbeitsuchenden umfassende Informationen zur erfolgreichen Bewerbung und bereitet optimal auf das Vorstellungsgespräch vor. Im Übungsteil werden gute Formulierungen für das Anschreiben und das sichere Auftreten des Bewerbers im Gespräch trainiert.", ar: "هذا النص كيهضر على كتاب لـ 'رولف بارت' حول كيفية تقديم طلب عمل ناجح.", ma: "هذا النص كيهضر على كتاب لـ 'رولف بارت' حول كيفية تقديم طلب عمل ناجح." },
      { k: "J", t: "ANZEIGE J", de: "Brigitte Hübner \"Richtig präsentieren\" Dieses Buch ist ein Leitfaden für alle, die Teamsitzungen, Besprechungen, Workshops und Konferenzen durchführen. Anhand vieler praktischer Beispiele erhält der Leser Anregungen zum gekonnten visualisieren, zur gut geplanten und sicher durchgeführten Präsentation und zur effektiv gestalteten Besprechung. Es zeigt, wie durch den Einsatz von Bildern und Grafiken Präsentationen aufgelockert und Informationen besser verstanden werden können.", ar: "هذا النص كيهضر على كتاب لـ 'بريجيت هوبنر' بعنوان 'فن التقديم الصحيح'.", ma: "هذا النص كيهضر على كتاب لـ 'بريجيت هوبنر' بعنوان 'فن التقديم الصحيح'." },
      { k: "K", t: "ANZEIGE K", de: "Helga Sinn-Krummacher \"Delfin oder Delphin? So schreibt man das jetzt richtig\" Dieses Trainingsbuch ist für den Arbeitsplatz und für zu Hause gedacht. Auf humorvolle Art werden die neuen Rechtschreibregeln der deutschen Sprache vorgestellt und eingeübt. Es enthält außerdem die neue amtliche Wortliste zur Rechtschreibung und die neuen Zeichensetzungsregeln.", ar: "هذا النص كيهضر على واحد الكتاب تدريبي لـ 'هيلجا سين-كرومماخر' كيعلم قواعد الإملاء الجديدة.", ma: "هذا النص كيهضر على واحد الكتاب تدريبي لـ 'هيلجا سين-كرومماخر' كيعلم قواعد الإملاء الجديدة." },
      { k: "L", t: "ANZEIGE L", de: "Viele Menschen wissen nicht mehr, wo Ihnen der Kopf steht. Zu viele Termine und Aufgaben stellen Sie unter ständigen Zeitdruck. Mit Zeitmanagement lernen Sie, wie Sie Ihre Zeit so einteilen können, dass Sie wieder Zeit zum Leben haben. Sie erkennen Ihre persönlichen Zeitdiebe, Sie lernen, Prioritäten und erreichbare Ziele zu setzen. Durch das Führen eines Zeitplanbuchs lernen Sie wieder (und dauerhaft), aus der Zeitfalle herauszukommen.", ar: "بزاف ديال الناس كيحسو براسهم تايهين بسبب كثرة المواعيد والمهام.", ma: "بزاف ديال الناس كيحسو براسهم تايهين بسبب كثرة المواعيد والمهام." }
    ],
    items: [
      { n: 1, c: "X", de: "Eine Bekannte interessiert sich für Bücher über den Tennissport.", ar: "إحدى المعارف تهتم بكتب عن رياضة التنس.", ma: "إحدى المعارف تهتم بكتب عن رياضة التنس." },
      { n: 2, c: "L", de: "Ein befreundetes Ehepaar steht andauernd unter Stress und möchte wieder mehr Zeit für sich und andere haben", ar: "زوجان صديقان يعانيان من ضغط مستمر ويرغبان في قضاء المزيد من الوقت لأنفسهم وللآخرين.", ma: "زوجان صديقان يعانيان من ضغط مستمر ويرغبان في قضاء المزيد من الوقت لأنفسهم وللآخرين." },
      { n: 3, c: "X", de: "Eine Bekannte möchte ihre Wohnung renovieren und sucht Tipps zu Taneten und Wandfarben.", ar: "إحدى المعارف ترغب في تجديد شقتها وتبحث عن نصائح حول الستائر وألوان الجدران.", ma: "إحدى المعارف ترغب في تجديد شقتها وتبحث عن نصائح حول الستائر وألوان الجدران." },
      { n: 4, c: "B", de: "Eine Studentin sucht Informationen, wie sie besser und systematischer lernen kann.", ar: "طالبة تبحث عن معلومات حول كيفية التعلم بشكل أفضل وأكثر تنظيماً.", ma: "طالبة تبحث عن معلومات حول كيفية التعلم بشكل أفضل وأكثر تنظيماً." },
      { n: 5, c: "H", de: "Ein Bekannter möchte wissen, welche Botschaften durch Gestik und Mimik transportiert werden.", ar: "أحد المعارف يرغب في معرفة الرسائل التي تُنقل من خلال الإيماءات وتعابير الوجه.", ma: "أحد المعارف يرغب في معرفة الرسائل التي تُنقل من خلال الإيماءات وتعابير الوجه." },
      { n: 6, c: "A", de: "Eine Bekannte möchte ihren Kleidungsstil verbessern.", ar: "إحدى المعارف ترغب في تحسين أسلوب ملابسها.", ma: "إحدى المعارف ترغب في تحسين أسلوب ملابسها." },
      { n: 7, c: "I", de: "Ein Bekannter ist sich noch unsicher, wie er sich bei einem Vorstellungsgespräch am besten präsentiert.", ar: "أحد المعارف لا يزال غير متأكد من كيفية تقديم نفسه بشكل أفضل في مقابلة العمل.", ma: "أحد المعارف لا يزال غير متأكد من كيفية تقديم نفسه بشكل أفضل في مقابلة العمل." },
      { n: 8, c: "C", de: "Ein Bekannter schreibt an einer Hausarbeit über Höflichkeit und Benimmregeln in früheren Jahrhunderten.", ar: "أحد المعارف يعمل على بحث حول آداب السلوك وقواعد اللباقة في القرون الماضية.", ma: "أحد المعارف يعمل على بحث حول آداب السلوك وقواعد اللباقة في القرون الماضية." },
      { n: 9, c: "X", de: "Ein Bekannter möchte lernen, wie man gute Geschäftsbriefe schreibt.", ar: "أحد المعارف يرغب في تعلم كيفية كتابة رسائل تجارية جيدة.", ma: "أحد المعارف يرغب في تعلم كيفية كتابة رسائل تجارية جيدة." },
      { n: 10, c: "E", de: "Eine Bekannte ist sehr verunsichert, weil sie auf Konferenzen immer wieder Angst hat, frei zu sprechen.", ar: "إحدى المعارف تشعر بعدم الأمان لأنها تخشى دائماً التحدث بحرية في المؤتمرات.", ma: "إحدى المعارف تشعر بعدم الأمان لأنها تخشى دائماً التحدث بحرية في المؤتمرات." }
    ]
  },
  {
    id: "b2-lesen-t3-kein-zeit",
    title: "Kein Zeit Anzeigen - كاين تسايت",
    sub: "Teile 3",
    level: "B2",
    type: "matching",
    ads: [
      { k: "A", t: "ANZEIGE A", de: "In Pollekes elfjährigem Leben scheint im Augenblick etwas falsch zu laufen. Es stört sie ja gar nicht, dass ihre Eltern geschieden sind. Sie hat ihren Papa sehr lieb, und sie hat eine prima Mama. Ihr Lehrer ist eigentlich auch ganz in Ordnung, aber muss der sich gleich in ihre Mama verlieben? Und dann ist Polleke sogar selbst schuld an allem. Aber sie gibt die Hoffnung nicht auf, dass am Ende doch alles gut wird, auch mit Mimun, dem liebsten Jungen auf der ganzen Erde und im ganzen Weltall... Datum: 01.11., Uhrzeit: 16.00 Uhr, Ort: Theaterwerkstatt, Alter: ab 9 Jahren", ar: "مسرحية كتحكي على قصة بنت عندها 11 عام سميتها بويكي.", ma: "مسرحية كتحكي على قصة بنت عندها 11 عام سميتها بويكي." },
      { k: "B", t: "ANZEIGE B", de: "Rasmus und der Landstreicher Nach den Kinderbuch von Astrid Lindgren Rasmus ist in einem Kinderheim aufgewachsen, er hat keine Eltern. Eines Tages läuft er davon und will sich Eltern suchen. Die erste Nacht schläft er in einer Scheune im Stroh, und am Morgen entdeckt er neben sich Oskar. Oskar ist ein Landstreicher, der keine Wohnung hat. Zuerst hat Rasmus Angst vor ihm, aber schon bald merkt er, dass Oskar ein prächtiger Mensch ist. Gemeinsam suchen sie Eltern für Rasmus. Doch als sie endlich prima Eltern gefunden haben, da wollen die beiden sich nicht mehr trennen. Datum: 6.11., Uhrzeit: 15.00 Uhr, Ort Bürgerkino, Alter, ab 5 Jahren", ar: "قصة 'راسموس والمتشرد'، المأخوذة من كتاب ديال أستريد ليندغرين.", ma: "قصة 'راسموس والمتشرد'، المأخوذة من كتاب ديال أستريد ليندغرين." },
      { k: "C", t: "ANZEIGE C", de: "Die Verfilmung des Buches \"Im Feld\" handelt von einem jungen Mann, der bisher mit den Wölfen geheult hat. Er hat stets gemacht, was alle gemacht haben, und sich nach der Mehrheit gerichtet: Führerschein, Studium, Beruf, Freundin, iPod. In dieser Reihenfolge. Nun soll er plötzlich Vater werden. Doch der Antiheld ergreift die Flucht, um nachzudenken. Verfolgt von städtischen Beamten, der Polizei, den Reportern eines regionalen Hörfunksenders und seinen eigenen Ängsten, stürzt er sich in pointenreiche Analysen des Weltzustandes... Datum: 30.10. bis 01.11., Uhrzeit: 20.00 Uhr, Ort: Kinopolis", ar: "فيلم سميتو 'في الميدان' مأخوذ من كتاب.", ma: "فيلم سميتو 'في الميدان' مأخوذ من كتاب." },
      { k: "D", t: "ANZEIGE D", de: "Geschlossene Gesellschaft: Drama von Jean-Paul-Sartre Drei Personen, ein Mann und zwei Frauen, werden nach ihrem Tod in einem Zimmer eingesperrt, das keiner der drei jemals wieder verlassen und niemand anderes je betreten wird: Der Ort des Geschehens ist die Hölle. Alle drei sind sich bewusst, dass sie sich in der Hölle befinden, und machen sich auf das Schlimmste gefasst, aber die erwartete Folter und die körperlichen Qualen stellen sich nicht ein, nur eine leichte Hitze ist zu verspüren. Tastend versuchen Sie, voneinander den Grund für die Höllenfahrt zu erfahren, ohne jedoch ihre eigene Schuld zu offenbaren. Datum: 01.11., Uhrzeit: 20.00 Uhr, Ort: Euro Theater Central", ar: "مسرحية مشهورة ديال جان بول سارتر سميتها 'جلسة سرية'.", ma: "مسرحية مشهورة ديال جان بول سارتر سميتها 'جلسة سرية'." },
      { k: "E", t: "ANZEIGE E", de: "Beethovens Bonn Im Dezember 1770 erblickte Ludwig van Beethoven in der Bonngasse 20 das Licht der Welt. Wer ahnte damals, dass mit ihm ein musikalisches Genie geboren wurde, dessen Musik heute in aller Welt bekannt ist? Bis 1792 lebte Beethoven in Bonn, bevor er nach Wien ging und zu einem der berühmtesten Komponisten der Welt wurde. Es werden Orte und Plätze aufgesucht, wo der weltberühmte Komponist wirkte und die faszinierende Einblicke in das Alltagsleben dieses großen Bonners ermöglichen.", ar: "المؤلف الموسيقي العالمي لودفيج فان بيتهوفن وعلاقته بمدينة بون الألمانية.", ma: "المؤلف الموسيقي العالمي لودفيج فان بيتهوفن وعلاقته بمدينة بون الألمانية." },
      { k: "F", t: "ANZEIGE F", de: "Radtour am Rhein Hinweis: Diese Tour ist nur von Gruppen auf Anfrage buchbar! Die Fahrräder sind mitzubringen. Die Tour wird vom ADFC angeboten und verläuft am Rhein, einem der geschichtsträchtigsten Flüsse der Welt. Er symbolisiert wie für viele Rheinanwohner auch für Bonn über Jahrhunderte hinweg bis auf den heutigen Tag die Lebensader der Stadt. Entlang des linksrheinischen Rheinufers sprechen die steinernen Zeitzeugen der Bonner Geschichte für sich, wobei auch die zukunftsweisenden Aspekte der Stadt nicht zu kurz kommen. Datum: 01.02. bis 31.12. Ort und Uhrzeit: nach Vereinbarung", ar: "جولة بالدراجات (بيكالات) على طول نهر الراين منظمة من طرف ADFC.", ma: "جولة بالدراجات (بيكالات) على طول نهر الراين منظمة من طرف ADFC." },
      { k: "G", t: "ANZEIGE G", de: "Weihnachtsmarkt in Koblenz Über 100 festlich geschmückte Holzhäuschen, der Duft von Lebkuchen und Glühwein liegt in der Luft. Weihnachtsmelodien erklingen im malerischen Ambiente der historischen Altstadt unweit der Einkaufsstraßen: Das ist der Koblenzer Weihnachtsmarkt 2007. Alles, was das Herz in der Weihnachtszeit begehrte, findet sich hier wieder, denn auch in diesem Jahr warten wieder ein umfangreiches Angebot an Kunsthandwerk und Weihnachtsschmuck und eine riesige Auswahl an Geschenkartikeln auf die Besucher. Abgerundet durch Weihnachtsbäckerei und viele Attraktionen, wird der Besuch auf dem Koblenzer Weihnachtsmarkt zu einem Erlebnis, das Sie sich nicht entgehen lassen sollen. Datum: 23.11. - 23.12.. Ort: Fußgängerzone im Zentrum", ar: "سوق عيد الميلاد (الكريسماس) في مدينة كوبلنتس الألمانية.", ma: "سوق عيد الميلاد (الكريسماس) في مدينة كوبلنتس الألمانية." },
      { k: "H", t: "ANZEIGE H", de: "Drei Flöhe und das Jesuskind Im Jahr 1 machten sich drei Flöhe aus Deutschland auf den Weg nach Israel, um einmal so richtig zu entspannen. Leider war zu diesem Zeitpunkt eine Volkszählung im vollen Gange und die einzige Übernachtungsmöglichkeit fanden sie in einem Stall bei Bethlehem. Dass sie diese Unterkunft auch noch mit einem kleinen Kind teilen müssten, damit rechnete keiner der drei Flöhe. Und dass dieses Kind auch noch eine Berühmtheit war, machte die ganze Sache für die drei Flöhe zu einem aufregenden Abenteuer. Dieses neue Kinderstück aus der Feder von Dirk Zimmer erzählt die Weihnachtsgeschichte auf humorvolle und gefühlvolle Weise aus der Sicht der drei Flöhen. Datum: 26.11.-22.12.. Uhrzeit: jeweils. 15.00 Uhr. Ort: Innenhof des Rathauses. Alter: ab 5 Jahre", ar: "مسرحية للأطفال سميتها 'ثلاثة براغيث والطفل يسوع'.", ma: "مسرحية للأطفال سميتها 'ثلاثة براغيث والطفل يسوع'." },
      { k: "I", t: "ANZEIGE I", de: "Weihnachtsshow \"Stille Nacht\" trifft \"Last Christmas\". Gospel umarmt Soul, und Pop küsst Klassik. Als 1997 die Idee entstand, eine Weihnachtsshow zu entwickeln, die die schönsten Weihnachtslieder aller Zeiten und aller Genre in sich vereint, konnte sich keiner so recht vorstellen, dass diese Show einmal zur erfolgreichsten Weihnachtsshow Deutschlands avancieren würde. Seit zehn Jahren begeistert nun die Band \"Christmast Moments\" von Thomas Schwab & Band das Publikum sowohl in den großen Konzerthallen der Republik (unter anderem Arena Trier, Phönixhalle Mainz) als auch vor den Fernsehern (ARD-Ausstrahlungen seit 2004). \"Christmas Moments\" trifft mitten ins Herz und konnte in den letzten Jahren mehr als 500.000 Zuschauer begeistern.", ar: "عرض موسيقي كبير ديال عيد الميلاد سميتو 'Christmas Moments'.", ma: "عرض موسيقي كبير ديال عيد الميلاد سميتو 'Christmas Moments'." },
      { k: "J", t: "ANZEIGE J", de: "Jazz vom Feinsten mit durchaus gewollten konservativen Zügen. Der Trompeter Lasse Lindgren ist einer der innovativen Spitzen-Trompeter der aktuellen Jazzszene in Schweden, der in vielen internationalen Bigbands und zusammen mit anderen berühmten Jazzmusikern gespielt hat. Von der Tageszeitung \"Svenska Dagbladet\" wurde er als \"einer der kompetentesten Trompetenspieler dieses Landes\" bezeichnet und Randy Brecker schrieb: \"Es ist so erfrischend, etwas zu hören, was wirklich originell ist! Lass Lindgren, Du bist ein wundervoller Spieler und Komponist\". Sein neuestes Projekt ist ein Glaubensbekenntnis an die Kraft und Energie des Jazz mit eigener Handschrift: Lasse Lindgren hat eine virtuose, immer transparente Hingabe zu seinem Instrument.", ar: "حفلة موسيقية لمجموعة 'لاسي ليندغرين'، لي كتقدم موسيقى الجاز الراقية.", ma: "حفلة موسيقية لمجموعة 'لاسي ليندغرين'، لي كتقدم موسيقى الجاز الراقية." },
      { k: "K", t: "ANZEIGE K", de: "10 Jahre FÜR DIE KATZ Unglaublich! 10 Jahre ist es bereits her, seit FÜR DIE KATZ wie ein Faustschlag ins Licht der Öffentlichkeit traten und sich binnen kürzester Zeit in die Spitzenriege der deutschen Komiker katapultierten. Heute befinden sich die beiden mit Preisen überhäuften Weltbürger Benno Rex und Karl Salzburger auf dem vorläufigen Höhepunkt ihrer eindrucksvollen Karriere und gelten als die vielseitigsten, kreativsten und für Presse wie Fans schlichtweg lustigsten Komödianten Deutschlands. Ihre Wortschöpfungen und Charaktere erweisen sich immer wieder als richtungsweisende Leitsterne für die gesamte Comedy-Branche. Datum: 5.11., Uhrzeit: 20.00 Uhr. Ort: Haus des Kabaretts", ar: "الذكرى العاشرة ديال واحد الثنائي كوميدي ألماني سميتو 'FÜR DIE KATZ'.", ma: "الذكرى العاشرة ديال واحد الثنائي كوميدي ألماني سميتو 'FÜR DIE KATZ'." },
      { k: "L", t: "ANZEIGE L", de: "Das Weihnachtsvarieté erwartet Sie auch in diesem Jahr mit atemberaubender Akrobatik, traumhafter Jonglage, ergänzt von Livemusikern. Seien Sie dabei und staunen Sie vielleicht mit Ihrer Familie, mit Ihren Lieblingskollegen oder der ganzen Firma oder einfach nur mit ihrem oder ihrer Liebsten. Karl-Heinz Helmschrot hat auch in diesem Jahr wieder eine faszinierende Gruppe von sehr unterschiedlichen Künstlern zusammengestellt. Zum 10-jährigen Jubiläum - 10 Künstler! Nicht zuständig ist er für Ihr leibliches Wohl! Dafür haben die Köche des Café Spitz wieder eine internationale Karte zusammengestellt, also freuen Sie sich auf Köstlichkeiten aus aller Welt. Datum: 9.12., Uhrzeit: 21.00 Uhr, Ort: Café Spitz", ar: "سهرة فنية متنوعة بمناسبة عيد الميلاد في 'مقهى سبيتز'.", ma: "سهرة فنية متنوعة بمناسبة عيد الميلاد في 'مقهى سبيتز'." }
    ],
    items: [
      { n: 1, c: "E", de: "Ihre Schwester interessiert sich für die Biographien großer Musiker", ar: "أختك مهتمة بسير حياة الموسيقيين الكبار", ma: "أختك مهتمة بسير حياة الموسيقيين الكبار" },
      { n: 2, c: "J", de: "sie leben Auftritte von herausragenden Musik", ar: "يستمتعون بالعروض الموسيقية الرائعة", ma: "يستمتعون بالعروض الموسيقية الرائعة" },
      { n: 3, c: "L", de: "sie möchtenin Dezember essen gehen und ein buntes , künstierisches Programm genießen", ar: "يرغبون في الخروج لتناول الطعام في ديسمبر والاستمتاع ببرنامج فني متنوع", ma: "يرغبون في الخروج لتناول الطعام في ديسمبر والاستمتاع ببرنامج فني متنوع" },
      { n: 4, c: "I", de: "Sie möchten alte und neue Weihnachtslieder hören.", ar: "يرغبون في الاستماع إلى أغاني عيد الميلاد القديمة والجديدة", ma: "يرغبون في الاستماع إلى أغاني عيد الميلاد القديمة والجديدة" },
      { n: 5, c: "A", de: "Sie möchten mit Ihrer zwölfjährigen Tochter ein altersgerechtes Theaterstück sehen.", ar: "يرغبون في مشاهدة مسرحية مناسبة للعمر مع ابنتهم البالغة من العمر اثني عشر عامًا", ma: "يرغبون في مشاهدة مسرحية مناسبة للعمر مع ابنتهم البالغة من العمر اثني عشر عامًا" },
      { n: 6, c: "B", de: "Sie möchten zusammen mit Ihrem kleinen Neffen einen Kinderfilm sehen.", ar: "يرغبون في مشاهدة فيلم للأطفال مع ابن أخيهم الصغير", ma: "يرغبون في مشاهدة فيلم للأطفال مع ابن أخيهم الصغير" },
      { n: 7, c: "F", de: "Sie wollen eine Stadtbesichtigung mit ein wenig Sport verbinden.", ar: "يريدون الجمع بين جولة في المدينة وبعض الرياضة", ma: "يريدون الجمع بين جولة في المدينة وبعض الرياضة" },
      { n: 8, c: "X", de: "Sie wollen Ihrem Freund, der Tanztheater liebt, eine Eintrittskarte zum Geburtstag schenken.", ar: "يريدون إهداء صديقهم الذي يحب مسرح الرقص تذكرة دخول بمناسبة عيد ميلاده", ma: "يريدون إهداء صديقهم الذي يحب مسرح الرقص تذكرة دخول بمناسبة عيد ميلاده" },
      { n: 9, c: "H", de: "Sie wollen mit Ihren Kindern eine etwas andere, eher lustige Seite von Weihnachten erleben.", ar: "يريدون مع أطفالهم تجربة جانب مختلف ومضحك من عيد الميلاد", ma: "يريدون مع أطفالهم تجربة جانب مختلف ومضحك من عيد الميلاد" },
      { n: 10, c: "K", de: "Sie wollen mit Bekannten ausgehen um mal wieder herzhaft lachen.", ar: "يريدون الخروج مع معارفهم للضحك من القلب مرة أخرى", ma: "يريدون الخروج مع معارفهم للضحك من القلب مرة أخرى" }
    ]
  },
  {
    id: "b2-lesen-t3-kein-zeit-mod1",
    title: "Kein Zeit Anzeigen - كاين تسايت (معدل)",
    sub: "Teile 3",
    level: "B2",
    type: "matching",
    ads: [
      { k: "A", t: "ANZEIGE A", de: "In Pollekes elfjährigem Leben scheint im Augenblick etwas falsch zu laufen. Es stört sie ja gar nicht, dass ihre Eltern geschieden sind. Sie hat ihren Papa sehr lieb, und sie hat eine prima Mama. Ihr Lehrer ist eigentlich auch ganz in Ordnung, aber muss der sich gleich in ihre Mama verlieben? Und dann ist Polleke sogar selbst schuld an allem. Aber sie gibt die Hoffnung nicht auf, dass am Ende doch alles gut wird, auch mit Mimun, dem liebsten Jungen auf der ganzen Erde und im ganzen Weltall... Datum: 01.11., Uhrzeit: 16.00 Uhr, Ort: Theaterwerkstatt, Alter: ab 9 Jahren", ar: "مسرحية كتحكي على قصة بنت عندها 11 عام سميتها بويكي.", ma: "مسرحية كتحكي على قصة بنت عندها 11 عام سميتها بويكي." },
      { k: "B", t: "ANZEIGE B", de: "Rasmus und der Landstreicher Nach den Kinderbuch von Astrid Lindgren Rasmus ist in einem Kinderheim aufgewachsen, er hat keine Eltern. Eines Tages läuft er davon und will sich Eltern suchen. Die erste Nacht schläft er in einer Scheune im Stroh, und am Morgen entdeckt er neben sich Oskar. Oskar ist ein Landstreicher, der keine Wohnung hat. Zuerst hat Rasmus Angst vor ihm, aber schon bald merkt er, dass Oskar ein prächtiger Mensch ist. Gemeinsam suchen sie Eltern für Rasmus. Doch als sie endlich prima Eltern gefunden haben, da wollen die beiden sich nicht mehr trennen. Datum: 6.11., Uhrzeit: 15.00 Uhr, Ort Bürgerkino, Alter, ab 5 Jahren", ar: "قصة 'راسموس والمتشرد'، المأخوذة من كتاب ديال أستريد ليندغرين.", ma: "قصة 'راسموس والمتشرد'، المأخوذة من كتاب ديال أستريد ليندغرين." },
      { k: "C", t: "ANZEIGE C", de: "Die Verfilmung des Buches \"Im Feld\" handelt von einem jungen Mann, der bisher mit den Wölfen geheult hat. Er hat stets gemacht, was alle gemacht haben, und sich nach der Mehrheit gerichtet: Führerschein, Studium, Beruf, Freundin, iPod. In dieser Reihenfolge. Nun soll er plötzlich Vater werden. Doch der Antiheld ergreift die Flucht, um nachzudenken. Verfolgt von städtischen Beamten, der Polizei, den Reportern eines regionalen Hörfunksenders und seinen eigenen Ängsten, stürzt er sich in pointenreiche Analysen des Weltzustandes... Datum: 30.10. bis 01.11., Uhrzeit: 20.00 Uhr, Ort: Kinopolis", ar: "فيلم سميتو 'في الميدان' مأخوذ من كتاب.", ma: "فيلم سميتو 'في الميدان' مأخوذ من كتاب." },
      { k: "D", t: "ANZEIGE D", de: "Geschlossene Gesellschaft: Drama von Jean-Paul-Sartre Drei Personen, ein Mann und zwei Frauen, werden nach ihrem Tod in einem Zimmer eingesperrt, das keiner der drei jemals wieder verlassen und niemand anderes je betreten wird: Der Ort des Geschehens ist die Hölle. Alle drei sind sich bewusst, dass sie sich in der Hölle befinden, und machen sich auf das Schlimmste gefasst, aber die erwartete Folter und die körperlichen Qualen stellen sich nicht ein, nur eine leichte Hitze ist zu verspüren. Tastend versuchen Sie, voneinander den Grund für die Höllenfahrt zu erfahren, ohne jedoch ihre eigene Schuld zu offenbaren. Datum: 01.11., Uhrzeit: 20.00 Uhr, Ort: Euro Theater Central", ar: "مسرحية مشهورة ديال جان بول سارتر سميتها 'جلسة سرية'.", ma: "مسرحية مشهورة ديال جان بول سارتر سميتها 'جلسة سرية'." },
      { k: "E", t: "ANZEIGE E", de: "Beethovens Bonn Im Dezember 1770 erblickte Ludwig van Beethoven in der Bonngasse 20 das Licht der Welt. Wer ahnte damals, dass mit ihm ein musikalisches Genie geboren wurde, dessen Musik heute in aller Welt bekannt ist? Bis 1792 lebte Beethoven in Bonn, bevor er nach Wien ging und zu einem der berühmtesten Komponisten der Welt wurde. Es werden Orte und Plätze aufgesucht, wo der weltberühmte Komponist wirkte und die faszinierende Einblicke in das Alltagsleben dieses großen Bonners ermöglichen.", ar: "المؤلف الموسيقي العالمي لودفيج فان بيتهوفن وعلاقته بمدينة بون الألمانية.", ma: "المؤلف الموسيقي العالمي لودفيج فان بيتهوفن وعلاقته بمدينة بون الألمانية." },
      { k: "F", t: "ANZEIGE F", de: "Radtour am Rhein Hinweis: Diese Tour ist nur von Gruppen auf Anfrage buchbar! Die Fahrräder sind mitzubringen. Die Tour wird vom ADFC angeboten und verläuft am Rhein, einem der geschichtsträchtigsten Flüsse der Welt. Er symbolisiert wie für viele Rheinanwohner auch für Bonn über Jahrhunderte hinweg bis auf den heutigen Tag die Lebensader der Stadt. Entlang des linksrheinischen Rheinufers sprechen die steinernen Zeitzeugen der Bonner Geschichte für sich, wobei auch die zukunftsweisenden Aspekte der Stadt nicht zu kurz kommen. Datum: 01.02. bis 31.12. Ort und Uhrzeit: nach Vereinbarung", ar: "جولة بالدراجات (بيكالات) على طول نهر الراين منظمة من طرف ADFC.", ma: "جولة بالدراجات (بيكالات) على طول نهر الراين منظمة من طرف ADFC." },
      { k: "G", t: "ANZEIGE G", de: "Weihnachtsmarkt in Koblenz Über 100 festlich geschmückte Holzhäuschen, der Duft von Lebkuchen und Glühwein liegt in der Luft. Weihnachtsmelodien erklingen im malerischen Ambiente der historischen Altstadt unweit der Einkaufsstraßen: Das ist der Koblenzer Weihnachtsmarkt 2007. Alles, was das Herz in der Weihnachtszeit begehrte, findet sich hier wieder, denn auch in diesem Jahr warten wieder ein umfangreiches Angebot an Kunsthandwerk und Weihnachtsschmuck und eine riesige Auswahl an Geschenkartikeln auf die Besucher. Abgerundet durch Weihnachtsbäckerei und viele Attraktionen, wird der Besuch auf dem Koblenzer Weihnachtsmarkt zu einem Erlebnis, das Sie sich nicht entgehen lassen sollen. Datum: 23.11. - 23.12.. Ort: Fußgängerzone im Zentrum", ar: "سوق عيد الميلاد (الكريسماس) في مدينة كوبلنتس الألمانية.", ma: "سوق عيد الميلاد (الكريسماس) في مدينة كوبلنتس الألمانية." },
      { k: "H", t: "ANZEIGE H", de: "Drei Flöhe und das Jesuskind Im Jahr 1 machten sich drei Flöhe aus Deutschland auf den Weg nach Israel, um einmal so richtig zu entspannen. Leider war zu diesem Zeitpunkt eine Volkszählung im vollen Gange und die einzige Übernachtungsmöglichkeit fanden sie in einem Stall bei Bethlehem. Dass sie diese Unterkunft auch noch mit einem kleinen Kind teilen müssten, damit rechnete keiner der drei Flöhe. Und dass dieses Kind auch noch eine Berühmtheit war, machte die ganze Sache für die drei Flöhe zu einem aufregenden Abenteuer. Dieses neue Kinderstück aus der Feder von Dirk Zimmer erzählt die Weihnachtsgeschichte auf humorvolle und gefühlvolle Weise aus der Sicht der drei Flöhen. Datum: 26.11.-22.12.. Uhrzeit: jeweils. 15.00 Uhr. Ort: Innenhof des Rathauses. Alter: ab 5 Jahre", ar: "مسرحية للأطفال سميتها 'ثلاثة براغيث والطفل يسوع'.", ma: "مسرحية للأطفال سميتها 'ثلاثة براغيث والطفل يسوع'." },
      { k: "I", t: "ANZEIGE I", de: "Weihnachtsshow \"Stille Nacht\" trifft \"Last Christmas\". Gospel umarmt Soul, und Pop küsst Klassik. Als 1997 die Idee entstand, eine Weihnachtsshow zu entwickeln, die die schönsten Weihnachtslieder aller Zeiten und aller Genre in sich vereint, konnte sich keiner so recht vorstellen, dass diese Show einmal zur erfolgreichsten Weihnachtsshow Deutschlands avancieren würde. Seit zehn Jahren begeistert nun die Band \"Christmast Moments\" von Thomas Schwab & Band das Publikum sowohl in den großen Konzerthallen der Republik (unter anderem Arena Trier, Phönixhalle Mainz) als auch vor den Fernsehern (ARD-Ausstrahlungen seit 2004). \"Christmas Moments\" trifft mitten ins Herz und konnte in den letzten Jahren mehr als 500.000 Zuschauer begeistern.", ar: "عرض موسيقي كبير ديال عيد الميلاد سميتو 'Christmas Moments'.", ma: "عرض موسيقي كبير ديال عيد الميلاد سميتو 'Christmas Moments'." },
      { k: "J", t: "ANZEIGE J", de: "Jazz vom Feinsten mit durchaus gewollten konservativen Zügen. Der Trompeter Lasse Lindgren ist einer der innovativen Spitzen-Trompeter der aktuellen Jazzszene in Schweden, der in vielen internationalen Bigbands und zusammen mit anderen berühmten Jazzmusikern gespielt hat. Von der Tageszeitung \"Svenska Dagbladet\" wurde er als \"einer der kompetentesten Trompetenspieler dieses Landes\" bezeichnet und Randy Brecker schrieb: \"Es ist so erfrischend, etwas zu hören, was wirklich originell ist! Lass Lindgren, Du bist ein wundervoller Spieler und Komponist\". Sein neuestes Projekt ist ein Glaubensbekenntnis an die Kraft und Energie des Jazz mit eigener Handschrift: Lasse Lindgren hat eine virtouse, immer transparente Hingabe zu seinem Instrument.", ar: "حفلة موسيقية لمجموعة 'لاسي ليندغرين'، لي كتقدم موسيقى الجاز الراقية.", ma: "حفلة موسيقية لمجموعة 'لاسي ليندغرين'، لي كتقدم موسيقى الجاز الراقية." },
      { k: "K", t: "ANZEIGE K", de: "10 Jahre FÜR DIE KATZ Unglaublich! 10 Jahre ist es bereits her, seit FÜR DIE KATZ wie ein Faustschlag ins Licht der Öffentlichkeit traten und sich binnen kürzester Zeit in die Spitzenriege der deutschen Komiker katapultierten. Heute befinden sich die beiden mit Preisen überhäuften Weltbürger Benno Rex und Karl Salzburger auf dem vorläufigen Höhepunkt ihrer eindrucksvollen Karriere und gelten als die vielseitigsten, kreativsten und für Presse wie Fans schlichtweg lustigsten Komödianten Deutschlands. Ihre Wortschöpfungen und Charaktere erweisen sich immer wieder als richtungsweisende Leitsterne für die gesamte Comedy-Branche. Datum: 5.11., Uhrzeit: 20.00 Uhr. Ort: Haus des Kabaretts", ar: "الذكرى العاشرة ديال واحد الثنائي كوميدي ألماني سميتو 'FÜR DIE KATZ'.", ma: "الذكرى العاشرة ديال واحد الثنائي كوميدي ألماني سميتو 'FÜR DIE KATZ'." },
      { k: "L", t: "ANZEIGE L", de: "Das Weihnachtsvarieté erwartet Sie auch in diesem Jahr mit atemberaubender Akrobatik, traumhafter Jonglage, ergänzt von Livemusikern. Seien Sie dabei und staunen Sie vielleicht mit Ihrer Familie, mit Ihren Lieblingskollegen oder der ganzen Firma oder einfach nur mit ihrem oder ihrer Liebsten. Karl-Heinz Helmschrot hat auch in diesem Jahr wieder eine faszinierende Gruppe von sehr unterschiedlichen Künstlern zusammengestellt. Zum 10-jährigen Jubiläum - 10 Künstler! Nicht zuständig ist er für Ihr leibliches Wohl! Dafür haben die Köche des Café Spitz wieder eine internationale Karte zusammengestellt, also freuen Sie sich auf Köstlichkeiten aus aller Welt. Datum: 9.12., Uhrzeit: 21.00 Uhr, Ort: Café Spitz", ar: "سهرة فنية متنوعة بمناسبة عيد الميلاد في 'مقهى سبيتز'.", ma: "سهرة فنية متنوعة بمناسبة عيد الميلاد في 'مقهى سبيتز'." }
    ],
    items: [
      { n: 1, c: "E", de: "Ihre Schwester interessiert sich für die Biographien großer Musiker", ar: "أختها تهتم بسير حياة الموسيقيين العظماء", ma: "أختها تهتم بسير حياة الموسيقيين العظماء" },
      { n: 2, c: "J", de: "sie leben Auftritte von herausragenden Musik", ar: "يستمتعون بعروض الموسيقى المتميزة", ma: "يستمتعون بعروض الموسيقى المتميزة" },
      { n: 3, c: "L", de: "Sie lieben künstlerische Vielfalt und Vielseitigkeit und wollen Weihnachten ausgehen.", ar: "يحبون التنوع والتعدد الفني ويرغبون في الخروج خلال عيد الميلاد.", ma: "يحبون التنوع والتعدد الفني ويرغبون في الخروج خلال عيد الميلاد." },
      { n: 4, c: "I", de: "Sie möchten alte und neue Weihnachtslieder hören.", ar: "يرغبون في الاستماع إلى أغاني عيد الميلاد القديمة والجديدة.", ma: "يرغبون في الاستماع إلى أغاني عيد الميلاد القديمة والجديدة." },
      { n: 5, c: "A", de: "Sie möchten mit Ihrer zwölfjährigen Tochter ein altersgerechtes Theaterstück sehen.", ar: "يرغبون في مشاهدة مسرحية مناسبة للعمر مع ابنتهم ذات الاثني عشر عامًا.", ma: "يرغبون في مشاهدة مسرحية مناسبة للعمر مع ابنتهم ذات الاثني عشر عامًا." },
      { n: 6, c: "B", de: "Sie suchen einen Kinderfilm für ihren kleinen Sohn.", ar: "يبحثون عن فيلم للأطفال لابنهم الصغير.", ma: "يبحثون عن فيلم للأطفال لابنهم الصغير." },
      { n: 7, c: "F", de: "Sie suchen für sportliche Sprachkursteilnehmer eine Möglichkeit, Bonn zu zeigen.", ar: "يبحثون عن وسيلة لإظهار مدينة بون للمشاركين في دورات اللغة الرياضية.", ma: "يبحثون عن وسيلة لإظهار مدينة بون للمشاركين في دورات اللغة الرياضية." },
      { n: 8, c: "X", de: "Sie wollen Ihrem Freund, der Tanztheater liebt, eine Eintrittskarte zum Geburtstag schenken.", ar: "يريدون إهداء صديقهم الذي يحب مسرح الرقص تذكرة دخول بمناسبة عيد ميلاده.", ma: "يريدون إهداء صديقهم الذي يحب مسرح الرقص تذكرة دخول بمناسبة عيد ميلاده." },
      { n: 9, c: "H", de: "Sie wollen mit Ihren Kindern eine etwas andere, eher lustige Seite von Weihnachten erleben.", ar: "يريدون مع أطفالهم تجربة جانب مختلف وأكثر مرحًا من عيد الميلاد.", ma: "يريدون مع أطفالهم تجربة جانب مختلف وأكثر مرحًا من عيد الميلاد." },
      { n: 10, c: "K", de: "Sie wollen mit Bekannten ausgehen um mal wieder herzhaft lachen.", ar: "يريدون الخروج مع معارفهم للضحك من القلب مرة أخرى.", ma: "يريدون الخروج مع معارفهم للضحك من القلب مرة أخرى." }
    ]
  }
);

// --- 2. تكملة دروس الاستماع (Hören Teil 1) ---
window.B2_HOREN_EXAMS = window.B2_HOREN_EXAMS || [];
window.B2_HOREN_EXAMS.push(
  {
    id: "b2-horen-europaeischen-union",
    title: "Europäischen Union",
    sub: "Teile 1",
    level: "B2",
    type: "horen",
    audio: [
      { text: "Es ist 10 Uhr. Die Nachrichten. Erfreuliches aus der Wirtschaft. Die Arbeitslosigkeit ist in der EU im letzten Monat leicht zurückgegangen. Das geht aus den jüngsten Daten zur Beschäftigung hervor, die gestern veröffentlicht wurden. Auch in der Eurozone gab es einen leichten Rückgang in den absoluten Zahlen der arbeitslosen Personen. In Prozentpunkten ist die Arbeitslosenrate im Euroraum allerdings gleich geblieben. Während die Gesamtarbeitslosigkeit in Österreich am geringsten ist, hat Deutschland bei der Jugendarbeitslosigkeit die niedrigste Rate. EU-weit liegt die Jugendarbeitslosigkeit 0,2 Prozentpunkte unter jener des Vormonats. Doch nicht nur die Jugendlichen profitieren von diesem positiven Trend. Den Daten zufolge betrifft die Entspannung der Lage am Arbeitsmarkt alle Altersgruppen.", pitch: 1.0, rate: 0.95 },
      { text: "Das Familienministerium plant eine Vielfalt von Aktivitäten zur Stärkung der Wahlbeteiligung von Jugendlichen. Dies teilte heute ein Sprecher des Familienministeriums in einer Pressekonferenz mit. Junge Menschen sollen verstärkt zum Thema Wahlen informiert werden. Gleichzeitig soll ihr Interesse an demokratischen Prozessen gefördert werden. Ein Schwerpunkt der Initiative ist unter anderem eine demokratische Schulkultur. Durch die Einbindung in Kommunalprojekte sollen Jugendliche die Möglichkeit bekommen, Demokratie im Alltag zu erleben. In besonderen Workshops für Demokratie können Jugendliche politische Themen diskutieren und Beteiligungsmöglichkeiten entwickeln. Zudem seien Tagungen zum Thema Jugendbeteiligung geplant, die sich an Sozialpädagogen, Lehrkräfte, Eltern und an Politiker wenden, ließ der Sprecher wissen.", pitch: 1.1, rate: 0.95 },
      { text: "Wir bleiben beim Thema Beschäftigung. Wir sind offen. Unter diesem Motto wirbt zurzeit eine Wanderausstellung des Bundesarbeitsministeriums für Deutschland als Einwanderungsland. Offen zeigt sich die Bundesrepublik neuerdings auch für Fachkräfte außerhalb der EU. Sie können nach Deutschland kommen, wenn Ihr Beruf auf einer sogenannten Positivliste mit gefragten Berufen steht. Auf der aktuellen Liste finden sich unter anderem Mechatroniker, Klempner, Kranken- und Altenpfleger. Der Zustrom ist bisher allerdings nicht sehr groß. Das liegt vor allem daran, dass viel zu wenig Werbung gemacht wurde. Kaum jemand in China weiß, dass in Deutschland Lokführer gesucht werden. Und außerdem stellt das Erlernen der deutschen Sprache eine Hürde für ausländische Arbeitnehmer dar.", pitch: 1.0, rate: 0.95 },
      { text: "Unser Veranstaltungstipp. Von 20 Uhr bis 3 Uhr in der Früh findet am Samstag wieder die diesjährige Lange Nacht der Musik an über 100 Veranstaltungsorten in der Münchner Innenstadt statt. Die verschiedenen Spielstätten werden von Shuttlebussen angefahren, die bis in die Morgenstunden im 10-Minuten-Takt verkehren. Das Ticket kostet 15 € pro Person. Dafür erhalten die Besucher Zugang zu jeder Spielstätte und können bis zur letzten Fahrt um 3 Uhr früh die Shuttlebusse benutzen. Wer noch kein Programmheft hat und sich in letzter Minute informieren möchte, dem sei der Infostand am Odeonsplatz empfohlen, wo man ab 17 Uhr alles zu den Spielstätten, den Künstlern und der angebotenen Musik erfährt. Die Veranstalter freuen sich auf eine rege Teilnahme an der diesjährigen Langen Nacht der Musik.", pitch: 1.1, rate: 0.95 },
      { text: "Spektakulärer Fund. Im sogenannten Tal der goldenen Mumien haben ägyptische Forscher wieder Mumien gefunden. Wie der Leiter der Ausgrabungen betonte, handele es sich bei einem Teil davon um die am besten erhaltenen, die je gefunden wurden. Die Mumien und die dazugehörigen Sarkophage seien außerordentlich reich verziert. Der Friedhof im Tal der goldenen Mumien erstreckt sich über eine Fläche von rund 25 Quadratkilometern und wird seit 1999 intensiv erforscht. Bisher sind in dem Gebiet etwa 15 Gräber mit 230 Leichen gefunden worden. Die Archäologen gehen davon aus, dass bis zu 10.000 Menschen im Tal der goldenen Mumien begraben sein könnten.", pitch: 1.0, rate: 0.95 },
      { text: "In der vergangenen Nacht und in den Morgenstunden haben schwere Unwetter 5 Menschenleben gefordert. 38 Personen wurden zum Teil schwer verletzt, einige von ihnen lebensgefährlich. Umgefallene Bäume beschädigten Häuser, Autos und Stromleitungen. Der öffentliche Verkehr wurde an vielen Orten lahmgelegt. Bis zum Nachmittag mussten die Einsatzkräfte fast 15.000 Mal ausrücken. Laut Meteorologen wird es auch in den kommenden Tagen in Süddeutschland zahlreiche Gewitter geben. Erst Ende der Woche sei mit einer deutlichen Beruhigung der Wetterlage zu rechnen, teilte der Wetterdienst mit. Die Temperaturen gehen am Wochenende langsam zurück und damit sinkt die Gefahr von Gewittern und Unwettern.", pitch: 1.1, rate: 0.95 }
    ],
    items: [
      { n: 1, c: "R", de: "In der Europäischen Union verzeichnet man weniger jugendliche Arbeitslose.", ar: "في الاتحاد الأوروبي، تم تسجيل عدد أقل من العاطلين عن العمل من الشباب.", ma: "فالاتحاد الأوروبي، كاينين قل من الشباب اللي ماعندهمش الخدمة." },
      { n: 2, c: "R", de: "Das Bundesarbeitsministerium bemüht sich um ausländische Arbeitnehmer bestimmter Berufsgruppen.", ar: "تسعى وزارة العمل الاتحادية إلى جذب العمال الأجانب من فئات مهنية معينة.", ma: "وزارة العمل الاتحادية كتحاول تجيب عمال أجانب من شي مهن معينة." },
      { n: 3, c: "F", de: "Die 'Lange Nacht der Musik' findet am Odeonsplatz in München statt.", ar: "تُقام 'الليلة الطويلة للموسيقى' في ساحة أوديون في ميونخ.", ma: "الليلة الطويلة ديال الموسيقى كاتدار فساحة أوديون فميونخ." },
      { n: 4, c: "F", de: "Im Tal der goldenen Mumien würden bisher fast 10.000 Tote gefunden.", ar: "في وادي المومياوات الذهبية، تم العثور حتى الآن على ما يقرب من 10,000 جثة.", ma: "فوادي المومياوات الذهبية، تلقاو حتى دابا قريب 10,000 ميت." },
      { n: 5, c: "F", de: "Die Gefahr schwerer Unwetter ist nun vorbei.", ar: "خطر العواصف الشديدة قد انتهى الآن.", ma: "خطر العواصف القوية سالا دابا." }
    ],
    story: "النص كيهضر على بزاف ديال الأخبار: أولاً، البطالة نقصات فالاتحاد الأوروبي. ثانياً، وزارة الأسرة كتخطط باش تشجع الشباب على التصويت. ثالثاً، وزارة العمل كتقلب على عمالة أجنبية من برا الاتحاد الأوروبي. رابعاً، كاينة ليلة موسيقية فميونخ. خامساً، لقاو مومياوات فمصر (ماشي 10 آلاف، غير 230). وأخيراً، كاين تحذير من عواصف قوية فجنوب ألمانيا مازال ما سالاتش."
  },
  {
    id: "b2-horen-unwetterschaeden",
    title: "Unwetterschäden",
    sub: "Teile 1",
    level: "B2",
    type: "horen",
    audio: [
      { text: "In der letzten Nacht sind heftige Unwetter über einen Großteil des Landesgebietes hinweggezogen. Auf einem Campingplatz bei Passau wurden laut Polizei einige Wohnwagen umgeworfen und zahlreiche Zelte aus den Verankerungen gerissen. Fünf Personen, darunter zwei Angestellte des Campingplatzes, wurden von herabstürzenden Ästen leicht verletzt. Die gesamte Anlage musste vorübergehend evakuiert werden. Das Rote Kreuz half vor Ort. Die betroffenen Feriengäste wurden in der Turnhalle einer nahegelegenen Schule einquartiert. Gebäude und Infrastruktur des Campingplatzes sind nach Auskunft der Polizei nicht betroffen. Die Aufräumarbeiten sind zurzeit noch im Gange. Wann die Camper zu ihren Zelten bzw. Wohnmobilen zurückkehren dürfen, ist noch nicht bekannt.", pitch: 1.0, rate: 0.95 },
      { text: "Bei der Lebensmittelkette Foodie wird haltbare Vollmilch der Marke Mirella wegen einer Belastung mit gefährlichen Bakterien zurückgerufen. Wie der Hersteller angibt, war bei hauseigenen Untersuchungen ein Erreger entdeckt worden, der schwere Magen-Darm-Erkrankungen auslösen kann. Von der Rückrufaktion betroffen ist haltbare Vollmilch in 1-Liter-Packungen mit 3,8% Fettgehalt mit den Mindesthaltbarkeitsdaten 13. und 14. November. Dies teilten Foodie und der Hersteller in einer gemeinsamen Presseerklärung mit. Konsumenten sollen die Milch auf keinen Fall verbrauchen. Bereits gekaufte Packungen werden in allen Foodie-Filialen gegen Rückerstattung des Kaufpreises zurückgenommen. Das Produkt wurde in allen Filialen aus dem Verkauf genommen. Andere Produkte der Marke sind nicht von dem Rückruf betroffen.", pitch: 1.1, rate: 0.95 },
      { text: "In Deutschland hat die Zahl der offenen Stellen ein neues Rekordhoch erreicht. Im zweiten Quartal des Jahres waren knapp 1,1 Millionen Jobs unbesetzt. Das teilte das Institut für Arbeitsmarkt und Berufsforschung nach einer repräsentativen Umfrage mit. Das Institut wertete Antworten von rund 8000 Betrieben aus unterschiedlichen Branchen aus. In manchen Bereichen gebe es demnach zunehmend Engpässe. Besonders im Bauwesen und verarbeitenden Gewerbe werde dringend Personal gesucht, hieß es. So sei die Zahl der offenen Stellen im verarbeitenden Gewerbe seit dem letzten Quartal um rund 5000 gestiegen. Von einem deutschlandweiten Mangel an Fachkräften könne allerdings nicht gesprochen werden.", pitch: 1.0, rate: 0.95 },
      { text: "Virenalarm. In einem Zeltlager bei Amberg haben sich rund 200 jugendliche Teilnehmerinnen und Teilnehmer mit einem Magen-Darm-Infekt angesteckt. Ungefähr die Hälfte von ihnen konnte vor Ort medizinisch versorgt werden, rund 100 Betroffene wurden nach Angaben der Camp-Notärztin ins Krankenhaus gebracht. Niemand befinde sich in Lebensgefahr, so die Ärztin. Die ersten Jugendlichen hatten am Samstag nach einer Sportveranstaltung über Übelkeit und Erbrechen geklagt. In der Folge hatte sich die Infektion innerhalb weniger Stunden im ganzen Lager ausgebreitet. Für die Rettungskräfte stellte die hohe Zahl an Infizierten eine große Herausforderung dar. In der Zwischenzeit haben sie die Lage im Griff. Als Erreger wurde zweifelsfrei das hochansteckende Norovirus identifiziert.", pitch: 1.1, rate: 0.95 },
      { text: "Unser Veranstaltungstipp. Zum Internationalen Museumstag öffnet das Artus Stadtmuseum seine Türen. Am 21. Mai ist der Eintritt in alle Sammlungen und Ausstellungen des Hauses frei. Besonders herzlich eingeladen sind Kinder. Um 11, um 14 und um 16 Uhr gibt es Gratisführungen durch die Sonderausstellung Geschichte des Jahrmarktes. Sie dauern rund eine Stunde. Die Zahl der Teilnehmerinnen und Teilnehmer ist begrenzt. Im Innenhof des Museums gibt es außerdem einen lustigen Kinderparcours, gratis Luftballons und Zuckerwatte. Das Stadtmuseum freut sich auf kleine und große Gäste.", pitch: 1.0, rate: 0.95 },
      { text: "Zu einem spektakulären Unfall ist es heute in den frühen Morgenstunden auf der A1 gekommen. Nachdem der Fahrer eines Tiertransporters einen Pfeiler gerammt hatte und der LKW stark beschädigt worden war, gelangten rund 5000 Hühner auf die Fahrbahn. Die Autobahn musste vollständig gesperrt werden. Die Folge waren kilometerlange Staus in beide Richtungen. 120 Einsatzkräfte waren stundenlang damit beschäftigt, die herumflatternden Tiere wieder einzufangen. Hilfe bekamen sie dabei von einem herbeigerufenen Geflügeltierarzt. Ein Großteil der Hühner überlebte den Unfall. Sie wurden von einem zweiten LKW abtransportiert. Gegen 11 Uhr am Vormittag war die Autobahn wieder frei.", pitch: 1.1, rate: 0.95 }
    ],
    items: [
      { n: 1, c: "R", de: "Wegen Unwetterschäden wurden Urlauber in einer Notunterkunft untergebracht.", ar: "بسبب أضرار العواصف، تم إيواء المصطافين في مأوى طارئ.", ma: "بسبب الخسائر ديال العواصف، تحطو المصطافين فمأوى طارئ." },
      { n: 2, c: "F", de: "Sämtliche Waren der Firma Mirella wurden aus den Läden entfernt.", ar: "تمت إزالة جميع منتجات شركة ميريلا من المتاجر.", ma: "تحيدو كاع المنتجات ديال شركة ميريلا من الحوانت." },
      { n: 3, c: "F", de: "Das Arbeitsplatzangebot in der Bundesrepublik hat einen Tiefstand erreicht.", ar: "وصل عرض فرص العمل في ألمانيا إلى أدنى مستوى له.", ma: "وصل عدد فرص الشغل فألمانيا لأدنى مستوى." },
      { n: 4, c: "R", de: "Am 21. Mai ist der Besuch der Sonderausstellung kostenlos.", ar: "في 21 مايو، تكون زيارة المعرض الخاص مجانية.", ma: "فـ 21 ماي، الزيارة ديال المعرض الخاص مجانية." },
      { n: 5, c: "F", de: "Entlaufene Tiere verursachten einen Unfall auf der Autobahn.", ar: "الحيوانات الهاربة تسببت في حادث على الطريق السريع.", ma: "الحيوانات اللي هربو هوما اللي سببوا الحادث فالأوطوروت." }
    ],
    story: "بسبب الأضرار الناتجة عن العواصف، تم نقل السائحين إلى مأوى طارئ، حيث اكتشفوا أن زيارة المعرض الخاص في 21 مايو مجانية."
  },
  {
    id: "b2-horen-nicht-sicher",
    title: "nicht sicher",
    sub: "Teile 1",
    level: "B2",
    type: "horen",
    audio: [
      { text: "Es ist 18 Uhr. Die neuesten Meldungen vom Tage. Berlin. Nachdem gestern in ganz Berlin zahlreiche Ampeln ausgefallen waren, können die Autofahrer und Benutzer von Bussen heute aufatmen. Seit 5 Uhr heute Morgen funktionieren alle Ampelanlagen wieder reibungslos. Ein Sprecher der Stadt Berlin entschuldigte sich für die Unannehmlichkeiten. Zahlreiche Pendler waren gestern zu spät zur Arbeit gekommen. Viele Fahrgäste von Bussen und Straßenbahnen stiegen unterwegs aus, weil sie zu Fuß schneller waren. Die Ursache für den Ausfall der Ampeln war ein größeres Problem in der Stromversorgung. Derzeit wird noch untersucht, wo genau der Fehler aufgetreten ist und ob er sich in Zukunft noch einmal wiederholen könnte. Erst im vergangenen Herbst waren sämtliche Ampeln in Berlin einer technischen Kontrolle unterzogen worden. Damals funktionierten alle Anlagen einwandfrei.", pitch: 1.0, rate: 0.95 },
      { text: "Hamburg. Mit einem Bürgerbegehren wurde heute der Bau eines neuen Einkaufszentrums am Hamburger Fischmarkt abgelehnt. Mehr als die Hälfte aller Hamburger Bürgerinnen und Bürger nahmen an der Abstimmung teil. Gegen das Einkaufszentrum stimmten mehr als 80%. Damit ist das Projekt gestoppt. Hamburgs Politiker zeigten sich enttäuscht von dem Ergebnis. So sagte Waltraud Hagen aus dem Wirtschaftsflügel der HAP, das Einkaufszentrum wäre eine Chance für die Innenstadt gewesen. Dagegen waren Vertreter der Bürgerinitiative zufrieden. Henning Stein, Vorsitzender der Bürger für Hamburg, erklärte, es sei richtig, das große Projekte nur mit Zustimmung der Bürger realisiert werden könnten. Diese Zustimmung habe es wegen der zu erwartenden Kosten nicht gegeben.", pitch: 1.1, rate: 0.95 },
      { text: "Paris. In der Hauptstadt Frankreichs wurde heute ein neuer Hochgeschwindigkeitszug vorgestellt, der TGV. Dieser soll aber erst in 5 Jahren zum Einsatz kommen, sagte der Sprecher der französischen Bahn. Geplant ist, dass der neue Hochgeschwindigkeitszug dann auch direkt von Paris nach Berlin sowie von Paris nach München fährt. Die Fahrzeit soll im Vergleich zu heute bis zu 2 Stunden kürzer sein. Die französische und auch die Deutsche Bahn hoffen, so neue Kunden gewinnen zu können. In den letzten Jahren haben immer mehr Reisende zwischen Frankreich und Deutschland das Flugzeug benutzt. Weil es laut Umfragen günstiger und auch bequemer ist.", pitch: 1.0, rate: 0.95 },
      { text: "Oslo. Im Norden Norwegens findet derzeit der erste europäische Eisfigurenwettbewerb statt. Aus ganz Europa sind Teilnehmer angereist, um kreative Figuren aus Eis zu gestalten. Auch aus Deutschland sind 2 größere Teams nach Norwegen geflogen. Das Team um Franziska Brückner möchte ein kleines Hotel aus Eis bauen, in dem bis zu 6 Personen übernachten können. Andere Teams bauen derzeit berühmte Gebäude wie den Kölner Dom oder die ägyptischen Pyramiden aus Eis nach, natürlich auch im Miniaturformat. Der Wettbewerb geht noch bis Ende nächsten Monats. Dann können Zuschauer vor Ort oder im Internet die Kunstwerke anschauen und auch ihren Favoriten wählen.", pitch: 1.1, rate: 0.95 },
      { text: "Neues aus der Wirtschaft. Die Nachricht einer großen Getränkefirma war heute das Gesprächsthema Nummer 1 in Wirtschaftskreisen und auch an der Frankfurter Börse. Der Limonadenhersteller TipTop hat angekündigt, im kommenden Jahr ein weiteres Produktionswerk in Ostasien eröffnen zu wollen. Die Nachricht war eine Überraschung, da zuletzt immer weniger Limonade verkauft wurde. Der Geschäftsführer von TipTop, Rudolf Kowalski, hat jedoch in einer ersten Stellungnahme betont, dass nur die Verkaufszahlen in Deutschland schlechter geworden sind. Im Ausland und vor allem in Asien sind die Limonaden von TipTop dagegen so beliebt wie nie, sagte Kowalski. Unklar ist, ob auch Mitarbeiter aus Deutschland zukünftig im neuen Werk arbeiten sollen.", pitch: 1.0, rate: 0.95 },
      { text: "Und nun zum Sport. Die Fußballerin Ingrid Thieme hat heute bekannt gegeben, dass sie an der kommenden Weltmeisterschaft in London nicht teilnehmen wird. Thieme sagte, es gebe persönliche Gründe für ihre Entscheidung. In der letzten Saison hatte die Spitzensportlerin gemeinsam mit der Nationalmannschaft souverän die Qualifikation für die anstehende WM geschafft. Dabei erzielte Thieme 13 Tore und wurde dadurch Torschützenkönigin. Mehr Tore als Thieme schoss niemand in der gesamten Qualifikation. Sowohl die Bundestrainerin als auch die Mitspielerinnen waren sehr betroffen und bedauern die Entscheidung von Thieme sehr. Und jetzt noch die Wetteraussichten für die nächsten Tage.", pitch: 1.1, rate: 0.95 }
    ],
    items: [
      { n: 1, c: "R", de: "Es ist nicht sicher, ob es erneut zu diesem Problem kommen kann.", ar: "ليس من المؤكد ما إذا كانت هذه المشكلة يمكن أن تتكرر.", ma: "ماشي متأكد واش هاد المشكل غيتعاود." },
      { n: 2, c: "F", de: "Hamburgs Politiker befürworteten den Bau des Einkaufszentrums nicht.", ar: "سياسيو هامبورغ لم يؤيدوا بناء مركز التسوق.", ma: "سياسيين هامبورغ ما دعموش بناء مركز التسوق." },
      { n: 3, c: "F", de: "Zwischen Frankreich und Deutschland wurde ein neuer Hochgeschwindigkeitszug genommen.", ar: "تم استخدام قطار فائق السرعة جديد بين فرنسا وألمانيا.", ma: "تشد قطار فائق السرعة جديد بين فرنسا وألمانيا." },
      { n: 4, c: "R", de: "Die Produkte von TipTop sind in Deutschland nicht mehr so gefragt.", ar: "منتجات TipTop لم تعد مطلوبة في ألمانيا.", ma: "منتجات TipTop ما بقاتش مطلوبة فألمانيا." },
      { n: 5, c: "F", de: "Ingrid Thieme wird sich an der kommenden WM beteiligen.", ar: "ستشارك إنغريد ثيمي في كأس العالم القادمة.", ma: "إنغريد ثيمي غادي تشارك فكأس العالم الجاية." }
    ],
    story: "في ظل تراجع الطلب على منتجات TipTop في ألمانيا، تساءل المديرون عما إذا كان يمكن أن تتكرر هذه المشكلة مرة أخرى في المستقبل."
  },
  {
    id: "b2-horen-frau-juergens",
    title: "Frau Jürgens",
    sub: "Teile 1",
    level: "B2",
    type: "horen",
    audio: [
      { text: "Frau Jürgens hat heute ihr Amt an ihre Nachfolgerin übergeben. Schon vor Monaten hatte sie ihren Rückzug aus privaten Gründen angekündigt. Somit hatte sie nun länger Zeit gehabt, Abschied zu nehmen, betonte sie in einem Interview. Sie zeigte sich zufrieden mit ihrer Amtszeit, weil sie im Bereich Stadtplanung einige Projekte realisieren konnte, die ihr am Herzen lagen. Obwohl man ihr öfter Streit mit dem politischen Gegner unterstellt habe, sei die Zusammenarbeit im Gegenteil sehr gut verlaufen. Sie würde viele Menschen aus ihrem Arbeitsalltag sicher sehr vermissen. Doch sie freue sich jetzt auf den nächsten Lebensabschnitt, so Jürgens.", pitch: 1.0, rate: 0.95 },
      { text: "Das Filmfestival unter freiem Himmel begeistert Jahr für Jahr Tausende von Besuchern aus dem In- und Ausland. Dieses Jahr wird das Festival am 29. Juni eröffnet. Bis zum 1. September werden im Stadtpark Filme auf einer 300 Quadratmeter großen Leinwand gezeigt. Besucherinnen und Besucher können täglich bei Einbruch der Dunkelheit beeindruckende Produktionen aus den Bereichen Krimi, Western und Science Fiction sehen. Der Eintritt für die Filmvorführungen ist frei. Täglich zwischen 11 und 24 Uhr verwöhnen sie zudem Gastronomen mit dem Besten aus den Küchen dieser Welt.", pitch: 1.1, rate: 0.95 },
      { text: "Bauarbeiten führten heute am frühen Morgen zu einer Störung im städtischen Personennahverkehr. Ein Baukran hatte eine Oberleitung auf Höhe der Ärmelgasse abgerissen. Infolgedessen kam es zu einem Stromausfall und der Betrieb der Straßenbahnlinie 33 war zwischen Möllerweg und der Rosenallee für knapp eine Stunde unterbrochen. In der Zwischenzeit konnte der Schaden behoben werden und die Linie 33 fährt wieder auf der gesamten Strecke. Wie eine Sprecherin der Verkehrsbetriebe mitteilte, müssen Fahrgäste allerdings noch mit längeren Wartezeiten rechnen.", pitch: 1.0, rate: 0.95 },
      { text: "Noch ein Hinweis für die beginnende Urlaubszeit. Camping ist wieder angesagt, aber nicht jeder ist bereit für einen Campingplatz zu zahlen. Man sollte jedoch beachten, dass Wildcampen und Übernachten in Zelten in der freien Natur hierzulande größtenteils verboten sind. Bei Missachtung drohen hohe Strafen. Auch im europäischen Ausland ist freies Campen entweder ganz verboten oder zumindest nur zeitlich befristet erlaubt. Der Deutsche Campingclub empfiehlt, sich vor dem Urlaub genau zu informieren.", pitch: 1.1, rate: 0.95 },
      { text: "Heiß geht es morgen weiter. Im Tagesverlauf kommen vermehrt Quellwolken auf, die Schauer- und Gewitterneigung steigt gegen Abend überall an. Der Wind weht mäßig bis lebhaft aus Süd bis Ost. Die Frühtemperaturen liegen bei 16 bis 20 Grad, die Höchstwerte erreichen 28 bis 32 Grad. Am Donnerstag sind bis zu 31 Grad vorhergesagt, am Freitag sogar 33 Grad. Den Höhepunkt erreichen die Temperaturen am Samstag mit bis zu 34 Grad. Für die kommende Woche sagen Meteorologen eine nur geringfügige Abkühlung voraus.", pitch: 1.0, rate: 0.95 }
    ],
    items: [
      { n: 1, c: "F", de: "Frau Jürgens tritt wegen Streitigkeiten zurück.", ar: "السيدة يورغنز تستقيل بسبب الخلافات.", ma: "السيدة يورغنز استقلات بسبب الخلافات." },
      { n: 2, c: "F", de: "Die Filme werden in den Kinos der Stadt gezeigt.", ar: "تُعرض الأفلام في دور السينما بالمدينة.", ma: "الأفلام كيتعرضو فقاعات السينما فالمدينة." },
      { n: 3, c: "R", de: "Der öffentliche Nahverkehr funktioniert noch nicht störungsfrei.", ar: "وسائل النقل العام لا تعمل بعد دون مشاكل.", ma: "النقل العام مازال ما كيخدمش بلا مشاكل." },
      { n: 4, c: "R", de: "Wildes Camping ist im In- und Ausland nur bedingt zugelassen.", ar: "التخييم العشوائي مسموح به بشروط فقط في الداخل والخارج.", ma: "الكامبينغ العشوائي مسموح بشروط فالداخل والخارج." },
      { n: 5, c: "R", de: "Die Temperaturen steigen in den nächsten Tagen an.", ar: "درجات الحرارة سترتفع في الأيام القادمة.", ma: "الحرارة غادي تطلع فالأيام الجاية." }
    ],
    story: "بينما كانت وسائل النقل العام لا تعمل بعد دون مشاكل، قرر البعض الاستفادة من الوضع بالتخييم العشوائي الذي مسموح به بشروط معينة في الداخل والخارج. ومع ذلك، يجب عليهم الاستعداد لأن درجات الحرارة سترتفع في الأيام القادمة."
  },
  {
    id: "b2-horen-wahlbeteiligung",
    title: "Die Wahlbeteiligung",
    sub: "Teile 1",
    level: "B2",
    type: "horen",
    audio: [
      { text: "An der Landtagswahl im Saarland haben dieses Mal deutlich mehr Bürgerinnen und Bürger teilgenommen als an den vergangenen Wahlen. Nach Angaben des Statistischen Bundesamtes ist die Beteiligung im Vergleich zur vorangegangenen Wahl von 61,6 auf 69,7% gestiegen. Demnach gaben 540.000 der rund 775.000 Wahlberechtigten ihre Stimme ab. Es handelt sich damit um die höchste Beteiligung seit mehr als 20 Jahren. Das Saarland folgt so einem deutschlandweiten Trend, der schon bei den Landtagswahlen im vergangenen Jahr zu beobachten war. Heute gehen wieder mehr Wähler an die Wahlurnen. Dennoch machen die Nichtwähler immer noch einen beträchtlichen Anteil aus.", pitch: 1.0, rate: 0.95 },
      { text: "Wirtschaft. Das Bauunternehmen Ristec AG mit Sitz in Regensburg hat Insolvenz angemeldet. Das berichtet die Deutsche Gläubigerschutzvereinigung. Mehr als 150 Gläubigerfirmen sind davon betroffen. Diese haben Forderungen in Höhe von rund 3 Millionen € angemeldet. Als Ursache für die Insolvenz nannte die Geschäftsführung den hohen Preis- und Wettbewerbsdruck in der Baubranche. Die Aktiengesellschaft könne das Kapital für eine nötige Umstrukturierung nicht allein aufbringen. Sie hoffe daher auf Investoren. Ziel sei es, das Unternehmen weiterzuführen und die rund 250 Mitarbeiterinnen und Mitarbeiter weiter zu beschäftigen.", pitch: 1.1, rate: 0.95 },
      { text: "Karlsruhe. Über 120 Athletinnen und Athleten aus rund 40 Ländern begeisterten dieses Jahr das Publikum in der Karlsruher Leichtathletik-Arena. In der restlos ausverkauften Messehalle wurde Leichtathletik der Weltklasse geboten. Das Fazit der Veranstalter fiel ausgesprochen positiv aus. Es sei eines der besten Leichtathletik-Meetings aller Zeiten gewesen. Während das Publikum unter anderem in 2 Disziplinen neue Hallen-Europarekorde erleben durfte, zeigten sich die Sportlerinnen und Sportler begeistert von der Stimmung in der Karlsruher Arena.", pitch: 1.0, rate: 0.95 },
      { text: "Cyberangriff. Kriminellen Hackern ist es offenbar gelungen, Geld von privaten Bankkonten auf ihre eigenen Konten umzuleiten. Dafür nutzten sie eine bereits seit längerem bekannte Schwachstelle im Mobilfunknetz. Zunächst hatten die Hacker sogenannte Phishing-E-Mails verschickt, um alle nötigen Informationen wie Kontonummer, Kontostand, Passwort und Handynummer zu bekommen. Die E-Mails sahen so aus, als kämen sie von der Hausbank der Kunden, deren Antworten dann auf eine gefälschte Webseite weitergeleitet wurden. Der Angriff sei aus dem Netz eines ausländischen Providers gekommen, der mittlerweile gesperrt sei.", pitch: 1.1, rate: 0.95 },
      { text: "Europäische Union. Die Abgeordneten des Europäischen Parlaments schlagen Maßnahmen vor, um die Lebensmittelverschwendung in den Ländern der Europäischen Union bis zum Ende des nächsten Jahrzehnts um die Hälfte zu verringern. Dazu fordert das Parlament die Europäische Kommission unter anderem auf, Lebensmittelspenden zu erleichtern. In den Industrieländern würden vor allem Händler und Käufer Lebensmittel wegwerfen, so die Berichterstatterin im Parlament. Viele Verbraucher seien nicht in der Lage, die Bedeutung des Mindesthaltbarkeitsdatums und des Verbrauchsdatums zu verstehen. Deshalb solle die Kommission gezielt Maßnahmen in den Bereichen der Etikettierung und Information ergreifen. Darüber hinaus müsste man den Verbrauchern klar machen, dass Lebensmittel auch nach dem Mindesthaltbarkeitsdatum noch genießbar seien.", pitch: 1.0, rate: 0.95 }
    ],
    items: [
      { n: 1, c: "R", de: "Die Wahlbeteiligung in Deutschland nimmt wieder zu.", ar: "نسبة المشاركة في الانتخابات في ألمانيا آخذة في الازدياد مرة أخرى.", ma: "نسبة المشاركة فالانتخابات فألمانيا كتزيد." },
      { n: 2, c: "F", de: "150 Bauarbeiter müssen entlassen werden.", ar: "يجب تسريح 150 عامل بناء.", ma: "خاصهم يسرحو 150 عامل بناء." },
      { n: 3, c: "R", de: "Bei der Sportveranstaltung wurden neue Bestzeiten aufgestellt.", ar: "تم تسجيل أرقام قياسية جديدة في الحدث الرياضي.", ma: "تسجلو أرقام قياسية جديدة فالحدث الرياضي." },
      { n: 4, c: "F", de: "Die Sicherheitslücke beim Online-Banking wurde noch nicht gefunden.", ar: "لم يتم العثور على الثغرة الأمنية في الخدمات المصرفية عبر الإنترنت بعد.", ma: "ما تلقاتش الثغرة الأمنية فالبنكة عبر الإنترنت." },
      { n: 5, c: "F", de: "Kinder können in der Bücherei ihre eigenen Texte vorlesen.", ar: "يمكن للأطفال قراءة نصوصهم الخاصة في المكتبة.", ma: "الدراري يقدرو يقراو النصوص ديالهم فالمكتبة." }
    ],
    story: "في ألمانيا، تشهد نسبة المشاركة في الانتخابات ارتفاعاً ملحوظاً، بينما تُسجل أوقات قياسية جديدة في الأحداث الرياضية، مما يعكس حماس الشعب في جميع المجالات."
  },
  {
    id: "b2-horen-wetterlage-alpen",
    title: "Die Wetterlage in den Alpen",
    sub: "Teile 1",
    level: "B2",
    type: "horen",
    audio: [
      { text: "Guten Tag, hier sind die Nachrichten. Das Wetter in den Alpen bleibt weiterhin sehr wechselhaft. Entgegen der Hoffnungen vieler Urlauber wird sich die Wetterlage in den nächsten Tagen leider nicht verbessern. Im Gegenteil, Meteorologen warnen vor neuen Schneefällen und starken Winden in den höheren Lagen.", pitch: 1.0, rate: 0.95 },
      { text: "Große Überraschung im Fußball. Die Fans des FC Neustadt trauten ihren Augen kaum, als ihre Mannschaft gestern Abend völlig unerwartet das Finale gewann. Der Sieg gegen den klaren Favoriten löste bei den Anhängern riesige Begeisterung aus. Niemand hatte mit diesem Ergebnis gerechnet.", pitch: 1.1, rate: 0.95 },
      { text: "In der Stadt haben heute zahlreiche Erzieherinnen und Erzieher für bessere Arbeitsbedingungen demonstriert. Sie fordern eine deutlich bessere Bezahlung, um den wichtigen Beruf attraktiver zu machen und dem Personalmangel in den Kitas entgegenzuwirken.", pitch: 1.0, rate: 0.95 },
      { text: "Schlechte Nachrichten aus dem Berliner Zoo. Die erhoffte große Pandafamilie wird es vorerst nicht geben. Zwar leben zwei Pandas im Zoo, aber eine große Familie mit Nachwuchs ist derzeit nicht geplant. Die Besucher müssen sich also noch gedulden.", pitch: 1.1, rate: 0.95 },
      { text: "Der Deutschlandtourismus boomt. Entgegen anderslautender Gerüchte ist die Zahl der Deutschlandurlauber keineswegs rückläufig. Im Gegenteil, die Tourismusbranche verzeichnet in diesem Jahr einen deutlichen Zuwachs an Übernachtungen, besonders in den Küstenregionen.", pitch: 1.0, rate: 0.95 }
    ],
    items: [
      { n: 1, c: "F", de: "Die Wetterlage in den Alpen wird sich in den nächsten Tagen verbessern.", ar: "سوف تتحسن الأحوال الجوية في جبال الألب في الأيام المقبلة.", ma: "الجو فجبال الألب غادي يتحسن فالأيام الجاية." },
      { n: 2, c: "R", de: "Die Fans des FC Neustadt waren von dem Sieg ihrer Mannschaft überrascht.", ar: "تفاجأ مشجعو نادي إف سي نوشتات بفوز فريقهم.", ma: "مشجعي إف سي نوشتات تفاجؤو بالربحة ديال الفريق ديالهم." },
      { n: 3, c: "R", de: "Erzieherinnen verlangen eine bessere Bezahlung.", ar: "تطالب المربيات بأجر أفضل.", ma: "المربيات كيطلبو أجر مزيان." },
      { n: 4, c: "F", de: "Im Berliner Zoo gibt eine große Pandafamilie.", ar: "توجد عائلة باندا كبيرة في حديقة حيوانات برلين.", ma: "كاينة عائلة باندا كبيرة فحديقة حيوانات برلين." },
      { n: 5, c: "F", de: "Die Zahl der Deutschschland Urlauber ist rückläufig.", ar: "عدد المصطافين في ألمانيا في تراجع.", ma: "عدد المصطافين فألمانيا كينقص." }
    ],
    story: "تفاجأ مشجعو نادي إف سي نوشتات بفوز فريقهم في المباراة النهائية، بينما كانت المربيات في المدينة يطالبن بتحسين الأجور لضمان مستقبل أفضل."
  },
  {
    id: "b2-horen-wetterlage-alpen-mod1",
    title: "Wetter lang in den Alpen معدل",
    sub: "Teile 1",
    level: "B2",
    type: "horen",
    audio: [
      { text: "Guten Tag, hier sind die Nachrichten. Die Wetterlage in den Alpen bleibt angespannt. Auch in den nächsten Tagen wird sich das Wetter nicht bessern. Es bleibt kalt und ungemütlich.", pitch: 1.0, rate: 0.95 },
      { text: "Sport. Die Fans, die das Spiel ihres Teams unterstützten, waren völlig überrascht. Niemand hatte damit gerechnet, dass der FC Neustadt das Spiel gewinnen würde. Die Unterstützer feierten ausgelassen auf den Rängen.", pitch: 1.1, rate: 0.95 },
      { text: "Aus dem Berliner Zoo. Eine Familie von Pandas kommt im Park nicht an. Die erwartete Ankunft der Tiere wurde auf unbestimmte Zeit verschoben. Der Zoo bittet um Verständnis.", pitch: 1.0, rate: 0.95 },
      { text: "Reisen. Urlaub in Deutschland bedeutet in diesem Jahr leider nicht weniger Kosten. Die Preise für Hotels, Ferienwohnungen und Gastronomie sind spürbar gestiegen, was viele Urlauber vor finanzielle Herausforderungen stellt.", pitch: 1.1, rate: 0.95 },
      { text: "Gute Nachrichten für den Kita-Bereich: Die Erzieherinnen und Erzieher haben nach langen Verhandlungen bereits einen Tarifabschluss erzielt und erhalten rückwirkend mehr Geld. Sie verlangen daher aktuell keine weitere Bezahlung und sind mit dem Ergebnis zufrieden.", pitch: 1.0, rate: 0.95 }
    ],
    items: [
      { n: 1, c: "F", de: "Wetter lang in den Alpen.", ar: "الطقس في جبال الألب لفترة طويلة (أخبار الطقس).", ma: "الجو فجبال الألب لمدة طويلة (أخبار الطقس)." },
      { n: 2, c: "R", de: "Die Fans, die das Spiel unterstützten, waren überrascht und überrascht.", ar: "كان المشجعون الذين دعموا المباراة متفاجئين.", ma: "المشجعين اللي دعمو الماتش كانو متفاجئين." },
      { n: 3, c: "F", de: "Eine Familie von Pandas kommt im Park an.", ar: "تصل عائلة من الباندا إلى الحديقة.", ma: "عائلة الباندا وصلات للحديقة." },
      { n: 4, c: "F", de: "Urlaub in Deutschland und weniger Kosten.", ar: "عطلة في ألمانيا وتكاليف أقل.", ma: "عطلة فألمانيا وتكاليف قل." },
      { n: 5, c: "F", de: "Erzieherinnen verlangen bessere Bezahlung.", ar: "تطالب المربيات بأجر أفضل.", ma: "المربيات كيطلبو أجر مزيان." }
    ],
    story: "في يوم مشمس، وصلت عائلة من الباندا إلى الحديقة، مما أثار دهشة المشجعين الذين دعموا المباراة المقامة هناك. في الوقت ذاته، كانت المعلمات تطالبن بتحسين الأجور في مظاهرة قريبة."
  },
  {
    id: "b2-horen-insel-bali",
    title: "INSEL BALI",
    sub: "Teile 1",
    level: "B2",
    type: "horen",
    audio: [
      { text: "Und hier, wie immer zur vollen Stunde, die Nachrichten. Die Umweltorganisation Blue Ocean macht darauf aufmerksam, dass das Müllproblem auf Bali immer gravierender wird. Neben der wachsenden Bevölkerung und den Touristenscharen ist eine weitere Ursache dafür der grundlegende Wandel der Verpackungsmaterialien. Noch in den 70er Jahren war das Bananenblatt das gängige Verpackungsmittel. Dieses konnte man entsorgen, ohne in die natürlichen Kreisläufe einzugreifen. An dessen Stelle ist heute Plastik in allen Variationen getreten. Becher, Folien, Tüten, alles wird unkontrolliert ins Meer geworfen, da es auf der Insel keine entsprechende Infrastruktur zur Müllbeseitigung gibt. Blue Ocean appelliert daher auch an Touristen auf Bali, bewusst auf Plastikverpackungen zu verzichten.", pitch: 1.0, rate: 0.95 },
      { text: "Vegan. In Nordfrankreich hat ein Panther den Einwohnern der Kleinstadt Bégar einen Schrecken eingejagt. Am Mittwochabend ist dort die Wildkatze auf dem Dach eines Wohnhauses gesichtet worden. Sie sei auf mehreren Hausdächern herumspaziert, teilten Einsatzkräfte der Feuerwehr mit. Ein Amtstierarzt konnte die Raubkatze mit Hilfe eines Betäubungspfeils außer Gefecht setzen. Derzeit kümmern sich Tierschützer um den Panther. Wie er auf das Haus gelangen konnte, ist unklar. Die Ermittler gehen davon aus, dass er illegal in einer Wohnung gehalten wurde und durchs Fenster entkam.", pitch: 1.1, rate: 0.95 },
      { text: "Wien. Die Betriebskosten in privaten Mietshäusern sind wieder gestiegen. Das geht aus dem jüngsten Bericht der Mietervereinigung MVÖ hervor. Für den aktuellen Bericht analysierte die Mietervereinigung die Abrechnungen für das vergangene Jahr. Dem Bericht zufolge stiegen die Betriebskosten pro Quadratmeter um 3,4%. Dabei zahlen Mieterinnen und Mieter häufig für Kosten, die sie gar nicht selbst verursachen. Über ein Drittel der Betriebskosten entfallen nämlich auf Verwaltungshonorare und Versicherungsprämien. Ganz allgemein empfiehlt die MVÖ, die Abrechnungen genau zu kontrollieren. Bei rund 90% der überprüften Abrechnungen habe es nämlich Unstimmigkeiten gegeben.", pitch: 1.0, rate: 0.95 },
      { text: "In ganz Österreich ist in der Nacht auf morgen eine partielle Mondfinsternis zu beobachten. Der Erdtrabant tritt ab 22.01 Uhr in den Schatten, um 23.32 Uhr werden dann 2/3 der Mondscheibe von der Erde beschattet sein. Eine Mondfinsternis ereignet sich nur bei Vollmond. Sonne, Erde und Mond stehen dabei genau auf einer Linie und der Mond wandert durch den Schatten der Erde. Dabei kann der Mond vollständig oder nur teilweise in den Kernschatten der Erde eintauchen. In letzterem Fall spricht man von einer partiellen Mondfinsternis. Aus diesem Anlass bietet die Sternwarte der Universität Wien heute ein besonderes Programm an. Mehr dazu erfahren Sie auf unserer Webseite.", pitch: 1.1, rate: 0.95 },
      { text: "Burgenland. Der Sekthersteller Rheindorfer will wegen Anrainerbeschwerden nun doch kein neues Logistikzentrum im Burgenland errichten. Nur ein neues Produktionsgebäude werde nun gebaut, so ein Sprecher von Rheindorfer. Der geplante Bau des Logistikzentrums in einer burgenländischen Gemeinde hatte in den vergangenen Monaten auf Lokalebene für heftige Diskussionen gesorgt. Kritiker des Projektes befürchteten ein deutlich höheres Verkehrsaufkommen, vor allem von LKWs. Der Sekthersteller hat bereits ein 122.000 Quadratmeter großes Grundstück gekauft. Der Bau der neuen Kellerei, nun ohne Logistikzentrum, soll im Frühling starten.", pitch: 1.0, rate: 0.95 },
      { text: "Im Bezirk Lietz im Innviertel steht derzeit die Halle eines Müllentsorgungsunternehmens in Flammen. Der Brandalarm ging in der Nacht gegen 3.30 Uhr bei der Feuerwehr ein. Rasches Handeln war gefragt, denn neben der brennenden Halle befindet sich ein Lager mit Gefahrenstoffen. In der Halle selbst ist Altpapier gelagert. Mehr als 19 Feuerwehren mit über 200 Feuerwehrleuten sind im Einsatz. Wie der Rieder Bezirksfeuerwehrkommandant vor kurzem mitteilte, konnte das Übergreifen des Feuers auf das Gefahrenstofflager verhindert werden. Für die Bevölkerung bestehe keine Gefahr. Er rechne aber damit, dass es noch den ganzen Tag dauern werde, bis der Brand ganz gelöscht sei.", pitch: 1.1, rate: 0.95 }
    ],
    items: [
      { n: 1, c: "F", de: "Auf der Insel Bali wurden neue Maßnahmen zur Müllentsorgung beschlossen.", ar: "تم اتخاذ إجراءات جديدة لإدارة النفايات في جزيرة بالي.", ma: "تخدو إجراءات جديدة للنفايات فجزيرة بالي." },
      { n: 2, c: "R", de: "In Nordfrankreich wird nach einem entlaufenen Panther gesucht.", ar: "يتم البحث عن نمر هارب في شمال فرنسا.", ma: "كاين البحث على نمر هرب فشمال فرنسا." },
      { n: 3, c: "F", de: "Die Mietervereinigung und Mielern die Betriebskosten nicht zu bezahlen.", ar: "جمعية المستأجرين والمستأجرين لا يدفعون تكاليف التشغيل.", ma: "جمعية المستأجرين والمستأجرين ما كيخلصوش تكاليف التشغيل." },
      { n: 4, c: "R", de: "Der Sekthersteller hat die Pläne für sein Bauvorhaben geändert.", ar: "قام منتج الشمبانيا بتغيير خططه لمشروع البناء الخاص به.", ma: "مصنع الشمبانيا بدل الخطط ديال مشروع البناء ديالو." },
      { n: 5, c: "R", de: "Die Löscharbeiten sind noch nicht abgeschlosse.", ar: "عمليات الإطفاء لم تكتمل بعد.", ma: "عمليات الإطفاء مازال ما كملاتش." }
    ],
    story: "قام مصنع الشمبانيا بتغيير خططه لمشروع البناء الخاص به بعد أن تسببت الحرائق في تعطيل التقدم. لم تكتمل أعمال الإطفاء بعد، مما جعل الإدارة تعيد النظر في أولوياتها."
  },
  {
    id: "b2-horen-fluggesellschaft",
    title: "Die Fluggeselschaft",
    sub: "Teile 1",
    level: "B2",
    type: "horen",
    audio: [
      { text: "Sie hören die Nachrichten. Die Deutsche Fluggesellschaft DL steht vor der Schließung und hat alle Flüge abgesagt. Etwa 12.000 Passagiere wurden nun auf andere Flüge oder Zugverbindungen umgebucht. Die Passagiere waren größtenteils Erbe. Man habe ihnen am Flughafen keine weiteren Informationen gegeben, berichtet ein Fluggast in Rostock. Der Flug sei einfach gestrichen worden. Die Fluggesellschaft DL gibt es erst seit wenigen Jahren. Die DL hat vor allem innerdeutsche Strecken bedient und auch kleinere Flughäfen wie die in Dortmund oder Rostock.", pitch: 1.0, rate: 0.95 },
      { text: "Auf der internationalen Süßwarenmesse ISM in Köln zeigen 1400 Aussteller aus 65 Ländern ab kommendem Sonntag den Fachbesuchern ihre Kreationen. Wegen der steigenden Zuckerpreise werden Verbraucher dieses Jahr auch höhere Preise für Süßigkeiten zahlen müssen. Der Verkauf von Süßwaren ging allerdings im letzten Jahr um 10% zurück. Die Sprecherin der Süßwarenmesse, Ilona Schneider, führt dies auf ein gestiegenes Gesundheitsbewusstsein zurück. Gesunde Ernährung werde auch für Jugendliche immer wichtiger, so Schneider.", pitch: 1.1, rate: 0.95 },
      { text: "Am vergangenen Wochenende erreichte die Erde der stärkste Sonnensturm seit Jahren. Sonnenstürme sind für Erde und Menschen harmlos, allerdings traten Probleme beim Empfang von Satellitenprogrammen auf. Auch der Handyempfang war zeitweise gestört. Die Sonnenstürme lösten ebenfalls die sogenannten Polarlichter aus. Grünliche Lichter, die am Abend- und Nachthimmel zu sehen sind und meist im Norden Skandinaviens auftreten. Die Polarlichter waren ungewöhnlicherweise sogar über England zu sehen.", pitch: 1.0, rate: 0.95 },
      { text: "Die Präsidentschaftswahlen in Frankreich werfen ihre Schatten voraus. Gestern Abend haben die beiden Kandidaten in einem TV-Duell versucht, unentschlossene Wähler zu überzeugen. In dem 60-minütigen Duell wurden vor allem bildungs- und sozialpolitische Themen angesprochen. Bei einer Umfrage im Anschluss an die Sendung konnte aber kein eindeutiger Gewinner ausgemacht werden. Die Wahlen finden in 4 Wochen statt.", pitch: 1.1, rate: 0.95 },
      { text: "Und hier noch ein Hinweis für alle, die mit dem Auto unterwegs sind. Am kommenden Wochenende ist die Autobahn A3 im Kreuz Oberhausen in Richtung Arnheim-Hannover wegen Bauarbeiten gesperrt. Gesperrt ist auch die Auffahrt in Richtung Arnheim-Hannover an der Anschlussstelle Oberhausen-Holten. Die Gegenrichtung ist frei befahrbar. Umleitungen sind ausgeschildert. Dennoch bittet die Polizei alle ortskundigen Autofahrer, die Baustelle möglichst weiträumig zu umfahren.", pitch: 1.0, rate: 0.95 },
      { text: "Eine Warnung vor einem herkömmlichen Sturm hat das Deutsche Wetteramt für den Südwesten des Landes ausgegeben. Das Tief Helena zieht vom Atlantik kommend über West- und Mitteleuropa hinweg, wird Deutschland aber nur streifen. Morgen Mittag werden Sturmböen um 110 Kilometer pro Stunde erwartet. Da das Tiefdruckgebiet auch Starkregen mit sich bringt, warnen Feuerwehren nicht nur vor herunterfallenden Gegenständen, sondern auch vor überfluteten Straßen. Autofahrer werden daher um besondere Vorsicht gebeten. Und wie wird das Wetter sonst in Deutschland? Hier sind die Wetteraussichten.", pitch: 1.1, rate: 0.95 }
    ],
    items: [
      { n: 1, c: "R", de: "Kunden der Fluaggeselschaft DL äuBern Unzufriedenheit", ar: "عملاء شركة الطيران DL يعبرون عن عدم رضاهم.", ma: "كليان ديال شركة الطيران DL كيعبرو على عدم الرضا ديالهم." },
      { n: 2, c: "F", de: "Die Preise von Süßwaren wurden dieses Jahr gesenkt, um Käufer zurückzugewinnen.", ar: "تم تخفيض أسعار الحلويات هذا العام لاستعادة المشترين.", ma: "تنقصو أثمنة الحلويات هاد العام باش يرجعو الكليان." },
      { n: 3, c: "F", de: "Die Sonnenstürme hatten keine negativen Auswirkungen.", ar: "لم يكن للعواصف الشمسية أي آثار سلبية.", ma: "العواصف الشمسية ما كانش عندها تأثيرات سلبية." },
      { n: 4, c: "F", de: "Einer der Kandidaten konnte die Mehrheit der Zuschauer auf seine Seite bringen.", ar: "تمكن أحد المرشحين من كسب غالبية المشاهدين إلى جانبه.", ma: "واحد من المترشحين قدر يجذب الأغلبية ديال المشاهدين لصفحتو." },
      { n: 5, c: "R", de: "Das Tiefdruckgebiet „Helena“ kann morgen im Südwesten Deutschlands Verkehrsprobleme verursachen.", ar: "قد يتسبب المنخفض الجوي 'هيلينا' غدًا في مشاكل مرورية في جنوب غرب ألمانيا.", ma: "المنخفض الجوي 'هيلينا' يمكن يسبب غدا مشاكل فالسير فجنوب غرب ألمانيا." }
    ],
    story: "عبر عملاء شركة الطيران عن عدم رضاهم بسبب تأخر الرحلات، بينما يتوقع أن يتسبب المنخفض الجوي 'هيلينا' في مشاكل مرورية في جنوب غرب ألمانيا غداً."
  },
  {
    id: "b2-horen-fluggesellschaft-mod1",
    title: "Der Fluggesellschaft معدل",
    sub: "Teile 1",
    level: "B2",
    type: "horen",
    audio: [
      { text: "Sie hören die Nachrichten. Die Deutsche Fluggesellschaft DL steht vor der Schließung und hat alle Flüge abgesagt. Etwa 12.000 Passagiere wurden nun auf andere Flüge oder Zugverbindungen umgebucht. Die Passagiere waren größtenteils Erbe. Man habe ihnen am Flughafen keine weiteren Informationen gegeben, berichtet ein Fluggast in Rostock. Der Flug sei einfach gestrichen worden. Die Fluggesellschaft DL gibt es erst seit wenigen Jahren. Die DL hat vor allem innerdeutsche Strecken bedient und auch kleinere Flughäfen wie die in Dortmund oder Rostock.", pitch: 1.0, rate: 0.95 },
      { text: "Auf der internationalen Süßwarenmesse ISM in Köln zeigen 1400 Aussteller aus 65 Ländern ab kommendem Sonntag den Fachbesuchern ihre Kreationen. Wegen der steigenden Zuckerpreise werden Verbraucher dieses Jahr auch höhere Preise für Süßigkeiten zahlen müssen. Der Verkauf von Süßwaren ging allerdings im letzten Jahr um 10% zurück. Die Sprecherin der Süßwarenmesse, Ilona Schneider, führt dies auf ein gestiegenes Gesundheitsbewusstsein zurück. Gesunde Ernährung werde auch für Jugendliche immer wichtiger, so Schneider.", pitch: 1.1, rate: 0.95 },
      { text: "Am vergangenen Wochenende erreichte die Erde der stärkste Sonnensturm seit Jahren. Sonnenstürme sind für Erde und Menschen harmlos, allerdings traten Probleme beim Empfang von Satellitenprogrammen auf. Auch der Handyempfang war zeitweise gestört. Die Sonnenstürme lösten ebenfalls die sogenannten Polarlichter aus. Grünliche Lichter, die am Abend- und Nachthimmel zu sehen sind und meist im Norden Skandinaviens auftreten. Die Polarlichter waren ungewöhnlicherweise sogar über England zu sehen.", pitch: 1.0, rate: 0.95 },
      { text: "Die Präsidentschaftswahlen in Frankreich werfen ihre Schatten voraus. Gestern Abend haben die beiden Kandidaten in einem TV-Duell versucht, unentschlossene Wähler zu überzeugen. In dem 60-minütigen Duell wurden vor allem bildungs- und sozialpolitische Themen angesprochen. Bei einer Umfrage im Anschluss an die Sendung konnte aber kein eindeutiger Gewinner ausgemacht werden. Die Wahlen finden in 4 Wochen statt.", pitch: 1.1, rate: 0.95 },
      { text: "Und hier noch ein Hinweis für alle, die mit dem Auto unterwegs sind. Am kommenden Wochenende ist die Autobahn A3 im Kreuz Oberhausen in Richtung Arnheim-Hannover wegen Bauarbeiten gesperrt. Gesperrt ist auch die Auffahrt in Richtung Arnheim-Hannover an der Anschlussstelle Oberhausen-Holten. Die Gegenrichtung ist frei befahrbar. Umleitungen sind ausgeschildert. Dennoch bittet die Polizei alle ortskundigen Autofahrer, die Baustelle möglichst weiträumig zu umfahren.", pitch: 1.0, rate: 0.95 },
      { text: "Eine Warnung vor einem herkömmlichen Sturm hat das Deutsche Wetteramt für den Südwesten des Landes ausgegeben. Das Tief Helena zieht vom Atlantik kommend über West- und Mitteleuropa hinweg, wird Deutschland aber nur streifen. Morgen Mittag werden Sturmböen um 110 Kilometer pro Stunde erwartet. Da das Tiefdruckgebiet auch Starkregen mit sich bringt, warnen Feuerwehren nicht nur vor herunterfallenden Gegenständen, sondern auch vor überfluteten Straßen. Autofahrer werden daher um besondere Vorsicht gebeten. Und wie wird das Wetter sonst in Deutschland? Hier sind die Wetteraussichten.", pitch: 1.1, rate: 0.95 }
    ],
    items: [
      { n: 1, c: "R", de: "Die Fluggesellschaft DL fliegt z. B. Rostock nicht mehr an.", ar: "شركة الطيران DL لم تعد تسير رحلات إلى روستوك على سبيل المثال.", ma: "شركة الطيران DL ما بقاتش كتسير رحلات لروستوك مثلا." },
      { n: 2, c: "F", de: "Süßwaren wurden dieses Jahr angeboten, um Käufer zurückzugewinnen.", ar: "تم تقديم الحلويات هذا العام لاستعادة المشترين.", ma: "قدمو الحلويات هاد العام باش يرجعو المشترين." },
      { n: 3, c: "F", de: "Die Sonnenstürme hatten keine negativen Auswirkungen.", ar: "لم يكن للعواصف الشمسية أي آثار سلبية.", ma: "العواصف الشمسية ما كانش عندها تأثيرات سلبية." },
      { n: 4, c: "F", de: "Einer der Kandidaten konnte die Mehrheit der Zuschauer für sich gewinnen.", ar: "تمكن أحد المرشحين من كسب غالبية المشاهدين لصالحه.", ma: "واحد من المترشحين قدر يجذب الأغلبية ديال المشاهدين لصالحو." },
      { n: 5, c: "R", de: "Das Tiefdruckgebiet „Helena“ kann morgen im Südwesten Deutschlands Verkehrsprobleme verursachen.", ar: "قد يتسبب المنخفض الجوي 'هيلينا' غدًا في مشاكل مرورية في جنوب غرب ألمانيا.", ma: "المنخفض الجوي 'هيلينا' يمكن يسبب غدا مشاكل فالسير فجنوب غرب ألمانيا." }
    ],
    story: "شركة الطيران لم تعد تسير رحلات إلى روستوك، حيث أن المنخفض الجوي 'هيلينا' قد يتسبب في مشاكل مرورية جنوب غرب ألمانيا غداً."
  }
);

// --- 3. دروس الكتابة (Schreiben) ---
window.B2_SCHREIBEN_DATA = [
  {
    id: "b2-schreiben-kochkurs",
    title: "Kochkurs Für Anfänger.",
    level: "B2",
    text: "Kochen leicht gemacht!\nKochkurs für Anfängerinnen und Anfänger\nBist du bereit, die Welt des Kochens zu entdecken? Unser Kochkurs für Anfängerinnen und Anfänger ist der perfekte Einstieg!\n\nIn einer entspannten und freundlichen Atmosphäre lernst du die Grundlagen für die Zubereitung leckere Gerichte kennen und kannst dadurch auch bald selbst dein eigenes Lieblingsessen zubereiten!\n\nWas dich erwartet:\n• einfache Rezepte für leckere und gesunde Mahlzeiten\n• praktische Übungen unter professioneller Anleitung\n• gemeinschaftliche Atmosphäre beim gemeinsamen Kochen und Essen mit Gleichgesinnten\n\nKursdetails:\nDauer: 4 Wochen\nOrt: Küchenstudio Michealisbaum\nZeit: mittwochs 17:00–19:30 Uhr\nKosten: 250 Euro inklusive aller Zutaten und Getränke\n\nKontakt: info@kochenleicht.com oder 0344 258584",
    transText: {
      ar: "الطبخ أصبح سهلاً!\nدورة طبخ للمبتدئين والمبتدئات\nهل أنت مستعد لاكتشاف عالم الطبخ؟ دورتنا للطبخ للمبتدئين والمبتدئات هي البداية المثالية!\n\nفي جو مريح وودي، ستتعلم أساسيات إعداد أطباق لذيذة، مما سيمكنك قريباً من إعداد وجبتك المفضلة بنفسك!\n\nما ينتظرك:\n• وصفات بسيطة لوجبات لذيذة وصحية\n• تمارين عملية تحت إشراف مهني\n• جو جماعي أثناء الطبخ وتناول الطعام مع أشخاص يشاركونك نفس الاهتمامات\n\nتفاصيل الدورة:\nالمدة: 4 أسابيع\nالمكان: استوديو الطبخ ميخائيليسباوم\nالوقت: أيام الأربعاء 17:00 - 19:30\nالتكلفة: 250 يورو شاملة جميع المكونات والمشروبات\n\nللتواصل: info@kochenleicht.com أو 0344 258584",
      ma: "الطياب ولا ساهل!\nدورة ديال الطياب للمبتدئين والمبتدئات\nواش واجد باش تكتشف عالم الطياب؟ دورة الطياب ديالنا للمبتدئين هي البداية المثالية!\n\nفجو مريح وودي، غادي تتعلم أساسيات تحضير أطباق بنينة، وهادشي غادي يخليك قريب تقدر تحضر الماكلة المفضلة ديالك براسك!\n\nشنو غادي تلقى:\n• وصفات بسيطة لماكلة بنينة وصحية\n• تمارين عملية تحت إشراف مهني\n• جو جماعي فوقت الطياب والماكلة مع ناس عندهم نفس الاهتمامات\n\nتفاصيل الدورة:\nالمدة: 4 سيمانات\nالمكان: ستوديو الطياب ميخائيليسباوم\nالوقت: أيام الأربعاء من 17:00 حتى 19:30\nالثمن: 250 يورو شاملة كاع المكونات والمشروبات\n\nللتواصل: info@kochenleicht.com أو 0344 258584"
    },
    task: "Sie haben an einem Kochkurs für Anfängerinnen und Anfänger teilgenommen. Leider waren Sie überhaupt nicht zufrieden. Schreiben Sie eine Beschwerde an den Veranstalter. Behandeln Sie darin entweder a) drei der folgenden Punkte oder b) zwei der folgenden Punkte und einen Aspekt Ihrer Wahl. Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, einen passenden Betreff, eine passende Anrede, Einleitung und einen passenden Schluss. Schreiben Sie mindestens 150 Wörter.\n\n1. Beschreiben Sie Ihre Erwartungen nach dem Lesen der Werbeanzeige.\n2. Schildern Sie, was Sie bei dem Kochkurs erlebt haben.\n3. Erklären Sie, welche Erwartungen Sie an den Veranstalter haben.\n4. Beschreiben Sie, was Sie tun, falls Sie keine Antwort bekommen.",
    transTask: {
      ar: "لقد شاركت في دورة طبخ للمبتدئين. لسوء الحظ، لم تكن راضيًا على الإطلاق. اكتب شكوى إلى المنظم. تعامل فيها إما أ) ثلاث نقاط من النقاط التالية أو ب) نقطتين من النقاط التالية وجانبًا من اختيارك. فكر قبل الكتابة في ترتيب مناسب للنقاط، وموضوع مناسب، وتحيات مناسبة، ومقدمة وخاتمة مناسبة. اكتب 150 كلمة على الأقل.\n\n1. صف توقعاتك بعد قراءة الإعلان.\n2. صف ما واجهته في دورة الطبخ.\n3. اشرح ما هي توقعاتك من المنظم.\n4. صف ما ستفعله إذا لم تحصل على رد.",
      ma: "شاركتي فدورة ديال الطياب للمبتدئين. للأسف، ما كنتيش راضي حتى شي حاجة. كتب شكاية للمنظم. تعامل فيها يا إما أ) 3 ديال النقاط اللي جايين ولا ب) جوج ديال النقاط اللي جايين وجانب من اختيارك. فكر قبل ما تكتب فالترتيب المناسب ديال النقاط، موضوع مناسب، تحية مناسبة، مقدمة وخاتمة مناسبة. كتب 150 كلمة على الأقل.\n\n1. وصف التوقعات ديالك من بعد ما قريتي الإعلان.\n2. وصف شنو وقع ليك فدورة الطياب.\n3. شرح شنو هي التوقعات ديالك من المنظم.\n4. وصف شنو غادي دير يلا ما وصلكش جواب."
    },
    points: [
      "1. Beschreiben Sie Ihre Erwartungen nach dem Lesen der Werbeanzeige.",
      "2. Schildern Sie, was Sie bei dem Kochkurs erlebt haben.",
      "3. Erklären Sie, welche Erwartungen Sie an den Veranstalter haben.",
      "4. Beschreiben Sie, was Sie tun, falls Sie keine Antwort bekommen."
    ]
  },
  {
    id: "b2-schreiben-fotobuch",
    title: "Fotobuch",
    level: "B2",
    text: "Halten Sie Ihre schönsten Erinnerungen fest! Wir machen aus Ihren Fotos ein Meisterwerk!\n\n•Brillante Farben und gestochen scharfe Bilder \n•Hochwertiges Papier und edle Einbände\n•Kinderleichte Gestaltung mit unserer Software\n•Blitzschnelle Lieferung innerhalb von 48 Stunden\n•100% Zufriedenheitsgarantie und 24/7 Kundenservice\n\nGestalten Sie noch heute Ihr persönliches Fotobuch! Wir garantieren Ihnen ein perfektes Ergebnis für Ihre Urlaubs-, Hochzeits- oder Familienfotos. Laden Sie einfach Ihre Bilder hoch und wir kümmern uns um den Rest. Bei Fragen und Problemen können Sie sich rund um die Uhr an unseren Service wenden. Unsere kompetenten Mitarbeiter helfen Ihnen gern.",
    transText: {
      ar: "احتفظ بأجمل ذكرياتك! نحن نصنع من صورك تحفة فنية!\n\n• ألوان زاهية وصور واضحة للغاية\n• ورق عالي الجودة وغلاف فاخر\n• تصميم سهل للغاية باستخدام برنامجنا\n• تسليم سريع خلال 48 ساعة\n• ضمان رضا بنسبة 100% وخدمة عملاء على مدار الساعة\n\nصمم كتاب صورك الشخصي اليوم! نضمن لك نتيجة مثالية لصور عطلتك، زفافك، أو عائلتك. ما عليك سوى رفع صورك وسنتولى الباقي. إذا كانت لديك أي أسئلة أو مشاكل، يمكنك الاتصال بخدمتنا على مدار الساعة. موظفونا المؤهلون سيساعدونك بكل سرور.",
      ma: "حافظ على أحسن الذكريات ديالك! حنا كنديرو من التصاور ديالك تحفة فنية!\n\n• ألوان زاهية وتصاور واضحة بزاف\n• ورق عالي الجودة وغلاف فاخر\n• تصميم ساهل بزاف بالبرنامج ديالنا\n• تسليم سريع ف 48 ساعة\n• ضمان الرضا بنسبة 100% وخدمة الكليان 24/7\n\nصمم كتاب التصاور الشخصي ديالك اليوم! كنضمنو ليك نتيجة مثالية لتصاور العطلة، العرس، ولا العائلة ديالك. غير حمل التصاور ديالك وحنا نتكلفو بالباقي. يلا كانو عندك أسئلة ولا مشاكل، تقدر تتواصل مع الخدمة ديالنا 24 ساعة. الموظفين ديالنا المؤهلين غادي يعاونوك بكل سرور."
    },
    task: "Sie haben bei der Firma Premium-Fotobuch24 ein Fotobuch mit Ihren Urlaubsfotos bestellt. Leider waren Sie mit dem Produkt und dem Service der Firma sehr unzufrieden. Die Druckqualität war schlecht, die Lieferung kam viel zu spät, und Sie konnten keinen Service-Mitarbeiter erreichen. Schreiben Sie eine E-Mail, in der Sie sich über die Unannehmlichkeiten beschweren.\n\n1. Erklären Sie, warum Sie sich für Premium-Fotobuch24 entschieden haben.\n2. Beschreiben Sie, welche Probleme es mit dem Fotobuch gab.\n3. Erläutern Sie, welche Probleme es mit dem Service der Firma gab.\n4. Schreiben Sie, was Sie jetzt von der Firma erwarten.",
    transTask: {
      ar: "لقد طلبت كتاب صور من شركة Premium-Fotobuch24 يحتوي على صور عطلتك. للأسف، كنت غير راضٍ عن المنتج وخدمة الشركة. كانت جودة الطباعة سيئة، والتسليم جاء متأخراً جداً، ولم تتمكن من الوصول إلى أي موظف خدمة. اكتب بريدًا إلكترونيًا تشكو فيه من الإزعاج.\n\n1. اشرح لماذا اخترت Premium-Fotobuch24.\n2. صف المشاكل المتعلقة بكتاب الصور.\n3. اشرح المشاكل المتعلقة بخدمة الشركة.\n4. اكتب ما تتوقعه من الشركة الآن.",
      ma: "طلبتي كتاب تصاور من شركة Premium-Fotobuch24 فيه تصاور العطلة ديالك. للأسف، ما كنتيش راضي على المنتج والخدمة ديال الشركة. جودة الطبع كانت خايبة، والتوصيل جا متأخر بزاف، وما قدرتيش تتواصل مع حتى شي موظف. كتب إيميل كتشكي فيه على هاد المشاكل.\n\n1. شرح علاش ختاريتي Premium-Fotobuch24.\n2. وصف المشاكل اللي كانت فكتاب التصاور.\n3. شرح المشاكل اللي كانت فالخدمة ديال الشركة.\n4. كتب شنو كتتوقع من الشركة دابا."
    },
    points: [
      "1. Erklären Sie, warum Sie sich für Premium-Fotobuch24 entschieden haben.",
      "2. Beschreiben Sie, welche Probleme es mit dem Fotobuch gab.",
      "3. Erläutern Sie, welche Probleme es mit dem Service der Firma gab.",
      "4. Schreiben Sie, was Sie jetzt von der Firma erwarten."
    ]
  },
  {
    id: "b2-schreiben-tikki-takka",
    title: "Abenteuer TIKKI TAKKA",
    level: "B2",
    text: "Das Party-Abenteuer für Kinder!\nErleben Sie spannende Kinder-Partys mit TIKKI TAKKA!\n\n• Abenteuerliche Spiele und lustige Party-Animation\n• Spaßige Schatzsuchen & spannende Entdeckungsreisen\n• Zauberer, Clowns & Kinderschminken\n• Tolle Party-Pakete für unvergessliche Erlebnisse\nTOLLE AKTIONSPREISE!\n\nAbenteuer TIKKI TAKKA\nBirkenweg 5, 12345 Beispielstadt\nwww.tikki-takka.de\n+49 1234 567890",
    transText: {
      ar: "مغامرة الحفلات للأطفال!\nاستمتعوا بحفلات الأطفال المثيرة مع TIKKI TAKKA!\n\n• ألعاب مغامرات وأنشطة حفلات ممتعة\n• بحث عن الكنز و رحلات اكتشاف مثيرة\n• سحرة، مهرجون وتزيين وجه الأطفال\n• باقات حفلات رائعة لتجارب لا تُنسى\nأسعار رائعة!\n\nمغامرة TIKKI TAKKA\nطريق بيركن 5، 12345 مدينة المثال\nwww.tikki-takka.de\n+49 1234 567890",
      ma: "مغامرة الحفلات للدراري!\nعيشو حفلات دراري مثيرة مع TIKKI TAKKA!\n\n• ألعاب مغامرات وأنشطة حفلات ممتعة\n• بحث على الكنز ورحلات اكتشاف مثيرة\n• سحرة، مهرجين وتزيين وجه الدراري\n• باقات حفلات رائعة لتجارب ما تتنساش\nأثمنة رائعة!\n\nمغامرة TIKKI TAKKA\nزنقة بيركن 5، 12345 مدينة المثال\nwww.tikki-takka.de\n+49 1234 567890"
    },
    task: "Sie haben bei der Firma Abenteuer TIKKI TAKKA eine Schatzsuche für den Geburtstag Ihres Kindes gebucht. Trotz günstiger Preise war die Geburtstagsfeier nicht so schön wie erwartet und Sie sind nicht damit zufrieden. Schreiben Sie eine Beschwerde und gehen Sie dabei auf die genannten Punkte ein.\n\n1. Mit welchem Angebot waren Sie nicht zufrieden?\n2. Erklären Sie, warum das Angebot nicht begeistert hat.\n3. Vorschläge für Verbesserungen: Was konnte TIKKI TAKKA Ihrer Meinung nach besser machen?",
    transTask: {
      ar: "لقد حجزتم في شركة مغامرة TIKKI TAKKA بحثًا عن الكنز بمناسبة عيد ميلاد طفلكم. على الرغم من الأسعار المعقولة، إلا أن حفلة عيد الميلاد لم تكن كما هو متوقع ولم تكونوا راضين عنها. اكتبوا شكوى واذكروا النقاط المذكورة.\n\n(1) أشنو هو العرض لي ماعجبكش؟\n(2) شرح علاش العرض ماكانش زوين.\n(3) اقتراحات للتحسين.",
      ma: "حجزتو فشركة مغامرة TIKKI TAKKA بحث على الكنز بمناسبة عيد ميلاد ولدكم. واخا الأثمنة كانت معقولة، الحفلة ما كانتش كيفما كنتو متوقعين وما كنتوش راضيين. كتبو شكاية واذكرو النقاط اللي ذكرو.\n\n(1) أشنو هو العرض لي ماعجبكش؟\n(2) شرح علاش العرض ماكانش زوين.\n(3) اقتراحات للتحسين."
    },
    points: [
      "1. Mit welchem Angebot waren Sie nicht zufrieden?",
      "2. Erklären Sie, warum das Angebot nicht begeistert hat.",
      "3. Vorschlags für Verbesserungen: Was konnte TIKKI TAKKA Ihrer Meinung nach besser machen?"
    ]
  }
];

// --- 4. قسم الامتحانات (Prüfungen) ---
window.B2_PRUEFUNG_DATA = [
  { id: "p-b2-t1", title: "Teil 1", desc: "مطابقة النصوص والعناوين" },
  { id: "p-b2-t2", title: "Teil 2", desc: "النصوص الطويلة" },
  { id: "p-b2-t3", title: "Teil 3", desc: "الاعلانات والحالات" },
  { id: "p-b2-s1", title: "Sprachbaustein 1", desc: "بناء الجملة" },
  { id: "p-b2-s2", title: "Sprachbaustein 2", desc: "المفردات والقواعد" },
  { id: "p-b2-all", title: "امتحان كامل عشوائي", desc: "كل الأجزاء دفعة واحدة — Teil 1 · 2 · 3 · Sprachbaustein 1 · 2", isFull: true }
];

// --- 5. سميات الدروس كاملة (Placeholders) ---
window.B2_PLACEHOLDER_LESSONS = {
  Lesen: {
    "Teile 1": [
      "Jugend Forscher / Kellner", "Sport Ist Gesund", "Tanzkurs", "Impfung", "Insel", 
      "Bilder", "Grundschule", "Österreich النمسا", "Insekten / الحشرات", "Das Benzin", 
      "Kaffeee القهوة", "Programmierer", "Trampoline", "Bonbons", "Umwelt", "Licht", 
      "Kartoffel", "Bienen", "Spiele", "Geld", "Kinder Und Schulen", "هاتف اطفال", 
      "Alpen", "المخدرات", "الانتخابات_و_المرأة_الروسية", "Kein Zeit", "Limonade", 
      "Auf Dem Weg", "الألوان", "Schlafzug", "Löwen اسود", "Fisch - السمك", 
      "Frauen Im Arbeitsmarket", "Baby Tv / Kleinkindern Fernsehen", "Bäder / الرحلة", 
      "Wetter / الطقس", "Computer / كمبيوتر", "Nordsee / بحر الشمال", "Autos / السيارات", 
      "Evolution /التطور", "Gedächtnis / ذاكرة", "Wohnen / الإقامة", "Lebensmodelle", 
      "Gesundheit / Symptomen", "Das Alte Leben"
    ],
    "Teile 2": [
      "Krista", "Der Ein-Personen-Karneval", "Ein Leben Für Den Kaffee", "Kreditkarte", 
      "Gedächtnis", "Kaufentscheidungen التسوق", "Kellnern - Neben Job (Noch Ein Wasser Bitte)", 
      "Gesundes Essen Für Schulkinder", "Geschichte Des Hauspersonals", "Österreich,Das Land Der Poolbesitzer.", 
      "Großraumbüros المكاتب الكبيرة", "Korbjagd Zu Pferde", "Mehrsprachige Erziehung", 
      "Verpackungen Im Supermarkt: Geht’s Auch Ohne?", "Der Puppenmacher صانع الدمى", 
      "Lehrkräftepreis: Lehrerin Aus Frankfurt Ausgezeichnet", "Wer Parkt, Muss Zahlen", 
      "Familienglück Oder Generationskonflikte?", "Traumfrau Und Traummann Gesucht", 
      "Wie Babys Lernen", "Volkskrankheit Rückenschmerz", "Die Ganze Welt Auf Dem Eigenen PC", 
      "Die Deutschen Und Ihre Ernährung", "Weniger Euro-„Blüten“ In Deutschland", 
      "Nachtzug", "Wie Zwei US - Teenager Millionäre Wurden", "Kreuzfahrttourismus / Auswirkungen Von Massentourismus", 
      "Lebenslanges Lernen"
    ],
    "Teile 3": [
      "Aflam -Fernsehprogramme.", "Sport Ist Gesund إعلانات", "Kein Zeit Anzeigen - كاين تسايت",
      "Musik Und Gitarre -موسيقى", "Schwangere Frau - المرأة الحامل", "Ünterstützung In Mathematik",
      "Ganztageausflug", "Ihren Eltern Zur Silberhochzeit", "Anwalt - المحامي",
      "Aupair Mädchen - اعلانات الحشرات", "Hautprobleme", "Eine Bekannte Ist Schwanger Sportarten الأكل و الألم",
      "Die Tochter Einer Bekannten Wird Vier Jahre Alt.- اعلانات الحلوة", "Bekannter Interessiert Sich Für Tierdokumentationen",
      "Ihre Schränke Sind Voll Mit Sachen", "Freizeit Und Ausflüge - الاستجمام والرحلات",
      "Sport - الریاضة", "Wein Und Insekten - النبیذ والحشرات", "المرشد السياحي",
      "Gartenbau - الحدائق", "Haushaltshilfe - الخادمة", "Einen Dokumentarfilm Über Die Einwanderun",
      "Auf Dem Weg Anzeigen - اوف ديم فيك", "Kollegin Kann Ihren Arbeitsbereich Nicht Gut Strukturieren",
      "Hunde الكلاب", "Schnelle Wasserfahrzeuge - اعلانات الألوان", "Ein Paar Tage In Berlin- اعلانات قطار النوم",
      "Autos - السيارات", "Möbel", "Geschäftsreisen - رحلات العمل",
      "Geschenk Für Ihren Zehnjährigen", "Ein Austauschjahr"
    ],
    "Sprach 1": [
      "Hallo Ferdinand", "Liebe Vanessa,", "Hallo Judith / Lina", "Liebe Karin", "Hallo Leon", 
      "Sehr Geehrter Herr Martini", "Liebe Maria, Lieber Timur", "Lieber Justus Oder Juhannas", 
      "Lieber Thomas Oder Lieber Ramon", "Sehr Geehrte Frau Goronsksa", "Liebe Agnieszka / Liebe Anna", 
      "Herr Dr. Moosberger / Dr. Dobromil معدل", "Liebe Lina, Lieber Florian", "Liebes Julian", 
      "Liebe Meike", "Liebe Corinna معدل", "Liebe Ida,", "Liebe Paola", "Liebe Jutta", 
      "Liebe Familie Geissler, Oder Dippold", "Liebe Andrea,", "Hallo Maria,", "Sehr Geehrte Frau Szabo,", 
      "Lieber Igor", "Liebe Lara", "Lieber David", "Sehr Geehrter Herr Wenzel", 
      "Liebe Autorinnen Und Autoren,", "Liebe Clara", "Sehr Geehrte Frau Melchior", 
      "Liebe Sandra,", "Liebe Anna, (الجديد)", "Hi Jens", "Hey Jan", "Hallo Jakob"
    ],
    "Sprach 2": [
      "Das Fahrrad", "Man(N) Kocht Selbst", "Jugend Diskutiert - Mach Mit!", 
      "Theater Für Kinder Und Jugendliche", "Umgang Mit Haustieren", "Liebesgrüße Aus Der Kühltruhe", 
      "Online-Sprachkurse", "Deutschland – Ein Paradies Für Kinder?", "Das Schicksal Des Braunbären", 
      "Was Steckt Hinter “ Bio”?", "Sicherer Schulweg طريق أمن للمدرسة", "Der Hund Als Intelligentes Wesen", 
      "Die Wichtigsten Regeln Auf Der Skipiste", "Kaffee Und Kuchen – Ein Stück Tradition", 
      "Fische Sind Schlauer, Als Wir Denken", "Schwarzarbeit Kann Teuer Werden", 
      "Teamarbeit Als Schlüssel Zum Erfolg -Affen", "Wie Handschrift Wieder Cool Wird معدل", 
      "Ausbildung Mit Über 30", "Verlernen Die Deutschen Die Höflichkeit?", "Joggen : Mehr Als Nur Laufen", 
      "Der Klügste Freund Des Menschen", "Manipulierte Bilder", "Maßgeschneidert Nach Bodyscanning", 
      "Im Restaurant", "Lernen Ist Kein Privileg Der Jugend (Senioren )", 
      "Wie TV-Bilder Die Fantasie Von Kindern Prägen", "Städte Vor Dem Infarkt", "Obst Und Gemüse", 
      "Die Katzen - القطط", "Teleshopping", "Die Rückkehr Des Nachtzugs", 
      "Die Reise Im Schlafwagen .", "Garten In Der Stadt", 
      "Über Den Zusammenhang Zwischen Hobby Und Charakter", "Sprachwandel"
    ]
  },
  Hören: {
    "Teile 1": [
      "Die Deutsche Lufthansa", "Piloten der Lufthansa 3 معدل.", "Die Stadt Friedrichsberg", 
      "Erdbeben", "Bierkonsum", "Bierkonsum معدل", "Deutsches Schiff", "WenigerVögel - Viele Kunden", 
      "Europäischen Union", "Unwetterschäden", "nicht sicher", "Es ist unklar", 
      "Frau Jürgens", "Die Wahlbeteiligung", "Die Wetterlage in den Alpen", 
      "Wetter lang in den Alpen معدل", "INSEL BALI", "Die Fluggeselschaft", 
      "Der Fluggesellschaft معدل", "Der Bau", "50-Euro", "Das Schladminger", 
      "Bei den Europawahlen (Linksparteien )", "Bei den Europawahlen (die CDU und CSU ) معدل", 
      "Die Bundesländer", "Bio-Siegels", "Berufen (bonbon)", "Die Zahl der Arbeitslosen", 
      "BILD AM SONNTAG", "Studentenparty in Frankreich", "Deutsche Filmmuseum", 
      "Ein Treffen bei der Integrationsbeauftragten", "die Konjunkturentwicklung negativ", 
      "internationalen Konferenz", "Um Tickets zu gewinnen", "Die tschechische Stadt Pilsen", 
      "Laut Statistischem Bundesamt", "In Frankfurt haben Manager", "Für die Polizei in Berlin", 
      "Die Sprecherin ist verheiratet", "Bei der Sportveranstaltung", "Das Bundesfamilienministerium", 
      "Meeresküsten", "Bauern warnen", "Nach Ansicht mancher", "Elbjazz-Festival", 
      "Bürger", "Nord-Ostsee", "AirBerlin", "Softdrinks", "Co-Living", "Homeoffice", 
      "Paris", "Japan", "Theaterpremiere", "Lorenzo", "EU-Klimapaket", "Frühzeitige", 
      "Fahrkarten", "Busfahrer", "Belegschaftsengpass", "Telefon", "Musikfestivals", 
      "Musikfestivals معدل", "Fahrschule", "Im Süden Deutschlands regnen", 
      "Im Süden Deutschlands Schnee", "INTERNET PRÜFEN", "EHRENAMTS", "EHRENAMTS معدل", 
      "Demonstration", "Wochenanfang", "Im August", "Fundbüro", "Ausgang 26", 
      "Ausgang 26 معدل", "Blutspenden", "Reitturnier", "Delikatessen", 
      "Für ein Konzert (dem Bus gratis)", "Für ein Konzert (in der ganzen Stadt )", 
      "In Raum C23", "Trainingsausfahrten", "Das Geschäft", "Nach einer Großdemonstration", 
      "Das Fest (Fahrkarte هي نفسها )", "Das Fest ( Fahrkarte هي نفسها )", 
      "Radio Konzert", "Sie Hören Den Anrufbeantworter-Buchhandlung", "Bayern Radio", 
      "Die Gruppe Die Prinzen", "spätestens in Hannover", "Für das Konzert mit Romano", 
      "Gartenausstellung KöGa", "den Opel-Zoo", "Der Christkindlesmarkt in Nürnberg", 
      "Alle Flüge der Fluglinie", "Auto gewinnen", "Die Fahrradtouren von Berlin", 
      "Die Literaturmesse für Kleinverleger", "Fußballspiels im Ostpark", "Das Treffen", 
      "im Frankfurter Zoo", "Ein Teil der kostenlosen", "Auf der Viktoriabrücke", 
      "Die Buchpräsentation", "Konzert ist am 29 Mai", "Autobahn A4 / 50 cent", 
      "Beim Klassik-Radio", "Open-Air-Kino", "Aktionstag", "Klavierkonzert", 
      "Süddeutschland", "Zugverkehr", "Musikfest", "Akrobatik-Show im Park", 
      "In Raum C23 (المعدل)"
    ],
    "Teile 2": [],
    "Teile 3": [
      "Telefon", "Musikfestivals", "Musikfestivals معدل", "Fahrschule", 
      "Im Süden Deutschlands regnen", "Im Süden Deutschlands Schnee", "INTERNET PRÜFEN", 
      "EHRENAMTS", "EHRENAMTS معدل", "Demonstration", "Wochenanfang", "Im August", 
      "Fundbüro", "Ausgang 26", "Ausgang 26 معدل", "Blutspenden", "Reitturnier", 
      "Delikatessen", "Für ein Konzert (dem Bus gratis)", "Für ein Konzert (in der ganzen Stadt )", 
      "In Raum C23", "Trainingsausfahrten", "Das Geschäft", "Nach einer Großdemonstration", 
      "Das Fest (Fahrkarte هي نفسها )", "Das Fest ( Fahrkarte هي نفسها )", 
      "Radio Konzert", "Sie Hören Den Anrufbeantworter-Buchhandlung", "Bayern Radio", 
      "Die Gruppe Die Prinzen", "spätestens in Hannover", "Für das Konzert mit Romano", 
      "Gartenausstellung KöGa", "den Opel-Zoo", "Der Christkindlesmarkt in Nürnberg", 
      "Alle Flüge der Fluglinie", "Auto gewinnen", "Die Fahrradtouren von Berlin", 
      "Die Literaturmesse für Kleinverleger", "Fußballspiels im Ostpark", "Das Treffen", 
      "im Frankfurter Zoo", "Ein Teil der kostenlosen", "Auf der Viktoriabrücke", 
      "Die Buchpräsentation", "Konzert ist am 29 Mai", "Autobahn A4 / 50 cent", 
      "Beim Klassik-Radio", "Open-Air-Kino", "Aktionstag", "Klavierkonzert", 
      "Süddeutschland", "Zugverkehr", "Musikfest", "Akrobatik-Show im Park", 
      "In Raum C23 (المعدل)"
    ]
  },
  Schreiben: [
    "Kochkurs Für Anfänger.", "Fotobuch", "Abenteuer TIKKI TAKKA", 
    "Informatik-Shop", "Kosmetik-Shop", "Partyservice", "ESS Firma", 
    "Kursbeschreibung (Wohndesign)", "Renovierungskurs", "Engagement Für Jugendliche", 
    "Apartmenthaus Oranienburg - Frankfurt", "Autovermietung Neustadt - Metro", 
    "Freizeitverein Mainz", "Naturmuseum - Museum", "Backstage Musical Tour", 
    "KULTUR UND KULINARIK", "Mehr Bewegen - Fahrradtour Mit Trainer", 
    "Super Clean-Staubsaugroboter", "Apartment-Haus", "Kostenlose Apps Für Dein Handy!", 
    "Nie Mehr Schlaflos In Deutschland - Matratze", "Schmelzkäse Alpengeschmack - Käse", 
    "Meine Kiste: Obst Und Gemüse", "Hotel Mit Thermen", "Kopfhörer", 
    "Badezimmer Renovieren", "FREIZEITBAD MEERESRAUSCHEN", "Reisebüro Sonnenschein", 
    "Kursbeschreibung (Sich Vorstellen)", "FITWATCH Smartwatch", 
    "Rundum Sorglos Unterwegs - Die Securvia Reisegepäckversicherung", 
    "DIGIBIKE - Das Smarte Hightech-Fahrrad", "SPORTHEINPARKPLATZ FÜR KINDER", 
    "Online-Training Für Guten Schlaf", "Hollandblumen-Onlineshop", 
    "In Offenbach Zu Hause", "Zeitschrift - Abonnentenservice", 
    "Fotografieren Für Fortgeschrittene!", "Unsere Nachbarschaft Vernetzt Sich", 
    "Umzugsunternehmen Bühler", "Schlüsseldienst", "T & W Elektronikversicherung", 
    "Waldschwimmbad Langen"
  ],
  Sprechen: {
    "Teile 1": [
      "Reise (رحلة أو عطلة)", "Buch (كتاب أو رواية)", "Film (فيلم سينمائي)", 
      "Sportereignis (حدث رياضي)", "Musikveranstaltung (حفل موسيقي)", 
      "Wichtige Person Im Leben (شخصية مهمة)", "Wichtige Erfahrung (تجربة مهمة)"
    ],
    "Teile 2": [
      "Die Kleinen Wollen's Wissen", "Alternative Lebensform Im Alter", 
      "Fast Food Kann Süchtig Machen", "Englisch Als Weltweit Unternehmenssprache", 
      "Trinkgeld Geben", "Rette Leben Mit Einer Blutspende", 
      "Wie Entwickelt Sich Das Rauchen In Deutschland", "Fernsehen Macht Kinder Dumm", 
      "Fernsehen Bildet", "Tiere - Eine Gute Geschenkidee", "Sind Klassenfahrten Sinnvoll?", 
      "Glücklich Ohne Geld Und Karriere", "Solarium Im Winter - Gut Für Die Gesundheit", 
      "Gesund Durch Lachen", "Selbst Gekocht Schmeckt Es Am Besten", 
      "Arbeiten Bis 75 - Eine Utopische Vorstellung?", "Die Schuluniform Pro Und Kontra", 
      "Leistungssport Und Doping", "Wie Lange Dürfen Jugendliche Abends Ausgehen?", 
      "Antibiotika Gibt Es Alternativen", "Haustausch", "Zweisprachigkeit Bei Kindern", 
      "Hochzeit Nur Zu Zweit", "Sollen Schönheitsoperationen Bei Minderjährigen Verboten Werden?", 
      "Ganztagsschule Pro Contra", "Verbot Von Gewaltspielen Pro Und Kontra", 
      "Praktische Lerntipps", "Ist „Bequemes Essen“ Gut Für Uns?", 
      "Darf Man Behalten ,Was Mann Findet", "Hausaufgaben - Unnötig Oder Unvermeidlich?", 
      "Stadtwohnung Oder Haus Im Grünen", "Kinder Unterschätzen Gefahren Von Handy Und Internet", 
      "Eine Woche Ohne Internet", "Soll Digitales Unterrichtsmaterial In Den Schulen Eingesetzt Werden?", 
      "Spezielle Schulen Für Hochbegabte Schüler: Separation Oder Integration", 
      "Sparkonto Für Kinder", "Tierversuche: Pro Und Contra", 
      "Darf Man Hausfrau Auf Lebenszeit Sein?", "Der Ruf Nach Mehr Direkter Demokratie", 
      "Elektroautos - Verkehrsmittel Der Nahen Zukunft?", "Wahlen Schon Mit 16?", 
      "Haushaltsgeräte Erleichtern Die Hausarbeit", 
      "Gleiche Chancen Für Männer Und Frauen – Gesetzlich Geregelt", 
      "Musik Statt Bohrgeräusche Beim Zahnarzt", "Gleicher Lohn Für Alle", 
      "Spielen Für Die Karriere", "Ist Schulqualität Messbar?", 
      "Orthographie Und Handschrift Heute", 
      "Pro-Argumente Für Tierversuche: Lebensretter Für Menschen", 
      "Tiere Als Geschenkidee - Eine Überlegung Wert", 
      "Einkaufen Mit Dem Elektronischen Personalausweis", 
      "Die Europäische Union - Pro Und Contra", "Wie Sinnvoll Sind Nahrungsergänzungsmittel?", 
      "Tattoo - Schmuck Für Die Ewigkeit", "Alkoholmissbrauch", "Wo Sollen Wir Einkaufen?"
    ],
    "Teile 3": []
  }
};

window.B2_FREE_MODIFIED_LESSONS = [];
