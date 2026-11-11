/* =========================================================
   EchtPrüfung 2027 — app.js (الجزء 1 من 2 - كامل ومصحح)
   ========================================================= */

const { useState, useEffect, useRef } = React;

const WA = "212680193427";
const wa = (msg) => window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank");

const supabaseUrl = 'https://ldatleskngsvoxwbiqtd.supabase.co';
const supabaseKey = 'sb_publishable_6UXiEWOS8YkGZTiT2jQRlA_K7HgONtL';
let sb = null;
try { if (window.supabase) sb = window.supabase.createClient(supabaseUrl, supabaseKey); } catch(e){}

const B1_SPRECHEN_DATA = window.B1_SPRECHEN_DATA || [];
const B2_SPRECHEN_DATA = window.B2_SPRECHEN_DATA || [];
const { UI_TEXTS, LANGS, SCHREIBEN_DATA, PRUEFUNG_DATA, EXAMS, HOREN_EXAMS, B2_SCHREIBEN_DATA, B2_PRUEFUNG_DATA, B2_EXAMS, B2_HOREN_EXAMS, B2_PLACEHOLDER_LESSONS } = window;

const B1_PRIMARY = "#22C55E";
const B2_PRIMARY = "#0D9488";

const EXTRA = {
  ar: { modified:"معدل", versions:"نسخ", version_badge:"تعديلات", minutes:"دقيقة", pro:"برو", check:"تصحيح", back:"رجوع", next:"التالي", prev:"السابق", reset:"إعادة", close:"إغلاق", no_audio:"🔇 لا يوجد صوت", no_questions:"لا توجد أسئلة", unlock:"فتح الوصول", locked_title:"محتوى مقفل", locked_sub:"ترقية الحساب للوصول لهذه الميزة", requires_pro:"👑 يتطلب باقة Pro", upgrade_now:"👑 ترقية الحساب الآن", not_now:"ليس الآن", correct:"✓ صحيح", wrong:"✗ خطأ", the_answer:"الجواب", no_answer:"لم تجب", word_bank:"بنك الكلمات", choose_word:"اختر الكلمة", situation:"الحالات", anzeige:"الإعلانات", no_match:"لا تطابق", story_memo:"قصة للحفظ", exam_mode:"نمط الامتحان", practice_mode:"نمط التدريب", trans_text:"ترجمة النص", trans_task:"ترجمة المهمة", show:"إظهار", hide:"إخفاء", ai_correct:"إنشاء بالذكاء الاصطناعي", result:"النتيجة", search:"بحث عن موضوع...", empty:"لا توجد دروس", all_lessons:"جميع الدروس", choose_version:"التعديلات المتاحة", coming_soon:"قريباً", fill_gap:"املأ الفراغ", aufgabe:"المهمة", musterlösung:"الحل النموذجي", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"اكتب تحضيرك هنا...", words:"كلمة", min:"دقيقة", nur_teil:"فقط الجزء", home:"الرئيسية", lesen:"قراءة", horen:"استماع", schreiben:"كتابة", sprechen:"تحدث", pruefung:"امتحان", login:"تسجيل الدخول", guest:"دخول كزائر", settings:"الإعدادات", logout:"خروج", change_lang:"تغيير اللغة", text_size:"حجم النص", reset_size:"إعادة الحجم الأصلي", minutes_short:"د", situation_short:"حالة", international_exams:"الامتحانات الدولية", start_now:"ابدأ الآن" },
  ma: { modified:"معدل", versions:"نسخ", version_badge:"تعديلات", minutes:"دقيقة", pro:"برو", check:"تصحيح", back:"رجوع", next:"التالي", prev:"السابق", reset:"إعادة", close:"إغلاق", no_audio:"🔇 ما كاينش صوت", no_questions:"ما كاينش أسئلة", unlock:"فتح الوصول", locked_title:"محتوى مقفل", locked_sub:"ترقية الحساب للوصول لهذه الميزة", requires_pro:"👑 يتطلب باقة Pro", upgrade_now:"👑 ترقية الحساب الآن", not_now:"ماشي دابا", correct:"✓ صحيح", wrong:"✗ غلط", the_answer:"الجواب", no_answer:"ما جاوبتيش", word_bank:"بنك الكلمات", choose_word:"اختر الكلمة", situation:"الحالات", anzeige:"الإعلانات", no_match:"لا تطابق", story_memo:"قصة للحفظ", exam_mode:"نمط الامتحان", practice_mode:"نمط التدريب", trans_text:"ترجمة النص", trans_task:"ترجمة المهمة", show:"إظهار", hide:"إخفاء", ai_correct:"إنشاء بالذكاء الاصطناعي", result:"النتيجة", search:"بحث عن موضوع...", empty:"ما كاين حتى شي درس", all_lessons:"كاع الدروس", choose_version:"التعديلات المتاحة", coming_soon:"قريباً", fill_gap:"عمر الفراغ", aufgabe:"المهمة", musterlösung:"الحل النموذجي", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"اكتب تحضيرك هنا...", words:"كلمة", min:"دقيقة", nur_teil:"فقط الجزء", home:"الرئيسية", lesen:"قراية", horen:"سماع", schreiben:"كتابة", sprechen:"هضرة", pruefung:"امتحان", login:"تسجيل الدخول", guest:"دخول كزائر", settings:"الإعدادات", logout:"خروج", change_lang:"تغيير اللغة", text_size:"حجم النص", reset_size:"إعادة الحجم الأصلي", minutes_short:"د", situation_short:"حالة", international_exams:"الامتحانات الدولية", start_now:"ابدأ الآن" },
  en: { modified:"Modified", versions:"versions", version_badge:"versions", minutes:"Min", pro:"PRO", check:"Check", back:"Back", next:"Next", prev:"Previous", reset:"Reset", close:"Close", no_audio:"🔇 No audio", no_questions:"No questions", unlock:"Unlock Access", locked_title:"Locked Content", locked_sub:"Upgrade account to access this feature", requires_pro:"👑 Requires Pro", upgrade_now:"👑 Upgrade Now", not_now:"Not Now", correct:"✓ Correct", wrong:"✗ Wrong", the_answer:"Answer", no_answer:"Not answered", word_bank:"Word bank", choose_word:"Choose word", situation:"Situations", anzeige:"Ads", no_match:"No match", story_memo:"Story memo", exam_mode:"Exam Mode", practice_mode:"Practice Mode", trans_text:"Translate text", trans_task:"Translate task", show:"Show", hide:"Hide", ai_correct:"AI Generation", result:"Result", search:"Search...", empty:"No lessons", all_lessons:"All lessons", choose_version:"Available Versions", coming_soon:"Coming soon", fill_gap:"Fill the gap", aufgabe:"Task", musterlösung:"Model Solution", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"Write your preparation here...", words:"words", min:"Min", nur_teil:"Only Part", home:"Home", lesen:"Reading", horen:"Listening", schreiben:"Writing", sprechen:"Speaking", pruefung:"Exam", login:"Login", guest:"Guest", settings:"Settings", logout:"Logout", change_lang:"Change language", text_size:"Text size", reset_size:"Reset size", minutes_short:"m", situation_short:"Situation", international_exams:"International Exams", start_now:"Start Now" },
  de: { modified:"Modifiziert", versions:"Versionen", version_badge:"Versionen", minutes:"Min", pro:"PRO", check:"Prüfen", back:"Zurück", next:"Weiter", prev:"Zurück", reset:"Erneut", close:"Schließen", no_audio:"🔇 Kein Audio", no_questions:"Keine Fragen", unlock:"Zugriff freischalten", locked_title:"Gesperrt", locked_sub:"Upgrade erforderlich", requires_pro:"👑 Erfordert Pro", upgrade_now:"👑 Jetzt upgraden", not_now:"Nicht jetzt", correct:"✓ Richtig", wrong:"✗ Falsch", the_answer:"Antwort", no_answer:"Nicht beantwortet", word_bank:"Wortbank", choose_word:"Wort wählen", situation:"Situationen", anzeige:"Anzeigen", no_match:"Keine Zuordnung", story_memo:"Geschichte", exam_mode:"Prüfungsmodus", practice_mode:"Übungsmodus", trans_text:"Text übersetzen", trans_task:"Aufgabe übersetzen", show:"Anzeigen", hide:"Verbergen", ai_correct:"KI-Generierung", result:"Ergebnis", search:"Suchen...", empty:"Keine Lektionen", all_lessons:"Alle Lektionen", choose_version:"Verfügbare Versionen", coming_soon:"Demnächst", fill_gap:"Lücke füllen", aufgabe:"Aufgabe", musterlösung:"Musterlösung", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"Schreibe hier...", words:"Wörter", min:"Min", nur_teil:"Nur Teil", home:"Startseite", lesen:"Lesen", horen:"Hören", schreiben:"Schreiben", sprechen:"Sprechen", pruefung:"Prüfung", login:"Anmelden", guest:"Gast", settings:"Einstellungen", logout:"Abmelden", change_lang:"Sprache ändern", text_size:"Textgröße", reset_size:"Größe zurücksetzen", minutes_short:"Min", situation_short:"Situation", international_exams:"Internationale Prüfungen", start_now:"Jetzt starten" },
  fr: { modified:"Modifié", versions:"versions", version_badge:"versions", minutes:"min", pro:"PRO", check:"Vérifier", back:"Retour", next:"Suivant", prev:"Précédent", reset:"Réinitialiser", close:"Fermer", no_audio:"🔇 Pas d'audio", no_questions:"Pas de questions", unlock:"Déverrouiller", locked_title:"Contenu verrouillé", locked_sub:"Mise à niveau requise", requires_pro:"👑 Requiert Pro", upgrade_now:"👑 Mettre à niveau", not_now:"Pas maintenant", correct:"✓ Correct", wrong:"✗ Faux", the_answer:"Réponse", no_answer:"Pas de réponse", word_bank:"Banque de mots", choose_word:"Choisir mot", situation:"Situations", anzeige:"Annonces", no_match:"Aucune correspondance", story_memo:"Mémo", exam_mode:"Mode examen", practice_mode:"Mode entraînement", trans_text:"Traduire le texte", trans_task:"Traduire la tâche", show:"Afficher", hide:"Cacher", ai_correct:"Génération IA", result:"Résultat", search:"Rechercher...", empty:"Aucune leçon", all_lessons:"Toutes les leçons", choose_version:"Versions disponibles", coming_soon:"Bientôt", fill_gap:"Remplir le vide", aufgabe:"Tâche", musterlösung:"Solution modèle", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"Écrivez ici...", words:"mots", min:"min", nur_teil:"Seulement partie", home:"Accueil", lesen:"Lecture", horen:"Écoute", schreiben:"Écriture", sprechen:"Parler", pruefung:"Examen", login:"Connexion", guest:"Invité", settings:"Paramètres", logout:"Déconnexion", change_lang:"Changer la langue", text_size:"Taille du texte", reset_size:"Réinitialiser", minutes_short:"min", situation_short:"Situation", international_exams:"Examens internationaux", start_now:"Commencer" },
  hi: { modified:"संशोधित", versions:"संस्करण", version_badge:"संस्करण", minutes:"मिनट", pro:"PRO", check:"जाँचें", back:"वापस", next:"आगे", prev:"पिछला", reset:"रीसेट", close:"बंद", no_audio:"🔇 ऑडियो नहीं", no_questions:"कोई प्रश्न नहीं", unlock:"पहुँच अनलॉक", locked_title:"लॉक", locked_sub:"अपग्रेड आवश्यक", requires_pro:"👑 Pro आवश्यक", upgrade_now:"👑 अभी अपग्रेड करें", not_now:"अभी नहीं", correct:"✓ सही", wrong:"✗ गलत", the_answer:"उत्तर", no_answer:"नहीं दिया", word_bank:"शब्द बैंक", choose_word:"शब्द चुनें", situation:"स्थितियाँ", anzeige:"विज्ञापन", no_match:"कोई मेल नहीं", story_memo:"कहानी", exam_mode:"परीक्षा मोड", practice_mode:"अभ्यास मोड", trans_text:"पाठ अनुवाद", trans_task:"कार्य अनुवाद", show:"दिखाएं", hide:"छिपाएं", ai_correct:"AI जनरेशन", result:"परिणाम", search:"खोजें...", empty:"कोई पाठ नहीं", all_lessons:"सभी पाठ", choose_version:"उपलब्ध संस्करण", coming_soon:"जल्द", fill_gap:"रिक्त भरें", aufgabe:"कार्य", musterlösung:"मॉडल समाधान", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"यहाँ लिखें...", words:"शब्द", min:"मिनट", nur_teil:"केवल भाग", home:"होम", lesen:"पढ़ना", horen:"सुनना", schreiben:"लिखना", sprechen:"बोलना", pruefung:"परीक्षा", login:"लॉगिन", guest:"अतिथि", settings:"सेटिंग्स", logout:"लॉगआउट", change_lang:"भाषा बदलें", text_size:"पाठ आकार", reset_size:"रीसेट करें", minutes_short:"मि", situation_short:"स्थिति", international_exams:"अंतर्राष्ट्रीय परीक्षा", start_now:"अभी शुरू करें" },
  id: { modified:"Dimodifikasi", versions:"versi", version_badge:"versi", minutes:"menit", pro:"PRO", check:"Periksa", back:"Kembali", next:"Lanjut", prev:"Sebelumnya", reset:"Reset", close:"Tutup", no_audio:"🔇 Tidak ada audio", no_questions:"Tidak ada pertanyaan", unlock:"Buka Akses", locked_title:"Terkunci", locked_sub:"Perlu upgrade", requires_pro:"👑 Butuh Pro", upgrade_now:"👑 Upgrade Sekarang", not_now:"Tidak Sekarang", correct:"✓ Benar", wrong:"✗ Salah", the_answer:"Jawaban", no_answer:"Tidak dijawab", word_bank:"Bank kata", choose_word:"Pilih kata", situation:"Situasi", anzeige:"Iklan", no_match:"Tidak cocok", story_memo:"Cerita", exam_mode:"Mode Ujian", practice_mode:"Mode Latihan", trans_text:"Terjemahkan", trans_task:"Terjemahkan tugas", show:"Tampilkan", hide:"Sembunyikan", ai_correct:"Generasi AI", result:"Hasil", search:"Cari...", empty:"Tidak ada pelajaran", all_lessons:"Semua pelajaran", choose_version:"Versi tersedia", coming_soon:"Segera", fill_gap:"Isi celah", aufgabe:"Tugas", musterlösung:"Solusi Model", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"Tulis di sini...", words:"kata", min:"menit", nur_teil:"Hanya Bagian", home:"Beranda", lesen:"Membaca", horen:"Mendengar", schreiben:"Menulis", sprechen:"Berbicara", pruefung:"Ujian", login:"Masuk", guest:"Tamu", settings:"Pengaturan", logout:"Keluar", change_lang:"Ubah bahasa", text_size:"Ukuran teks", reset_size:"Atur ulang", minutes_short:"mnt", situation_short:"Situasi", international_exams:"Ujian Internasional", start_now:"Mulai Sekarang" },
  tl: { modified:"Binago", versions:"bersyon", version_badge:"bersyon", minutes:"min", pro:"PRO", check:"Suriin", back:"Bumalik", next:"Susunod", prev:"Nakaraan", reset:"I-reset", close:"Isara", no_audio:"🔇 Walang audio", no_questions:"Walang tanong", unlock:"I-unlock", locked_title:"Naka-lock", locked_sub:"Kailangan ng upgrade", requires_pro:"👑 Kailangan ng Pro", upgrade_now:"👑 I-upgrade Ngayon", not_now:"Hindi Ngayon", correct:"✓ Tama", wrong:"✗ Mali", the_answer:"Sagot", no_answer:"Walang sagot", word_bank:"Bangko ng salita", choose_word:"Pumili ng salita", situation:"Mga sitwasyon", anzeige:"Mga ad", no_match:"Walang tugma", story_memo:"Kuwento", exam_mode:"Exam Mode", practice_mode:"Practice Mode", trans_text:"Isalin", trans_task:"Isalin ang gawain", show:"Ipakita", hide:"Itago", ai_correct:"AI Generation", result:"Resulta", search:"Maghanap...", empty:"Walang aralin", all_lessons:"Lahat ng aralin", choose_version:"Mga available na bersyon", coming_soon:"Malapit na", fill_gap:"Punan ang patlang", aufgabe:"Gawain", musterlösung:"Modelong Solusyon", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"Isulat dito...", words:"salita", min:"min", nur_teil:"Parte lamang", home:"Tahanan", lesen:"Pagbasa", horen:"Pakikinig", schreiben:"Pagsulat", sprechen:"Pagsasalita", pruefung:"Pagsusulit", login:"Mag-login", guest:"Bisita", settings:"Mga Setting", logout:"Mag-logout", change_lang:"Palitan wika", text_size:"Laki ng teksto", reset_size:"I-reset", minutes_short:"min", situation_short:"Sitwasyon", international_exams:"Mga Internasyonal na Pagsusulit", start_now:"Simulan Ngayon" },
  fa: { modified:"اصلاح شده", versions:"نسخه ها", version_badge:"نسخه ها", minutes:"دقیقه", pro:"PRO", check:"بررسی", back:"بازگشت", next:"بعدی", prev:"قبلی", reset:"بازنشانی", close:"بستن", no_audio:"🔇 بدون صدا", no_questions:"سوالی نیست", unlock:"باز کردن دسترسی", locked_title:"قفل شده", locked_sub:"نیاز به ارتقا", requires_pro:"👑 نیاز به Pro", upgrade_now:"👑 ارتقا", not_now:"الان نه", correct:"✓ صحیح", wrong:"✗ غلط", the_answer:"پاسخ", no_answer:"پاسخ داده نشده", word_bank:"بانک کلمات", choose_word:"کلمه را انتخاب کنید", situation:"موقعیت ها", anzeige:"تبلیغات", no_match:"بدون تطابق", story_memo:"داستان", exam_mode:"حالت آزمون", practice_mode:"حالت تمرین", trans_text:"ترجمه متن", trans_task:"ترجمه کار", show:"نمایش", hide:"مخفی", ai_correct:"تولید AI", result:"نتیجه", search:"جستجو...", empty:"درسی نیست", all_lessons:"همه درس ها", choose_version:"نسخه های موجود", coming_soon:"به زودی", fill_gap:"پر کردن جای خالی", aufgabe:"کار", musterlösung:"راه حل نمونه", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"اینجا بنویسید...", words:"کلمه", min:"دقیقه", nur_teil:"فقط بخش", home:"خانه", lesen:"خواندن", horen:"شنیدن", schreiben:"نوشتن", sprechen:"صحبت", pruefung:"آزمون", login:"ورود", guest:"مهمان", settings:"تنظیمات", logout:"خروج", change_lang:"تغییر زبان", text_size:"اندازه متن", reset_size:"بازنشانی", minutes_short:"د", situation_short:"موقعیت", international_exams:"آزمون های بین المللی", start_now:"شروع کنید" },
  sw: { modified:"Iliyorekebishwa", versions:"matoleo", version_badge:"matoleo", minutes:"dakika", pro:"PRO", check:"Angalia", back:"Rudi", next:"Ifuatayo", prev:"Iliyotangulia", reset:"Weka upya", close:"Funga", no_audio:"🔇 Hakuna sauti", no_questions:"Hakuna maswali", unlock:"Fungua Ufikiaji", locked_title:"Imefungwa", locked_sub:"Inahitaji kuboresha", requires_pro:"👑 Inahitaji Pro", upgrade_now:"👑 Boresha Sasa", not_now:"Sio Sasa", correct:"✓ Sahihi", wrong:"✗ Makosa", the_answer:"Jibu", no_answer:"Hakuna jibu", word_bank:"Benki ya maneno", choose_word:"Chagua neno", situation:"Hali", anzeige:"Matangazo", no_match:"Hakuna mechi", story_memo:"Hadithi", exam_mode:"Hali ya Mtihani", practice_mode:"Hali ya Mazoezi", trans_text:"Tafsiri maandishi", trans_task:"Tafsiri kazi", show:"Onyesha", hide:"Ficha", ai_correct:"AI Generation", result:"Matokeo", search:"Tafuta...", empty:"Hakuna masomo", all_lessons:"Masomo yote", choose_version:"Matoleo yanayopatikana", coming_soon:"Hivi karibuni", fill_gap:"Jaza pengo", aufgabe:"Kazi", musterlösung:"Suluhisho la Mfano", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"Andika hapa...", words:"maneno", min:"dakika", nur_teil:"Sehemu tu", home:"Nyumbani", lesen:"Kusoma", horen:"Kusikiliza", schreiben:"Kuandika", sprechen:"Kuzungumza", pruefung:"Mtihani", login:"Ingia", guest:"Mgeni", settings:"Mipangilio", logout:"Toka", change_lang:"Badilisha lugha", text_size:"Ukubwa wa maandishi", reset_size:"Weka upya", minutes_short:"dk", situation_short:"Hali", international_exams:"Mitihani ya Kimataifa", start_now:"Anza Sasa" },
  uz: { modified:"O'zgartirilgan", versions:"versiyalar", version_badge:"versiyalar", minutes:"daqiqa", pro:"PRO", check:"Tekshirish", back:"Orqaga", next:"Keyingi", prev:"Oldingi", reset:"Tiklash", close:"Yopish", no_audio:"🔇 Ovoz yo'q", no_questions:"Savollar yo'q", unlock:"Kirishni ochish", locked_title:"Qulflangan", locked_sub:"Yangilash kerak", requires_pro:"👑 Pro kerak", upgrade_now:"👑 Hozir yangilash", not_now:"Hozir emas", correct:"✓ To'g'ri", wrong:"✗ Xato", the_answer:"Javob", no_answer:"Javobsiz", word_bank:"So'z banki", choose_word:"So'zni tanlang", situation:"Vaziyatlar", anzeige:"E'lonlar", no_match:"Mos kelmaydi", story_memo:"Hikoya", exam_mode:"Imtihon rejimi", practice_mode:"Mashq rejimi", trans_text:"Matnni tarjima", trans_task:"Vazifani tarjima", show:"Ko'rsatish", hide:"Yashirish", ai_correct:"AI Generation", result:"Natija", search:"Qidirish...", empty:"Darslar yo'q", all_lessons:"Barcha darslar", choose_version:"Mavjud versiyalar", coming_soon:"Tez orada", fill_gap:"Bo'sh joyni to'ldirish", aufgabe:"Vazifa", musterlösung:"Namunali yechim", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"Bu yerga yozing...", words:"so'z", min:"daqiqa", nur_teil:"Faqat qism", home:"Bosh sahifa", lesen:"O'qish", horen:"Tinglash", schreiben:"Yozish", sprechen:"Gapirish", pruefung:"Imtihon", login:"Kirish", guest:"Mehmon", settings:"Sozlamalar", logout:"Chiqish", change_lang:"Tilni o'zgartirish", text_size:"Matn hajmi", reset_size:"Tiklash", minutes_short:"daq", situation_short:"Vaziyat", international_exams:"Xalqaro imtihonlar", start_now:"Hozir boshlash" },
  ne: { modified:"परिमार्जित", versions:"संस्करणहरू", version_badge:"संस्करणहरू", minutes:"मिनेट", pro:"PRO", check:"जाँच्नुहोस्", back:"फर्कनुहोस्", next:"अर्को", prev:"अघिल्लो", reset:"रिसेट", close:"बन्द", no_audio:"🔇 अडियो छैन", no_questions:"प्रश्नहरू छैनन्", unlock:"पहुँच अनलक", locked_title:"लक", locked_sub:"अपग्रेड आवश्यक", requires_pro:"👑 Pro आवश्यक", upgrade_now:"👑 अहिले अपग्रेड", not_now:"अहिले होइन", correct:"✓ सही", wrong:"✗ गलत", the_answer:"उत्तर", no_answer:"उत्तर छैन", word_bank:"शब्द बैंक", choose_word:"शब्द छान्नुहोस्", situation:"स्थितिहरू", anzeige:"विज्ञापन", no_match:"कुनै मेल छैन", story_memo:"कथा", exam_mode:"परीक्षा मोड", practice_mode:"अभ्यास मोड", trans_text:"पाठ अनुवाद", trans_task:"कार्य अनुवाद", show:"देखाउनुहोस्", hide:"लुकाउनुहोस्", ai_correct:"AI Generation", result:"नतिजा", search:"खोज्नुहोस्...", empty:"पाठहरू छैनन्", all_lessons:"सबै पाठहरू", choose_version:"उपलब्ध संस्करणहरू", coming_soon:"चाँडै", fill_gap:"खाली भर्नुहोस्", aufgabe:"कार्य", musterlösung:"नमूना समाधान", situation_header:"SITUATION", aufgabe_header:"AUFGABE", write_here:"यहाँ लेख्नुहोस्...", words:"शब्द", min:"मिनेट", nur_teil:"भाग मात्र", home:"गृह", lesen:"पढ्नुहोस्", horen:"सुन्नुहोस्", schreiben:"लेख्नुहोस्", sprechen:"बोल्नुहोस्", pruefung:"परीक्षा", login:"लगइन", guest:"अतिथि", settings:"सेटिङ", logout:"लगआउट", change_lang:"भाषा परिवर्तन", text_size:"पाठ आकार", reset_size:"रिसेट", minutes_short:"मि", situation_short:"स्थिति", international_exams:"अन्तर्राष्ट्रिय परीक्षाहरू", start_now:"अहिले सुरु गर्नुहोस्" }
};

