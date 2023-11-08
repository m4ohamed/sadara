// تعريف اسم المستخدم وكلمة المرور الخاصين بالمشرف
const adminUsername = 'admin';
const adminPassword = 'admin';

// الحصول على العناصر المطلوبة من الصفحة
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

// إضافة مستمع للحدث على زر تسجيل الدخول
loginButton.addEventListener('click', () => {
    // الحصول على قيمة اسم المستخدم وكلمة المرور من الحقول
    const username = usernameInput.value;
    const password = passwordInput.value;

    // التحقق مما إذا كانت القيم مطابقة للمشرف
    if (username === adminUsername && password === adminPassword) {
        // إعادة توجيه المستخدم إلى صفحة الإدارة
        window.location.href = 'admin.html';
    } else {
        // إعادة توجيه المستخدم إلى صفحة السجل
        window.location.href = 'log.html';
    }
});
