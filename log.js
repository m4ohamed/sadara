const logList = document.getElementById('logList');
const checkInButton = document.getElementById('checkInButton');
const checkOutButton = document.getElementById('checkOutButton');

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
