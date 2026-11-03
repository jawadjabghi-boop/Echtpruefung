// ==========================================
// security.js — ملف الحماية الأساسي
// كيمنع الكليك اليمين، اختصارات المطورين، والنسخ
// ==========================================

// 1. منع الكليك اليمين (Context Menu) فكاع التطبيق
document.addEventListener('contextmenu', event => event.preventDefault());

// 2. منع اختصارات لوحة المفاتيح (F12, Ctrl+Shift+I, Ctrl+U, إلخ)
document.addEventListener('keydown', (event) => {
    // منع F12
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
        return false;
    }
    // منع Ctrl+Shift+I (أدوات المطورين)
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i' || event.keyCode === 73)) {
        event.preventDefault();
        return false;
    }
    // منع Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && (event.key === 'J' || event.key === 'j' || event.keyCode === 74)) {
        event.preventDefault();
        return false;
    }
    // منع Ctrl+U (عرض الكود المصدري)
    if (event.ctrlKey && (event.key === 'U' || event.key === 'u' || event.keyCode === 85)) {
        event.preventDefault();
        return false;
    }
    // منع Ctrl+S (حفظ الصفحة)
    if (event.ctrlKey && (event.key === 'S' || event.key === 's' || event.keyCode === 83)) {
        event.preventDefault();
        return false;
    }
});

// 3. منع سحب وإفلات العناصر (Drag and Drop)
document.addEventListener('dragstart', event => event.preventDefault());

// 4. منع النسخ (Copy) إلا فـ بلاصات معينة بحال (textarea ديال الكتابة)
document.addEventListener('copy', (event) => {
    // واش المستخدم واقف فـ textarea ولا input؟ (باش يقدرو ينسخو اللي كتبو)
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'INPUT') {
        return; // خليه ينسخ عادي
    }
    event.preventDefault(); // إلا كان كيحاول ينسخ نص من التطبيق، منعو
});

// 5. منع التحديد (Selection) ديال النص فكاع التطبيق (اختياري ولكن كيزيد فالحماية)
// *ملاحظة: هادشي كيقدر يزعف المستخدمين حيت ما يقدروش يحددو النصوص باش يترجموها،
// إلا بغيتي تخليه، حيد الـ // من السطرين اللي لتحت.
/*
const style = document.createElement('style');
style.innerHTML = `* { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } textarea, input { user-select: text !important; }`;
document.head.appendChild(style);
*/

// 6. رسالة تحذيرية فـ Console ديال المتصفح
console.log("%c⛔ وقف!", "color: red; font-size: 40px; font-weight: bold;");
console.log("%cهاد البلاصة مخصصة للمبرمجين. إلا كنتي كتحاول تسرق الكود، راه ماغاديش تربح والو.", "color: #FFCE00; font-size: 16px; font-weight: bold;");
