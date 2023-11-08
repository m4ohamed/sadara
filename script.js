const adminUsername = 'admin';
const adminPassword = '665544400';
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

// Check if the current user is an admin
function isAdmin() {
    return loggedInUser === adminUsername;
}

// Display the admin panel after admin login
function showAdminPanel() {
    if (isAdmin()) {
        adminPanel.style.display = 'block';
    } else {
        adminPanel.style display = 'none';
    }
}

// Function to handle the admin logout
function adminLogout() {
    loggedInUser = null;
    showAdminPanel();
    adminLogoutButton.style.display = 'none';
    reportPanel.style.display = 'none';
}

loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === adminUsername && password === adminPassword) {
        loggedInUser = username;
        usernameInput.value = '';
        passwordInput.value = '';

        showAdminPanel(); // Display admin panel if the user is an admin
        adminLogoutButton.style.display = 'block'; // Display the admin logout button
    } else {
        // Check for employee login
        if (employees.includes(username)) {
            loggedInUser = username;
            employeeInfo.textContent = `Logged in as: ${loggedInUser}`;
            usernameInput.value = '';
            passwordInput.value = '';
            checkInButton.style.display = 'block';
            checkOutButton.style.display = 'block';
            employeeInfo.style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    }
});

// Add employee button
addEmployeeButton.addEventListener('click', () => {
    if (isAdmin()) {
        const newEmployeeName = newEmployeeInput.value;
        const newEmployeePassword = newEmployeePasswordInput.value;
        if (newEmployeeName && newEmployeePassword) {
            employees.push(newEmployeeName);
            userPasswords[newEmployeeName] = newEmployeePassword;
            newEmployeeInput.value = '';
            newEmployeePasswordInput.value = '';
        }
    }
});

checkInButton.addEventListener('click', () => {
    logEvent('Check In', loggedInUser);
});

checkOutButton.addEventListener('click', () => {
    logEvent('Check Out', loggedInUser);
});

function logEvent(eventType, employeeName) {
    const currentTime = new Date().toLocaleString();
    const logEntry = `${eventType} - ${employeeName} - ${currentTime}`;

    const li = document.createElement('li');
    li.textContent = logEntry;

    logList.appendChild(li);

    if (!checkInOutData[employeeName]) {
        checkInOutData[employeeName] = [];
    }

    checkInOutData[employeeName].push(logEntry);
}

// Employees data and passwords
const employees = []; // Store the names of employees
const userPasswords = {}; // Store passwords for each employee

const checkInOutData = {}; // Store check-in/check-out data

generateReportButton.addEventListener('click', ()