const t = (key, lang) => {
  if (UI_TEXTS?.[lang]?.[key]) return UI_TEXTS[lang][key];
  if (EXTRA?.[lang]?.[key]) return EXTRA[lang][key];
  if (UI_TEXTS?.['en']?.[key]) return UI_TEXTS['en'][key];
  if (EXTRA?.['en']?.[key]) return EXTRA['en'][key];
  return key;
};

const Icons = {
  Home: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Book: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  Headphones: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  Edit: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>,
  Mic: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>,
  Graduation: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Menu: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>,
  Moon: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  Sun: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>,
  Settings: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  Translate: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h12M9 3v2c0 4.418-2.686 8-6 8m0-8h12m-6 0v2c0 4.418 2.686 8 6 8m-4-2l-4 8m2-4h4m-2 0l2 4"/></svg>,
  Play: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill={color}><path d="M8 5v14l11-7z"/></svg>,
  Pause: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill={color}><rect x="6" y="6" width="12" height="12" rx="2"/></svg>,
  Check: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  ArrowLeft: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>,
  ArrowRight: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>,
  Target: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Practice: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  Clock: ({ color = "currentColor" }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Eye: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  X: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Lock: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  Rocket: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
  Crown: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 16l3-9 5 5 5-5 3 9H4z"/></svg>,
  Copy: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
  Alert: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>,
  Grid: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  User: ({ color = "currentColor" }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
};

const LogoImage = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="24" fill="#0F172A"/><rect x="18" y="28" width="36" height="10" rx="4" fill="#0D9488"/><rect x="18" y="44" width="36" height="10" rx="4" fill="#BE123C"/><rect x="18" y="60" width="36" height="10" rx="4" fill="#14B8A6"/><path d="M 54 70 L 54 30 L 70 30 C 84 30, 84 52, 70 52 L 54 52" stroke="#14B8A6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
);

const globalTransCache = {};
const FAST_DICT = { "المعدل": { ar:"المعدل", en:"Modified", fr:"Modifié", de:"Modifiziert" } };

function AutoTrans({ text, lang }) {
  const targetLang = lang === 'ma' ? 'ar' : lang;
  const cacheKey = `${targetLang}_${text}`;
  const [translated, setTranslated] = useState(() => {
    if (!text || targetLang === 'de') return text;
    if (FAST_DICT[text.trim()]?.[targetLang]) return FAST_DICT[text.trim()][targetLang];
    return globalTransCache[cacheKey] || text;
  });
  useEffect(() => {
    if (!text || targetLang === 'de') return;
    if (globalTransCache[cacheKey]) { setTranslated(globalTransCache[cacheKey]); return; }
    const controller = new AbortController();
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`, { signal: controller.signal })
      .then(r => r.json()).then(data => {
        if (data && data[0]) {
          const result = data[0].map(item => item[0]).join('');
          globalTransCache[cacheKey] = result;
          setTranslated(result);
        }
      }).catch(() => {});
    return () => controller.abort();
  }, [text, targetLang, cacheKey]);
  return <span>{translated}</span>;
}

function SmartTrans({ obj, lang }) {
  if (!obj) return "";
  const textDe = obj.de || obj.en || (obj.q || "") || (typeof obj === 'string' ? obj : "");
  if (typeof obj === 'object' && obj[lang]) return <span>{obj[lang]}</span>;
  if (lang === 'de' && typeof obj === 'object' && obj['de']) return <span>{obj['de']}</span>;
  return <AutoTrans text={textDe} lang={lang} />;
}

const getDataFor = (level, tab) => {
  const isB2 = level === 'B2';
  if (tab === 'Lesen') return isB2 ? (B2_EXAMS || []) : (EXAMS || []);
  if (tab === 'Hören') return isB2 ? (B2_HOREN_EXAMS || []) : (HOREN_EXAMS || []);
  if (tab === 'Schreiben') return isB2 ? (B2_SCHREIBEN_DATA || []) : (SCHREIBEN_DATA || []);
  if (tab === 'Sprechen') return isB2 ? B2_SPRECHEN_DATA : B1_SPRECHEN_DATA;
  return [];
};

const norm = (s) => (s == null ? '' : String(s)).toLowerCase().replace(/(المعدل|معدل|تعديل)/g, '').replace(/[^\w\u0600-\u06FF]+/g, '').trim();

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
  "Schreiben": ["Urlaub Im Schwarzwald - Antwort An Petra", "Eva - Traumberuf Und Neuigkeiten", "Sophie - Würzburg", "Nadja - Garten", "Nicole - Probleme", "Andreas - Neuer Kollege", "Annika - Sommerurlaub", "Iris - Abschlussparty", "Caroline - Gastschülerin", "Vera - Arbeitsweg", "Jennifer - Einladung", "Andreas - Neue Wohnung", "Thomas - Überraschungsausflug", "Tamara - Treffen", "Jan - Urlaub", "Viktor - Urlaub", "Anna - Katze", "Nora - Neue Wohnung", "Claudia - Zoobesuch", "Karla - Umzug", "Mara - Reise", "Annika - Urlaub 2", "Sonja - Musikfestival", "Rita - Hochzeit", "Anne - Geburtstag", "Paul - Ausflug", "Jakob - Nachbarn", "Emilia", "Tobias", "Naco", "Alicia", "Cora Und Alex", "Miroslav", "Corinna", "Moritz"],
  "Sprechen": { "Teile 2": ["Gemeinschaftsgarten"], "Teile 3": ["Pflanzen auf dem Balkon"] }
};

const FREE_MODIFIED_LESSONS = [
  {
    id: "rita-t1-mod", title: "Rita (المعدل)", sub: "Teile 1", level: "B1", type: "headings",
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
    id: "caroline-t1-mod", title: "Caroline (المعدل)", sub: "Teile 1", level: "B1", type: "headings",
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
// ==========================================
// الجزء 2 — المكونات الرئيسية والتطبيق
// ==========================================

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

// ============= HOREN CARD =============
function HorenCard({ exam, userLang, showTranslation, isB2 }) {
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const items = exam.items || [];
  const audio = exam.audio || [];
  
  const hasRealAudio = audio.some(a => a.text && a.text !== "Audio nicht verfügbar");
  const themeColor = isB2 ? B2_PRIMARY : B1_PRIMARY;
  
  if (!items.length) return <div className="card" style={{ padding: 20, textAlign: "center" }}><Icons.Alert color="var(--red)"/><h3>{t("no_questions", userLang)}</h3></div>;
  
  const total = items.length * 5;
  const score = items.filter(it => ans[it.n] === it.c).length * 5;
  const pick = (n, c) => { if (!done) setAns(p => ({ ...p, [n]: p[n] === c ? undefined : c })); };
  
  const toggleAudio = () => {
    if (!hasRealAudio) return;
    if (isPlaying) {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    const validSegments = audio.filter(s => s.text && s.text !== "Audio nicht verfügbar");
    let idx = 0;
    const playNext = () => {
      if (idx >= validSegments.length) { setIsPlaying(false); return; }
      const seg = validSegments[idx];
      const u = new SpeechSynthesisUtterance(seg.text);
      u.lang = 'de-DE'; u.rate = seg.rate || 0.95; u.pitch = seg.pitch || 1.0;
      u.onend = () => { idx++; setTimeout(playNext, 200); };
      u.onerror = () => { setIsPlaying(false); };
      window.speechSynthesis.speak(u);
    };
    playNext();
  };
  
  return (
    <div className="card" style={{ padding: 20, marginBottom: 24, border: `1px solid ${themeColor}40` }}>
      <h3 className="de" style={{ fontSize: "1.3em", fontWeight: 900, margin: "0 0 16px", color: "var(--ink)" }}>{exam.title}</h3>
      
      <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--paper)", padding: 14, borderRadius: 20, marginBottom: 20 }}>
        <button onClick={toggleAudio} disabled={!hasRealAudio} style={{ width: 56, height: 56, borderRadius: "50%", border: "none", flexShrink: 0, background: hasRealAudio ? themeColor : "var(--line)", color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: hasRealAudio ? "pointer" : "not-allowed", boxShadow: hasRealAudio ? `0 8px 20px ${themeColor}50` : "none" }}>
          {hasRealAudio ? (isPlaying ? <Icons.Pause color="#FFF"/> : <Icons.Play color="#FFF"/>) : <span style={{ fontSize: 22 }}>🔇</span>}
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 900, fontSize: "1em", color: "var(--muted)", marginBottom: 6 }}>{hasRealAudio ? "Audio Player" : t("no_audio", userLang)}</div>
          <div style={{ height: 6, background: "var(--line)", borderRadius: 99 }}/>
        </div>
      </div>
      
      <div style={{ border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
        <div style={{ display: "flex", background: "var(--paper)", borderBottom: "1px solid var(--line)", fontWeight: 900, color: "var(--muted)", fontSize: "0.85em", padding: "10px 0" }}>
          <div style={{ width: 50, textAlign: "center" }}>R</div>
          <div style={{ width: 50, textAlign: "center" }}>F</div>
          <div style={{ flex: 1, paddingRight: 10 }}>AUSSAGE</div>
        </div>
        {items.map(it => {
          const isR = ans[it.n] === "R", isF = ans[it.n] === "F";
          let rC = "rf-circle", fC = "rf-circle";
          if (done) {
            if (it.c === "R") rC += " good"; else if (isR) rC += " bad"; else rC += " faded";
            if (it.c === "F") fC += " good"; else if (isF) fC += " bad"; else fC += " faded";
          } else {
            if (isR) rC += " sel";
            if (isF) fC += " sel";
          }
          const bg = done ? (ans[it.n] === it.c ? "var(--okbg)" : "var(--badbg)") : "var(--card)";
          return (
            <div key={it.n} style={{ display: "flex", alignItems: "center", borderBottom: "1px solid var(--line)", padding: "10px 0", background: bg }}>
              <div style={{ width: 50, display: "flex", justifyContent: "center" }}><div className={rC} onClick={() => pick(it.n, "R")}/></div>
              <div style={{ width: 50, display: "flex", justifyContent: "center" }}><div className={fC} onClick={() => pick(it.n, "F")}/></div>
              <div style={{ flex: 1, fontSize: "0.9em", lineHeight: 1.5, paddingRight: 10 }}>
                <span style={{ opacity: 0.5, marginLeft: 6, fontWeight: 900 }}>{it.n}</span>
                <span className="de">{it.de}</span>
                {showTranslation && <div style={{ marginTop: 6, fontSize: "0.8em", color: "var(--muted)" }}><SmartTrans obj={it} lang={userLang}/></div>}
              </div>
            </div>
          );
        })}
      </div>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => setShowStory(!showStory)} style={{ display: "flex", alignItems: "center", gap: 8, color: themeColor, fontWeight: 800, background: `${themeColor}15`, padding: "8px 14px", borderRadius: 12, border: "none" }}>
          <Icons.Eye color={themeColor} size={16}/> {t("story_memo", userLang)}
        </button>
        {!done ? (
          <button onClick={() => setDone(true)} style={{ background: themeColor, color: "#FFF", padding: "10px 22px", borderRadius: 12, fontWeight: 900, border: "none" }}>{t("check", userLang)}</button>
        ) : (
          <div style={{ fontWeight: 900, color: score === total ? "var(--okc)" : "var(--red)", fontSize: "1.1em" }}>{score} / {total}</div>
        )}
      </div>
      {showStory && <div className="t2-ar" style={{ marginTop: 14 }}>{items[0]?.story ? <SmartTrans obj={{de: items[0].story}} lang={userLang}/> : ''}</div>}
    </div>
  );
}

// ============= MATCHING =============
function MatchingSection({ exam, userLang, showTranslation, ans, setAns, done }) {
  const [activeSit, setActiveSit] = useState(null);
  const items = exam.items || [];
  const ads = exam.ads || [];
  const themeColor = exam.level === 'B2' ? B2_PRIMARY : B1_PRIMARY;
  const usedLetters = Object.values(ans);
  
  const clickAnzeige = (k) => {
    if (done || !activeSit) return;
    if (usedLetters.includes(k) && ans[activeSit] !== k) return;
    setAns({ ...ans, [activeSit]: k });
    const next = items.find(it => !ans[it.n] && it.n !== activeSit);
    setActiveSit(next ? next.n : null);
  };
  
  return (
    <div>
      <h3 style={{ color: themeColor, marginBottom: 12, fontWeight: 900 }}>📋 {t("situation", userLang)}</h3>
      {items.map(it => {
        const isActive = activeSit === it.n;
        const sel = ans[it.n];
        const isCorrect = done && sel === it.c;
        const isWrong = done && sel && sel !== it.c;
        return (
          <div key={it.n} onClick={() => !done && setActiveSit(activeSit === it.n ? null : it.n)}
            style={{
              display: 'flex', gap: 12, alignItems: 'center', padding: 14, marginBottom: 8, borderRadius: 14,
              border: `2px solid ${isActive ? themeColor : isCorrect ? 'var(--okc)' : isWrong ? 'var(--badc)' : 'var(--line)'}`,
              background: isActive ? `${themeColor}15` : isCorrect ? 'var(--okbg)' : isWrong ? 'var(--badbg)' : 'var(--card)',
              cursor: done ? 'default' : 'pointer', transition: 'all 0.2s'
            }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: sel ? themeColor : 'var(--paper)', color: sel ? '#FFF' : 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, flexShrink: 0 }}>{it.n}</div>
            <div style={{ flex: 1, fontSize: '0.92em' }} className="de">{it.de}</div>
            {showTranslation && <div style={{ fontSize: '0.8em', color: 'var(--muted)', marginTop: 4 }}><SmartTrans obj={it} lang={userLang}/></div>}
            <div style={{ minWidth: 40, textAlign: 'center', fontWeight: 900, fontSize: '1.15em', color: sel ? themeColor : 'var(--muted)' }}>{sel || '—'}</div>
            {isWrong && <div style={{ color: 'var(--badc)', fontWeight: 900, fontSize: '0.9em' }}>({it.c})</div>}
          </div>
        );
      })}
      
      <h3 style={{ color: themeColor, marginTop: 24, marginBottom: 12, fontWeight: 900 }}>📄 {t("anzeige", userLang)}</h3>
      
      <div onClick={() => clickAnzeige('X')}
        style={{ padding: 12, marginBottom: 12, borderRadius: 12, border: `2px dashed ${usedLetters.includes('X') ? themeColor : 'var(--line)'}`, textAlign: 'center', fontWeight: 900, color: 'var(--muted)', cursor: done || !activeSit ? 'default' : 'pointer', background: usedLetters.includes('X') ? `${themeColor}10` : 'transparent' }}>
        X — {t("no_match", userLang)}
      </div>
      
      {ads.map(ad => {
        const isUsed = usedLetters.includes(ad.k);
        return (
          <div key={ad.k} onClick={() => clickAnzeige(ad.k)}
            style={{
              padding: 16, marginBottom: 12, borderRadius: 16,
              border: `2px solid ${isUsed ? themeColor : 'var(--line)'}`,
              background: isUsed ? `${themeColor}10` : 'var(--card)',
              cursor: done || !activeSit || isUsed ? 'default' : 'pointer',
              opacity: isUsed ? 0.6 : 1
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div style={{ background: themeColor, color: '#FFF', padding: '4px 12px', borderRadius: 8, fontWeight: 900 }}>ANZEIGE {ad.k}</div>
              {isUsed && <span style={{ color: themeColor, fontWeight: 900 }}>✓</span>}
            </div>
            <div className="de" style={{ fontWeight: 'bold', marginBottom: 4 }}>{ad.t}</div>
            <div className="de" style={{ fontSize: '0.9em', color: 'var(--muted)' }}>{ad.de}</div>
            {showTranslation && <div style={{ marginTop: 8, fontSize: '0.85em', padding: 8, background: 'var(--paper)', borderRadius: 8 }}><SmartTrans obj={ad} lang={userLang}/></div>}
          </div>
        );
      })}
    </div>
  );
}

// ============= EXAM VIEW =============
function ExamView({ exam, onBack, onSave, userLang, dark, setDark }) {
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [modalGap, setModalGap] = useState(null);
  const [mode, setMode] = useState("exam");
  
  const items = exam.items || [];
  const isB2 = exam.level === "B2";
  const themeColor = isB2 ? B2_PRIMARY : B1_PRIMARY;
  const type = exam.type || "mcq";
  
  if (!items.length && !exam.paragraphs?.length && !exam.text) {
    return <div style={{ padding: 40, textAlign: "center" }}><Icons.Alert color="var(--red)"/><h2 style={{ marginTop: 16 }}>{t("no_questions", userLang)}</h2><button className="btn" onClick={onBack} style={{ marginTop: 20 }}>{t("back", userLang)}</button></div>;
  }
  
  const pts = type === "matching" ? 2.5 : (type.includes("sprach") ? 1.5 : 5);
  const total = items.length * pts;
  const score = items.filter(it => ans[it.n] === it.c).length * pts;
  
  const usedElsewhere = (n, k) => (type !== "matching" && type !== "headings") || k === "X" ? false : Object.entries(ans).some(([id, v]) => Number(id) !== n && v === k);
  
  const pick = (n, k) => {
    if (done !== null) return;
    if (usedElsewhere(n, k)) return;
    setAns(p => { const na = { ...p }; if (na[n] === k) delete na[n]; else na[n] = k; return na; });
    setModalGap(null);
  };
  
  const finish = () => { setDone(score); if (onSave) onSave(exam.id, score, total); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const reset = () => { setAns({}); setDone(null); setShowTranslation(false); window.scrollTo(0, 0); };
  
  let body = null;
  
  if (type === "horen") {
    body = <HorenCard exam={exam} userLang={userLang} showTranslation={showTranslation} isB2={isB2}/>;
  } else if (type === "mcq") {
    body = (
      <div>
        {exam.paragraphs?.length > 0 && (
          <div className="card" style={{ padding: 20, marginBottom: 20 }}>
            {exam.paragraphs.map((p, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <p className="de" style={{ lineHeight: 1.8, fontSize: "1.05em", margin: 0 }}>{p.de}</p>
                {showTranslation && <div className="t2-ar" style={{ borderColor: themeColor }}><SmartTrans obj={p} lang={userLang}/></div>}
              </div>
            ))}
          </div>
        )}
        {items.map(it => (
          <div key={it.n} className="card" style={{ padding: 16, marginBottom: 12 }}>
            <div className="de" style={{ fontWeight: 900, marginBottom: 12 }}>{it.n}. {it.q || it.de}</div>
            {showTranslation && <div style={{ marginBottom: 12, fontSize: "0.85em", color: "var(--muted)" }}><SmartTrans obj={it} lang={userLang}/></div>}
            {it.opts?.map((opt, i) => {
              const k = opt.k || String.fromCharCode(65 + i);
              let cls = "opt";
              if (done !== null) { if (k === it.c) cls += " good"; else if (ans[it.n] === k) cls += " bad"; else cls += " faded"; } else if (ans[it.n] === k) cls += " sel";
              return <button key={k} className={cls} onClick={() => pick(it.n, k)} style={{ display: 'flex', width: '100%', marginBottom: 8, padding: 12, textAlign: 'left' }}><span style={{ fontWeight: 900, marginRight: 8 }}>{k}</span><span className="de" style={{ flex: 1 }}>{opt.de || opt}</span></button>;
            })}
          </div>
        ))}
      </div>
    );
  } else if (type === "headings") {
    body = (
      <div>
        <div className="card" style={{ padding: 16, marginBottom: 20 }}>
          <h3 style={{ margin: '0 0 12px', fontSize: '1em', color: themeColor }}>{t("options", userLang)}</h3>
          {exam.options?.map(o => (
            <div key={o.k} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px dashed var(--line)' }}>
              <span style={{ minWidth: 32, fontWeight: 900 }}>{o.k}</span>
              <span className="de" style={{ flex: 1, fontSize: '0.9em' }}>{o.de}</span>
              {showTranslation && <div style={{ fontSize: '0.8em', color: 'var(--muted)' }}><SmartTrans obj={o} lang={userLang}/></div>}
            </div>
          ))}
        </div>
        {items.map(it => (
          <div key={it.n} className="card" style={{ padding: 16, marginBottom: 12 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>{it.n}.</div>
            <p className="de" style={{ lineHeight: 1.7, fontSize: '0.95em', margin: '0 0 12px' }}>{it.de}</p>
            {showTranslation && <div style={{ marginBottom: 12, padding: 10, background: `${themeColor}10`, borderRight: `4px solid ${themeColor}`, borderRadius: 8, fontSize: '0.9em' }}><SmartTrans obj={it} lang={userLang}/></div>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {exam.options?.map(o => {
                const used = done === null && usedElsewhere(it.n, o.k);
                const isSel = ans[it.n] === o.k;
                let cls = "opt";
                if (done !== null) { if (o.k === it.c) cls += " good"; else if (isSel) cls += " bad"; else cls += " faded"; } else if (isSel) cls += " sel";
                return <button key={o.k} onClick={() => pick(it.n, o.k)} disabled={used} className={cls} style={{ padding: '8px 14px', width: 'auto', minWidth: 44, opacity: used ? 0.3 : 1 }}>{o.k}</button>;
              })}
            </div>
            {done !== null && <div style={{ marginTop: 10, fontSize: '0.85em', color: ans[it.n] === it.c ? 'var(--okc)' : 'var(--badc)', fontWeight: 'bold' }}>{ans[it.n] === it.c ? t("correct", userLang) : `${t("wrong", userLang)} ${it.c}`}</div>}
          </div>
        ))}
      </div>
    );
  } else if (type === "matching") {
    body = <MatchingSection exam={exam} userLang={userLang} showTranslation={showTranslation} ans={ans} setAns={setAns} done={done !== null}/>;
  } else if (type === "sprach1" || type === "sprach2") {
    const parts = (exam.text || '').split(/(?:\.{3,}\s*|__)\s*\((\d+)\)\s*(?:\.{3,}|__)/g);
    body = (
      <div>
        {type === 'sprach2' && exam.wordBank && (
          <div className="card" style={{ padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: '0.85em', fontWeight: 'bold', marginBottom: 8, color: 'var(--muted)' }}>{t("word_bank", userLang)}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {exam.wordBank.map(w => { const used = Object.values(ans).includes(w.w); return <button key={w.k} onClick={() => { if (done === null && modalGap !== null) { pick(modalGap, w.w); } }} disabled={used || done !== null} style={{ padding: '8px 12px', borderRadius: 8, border: `1.5px solid ${used ? 'var(--line)' : themeColor}`, background: used ? 'var(--line)' : 'var(--card)', color: used ? 'var(--muted)' : 'var(--text)', opacity: used ? 0.5 : 1, fontWeight: 'bold', fontSize: '0.9em', textDecoration: used ? 'line-through' : 'none' }}>{w.w}</button>; })}
            </div>
          </div>
        )}
        {exam.note && <div style={{ padding: 12, borderRadius: 8, background: 'var(--badbg)', color: 'var(--badc)', marginBottom: 12, fontWeight: 'bold' }}>{exam.note}</div>}
        <div className="card" style={{ padding: 20, lineHeight: 2.4, fontSize: '1.05em' }}>
          {parts.map((part, i) => {
            if (i % 2 === 0) return <span key={i} className="de" style={{ whiteSpace: 'pre-wrap' }}>{part}</span>;
            const gn = parseInt(part);
            const item = items.find(x => x.n === gn);
            if (!item) return <span key={i}>[{gn}]</span>;
            const sel = ans[gn];
            if (done !== null) { const isC = sel === item.c; return <span key={i} style={{ display: 'inline-flex', gap: 4, margin: '0 4px', alignItems: 'center' }}>{sel && <span className={isC ? 'sp1-correct' : 'sp1-wrong'}>{sel}</span>}{!isC && <span className="sp1-correct">{item.c}</span>}</span>; }
            return <button key={i} className="inline-gap" onClick={() => setModalGap(gn)} style={{ borderColor: themeColor, color: sel ? '#FFF' : themeColor, background: sel ? themeColor : undefined, borderBottomWidth: 2, borderBottomStyle: sel ? 'solid' : 'dashed', padding: '2px 10px', borderRadius: 6, margin: '0 4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9em' }}>{sel || `(${gn})`}</button>;
          })}
        </div>
        {showTranslation && exam.transText && <div className="t2-ar" style={{ marginTop: 16 }}><SmartTrans obj={exam.transText} lang={userLang}/></div>}
        {done !== null && (<div className="card" style={{ marginTop: 16, padding: 16 }}><h4 style={{ marginTop: 0 }}>{t("result", userLang)}:</h4>{items.map(it => { const isC = ans[it.n] === it.c; return <div key={it.n} style={{ marginBottom: 8, color: isC ? 'var(--okc)' : 'var(--badc)' }}><div><strong>{it.n}.</strong> {ans[it.n] || '—'} {isC ? '✓' : `✗ (${it.c})`}</div>{it.exp && <div style={{ fontSize: '0.85em', color: 'var(--muted)', fontStyle: 'italic', marginTop: 2, paddingRight: 12 }}>💡 {it.exp}</div>}</div>; })}</div>)}
      </div>
    );
  } else if (type === "schreiben" || type === "sprechen" || (!items.length && exam.text)) {
    const taskText = exam.task || exam.aufgabe || '';
    body = (
      <div className="card" style={{ padding: 20 }}>
        <p className="de" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8, margin: 0 }}>{exam.text}</p>
        {showTranslation && exam.transText && <div className="t2-ar" style={{ marginTop: 16 }}><SmartTrans obj={exam.transText} lang={userLang}/></div>}
        {taskText && <div style={{ marginTop: 20, padding: 14, background: `${themeColor}15`, borderRight: `4px solid ${themeColor}`, borderRadius: 8, lineHeight: 1.6 }}>{taskText}</div>}
        {exam.points && <div style={{ marginTop: 16 }}><h4 style={{ marginTop: 0 }}>{t("points", userLang) || "Points"}:</h4><ul style={{ margin: 0, paddingRight: 20 }}>{exam.points.map((p, i) => <li key={i} className="de" style={{ marginBottom: 6, lineHeight: 1.6 }}>{p}</li>)}</ul></div>}
      </div>
    );
  } else if (!items.length) {
    body = <div className="card" style={{ padding: 30, textAlign: 'center' }}><Icons.Alert color="var(--red)"/><h3 style={{ marginTop: 12 }}>{t("no_questions", userLang)}</h3></div>;
  }
  
  return (
    <div style={{ paddingBottom: 100 }}>
      <div className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={onBack} className="btnI"><Icons.ArrowLeft color="var(--text)"/></button>
          <div><div className="de" style={{ fontWeight: 900, fontSize: '0.95em' }}>{exam.title}</div><div style={{ fontSize: '0.7em', color: 'var(--muted)', fontWeight: 'bold' }}>{type.toUpperCase()} · {(exam.sub || '').toUpperCase()}</div></div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => setShowTranslation(!showTranslation)} className="btnI" style={{ color: showTranslation ? themeColor : 'var(--text)', borderColor: showTranslation ? themeColor : 'var(--line)' }}><Icons.Translate color={showTranslation ? themeColor : 'var(--text)'}/></button>
          <button onClick={() => setDark(!dark)} className="btnI">{dark ? <Icons.Sun/> : <Icons.Moon/>}</button>
        </div>
      </div>
      <div style={{ padding: '16px 12px' }}>{body}</div>
      
      {modalGap !== null && (type === 'sprach1' || type === 'sprach2') && (
        <div className="overlay" onClick={() => setModalGap(null)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>{t("fill_gap", userLang)} ({modalGap})</h3>
            <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
              {type === 'sprach1' && items.find(x => x.n === modalGap)?.opts?.map(opt => (<button key={opt} onClick={() => pick(modalGap, opt)} className="opt" style={{ justifyContent: 'center' }}>{opt}</button>))}
              {type === 'sprach2' && exam.wordBank?.map(w => (<button key={w.k} onClick={() => pick(modalGap, w.w)} className="opt" style={{ justifyContent: 'space-between' }}><span>{w.w}</span></button>))}
            </div>
            <button onClick={() => setModalGap(null)} className="btn" style={{ marginTop: 16, background: 'var(--line)', color: 'var(--text)' }}>{t("close", userLang)}</button>
          </div>
        </div>
      )}
      
      {items.length > 0 && ["sprach1","sprach2","mcq","headings","matching"].includes(type) && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--paper)', padding: '12px 16px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 40 }}>
          <div style={{ fontWeight: 900, color: themeColor }}>{done !== null ? `${t("result", userLang)}: ${score} / ${total}` : `${Object.keys(ans).length} / ${items.length}`}</div>
          {done === null ? <button onClick={finish} className="btn" style={{ width: 'auto', padding: '10px 24px', background: themeColor, color: '#FFF', border: 'none' }}>{t("check", userLang)}</button> : <button onClick={reset} className="btn ghost" style={{ width: 'auto', padding: '10px 24px' }}>{t("reset", userLang)}</button>}
        </div>
      )}
    </div>
  );
}

// ============= SPRECHEN VIEW =============
function SprechenView({ userLang, level, supabaseSpeaking, onLessonClick }) {
  const [activeTab, setActiveTab] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const isB2 = level === "B2";
  const themeColor = isB2 ? B2_PRIMARY : "#EF4444";
  
  const dataList = isB2 ? B2_SPRECHEN_DATA : B1_SPRECHEN_DATA;
  const placeholderList = (isB2 ? B2_PLACEHOLDER_LESSONS : PLACEHOLDER_LESSONS)["Sprechen"] || {};
  
  const grouped = {};
  Object.keys(placeholderList).forEach(sub => {
    const titles = (placeholderList[sub] || []).filter(t => {
      if (isB2) return true;
      return dataList.some(d => norm(d.title) === norm(t));
    });
    if (titles.length > 0) grouped[sub] = titles;
  });
  
  dataList.forEach(d => {
    const sub = d.sub || "Teile 2";
    if (!grouped[sub]) grouped[sub] = [];
    if (!grouped[sub].includes(d.title)) grouped[sub].push(d.title);
  });
  
  supabaseSpeaking.forEach(s => {
    const sub = s.sub || "Teile 2";
    if (!grouped[sub]) grouped[sub] = [];
    if (!grouped[sub].includes(s.title)) grouped[sub].push(s.title);
  });
  
  const allTabs = Object.keys(grouped).filter(k => grouped[k].length > 0 && (isB2 || k !== "Teile 1"));
  const safeTab = allTabs.includes(activeTab) ? activeTab : allTabs[0];
  const currentList = grouped[safeTab] || [];
  
  return (
    <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
      <h1 className="de" style={{ textAlign: "center", color: themeColor, marginBottom: 16, fontSize: "2.2em" }}>Sprechen {level}</h1>
      <div style={{ marginBottom: 16 }}><input type="text" placeholder={t("search", userLang)} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: `1px solid ${themeColor}`, background: "var(--card)", color: "var(--text)", fontSize: "1em", outline: "none", boxSizing: "border-box" }}/></div>
      
      {allTabs.length > 1 && (
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 10, marginBottom: 16 }}>
          {allTabs.map(tab => (<button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "10px 20px", borderRadius: 12, fontWeight: 900, background: safeTab === tab ? themeColor : "var(--card)", color: safeTab === tab ? "#FFF" : "var(--muted)", border: `1px solid ${themeColor}`, whiteSpace: "nowrap", cursor: "pointer" }}>{tab}</button>))}
        </div>
      )}
      
      {currentList.filter(n => n.toLowerCase().includes(searchQuery.toLowerCase())).map((title, idx) => {
        const hasData = dataList.some(d => norm(d.title) === norm(title));
        const sbHas = supabaseSpeaking.some(s => norm(s.title) === norm(title));
        const isLocked = !hasData && !sbHas;
        return (
          <button key={idx} className="card" onClick={() => onLessonClick(title, "Sprechen")} style={{ width: "100%", textAlign: "right", display: "block", color: "var(--text)", padding: 20, marginBottom: 12, border: `1px solid ${isB2 ? "#CCFBF1" : "var(--line)"}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div className="de" style={{ fontWeight: 900, fontSize: "1.2em" }}>{title}</div>
                {userLang !== 'de' && <div style={{ fontSize: '0.85em', color: 'var(--muted)', marginTop: 4 }}><AutoTrans text={title} lang={userLang}/></div>}
                <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center", color: "var(--muted)", fontSize: ".9em" }}><span style={{ background: `${themeColor}15`, color: themeColor, padding: "4px 10px", borderRadius: 8 }}>{safeTab}</span></div>
              </div>
              {isLocked ? <Icons.Lock color="#F59E0B"/> : <Icons.ArrowRight color={themeColor}/>}
            </div>
          </button>
        );
      })}
      {currentList.length === 0 && <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 40 }}>{t("empty", userLang)}</p>}
    </div>
  );
}

