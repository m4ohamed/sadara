const adminUsername = 'admin'; // قم بتغيير اسم المستخدم الخاص بالمشرف
const adminPassword = '665544400'; // قم بتغيير كلمة المرور الخاصة بالمشرف
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const employeeInfo = document.querySelector('.employee-info');
const checkInButton = document.getElementById('checkInButton');
const checkOutButton = document.getElementById('checkOutButton');
const newEmployeeInput = document.getElementById('newEmployee');
const newEmployeePasswordInput = document.getElementById('newEmployeePassword');
const addEmployeeButton = document.getElementById('addEmployeeButton');
const adminPanel = document.querySelector('.admin-panel');
const reportPanel = document.querySelector('.report-panel');
const report = document.getElementById('report');
const logList = document.getElementById('logList');
const adminLogoutButton = document.getElementById('adminLogoutButton');

let loggedInUser = null;

// التحقق مما إذا كان المستخدم الحالي هو مشرف
function isAdmin() {
    return loggedInUser === adminUsername;
}

// عرض لوحة الإدارة بعد تسجيل الدخول للمشرف
function showAdminPanel() {
    if (isAdmin()) {
        adminPanel.style.display = 'block';
    } else {
        adminPanel.style.display = 'none';
    }
}

// وظيفة التعامل مع تسجيل الخروج للمشرف
function adminLogout() {
    loggedInUser = null;
    showAdminPanel();
    adminLogoutButton.style.display = 'none';
    reportPanel.style.display = 'none';
    loginButton.style.display = 'block';
    // تحويل المستخدم إلى صفحة تسجيل الدخول بعد تسجيل الخروج
    window.location = 'index.html';
}

loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === adminUsername && password === adminPassword) {
        loggedInUser = username;
        usernameInput.value = '';
        passwordInput.value = '';
        showAdminPanel();
        adminLogoutButton.style.display = 'block';
        loginButton.style.display = 'none';
        // تحويل المستخدم إلى صفحة الإدارة بعد تسجيل الدخول بنجاح
        window.location = 'admin.html';
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
});

// إضافة مستخدم جديد
addEmployeeButton.addEventListener('click', () => {
    if (isAdmin()) {
        const newEmployeeName = newEmployeeInput.value;
        const newEmployeePassword = newEmployeePasswordInput.value;
        if (newEmployeeName && newEmployeePassword) {
            // إضافة مستخدم جديد
            employees.push(newEmployeeName);
            // يمكنك تخزين كلمات المرور للمستخدمين في هيكل بيانات منفصل
            // في هذا المثال، نضيفها إلى الهيكل بيانات الحضور والانصراف
            checkInOutData[newEmployeeName] = [];
            newEmployeeInput.value = '';
            newEmployeePasswordInput.value = '';
        }
    }
});

// تسجيل الحضور
checkInButton.addEventListener('click', () => {
    logEvent('تسجيل الحضور', loggedInUser);
});

// تسجيل الانصراف
checkOutButton.addEventListener('click', () => {
    logEvent('تسجيل الانصراف', loggedInUser);
});

// دالة لتسجيل الأحداث
function logEvent(eventType, employeeName) {
    const currentTime = new Date().toLocaleString();
    const logEntry = `${eventType} - ${employeeName} - ${currentTime}`;

    const li = document.createElement('li');
    li.textContent = logEntry;

    logList.appendChild(li);
}

// زر توليد التقرير
generateReportButton.addEventListener('click', () => {
    if (isAdmin()) {
        const reportText = generateReport();
        report.textContent = reportText;
        reportPanel.style.display = 'block';
    }
});

// دالة لإنشاء التقرير
function generateReport() {
    let reportText = 'تقرير تسجيل الحضور والانصراف:\n';

    for (const employee of employees) {
        const checkIns = checkInOutData[employee] || [];

        reportText += `\n${employee}:\n`;

        if (checkIns.length === 0) {
            reportText += '  - لا تسجيلات حضور أو انصراف\n';
        } else {
            for (const checkIn of checkIns) {
                reportText += `  - ${checkIn}\n`;
            }
        }
    }

    reportText += '\nالمستخدمين الذين لم يقوموا بتسجيل الحضور:\n';

    for (const employee of employees) {
        if (!(employee in checkInOutData)) {
            reportText += `  - ${employee}\n`;
        }
    }

    return reportText;
}

// إضافة مستمع لزر تسجيل الخروج للمشرف
adminLogoutButton.addEventListener('click', () => {
    adminLogout();
});
