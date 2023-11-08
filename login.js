const adminUsername = 'admin'; // قم بتغيير اسم المستخدم الخاص بالمشرف
const adminPassword = 'admin'; // قم بتغيير كلمة المرور الخاصة بالمشرف
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const employeeInfo = document.querySelector('.employee-info');
const checkInButton = document.getElementById('checkInButton');
const checkOutButton = document.getElementById('checkOutButton');
const adminPanel = document.querySelector('.admin-panel');
const adminLogoutButton = document.getElementById('adminLogoutButton');

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
        employeeInfo.textContent = `مرحبًا ${loggedInUser}`;
        checkInButton.style.display = 'block';
        checkOutButton.style.display = 'block';
        if (isAdmin()) {
            adminPanel.style.display = 'block';
            adminLogoutButton.style.display = 'block';
        }
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
});

// إضافة مستمع لزر تسجيل الخروج للمشرف
adminLogoutButton.addEventListener('click', () => {
    loggedInUser = null;
    employeeInfo.textContent = '';
    checkInButton.style.display = 'none';
    checkOutButton.style.display = 'none';
    adminPanel.style.display = 'none';
    adminLogoutButton.style.display = 'none';
});