function SprechenDetailView({ lesson, onBack, userLang, level }) {
  const [showTrans, setShowTrans] = useState(false);
  const themeColor = level === "B2" ? B2_PRIMARY : "#EF4444";
  return (
    <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} className="btnI" style={{ width: 40, height: 40 }}><Icons.ArrowLeft color="var(--text)"/></button>
        <h2 className="de" style={{ margin: 0, fontSize: "1.2em", fontWeight: 900 }}>{lesson.title}</h2>
      </div>
      <div className="card" style={{ padding: 20 }}>
        <div style={{ color: themeColor, fontWeight: 900, marginBottom: 12, fontSize: "1.1em" }}>{t("aufgabe_header", userLang)}</div>
        <div className="de" style={{ fontSize: "1.05em", lineHeight: 1.8, marginBottom: 24 }}>{lesson.aufgabe || lesson.text}</div>
        {lesson.text && lesson.aufgabe && <div className="de" style={{ fontSize: "1.05em", lineHeight: 1.8, whiteSpace: "pre-wrap", marginBottom: 24, paddingTop: 16, borderTop: '1px dashed var(--line)' }}>{lesson.text}</div>}
        {lesson.transText && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, paddingTop: 16, borderTop: "1px dashed var(--line)" }}><div style={{ color: themeColor, fontWeight: 900 }}>{t("trans_text", userLang)}</div><button onClick={() => setShowTrans(!showTrans)} style={{ background: `${themeColor}15`, color: themeColor, padding: "8px 16px", borderRadius: 8, fontWeight: 900, border: "none", cursor: "pointer" }}>{showTrans ? t("hide", userLang) : t("show", userLang)}</button></div>}
        {showTrans && lesson.transText && <div style={{ background: `${themeColor}05`, border: `1px solid ${themeColor}40`, padding: 16, borderRadius: 12, marginTop: 12, lineHeight: 1.8 }}><SmartTrans obj={lesson.transText} lang={userLang}/></div>}
      </div>
    </div>
  );
}

