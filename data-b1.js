// ==========================================
// ملف: data-b1.js (الجزء 1)
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
  ma: { welcome:"مرحبا بيك", choose_lang:"ختار اللغة ديالك", home:"الرئيسية", lesen:"قراية", horen:"سماع", schreiben:"كتابة", sprechen:"هضرة", pruefung:"امتحان", exam_mode:"نمط الامتحان", practice_mode:"نمط التدريب", banner_title:"تدرب على الامتحان الحقيقي واذهب للحصول عليه!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"الكود الفريد الخاص بك", login:"تسجيل الدخول", guest:"دخول كزائر", support:"الدعم الفني", start_now:"ابدأ الآن", listen_lessons:"دروس الاستماع", search_placeholder:"...بحث عن موضوع", listen_title:"دروس الاستماع", listen_desc:"هنا كتلقى جميع دروس الهورن. اضغط على الزر لبدء الاستماع وحل الأسئلة.", gap_num:"الفراغ", choose_word_gap:"اختر الكلمة للفراغ", story_memo:"قصة للحفظ", check_btn:"تصحيح", next_btn:"التالي", back_btn:"رجوع", reset_btn:"إعادة", coming_soon:"قريباً...", settings:"الإعدادات", change_lang:"تغيير اللغة / Language", text_size:"حجم النص", reset_size:"إعادة الحجم الأصلي", logout:"خروج", whatsapp:"واتساب", lang_note:"اللغة التي تختارها ستبقى معك طوال التطبيق", or:"أو", correct:"✓ صحيح", wrong:"✗ غلط", no_answer:"⚠️ لم تجب", the_answer:"الجواب", b1_level:"المستوى B1", b2_level:"المستوى B2", side_menu:"القائمة الجانبية", ai_correct:"✨ تصحيح AI", trans_text:"ترجمة النص", trans_task:"ترجمة المهمة", show:"إظهار", hide:"إخفاء", words_count:"كلمة", locked:"مقفول", upgrade_pro:"ترقية إلى Pro", trial_active:"تجربة مجانية نشطة", trial_ended:"انتهت التجربة", wa_upgrade_msg:"سلام، بغيت نرقّي حسابي لـ Pro باش نحل جميع الدروس", admin_panel:"لوحة التحكم", notifications:"الإشعارات", block:"حظر", unblock:"إلغاء الحظر", mark_paid:"تفعيل الدفع", mark_unpaid:"إلغاء الدفع", save:"حفظ", cancel:"إلغاء", users:"المستخدمين", name:"الاسم", code:"الكود", status:"الحالة", paid:"مخلص", blocked:"محظور", actions:"إجراءات", send_notification:"إرسال إشعار", title_ar:"العنوان", message_ar:"الرسالة", no_notifications:"لا توجد إشعارات حالياً", unique_name_placeholder:"الاسم الفريد (Unique Name)", unique_code_placeholder:"الكود الفريد (Unique Code)", login_or_register:"دخول / إنشاء حساب", account_blocked:"تم حظر حسابك", contact_support:"تواصل مع الدعم الفني", please_wait:"جاري التحميل...", results:"النتائج", score:"النقطة", date:"التاريخ", search_users:"بحث عن مستخدم...", delete_notif:"حذف", confirm_delete_notif:"واش بصح باغي تحذف هاد الإشعار؟", sent_success:"تم الإرسال بنجاح!", fill_all_fields:"عمر جميع الحقول", sending:"جاري الإرسال...", previous_notifs:"الإشعارات السابقة", new_notif:"إرسال إشعار جديد", active:"نشط", inactive:"موقوف" },
  ar: { welcome:"مرحباً بك", choose_lang:"اختر لغتك", home:"الرئيسية", lesen:"قراءة", horen:"استماع", schreiben:"كتابة", sprechen:"تحدث", pruefung:"امتحان", exam_mode:"نمط الامتحان", practice_mode:"نمط التدريب", banner_title:"تدرب على الامتحان الحقيقي واذهب للحصول عليه!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"الكود الفريد الخاص بك", login:"تسجيل الدخول", guest:"دخول كزائر", support:"الدعم الفني", start_now:"ابدأ الآن", listen_lessons:"دروس الاستماع", search_placeholder:"...بحث عن موضوع", listen_title:"دروس الاستماع", listen_desc:"هنا تجد جميع دروس الاستماع. اضغط على الزر لبدء الاستماع وحل الأسئلة.", gap_num:"الفراغ", choose_word_gap:"اختر الكلمة للفراغ", story_memo:"قصة للحفظ", check_btn:"تصحيح", next_btn:"التالي", back_btn:"رجوع", reset_btn:"إعادة", coming_soon:"قريباً...", settings:"الإعدادات", change_lang:"تغيير اللغة", text_size:"حجم النص", reset_size:"إعادة الحجم الأصلي", logout:"خروج", whatsapp:"واتساب", lang_note:"اللغة التي تختارها ستبقى معك طوال التطبيق", or:"أو", correct:"✓ صحيح", wrong:"✗ خطأ", no_answer:"⚠️ لم تجب", the_answer:"الجواب", b1_level:"المستوى B1", b2_level:"المستوى B2", side_menu:"القائمة الجانبية", ai_correct:"✨ تصحيح AI", trans_text:"ترجمة النص", trans_task:"ترجمة المهمة", show:"إظهار", hide:"إخفاء", words_count:"كلمة", locked:"مقفول", upgrade_pro:"ترقية إلى Pro", trial_active:"تجربة مجانية نشطة", trial_ended:"انتهت التجربة", wa_upgrade_msg:"مرحباً، أريد ترقية حسابي إلى Pro لفتح جميع الدروس", admin_panel:"لوحة التحكم", notifications:"الإشعارات", block:"حظر", unblock:"إلغاء الحظر", mark_paid:"تفعيل الدفع", mark_unpaid:"إلغاء الدفع", save:"حفظ", cancel:"إلغاء", users:"المستخدمون", name:"الاسم", code:"الكود", status:"الحالة", paid:"مدفوع", blocked:"محظور", actions:"إجراءات", send_notification:"إرسال إشعار", title_ar:"العنوان", message_ar:"الرسالة", no_notifications:"لا توجد إشعارات حالياً", unique_name_placeholder:"الاسم الفريد", unique_code_placeholder:"الكود الفريد", login_or_register:"دخول / إنشاء حساب", account_blocked:"تم حظر حسابك", contact_support:"تواصل مع الدعم الفني", please_wait:"جاري التحميل...", results:"النتائج", score:"النقطة", date:"التاريخ", search_users:"بحث عن مستخدم...", delete_notif:"حذف", confirm_delete_notif:"هل تريد حقاً حذف هذا الإشعار؟", sent_success:"تم الإرسال بنجاح!", fill_all_fields:"يرجى ملء جميع الحقول", sending:"جاري الإرسال...", previous_notifs:"الإشعارات السابقة", new_notif:"إرسال إشعار جديد", active:"نشط", inactive:"موقوف" },
  en: { welcome:"Welcome", choose_lang:"Choose language", home:"Home", lesen:"Reading", horen:"Listening", schreiben:"Writing", sprechen:"Speaking", pruefung:"Exam", exam_mode:"Exam Mode", practice_mode:"Practice Mode", banner_title:"Train for the real exam and get it!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Your Unique ID", login:"Login", guest:"Login as Guest", support:"Technical Support", start_now:"Start Now", listen_lessons:"Listening Lessons", search_placeholder:"Search for a topic...", listen_title:"Listening Lessons", listen_desc:"Here you will find all listening lessons. Click the button to start listening and solving questions.", gap_num:"Gap", choose_word_gap:"Choose word for gap", story_memo:"Story to memorize", check_btn:"Check", next_btn:"Next", back_btn:"Back", reset_btn:"Reset", coming_soon:"Coming soon...", settings:"Settings", change_lang:"Change Language", text_size:"Text Size", reset_size:"Reset to original size", logout:"Logout", whatsapp:"WhatsApp", lang_note:"The language you choose will remain with you throughout the app", or:"or", correct:"✓ Correct", wrong:"✗ Wrong", no_answer:"⚠️ No answer", the_answer:"Answer", b1_level:"Level B1", b2_level:"Level B2", side_menu:"Side Menu", ai_correct:"✨ AI Check", trans_text:"Translate Text", trans_task:"Translate Task", show:"Show", hide:"Hide", words_count:"Words", locked:"Locked", upgrade_pro:"Upgrade to Pro", trial_active:"Free Trial Active", trial_ended:"Trial Ended", wa_upgrade_msg:"Hello, I want to upgrade to Pro to unlock all lessons", admin_panel:"Admin Panel", notifications:"Notifications", block:"Block", unblock:"Unblock", mark_paid:"Mark as Paid", mark_unpaid:"Mark as Unpaid", save:"Save", cancel:"Cancel", users:"Users", name:"Name", code:"Code", status:"Status", paid:"Paid", blocked:"Blocked", actions:"Actions", send_notification:"Send Notification", title_ar:"Title", message_ar:"Message", no_notifications:"No notifications yet", unique_name_placeholder:"Unique Name", unique_code_placeholder:"Unique Code", login_or_register:"Login / Register", account_blocked:"Your account has been blocked", contact_support:"Contact technical support", please_wait:"Loading...", results:"Results", score:"Score", date:"Date", search_users:"Search users...", delete_notif:"Delete", confirm_delete_notif:"Are you sure you want to delete this notification?", sent_success:"Sent successfully!", fill_all_fields:"Please fill all fields", sending:"Sending...", previous_notifs:"Previous Notifications", new_notif:"Send New Notification", active:"Active", inactive:"Inactive" },
  fr: { welcome:"Bienvenue", choose_lang:"Choisissez la langue", home:"Accueil", lesen:"Lecture", horen:"Écoute", schreiben:"Écriture", sprechen:"Expression orale", pruefung:"Examen", exam_mode:"Mode Examen", practice_mode:"Mode Entraînement", banner_title:"Entraînez-vous pour le vrai examen et obtenez-le !", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Votre identifiant unique", login:"Se connecter", guest:"Entrer en tant qu'invité", support:"Support Technique", start_now:"Commencer", listen_lessons:"Leçons d'écoute", search_placeholder:"Rechercher un sujet...", listen_title:"Leçons d'écoute", listen_desc:"Ici vous trouverez toutes les leçons d'écoute. Cliquez sur le bouton pour commencer à écouter et à répondre aux questions.", gap_num:"Espace", choose_word_gap:"Choisir le mot pour l'espace", story_memo:"Histoire à mémoriser", check_btn:"Vérifier", next_btn:"Suivant", back_btn:"Retour", reset_btn:"Réinitialiser", coming_soon:"Bientôt...", settings:"Paramètres", change_lang:"Changer de langue", text_size:"Taille du texte", reset_size:"Rétablir la taille d'origine", logout:"Déconnexion", whatsapp:"WhatsApp", lang_note:"La langue que vous choisissez restera avec vous tout au long de l'application", or:"ou", correct:"✓ Correct", wrong:"✗ Faux", no_answer:"⚠️ Sans réponse", the_answer:"Réponse", b1_level:"Niveau B1", b2_level:"Niveau B2", side_menu:"Menu Latéral", ai_correct:"✨ Correction IA", trans_text:"Traduire le texte", trans_task:"Traduire la tâche", show:"Afficher", hide:"Masquer", words_count:"Mots", locked:"Verrouillé", upgrade_pro:"Passer à Pro", trial_active:"Essai Gratuit Actif", trial_ended:"Essai Terminé", wa_upgrade_msg:"Bonjour, je souhaite passer à Pro pour débloquer toutes les leçons", admin_panel:"Panneau d'Admin", notifications:"Notifications", block:"Bloquer", unblock:"Débloquer", mark_paid:"Marquer Payé", mark_unpaid:"Marquer Non Payé", save:"Enregistrer", cancel:"Annuler", users:"Utilisateurs", name:"Nom", code:"Code", status:"Statut", paid:"Payé", blocked:"Bloqué", actions:"Actions", send_notification:"Envoyer Notification", title_ar:"Titre", message_ar:"Message", no_notifications:"Aucune notification pour le moment", unique_name_placeholder:"Nom unique", unique_code_placeholder:"Code unique", login_or_register:"Connexion / Inscription", account_blocked:"Votre compte a été bloqué", contact_support:"Contactez le support technique", please_wait:"Chargement...", results:"Résultats", score:"Score", date:"Date", search_users:"Rechercher des utilisateurs...", delete_notif:"Supprimer", confirm_delete_notif:"Voulez-vous vraiment supprimer cette notification ?", sent_success:"Envoyé avec succès !", fill_all_fields:"Veuillez remplir tous les champs", sending:"Envoi...", previous_notifs:"Notifications Précédentes", new_notif:"Envoyer une Nouvelle Notification", active:"Actif", inactive:"Inactif" },
  id: { welcome:"Selamat datang", choose_lang:"Pilih bahasa", home:"Beranda", lesen:"Membaca", horen:"Mendengarkan", schreiben:"Menulis", sprechen:"Berbicara", pruefung:"Ujian", exam_mode:"Mode Ujian", practice_mode:"Mode Latihan", banner_title:"Berlatih untuk ujian nyata dan dapatkan!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"ID Unik Anda", login:"Masuk", guest:"Masuk sebagai Tamu", support:"Dukungan Teknis", start_now:"Mulai Sekarang", listen_lessons:"Pelajaran Mendengarkan", search_placeholder:"Cari topik...", listen_title:"Pelajaran Mendengarkan", listen_desc:"Di sini Anda akan menemukan semua pelajaran mendengarkan. Klik tombol untuk mulai mendengarkan dan menjawab pertanyaan.", gap_num:"Celah", choose_word_gap:"Pilih kata untuk celah", story_memo:"Cerita untuk dihafal", check_btn:"Periksa", next_btn:"Selanjutnya", back_btn:"Kembali", reset_btn:"Atur Ulang", coming_soon:"Segera hadir...", settings:"Pengaturan", change_lang:"Ganti Bahasa", text_size:"Ukuran Teks", reset_size:"Kembalikan ke ukuran asli", logout:"Keluar", whatsapp:"WhatsApp", lang_note:"Bahasa yang Anda pilih akan tetap bersama Anda di seluruh aplikasi", or:"atau", correct:"✓ Benar", wrong:"✗ Salah", no_answer:"⚠️ Tidak ada jawaban", the_answer:"Jawaban", b1_level:"Tingkat B1", b2_level:"Tingkat B2", side_menu:"Menu Samping", ai_correct:"✨ Pemeriksaan AI", trans_text:"Terjemahkan Teks", trans_task:"Terjemahkan Tugas", show:"Tampilkan", hide:"Sembunyikan", words_count:"Kata", locked:"Terkunci", upgrade_pro:"Tingkatkan ke Pro", trial_active:"Uji Coba Gratis Aktif", trial_ended:"Uji Coba Berakhir", wa_upgrade_msg:"Halo, saya ingin meningkatkan ke Pro untuk membuka semua pelajaran", admin_panel:"Panel Admin", notifications:"Notifikasi", block:"Blokir", unblock:"Buka Blokir", mark_paid:"Tandai Lunas", mark_unpaid:"Tandai Belum Lunas", save:"Simpan", cancel:"Batal", users:"Pengguna", name:"Nama", code:"Kode", status:"Status", paid:"Lunas", blocked:"Diblokir", actions:"Tindakan", send_notification:"Kirim Notifikasi", title_ar:"Judul", message_ar:"Pesan", no_notifications:"Belum ada notifikasi", unique_name_placeholder:"Nama Unik", unique_code_placeholder:"Kode Unik", login_or_register:"Masuk / Daftar", account_blocked:"Akun Anda telah diblokir", contact_support:"Hubungi dukungan teknis", please_wait:"Memuat...", results:"Hasil", score:"Skor", date:"Tanggal", search_users:"Cari pengguna...", delete_notif:"Hapus", confirm_delete_notif:"Apakah Anda yakin ingin menghapus notifikasi ini?", sent_success:"Berhasil dikirim!", fill_all_fields:"Harap isi semua kolom", sending:"Mengirim...", previous_notifs:"Notifikasi Sebelumnya", new_notif:"Kirim Notifikasi Baru", active:"Aktif", inactive:"Nonaktif" },
  tl: { welcome:"Maligayang pagdating", choose_lang:"Pumili ng wika", home:"Home", lesen:"Pagbasa", horen:"Pakikinig", schreiben:"Pagsusulat", sprechen:"Pagsasalita", pruefung:"Pagsusulit", exam_mode:"Mode ng Pagsusulit", practice_mode:"Mode ng Pagsasanay", banner_title:"Magsanay para sa tunay na pagsusulit at kunin ito!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Ang Iyong Natatanging ID", login:"Mag-login", guest:"Mag-login bilang Bisita", support:"Teknikal na Suporta", start_now:"Simulan Ngayon", listen_lessons:"Mga Aralin sa Pakikinig", search_placeholder:"Maghanap ng paksa...", listen_title:"Mga Aralin sa Pakikinig", listen_desc:"Dito mo makikita ang lahat ng aralin sa pakikinig. I-click ang button upang magsimulang makinig at sumagot ng mga tanong.", gap_num:"Puwang", choose_word_gap:"Pumili ng salita para sa puwang", story_memo:"Kuwento na dapat tandaan", check_btn:"Suriin", next_btn:"Susunod", back_btn:"Bumalik", reset_btn:"I-reset", coming_soon:"Malapit na...", settings:"Mga Setting", change_lang:"Palitan ang Wika", text_size:"Laki ng Teksto", reset_size:"Ibalik sa orihinal na laki", logout:"Mag-logout", whatsapp:"WhatsApp", lang_note:"Ang wikang pipiliin mo ay mananatili sa iyo sa buong app", or:"o", correct:"✓ Tama", wrong:"✗ Mali", no_answer:"⚠️ Walang sagot", the_answer:"Sagot", b1_level:"Antas B1", b2_level:"Antas B2", side_menu:"Side Menu", ai_correct:"✨ AI Check", trans_text:"Isalin ang Teksto", trans_task:"Isalin ang Gawain", show:"Ipakita", hide:"Itago", words_count:"Salita", locked:"Naka-lock", upgrade_pro:"Mag-upgrade sa Pro", trial_active:"Aktibong Libreng Pagsubok", trial_ended:"Tapos na ang Pagsubok", wa_upgrade_msg:"Kumusta, gusto kong mag-upgrade sa Pro para ma-unlock ang lahat ng aralin", admin_panel:"Admin Panel", notifications:"Mga Abiso", block:"I-block", unblock:"I-unblock", mark_paid:"Markahan bilang Bayad", mark_unpaid:"Markahan bilang Hindi Bayad", save:"I-save", cancel:"Kanselahin", users:"Mga Gumagamit", name:"Pangalan", code:"Code", status:"Katayuan", paid:"Bayad", blocked:"Naka-block", actions:"Mga Aksyon", send_notification:"Magpadala ng Abiso", title_ar:"Pamagat", message_ar:"Mensahe", no_notifications:"Wala pang abiso", unique_name_placeholder:"Natatanging Pangalan", unique_code_placeholder:"Natatanging Code", login_or_register:"Mag-login / Magrehistro", account_blocked:"Na-block ang iyong account", contact_support:"Makipag-ugnayan sa teknikal na suporta", please_wait:"Naglo-load...", results:"Mga Resulta", score:"Puntos", date:"Petsa", search_users:"Maghanap ng gumagamit...", delete_notif:"Burahin", confirm_delete_notif:"Sigurado ka bang gusto mong burahin ang abiso na ito?", sent_success:"Matagumpay na naipadala!", fill_all_fields:"Punan ang lahat ng field", sending:"Ipinapadala...", previous_notifs:"Mga Nakaraang Abiso", new_notif:"Magpadala ng Bagong Abiso", active:"Aktibo", inactive:"Hindi aktibo" },
  fa: { welcome:"خوش آمدید", choose_lang:"انتخاب زبان", home:"خانه", lesen:"خواندن", horen:"شنیدن", schreiben:"نوشتن", sprechen:"صحبت کردن", pruefung:"آزمون", exam_mode:"حالت آزمون", practice_mode:"حالت تمرین", banner_title:"برای آزمون واقعی تمرین کنید و آن را دریافت کنید!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"شناسه منحصر به فرد شما", login:"ورود", guest:"ورود به عنوان مهمان", support:"پشتیبانی فنی", start_now:"همین حالا شروع کنید", listen_lessons:"دروس شنیداری", search_placeholder:"جستجوی موضوع...", listen_title:"دروس شنیداری", listen_desc:"در اینجا تمام دروس شنیداری را پیدا خواهید کرد. برای شروع گوش دادن و پاسخ به سوالات روی دکمه کلیک کنید.", gap_num:"جای خالی", choose_word_gap:"کلمه را برای جای خالی انتخاب کنید", story_memo:"داستان برای حفظ کردن", check_btn:"بررسی", next_btn:"بعدی", back_btn:"بازگشت", reset_btn:"بازنشانی", coming_soon:"به زودی...", settings:"تنظیمات", change_lang:"تغییر زبان", text_size:"اندازه متن", reset_size:"بازگشت به اندازه اصلی", logout:"خروج", whatsapp:"واتساپ", lang_note:"زبانی که انتخاب می کنید در سراسر برنامه با شما خواهد بود", or:"یا", correct:"✓ درست", wrong:"✗ نادرست", no_answer:"⚠️ بدون پاسخ", the_answer:"پاسخ", b1_level:"سطح B1", b2_level:"سطح B2", side_menu:"منوی کناری", ai_correct:"✨ بررسی هوش مصنوعی", trans_text:"ترجمه متن", trans_task:"ترجمه وظیفه", show:"نمایش", hide:"پنهان کردن", words_count:"کلمه", locked:"قفل شده", upgrade_pro:"ارتقا به پرو", trial_active:"دوره آزمایشی رایگان فعال", trial_ended:"دوره آزمایشی به پایان رسید", wa_upgrade_msg:"سلام، می‌خواهم به پرو ارتقا پیدا کنم تا همه درس‌ها را باز کنم", admin_panel:"پنل مدیریت", notifications:"اعلان‌ها", block:"مسدود کردن", unblock:"رفع مسدودی", mark_paid:"علامت‌گذاری به عنوان پرداخت شده", mark_unpaid:"علامت‌گذاری به عنوان پرداخت نشده", save:"ذخیره", cancel:"لغو", users:"کاربران", name:"نام", code:"کد", status:"وضعیت", paid:"پرداخت شده", blocked:"مسدود شده", actions:"عملیات", send_notification:"ارسال اعلان", title_ar:"عنوان", message_ar:"پیام", no_notifications:"هنوز اعلانی وجود ندارد", unique_name_placeholder:"نام منحصر به فرد", unique_code_placeholder:"کد منحصر به فرد", login_or_register:"ورود / ثبت نام", account_blocked:"حساب شما مسدود شده است", contact_support:"با پشتیبانی فنی تماس بگیرید", please_wait:"در حال بارگذاری...", results:"نتایج", score:"امتیاز", date:"تاریخ", search_users:"جستجوی کاربران...", delete_notif:"حذف", confirm_delete_notif:"آیا مطمئن هستید که می‌خواهید این اعلان را حذف کنید؟", sent_success:"با موفقیت ارسال شد!", fill_all_fields:"لطفا همه فیلدها را پر کنید", sending:"در حال ارسال...", previous_notifs:"اعلان‌های قبلی", new_notif:"ارسال اعلان جدید", active:"فعال", inactive:"غیرفعال" },
  sw: { welcome:"Karibu", choose_lang:"Chagua lugha", home:"Nyumbani", lesen:"Kusoma", horen:"Kusikiliza", schreiben:"Kuandika", sprechen:"Kuzungumza", pruefung:"Mtihani", exam_mode:"Hali ya Mtihani", practice_mode:"Hali ya Mazoezi", banner_title:"Jizatiti kwa mtihani wa kweli na uupate!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Kitambulisho Chako cha Kipekee", login:"Ingia", guest:"Ingia kama Mgeni", support:"Msaada wa Kiufundi", start_now:"Anza Sasa", listen_lessons:"Masomo ya Kusikiliza", search_placeholder:"Tafuta mada...", listen_title:"Masomo ya Kusikiliza", listen_desc:"Hapa utapata masomo yote ya kusikiliza. Bofya kitufe ili kuanza kusikiliza na kujibu maswali.", gap_num:"Pengo", choose_word_gap:"Chagua neno kwa pengo", story_memo:"Hadithi ya kukumbuka", check_btn:"Angalia", next_btn:"Inayofuata", back_btn:"Rudi", reset_btn:"Weka upya", coming_soon:"Inakuja hivi karibuni...", settings:"Mipangilio", change_lang:"Badilisha Lugha", text_size:"Ukubwa wa Maandishi", reset_size:"Rudisha kwa ukubwa wa awali", logout:"Toka", whatsapp:"WhatsApp", lang_note:"Lugha unayochagua itabaki nawe katika programu yote", or:"au", correct:"✓ Sahihi", wrong:"✗ Makosa", no_answer:"⚠️ Hakuna jibu", the_answer:"Jibu", b1_level:"Kiwango B1", b2_level:"Kiwango B2", side_menu:"Menyu ya Pembeni", ai_correct:"✨ Ukaguzi wa AI", trans_text:"Tafsiri Maandishi", trans_task:"Tafsiri Kazi", show:"Onyesha", hide:"Ficha", words_count:"Neno", locked:"Imefungwa", upgrade_pro:"Pandisha hadhi hadi Pro", trial_active:"Jaribio la Bure Linatumika", trial_ended:"Jaribio Limeisha", wa_upgrade_msg:"Habari, nataka kupandisha hadhi hadi Pro ili kufungua masomo yote", admin_panel:"Paneli ya Msimamizi", notifications:"Arifa", block:"Zuia", unblock:"Fungua", mark_paid:"Weka alama kama Imelipwa", mark_unpaid:"Weka alama kama Haijalipwa", save:"Hifadhi", cancel:"Ghairi", users:"Watumiaji", name:"Jina", code:"Msimbo", status:"Hali", paid:"Imelipwa", blocked:"Imezuiwa", actions:"Vitendo", send_notification:"Tuma Arifa", title_ar:"Kichwa", message_ar:"Ujumbe", no_notifications:"Hakuna arifa bado", unique_name_placeholder:"Jina la Kipekee", unique_code_placeholder:"Msimbo wa Kipekee", login_or_register:"Ingia / Jisajili", account_blocked:"Akaunti yako imezuiwa", contact_support:"Wasiliana na msaada wa kiufundi", please_wait:"Inapakia...", results:"Matokeo", score:"Alama", date:"Tarehe", search_users:"Tafuta watumiaji...", delete_notif:"Futa", confirm_delete_notif:"Una uhakika unataka kufuta arifa hii?", sent_success:"Imetumwa kwa mafanikio!", fill_all_fields:"Tafadhali jaza sehemu zote", sending:"Inatuma...", previous_notifs:"Arifa za Awali", new_notif:"Tuma Arifa Mpya", active:"Inatumika", inactive:"Haifanyi kazi" },
  uz: { welcome:"Xush kelibsiz", choose_lang:"Tilni tanlang", home:"Bosh sahifa", lesen:"O'qish", horen:"Tinglash", schreiben:"Yozish", sprechen:"Gapirish", pruefung:"Imtihon", exam_mode:"Imtihon rejimi", practice_mode:"Mashq rejimi", banner_title:"Haqiqiy imtihonga tayyorlaning va uni oling!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"Sizning noyob ID-ingiz", login:"Kirish", guest:"Mehmon sifatida kirish", support:"Texnik yordam", start_now:"Hoziroq boshlang", listen_lessons:"Tinglash darslari", search_placeholder:"Mavzu qidirish...", listen_title:"Tinglash darslari", listen_desc:"Bu yerda barcha tinglash darslarini topasiz. Tinglashni boshlash va savollarga javob berish uchun tugmani bosing.", gap_num:"Bo'shliq", choose_word_gap:"Bo'shliq uchun so'zni tanlang", story_memo:"Yodlash uchun hikoya", check_btn:"Tekshirish", next_btn:"Keyingi", back_btn:"Orqaga", reset_btn:"Qayta tiklash", coming_soon:"Tez orada...", settings:"Sozlamalar", change_lang:"Tilni o'zgartirish", text_size:"Matn hajmi", reset_size:"Asl hajmga qaytarish", logout:"Chiqish", whatsapp:"WhatsApp", lang_note:"Siz tanlagan til butun ilova davomida siz bilan qoladi", or:"yoki", correct:"✓ To'g'ri", wrong:"✗ Noto'g'ri", no_answer:"⚠️ Javob yo'q", the_answer:"Javob", b1_level:"B1 darajasi", b2_level:"B2 darajasi", side_menu:"Yon menyu", ai_correct:"✨ AI tekshiruvi", trans_text:"Matnni tarjima qilish", trans_task:"Vazifani tarjima qilish", show:"Ko'rsatish", hide:"Yashirish", words_count:"So'z", locked:"Qulflangan", upgrade_pro:"Pro-ga o'tish", trial_active:"Bepul sinov faol", trial_ended:"Sinov tugadi", wa_upgrade_msg:"Salom, barcha darslarni ochish uchun Pro-ga o'tmoqchiman", admin_panel:"Admin paneli", notifications:"Bildirishnomalar", block:"Bloklash", unblock:"Blokdan chiqarish", mark_paid:"To'langan deb belgilash", mark_unpaid:"To'lanmagan deb belgilash", save:"Saqlash", cancel:"Bekor qilish", users:"Foydalanuvchilar", name:"Ism", code:"Kod", status:"Holat", paid:"To'langan", blocked:"Bloklangan", actions:"Amallar", send_notification:"Bildirishnoma yuborish", title_ar:"Sarlavha", message_ar:"Xabar", no_notifications:"Hozircha bildirishnomalar yo'q", unique_name_placeholder:"Noyob ism", unique_code_placeholder:"Noyob kod", login_or_register:"Kirish / Ro'yxatdan o'tish", account_blocked:"Hisobingiz bloklangan", contact_support:"Texnik yordam bilan bog'laning", please_wait:"Yuklanmoqda...", results:"Natijalar", score:"Ball", date:"Sana", search_users:"Foydalanuvchilarni qidirish...", delete_notif:"O'chirish", confirm_delete_notif:"Bu bildirishnomani o'chirishni xohlaysizmi?", sent_success:"Muvaffaqiyatli yuborildi!", fill_all_fields:"Barcha maydonlarni to'ldiring", sending:"Yuborilmoqda...", previous_notifs:"Oldingi bildirishnomalar", new_notif:"Yangi bildirishnoma yuborish", active:"Faol", inactive:"Faol emas" },
  ne: { welcome:"स्वागत छ", choose_lang:"भाषा छान्नुहोस्", home:"गृहपृष्ठ", lesen:"पढ्ने", horen:"सुन्ने", schreiben:"लेख्ने", sprechen:"बोल्ने", pruefung:"परीक्षा", exam_mode:"परीक्षा मोड", practice_mode:"अभ्यास मोड", banner_title:"वास्तविक परीक्षाको लागि अभ्यास गर्नुहोस् र प्राप्त गर्नुहोस्!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"तपाईंको अद्वितीय आईडी", login:"लगइन", guest:"अतिथिको रूपमा प्रवेश", support:"प्राविधिक सहयोग", start_now:"अहिले सुरु गर्नुहोस्", listen_lessons:"सुन्ने पाठहरू", search_placeholder:"विषय खोज्नुहोस्...", listen_title:"सुन्ने पाठहरू", listen_desc:"यहाँ तपाईंले सबै सुन्ने पाठहरू फेला पार्नुहुनेछ। सुन्न सुरु गर्न र प्रश्नहरूको जवाफ दिन बटन क्लिक गर्नुहोस्।", gap_num:"खाली ठाउँ", choose_word_gap:"खाली ठाउँको लागि शब्द छान्नुहोस्", story_memo:"सम्झनको लागि कथा", check_btn:"जाँच गर्नुहोस्", next_btn:"अर्को", back_btn:"पछाडि", reset_btn:"रिसेट गर्नुहोस्", coming_soon:"चाँडै आउँदैछ...", settings:"सेटिङहरू", change_lang:"भाषा परिवर्तन गर्नुहोस्", text_size:"पाठको आकार", reset_size:"मूल आकारमा फर्काउनुहोस्", logout:"लगआउट", whatsapp:"WhatsApp", lang_note:"तपाईंले छान्नुभएको भाषा सम्पूर्ण एपमा तपाईंसँग रहनेछ", or:"वा", correct:"✓ सही", wrong:"✗ गलत", no_answer:"⚠️ जवाफ छैन", the_answer:"जवाफ", b1_level:"स्तर B1", b2_level:"स्तर B2", side_menu:"साइड मेनु", ai_correct:"✨ AI जाँच", trans_text:"पाठ अनुवाद गर्नुहोस्", trans_task:"कार्य अनुवाद गर्नुहोस्", show:"देखाउनुहोस्", hide:"लुकाउनुहोस्", words_count:"शब्द", locked:"लक गरिएको", upgrade_pro:"प्रो मा अपग्रेड गर्नुहोस्", trial_active:"नि:शुल्क परीक्षण सक्रिय", trial_ended:"परीक्षण समाप्त भयो", wa_upgrade_msg:"नमस्ते, सबै पाठहरू अनलक गर्न म प्रो मा अपग्रेड गर्न चाहन्छु", admin_panel:"एडमिन प्यानल", notifications:"सूचनाहरू", block:"ब्लक गर्नुहोस्", unblock:"अनब्लक गर्नुहोस्", mark_paid:"भुक्तानी भएको चिन्ह लगाउनुहोस्", mark_unpaid:"भुक्तानी नभएको चिन्ह लगाउनुहोस्", save:"सुरक्षित गर्नुहोस्", cancel:"रद्द गर्नुहोस्", users:"प्रयोगकर्ताहरू", name:"नाम", code:"कोड", status:"स्थिति", paid:"भुक्तानी भयो", blocked:"ब्लक गरिएको", actions:"कार्यहरू", send_notification:"सूचना पठाउनुहोस्", title_ar:"शीर्षक", message_ar:"सन्देश", no_notifications:"अहिलेसम्म कुनै सूचना छैन", unique_name_placeholder:"अद्वितीय नाम", unique_code_placeholder:"अद्वितीय कोड", login_or_register:"लगइन / दर्ता", account_blocked:"तपाईंको खाता ब्लक गरिएको छ", contact_support:"प्राविधिक सहयोगमा सम्पर्क गर्नुहोस्", please_wait:"लोड हुँदैछ...", results:"नतिजाहरू", score:"अंक", date:"मिति", search_users:"प्रयोगकर्ताहरू खोज्नुहोस्...", delete_notif:"मेटाउनुहोस्", confirm_delete_notif:"के तपाईं यो सूचना मेटाउन निश्चित हुनुहुन्छ?", sent_success:"सफलतापूर्वक पठाइयो!", fill_all_fields:"कृपया सबै फिल्डहरू भर्नुहोस्", sending:"पठाउँदै...", previous_notifs:"अघिल्लो सूचनाहरू", new_notif:"नयाँ सूचना पठाउनुहोस्", active:"सक्रिय", inactive:"निष्क्रिय" },
  hi: { welcome:"स्वागत है", choose_lang:"भाषा चुनें", home:"होम", lesen:"पढ़ना", horen:"सुनना", schreiben:"लिखना", sprechen:"बोलना", pruefung:"परीक्षा", exam_mode:"परीक्षा मोड", practice_mode:"अभ्यास मोड", banner_title:"असली परीक्षा के लिए अभ्यास करें और इसे प्राप्त करें!", banner_sub:"Trainiere für die echte Prüfung und hol sie dir!", id_placeholder:"आपकी अनूठी आईडी", login:"लॉगिन करें", guest:"अतिथि के रूप में प्रवेश", support:"तकनीकी सहायता", start_now:"अब शुरू करें", listen_lessons:"सुनने के पाठ", search_placeholder:"विषय खोजें...", listen_title:"सुनने के पाठ", listen_desc:"यहां आपको सभी सुनने के पाठ मिलेंगे। सुनना शुरू करने और सवालों के जवाब देने के लिए बटन दबाएं।", gap_num:"रिक्त स्थान", choose_word_gap:"रिक्त स्थान के लिए शब्द चुनें", story_memo:"याद रखने के लिए कहानी", check_btn:"जांचें", next_btn:"अगला", back_btn:"वापस", reset_btn:"रीसेट", coming_soon:"जल्द आ रहा है...", settings:"सेटिंग्स", change_lang:"भाषा बदलें", text_size:"पाठ का आकार", reset_size:"मूल आकार पर लौटें", logout:"लॉग आउट", whatsapp:"व्हाट्सएप", lang_note:"आपके द्वारा चुनी गई भाषा पूरे ऐप में रहेगी", or:"या", correct:"✓ सही", wrong:"✗ गलत", no_answer:"⚠️ उत्तर नहीं दिया", the_answer:"उत्तर", b1_level:"स्तर B1", b2_level:"स्तर B2", side_menu:"साइड मेनू", ai_correct:"✨ AI जाँच", trans_text:"पाठ अनुवाद", trans_task:"कार्य अनुवाद", show:"दिखाएं", hide:"छिपाएं", words_count:"शब्द", locked:"बंद", upgrade_pro:"Pro में अपग्रेड करें", trial_active:"मुफ़्त परीक्षण सक्रिय", trial_ended:"परीक्षण समाप्त", wa_upgrade_msg:"नमस्ते, मैं सभी पाठों को अनलॉक करने के लिए Pro में अपग्रेड करना चाहता हूं", admin_panel:"एडमिन पैनल", notifications:"सूचनाएं", block:"ब्लॉक", unblock:"अनब्लॉक", mark_paid:"भुगतान के रूप में चिह्नित करें", mark_unpaid:"अवैतनिक के रूप में चिह्नित करें", save:"सहेजें", cancel:"रद्द करें", users:"उपयोगकर्ता", name:"नाम", code:"कोड", status:"स्थिति", paid:"भुगतान किया", blocked:"अवरुद्ध", actions:"कार्रवाई", send_notification:"सूचना भेजें", title_ar:"शीर्षक", message_ar:"संदेश", no_notifications:"अभी तक कोई सूचना नहीं", unique_name_placeholder:"अद्वितीय नाम", unique_code_placeholder:"अद्वितीय कोड", login_or_register:"लॉगिन / रजिस्टर", account_blocked:"आपका खाता ब्लॉक कर दिया गया है", contact_support:"तकनीकी सहायता से संपर्क करें", please_wait:"लोड हो रहा है...", results:"परिणाम", score:"स्कोर", date:"तारीख", search_users:"उपयोगकर्ता खोजें...", delete_notif:"हटाएं", confirm_delete_notif:"क्या आप वाकई इस सूचना को हटाना चाहते हैं?", sent_success:"सफलतापूर्वक भेजा गया!", fill_all_fields:"कृपया सभी फ़ील्ड भरें", sending:"भेज रहा है...", previous_notifs:"पिछली सूचनाएं", new_notif:"नई सूचना भेजें", active:"सक्रिय", inactive:"निष्क्रिय" }
};

var t = (key, lang) => (UI_TEXTS[lang] && UI_TEXTS[lang][key]) || UI_TEXTS.en[key] || key;

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
  {
    id: "sch3", title: "TIKKI TAKKA - Beschwerde", level: "B2",
    text: `Das Party-Abenteuer für Kinder!\nErleben Sie spannende Kinder-Partys mit TIKKI TAKKA!\n\n• Abenteuerliche Spiele und lustige Party-Animation\n• Spaßige Schatzsuchen & spannende Entdeckungsreisen\n• Zauberer, Clowns & Kinderschminken\n• Tolle Party-Pakete für unvergessliche Erlebnisse\nTOLLE AKTIONSPREISE!\n\nAbenteuer TIKKI TAKKA\nBirkenweg 5, 12345 Beispielstadt\nwww.tikki-takka.de\n+49 1234 567890\n\nSie haben bei der Firma Abenteuer TIKKI TAKKA eine Schatzsuche für den Geburtstag Ihres Kindes gebucht. Trotz günstiger Preise war die Geburtstagsfeier nicht so schön wie erwartet und Sie sind nicht damit zufrieden. Schreiben Sie eine Beschwerde und gehen Sie dabei auf die genannten Punkte ein.`,
    transText: {
      ar: `مغامرة الحفلات للأطفال!\nاستمتعوا بحفلات الأطفال المثيرة مع TIKKI TAKKA!\n\n• ألعاب مغامرات وأنشطة حفلات ممتعة\n• بحث عن الكنز ورحلات اكتشاف مثيرة\n• سحرة، مهرجون وتزيين وجه الأطفال\n• باقات حفلات رائعة لتجارب لا تُنسى\nأسعار رائعة!\n\nمغامرة TIKKI TAKKA\nطريق بيركن 5، 12345 مدينة المثال\nwww.tikki-takka.de\n+49 1234 567890\n\nلقد حجزتم في شركة مغامرة TIKKI TAKKA بحثًا عن الكنز بمناسبة عيد ميلاد طفلكم. على الرغم من الأسعار المعقولة، إلا أن حفلة عيد الميلاد لم تكن كما هو متوقع ولم تكونوا راضين عنها. اكتبوا شكوى واذكروا النقاط المذكورة.`,
      ma: `مغامرة الحفلات للدراري!\nاستمتعو بحفلات الدراري المثيرة مع TIKKI TAKKA!\n\n• ألعاب مغامرات وأنشطة حفلات ممتعة\n• بحث على الكنز ورحلات اكتشاف مثيرة\n• سحرة، مهرجين وتزيين وجه الدراري\n• باقات حفلات زوينة لتجارب ما تتنساش\nأثمنة زوينة!\n\nمغامرة TIKKI TAKKA\nطريق بيركن 5، 12345 مدينة المثال\nwww.tikki-takka.de\n+49 1234 567890\n\nحجزتو فشركة مغامرة TIKKI TAKKA بحث على الكنز بمناسبة عيد ميلاد ولدكم. رغم الأثمنة المعقولة، ولكن حفلة عيد الميلاد ما كانتش بحال ما كنتو متوقعين وما كنتوش راضيين عليها. كتبو شكوى وذكرو النقط المذكورة.`,
      en: `The party adventure for children!\nExperience exciting children's parties with TIKKI TAKKA!\n\n• Adventurous games and fun party animation\n• Fun treasure hunts & exciting discovery trips\n• Magicians, clowns & face painting\n• Great party packages for unforgettable experiences\nGREAT PROMOTIONAL PRICES!\n\nAbenteuer TIKKI TAKKA\nBirkenweg 5, 12345 Beispielstadt\nwww.tikki-takka.de\n+49 1234 567890\n\nYou booked a treasure hunt for your child's birthday at the company Abenteuer TIKKI TAKKA. Despite reasonable prices, the birthday party was not as nice as expected and you are not satisfied with it. Write a complaint and address the mentioned points.`,
      fr: `L'aventure de fête pour les enfants !\nVivez des fêtes d'enfants passionnantes avec TIKKI TAKKA !\n\n• Jeux aventureux et animation de fête amusante\n• Chasses au trésor amusantes et voyages de découverte passionnants\n• Magiciens, clowns et maquillage pour enfants\n• Superbes forfaits de fête pour des expériences inoubliables\nSUPER PRIX PROMOTIONNELS !\n\nAbenteuer TIKKI TAKKA\nBirkenweg 5, 12345 Beispielstadt\nwww.tikki-takka.de\n+49 1234 567890\n\nVous avez réservé une chasse au trésor pour l'anniversaire de votre enfant auprès de la société Abenteuer TIKKI TAKKA. Malgré des prix raisonnables, la fête d'anniversaire n'était pas aussi belle que prévu et vous n'en êtes pas satisfait. Rédigez une réclamation et abordez les points mentionnés.`,
      hi: `बच्चों के लिए पार्टी साहसिक कार्य!\nTIKKI TAKKA के साथ रोमांचक बच्चों की पार्टियों का अनुभव करें!\n\n• साहसिक खेल और मजेदार पार्टी एनिमेशन\n• मजेदार खजाने की खोज और रोमांचक खोज यात्राएं\n• जादूगर, जोकर और चेहरे की पेंटिंग\n• अविस्मरणीय अनुभवों के लिए बेहतरीन पार्टी पैकेज\nशानदार प्रोत्साहन मूल्य!\n\nAbenteuer TIKKI TAKKA\nBirkenweg 5, 12345 Beispielstadt\nwww.tikki-takka.de\n+49 1234 567890\n\nआपने कंपनी Abenteuer TIKKI TAKKA में अपने बच्चे के जन्मदिन के लिए खजाने की खोज बुक की है। उचित कीमतों के बावजूद, जन्मदिन की पार्टी उम्मीद के मुताबिक अच्छी नहीं थी और आप इससे संतुष्ट नहीं हैं। एक शिकायत लिखें और उल्लिखित बिंदुओं को संबोधित करें।`
    },
    task: "Schreiben Sie eine Antwort. Behandeln Sie folgende Punkte:",
    transTask: { ar: "اكتب شكوى واذكر النقاط المذكورة:", ma: "كتبو شكوى وذكرو النقط المذكورة:", en: "Write a complaint and address the mentioned points:", fr: "Rédigez une réclamation et abordez les points mentionnés :", hi: "एक शिकायत लिखें और उल्लिखित बिंदुओं को संबोधित करें:" },
    points: ["Mit welchem Angebot waren Sie nicht zufrieden?", "Erklären Sie, warum das Angebot nicht begeistert hat.", "Vorschläge für Verbesserungen: Was könnte TIKKI TAKKA Ihrer Meinung nach besser machen?"],
    transPoints: {
      ar: ["(1) أشمن عرض ما كنتوش راضيين عليه؟", "(2) شرحوا علاش العرض ما عجبكمش.", "(3) اقتراحات للتحسين: شنو تقدر TIKKI TAKKA دير حسن فحالكم؟"],
      ma: ["(1) أشمن عرض ما كنتوش راضيين عليه؟", "(2) شرحوا علاش العرض ما عجبكمش.", "(3) اقتراحات للتحسين: شنو تقدر TIKKI TAKKA دير حسن فحالكم؟"],
      en: ["(1) Which offer were you not satisfied with?", "(2) Explain why the offer did not inspire enthusiasm.", "(3) Suggestions for improvement: What could TIKKI TAKKA do better in your opinion?"],
      fr: ["(1) De quelle offre n'étiez-vous pas satisfait ?", "(2) Expliquez pourquoi l'offre n'a pas suscité l'enthousiasme.", "(3) Suggestions d'amélioration : Que pourrait faire TIKKI TAKKA de mieux selon vous ?"],
      hi: ["(1) आप किस ऑफर से संतुष्ट नहीं थे?", "(2) समझाएं कि ऑफर ने उत्साह क्यों नहीं दिया।", "(3) सुधार के लिए सुझाव: आपकी राय में TIKKI TAKKA क्या बेहतर कर सकता था?"]
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
    title,
    level: "B1",
    isPremium: true,
    text: "", task: "", points: [], transText: {}, transTask: {}, transPoints: {}
  }))
];
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
    transText: {
      ar: "تعيش ريتا منذ سنوات عديدة في كولونيا. تعمل بائعة، لكنها تريد بدء مهنة في التسويق. لذلك تقوم بتدريب في وكالة. تعمل هناك يومين في الأسبوع وتتعلم شيئاً جديداً كل يوم. حلمها الأكبر هو إدارة وكالة إعلانات خاصة بها. إنها متحمسة جداً ومتفائلة بمستقبلها المهني.",
      ma: "ريتا كتعيش من بزاف ديال السنين ف كولونيا. كتخدم بائعة، ولكن باغية تبدا مهنة ف التسويق. داكشي علاش كتدير تدريب ف وكالة. كتخدم تما جوج أيام ف السيمانة وكتتعلم شي حاجة جديدة كل يوم. أكبر حلم ديالها هو أنها تدير وكالة إعلانات ديالها. هي متحمسة بزاف وفرحانة بالمستقبل المهني ديالها.",
      en: "Rita has lived in Cologne for many years. She works as a saleswoman, but she wants to start a career in marketing. That's why she is doing an internship at an agency. She works there two days a week and learns something new every day. Her greatest dream is to run her own advertising agency. She is very motivated and happy about her professional future.",
      fr: "Rita vit à Cologne depuis de nombreuses années. Elle travaille comme vendeuse, mais elle souhaite commencer une carrière dans le marketing. C'est pourquoi elle fait un stage dans une agence. Elle y travaille deux jours par semaine et apprend quelque chose de nouveau chaque jour. Son plus grand rêve est de diriger sa propre agence de publicité. Elle est très motivée et se réjouit de son avenir professionnel."
    },
    items: [
      { n: 1, c: "seit", opts: ["seit", "vor", "für"], exp: "'seit' + Dativ للتعبير عن مدة مستمرة حتى الآن (تعيش منذ سنوات)." },
      { n: 2, c: "mit", opts: ["mit", "auf", "an"], exp: "'beginnen mit' + Dativ، فعل ثابت مع حرف الجر 'mit'." },
      { n: 3, c: "ein", opts: ["ein", "einen", "einem"], exp: "'Praktikum' محايد (das Praktikum)، في Akkusativ → ein Praktikum." },
      { n: 4, c: "eine", opts: ["eine", "einen", "einer"], exp: "'Werbeagentur' مؤنث (die)، في Akkusativ → eine Werbeagentur." },
      { n: 5, c: "auf", opts: ["auf", "über", "an"], exp: "'sich freuen auf' + Akkusativ للمستقبل (تتطلع للمستقبل المهني)." }
    ]
  },
  {
    id: "rita-sp2", title: "Rita", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: false,
    text: "Rita hat .....(1)..... einem Jahr mit dem Malen angefangen. Am Anfang war sie nicht sehr gut, aber jetzt malt sie .....(2)..... Wochenende. Sie hat .....(3)..... ihrer Freundin einen Malkurs geschenkt bekommen. Der Kurs findet .....(4)..... Mittwochabend statt. Rita freut sich sehr .....(5)..... den Kurs.",
    transText: {
      ar: "بدأت ريتا بالرسم منذ عام. في البداية لم تكن جيدة جداً، لكنها الآن ترسم في عطلة نهاية الأسبوع. تلقت دورة رسم كهدية من صديقتها. تُعقد الدورة مساء كل أربعاء. ريتا سعيدة جداً بالدورة.",
      ma: "ريتا بدات بالرسم من عام. ف البداية ما كانتش مزيانة بزاف، ولكن دابا كترسم ف نهاية السيمانة. تلقت دورة الرسم كهدية من صحابتها. الدورة كتدار كل أربعاء ف العشية. ريتا فرحانة بزاف بالدورة.",
      en: "Rita started painting a year ago. At first she wasn't very good, but now she paints at the weekend. She received a painting course as a gift from her friend. The course takes place every Wednesday evening. Rita is very happy about the course.",
      fr: "Rita a commencé à peindre il y a un an. Au début, elle n'était pas très douée, mais maintenant elle peint le week-end. Elle a reçu un cours de peinture en cadeau de son amie. Le cours a lieu tous les mercredis soir. Rita est très contente du cours."
    },
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
    transText: {
      ar: "تعمل كارولين معلمة في مدرسة ابتدائية. تعيش مع عائلتها في منزل صغير. في وقت فراغها تحب الطبخ كثيراً. تعلمت العديد من الوصفات من جدتها. يوم الأحد ستأتي أختها للزيارة. كارولين تتطلع للقاء العائلي. تريد خبز فطيرة تفاح مع أطفالها.",
      ma: "كارولين كتخدم أستاذة ف مدرسة ابتدائية. كتعيش مع العائلة ديالها ف دار صغيرة. ف وقت الفراغ ديالها كتحب تطيب بزاف. تعلمت بزاف ديال الوصفات من جدتها. نهار الأحد غادي تجي أختها للزيارة. كارولين كتطلع للقاء العائلي. باغية تطيب تارت التفاح مع ولادها.",
      en: "Caroline works as a teacher at a primary school. She lives with her family in a small house. In her free time she loves to cook. She learned many recipes from her grandmother. On Sunday her sister is coming to visit. Caroline is looking forward to the family reunion. She wants to bake an apple pie with her children.",
      fr: "Caroline travaille comme enseignante dans une école primaire. Elle vit avec sa famille dans une petite maison. Pendant son temps libre, elle adore cuisiner. Elle a appris de nombreuses recettes de sa grand-mère. Dimanche, sa sœur vient en visite. Caroline attend avec impatience la réunion de famille. Elle veut préparer une tarte aux pommes avec ses enfants."
    },
    items: [
      { n: 1, c: "als", opts: ["als", "wie", "für"], exp: "'als' + اسم مهنة بدون أداة، للتعبير عن المهنة (arbeiten als Lehrerin)." },
      { n: 2, c: "mit", opts: ["mit", "bei", "zu"], exp: "'mit' + Dativ للتعبير عن السكن مع شخص (wohnen mit ihrer Familie)." },
      { n: 3, c: "von", opts: ["von", "bei", "aus"], exp: "'lernen von' + Dativ، تعلم شيئاً من شخص." },
      { n: 4, c: "auf", opts: ["auf", "über", "an"], exp: "'sich freuen auf' + Akkusativ للمستقبل (تتطلع لحدث قادم)." },
      { n: 5, c: "mit", opts: ["mit", "bei", "zu"], exp: "'mit' + Dativ للتعبير عن المشاركة (فعل شيء مع شخص)." }
    ]
  },
  {
    id: "caroline-sp2", title: "Caroline", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: false,
    text: "Caroline hat viele Rezepte .....(1)..... ihrer Großmutter gelernt. Jedes Jahr .....(2)..... Weihnachten backt sie besondere Kekse. Ihre Kinder helfen ihr oft .....(3)..... der Küche. Sie hat .....(4)..... ein kleines Kochbuch mit Familienrezepten geschrieben. Es liegt .....(5)..... dem Küchentisch.",
    transText: {
      ar: "تعلمت كارولين العديد من الوصفات من جدتها. كل عام في عيد الميلاد تخبز بسكويت خاص. غالباً ما يساعدها أطفالها في المطبخ. لقد كتبت كتاب طبخ صغير بوصفات العائلة. إنه موضوع على طاولة المطبخ.",
      ma: "كارولين تعلمت بزاف ديال الوصفات من جدتها. كل عام ف عيد الميلاد كتطيب بسكويت خاص. ولادها بزاف ديال المرات كيعاونوها ف الكوزينة. كتبت كتاب طبخ صغير بوصفات العائلة. راه موضوع على طبلة الكوزينة.",
      en: "Caroline learned many recipes from her grandmother. Every year at Christmas she bakes special cookies. Her children often help her in the kitchen. She has written a small cookbook with family recipes. It lies on the kitchen table.",
      fr: "Caroline a appris de nombreuses recettes de sa grand-mère. Chaque année à Noël, elle prépare des biscuits spéciaux. Ses enfants l'aident souvent dans la cuisine. Elle a écrit un petit livre de cuisine avec des recettes de famille. Il se trouve sur la table de la cuisine."
    },
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
  { id: "vera-sp2", title: "Vera", level: "B1", sub: "Sprach 2", type: "sprach2", isPremium: true },
  ...(() => {
    const LESSONS = [
      { title: "Eva", slug: "eva" }, { title: "Paul", slug: "paul" }, { title: "Iris", slug: "iris" },
      { title: "Jan", slug: "jan" }, { title: "Miroslav", slug: "miroslav" }, { title: "Andreas 1", slug: "andreas1" },
      { title: "Annika 2", slug: "annika2" }, { title: "Sonja", slug: "sonja" }, { title: "Nadja / Claudia", slug: "nadjaclaudia" },
      { title: "Karla", slug: "karla" }, { title: "Viktor", slug: "viktor" }, { title: "Moritz", slug: "moritz" },
      { title: "Corina", slug: "corina" }, { title: "Petra", slug: "petra" }, { title: "Tamara / Jakob", slug: "tamarajakob" },
      { title: "Nicole", slug: "nicole" }, { title: "Andreas 2", slug: "andreas2" }, { title: "Thomas / Anna", slug: "thomasanna" },
      { title: "Sophie", slug: "sophie" }, { title: "Alicia", slug: "alicia" }, { title: "Annika 1", slug: "annika1" },
      { title: "Jennifer", slug: "jennifer" }, { title: "Mara", slug: "mara" }, { title: "Miroslav 2", slug: "miroslav2" }
    ];
    const PARTS = [
      { sub: "Teile 1", type: "headings", suf: "t1" }, { sub: "Teile 2", type: "mcq", suf: "t2" },
      { sub: "Teile 3", type: "matching", suf: "t3" }, { sub: "Sprach 1", type: "sprach1", suf: "sp1" },
      { sub: "Sprach 2", type: "sprach2", suf: "sp2" }
    ];
    return LESSONS.flatMap(l => PARTS.map(p => ({ id: `${l.slug}-${p.suf}`, title: l.title, level: "B1", sub: p.sub, type: p.type, isPremium: true })));
  })()
];
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


