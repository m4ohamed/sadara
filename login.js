// تعريف اسم المستخدم وكلمة المرور الخاصين بالموظف والمشرف
const employeeUsername = 'employee';
const employeePassword = 'employee';

const adminUsername = 'admin';
const adminPassword = 'admin';

// الحصول على العناصر المطلوبة من الصفحة
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const loginButton = document.getElementById('loginButton');

// إضافة مستمع للحدث على زر تسجيل الدخول
loginButton.addEventListener('click', () => {
    // الحصول على قيمة اسم المستخدم وكلمة المرور من الحقول
    const username = usernameInput.value;
    const password = passwordInput.value;

    // التحقق مما إذا كانت القيم مطابقة للموظف
    if (username === employeeUsername && password === employeePassword) {
        // إعادة توجيه المستخدم إلى صفحة الموظف
        window.location.href = 'employee_dashboard.html';
    }
    // التحقق مما إذا كانت القيم مطابقة للمشرف
    else if (username === adminUsername && password === adminPassword) {
        // إعادة توجيه المستخدم إلى صفحة الإدارة
        window.location.href = 'admin_dashboard.html';
    } else {
        // عرض رسالة الخطأ في حالة عدم تطابق المستخدم
        errorMessage.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة.';
    }
});