// ============= SCHREIBEN VIEW =============
function SchreibenView({ userLang, isPaid, trialActive, wa: waFn, onLessonClick, level }) {
  const isB2 = level === "B2";
  const themeColor = isB2 ? B2_PRIMARY : "#F59E0B";
  const dataList = isB2 ? (B2_SCHREIBEN_DATA || []) : (SCHREIBEN_DATA || []);
  const placeholders = (isB2 ? B2_PLACEHOLDER_LESSONS?.Schreiben : PLACEHOLDER_LESSONS.Schreiben) || [];
  const [searchQuery, setSearchQuery] = useState("");
  
  const allTitles = [...new Set([...placeholders, ...dataList.map(d => d.title)])];
  
  return (
    <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
      <h1 className="de" style={{ margin: "0 0 20px", fontSize: "2.2em", fontWeight: 900, color: "var(--ink)" }}>Schreiben {level}</h1>
      
      <div style={{ marginBottom: 16 }}><input type="text" placeholder={t("search", userLang)} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: `1px solid ${themeColor}`, background: "var(--card)", color: "var(--text)", fontSize: "1em", outline: "none", boxSizing: "border-box" }} /></div>

      {allTitles.filter(n => n.toLowerCase().includes(searchQuery.toLowerCase())).map((title, idx) => {
        const hasData = dataList.some(d => norm(d.title) === norm(title));
        const isLocked = !hasData;
        return (
          <div key={idx} onClick={() => onLessonClick(title, "Schreiben")} className="card" style={{ padding: 20, marginBottom: 16, cursor: "pointer", border: `1px solid ${isB2 ? themeColor : "var(--line)"}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div className="de" style={{ fontWeight: 900, fontSize: "1.1em", marginBottom: 4 }}>{title}</div>
                {userLang !== 'de' && <div style={{ fontSize: "0.85em", color: "var(--muted)" }}><AutoTrans text={title} lang={userLang}/></div>}
              </div>
              {isLocked ? <Icons.Lock color="#F59E0B"/> : <Icons.ArrowRight color={themeColor}/>}
            </div>
            <div style={{ display: "inline-block", background: `${themeColor}15`, color: themeColor, padding: "4px 12px", borderRadius: 8, fontSize: "0.85em", fontWeight: 900, marginTop: 8 }}>{level}</div>
          </div>
        );
      })}
    </div>
  );
}

// ============= ADMIN PANEL =============
function AdminPanel({ userLang, onClose }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notifTitle, setNotifTitle] = useState("");
  const [notifMsg, setNotifMsg] = useState("");
  
  useEffect(() => { sb.from('profiles').select('*').then(({ data }) => { if (data) setUsers(data); setLoading(false); }); }, []);
  
  const togglePaid = async (id, cur) => { await sb.from('profiles').update({ is_paid: !cur }).eq('id', id); setUsers(users.map(u => u.id === id ? { ...u, is_paid: !cur } : u)); };
  const toggleBlock = async (id, cur) => { await sb.from('profiles').update({ is_blocked: !cur }).eq('id', id); setUsers(users.map(u => u.id === id ? { ...u, is_blocked: !cur } : u)); };
  
  const sendNotification = async () => {
    if (!notifTitle || !notifMsg) return alert("Enter title and message");
    const { error } = await sb.from('notifications').insert([{ title: notifTitle, message: notifMsg, is_active: true }]);
    if (error) alert("Error: " + error.message); else { alert("✅ Sent"); setNotifTitle(""); setNotifMsg(""); }
  };
  
  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontSize: "1.5em", fontWeight: 900, display: "flex", alignItems: "center", gap: 8 }}><Icons.Lock color="#F59E0B"/> {t("admin_panel", userLang) || "Admin"}</h2>
        <button onClick={onClose} className="btnI"><Icons.X color="var(--text)"/></button>
      </div>
      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ margin: "0 0 16px", fontWeight: 900, display: "flex", alignItems: "center", gap: 8 }}><Icons.Bell color="#2563EB"/> {t("notifications", userLang) || "Notifications"}</h3>
        <input className="auth-input" placeholder={t("title_ar", userLang) || "Title"} value={notifTitle} onChange={e => setNotifTitle(e.target.value)} />
        <textarea className="auth-input" rows={3} placeholder={t("message_ar", userLang) || "Message"} value={notifMsg} onChange={e => setNotifMsg(e.target.value)} />
        <button className="btn" onClick={sendNotification}>{t("send_notification", userLang) || "Send"}</button>
      </div>
      <div className="card">
        <h3 style={{ margin: "0 0 16px", fontWeight: 900, display: "flex", alignItems: "center", gap: 8 }}><Icons.Target color="#22C55E"/> {t("users", userLang) || "Users"} ({users.length})</h3>
        {loading ? <p>Loading...</p> : users.map(u => (
          <div key={u.id} style={{ borderBottom: "1px solid var(--line)", padding: "12px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontWeight: 900 }}>{u.email || u.unique_name}</div>
              <div style={{ fontSize: "0.8em", color: "var(--muted)", display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                {u.is_paid ? <span style={{color: 'var(--okc)', display: 'flex', alignItems: 'center', gap: 4}}><Icons.Check color="var(--okc)" /> {t("paid", userLang) || "Paid"}</span> : <span style={{color: 'var(--red)', display: 'flex', alignItems: 'center', gap: 4}}><Icons.X color="var(--red)" /> {t("unpaid", userLang) || "Unpaid"}</span>}
                <span>|</span>
                {u.is_blocked ? <span style={{color: 'var(--red)', display: 'flex', alignItems: 'center', gap: 4}}><Icons.Lock color="var(--red)" /> {t("blocked", userLang) || "Blocked"}</span> : <span style={{color: '#22C55E', display: 'flex', alignItems: 'center', gap: 4}}><Icons.Check color="#22C55E" /> {t("active", userLang) || "Active"}</span>}
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn ghost" style={{ padding: "8px 12px", fontSize: "0.8em", width: "auto", color: u.is_paid ? "var(--red)" : "var(--okc)" }} onClick={() => togglePaid(u.id, u.is_paid)}>{u.is_paid ? t("mark_unpaid", userLang) || "Unpay" : t("mark_paid", userLang) || "Pay"}</button>
              <button className="btn ghost" style={{ padding: "8px 12px", fontSize: "0.8em", width: "auto", color: u.is_blocked ? "var(--okc)" : "var(--red)" }} onClick={() => toggleBlock(u.id, u.is_blocked)}>{u.is_blocked ? t("unblock", userLang) || "Unblock" : t("block", userLang) || "Block"}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============= MAIN APP =============
function App() {
  const [user, setUser] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
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
  const [showHorenTrans, setShowHorenTrans] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [lockedModal, setLockedModal] = useState(false); 
  
  const [supabaseLessons, setSupabaseLessons] = useState([]);
  const [supabaseSpeaking, setSupabaseSpeaking] = useState([]); 
  const [activeTab, setActiveTab] = useState("Teile 1");
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
    
    sb.from('notifications').select('*').eq('is_active', true).then(({ data }) => { if (data) setNotifications(data); });
    sb.from('premium_lessons').select('*').then(({ data }) => { if (data) setSupabaseLessons(data); });
    sb.from('b2_speaking_topics').select('*').then(({ data }) => { if (data) setSupabaseSpeaking(prev => [...prev, ...data]); });
    sb.from('b1_speaking_topics').select('*').then(({ data }) => { if (data) setSupabaseSpeaking(prev => [...prev, ...data]); });
    sb.from('b2_audio_lessons').select('*').then(({ data }) => { if (data) setSupabaseLessons(prev => [...prev, ...data]); });
    sb.from('b1_audio_lessons').select('*').then(({ data }) => { if (data) setSupabaseLessons(prev => [...prev, ...data]); });

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
            if (data.is_blocked) { alert("⚠️ Account blocked."); logout(); return; }
            setIsAdmin(!!data.is_admin);
            if (data.active_device_id && data.active_device_id !== deviceId) { alert("⚠️ Logged in from another device."); logout(); return; }
            setIsPaid(!!data.is_paid);
            if (data.trial_started_at && !data.is_paid) {
              const end = new Date(data.trial_started_at).getTime() + 48 * 60 * 60 * 1000;
              if (Date.now() < end) { setTrialActive(true); setTrialEndsAt(end); } else { setTrialActive(false); setTrialEndsAt(null); }
            }
          }
        });
    } else {
      setIsPaid(false); setIsAdmin(false); setTrialActive(false); setTrialEndsAt(null);
    }
  }, [user]);

  useEffect(() => {
    if (!trialActive || !trialEndsAt) { setTrialCountdown(""); return; }
    const update = () => {
      const diff = trialEndsAt - Date.now();
      if (diff <= 0) { setTrialActive(false); setTrialCountdown(""); return; }
      const h = Math.floor(diff / (60 * 60 * 1000));
      const m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      setTrialCountdown(`${h}h ${m}m`);
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, [trialActive, trialEndsAt]);

  useEffect(() => { document.documentElement.style.setProperty("--fs", fs / 100); try { localStorage.setItem("ep_fs", fs); } catch (e) {} }, [fs]);
  useEffect(() => { try { localStorage.setItem("ep_results", JSON.stringify(results)); } catch (e) {} }, [results]);
  
  useEffect(() => {
    let interval = null;
    if (exam) { interval = setInterval(() => { setTimeLeft(prev => { if (prev <= 1) { clearInterval(interval); return 0; } return prev - 1; }); }, 1000); }
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
      if (newError) return alert("Error: " + newError.message);
      if (!newData?.user) return alert("Could not create account.");
      
      const { error: insertError } = await sb.from('profiles').insert([{ 
        id: newData.user.id, email: uniqueName, is_paid: false, active_device_id: deviceId, is_blocked: false, trial_started_at: new Date().toISOString()
      }]);
      if (insertError) return alert("Profile error: " + insertError.message);
      
      const userObj = { ...newData.user, name: uniqueName, isGuest: false };
      setUser(userObj); localStorage.setItem("ep_user", JSON.stringify(userObj));
    } else {
      await sb.from('profiles').update({ active_device_id: deviceId }).eq('id', data.user.id);
      const userObj = { ...data.user, name: uniqueName, isGuest: false };
      setUser(userObj); localStorage.setItem("ep_user", JSON.stringify(userObj));
    }
  };
  
  const handleGuest = () => {
    const guest = { name: "Guest", isGuest: true };
    setUser(guest); setIsPaid(false); setIsAdmin(false); setTrialActive(false); setTrialEndsAt(null);
    localStorage.setItem("ep_user", JSON.stringify(guest));
  };
  
  const logout = () => { 
    localStorage.removeItem("ep_user"); 
    setIsPaid(false); setIsAdmin(false); setTrialActive(false); setTrialEndsAt(null); setUser(null); sb.auth.signOut(); 
  };

  const saveResult = (id, score, max) => setResults(r => ({ ...r, [id]: { score, max, date: Date.now() } }));
  
  const go = (v) => { setView(v); setExam(null); setIsSideMenuOpen(false); window.scrollTo(0, 0); };

  const handleLessonClick = async (title, sub) => {
    const isB2 = level === "B2";
    const dataLesen = isB2 ? (B2_EXAMS || []) : (EXAMS || []);
    const dataHoren = isB2 ? (B2_HOREN_EXAMS || []) : (HOREN_EXAMS || []);
    const dataSchreiben = isB2 ? (B2_SCHREIBEN_DATA || []) : (SCHREIBEN_DATA || []);
    const normTitle = norm(title);

    if (sub === "Schreiben") {
      const localSchreiben = dataSchreiben.filter(e => norm(e.title) === normTitle);
      if (localSchreiben.length > 0) { setExam(localSchreiben[0]); setTimeLeft(90 * 60); }
      else { if (!isPaid && !trialActive) setLockedModal(true); else wa(t("wa_upgrade_msg", userLang) + " - " + title); }
      return;
    }

    if (sub === "Sprechen") {
      const spkData = isB2 ? (window.B2_SPRECHEN_DATA || []) : (window.B1_SPRECHEN_DATA || []);
      const localSpk = spkData.filter(e => norm(e.title) === normTitle);
      const sbSpk = supabaseSpeaking.filter(e => norm(e.title) === normTitle).map(e => ({
        id: e.id, title: e.title, aufgabe: e.aufgabe, text: e.text_content, type: "sprechen"
      }));
      const allSpk = [...localSpk.map(e => ({...e, type: "sprechen"})), ...sbSpk];
      if (allSpk.length > 0) { setExam(allSpk[0]); }
      else { if (!isPaid && !trialActive) setLockedModal(true); else wa(t("wa_upgrade_msg", userLang) + " - " + title); }
      return;
    }

    const localExams = dataLesen.filter(e => norm(e.title) === normTitle && e.sub === sub);
    const localHoren = dataHoren.filter(e => norm(e.title) === normTitle && e.sub === sub);
    const freeMods = isB2 ? [] : FREE_MODIFIED_LESSONS.filter(e => norm(e.title) === normTitle && e.sub === sub);
    
    let sbExams = supabaseLessons.filter(les => norm(les.title || les.data?.title) === normTitle).map(les => les.data || les);

    let allVersions = [];
    if (localHoren.length > 0) allVersions = [...localHoren, ...sbExams];
    else allVersions = [...localExams, ...freeMods, ...sbExams];

    if (allVersions.length === 0) {
      if (!isPaid && !trialActive) setLockedModal(true);
      else wa(t("wa_upgrade_msg", userLang) + " - " + title);
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
            <input className="auth-input" name="unique_name" placeholder="Unique Name" required />
            <input className="auth-input" name="unique_code" placeholder="Unique Code" required />
            <button type="submit" className="auth-btn">{t("login", userLang)}</button>
          </form>
          <div style={{textAlign:"center", margin:"20px 0", color:"var(--muted)", fontSize: "0.9em"}}>{t("or", userLang)}</div>
          <button className="auth-btn guest" onClick={handleGuest}><Icons.Home color="var(--ink)" /> {t("guest", userLang)}</button>
        </div>
      </div>
    );
  }

  if (exam && exam.type === "sprechen") return <SprechenDetailView lesson={exam} onBack={() => setExam(null)} userLang={userLang} level={level} />;
  if (exam) return <ExamView exam={exam} userLang={userLang} dark={dark} setDark={setDark} onBack={() => {setExam(null); setTimeLeft(90*60);}} onSave={saveResult} />;

  const themeColor = level === "B2" ? B2_PRIMARY : B1_PRIMARY;

  return (
    <div style={{ paddingBottom: 100 }}>
      <div className={`menu-overlay ${isSideMenuOpen ? 'active' : ''}`} onClick={() => setIsSideMenuOpen(false)}></div>
      
      <nav className={`side-menu ${isSideMenuOpen ? 'active' : ''}`}>
        <div className="side-menu-header" style={{ background: level === "B2" ? "linear-gradient(135deg, #0D9488, #0F766E)" : "linear-gradient(135deg, #22C55E, #16A34A)" }}>
          <div className="logo-circle" style={{ background: level === "B2" ? "linear-gradient(135deg, #14B8A6, #0D9488)" : "linear-gradient(135deg, #4ADE80, #22C55E)" }}>De</div>
          <h2>EchtPrüfung {level}</h2>
          <p style={{fontSize: '0.8em', opacity: 0.8}}>{user.name}</p>
        </div>
        <a href="#" onClick={(e) => {e.preventDefault(); setLevel('B1'); go('lesen');}} className={`menu-item ${level === 'B1' ? 'active' : ''}`} style={level === 'B1' ? { color: "#22C55E", borderRightColor: "#22C55E" } : {}}><Icons.Book color={level === 'B1' ? "#22C55E" : "var(--muted)"} /> {t("b1_level", userLang)}</a>
        <a href="#" onClick={(e) => {e.preventDefault(); setLevel('B2'); go('lesen');}} className={`menu-item ${level === 'B2' ? 'active' : ''}`} style={level === 'B2' ? { color: "#0D9488", borderRightColor: "#0D9488" } : {}}><Icons.Book color={level === 'B2' ? "#0D9488" : "var(--muted)"} /> {t("b2_level", userLang)}</a>
        {isAdmin && <a href="#" onClick={(e) => {e.preventDefault(); go('admin');}} className={`menu-item ${view === 'admin' ? 'active' : ''}`}><Icons.Lock color="#F59E0B" /> {t("admin_panel", userLang)}</a>}
      </nav>

      <div className="header" style={{ borderBottomColor: level === "B2" ? "#0D9488" : "var(--line)" }}>
        <div className="brand">
          <button className="btnI" onClick={() => setIsSideMenuOpen(true)} style={{ marginRight: 8 }}><Icons.Menu color="var(--text)" /></button>
          <div className="logo" style={{ background: level === "B2" ? "linear-gradient(135deg, #14B8A6, #0D9488)" : "var(--ink)" }}><LogoImage size={36} /></div>
          <div>
            <div className="header-title">EchtPrüfung</div>
            <div className="header-subtitle de"><span>Deutsch {level}</span> <span>•</span><span style={{ fontSize: "1.2em" }}>{LANGS.find(l => l.c === userLang)?.f}</span><span>{LANGS.find(l => l.c === userLang)?.n}</span></div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button className="btnI" onClick={() => setDark(!dark)}>{dark ? <Icons.Sun color={level === "B2" ? "#0D9488" : "#F59E0B"} /> : <Icons.Moon color={level === "B2" ? "#14B8A6" : "#2563EB"} />}</button>
          <button className="btnI" onClick={() => setSettings(true)}><Icons.Settings color="var(--text)" /></button>
        </div>
      </div>

      <main style={{ margin: "0 12px", paddingTop: 10 }}>
        {view === "home" && (
          <>
            <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", minHeight: "450px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px 20px", border: `1px solid ${level === "B2" ? "#0D9488" : "var(--line)"}`, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              {notifications.length > 0 && <div style={{ width: "100%", maxWidth: 400, background: level === "B2" ? "rgba(13,148,136,0.9)" : "rgba(255,206,0,0.9)", padding: 16, borderRadius: 16, marginBottom: 16, zIndex: 10, position: "relative" }}><div style={{ fontWeight: 900, fontSize: "1.1em", color: level === "B2" ? "#FFF" : "#111", display: "flex", alignItems: "center", gap: 8 }}><Icons.Bell color={level === "B2" ? "#FFF" : "#111"} /> {notifications[0].title}</div><div style={{ fontSize: "0.9em", color: level === "B2" ? "#F0FDFA" : "#333", marginTop: 4 }}>{notifications[0].message}</div></div>}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: level === "B2" ? "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop')" : "url('https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: level === "B2" ? "linear-gradient(to bottom, rgba(4,47,46,0.3) 0%, rgba(4,47,46,0.95) 100%)" : "linear-gradient(to bottom, rgba(15,27,51,0.3) 0%, rgba(15,27,51,0.95) 100%)", zIndex: 1 }} />
              
              <div style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%" }}>
                <div style={{ display: "inline-block", padding: 20, background: "rgba(255,255,255,0.1)", borderRadius: 28, backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}><LogoImage size={90} /></div>
                <h2 className="de" style={{ margin: "20px 0 8px", fontSize: "2.2em", fontWeight: 900, color: "#FFF", textShadow: "0 2px 10px rgba(0,0,0,0.5)", letterSpacing: "-0.5px" }}>EchtPrüfung</h2>
                <div style={{ background: level === "B2" ? "rgba(20,184,166,0.2)" : "rgba(245,184,46,0.15)", border: `1px solid ${level === "B2" ? "#14B8A6" : "var(--gold)"}`, padding: "12px 20px", borderRadius: 16, margin: "0 auto 24px", maxWidth: "90%", backdropFilter: "blur(5px)" }}><p style={{ margin: 0, color: "#FFF", fontSize: "1.1em", fontWeight: 900 }}><AutoTrans text={t("banner_title", userLang)} lang={userLang} /></p><p className="de" style={{ margin: "6px 0 0", color: level === "B2" ? "#CCFBF1" : "var(--gold)", fontSize: "0.85em", fontWeight: "bold", textAlign: "center" }}>{t("banner_sub", userLang)}</p></div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", direction: "ltr", fontSize: "1.6em", fontWeight: 900, background: "rgba(255,255,255,0.95)", padding: "12px 32px", borderRadius: 20, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}><span style={{ color: "#0F172A" }}>B1</span><span style={{ color: "#DD0000" }}>&</span><span style={{ color: "#0D9488" }}>B2</span></div>
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h3 style={{ fontWeight: 900, fontSize: "1.3em", color: "var(--text)", marginBottom: 12 }}>
                <AutoTrans text="الامتحانات الدولية" lang={userLang} />
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                {EXAM_COUNTRIES.map((c, idx) => (
                  <button key={idx} onClick={() => setSelectedCountry(c)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 8px", background: "#fff", border: `1px solid ${level === "B2" ? "#CCFBF1" : "#e2e8f0"}`, borderRadius: 16 }}>
                    <span style={{ fontSize: "2em" }}>{c.flag}</span>
                    <span style={{ fontWeight: 900, fontSize: "0.8em", color: "#1e293b" }}><AutoTrans text={c.ar} lang={userLang} /></span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {view === "lesen" && (
          <div>
            <h1 className="de" style={{ textAlign: "center", color: level === "B2" ? "#0D9488" : "#22C55E", marginBottom: 16, fontSize: "2.2em" }}>Lesen {level}</h1>
            {trialActive && !isPaid && <div style={{ background: `linear-gradient(135deg, ${level === "B2" ? "rgba(13,148,136,0.15)" : "rgba(34,197,94,0.15)"}, rgba(34,197,94,0.05))`, border: `1.5px solid ${level === "B2" ? "#0D9488" : "#22C55E"}`, borderRadius: 16, padding: 14, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}><div style={{ color: level === "B2" ? "#0D9488" : "#22C55E" }}><Icons.Gift color={level === "B2" ? "#0D9488" : "#22C55E"} /></div><div style={{ flex: 1 }}><div style={{ fontWeight: 900, color: level === "B2" ? "#0D9488" : "#22C55E", fontSize: "1em" }}>{t("trial_active", userLang)}</div><div style={{ color: "var(--muted)", fontSize: "0.85em" }}>{trialCountdown} — {t("all_lessons", userLang)}</div></div></div>}
            <div style={{ marginBottom: 16 }}><input type="text" placeholder={t("search", userLang)} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: `1px solid ${level === "B2" ? "#0D9488" : "var(--line)"}`, background: "var(--card)", color: "var(--text)", fontSize: "1em", outline: "none", boxSizing: "border-box" }} /></div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, background: "var(--card)", padding: 16, borderRadius: 24, border: "1px solid var(--line)", marginBottom: 20 }}>
              {[{ id: "Prüfungen", icon: <Icons.Book color={level === "B2" ? "#0D9488" : "#22C55E"} /> }, { id: "Teile 1", icon: <Icons.Edit color={level === "B2" ? "#0D9488" : "#22C55E"} /> }, { id: "Teile 2", icon: <Icons.Edit color={level === "B2" ? "#0D9488" : "#22C55E"} /> }, { id: "Teile 3", icon: <Icons.Edit color={level === "B2" ? "#0D9488" : "#22C55E"} /> }, { id: "Sprach 1", icon: <Icons.Translate color={level === "B2" ? "#0D9488" : "#22C55E"} /> }, { id: "Sprach 2", icon: <Icons.Translate color={level === "B2" ? "#0D9488" : "#22C55E"} /> }].map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: "14px 8px", borderRadius: 16, fontWeight: 900, fontSize: "0.85em", border: activeTab === tab.id ? `2px solid ${level === "B2" ? "#0D9488" : "#22C55E"}` : "2px solid transparent", background: activeTab === tab.id ? `${level === "B2" ? "#0D9488" : "#22C55E"}15` : "transparent", color: activeTab === tab.id ? (level === "B2" ? "#0D9488" : "#22C55E") : "var(--muted)", transition: "all 0.2s", cursor: "pointer" }}><span style={{ fontSize: "1.6em" }}>{tab.icon}</span>{tab.id}</button>
              ))}
            </div>
            
            {(() => {
              const currentPlaceholder = level === "B2" ? B2_PLACEHOLDER_LESSONS : PLACEHOLDER_LESSONS;
              return currentPlaceholder["Lesen"]?.[activeTab]?.filter(name => name.toLowerCase().includes(searchQuery.toLowerCase())).map((name, idx) => {
                const isB2 = level === "B2";
                const localExams = (isB2 ? B2_EXAMS : EXAMS).filter(e => norm(e.title) === norm(name) && e.sub === activeTab && e.level === level);
                const freeMods = isB2 ? [] : FREE_MODIFIED_LESSONS.filter(e => norm(e.title) === norm(name) && e.sub === activeTab);
                const sbExams = supabaseLessons.filter(les => norm(les.title || les.data?.title) === norm(name) && (les.sub === activeTab || les.data?.sub === activeTab)).map(les => les.data || les);
                const totalVersions = localExams.length + freeMods.length + sbExams.length;
                const isLocked = totalVersions === 0 && !isPaid && !trialActive;
                
                return (
                  <button key={idx} className="card" onClick={() => handleLessonClick(name, activeTab)} style={{ width: "100%", textAlign: "right", display: "block", color: "var(--text)", padding: 20, marginBottom: 12, border: `1px solid ${isB2 ? "#CCFBF1" : "var(--line)"}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div className="de" style={{ fontWeight: 900, fontSize: "1.2em" }}>{name}</div>
                        {userLang !== 'de' && <div style={{ fontSize: "0.85em", color: "var(--muted)", marginTop: 4 }}><AutoTrans text={name} lang={userLang} /></div>}
                        <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center", color: "var(--muted)", fontSize: ".9em" }}><span className="chip" style={{ background: `${isB2 ? "#0D9488" : "#22C55E"}15`, color: isB2 ? "#0D9488" : "#22C55E", padding: "4px 10px", borderRadius: 8 }}>{activeTab}</span><span>{t("min", userLang)} 90</span></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                         {totalVersions > 1 && <span style={{ background: `${isB2 ? "#0D9488" : "#22C55E"}15`, color: isB2 ? "#0D9488" : "#22C55E", padding: "2px 8px", borderRadius: 6, fontSize: "0.75em", fontWeight: 900 }}>{totalVersions} <AutoTrans text="تعديلات" lang={userLang} /></span>}
                         <div style={{ color: isLocked ? "var(--red)" : (isB2 ? "#0D9488" : "#22C55E") }}>
                           {isLocked ? <Icons.Lock color="#F59E0B" /> : <Icons.ArrowRight color={isB2 ? "#0D9488" : "#22C55E"} />}
                         </div>
                      </div>
                    </div>
                  </button>
                );
              });
            })()}
          </div>
        )}

        {view === "horen" && (
          <div style={{ padding: "20px 12px", paddingBottom: 100, direction: "rtl" }}>
            {!activeHorenTeil ? (
              <>
                <h1 className="de" style={{ fontSize: "2.8em", fontWeight: 900, color: level === "B2" ? "#0D9488" : "#8B5CF6", marginBottom: 20, textAlign: "right" }}>Hören {level}</h1>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ background: "#ffffff", borderRadius: 24, padding: 24, border: `1px solid ${level === "B2" ? "#CCFBF1" : "#e2e8f0"}`, boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                    <h2 className="de" style={{ fontSize: "1.8em", fontWeight: 900, margin: "0 0 20px", color: "#1e293b" }}>Teil 1</h2>
                    <button onClick={() => setActiveHorenTeil("Teile 1")} style={{ width: "100%", padding: "18px", borderRadius: 16, background: level === "B2" ? "#F0FDFA" : "#f5f3ff", color: level === "B2" ? "#0D9488" : "#8B5CF6", fontWeight: 900, fontSize: "1.1em", border: `1.5px solid ${level === "B2" ? "#0D9488" : "#8B5CF6"}`, display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}><Icons.Play color={level === "B2" ? "#0D9488" : "#8B5CF6"} /> {t("start_now", userLang)}</button>
                  </div>
                  <div style={{ background: "#ffffff", borderRadius: 24, padding: 24, border: "1px solid #fef3c7", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                    <h2 className="de" style={{ fontSize: "1.8em", fontWeight: 900, margin: "0 0 20px", color: "#d97706" }}>Teil 2 <span style={{fontSize: "0.5em", color: "#d97706", background: "#fef3c7", padding: "2px 8px", borderRadius: 6}}>PRO</span></h2>
                    <button onClick={() => { if(!isPaid && !trialActive) setLockedModal(true); else setActiveHorenTeil("Teile 2"); }} style={{ width: "100%", padding: "18px", borderRadius: 16, background: "#fffbeb", color: "#d97706", fontWeight: 900, fontSize: "1.1em", border: "1.5px solid #f59e0b", display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}><Icons.Rocket color="#d97706" /> {isPaid || trialActive ? t("start_now", userLang) : t("unlock", userLang)}</button>
                  </div>
                  <div style={{ background: "#ffffff", borderRadius: 24, padding: 24, border: "1px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                    <h2 className="de" style={{ fontSize: "1.8em", fontWeight: 900, margin: "0 0 20px", color: "#1e293b" }}>Teil 3</h2>
                    <button onClick={() => setActiveHorenTeil("Teile 3")} style={{ width: "100%", padding: "18px", borderRadius: 16, background: level === "B2" ? "#F0FDFA" : "#f5f3ff", color: level === "B2" ? "#0D9488" : "#8B5CF6", fontWeight: 900, fontSize: "1.1em", border: `1.5px solid ${level === "B2" ? "#0D9488" : "#8B5CF6"}`, display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}><Icons.Play color={level === "B2" ? "#0D9488" : "#8B5CF6"} /> {t("start_now", userLang)}</button>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <button onClick={() => setActiveHorenTeil(null)} className="btnI" style={{ width: 40, height: 40 }}><Icons.ArrowLeft color="var(--text)" /></button>
                  <h2 className="de" style={{ margin: 0, fontSize: "1.8em", fontWeight: 900 }}>{activeHorenTeil} {level}</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {(() => {
                    const currentPlaceholder = level === "B2" ? B2_PLACEHOLDER_LESSONS : PLACEHOLDER_LESSONS;
                    const hörenList = currentPlaceholder["Hören"]?.[activeHorenTeil] || [];
                    return hörenList.map((title, idx) => {
                      const localHoren = (level === "B2" ? B2_HOREN_EXAMS : HOREN_EXAMS).filter(ex => norm(ex.title) === norm(title));
                      const sbHoren = supabaseLessons.filter(les => norm(les.title || les.data?.title) === norm(title) && (les.part === activeHorenTeil || les.data?.sub === activeHorenTeil)).map(les => les.data || les);
                      const allHoren = [...localHoren, ...sbHoren];
                      if (allHoren.length > 0) return allHoren.map((ex) => <HorenCard key={ex.id || Math.random()} exam={ex} userLang={userLang} showTranslation={showHorenTrans} isB2={level === "B2"} />);
                      else return (
                        <div key={idx} className="card" onClick={() => handleLessonClick(title, activeHorenTeil)} style={{ padding: 20, border: `1px solid ${level === "B2" ? "#CCFBF1" : "var(--line)"}`, cursor: "pointer", background: "var(--card)" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div><div className="de" style={{ fontWeight: 900, fontSize: "1.2em", color: "var(--text)" }}>{title}</div>{userLang !== 'de' && <div style={{ fontSize: "0.85em", color: "var(--muted)" }}><AutoTrans text={title} lang={userLang}/></div>}</div>
                            {!isPaid && !trialActive && <Icons.Lock color="#F59E0B" />}
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>
            )}
          </div>
        )}

        {view === "schreiben" && <SchreibenView userLang={userLang} isPaid={isPaid} trialActive={trialActive} wa={wa} onLessonClick={handleLessonClick} level={level} />}
        
        {view === "sprechen" && <SprechenView userLang={userLang} level={level} supabaseSpeaking={supabaseSpeaking} onLessonClick={handleLessonClick} />}

        {view === "pruefung" && (
          <div style={{ padding: "20px 12px", paddingBottom: 100 }}>
            <h1 className="de" style={{ textAlign: "center", color: level === "B2" ? B2_PRIMARY : "#EAB308", marginBottom: 16, fontSize: "2.2em" }}>
              <AutoTrans text="Zufällige Prüfungen" lang={userLang} />
            </h1>
            <div style={{ paddingBottom: 80 }}>
              {(level === "B2" ? B2_PRUEFUNG_DATA : PRUEFUNG_DATA)?.map(exam => (
                <div key={exam.id} className="card" style={{ padding: 20, border: `1.5px solid ${level === "B2" ? B2_PRIMARY : "var(--line)"}`, marginBottom: 16, borderRadius: 16, background: "var(--card)", cursor: "pointer" }} onClick={() => { if(!isPaid && !trialActive) setLockedModal(true); else wa(t("wa_upgrade_msg", userLang) + " - " + exam.title); }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ fontWeight: 900, fontSize: "1.2em", color: "var(--text)" }}>
                      <AutoTrans text={exam.title} lang={userLang} />
                    </div>
                    <span style={{ background: level === "B2" ? B2_PRIMARY : "#EAB308", color: "#111", padding: "2px 10px", borderRadius: 6, fontWeight: 900, fontSize: "0.8em" }}>{t("pro", userLang)}</span>
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: "0.95em", marginBottom: 16, lineHeight: 1.5 }}>
                    <AutoTrans text={exam.desc} lang={userLang} />
                  </div>
                  <button style={{ width: "100%", padding: 12, borderRadius: 10, background: `${level === "B2" ? B2_PRIMARY : "#EAB308"}15`, color: level === "B2" ? B2_PRIMARY : "#EAB308", border: `1px solid ${level === "B2" ? B2_PRIMARY : "#EAB308"}`, fontWeight: 900, cursor: "pointer" }}>
                    <AutoTrans text={t("unlock", userLang)} lang={userLang} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "admin" && isAdmin && <AdminPanel userLang={userLang} onClose={() => go('home')} />}
      </main>

      <nav className="nav">
        {[
          { id: "home", label: t("home", userLang), icon: <Icons.Home color={level === "B2" ? "#14B8A6" : "#2563EB"} /> }, 
          { id: "lesen", label: t("lesen", userLang), icon: <Icons.Book color={level === "B2" ? "#0D9488" : "#22C55E"} /> }, 
          { id: "horen", label: t("horen", userLang), icon: <Icons.Headphones color={level === "B2" ? "#F59E0B" : "#8B5CF6"} /> }, 
          { id: "schreiben", label: t("schreiben", userLang), icon: <Icons.Edit color={level === "B2" ? "#6366F1" : "#F59E0B"} /> }, 
          { id: "sprechen", label: t("sprechen", userLang), icon: <Icons.Mic color={level === "B2" ? "#F43F5E" : "#EF4444"} /> }, 
          { id: "pruefung", label: t("pruefung", userLang), icon: <Icons.Graduation color={level === "B2" ? "#0D9488" : "#EAB308"} /> }
        ].map((item) => (
          <button key={item.id} className={view === item.id ? "on" : ""} onClick={() => go(item.id)} style={view === item.id ? { color: level === "B2" ? B2_PRIMARY : "#DD0000", background: `${level === "B2" ? B2_PRIMARY : "#DD0000"}15` } : {}}><span className="ic">{item.icon}</span><span>{item.label}</span></button>
        ))}
      </nav>

      {/* Modals */}
      {selectedExamGroup && (
        <div className="overlay" onClick={() => setSelectedExamGroup(null)} style={{ direction: 'rtl' }}>
          <div className="sheet" onClick={e => e.stopPropagation()} style={{ padding: 0, overflow: 'hidden', borderRadius: 24, border: 'none' }}>
            <div style={{ background: level === "B2" ? '#F0FDFA' : '#f0fdf4', padding: '24px', borderBottom: `1px solid ${level === "B2" ? "#CCFBF1" : "#dcfce7"}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div><h3 style={{ margin: 0, fontSize: "1.3em", fontWeight: 900, color: level === "B2" ? '#0F766E' : '#1e293b' }}>{t("choose_version", userLang)}</h3><p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.9em' }}>{selectedExamGroup.length} {t("versions", userLang)}</p></div>
              <div style={{ background: level === "B2" ? B2_PRIMARY : "#10b981", color: 'white', width: 40, height: 40, borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2em' }}><Icons.Copy color="#FFF" /></div>
            </div>
            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              {selectedExamGroup.map((ex, idx) => {
                const isMod = ex.desc?.includes('معدل') || ex.id?.includes('-mod') || ex.title?.includes('المعدل');
                const cleanTitle = ex.title.replace(' المعدل', '').replace(' (معدل)', '');
                const isLocalFree = (B2_EXAMS || []).some(le => le.id === ex.id) || FREE_MODIFIED_LESSONS.some(fm => fm.id === ex.id);
                const isLocked = !isLocalFree && !isPaid && !trialActive;
                return (
                  <button key={ex.id || idx} onClick={() => { if (isLocked) setLockedModal(true); else { setExam(ex); setSelectedExamGroup(null); setTimeLeft(90*60); } }} style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", background: '#fff', border: `1px solid ${level === "B2" ? "#CCFBF1" : "#e2e8f0"}`, borderRadius: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ background: level === "B2" ? '#F0FDFA' : '#dcfce7', color: level === "B2" ? '#0F766E' : '#15803d', width: 32, height: 32, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900 }}>{idx + 1}</span>
                      <span className="de" style={{ fontWeight: 800, fontSize: '1.1em', color: '#1e293b' }}>{cleanTitle} {isMod && <AutoTrans text="المعدل" lang={userLang} />}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ background: '#f1f5f9', color: '#64748b', padding: '4px 10px', borderRadius: 8, fontSize: '0.8em', fontWeight: 900 }}>{level}</span>{isLocked && <span style={{ color: '#F59E0B' }}><Icons.Lock color="#F59E0B" /></span>}</div>
                  </button>
                );
              })}
            </div>
            <div style={{ padding: '0 20px 20px' }}><button onClick={() => setSelectedExamGroup(null)} style={{ width: '100%', padding: 16, borderRadius: 16, border: `1px solid ${level === "B2" ? "#CCFBF1" : "#e2e8f0"}`, background: '#fff', color: level === "B2" ? B2_PRIMARY : '#64748b', fontWeight: 900, fontSize: '1em' }}>{t("close", userLang)}</button></div>
          </div>
        </div>
      )}

      {selectedCountry && (
        <div className="overlay" onClick={() => setSelectedCountry(null)} style={{ direction: 'rtl' }}>
          <div className="sheet" onClick={e => e.stopPropagation()} style={{ padding: 0, overflow: 'hidden', borderRadius: 24, border: 'none' }}>
            <div style={{ background: level === "B2" ? '#F0FDFA' : '#e0f2fe', padding: '24px', borderBottom: `1px solid ${level === "B2" ? "#CCFBF1" : "#bae6fd"}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.3em", fontWeight: 900, color: level === "B2" ? '#134E4A' : '#0c4a6e', display: "flex", alignItems: "center", gap: 8 }}>{selectedCountry.flag} <AutoTrans text={selectedCountry.ar} lang={userLang} /></h3>
                <p style={{ margin: '4px 0 0', color: level === "B2" ? '#0F766E' : '#0369a1', fontSize: '0.9em' }}><AutoTrans text="مراكز الامتحانات المتاحة" lang={userLang} /></p>
              </div>
              <div style={{ background: level === "B2" ? B2_PRIMARY : '#0ea5e9', color: 'white', width: 40, height: 40, borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2em' }}>
                <Icons.Target color="#FFF" />
              </div>
            </div>
            
            <div style={{ padding: 20 }}>
              <div style={{ background: '#f8fafc', padding: 16, borderRadius: 12, marginBottom: 12, border: `1px solid ${level === "B2" ? "#CCFBF1" : "#e2e8f0"}` }}>
                <div style={{ fontWeight: 900, color: '#0f172a', marginBottom: 8 }}><AutoTrans text="المدن" lang={userLang} />:</div>
                <div style={{ color: '#334155', fontSize: '0.95em' }}>{selectedCountry.cities}</div>
              </div>
              <div style={{ background: '#f8fafc', padding: 16, borderRadius: 12, border: `1px solid ${level === "B2" ? "#CCFBF1" : "#e2e8f0"}` }}>
                <div style={{ fontWeight: 900, color: '#0f172a', marginBottom: 8 }}><AutoTrans text="المعاهد والمراكز" lang={userLang} />:</div>
                <div style={{ color: '#334155', fontSize: '0.95em', lineHeight: 1.6 }}>{selectedCountry.institutes}</div>
              </div>
            </div>

            <div style={{ padding: '0 20px 20px' }}>
              <button onClick={() => setSelectedCountry(null)} style={{ width: '100%', padding: 16, borderRadius: 16, border: `1px solid ${level === "B2" ? "#CCFBF1" : "#e2e8f0"}`, background: '#fff', color: level === "B2" ? B2_PRIMARY : '#64748b', fontWeight: 900, fontSize: '1em' }}>
                <AutoTrans text="إغلاق" lang={userLang} />
              </button>
            </div>
          </div>
        </div>
      )}

      {lockedModal && (
        <div className="overlay" onClick={() => setLockedModal(false)} style={{ direction: 'rtl', zIndex: 9999 }}>
          <div className="sheet" onClick={e => e.stopPropagation()} style={{ textAlign: "center", padding: "40px 24px", borderRadius: 28 }}>
            <div style={{ width: 80, height: 80, background: level === "B2" ? "rgba(13, 148, 136, 0.1)" : "rgba(34, 197, 94, 0.1)", color: themeColor, borderRadius: 24, display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto 24px" }}>
               <Icons.Crown color={themeColor} />
            </div>
            <h2 style={{ fontSize: "1.6em", fontWeight: 900, margin: "0 0 12px", color: "var(--text)" }}>{t("locked_title", userLang)}</h2>
            <p style={{ color: "var(--muted)", margin: "0 0 32px", fontSize: "1.05em" }}>{t("locked_sub", userLang)}</p>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: 14, borderRadius: 12, marginBottom: 24, color: themeColor, fontWeight: 900, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
               <Icons.Crown color={themeColor} size={18}/> {t("requires_pro", userLang)}
            </div>
            <button onClick={() => { setLockedModal(false); wa(t("wa_upgrade_msg", userLang)); }} style={{ width: "100%", padding: "16px", borderRadius: 16, background: themeColor, color: "#FFF", fontWeight: 900, fontSize: "1.1em", border: "none", display: "flex", justifyContent: "center", alignItems: "center", gap: 8, boxShadow: `0 8px 20px ${themeColor}50`, marginBottom: 16 }}>
              <Icons.Crown color="#FFF" /> {t("upgrade_now", userLang)}
            </button>
            <button onClick={() => setLockedModal(false)} style={{ width: "100%", padding: "16px", borderRadius: 16, background: "transparent", color: "var(--muted)", fontWeight: 900, fontSize: "1em", border: "1px solid var(--line)", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {t("not_now", userLang)}
            </button>
          </div>
        </div>
      )}

      {settings && (
        <div className="overlay" onClick={() => setSettings(false)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}><strong style={{fontSize:"1.3em", color: level === "B2" ? B2_PRIMARY : 'var(--text)'}}>{t("settings", userLang)}</strong><button className="btnI" onClick={() => setSettings(false)}><Icons.X color="var(--text)" /></button></div>
            <div style={{ marginBottom: 20 }}>
              <span style={{fontWeight:900, fontSize:"1.1em", display: "block", marginBottom: 12}}>{t("change_lang", userLang)}</span>
              <div className="lang-grid" style={{ maxHeight: 200 }}>{LANGS.map(lang => <button key={lang.c} onClick={() => { setUserLang(lang.c); localStorage.setItem("ep_lang", lang.c); }} className={`lang-btn ${userLang === lang.c ? "on" : ""}`} style={{ padding: "10px", borderColor: userLang === lang.c && level === "B2" ? B2_PRIMARY : 'var(--line)', color: userLang === lang.c && level === "B2" ? B2_PRIMARY : 'var(--text)' }}><span style={{ fontSize: "1.2em" }}>{lang.f}</span><span style={{ fontSize: "0.85em" }}>{lang.n}</span></button>)}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}><span style={{fontWeight:900, fontSize:"1.1em"}}>{t("text_size", userLang)}</span><div style={{ display: "flex", gap: 10, alignItems: "center" }}><button className="btnI" onClick={() => setFs(Math.max(80, fs - 10))}>−</button><span style={{ minWidth: 48, textAlign: "center", fontWeight: 900, fontSize:"1.1em" }}>{fs}%</span><button className="btnI" onClick={() => setFs(Math.min(150, fs + 10))}>+</button></div></div>
            <button className="btn ghost" onClick={() => setFs(100)} style={{ padding: 14 }}>{t("reset_size", userLang)}</button>
            <div style={{ marginTop: 20, textAlign: "center" }}><button onClick={logout} className="btn ghost" style={{ color: level === "B2" ? B2_PRIMARY : 'var(--red)', borderColor: level === "B2" ? B2_PRIMARY : 'var(--red)' }}>{t("logout", userLang)}</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

const rootEl = document.getElementById("root");
if (rootEl) ReactDOM.createRoot(rootEl).render(<App />);
