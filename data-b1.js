// ==========================================
// data-b1.js — الجزء 1 من 3
// الإعدادات + الترجمات + دروس Alex
// ==========================================

var WA = "212600000000";
var wa = (t) => window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(t), "_blank");

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
  ma: { welcome:"مرحبا بيك", modified:" (معدلة)", choose_lang:"ختار اللغة ديالك", home:"الرئيسية", lesen:"قراية", horen:"سماع", schreiben:"كتابة", sprechen:"هضرة", pruefung:"امتحان", exam_mode:"نمط الامتحان", practice_mode:"نمط التدريب", banner_title:"تدرب على الامتحان الحقيقي واذهب للحصول عليه!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"الكود الفريد الخاص بك", login:"تسجيل الدخول", guest:"دخول كزائر", support:"الدعم الفني", start_now:"ابدأ الآن", listen_lessons:"دروس الاستماع", search_placeholder:"...بحث عن موضوع", listen_title:"دروس الاستماع", listen_desc:"هنا كتلقى جميع دروس الهورن. اضغط على الزر لبدء الاستماع وحل الأسئلة.", gap_num:"الفراغ", choose_word_gap:"اختر الكلمة للفراغ", story_memo:"قصة للحفظ", check_btn:"تصحيح", next_btn:"التالي", back_btn:"رجوع", reset_btn:"إعادة", coming_soon:"قريباً...", settings:"الإعدادات", change_lang:"تغيير اللغة / Language", text_size:"حجم النص", reset_size:"إعادة الحجم الأصلي", logout:"خروج", whatsapp:"واتساب", lang_note:"اللغة التي تختارها ستبقى معك طوال التطبيق", or:"أو", correct:"✓ صحيح", wrong:"✗ غلط", no_answer:"⚠️ لم تجب", the_answer:"الجواب", b1_level:"المستوى B1", b2_level:"المستوى B2", side_menu:"القائمة الجانبية", ai_correct:"✨ تصحيح AI", trans_text:"ترجمة النص", trans_task:"ترجمة المهمة", show:"إظهار", hide:"إخفاء", words_count:"كلمة", locked:"مقفول", upgrade_pro:"ترقية إلى Pro", trial_active:"تجربة مجانية نشطة", trial_ended:"انتهت التجربة", wa_upgrade_msg:"سلام، بغيت نرقّي حسابي لـ Pro باش نحل جميع الدروس", admin_panel:"لوحة التحكم", notifications:"الإشعارات", block:"حظر", unblock:"إلغاء الحظر", mark_paid:"تفعيل الدفع", mark_unpaid:"إلغاء الدفع", save:"حفظ", cancel:"إلغاء", users:"المستخدمين", name:"الاسم", code:"الكود", status:"الحالة", paid:"مخلص", blocked:"محظور", actions:"إجراءات", send_notification:"إرسال إشعار", title_ar:"العنوان", message_ar:"الرسالة", no_notifications:"لا توجد إشعارات حالياً" },
  ar: { welcome:"مرحباً بك", modified:" (معدلة)", choose_lang:"اختر لغتك", home:"الرئيسية", lesen:"قراءة", horen:"استماع", schreiben:"كتابة", sprechen:"تحدث", pruefung:"امتحان", exam_mode:"نمط الامتحان", practice_mode:"نمط التدريب", banner_title:"تدرب على الامتحان الحقيقي واذهب للحصول عليه!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"الكود الفريد الخاص بك", login:"تسجيل الدخول", guest:"دخول كزائر", support:"الدعم الفني", start_now:"ابدأ الآن", listen_lessons:"دروس الاستماع", search_placeholder:"...بحث عن موضوع", listen_title:"دروس الاستماع", listen_desc:"هنا تجد جميع دروس الاستماع. اضغط على الزر لبدء الاستماع وحل الأسئلة.", gap_num:"الفراغ", choose_word_gap:"اختر الكلمة للفراغ", story_memo:"قصة للحفظ", check_btn:"تصحيح", next_btn:"التالي", back_btn:"رجوع", reset_btn:"إعادة", coming_soon:"قريباً...", settings:"الإعدادات", change_lang:"تغيير اللغة", text_size:"حجم النص", reset_size:"إعادة الحجم الأصلي", logout:"خروج", whatsapp:"واتساب", lang_note:"اللغة التي تختارها ستبقى معك طوال التطبيق", or:"أو", correct:"✓ صحيح", wrong:"✗ خطأ", no_answer:"⚠️ لم تجب", the_answer:"الجواب", b1_level:"المستوى B1", b2_level:"المستوى B2", side_menu:"القائمة الجانبية", ai_correct:"✨ تصحيح AI", trans_text:"ترجمة النص", trans_task:"ترجمة المهمة", show:"إظهار", hide:"إخفاء", words_count:"كلمة", locked:"مقفول", upgrade_pro:"ترقية إلى Pro", trial_active:"تجربة مجانية نشطة", trial_ended:"انتهت التجربة", wa_upgrade_msg:"مرحباً، أريد ترقية حسابي إلى Pro لفتح جميع الدروس", admin_panel:"لوحة التحكم", notifications:"الإشعارات", block:"حظر", unblock:"إلغاء الحظر", mark_paid:"تفعيل الدفع", mark_unpaid:"إلغاء الدفع", save:"حفظ", cancel:"إلغاء", users:"المستخدمون", name:"الاسم", code:"الكود", status:"الحالة", paid:"مدفوع", blocked:"محظور", actions:"إجراءات", send_notification:"إرسال إشعار", title_ar:"العنوان", message_ar:"الرسالة", no_notifications:"لا توجد إشعارات حالياً" },
  en: { welcome:"Welcome", modified:" (Modified)", choose_lang:"Choose language", home:"Home", lesen:"Reading", horen:"Listening", schreiben:"Writing", sprechen:"Speaking", pruefung:"Exam", exam_mode:"Exam Mode", practice_mode:"Practice Mode", banner_title:"Train for the real exam and get it!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Your Unique ID", login:"Login", guest:"Login as Guest", support:"Technical Support", start_now:"Start Now", listen_lessons:"Listening Lessons", search_placeholder:"Search for a topic...", listen_title:"Listening Lessons", listen_desc:"Here you will find all listening lessons. Click the button to start listening and solving questions.", gap_num:"Gap", choose_word_gap:"Choose word for gap", story_memo:"Story to memorize", check_btn:"Check", next_btn:"Next", back_btn:"Back", reset_btn:"Reset", coming_soon:"Coming soon...", settings:"Settings", change_lang:"Change Language", text_size:"Text Size", reset_size:"Reset to original size", logout:"Logout", whatsapp:"WhatsApp", lang_note:"The language you choose will remain with you throughout the app", or:"or", correct:"✓ Correct", wrong:"✗ Wrong", no_answer:"⚠️ No answer", the_answer:"Answer", b1_level:"Level B1", b2_level:"Level B2", side_menu:"Side Menu", ai_correct:"✨ AI Check", trans_text:"Translate Text", trans_task:"Translate Task", show:"Show", hide:"Hide", words_count:"Words", locked:"Locked", upgrade_pro:"Upgrade to Pro", trial_active:"Free Trial Active", trial_ended:"Trial Ended", wa_upgrade_msg:"Hello, I want to upgrade to Pro to unlock all lessons", admin_panel:"Admin Panel", notifications:"Notifications", block:"Block", unblock:"Unblock", mark_paid:"Mark as Paid", mark_unpaid:"Mark as Unpaid", save:"Save", cancel:"Cancel", users:"Users", name:"Name", code:"Code", status:"Status", paid:"Paid", blocked:"Blocked", actions:"Actions", send_notification:"Send Notification", title_ar:"Title", message_ar:"Message", no_notifications:"No notifications yet" },
  fr: { welcome:"Bienvenue", modified:" (Modifié)", choose_lang:"Choisissez la langue", home:"Accueil", lesen:"Lecture", horen:"Écoute", schreiben:"Écriture", sprechen:"Expression orale", pruefung:"Examen", exam_mode:"Mode Examen", practice_mode:"Mode Entraînement", banner_title:"Entraînez-vous pour le vrai examen et obtenez-le !", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Votre identifiant unique", login:"Se connecter", guest:"Entrer en tant qu'invité", support:"Support Technique", start_now:"Commencer", listen_lessons:"Leçons d'écoute", search_placeholder:"Rechercher un sujet...", listen_title:"Leçons d'écoute", listen_desc:"Ici vous trouverez toutes les leçons d'écoute. Cliquez sur le bouton pour commencer à écouter et à répondre aux questions.", gap_num:"Espace", choose_word_gap:"Choisir le mot pour l'espace", story_memo:"Histoire à mémoriser", check_btn:"Vérifier", next_btn:"Suivant", back_btn:"Retour", reset_btn:"Réinitialiser", coming_soon:"Bientôt...", settings:"Paramètres", change_lang:"Changer de langue", text_size:"Taille du texte", reset_size:"Rétablir la taille d'origine", logout:"Déconnexion", whatsapp:"WhatsApp", lang_note:"La langue que vous choisissez restera avec vous tout au long de l'application", or:"ou", correct:"✓ Correct", wrong:"✗ Faux", no_answer:"⚠️ Sans réponse", the_answer:"Réponse", b1_level:"Niveau B1", b2_level:"Niveau B2", side_menu:"Menu Latéral", ai_correct:"✨ Correction IA", trans_text:"Traduire le texte", trans_task:"Traduire la tâche", show:"Afficher", hide:"Masquer", words_count:"Mots", locked:"Verrouillé", upgrade_pro:"Passer à Pro", trial_active:"Essai Gratuit Actif", trial_ended:"Essai Terminé", wa_upgrade_msg:"Bonjour, je souhaite passer à Pro pour débloquer toutes les leçons", admin_panel:"Panneau d'Admin", notifications:"Notifications", block:"Bloquer", unblock:"Débloquer", mark_paid:"Marquer Payé", mark_unpaid:"Marquer Non Payé", save:"Enregistrer", cancel:"Annuler", users:"Utilisateurs", name:"Nom", code:"Code", status:"Statut", paid:"Payé", blocked:"Bloqué", actions:"Actions", send_notification:"Envoyer Notification", title_ar:"Titre", message_ar:"Message", no_notifications:"Aucune notification pour le moment" },
  id: { welcome:"Selamat datang", modified:" (Diubah)", choose_lang:"Pilih bahasa", home:"Beranda", lesen:"Membaca", horen:"Mendengarkan", schreiben:"Menulis", sprechen:"Berbicara", pruefung:"Ujian", exam_mode:"Mode Ujian", practice_mode:"Mode Latihan", banner_title:"Berlatih untuk ujian nyata dan dapatkan!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"ID Unik Anda", login:"Masuk", guest:"Masuk sebagai Tamu", support:"Dukungan Teknis", start_now:"Mulai Sekarang", listen_lessons:"Pelajaran Mendengarkan", search_placeholder:"Cari topik...", listen_title:"Pelajaran Mendengarkan", listen_desc:"Di sini Anda akan menemukan semua pelajaran mendengarkan. Klik tombol untuk mulai mendengarkan dan menjawab pertanyaan.", gap_num:"Celah", choose_word_gap:"Pilih kata untuk celah", story_memo:"Cerita untuk dihafal", check_btn:"Periksa", next_btn:"Selanjutnya", back_btn:"Kembali", reset_btn:"Atur Ulang", coming_soon:"Segera hadir...", settings:"Pengaturan", change_lang:"Ganti Bahasa", text_size:"Ukuran Teks", reset_size:"Kembalikan ke ukuran asli", logout:"Keluar", whatsapp:"WhatsApp", lang_note:"Bahasa yang Anda pilih akan tetap bersama Anda di seluruh aplikasi", or:"atau", correct:"✓ Benar", wrong:"✗ Salah", no_answer:"⚠️ Tidak ada jawaban", the_answer:"Jawaban", b1_level:"Tingkat B1", b2_level:"Tingkat B2", side_menu:"Menu Samping", ai_correct:"✨ Pemeriksaan AI", trans_text:"Terjemahkan Teks", trans_task:"Terjemahkan Tugas", show:"Tampilkan", hide:"Sembunyikan", words_count:"Kata", locked:"Terkunci", upgrade_pro:"Tingkatkan ke Pro", trial_active:"Uji Coba Gratis Aktif", trial_ended:"Uji Coba Berakhir", wa_upgrade_msg:"Halo, saya ingin meningkatkan ke Pro untuk membuka semua pelajaran", admin_panel:"Panel Admin", notifications:"Notifikasi", block:"Blokir", unblock:"Buka Blokir", mark_paid:"Tandai Lunas", mark_unpaid:"Tandai Belum Lunas", save:"Simpan", cancel:"Batal", users:"Pengguna", name:"Nama", code:"Kode", status:"Status", paid:"Lunas", blocked:"Diblokir", actions:"Tindakan", send_notification:"Kirim Notifikasi", title_ar:"Judul", message_ar:"Pesan", no_notifications:"Belum ada notifikasi" },
  tl: { welcome:"Maligayang pagdating", modified:" (Binago)", choose_lang:"Pumili ng wika", home:"Home", lesen:"Pagbasa", horen:"Pakikinig", schreiben:"Pagsusulat", sprechen:"Pagsasalita", pruefung:"Pagsusulit", exam_mode:"Mode ng Pagsusulit", practice_mode:"Mode ng Pagsasanay", banner_title:"Magsanay para sa tunay na pagsusulit at kunin ito!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Ang Iyong Natatanging ID", login:"Mag-login", guest:"Mag-login bilang Bisita", support:"Teknikal na Suporta", start_now:"Simulan Ngayon", listen_lessons:"Mga Aralin sa Pakikinig", search_placeholder:"Maghanap ng paksa...", listen_title:"Mga Aralin sa Pakikinig", listen_desc:"Dito mo makikita ang lahat ng aralin sa pakikinig. I-click ang button upang magsimulang makinig at sumagot ng mga tanong.", gap_num:"Puwang", choose_word_gap:"Pumili ng salita para sa puwang", story_memo:"Kuwento na dapat tandaan", check_btn:"Suriin", next_btn:"Susunod", back_btn:"Bumalik", reset_btn:"I-reset", coming_soon:"Malapit na...", settings:"Mga Setting", change_lang:"Palitan ang Wika", text_size:"Laki ng Teksto", reset_size:"Ibalik sa orihinal na laki", logout:"Mag-logout", whatsapp:"WhatsApp", lang_note:"Ang wikang pipiliin mo ay mananatili sa iyo sa buong app", or:"o", correct:"✓ Tama", wrong:"✗ Mali", no_answer:"⚠️ Walang sagot", the_answer:"Sagot", b1_level:"Antas B1", b2_level:"Antas B2", side_menu:"Side Menu", ai_correct:"✨ AI Check", trans_text:"Isalin ang Teksto", trans_task:"Isalin ang Gawain", show:"Ipakita", hide:"Itago", words_count:"Salita", locked:"Naka-lock", upgrade_pro:"Mag-upgrade sa Pro", trial_active:"Aktibong Libreng Pagsubok", trial_ended:"Tapos na ang Pagsubok", wa_upgrade_msg:"Kumusta, gusto kong mag-upgrade sa Pro para ma-unlock ang lahat ng aralin", admin_panel:"Admin Panel", notifications:"Mga Abiso", block:"I-block", unblock:"I-unblock", mark_paid:"Markahan bilang Bayad", mark_unpaid:"Markahan bilang Hindi Bayad", save:"I-save", cancel:"Kanselahin", users:"Mga Gumagamit", name:"Pangalan", code:"Code", status:"Katayuan", paid:"Bayad", blocked:"Naka-block", actions:"Mga Aksyon", send_notification:"Magpadala ng Abiso", title_ar:"Pamagat", message_ar:"Mensahe", no_notifications:"Wala pang abiso" },
  fa: { welcome:"خوش آمدید", modified:" (اصلاح شده)", choose_lang:"انتخاب زبان", home:"خانه", lesen:"خواندن", horen:"شنیدن", schreiben:"نوشتن", sprechen:"صحبت کردن", pruefung:"آزمون", exam_mode:"حالت آزمون", practice_mode:"حالت تمرین", banner_title:"برای آزمون واقعی تمرین کنید و آن را دریافت کنید!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"شناسه منحصر به فرد شما", login:"ورود", guest:"ورود به عنوان مهمان", support:"پشتیبانی فنی", start_now:"همین حالا شروع کنید", listen_lessons:"دروس شنیداری", search_placeholder:"جستجوی موضوع...", listen_title:"دروس شنیداری", listen_desc:"در اینجا تمام دروس شنیداری را پیدا خواهید کرد. برای شروع گوش دادن و پاسخ به سوالات روی دکمه کلیک کنید.", gap_num:"جای خالی", choose_word_gap:"کلمه را برای جای خالی انتخاب کنید", story_memo:"داستان برای حفظ کردن", check_btn:"بررسی", next_btn:"بعدی", back_btn:"بازگشت", reset_btn:"بازنشانی", coming_soon:"به زودی...", settings:"تنظیمات", change_lang:"تغییر زبان", text_size:"اندازه متن", reset_size:"بازگشت به اندازه اصلی", logout:"خروج", whatsapp:"واتساپ", lang_note:"زبانی که انتخاب می کنید در سراسر برنامه با شما خواهد بود", or:"یا", correct:"✓ درست", wrong:"✗ نادرست", no_answer:"⚠️ بدون پاسخ", the_answer:"پاسخ", b1_level:"سطح B1", b2_level:"سطح B2", side_menu:"منوی کناری", ai_correct:"✨ بررسی هوش مصنوعی", trans_text:"ترجمه متن", trans_task:"ترجمه وظیفه", show:"نمایش", hide:"پنهان کردن", words_count:"کلمه", locked:"قفل شده", upgrade_pro:"ارتقا به پرو", trial_active:"دوره آزمایشی رایگان فعال", trial_ended:"دوره آزمایشی به پایان رسید", wa_upgrade_msg:"سلام، می‌خواهم به پرو ارتقا پیدا کنم تا همه درس‌ها را باز کنم", admin_panel:"پنل مدیریت", notifications:"اعلان‌ها", block:"مسدود کردن", unblock:"رفع مسدودی", mark_paid:"علامت‌گذاری به عنوان پرداخت شده", mark_unpaid:"علامت‌گذاری به عنوان پرداخت نشده", save:"ذخیره", cancel:"لغو", users:"کاربران", name:"نام", code:"کد", status:"وضعیت", paid:"پرداخت شده", blocked:"مسدود شده", actions:"عملیات", send_notification:"ارسال اعلان", title_ar:"عنوان", message_ar:"پیام", no_notifications:"هنوز اعلانی وجود ندارد" },
  sw: { welcome:"Karibu", modified:" (Imebadilishwa)", choose_lang:"Chagua lugha", home:"Nyumbani", lesen:"Kusoma", horen:"Kusikiliza", schreiben:"Kuandika", sprechen:"Kuzungumza", pruefung:"Mtihani", exam_mode:"Hali ya Mtihani", practice_mode:"Hali ya Mazoezi", banner_title:"Jizatiti kwa mtihani wa kweli na uupate!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Kitambulisho Chako cha Kipekee", login:"Ingia", guest:"Ingia kama Mgeni", support:"Msaada wa Kiufundi", start_now:"Anza Sasa", listen_lessons:"Masomo ya Kusikiliza", search_placeholder:"Tafuta mada...", listen_title:"Masomo ya Kusikiliza", listen_desc:"Hapa utapata masomo yote ya kusikiliza. Bofya kitufe ili kuanza kusikiliza na kujibu maswali.", gap_num:"Pengo", choose_word_gap:"Chagua neno kwa pengo", story_memo:"Hadithi ya kukumbuka", check_btn:"Angalia", next_btn:"Inayofuata", back_btn:"Rudi", reset_btn:"Weka upya", coming_soon:"Inakuja hivi karibuni...", settings:"Mipangilio", change_lang:"Badilisha Lugha", text_size:"Ukubwa wa Maandishi", reset_size:"Rudisha kwa ukubwa wa awali", logout:"Toka", whatsapp:"WhatsApp", lang_note:"Lugha unayochagua itabaki nawe katika programu yote", or:"au", correct:"✓ Sahihi", wrong:"✗ Makosa", no_answer:"⚠️ Hakuna jibu", the_answer:"Jibu", b1_level:"Kiwango B1", b2_level:"Kiwango B2", side_menu:"Menyu ya Pembeni", ai_correct:"✨ Ukaguzi wa AI", trans_text:"Tafsiri Maandishi", trans_task:"Tafsiri Kazi", show:"Onyesha", hide:"Ficha", words_count:"Neno", locked:"Imefungwa", upgrade_pro:"Pandisha hadhi hadi Pro", trial_active:"Jaribio la Bure Linatumika", trial_ended:"Jaribio Limeisha", wa_upgrade_msg:"Habari, nataka kupandisha hadhi hadi Pro ili kufungua masomo yote", admin_panel:"Paneli ya Msimamizi", notifications:"Arifa", block:"Zuia", unblock:"Fungua", mark_paid:"Weka alama kama Imelipwa", mark_unpaid:"Weka alama kama Haijalipwa", save:"Hifadhi", cancel:"Ghairi", users:"Watumiaji", name:"Jina", code:"Msimbo", status:"Hali", paid:"Imelipwa", blocked:"Imezuiwa", actions:"Vitendo", send_notification:"Tuma Arifa", title_ar:"Kichwa", message_ar:"Ujumbe", no_notifications:"Hakuna arifa bado" },
  uz: { welcome:"Xush kelibsiz", modified:" (O'zgartirilgan)", choose_lang:"Tilni tanlang", home:"Bosh sahifa", lesen:"O'qish", horen:"Tinglash", schreiben:"Yozish", sprechen:"Gapirish", pruefung:"Imtihon", exam_mode:"Imtihon rejimi", practice_mode:"Mashq rejimi", banner_title:"Haqiqiy imtihonga tayyorlaning va uni oling!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Sizning noyob ID-ingiz", login:"Kirish", guest:"Mehmon sifatida kirish", support:"Texnik yordam", start_now:"Hoziroq boshlang", listen_lessons:"Tinglash darslari", search_placeholder:"Mavzu qidirish...", listen_title:"Tinglash darslari", listen_desc:"Bu yerda barcha tinglash darslarini topasiz. Tinglashni boshlash va savollarga javob berish uchun tugmani bosing.", gap_num:"Bo'shliq", choose_word_gap:"Bo'shliq uchun so'zni tanlang", story_memo:"Yodlash uchun hikoya", check_btn:"Tekshirish", next_btn:"Keyingi", back_btn:"Orqaga", reset_btn:"Qayta tiklash", coming_soon:"Tez orada...", settings:"Sozlamalar", change_lang:"Tilni o'zgartirish", text_size:"Matn hajmi", reset_size:"Asl hajmga qaytarish", logout:"Chiqish", whatsapp:"WhatsApp", lang_note:"Siz tanlagan til butun ilova davomida siz bilan qoladi", or:"yoki", correct:"✓ To'g'ri", wrong:"✗ Noto'g'ri", no_answer:"⚠️ Javob yo'q", the_answer:"Javob", b1_level:"B1 darajasi", b2_level:"B2 darajasi", side_menu:"Yon menyu", ai_correct:"✨ AI tekshiruvi", trans_text:"Matnni tarjima qilish", trans_task:"Vazifani tarjima qilish", show:"Ko'rsatish", hide:"Yashirish", words_count:"So'z", locked:"Qulflangan", upgrade_pro:"Pro-ga o'tish", trial_active:"Bepul sinov faol", trial_ended:"Sinov tugadi", wa_upgrade_msg:"Salom, barcha darslarni ochish uchun Pro-ga o'tmoqchiman", admin_panel:"Admin paneli", notifications:"Bildirishnomalar", block:"Bloklash", unblock:"Blokdan chiqarish", mark_paid:"To'langan deb belgilash", mark_unpaid:"To'lanmagan deb belgilash", save:"Saqlash", cancel:"Bekor qilish", users:"Foydalanuvchilar", name:"Ism", code:"Kod", status:"Holat", paid:"To'langan", blocked:"Bloklangan", actions:"Amallar", send_notification:"Bildirishnoma yuborish", title_ar:"Sarlavha", message_ar:"Xabar", no_notifications:"Hozircha bildirishnomalar yo'q" },
  ne: { welcome:"स्वागत छ", modified:" (परिमार्जित)", choose_lang:"भाषा छान्नुहोस्", home:"गृहपृष्ठ", lesen:"पढ्ने", horen:"सुन्ने", schreiben:"लेख्ने", sprechen:"बोल्ने", pruefung:"परीक्षा", exam_mode:"परीक्षा मोड", practice_mode:"अभ्यास मोड", banner_title:"वास्तविक परीक्षाको लागि अभ्यास गर्नुहोस् र प्राप्त गर्नुहोस्!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"तपाईंको अद्वितीय आईडी", login:"लगइन", guest:"अतिथिको रूपमा प्रवेश", support:"प्राविधिक सहयोग", start_now:"अहिले सुरु गर्नुहोस्", listen_lessons:"सुन्ने पाठहरू", search_placeholder:"विषय खोज्नुहोस्...", listen_title:"सुन्ने पाठहरू", listen_desc:"यहाँ तपाईंले सबै सुन्ने पाठहरू फेला पार्नुहुनेछ। सुन्न सुरु गर्न र प्रश्नहरूको जवाफ दिन बटन क्लिक गर्नुहोस्।", gap_num:"खाली ठाउँ", choose_word_gap:"खाली ठाउँको लागि शब्द छान्नुहोस्", story_memo:"सम्झनको लागि कथा", check_btn:"जाँच गर्नुहोस्", next_btn:"अर्को", back_btn:"पछाडि", reset_btn:"रिसेट गर्नुहोस्", coming_soon:"चाँडै आउँदैछ...", settings:"सेटिङहरू", change_lang:"भाषा परिवर्तन गर्नुहोस्", text_size:"पाठको आकार", reset_size:"मूल आकारमा फर्काउनुहोस्", logout:"लगआउट", whatsapp:"WhatsApp", lang_note:"तपाईंले छान्नुभएको भाषा सम्पूर्ण एपमा तपाईंसँग रहनेछ", or:"वा", correct:"✓ सही", wrong:"✗ गलत", no_answer:"⚠️ जवाफ छैन", the_answer:"जवाफ", b1_level:"स्तर B1", b2_level:"स्तर B2", side_menu:"साइड मेनु", ai_correct:"✨ AI जाँच", trans_text:"पाठ अनुवाद गर्नुहोस्", trans_task:"कार्य अनुवाद गर्नुहोस्", show:"देखाउनुहोस्", hide:"लुकाउनुहोस्", words_count:"शब्द", locked:"लक गरिएको", upgrade_pro:"प्रो मा अपग्रेड गर्नुहोस्", trial_active:"नि:शुल्क परीक्षण सक्रिय", trial_ended:"परीक्षण समाप्त भयो", wa_upgrade_msg:"नमस्ते, सबै पाठहरू अनलक गर्न म प्रो मा अपग्रेड गर्न चाहन्छु", admin_panel:"एडमिन प्यानल", notifications:"सूचनाहरू", block:"ब्लक गर्नुहोस्", unblock:"अनब्लक गर्नुहोस्", mark_paid:"भुक्तानी भएको चिन्ह लगाउनुहोस्", mark_unpaid:"भुक्तानी नभएको चिन्ह लगाउनुहोस्", save:"सुरक्षित गर्नुहोस्", cancel:"रद्द गर्नुहोस्", users:"प्रयोगकर्ताहरू", name:"नाम", code:"कोड", status:"स्थिति", paid:"भुक्तानी भयो", blocked:"ब्लक गरिएको", actions:"कार्यहरू", send_notification:"सूचना पठाउनुहोस्", title_ar:"शीर्षक", message_ar:"सन्देश", no_notifications:"अहिलेसम्म कुनै सूचना छैन" }
};

var t = (key, lang) => (UI_TEXTS[lang] && UI_TEXTS[lang][key]) || UI_TEXTS.en[key] || key;

var EXAMS = [
  {
    id: "alex-t1", title: "Alex Und Cora", level: "B1", sub: "Teile 1", type: "headings", isPremium: true,
    items: [
      { n: 1, c: "b", de: "Sie haben Mitarbeiter, die gern mit dem Fahrrad zur Arbeit kommen? Warum dann nicht mehr E-Bikes leasen statt nur teure Firmenwagen? Gerade In Städten kommt man mit einem E-Bike schneller und bequemer ans Ziel als mit dem Auto. Und Parkplatzprobleme gibt es auch nicht. Sie fördern zudem die Gesundheit Ihrer Mitarbeiter und schonen die Umwelt, und dabei können Sie noch Steuern sparen. Bei der BikeLaasing GmbH bekommen Sie Angebote, die zu Ihnen passen. Melden Sie sich bei uns an, und wir kümmern uns um den Rest", ar: "تأجير الدراجات الكهربائية: البديل الذكي لسيارات الشركة...", opts: [
        {k:"a", de:"Eltern trotz Kritik mit der Schule zufrieden", ar:"الآباء راضون عن المدرسة رغم الانتقادات"},
        {k:"b", de:"Elektromobilität für Angestellte", ar:"التنقل الكهربائي للموظفين"},
        {k:"c", de:"STÄRKUNG VON BUS UND BAHN", ar:"تعزيز الحافلات والقطارات"},
        {k:"d", de:"Schule und Umweltschutz", ar:"المدرسة وحماية البيئة"},
        {k:"e", de:"Bald keine Firmenwagen mehr?", ar:"هل ستختفي سيارات الشركات قريباً؟"},
        {k:"f", de:"Ticketpreise bei der Bahn", ar:"أسعار التذاكر في السكك الحديدية"},
        {k:"g", de:"Lehrerberuf wird immer attraktiver", ar:"مهنة التدريس تصبح أكثر جاذبية"},
        {k:"h", de:"Engagement für die Natur", ar:"الالتزام بالطبيعة"},
        {k:"i", de:"Preissenkungen bei Bus, Straßenbahn und U-Bahn!", ar:"تخفيضات في أسعار تذاكر الحافلات والترام والمترو!"},
        {k:"j", de:"ZU WENIG LEHRER - STADT REAGIERT", ar:"نقص في المعلمين - المدينة تتخذ إجراءات"}
      ]},
      { n: 2, c: "f", de: "Die Bahn erhöht dieses Jahr die Ticketipreise nicht. Dies soll die Bahn attraktiver machen, sodass mehr Menschen die Züge nutzen. Ob dies wirklich erfolgreich ist, bestreiten manche Experten. Sie argumentieren, dass das Auto in Deutschland zu beliebt ist. Günstiger werden außerdem die Tickets im öffentlichen Nahverkehr, weil dann nicht mehr so viele Berufstätige mit. dem Auto zur Arbeit fahren. Ob diese Maßnahmen wirklich erfolgreich sind, wird sich zeigen. Experten sind sich einig: Ein Schritt in die richtige Richtung!", ar: "يسلط النص الضوء على التوجهات الجديدة في قطاع النقل الألماني...", opts: [
        {k:"a", de:"Eltern trotz Kritik mit der Schule zufrieden", ar:"الآباء راضون عن المدرسة رغم الانتقادات"},
        {k:"b", de:"Elektromobilität für Angestellte", ar:"التنقل الكهربائي للموظفين"},
        {k:"c", de:"STÄRKUNG VON BUS UND BAHN", ar:"تعزيز الحافلات والقطارات"},
        {k:"d", de:"Schule und Umweltschutz", ar:"المدرسة وحماية البيئة"},
        {k:"e", de:"Bald keine Firmenwagen mehr?", ar:"هل ستختفي سيارات الشركات قريباً؟"},
        {k:"f", de:"Ticketpreise bei der Bahn", ar:"أسعار التذاكر في السكك الحديدية"},
        {k:"g", de:"Lehrerberuf wird immer attraktiver", ar:"مهنة التدريس تصبح أكثر جاذبية"},
        {k:"h", de:"Engagement für die Natur", ar:"الالتزام بالطبيعة"},
        {k:"i", de:"Preissenkungen bei Bus, Straßenbahn und U-Bahn!", ar:"تخفيضات في أسعار تذاكر الحافلات والترام والمترو!"},
        {k:"j", de:"ZU WENIG LEHRER - STADT REAGIERT", ar:"نقص في المعلمين - المدينة تتخذ إجراءات"}
      ]},
      { n: 3, c: "a", de: "Vergangeren Monat wurden etwa tausend Eltern von der Stiftung Schulqualität befragt, ob sie mit der Schule ihrer Kinder zufrieden sind. Dabei sagten 80%, dass die Schule gut oder sogar sehr gut sei. Und das, obwohl nur 40% der Eitern denken, dass die Kinder in der Schule auf den Beruf vorbereitet werden. Die Schülerinnen und Schüler sollten mehr über Ökonomie lernen. Außerdem sagten über 60%, dass das Thema Umweltschutz im Unterricht eine größere Rolle spielen sollte.", ar: "أجرت مؤسسة جودة المدرسة استطلاعاً شمل نحو 1000 من الآباء والأمهات...", opts: [
        {k:"a", de:"Eltern trotz Kritik mit der Schule zufrieden", ar:"الآباء راضون عن المدرسة رغم الانتقادات"},
        {k:"b", de:"Elektromobilität für Angestellte", ar:"التنقل الكهربائي للموظفين"},
        {k:"c", de:"STÄRKUNG VON BUS UND BAHN", ar:"تعزيز الحافلات والقطارات"},
        {k:"d", de:"Schule und Umweltschutz", ar:"المدرسة وحماية البيئة"},
        {k:"e", de:"Bald keine Firmenwagen mehr?", ar:"هل ستختفي سيارات الشركات قريباً؟"},
        {k:"f", de:"Ticketpreise bei der Bahn", ar:"أسعار التذاكر في السكك الحديدية"},
        {k:"g", de:"Lehrerberuf wird immer attraktiver", ar:"مهنة التدريس تصبح أكثر جاذبية"},
        {k:"h", de:"Engagement für die Natur", ar:"الالتزام بالطبيعة"},
        {k:"i", de:"Preissenkungen bei Bus, Straßenbahn und U-Bahn!", ar:"تخفيضات في أسعار تذاكر الحافلات والترام والمترو!"},
        {k:"j", de:"ZU WENIG LEHRER - STADT REAGIERT", ar:"نقص في المعلمين - المدينة تتخذ إجراءات"}
      ]},
      { n: 4, c: "j", de: "Berlin. in der Hauptstadt herrscht weiterhin Lehrermangel: Tausende Lehrkräfte fehlen. Mittlerweile unterrichten sogar schon Studie- rende die Schülerinnen und Schüler der Haupt- stadt, weil sich nicht genügend ausgebildete Lehrkräfte finden. Die Unterrichtsqualität lei- det stark. Daher plant der Berliner Senat eine Werbekampagne, um den Lehrerberuf attrakti- ver zu gestalten. Dabei sollen auch Menschen in anderen Berufen angesprochen werden, die denkt man über eine Erhöhung der Gehälter für Lehrerinnen und Lehrer nach.", ar: "تواجه العاصمة الألمانية أزمة تعليمية خانقة...", opts: [
        {k:"a", de:"Eltern trotz Kritik mit der Schule zufrieden", ar:"الآباء راضون عن المدرسة رغم الانتقادات"},
        {k:"b", de:"Elektromobilität für Angestellte", ar:"التنقل الكهربائي للموظفين"},
        {k:"c", de:"STÄRKUNG VON BUS UND BAHN", ar:"تعزيز الحافلات والقطارات"},
        {k:"d", de:"Schule und Umweltschutz", ar:"المدرسة وحماية البيئة"},
        {k:"e", de:"Bald keine Firmenwagen mehr?", ar:"هل ستختفي سيارات الشركات قريباً؟"},
        {k:"f", de:"Ticketpreise bei der Bahn", ar:"أسعار التذاكر في السكك الحديدية"},
        {k:"g", de:"Lehrerberuf wird immer attraktiver", ar:"مهنة التدريس تصبح أكثر جاذبية"},
        {k:"h", de:"Engagement für die Natur", ar:"الالتزام بالطبيعة"},
        {k:"i", de:"Preissenkungen bei Bus, Straßenbahn und U-Bahn!", ar:"تخفيضات في أسعار تذاكر الحافلات والترام والمترو!"},
        {k:"j", de:"ZU WENIG LEHRER - STADT REAGIERT", ar:"نقص في المعلمين - المدينة تتخذ إجراءات"}
      ]},
      { n: 5, c: "h", de: "KaturVerband ist der größte Umweltverband in Deutschland. Er engagiert sich für Umwelt- und Tierschutz. Sie wollen sich auch aktiv gegen Umweltverschmutzung einsetzen? Sie wöllen sich für mehr Naturschutz engagieren? ‚Dann sind Sie bei uns richtig. Wir haben regelmäßige Treffen und führen Informationsveran- staltungen zu verschiedenen aktuellen Themen durch, außerdem gibt es eine monatliche Mit- gliederzeitschrift, Melden Sie sich einfach bei uns.", ar: "تُقدم هذه الجمعية نفسها كأكبر منظمة بيئية في البلاد...", opts: [
        {k:"a", de:"Eltern trotz Kritik mit der Schule zufrieden", ar:"الآباء راضون عن المدرسة رغم الانتقادات"},
        {k:"b", de:"Elektromobilität für Angestellte", ar:"التنقل الكهربائي للموظفين"},
        {k:"c", de:"STÄRKUNG VON BUS UND BAHN", ar:"تعزيز الحافلات والقطارات"},
        {k:"d", de:"Schule und Umweltschutz", ar:"المدرسة وحماية البيئة"},
        {k:"e", de:"Bald keine Firmenwagen mehr?", ar:"هل ستختفي سيارات الشركات قريباً؟"},
        {k:"f", de:"Ticketpreise bei der Bahn", ar:"أسعار التذاكر في السكك الحديدية"},
        {k:"g", de:"Lehrerberuf wird immer attraktiver", ar:"مهنة التدريس تصبح أكثر جاذبية"},
        {k:"h", de:"Engagement für die Natur", ar:"الالتزام بالطبيعة"},
        {k:"i", de:"Preissenkungen bei Bus, Straßenbahn und U-Bahn!", ar:"تخفيضات في أسعار تذاكر الحافلات والترام والمترو!"},
        {k:"j", de:"ZU WENIG LEHRER - STADT REAGIERT", ar:"نقص في المعلمين - المدينة تتخذ إجراءات"}
      ]}
    ]
  },
  {
    id: "alex-t2", title: "Alex Und Cora", level: "B1", sub: "Teile 2", type: "mcq", isPremium: true,
    paragraphs: [
      { de: "Egal ob Hund, Katze oder Maus: Haustiere sind in Deutschland sehr beliebt.", ar: "سواء كان كلباً أو قطة أو فأراً: الحيوانات الأليفة تحظى بشعبية كبيرة في ألمانيا." },
      { de: "In deutschen Haushalten gibt es rund 34 Millionen Haustiere. Besonders Katzen sind sehr beliebt.", ar: "يوجد في الأسر الألمانية حوالي 34 مليون حيوان أليف. القطط تحظى بشعبية خاصة." },
      { de: "Der Hundeexperte Marius Klotz sieht es kritisch: Wichtig sind klare Regeln, die der Hund verstehen kann.", ar: "خبير الكلاب ماريوس كلوتز يرى الأمر بشكل نقدي: المهم هو القواعد الواضحة التي يمكن للكلب فهمها." }
    ],
    items:[
      { n:1, c:"C", q:"Die Hundebesitzerin Elli Herfeld", opts:[ {k:"A", de:"feiert ihren Geburtstag immer mit ihrem Hund."}, {k:"B", de:"sieht ihren Hund als festes Familienmitglied."}, {k:"C", de:"backt ihrem Hund zum Geburtstag einen Kuchen."} ] },
      { n:2, c:"A", q:"In Seniorenheimen gibt es oft Tiere, damit", opts:[ {k:"A", de:"die Senioren etwas tun, was gut für sie ist."}, {k:"B", de:"sie auf die älteren Menschen aufpassen."}, {k:"C", de:"die Senioren mehr spazieren gehen."} ] },
      { n:3, c:"A", q:"Bettina Schröther …", opts:[ {k:"A", de:"verbringt die ganze Freizeit mit ihrem Hund."}, {k:"B", de:"macht mit ihrem Hund regelmäßig Wellnessurlaube."}, {k:"C", de:"lässt ihren Hund in einer Hundeschule erziehen."} ] },
      { n:4, c:"C", q:"Nach Meinung von Hundeexperte Marius Klotz sollte man", opts:[ {k:"A", de:"sich zur Ernährung des Tiers beraten lassen."}, {k:"B", de:"seinen Hund immer gut behandeln."}, {k:"C", de:"die Regeln bei der Hundeerziehung beachten."} ] }
    ]
  },
  {
    id: "alex-t3", title: "Alex Und Cora", level: "B1", sub: "Teile 3", type: "matching", isPremium: true,
    ads: [
      {k:"A", t:"Café Simon", de:"3 × in Passau Ihr Konditor..."}, {k:"B", t:"Tourismusschulen", de:"4190 Bad Leonfelden..."},
      {k:"C", t:"Liederbühne Robinson", de:"KLEINKUNST VOM FEINSTEN..."}, {k:"D", t:"Interkulturelle Arbeit", de:"Berufsbegleitende Fortbildung..."},
      {k:"E", t:"Restaurantcafé Chesa W. Pressl", de:"Schweizer und bayerische Küche..."}, {k:"F", t:"BIZ (Berufsinformationszentrum)", de:"Sie stehen vor beruflichen Entscheidungen..."},
      {k:"G", t:"Abendkurs für Einsteiger", de:"Keine Angst vor neuen Technologien..."}, {k:"H", t:"MortizCafé", de:"Unterer Sand 2 Passau..."},
      {k:"I", t:"Rathausekeller", de:"Originelles Weinkolal..."}, {k:"J", t:"Internationales Studium", de:"Fremdsprachen + Betriebswirtschaft..."},
      {k:"K", t:"USA-Aufenthalt für Schüler", de:"Ein Schuljahr an einer High School..."}, {k:"L", t:"Bachls Kerzenstub’n", de:"TANZEN + ESSEN Live-Musik mit TANZ..."}
    ],
    items:[
      {n:1, c:"H", de:"Sie verbringen gern viele Stunden im Cafe, wollen aber nicht viel Geld ausgeben."},
      {n:2, c:"G", de:"Sie haben gerade den Beruf gewechselt und brauchen für die neue Aufgabe Grundkenntnisse für die Arbeit am Compurter."},
      {n:3, c:"D", de:"Sie arbeiten in einem Krankenhaus und haben dort häufig mit Patienten aus aller Welt zu tun. Sie möchten für diese Arbeit noch besser qualitiziert sein."},
      {n:4, c:"X", de:"Sie möchten gern einen Tanzkurs für Anfänger besuchen. Sie haben nur abends Zeit."},
      {n:5, c:"J", de:"Sie möchten beruflich etwas mit Fremdsprachen machen. Deshalb wollen Sie im Ausland studierem um später vielleicht auch dort zu arbeiten."},
      {n:6, c:"A", de:"Sie wollen mit einem Bekannten einen gemütlichen Nachmittag in der Stadt verbringen. Sie wissen, dass Ihr Bekannter am Liebsten süße Sachen isst."},
      {n:7, c:"I", de:"Ihr Freund aus den USA ist zu Besuch. Er ist Weinkenner und möchte europäische Weine probieren"},
      {n:8, c:"X", de:"In Ihrer Freizeit möchten Sie sich mit anderen Ländern, fremden Kulteren und Traditionen beschäftigen"},
      {n:9, c:"F", de:"Die Tochter Ihrer Freunde hat gerade Abitur gemacht und ist nicht sicher, was sie später machen will. Sie braucht Informationen und Beratung"},
      {n:10, c:"C", de:"Sie möchten mit Freunden in einem Lokal mit Unterhaltungsprogramm essen. Ihre Freunde essen aber weder Fleisch noch Fisch."}
    ]
  },
  {
    id: "alex-sp1", title: "Alex Und Cora", level: "B1", sub: "Sprach 1", type: "sprach1", isPremium: true,
    text: `Schaffhausen, den...\nHallo Isabelle,\nwie geht es dir? Hast du deine Prüfungen geschafft?\nWie du ja weißt, ......\n(1)\n....... ich seit zwei Monaten in einem Altersheim ......\n(2)\n....... der Nähe von Schaffhausen. Die Arbeit in ......\n(3)\n....... Haus gefällt mir gut, obwohl es manchmal auch sehr stressig ist. Besonders schön ist der enge ......\n(4)\n....... zu einigen der alten Menschen. Eine Frau, Anna Ringier, mag ich ......\n(5)\n....... gern. Sie ist schon 96 Jahre alt und sitzt im Rollstuhl, aber sie ist immer fröhlich. Gestern hat sie mir ......\n(6)\n....... ganzes Leben erzählt. Sie hat bis zum 84. Lebensjahr ......\n(7)\n....... gearbeitet. Schon als achtjähriges Mädchen musste sie bei einem Bauern arbeiten, ......\n(8)\n....... ihre Eltern die neunköpfige Familie nicht ernähren konnten. Später arbeitete Anna als Schneiderin.\nNeben ihrer Arbeit hat Anna ......\n(9)\n....... auf eine Sache nie verzichtet: das Bergsteigen! Das war immer ihre große Leidenschaft. Diese Frau ist wirklich sehr beeindruckend!\nAber du ......\n(10)\n....... bestimmt auch viel erlebt. Ich würde mich sehr freuen, wenn du mir bald wieder einmal schreibst!\nHerzliche Grüße\ndeine Julie`,
    transText: {
      ar: "شافهاوزن، في...\nمرحباً إيزابيل،\nكيف حالك؟ هل اجتزت امتحاناتك؟\nكما تعلمين، ......\narbeite\n....... أنا منذ شهرين في دار مسنين ......\nin\n....... بالقرب من شافهاوزن. العمل في ......\ndiesem\n....... الدار يعجبني كثيراً، رغم أنه أحياناً يكون مرهقاً جداً. ما يميز حقاً هو العلاقة الوثيقة ......\nKontakt\n....... مع بعض كبار السن. هناك سيدة، اسمها آنا رينجير، أحبها ......\nbesonders\n....... كثيراً. إنها تبلغ من العمر 96 عاماً وتجلس على كرسي متحرك، لكنها دائماً مبتهجة. بالأمس، أخبرتني ......\nihr\n....... عن حياتها بأكملها. لقد عملت حتى سن 84 ......\nhart\n....... عاماً. منذ أن كانت فتاة في الثامنة من عمرها، كان عليها أن تعمل لدى مزارع، ......\nweil\n....... لأن والديها لم يستطيعوا إطعام العائلة المكونة من تسعة أفراد. في وقت لاحق، عملت آنا كخياطة.\nبالإضافة إلى عملها، لم تتخلَّ آنا أبداً عن شيء واحد: تسلق الجبال! لقد كان دائماً شغفها الكبير. هذه السيدة حقاً مثيرة للإعجاب!\nولكنك ......\nhast\n....... بالتأكيد قد مررت بتجارب كثيرة أيضاً. سأكون سعيدة جداً إذا كتبت لي قريباً!\nمع أطيب التحيات\nصديقتك جولي"
    },
    items: [
      { n: 1, c: "arbeite", opts: ["arbeite", "arbeiten", "arbeiteten"], exp: "بما أننا كنهضرو ف الحاضر (Präsens) ومع الضمير 'ich'، فالفعل كياخد النهاية المعروفة 'e' ف اللخر، داكشي علاش كنقولو 'arbeite'." },
      { n: 2, c: "in", opts: ["auf", "bei", "in"], exp: "العبارة 'in der Nähe von' تعبير محفوظ كيفما هو، كيتستعمل باش نقولو 'بالقرب من' ومكيبدلش الشكل ديالو" },
      { n: 3, c: "diesem", opts: ["diesem", "diesen", "dieses"], exp: "الكلمة هي 'das Haus' (محايدة)، وبما أن حرف الجر 'in' كيهضر هنا على الموقع (فين؟/ Wo?)، فراه كيحول لينا الاسم لـ Dativ. داكشي علاش 'dieses' كترجع 'diesem'" },
      { n: 4, c: "Kontakt", opts: ["Kontakt", "Kontakte", "Kontakten"], exp: "هنا كنختارو الاسم ف المفرد 'der Kontakt'، حيت الصفة اللي سابقة الجملة 'der enge...' حتى هي جات ف المفرد وماشي ف الجمع" },
      { n: 5, c: "besonders", opts: ["besondere", "besonderes", "besonders"], exp: "الكلمة 'besonders' جات هنا كـ ظرف (Adverb) باش توصف شحال عزيزة عليها شي حاجة (besonders gern). والقاعدة كتقول باللي الظروف مكيتحتاجوش نهايات إعرابية" },
      { n: 6, c: "ihr", opts: ["ihr", "ihre", "ihres"], exp: "الكلمة هي 'das Leben' (محايدة) وجات ف موقع مفعول به (Akkusativ). وباش ننسبو الملكية لـ 'هي' (sie)، كنستعملو 'ihr' بلا ما نزيدو ليها حتى نهاية حيت الأكوزاتيف المحايد مكيتبدلش" },
      { n: 7, c: "hart", opts: ["hart", "harte", "härter"], exp: "الكلمة 'hart' جات هنا باش توصف 'الطريقة' باش تخدمات الخدمة (Adverb). وبما أنها كتوصف الفعل وماشي الاسم، فراه مكنزيدو ليها حتى نهاية" },
      { n: 8, c: "weil", opts: ["daher", "deshalb", "weil"], exp: "فاش كنشوفو الفعل المساعد 'konnten' مشى حتى لآخر الجملة، كنفهمو بلي هادي Nebensatz. والرابط اللي كيشرح لينا 'السبب' فهاد الحالة هو 'weil" },
      { n: 9, c: "aber", opts: ["aber", "als", "wie"], exp: "كنستعملو 'aber' هنا باش نبينو التناقض أو الاستدراك، والمعنى هو: 'ولكن' بالرغم من الصعوبات، مابغاتش تتخلى على الهدف ديالها." },
      { n: 10, c: "hast", opts: ["bist", "hast", "wirst"], exp: "الفعل 'erleben' كيتحتاج معاه الفعل المساعد 'haben' ف الماضي. ومع الضمير 'du'، التصريف الصحيح هو 'hast' بطبيعة الحال." }
    ]
  },
  {
    id: "alex-sp2", title: "Alex Und Cora", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: true,
    text: `Sehr geehrte Damen und Herren,\n\nnachdem ich Ihr Inserat gelesen habe, möchte ich .....(1)..... gern genauer über Ihr Restaurant informieren. In einem Monat feiere ich meinen 30. Geburtstag und möchte dazu viele Freunde und .....(2)..... einladen. .....(3)..... wäre Ihr Hotel sicher sehr gut geeignet. Deshalb noch einige Fragen .....(4)..... Sie: Ich rechne ungefähr mit 25 Personen. Wie hoch ist die Miete für den passenden Raum und .....(5)..... Gerichte können Sie mir empfehlen? Da fast alle Gäste mit dem Auto kommen werden, wäre es auch wichtig, .....(6)..... genügend Parkplätze vorhanden sind.\n\nEs wäre .....(7)..... freundlich von Ihnen, wenn Sie mir möglichst bald Bescheid geben könnten, damit ich die Einladungen verschicken .....(8)...... Bitte senden Sie mir einen Prospekt Ihres Hotels .....(9)..... genauer Wegbeschreibung. Sollten Ihre Räume für den Monat Mai .....(10)..... ausgebucht sein, geben Sie mir bitte umgehend Bescheid.\n\nMit freundlichen Grüßen\nBarbara Heuberger`,
    transText: { ar: "سيداتي وسادتي،\n\nبعد أن قرأت إعلانكم..." },
    wordBank: [{k:"a",w:"an"},{k:"b",w:"Bekannte"},{k:"c",w:"bereits"},{k:"d",w:"dafür"},{k:"e",w:"darüber"},{k:"f",w:"dass"},{k:"g",w:"Familie"},{k:"h",w:"kann"},{k:"i",w:"mich"},{k:"j",w:"mit"},{k:"k",w:"muss"},{k:"l",w:"ob"},{k:"m",w:"sehr"},{k:"n",w:"was"},{k:"o",w:"welche"}],
    items: [{n:1, c:"mich"},{n:2, c:"Bekannte"},{n:3, c:"dafür"},{n:4, c:"an"},{n:5, c:"welche"},{n:6, c:"dass"},{n:7, c:"sehr"},{n:8, c:"kann"},{n:9, c:"mit"},{n:10, c:"bereits"}]
  }
];
// ==========================================
// data-b1.js — الجزء 2 من 3
// (Rita, Caroline, Vera)
// ==========================================

EXAMS.push(
  // --- Rita ---
  {
    id: "rita-t1", title: "Rita", level: "B1", sub: "Teile 1", type: "headings", isPremium: true,
    items: [
      { n:1, c:"h", de:"Der Schokolade-Boom zeigt sich hierzulande nicht nur im hohen Verbrauch (jeder Schweizer isst fast 12 Kilo Schokolade im Jahr!), nein, er hat nun auch die Schönheitsindustrie erreicht. Vom 16. Januar bis zum 24. Februar bietet das Grand Hotel Bad Ragaz unter dem Namen Choco Therapy zahlreiche kosmetische Behandlungsmethoden mit Schokolade an Die Bäder Massagen und Hautcremes mit Kakao sind durchaus ernst gemeint, denn Kakao soll eine belebende Eigenschaft haben, die den Menschen jung und gesund aussehen lässt.", ar:"النص يتكلم عن علاجات تجميل بالشوكولاتة في فندق سويسري.", opts: [
        {k:"a", de:"Schweizer sollen gesunder leben", ar:"يجب على السويسريين أن يعيشوا حياة أكثر صحة"},
        {k:"b", de:"Neu im Trend: Jung und Gesund - mit dem Schokolade", ar:"الجديد في الموضة: الشباب والصحة - مع الشوكولاتة"},
        {k:"c", de:"Studie zeigt: Heiraten macht dick", ar:"دراسة تظهر: الزواج يزيد الوزن"},
        {k:"d", de:"Japanische Studie: Vielschläfer leben länger", ar:"دراسة يابانية: من ينامون كثيرًا يعيشون أطول"},
        {k:"e", de:"Die Mehrheit der Schweizer treibt aktiv Sport", ar:"غالبية السويسريين يمارسون الرياضة بانتظام"},
        {k:"f", de:"Statistik: Unverheiratete haben oft ein paar Kilos zu viel", ar:"إحصائية: العازبون غالبًا ما يعانون من زيادة في الوزن"},
        {k:"g", de:"Teures Essen für mehr Jugend und Schönheit", ar:"طعام باهظ الثمن من أجل المزيد من الشباب والجمال"},
        {k:"h", de:"USA: Nachfrage nach freuen Lebensmitteln geht zurück", ar:"الولايات المتحدة: تراجع الطلب على الأطعمة المجانية"},
        {k:"i", de:"Schokolade essen - jung bleiben", ar:"تناول الشوكولاتة - البقاء شابًا"},
        {k:"j", de:"Weniger schlafen - länger leben", ar:"النوم أقل - العيش أطول"}
      ]},
      { n:2, c:"c", de:"Frisch verheiratete Paare nehmen oft schon in den Flitterwochen einige Kilos zu, weil sie ihre Essgewohnheiten ändern. Das belegt eine neue Studie. In Deutschland sind fast die Hälfte der verheirateten Frauen und circa zwei Drittel der Ehrenmänner übergewichtig. Alleinstehende sind vermutlich schlanker, weil sie besonderen Wert auf ihr Äußeres legen, mehr Sport treiben und sich selten Zeit für gemütliche Mahlzeiten nehmen.", ar:"المتزوجون حديثاً يكتسبون وزناً بسبب تغيير عاداتهم الغذائية.", opts: [
        {k:"a", de:"Schweizer sollen gesunder leben", ar:"يجب على السويسريين أن يعيشوا حياة أكثر صحة"},
        {k:"b", de:"Neu im Trend: Jung und Gesund - mit dem Schokolade", ar:"الجديد في الموضة: الشباب والصحة - مع الشوكولاتة"},
        {k:"c", de:"Studie zeigt: Heiraten macht dick", ar:"دراسة تظهر: الزواج يزيد الوزن"},
        {k:"d", de:"Japanische Studie: Vielschläfer leben länger", ar:"دراسة يابانية: من ينامون كثيرًا يعيشون أطول"},
        {k:"e", de:"Die Mehrheit der Schweizer treibt aktiv Sport", ar:"غالبية السويسريين يمارسون الرياضة بانتظام"},
        {k:"f", de:"Statistik: Unverheiratete haben oft ein paar Kilos zu viel", ar:"إحصائية: العازبون غالبًا ما يعانون من زيادة في الوزن"},
        {k:"g", de:"Teures Essen für mehr Jugend und Schönheit", ar:"طعام باهظ الثمن من أجل المزيد من الشباب والجمال"},
        {k:"h", de:"USA: Nachfrage nach freuen Lebensmitteln geht zurück", ar:"الولايات المتحدة: تراجع الطلب على الأطعمة المجانية"},
        {k:"i", de:"Schokolade essen - jung bleiben", ar:"تناول الشوكولاتة - البقاء شابًا"},
        {k:"j", de:"Weniger schlafen - länger leben", ar:"النوم أقل - العيش أطول"}
      ]},
      { n:3, c:"j", de:"Wer acht Stunden und länger schläft, hat eine deutlich kürzere Lebenserwartung. Das berichtete das Apothekenmagazin Gesundheit am Mittwoch und bezog sich dabei auf eine neue japanische Studie Schlecht für die Männer, denn laut dieser Studie schlafen Männer im Durchschnitt eine halbe Stunde länger pro Nacht als Frauen. Aber es gibt auch eine gute Nachricht für die Viel-und Langschläfer: Wer lange schläft, hat weniger Gewichtsprobleme und fünf sich gesünder.", ar:"الدراسة اليابانية تقول إن النوم الطويل يقلل العمر، والعنوان الصحيح هو النوم أقل.", opts: [
        {k:"a", de:"Schweizer sollen gesunder leben", ar:"يجب على السويسريين أن يعيشوا حياة أكثر صحة"},
        {k:"b", de:"Neu im Trend: Jung und Gesund - mit dem Schokolade", ar:"الجديد في الموضة: الشباب والصحة - مع الشوكولاتة"},
        {k:"c", de:"Studie zeigt: Heiraten macht dick", ar:"دراسة تظهر: الزواج يزيد الوزن"},
        {k:"d", de:"Japanische Studie: Vielschläfer leben länger", ar:"دراسة يابانية: من ينامون كثيرًا يعيشون أطول"},
        {k:"e", de:"Die Mehrheit der Schweizer treibt aktiv Sport", ar:"غالبية السويسريين يمارسون الرياضة بانتظام"},
        {k:"f", de:"Statistik: Unverheiratete haben oft ein paar Kilos zu viel", ar:"إحصائية: العازبون غالبًا ما يعانون من زيادة في الوزن"},
        {k:"g", de:"Teures Essen für mehr Jugend und Schönheit", ar:"طعام باهظ الثمن من أجل المزيد من الشباب والجمال"},
        {k:"h", de:"USA: Nachfrage nach freuen Lebensmitteln geht zurück", ar:"الولايات المتحدة: تراجع الطلب على الأطعمة المجانية"},
        {k:"i", de:"Schokolade essen - jung bleiben", ar:"تناول الشوكولاتة - البقاء شابًا"},
        {k:"j", de:"Weniger schlafen - länger leben", ar:"النوم أقل - العيش أطول"}
      ]},
      { n:4, c:"a", de:"Nach dem Motto beschwingt und bewegt starten die Schweizer Gesundheitsbehörden eine landesweite Bewegungskampagne. Dabei sollte die Schweizer Bevölkerung aufgerufen werden, ausgewogen zu essen und sich täglich zu bewegen. Fast zwei Drittel der Bevölkerung in der Schweiz sind wenig aktiv und essen zu viel. Die Kampagne soll den Leuten zeigen, wie Sport und gesunde Ernährung ohne großen Aufwand in den Alltag integriert werden können, z.B. mit einem Spaziergang am Mittag oder mit einem Apfel zum Znüni statt Schokolade.", ar:"حملة صحية سويسرية لتشجيع الناس على الرياضة وأكل متوازن.", opts: [
        {k:"a", de:"Schweizer sollen gesunder leben", ar:"يجب على السويسريين أن يعيشوا حياة أكثر صحة"},
        {k:"b", de:"Neu im Trend: Jung und Gesund - mit dem Schokolade", ar:"الجديد في الموضة: الشباب والصحة - مع الشوكولاتة"},
        {k:"c", de:"Studie zeigt: Heiraten macht dick", ar:"دراسة تظهر: الزواج يزيد الوزن"},
        {k:"d", de:"Japanische Studie: Vielschläfer leben länger", ar:"دراسة يابانية: من ينامون كثيرًا يعيشون أطول"},
        {k:"e", de:"Die Mehrheit der Schweizer treibt aktiv Sport", ar:"غالبية السويسريين يمارسون الرياضة بانتظام"},
        {k:"f", de:"Statistik: Unverheiratete haben oft ein paar Kilos zu viel", ar:"إحصائية: العازبون غالبًا ما يعانون من زيادة في الوزن"},
        {k:"g", de:"Teures Essen für mehr Jugend und Schönheit", ar:"طعام باهظ الثمن من أجل المزيد من الشباب والجمال"},
        {k:"h", de:"USA: Nachfrage nach freuen Lebensmitteln geht zurück", ar:"الولايات المتحدة: تراجع الطلب على الأطعمة المجانية"},
        {k:"i", de:"Schokolade essen - jung bleiben", ar:"تناول الشوكولاتة - البقاء شابًا"},
        {k:"j", de:"Weniger schlafen - länger leben", ar:"النوم أقل - العيش أطول"}
      ]},
      { n:5, c:"g", de:"Du bist,was du isst hat als Slogan ausgedient. Heute muss es heißen: Gut aussehen mit dem richtigen Essen. Der Trend kommt aus den USA: Dort kaufen bereits viele Leute neue teure Lebensmittel mit wissenschaftlichen Inhaltsstoffen, die dem Kunden jüngeres und schöneres Aussehen versprechen. So bietet z.B. ein New Yorker Nobelhotel das Menü Gegen-Graue-Haare an, das gegen das Älterwerden wirken soll. Aber wer wird schon eine solche Mahlzeit bestellen? Millionen von Leuten, so die Trendforscher. Und zwar aus dem einfachen Grund, weil jeder jung und gut aussehen will, und das mit möglichst wenig Aufwand.", ar:"اتجاه جديد من أمريكا: أطعمة غالية تعد بمظهر أصغر، والناس مستعدون لدفع الكثير.", opts: [
        {k:"a", de:"Schweizer sollen gesunder leben", ar:"يجب على السويسريين أن يعيشوا حياة أكثر صحة"},
        {k:"b", de:"Neu im Trend: Jung und Gesund - mit dem Schokolade", ar:"الجديد في الموضة: الشباب والصحة - مع الشوكولاتة"},
        {k:"c", de:"Studie zeigt: Heiraten macht dick", ar:"دراسة تظهر: الزواج يزيد الوزن"},
        {k:"d", de:"Japanische Studie: Vielschläfer leben länger", ar:"دراسة يابانية: من ينامون كثيرًا يعيشون أطول"},
        {k:"e", de:"Die Mehrheit der Schweizer treibt aktiv Sport", ar:"غالبية السويسريين يمارسون الرياضة بانتظام"},
        {k:"f", de:"Statistik: Unverheiratete haben oft ein paar Kilos zu viel", ar:"إحصائية: العازبون غالبًا ما يعانون من زيادة في الوزن"},
        {k:"g", de:"Teures Essen für mehr Jugend und Schönheit", ar:"طعام باهظ الثمن من أجل المزيد من الشباب والجمال"},
        {k:"h", de:"USA: Nachfrage nach freuen Lebensmitteln geht zurück", ar:"الولايات المتحدة: تراجع الطلب على الأطعمة المجانية"},
        {k:"i", de:"Schokolade essen - jung bleiben", ar:"تناول الشوكولاتة - البقاء شابًا"},
        {k:"j", de:"Weniger schlafen - länger leben", ar:"النوم أقل - العيش أطول"}
      ]}
    ]
  },
  {
    id: "rita-t2", title: "Rita", level: "B1", sub: "Teile 2", type: "mcq", isPremium: true,
    paragraphs: [
      { de: "Von Antje Blinda Coz-Ausstoß: null. Geplante Strecke: einmal um die Welt. Endlich wird der Traum von Louis Palmer wahr: Der Schweizer startet mit seinem Auto, das mit Sonnenenergie fährt, zur Weltumrundung. Er will damit zeigen, dass Autofahren auch geht, ohne der Umwelt zu schaden", ar: "أخيراً يتحقق حلم لويس بالمر: يبدأ السويسري رحلته حول العالم بسيارته التي تعمل بالطاقة الشمسية." },
      { de: "Entwickelt für mich ein Fahrzeug für eine Weltreise, die mit Sonnenenergie fährt, forderte Louis Palmer Studenten an Schweizer Universitäten auf. Das war vor drei Jahren. Heute ist das Auto fertig: ein dreirädriges Fahrzeug mit zwei Sitzplätzen. Und die Weltreise? Am 3. Juli starten er und sein 7-köpfiges Team in Luzern: Das Auto soll als erstes Solarfahrzeug die Welt umrunden", ar: "\"طوروا لي مركبة لرحلة حول العالم تعمل بالطاقة الشمسية\"، طلب لويس بالمر من طلاب في جامعات سويسرية." },
      { de: "Die ganze Welt wartet auf revolutionäre Erfindungen für ein umweltbewusstes Auto, sagt der Schweizer, ich will darauf aufmerksam machen, dass die technischen Lösungen schon jetzt vorhanden sind. Mit 14 Jahren hatte Louis den Entschluss gefasst. Gegen die Veränderung des Klimas muss etwas getan werden. Die Lösung hatte er auch schon: Mit kräftigen Strichen zeichnete er ein Rennauto, verziert mit lachendem Sonnen. Der Rest war nur eine Frage der Organisation und der konsequenten Lebensplanung. Ich unterteile mein Leben in drei Phasen, sagt Palmer und lacht über sich selbst: zwischen 20 und 30 die Welt kennen lernen, zwischen 30 und 40 die Welt Aufmerksam machen und zwischen 40 und 50 die Welt verändern.", ar: "العالم كامل كيتسنى اختراعات ثورية لشي طوموبيل كتحترم البيئة، كيقول السويسري، خصني نبين أن الحلول التقنية راه موجودة دابا." },
      { de: "Phase eins begann mit 23 Jahren: Er zog aus, um 50 Länder auf allen Kontinenten zu bereisen: Anstatt an die Uni zu gehen, habe ich die Welt studiert. Mit dem Fahrrad fuhr er von Kenia nach Kapstadt, mit einem Segelflugzeug überflog er Südamerika und als Fotograf reiste er mehrmals nach Afghanistan.", ar: "المرحلة الأولى بدات عندو 23 عام: خرج من الدار باش يسافر لـ50 بلاد فكل القارات." },
      { de: "Phase zwei startete vor drei Jahren: Palmer konnte Studenten von vier Universitäten gewinnen, die für ihn das Auto bauten. Schwierig war es aber, Firmen und private Sponsoren für die finanzielle Unterstützung zu finden, meint Palmer. Doch auch das hat dann schließlich geklappt.", ar: "المرحلة الثانية بدات قبل ثلاث سنين: بالمر قدر يقنع طلاب من أربع جامعات باش يبنيو ليه الطوموبيل." },
      { de: "Nun ist Palmer bereit für die Tour. Ich habe keine Ahnung, was auf uns zukommt, sagt der erfahrene Globetrotter, der sechs Sprachen spricht. Ich habe schon etwas Angst, z.B. vor dem Straßenverkehr in Millionenstädten oder unvorhersehbaren Zwischenfällen. Das Schlimmste ist aber, wenn jeder Tag wie der andere ist. In den nächsten 16 Monaten wird es dazu nicht kommen.", ar: "دابا بالمر جاهز للجولة. ما عنديش فكرة شنو غيوقع لينا، كيقول الرحالة اللي كيهدّر ستة لغات." }
    ],
    items: [
      { n:1, c:"C", q:"Mit 23 Jahren wollte Louis Palmer", opts:[ {k:"A", de:"für Studenten Reisen nach Südamerika organisieren"}, {k:"B", de:"mit dem Fahrrad durch 50 verschiedene Länder fahren"}, {k:"C", de:"viele verschiedene Länder kennen lernen"} ] },
      { n:2, c:"C", q:"Sein Projekt konnte Palmer realisieren,", opts:[ {k:"A", de:"weil er einen Preis von einer Universität gewonnen hat"}, {k:"B", de:"weil er finanzielle Unterstützung von vier Universitäten erhalten hat."}, {k:"C", de:"weil ihn Firmen und Universitäten unterstützt haben"} ] },
      { n:3, c:"A", q:"Palmers Auto", opts:[ {k:"A", de:"fährt mit alternativer Energie"}, {k:"B", de:"geht auf eine dreijährige Weltreise"}, {k:"C", de:"hat genug Platz für sieben Personen"} ] },
      { n:4, c:"A", q:"Louis Palmer", opts:[ {k:"A", de:"wird sich in nächster Zeit nicht langweilen"}, {k:"B", de:"möchte mit seinem Auto nicht durch Großstädte fahren"}, {k:"C", de:"hat für die Weltreise sechs Sprachen gelernt"} ] },
      { n:5, c:"C", q:"Schon als Jugendlicher", opts:[ {k:"A", de:"baute Louis an einem umweltfreundlichen Auto"}, {k:"B", de:"wollte Louis etwas für die Umwelt tun."}, {k:"C", de:"wusste Louis genau, wie er sein Leben einteilen will"} ] }
    ]
  },
  {
    id: "rita-t3", title: "Rita", level: "B1", sub: "Teile 3", type: "matching", isPremium: true,
    ads: [
      {k:"A", t:"Surf & Travel", de:"Kurztrips der Deutschen Bahn..."}, {k:"B", t:"Für den Fernsehfilm", de:"Kleindarsteller und Statisten gesucht..."},
      {k:"C", t:"Messejobs", de:"Hostessen und Promoter für Messen..."}, {k:"D", t:"Verkehrsmuseum Erfurt", de:"Mobilität und Technik, Geschichte des Autos..."},
      {k:"E", t:"ADAC Urlaub mobil", de:"Berlin plus Autoreise durch Deutschland..."}, {k:"F", t:"Filmclub", de:"Filmvorführungen, Kino..."},
      {k:"G", t:"Ökomobil", de:"Garten- und Landschaftsbau, Ausbildung..."}, {k:"H", t:"Jung gebliebener Rentner", de:"Sucht Freizeitpartnerin für Kino, Reisen..."},
      {k:"I", t:"Feng Shui für den Garten", de:"Vortragsabend, Beratung..."}, {k:"J", t:"Studentinnen/SchülerInnen gesucht", de:"Betreuung im Kinderferienlager..."},
      {k:"K", t:"Gemeinsam schöne Dinge genießen", de:"Akademikerin sucht Partner für Konzerte..."}, {k:"L", t:"Samstagswerkstatt", de:"Aufbau des Autos, Reparatur und Pflege..."}
    ],
    items: [
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
    id: "rita-sp1", title: "Rita", level: "B1", sub: "Sprach 1", type: "sprach1", isPremium: true,
    text: `Liebe Catherine,\nich hab's geschafft! Endlich habe ich einen Job bekommen. Wie versprochen möchte ich dir gleich .....(1)..... erzählen. Am Anfang .....(2)..... ich ziemlich enttäuscht, weil ich auf meine vielen Bewerbungsschreiben insgesamt .....(3)..... zwei Antworten bekommen habe. Aber zum Glück hat einer davon .....(4).....: Ich werde nun zwei Nachmittage in der Woche als Babysitterin .....(5)..... einer Familie arbeiten, die zwei Kinder hat. Sie sind 3 und 5 Jahre alt und .....(6)..... sind sehr nett. Wir haben in der .....(7)..... Woche bereits Vieles gemeinsam gemacht, sind in den Zoo und .....(8)..... Kindermuseum gegangen. .....(9)..... kann man eine Stadt gar nicht kennenlernen, und es macht mir viel Spaß!\nFür heute wünsche ich dir alles Gute, schreibe mir bald, wie es dir .....(10)..... .\nLiebe Grüße\nDeine Tanja`,
    transText: { ar: "عزيزتي كاثرين،\nنجحت! أخيراً حصلت على عمل..." },
    items: [
      {n:1, c:"davon", opts:["dafür","damit","davon"], exp:"الفعل erzählen ديما كيجر معاه حرف الجر von. وباش ما نكرروش كلمة 'الخدمة' (Job) اللي هضرنا عليها، كنلصقو da مع von وكتولي davon، كأننا كنقولو 'كنعاود ليك عليها"},
      {n:2, c:"war", opts:["bin","habe","war"], exp:"فاش كنبغيو نوصفو كيفاش كنا (الحالة النفسية) ف البداية (Am Anfang)، كنستعملو فعل الكينونة sein ف الماضي. ومع الضمير ich، التصريف هو war (كنت)"},
      {n:3, c:"nur", opts:["doch","nur","schon"], exp:"باش نبينو باللي العدد اللي جاوبونا قليل بزاف (إحباط)، كنستعملو nur (فقط). هاد الكلمة هي اللي كاتعطي المعنى ديال 'يا ربي غير جوج'"},
      {n:4, c:"gepasst", opts:["gepasst","passen","passt"], exp:"الجملة فيها الفعل المساعد hat، إذن الفعل الأساسي خاصو يكون ف Partizip II. بالنسبة لـ passen، التصريف ديالو هو gepasst (بمعنى: العرض جاني لاصق/مناسب)."},
      {n:5, c:"bei", opts:["an","bei","zu"], exp:"قاعدة ثابتة: فاش كتهضر على الخدمة عند شي حد (عائلة، شركة، أو شخص)، ديما استعمل حرف الجر bei"},
      {n:6, c:"beide", opts:["beide","beiden","beides"], exp:"هنا كنهضرو على أشخاص (جوج دراري)، داكشي علاش كنختارو beide. أما beides فكنخليوها غير للأشياء أو الأفكار المجردة"},
      {n:7, c:"ersten", opts:["erster","ersten","erstes"], exp:"كلمة Woche مؤنث وجات ف حالة Dativ (من بعد in der). القاعدة كتقول باللي الصفة فاش كيكون قبل منها أداة تعريف ف الداتيف، كتاخد ديما النهاية en"},
      {n:8, c:"ins", opts:["im","in","ins"], exp:"بما أن كاين فعل حركة (gegangen)، فراه حنا ف حالة Akkusativ. وباش نختصرو 'in + das Museum' (حيت المتاحف محايدة)، كنجمعوهم ف كلمة وحدة هي ins"},
      {n:9, c:"Besser", opts:["Am besten","Besser","Gut"], exp:"باش نقولو باللي شي حاجة 'أحسن' من حاجة أخرى، كنستعملو Besser. السياق هنا كينفي وجود شي طريقة أفضل لاكتشاف المدينة"},
      {n:10, c:"geht", opts:["geht","geht's","ging"], exp:"التعبير الشهير 'wie es dir geht' كيبقى كيفما هو فاش كنسولو على الحال، والفعل gehen كيتصرف ف المضارع عادي."}
    ]
  },
  {
    id: "rita-sp2", title: "Rita", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: true,
    text: `Ihre Anzeige in der Frankfurter Rundschau\n\nSehr geehrte Frau Herrmann ,\n\nich habe Ihre Anzeige in der Frankfurter Rundschau vom 5. Oktober gelesen und interessiere mich sehr für die 3-Zimmer-Wohnung.\n\nZurzeit wohne ich noch in Krakau (Polen). Demnächst .....(1)..... ich aber aus beruflichen Gründen mit meinem Sohn (3 Jahre) .....(2)..... Frankfurt umziehen. Deshalb suche ich zum 1. November eine Wohnung, .....(3)..... möglichst zentral gelegen sein sollte. Ihre Wohnung .....(4)..... deshalb genau richtig für uns.\n\nIch hätte jedoch noch einige Fragen zu Ihrer Anzeige: Ist die Wohnung auch für Kleinkinder .....(5).....? Und gibt es in der näheren Umgebung einen Spielplatz, .....(6)..... mein Sohn spielen könnte? Außerdem würde ich .....(7)..... wissen, ob die Haltung von Haustieren in .....(8)..... Wohnung erlaubt ist. .....(9)..... es möglich ist, würden wir nämlich gerne unseren Hund mitbringen.\n\nIch danke Ihnen .....(10)..... jetzt für Ihre Antwort und grüße Sie freundlich.\n\nKASIA KLOC`,
    transText: { ar: "إعلانكم في صحيفة فرانكفورتر روندشاو..." },
    wordBank: [{k:"a",w:"der"},{k:"b",w:"die"},{k:"c",w:"Erst"},{k:"d",w:"geeignet"},{k:"e",w:"gerne"},{k:"f",w:"hätte"},{k:"g",w:"in"},{k:"h",w:"muss"},{k:"i",w:"nach"},{k:"j",w:"noch"},{k:"k",w:"schon"},{k:"l",w:"wann"},{k:"m",w:"wäre"},{k:"n",w:"wenn"},{k:"o",w:"wo"}],
    items: [{n:1, c:"muss"},{n:2, c:"nach"},{n:3, c:"die"},{n:4, c:"wäre"},{n:5, c:"geeignet"},{n:6, c:"wo"},{n:7, c:"gerne"},{n:8, c:"der"},{n:9, c:"wenn"},{n:10, c:"schon"}]
  }
);

// --- Caroline ---
EXAMS.push(
  {
    id: "caroline-t1", title: "Caroline", level: "B1", sub: "Teile 1", type: "headings", isPremium: true,
    items: [
      { n:1, c:"h", de:"Der Frankfurter Flughafen wird weiter ausgebaut. Eine Gruppe von Frankfurter Bürgern aus den östlichen Stadtteilen, die sich seit Jahren aktiv für den Naturschutz und die Umwelt einsetzt, lädt für Donnerstag dieser Woche um 19.30 Uhr zu einem Informationsabend über den Ausbau des Frankfurter Flughafens ein. Im Bürgerhaus Ostend, Parkstraße 24, Clubraurn 12, werden verschiedene Sprecher zu hören sein. Die Gruppe möchte Antworten auf folgende Fragen suchen: Wie viel Lärm durch Flugzeuge verträgt die Stadt? Oder Welche Auswirkungen hat der Flugverkehr auf Umwelt und Natur?", opts:[
        {k:"a", de:"Familienbildung Schwerpunkt Beruf und Familie"}, {k:"b", de:"Demonstration gegen Fluglärm"}, {k:"c", de:"Flughafen Frankfurt wird 10 Jahre"}, {k:"d", de:"Flughafen Frankfurt beliebter Veranstaltungsort"}, {k:"e", de:"Experten gegen Vergrößerung des Flughafens"}, {k:"f", de:"Diskussion über Flughafen und Arbeitsplätze"}, {k:"g", de:"Neue Kurse: Spiele für Mütter und Kinder"}, {k:"h", de:"Umwelt und Flughafen: Ein Informationsabend der Bürger"}, {k:"i", de:"Neue Kurse für Kinder"}, {k:"j", de:"Neue Kurse: Museumsführung für junge Väter"}
      ]},
      { n:2, c:"d", de:"Der Frankfurter Flughafen erfreut sich bei vielen Firmen als beliebter Ort für Veranstaltungen und Tagungen. Dies zeigt ein Bericht des Frankfurter Flughafens, der beim zehnjährigen Jubiläum des Kongresszentruns vorgelegt wurde. Im Jubiläumsjahr haben am Frankfurter Flughafen 6800 Veranstaltungen mit insgesamt 72000 Teilnehmern stattgefunden. Im Jahr davor waren es nur 6300 Veranstaltungen mit 70000 Gästen. Im Kongresszentrum, das direkt gegenüber dem Hauptgebäude des Flughafens liegt, gibt es 28 Konferenzräume für bis zu 200 Teilnehmer. Modernste Technik wie Laptop-Anschlüsse und Internetzugänge in allen Konferenzräumen sind ebenso vorhanden, wie ein Dolmetscherdienst und verschiedene Speisemöglichkeiten. Eine transportable Videokonferenz-Anlage ermöglicht Verbindungen in die ganze Welt.", opts:[
        {k:"a", de:"Familienbildung Schwerpunkt Beruf und Familie"}, {k:"b", de:"Demonstration gegen Fluglärm"}, {k:"c", de:"Flughafen Frankfurt wird 10 Jahre"}, {k:"d", de:"Flughafen Frankfurt beliebter Veranstaltungsort"}, {k:"e", de:"Experten gegen Vergrößerung des Flughafens"}, {k:"f", de:"Diskussion über Flughafen und Arbeitsplätze"}, {k:"g", de:"Neue Kurse: Spiele für Mütter und Kinder"}, {k:"h", de:"Umwelt und Flughafen: Ein Informationsabend der Bürger"}, {k:"i", de:"Neue Kurse für Kinder"}, {k:"j", de:"Neue Kurse: Museumsführung für junge Väter"}
      ]},
      { n:3, c:"f", de:"Eine Bürgergruppe mit dem Namen Südliches Frankfurt lädt für Montag kommender Woche, um 19.30 Uhr ins Pfarrhaus St. Mauritius, Mauritiusstraße 14, zu einer öffentlichen Expertenbefragung zum Thema Arbeitsplätze am Frankfurter Flughafen ein. Der Gruppe liegen Berichte und Daten vor, die nach den Worten der Sprecher der Gruppe sehr fantastisch und zweifelhaft sind. Deshalb hat die Bürgergruppe Südliches Frankfurt den Personalleiter des Frankfurter Flughafens, einen Experten aus dem Wirtschaftsministerium, einen bekannten Stadtentwicklungsplaner und einen Soziologen, der sich mit der Arbeitsplatzentwicklung in der Frankfurter Region beschäftigt, eingeladen. Im Anschluss an die Vorträge der Experten haben die Gäste Zeit, Fragen zu stellen.", opts:[
        {k:"a", de:"Familienbildung Schwerpunkt Beruf und Familie"}, {k:"b", de:"Demonstration gegen Fluglärm"}, {k:"c", de:"Flughafen Frankfurt wird 10 Jahre"}, {k:"d", de:"Flughafen Frankfurt beliebter Veranstaltungsort"}, {k:"e", de:"Experten gegen Vergrößerung des Flughafens"}, {k:"f", de:"Diskussion über Flughafen und Arbeitsplätze"}, {k:"g", de:"Neue Kurse: Spiele für Mütter und Kinder"}, {k:"h", de:"Umwelt und Flughafen: Ein Informationsabend der Bürger"}, {k:"i", de:"Neue Kurse für Kinder"}, {k:"j", de:"Neue Kurse: Museumsführung für junge Väter"}
      ]},
      { n:4, c:"a", de:"Das neue Halbjahresprogramm der Evangelischen Familienbildungsstätte bringt eine Übersicht über viele Veranstaltungen. Neben Kursen wie Geburtsvorbereitung und Babypflege steht diesmal das Thema Berufstätige Eltern im Mittelpunkt. In Gruppen und Kursen vor allem für Frauen geht es darum, wie sich nach der Geburt eines Kindes Beruf und Familie miteinander vereinbaren lassen. Das Verhältnis zwischen Mann und Frau spielt eine große Rolle im Angebot der Familienbildung; hierzu gibt es wieder spezielle Programme nur für Frauen oder nur für Männer. Auch zum Verhältnis der Generationen (Großeltern und Enkelkinder) gibt es wieder Angebote. Darüber hinaus wartet das Programm mit Kursen für Entspannung und Zeitmanagement auf, die bei Fragen des Alltags helfen wollen.", opts:[
        {k:"a", de:"Familienbildung Schwerpunkt Beruf und Familie"}, {k:"b", de:"Demonstration gegen Fluglärm"}, {k:"c", de:"Flughafen Frankfurt wird 10 Jahre"}, {k:"d", de:"Flughafen Frankfurt beliebter Veranstaltungsort"}, {k:"e", de:"Experten gegen Vergrößerung des Flughafens"}, {k:"f", de:"Diskussion über Flughafen und Arbeitsplätze"}, {k:"g", de:"Neue Kurse: Spiele für Mütter und Kinder"}, {k:"h", de:"Umwelt und Flughafen: Ein Informationsabend der Bürger"}, {k:"i", de:"Neue Kurse für Kinder"}, {k:"j", de:"Neue Kurse: Museumsführung für junge Väter"}
      ]},
      { n:5, c:"i", de:"Die Volkshochschule Dornbirn bietet in den kommenden Wochen neue Kurse an. Am Mittwoch nächster Woche beginnen zwei Malkurse für Kinder. Zweieinhalb- bis vierjährige Kinder treffen sich um 15.30 Uhr, Kinder im Alter von fünf und sechs Jahren um 17.00 Uhr. Für Kinder im Alter zwischen eineinhalb und sechs Jahren und ihre Väter beginnt am Samstag um 10.00 Uhr eine feste Vater-Kind-Gruppe. Am darauf-folgenden Samstag gibt es dann auch ein Treffen für Väter und Kinder bis dreieinhalb Jahren. Etwas anderes ist die Kultur- und Kreativwerkstatt am Montag nächster Woche. Aus Ton und Erde sollen Figuren nach afrikanischen Beispielen gebastelt werden. Zur Vorbereitung treffen sich die Teilnehmer am kommenden Montag zuerst im Museum. Anmeldung spätestens morgen bis 15.00 Uhr.", opts:[
        {k:"a", de:"Familienbildung Schwerpunkt Beruf und Familie"}, {k:"b", de:"Demonstration gegen Fluglärm"}, {k:"c", de:"Flughafen Frankfurt wird 10 Jahre"}, {k:"d", de:"Flughafen Frankfurt beliebter Veranstaltungsort"}, {k:"e", de:"Experten gegen Vergrößerung des Flughafens"}, {k:"f", de:"Diskussion über Flughafen und Arbeitsplätze"}, {k:"g", de:"Neue Kurse: Spiele für Mütter und Kinder"}, {k:"h", de:"Umwelt und Flughafen: Ein Informationsabend der Bürger"}, {k:"i", de:"Neue Kurse für Kinder"}, {k:"j", de:"Neue Kurse: Museumsführung für junge Väter"}
      ]}
    ]
  },
  {
    id: "caroline-t2", title: "Caroline", level: "B1", sub: "Teile 2", type: "mcq", isPremium: true,
    paragraphs: [
      { de: "Anne und Melanie (beide 6) stehen Erzieherinnen mit Vorschlägen hilfreich zur Seite..." },
      { de: "Im Rahmen dieses Projekts werden in städtischen Kindergärten zwei Wanderstationen mit je drei Multimedia-Computern installiert..." },
      { de: "Bevor jedoch die Computer in die Kindergärten kamen, waren die Eltern aufzuklären..." },
      { de: "Diese Ängste haben sich inzwischen gelegt und die Erfahrung vor Ort zeigt, dass sie weitgehend überflüssig sind..." },
      { de: "Das einsame Dämmern vor dem Computer ist wohl ohnehin eher Sache der Erwachsenen..." }
    ],
    items: [
      { n:1, c:"A", q:"Das Schulamt hat ein Projekt gestartet, bei dem", opts:[ {k:"A", de:"Computer in Kindergärten aufgestellt werden."}, {k:"B", de:"Computerspiele für Vierjährige entwickelt werden sollen."}, {k:"C", de:"Kinder neue Farbdrucker ausprobieren sollen."} ] },
      { n:2, c:"A", q:"Die Kinder", opts:[ {k:"A", de:"hatten großen Spaß bei dem Projekt."}, {k:"B", de:"wollten lieber draußen im Freien spielen."}, {k:"C", de:"wussten nicht, wann sie ins Studio im Netz gehen sollten."} ] },
      { n:3, c:"A", q:"Eltern fürchten, dass", opts:[ {k:"A", de:"der Computer ihren Kindern schadet."}, {k:"B", de:"ihre Kinder nicht so früh aufstehen können."}, {k:"C", de:"ihre Kinder vor dem Computer Angst haben."} ] },
      { n:4, c:"C", q:"Die Erzieherinnen", opts:[ {k:"A", de:"arbeiten jeden Tag 15 bis 20 Minuten am Computer."}, {k:"B", de:"spielen immer mit zwei oder drei Kindern am Computer."}, {k:"C", de:"wählen für die Kinder die Software aus."} ] },
      { n:5, c:"B", q:"Wenn die Kinder am Computer sitzen, dann", opts:[ {k:"A", de:"gibt es häufig Streit."}, {k:"B", de:"hilft ein Kind dem anderen."}, {k:"C", de:"können sich die meisten nicht lange konzentrieren."} ] }
    ]
  },
  {
    id: "caroline-t3", title: "Caroline", level: "B1", sub: "Teile 3", type: "matching", isPremium: true,
    ads: [
      {k:"A", t:"Museum der Stadt Füssen", de:"Lechhalde 3 · 87629 Füssen"}, {k:"B", t:"Franziskaner Stüberl", de:"Gutbürgerliche Allgäuer und Bayerische Küche"},
      {k:"C", t:"Sennerei-Genossenschaft Bayern", de:"Allgäuer Emmentaler, Bergkäse"}, {k:"D", t:"Sprachen lernen & Leute treffen", de:"Bildungsurlaub für Erwachsene"},
      {k:"E", t:"Jahreskonzert Füssen", de:"Mozart, Klavierkonzert"}, {k:"F", t:"Das Heimatmuseum Füssen", de:"Montag bis Freitag geöffnet"},
      {k:"G", t:"bonCas", de:"Spezialitätenkäserei"}, {k:"H", t:"Alfa Sprachreisen", de:"High-School-Programme für 12- bis 18-Jährige"},
      {k:"I", t:"Amadeus", de:"Cafe, Bistro"}, {k:"J", t:"Free-System", de:"Englisch, Französisch, Intensivkurse"},
      {k:"K", t:"Ritterstub’n", de:"Fischspezialitäten"}, {k:"L", t:"Alpenrösle", de:"Hotel-Restaurant"}
    ],
    items: [
      {n:1, c:"E", de:"Sie wollen am Wochenende gerne in ein Klavierkonzert gehen."}, {n:2, c:"F", de:"Sie sind in Füssen und wollen am Montag ins Museum gehen."},
      {n:3, c:"B", de:"Sie sind in Süddeutschland im Urlaub und möchten gerne eine bayerische Spezialität essen."}, {n:4, c:"K", de:"Sie haben sich mit Bekannten zu einem Fischessen verabredet."},
      {n:5, c:"C", de:"Sie sind in Bayern und wollen Käsespezialitäten einkaufen."}, {n:6, c:"X", de:"Sie möchten einen Deutschkurs in Wien besuchen."},
      {n:7, c:"H", de:"Ihr 16 jähriger Sohn soll in den Ferien im Ausland Englisch lernen."}, {n:8, c:"X", de:"Sie interessieren sich für einen Sprachkurs auf CD."},
      {n:9, c:"X", de:"Sie wollen, dass Ihre 10-jährige Tochter in den Ferien eine Fremdsprache lernt."}, {n:10, c:"L", de:"Eine Bekannte will ihren Geburtstag in einem Restaurant feiern und dort auch übernachten."}
    ]
  },
  {
    id: "caroline-sp1", title: "Caroline", level: "B1", sub: "Sprach 1", type: "sprach1", isPremium: true,
    text: `Liebe Catherine,\nseit ich dir letzte Mal von meinem Sprachhaufenhalt in der Schweiz .....(1)..... habe, ist viel passiert. Ich kenne .....(2)..... Land jetzt schon recht gut. Die Schweiz ist ja wirklich nicht groß. .....(3)..... in jeder Gegend wird ein anderer Dialekt oder gar eine andere Sprache gesprochen. Das ist .....(4)..... mich fast unglaublich! Bei uns in Australien fährt man mit dem Auto 24 Stunden lang geradeaus, und .....(5)..... man ankommt, dann sprechen die Leute dort immer noch dieselbe Sprache. Am Anfang hat mich das Sprachgemisch .....(6)..... sehr verwirrt, aber .....(7)..... verstehe ich fast alles, wenn jemand auf Schweizerdeutsch zu mir spricht. Ich kann aber nur auf Hochdeutsch antworten. Zwischen der Schule hier und unserem Schulsystem in Australien gibt es einige .....(8).....: In der Schweiz sprechen die Lehrer viel und die Schüler .....(9)..... Vieles im Kopf behalteIn Australien arbeiten wir meistens im Rahmen von Projekten und machen eigentlich alle Aufgaben auf .....(10)..... Computer.\nViele Grüße\nJack`,
    transText: { ar: "عزيزتي كاثرين،\nمنذ أن أخبرتك آخر مرة عن إقامتي لتعلم اللغة في سويسرا..." },
    items: [
      {n:1, c:"erzählt", opts:["erzähle","erzählen","erzählt"], exp:"بصح. الجملة هنا مصرف ف الماضي (Perfekt)، وعلاش؟ حيت استعملنا الفعل المساعد 'habe' وزدنا عليه الـ Partizip II ديال الفعل الأساسي اللي هو 'erzählt'"},
      {n:2, c:"dieses", opts:["diese","diesen","dieses"], exp:"تماماً. كلمة 'Land' النوع ديالها محايد (das)، وبما أنها جات ف موقع مفعول به (Akkusativ)، فراه أداة الإشارة مكاتبدلش وكنقولو 'dieses'"},
      {n:3, c:"aber", opts:["aber","obwohl","sondern"], exp:"هادشي اللي كاين. استعملنا 'aber' (ولكن) باش نبينو واحد الفرق كبير: بالرغم من أن مساحة سويسرا صغيرة، إلا أن التنوع اللغوي فيها كبير بزااف"},
      {n:4, c:"für", opts:["an","für","vor"], exp:"قاعدة ثابتة. باش تقول 'بالنسبة ليا'، الترجمة هي 'für mich'. ديما عقل باللي حرف الجر 'für' كيمشي معاه الـ Akkusativ"},
      {n:5, c:"wenn", opts:["als","wann","wenn"], exp:"صحيح. كنستعملو 'wenn' فاش كنهضرو على شي حالة عامة أو متكررة ف الحاضر (مثلاً: فاش كنسوق...)، ماشي شي حاجة طرات غير مرة وحدة ف الماضي وسالات"},
      {n:6, c:"schon", opts:["wenn","ganz","schon"], exp:"هنا اللمسة الألمانية. كلمة 'schon' جات هنا غير باش تزيد تأكد (تفوكسي) على ديك الحيرة والدهشة اللي كانت عند جاك ف البداية."},
      {n:7, c:"jetzt", opts:["früher","jetzt","seit"], exp:"بصح. الجملة كتحط الماضي (البداية) ف كفة، والحاضر ف كفة أخرى، داكشي علاش استعملنا 'jetzt' باش نبينو الوضع ديال 'دابا'"},
      {n:8, c:"Unterschiede", opts:["Unterschied","Unterschiede","Unterschieden"], exp:"تماماً. الكلمة 'einige' (بعض) ديما كتحتاج الاسم اللي موراها يكون ف صيغة الجمع، داكشي علاش استعملنا 'Unterschiede' (اختلافات)"},
      {n:9, c:"müssen", opts:["brauchen","haben","müssen"], exp:"هادشي اللي كاين. فاش كنهضرو على القوانين أو الالتزامات اللي خاص تدار ف المدرسة، الفعل المناسب هو 'müssen' (لازم/ضروري)"},
      {n:10, c:"dem", opts:["dem","den","der"], exp:"قاعدة الموقع. حرف الجر 'auf' هنا كيوصف 'فين' كاينة الحاجة (Dativ). وبما أن 'Computer' مذكر (der)، فراه ف حالة الداتيف كيرجع 'dem'"}
    ]
  },
  {
    id: "caroline-sp2", title: "Caroline", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: true,
    text: `QUANTUM-SYSTEM\n\nDas Lotterie – Systemspiel\n\nOtto – Suhr- Allee 100. D- 10120 Berlin\n\nSehr geehrte Lottospieler,\n\nwer möchte nicht auch .....(1)..... bei sechs Richtigen im Lotto dabei sein? Vertrauen Sie beim Lottospiel nicht .....(2)..... auf das Glück, denn Sie .....(3)..... Ihre Chancen selbst stark verbessern, .....(4)..... Sie mit unserem Lotterie-System spielen – und das für nur 5 Euro in der Woche! .....(5)..... allein zu spielen, spielen Sie mit uns in einer starken Spielergemeinschaft. Dadurch erhöhen sich .....(6)..... automatisch Ihre Chancen! Und was Sie gewinnen können? .....(7)..... unserem Quantum-System spielen Sie mit einer Chance auf einen Gewinn von 1 Million Euro! Alle Gewinne erhalten Sie umgehend und ungekürzt zu 100% – das .....(8)..... wir Ihnen!\n\nDavon habe ich mich selbst überzeugt! Spielen Sie mit uns das Quantum-System: .....(9)..... 700 Quantum-Systemspielgruppen haben zusammen schon über sieben Millionen Euro gewonnen.\n\nHerzliche Grüße\nIhre SABINE MEIER-PÜTZ\n\nPS: Als besondere Gewinnchance erhalten Sie heute das Vier-Richtige-Gratisspiel. .....(10)..... Sie hier unbedingt mit und gewinnen Sie! Ich drücke Ihnen die Daumen……`,
    transText: { ar: "نظام الكم\n\nلعبة اليانصيب - النظام..." },
    wordBank: [{k:"a",w:"bei"},{k:"b",w:"bereits"},{k:"c",w:"einmal"},{k:"d",w:"Eure"},{k:"e",w:"ganz"},{k:"f",w:"garantieren"},{k:"g",w:"Gestern"},{k:"h",w:"können"},{k:"i",w:"machen"},{k:"j",w:"nur"},{k:"k",w:"statt"},{k:"l",w:"Technisch"},{k:"m",w:"Über"},{k:"n",w:"Unser"},{k:"o",w:"wenn"}],
    items: [{n:1, c:"einmal"},{n:2, c:"nur"},{n:3, c:"können"},{n:4, c:"wenn"},{n:5, c:"statt"},{n:6, c:"ganz"},{n:7, c:"bei"},{n:8, c:"garantieren"},{n:9, c:"Über"},{n:10, c:"machen"}]
  }
);

// --- Vera ---
EXAMS.push(
  {
    id: "vera-t1", title: "Vera", level: "B1", sub: "Teile 1", type: "headings", isPremium: true,
    items: [
      { n:1, c:"d", de:"Wenn Sie verreisen, wünschen wir ihnen erholsame und angenehme Ferienlage Bitte denken Sie daran, sich ihre Zeitung in den Urlaubtort nachsenden zu lassen...", opts:[
        {k:"a", de:"Abendwanderungen ab 89 Euro"}, {k:"b", de:"Ausflugsziele für Literaturinteressierte"}, {k:"c", de:"Hinweis für Besucher der Bregenzer Festspiele"}, {k:"d", de:"Ihre Zeitung folgt Ihnen in den Urlaub"}, {k:"e", de:"Laute Musik stört den Nachbarn"}, {k:"f", de:"Musikveranstaltungen am Nachmittag"}, {k:"g", de:"Neue Zeitung für Ihre Urlaubsplanung"}, {k:"h", de:"Rekord: 70.000 Besucher im Bücherdorf"}, {k:"i", de:"Schlechtes Wetter: Festspiele abgesagt"}, {k:"j", de:"Wandern ohne Gepäck"}
      ]},
      { n:2, c:"j", de:"Im Luftkurort Stadtkylf in der Mittelgebirgslandschaft des Oberen Kullas werden dreitägige Wanderungen ohne Gepäck veranstaltet...", opts:[
        {k:"a", de:"Abendwanderungen ab 89 Euro"}, {k:"b", de:"Ausflugsziele für Literaturinteressierte"}, {k:"c", de:"Hinweis für Besucher der Bregenzer Festspiele"}, {k:"d", de:"Ihre Zeitung folgt Ihnen in den Urlaub"}, {k:"e", de:"Laute Musik stört den Nachbarn"}, {k:"f", de:"Musikveranstaltungen am Nachmittag"}, {k:"g", de:"Neue Zeitung für Ihre Urlaubsplanung"}, {k:"h", de:"Rekord: 70.000 Besucher im Bücherdorf"}, {k:"i", de:"Schlechtes Wetter: Festspiele abgesagt"}, {k:"j", de:"Wandern ohne Gepäck"}
      ]},
      { n:3, c:"e", de:"Für den einen ist es musikalischer Hochgenuss für den anderen schlicht Lärm. Gemeint ist Musik, die aus Lautsprechen...", opts:[
        {k:"a", de:"Abendwanderungen ab 89 Euro"}, {k:"b", de:"Ausflugsziele für Literaturinteressierte"}, {k:"c", de:"Hinweis für Besucher der Bregenzer Festspiele"}, {k:"d", de:"Ihre Zeitung folgt Ihnen in den Urlaub"}, {k:"e", de:"Laute Musik stört den Nachbarn"}, {k:"f", de:"Musikveranstaltungen am Nachmittag"}, {k:"g", de:"Neue Zeitung für Ihre Urlaubsplanung"}, {k:"h", de:"Rekord: 70.000 Besucher im Bücherdorf"}, {k:"i", de:"Schlechtes Wetter: Festspiele abgesagt"}, {k:"j", de:"Wandern ohne Gepäck"}
      ]},
      { n:4, c:"b", de:"Das erste deutsche Bücherdorf hat in Mühlbeck/ Fredersdorf (Sachsen – Anhalt ) seit Ende September seine Tore geöffnet...", opts:[
        {k:"a", de:"Abendwanderungen ab 89 Euro"}, {k:"b", de:"Ausflugsziele für Literaturinteressierte"}, {k:"c", de:"Hinweis für Besucher der Bregenzer Festspiele"}, {k:"d", de:"Ihre Zeitung folgt Ihnen in den Urlaub"}, {k:"e", de:"Laute Musik stört den Nachbarn"}, {k:"f", de:"Musikveranstaltungen am Nachmittag"}, {k:"g", de:"Neue Zeitung für Ihre Urlaubsplanung"}, {k:"h", de:"Rekord: 70.000 Besucher im Bücherdorf"}, {k:"i", de:"Schlechtes Wetter: Festspiele abgesagt"}, {k:"j", de:"Wandern ohne Gepäck"}
      ]},
      { n:5, c:"c", de:"Die Bregenzer Festspiele sind bemüht, die Vorstellungen auch bei zweifelhafter Witterung bzw. leichtem Regen auf der Seebühne abzuhalten...", opts:[
        {k:"a", de:"Abendwanderungen ab 89 Euro"}, {k:"b", de:"Ausflugsziele für Literaturinteressierte"}, {k:"c", de:"Hinweis für Besucher der Bregenzer Festspiele"}, {k:"d", de:"Ihre Zeitung folgt Ihnen in den Urlaub"}, {k:"e", de:"Laute Musik stört den Nachbarn"}, {k:"f", de:"Musikveranstaltungen am Nachmittag"}, {k:"g", de:"Neue Zeitung für Ihre Urlaubsplanung"}, {k:"h", de:"Rekord: 70.000 Besucher im Bücherdorf"}, {k:"i", de:"Schlechtes Wetter: Festspiele abgesagt"}, {k:"j", de:"Wandern ohne Gepäck"}
      ]}
    ]
  },
  { id: "vera-t2", title: "Vera", level: "B1", sub: "Teile 2", type: "mcq", isPremium: true, paragraphs: [], items: [] },
  { id: "vera-t3", title: "Vera", level: "B1", sub: "Teile 3", type: "matching", isPremium: true, ads: [], items: [] },
  { id: "vera-sp1", title: "Vera", level: "B1", sub: "Sprach 1", type: "sprach1", isPremium: true, text: "", items: [] },
  { id: "vera-sp2", title: "Vera", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: true, text: "", wordBank: [], items: [] }
);
// ==========================================
// data-b1.js — الجزء 3 من 3
// (Schreiben, Hören)
// ==========================================

var SCHREIBEN_DATA = [
  {
    id: "sch1", title: "Urlaub Im Schwarzwald - Antwort An Petra", level: "B1",
    text: `Liebe(r).......\n\nIch habe eine tolle Überraschung. stelle dir vor, was mir mein Onkel angeboten hat. Er rief mich am Samstag an. Er hat ein großes Ferienhaus im Schwarzwald. Das Haus kann ich für die Ferien kostenlos haben. Ich kann auch Freunde mitbringen! Wäre das nichts für uns? Wir könnten uns alle dort treffen. Du, deine Eltern und Freunde, und ich mit meiner Familie und meinen Freunden. Ich würde mich wahnsinnig freuen, wenn das klappen würde. Bitte schreibe mir so schnell du kannst, damit wir alles planen können. Urlaub im Schwarzwald - das wird traumhaft schön!\n\nHerzliche Grüße\nPetra`,
    transText: {
      ar: `عزيزي/عزيزتي...\n\nعندي ليك مفاجأة زوينة. تخيل شنو عرض عليا عمي. عيط ليا نهار السبت. عندو دار كبيرة ديال العطلة في الغابة السوداء (Schwarzwald). نقدر ناخد الدار فهاد العطلة. ونقدر نجيب معايا حتى صحابي! واش هادشي ماشي فكرة زوينة لينا؟ نقدر ونتجمعو تما كاملين. أنت، والديك وصحابك، وأنا مع عائلتي وصحابي. غادي نفرح بزاف يلا صدقات هاد القضية. عفاك جاوبني في أقرب وقت باش نقدر وخططو لكشي. عطلة في الغابة السوداء - غتكون رائعة!\n\nتحياتي القلبية\nبيترا`,
      ma: `عزيزي/عزيزتي...\n\nعندي ليك مفاجأة زوينة. تخيل شنو عرض عليا عمي. عيط ليا نهار السبت. عندو دار كبيرة ديال العطلة في الغابة السوداء (Schwarzwald). نقدر ناخد الدار فهاد العطلة. ونقدر نجيب معايا حتى صحابي! واش هادشي ماشي فكرة زوينة لينا؟ نقدر ونتجمعو تما كاملين. أنت، والديك وصحابك، وأنا مع عائلتي وصحابي. غادي نفرح بزاف يلا صدقات هاد القضية. عفاك جاوبني في أقرب وقت باش نقدر وخططو لكشي. عطلة في الغابة السوداء - غتكون رائعة!\n\nتحياتي القلبية\nبيترا`,
      en: `Dear...\n\nI have a great surprise. Imagine what my uncle offered me. He called me on Saturday. He has a big holiday house in the Black Forest. I can have the house for the holidays for free. I can also bring friends! Wouldn't that be something for us? We could all meet there. You, your parents and friends, and me with my family and my friends. I would be incredibly happy if that would work out. Please write to me as soon as you can so that we can plan everything. Vacation in the Black Forest - that will be incredibly beautiful!\n\nBest regards\nPetra`,
      fr: `Cher/Chère...\n\nJ'ai une super surprise. Imagine ce que mon oncle m'a proposé. Il m'a appelé samedi. Il a une grande maison de vacances dans la Forêt-Noire. Je peux avoir la maison pour les vacances gratuitement. Je peux aussi amener des amis ! Ne serait-ce pas quelque chose pour nous ? Nous pourrions tous nous y retrouver. Toi, tes parents et amis, et moi avec ma famille et mes amis. Je serais incroyablement heureux si cela pouvait fonctionner. S'il te plaît, écris-moi dès que tu peux pour que nous puissions tout planifier. Des vacances dans la Forêt-Noire - ce sera incroyablement beau !\n\nCordialement\nPetra`,
      hi: `प्रिय...\n\nमेरे पास एक शानदार आश्चर्य है। सोचो मेरे चाचा ने मुझे क्या पेशकश की। उन्होंने मुझे शनिवार को फोन किया। ब्लैक फॉरेस्ट में उनका छुट्टियों का एक बड़ा घर है। मैं छुट्टियों के लिए घर मुफ्त में ले सकता हूं। मैं दोस्तों को भी ला सकता हूं! क्या यह हमारे लिए कुछ नहीं होगा? हम सब वहां मिल सकते हैं। तुम, तुम्हारे माता-पिता और दोस्त, और मैं अपने परिवार और अपने दोस्तों के साथ। अगर यह काम करेगा तो मैं अविश्वसनीय रूप से खुश होऊंगा। कृपया मुझे जल्द से जल्द लिखें ताकि हम सब कुछ योजना बना सकें। ब्लैक फॉरेस्ट में छुट्टी - यह अविश्वसनीय रूप से सुंदर होगी!\n\nसादर\nपेट्रा`
    },
    task: "Antworten Sie auf den Brief. Schreiben Sie etwas zu den folgenden Punkten:",
    transTask: { ar: "جاوب على الرسالة. كتب على هاد النقط:", ma: "جاوب على الرسالة. كتب على هاد النقط:", en: "Answer the letter. Write something about the following points:", fr: "Répondez à la lettre. Écrivez quelque chose sur les points suivants :", hi: "पत्र का जवाब दें। निम्नलिखित बिंदुओं पर कुछ लिखें:" },
    points: ["Warum Sie gern nach Deutschland kommen möchten?", "Wie Sie anreisen wollen?", "Was Sie gemeinsam machen könnten?", "Wen Sie mitbringen möchten?"],
    transPoints: {
      ar: ["(1) علاش باغي تجي لألمانيا.", "(2) كيفاش غادي تسافر.", "(3) شنو تقدرو ديرو مجموعين.", "(4) شكون باغي تجيب معاك."],
      ma: ["(1) علاش باغي تجي لألمانيا.", "(2) كيفاش غادي تسافر.", "(3) شنو تقدرو ديرو مجموعين.", "(4) شكون باغي تجيب معاك."],
      en: ["(1) Why you would like to come to Germany.", "(2) How you want to travel.", "(3) What you could do together.", "(4) Who you want to bring."],
      fr: ["(1) Pourquoi vous aimeriez venir en Allemagne.", "(2) Comment vous voulez voyager.", "(3) Ce que vous pourriez faire ensemble.", "(4) Qui vous voulez amener."],
      hi: ["(1) आप जर्मनी क्यों आना चाहेंगे।", "(2) आप कैसे यात्रा करना चाहते हैं।", "(3) आप एक साथ क्या कर सकते हैं।", "(4) आप किसे लाना चाहते हैं।"]
    }
  },
  {
    id: "sch2", title: "Eva - Traumberuf Und Neuigkeiten", level: "B1",
    text: `Liebe(r).......\n\nwie geht es denn so mit dem Deutsch lernen? Kommst du gut voran, und was machst du im Moment so? Stell dir vor, ich habe die neue Stelle bei der Zeitschrift VIA bekommen! ich arbeite jetzt als Journalistin, und das war ja immer mein Traumberuf!\n\nVIA wird vor allem von jüngeren Leuten gelesen. Deshalb schreiben wir viel über Berufe und Ausbildungen und auch über Freizeit und Sport. Für die nächsten Hefte von VIA planen wir jetzt eine neue Serie über Berufs wünsche. Was ist eigentlich dein Traumberuf? Wenn du möchtest, schicke ich dir gerne einmal ein Gratisheft von VIA, damit du siehst, was ich so mache.\n\nIch freue mich schon auf deine Antwort.\n\nHerzliche Grüße\nEva`,
    transText: {
      ar: `عزيزي/عزيزتي...\n\nكيف تسير الأمور مع تعلم اللغة الألمانية؟ هل تتقدم بشكل جيد، وماذا تفعل في الوقت الحالي؟ تخيل، لقد حصلت على الوظيفة الجديدة في مجلة VIA! أنا أعمل الآن كصحفية، وكان هذا دائماً حلم حياتي!\n\nمجلة VIA يقرأها بشكل أساسي الشباب. لذلك نكتب الكثير عن المهن والتدريبات وأيضاً عن وقت الفراغ والرياضة. للأعداد القادمة من VIA، نخطط الآن لسلسلة جديدة عن المهن المرغوبة. ما هي في الواقع مهنة أحلامك؟ إذا كنت ترغب في ذلك، سأرسل لك بكل سرور عدداً مجانياً من VIA لترى ما أفعله.\n\nأتطلع بالفعل إلى ردك.\n\nتحياتي القلبية\nإيفا`,
      ma: `عزيزي/عزيزتي...\n\nكيفاش دازة معاك القراية ديال الألمانية؟ واصل مزيان؟ وشنو كدير دابا؟ تخيل، خديت الخدمة الجديدة فالمجلة VIA! أنا دابا كنخدم كصحفية، وهادشي كان ديما الحلم ديالي!\n\nالمجلة VIA كيقراها بزاف الشباب. داكشي علاش كنكتبو بزاف على المهن والتكوينات وحتى على وقت الفراغ والرياضة. للأعداد الجاية ديال VIA، كنخطوطو دابا لسلسلة جديدة على المهن اللي كيحلمو بيها الناس. شنو هو الحلم ديالك فالمستقبل؟ يلا بغيتي، نصيفط ليك عدد مجاني من VIA باش تشوف شنو كندير.\n\nكنتسنى فالرد ديالك.\n\nتحياتي\nإيفا`,
      en: `Dear...\n\nhow are things going with learning German? Are you making good progress, and what are you doing at the moment? Imagine, I got the new job at the magazine VIA! I am now working as a journalist, and that was always my dream job!\n\nVIA is read mainly by younger people. That's why we write a lot about professions and training and also about leisure and sports. For the next issues of VIA we are now planning a new series about dream jobs. What is your dream job actually? If you want, I'll gladly send you a free copy of VIA so you can see what I do.\n\nI am already looking forward to your answer.\n\nBest regards\nEva`,
      fr: `Cher/Chère...\n\ncomment se passe l'apprentissage de l'allemand ? Est-ce que tu progresses bien, et qu'est-ce que tu fais en ce moment ? Figure-toi que j'ai obtenu le nouveau poste au magazine VIA ! Je travaille maintenant comme journaliste, et c'était toujours mon métier de rêve !\n\nVIA est surtout lu par les jeunes. C'est pourquoi nous écrivons beaucoup sur les métiers et les formations, mais aussi sur les loisirs et le sport. Pour les prochains numéros de VIA, nous prévoyons maintenant une nouvelle série sur les métiers de rêve. Quel est ton métier de rêve ? Si tu veux, je te donnerai volontiers un numéro gratuit de VIA pour que tu voies ce que je fais.\n\nJe me réjouis déjà de ta réponse.\n\nCordialement\nEva`,
      hi: `प्रिय...\n\nजर्मन सीखना कैसा चल रहा है? क्या आप अच्छी प्रगति कर रहे हैं, और इस समय क्या कर रहे हैं? कल्पना कीजिए, मुझे VIA पत्रिका में नई नौकरी मिल गई! मैं अब एक पत्रकार के रूप में काम कर रहा हूँ, और यह हमेशा मेरा सपनों का काम था!\n\nVIA मुख्य रूप से युवा लोगों द्वारा पढ़ा जाता है। इसलिए हम पेशे और प्रशिक्षण के बारे में बहुत कुछ लिखते हैं और आराम और खेल के बारे में भी। VIA के अगले अंकों के लिए हम अब सपनों की नौकरियों के बारे में एक नई श्रृंखला की योजना बना रहे हैं। वास्तव में आपका सपनों का काम क्या है? यदि आप चाहें, तो मैं आपको VIA की एक मुफ्त प्रति भेजकर खुशी से भेज दूंगा ताकि आप देख सकें कि मैं क्या करता हूं।\n\nमैं पहले से ही आपके जवाब का इंतजार कर रहा हूं।\n\nसादर\nएवा`
    },
    task: "Schreiben Sie Ihrer Bekannten nun einen Antwortbrief, der die folgenden Punkte enthält:",
    transTask: { ar: "كتب لصاحبك رسالة رد كتضمن هاد النقط:", ma: "كتب لصاحبك رسالة رد كتضمن هاد النقط:", en: "Write an answer letter to your acquaintance containing the following points:", fr: "Écrivez maintenant une lettre de réponse à votre connaissance contenant les points suivants :", hi: "अपने परिचित को एक उत्तर पत्र लिखें जिसमें निम्नलिखित बिंदु हों:" },
    points: ["Fortschritte beim Deutsch Lernen", "Auf Evas neue Stelle reagieren", "Was es Neues bei Ihnen gibt", "Ihr Traumberuf"],
    transPoints: {
      ar: ["(1) التقدم في تعلم الألمانية.", "(2) رد الفعل على وظيفة إيفا الجديدة.", "(3) الجديد عندك.", "(4) مهنة أحلامك."],
      ma: ["(1) التقدم في تعلم الألمانية.", "(2) رد الفعل على وظيفة إيفا الجديدة.", "(3) الجديد عندك.", "(4) مهنة أحلامك."],
      en: ["(1) Progress in learning German.", "(2) React to Eva's new job.", "(3) What's new with you.", "(4) Your dream job."],
      fr: ["(1) Progrès dans l'apprentissage de l'allemand.", "(2) Réagir au nouveau poste d'Eva.", "(3) Quoi de neuf chez vous.", "(4) Votre métier de rêve."],
      hi: ["(1) जर्मन सीखने में प्रगति।", "(2) ईवा की नई नौकरी पर प्रतिक्रिया दें।", "(3) आपके यहाँ क्या नया है।", "(4) आपका सपनों का काम।"]
    }
  },
  ...([
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
  ].map((title, i) => ({
    id: `sch${i + 4}`,
    title: title,
    level: "B1",
    isPremium: true,
    text: "",
    task: "",
    points: [],
    transText: {},
    transTask: {},
    transPoints: {}
  }))
];

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
      { n:4, c:"R", de:"Der Sprecher benutzt für den Weg zur iedene Verkehrsmittel.", ar:"المتحدث يستخدم وسائل نقل مختلفة.", story:"يوسف عمره ما كيمشي بالطوموبيل للخدمة، كيختار الطرام ولا كيمشي على رجليه باش يوفر الفلوس ويدير شوية الرياضة." },
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
