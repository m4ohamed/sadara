const adminUsername = 'admin'; // قم بتغيير اسم المستخدم الخاص بالمشرف
const adminPassword = '665544400'; // قم بتغيير كلمة المرور الخاصة بالمشرف
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const employeeInfo = document.querySelector('.employee-info');
const checkInButton = document.getElementById('checkInButton');
const checkOutButton = document.getElementById('checkOutButton');
const adminPanel = document.querySelector('.admin-panel');

let loggedInUser = null;

// التحقق مما إذا كان المستخدم الحالي هو مشرف
function isAdmin() {
    return loggedInUser === adminUsername;
}

loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === adminUsername && password === adminPassword) {
        loggedInUser = username;
        usernameInput.value = '';
        passwordInput.value = '';
        if (isAdmin()) {
            showAdminWelcomeMessage();
            redirectToAdminPage();
        } else {
            redirectToLogPage();
        }
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
});

function showAdminWelcomeMessage() {
    employeeInfo.textContent = `مرحبًا ${loggedInUser} (مدير)`;
}

function redirectToAdminPage() {
    window.location.href = 'admin.html';
}

function redirectToLogPage() {
    window.location.href = 'log.html';
}

function redirectToLoginPage() {
    window.location.href = 'login.html';
}

// إضافة الشرط للتحقق من وجود الزر قبل إضافة المستمع
const adminLogoutButton = document.getElementById('adminLogoutButton');
if (adminLogoutButton) {
    adminLogoutButton.addEventListener('click', () => {
        loggedInUser = null;
        employeeInfo.textContent = '';
        checkInButton.style.display = 'none';
        checkOutButton.style.display = 'none';
        adminPanel.style.display = 'none';
        adminLogoutButton.style.display = 'none';
        redirectToLoginPage();
    });
}
