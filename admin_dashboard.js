// Logout Button
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', () => {
    // Redirect to the login page or any other desired page
    window.location.href = 'login.html';
});

// Add Employee Button
const addEmployeeButton = document.getElementById('employeeManagementButton');
addEmployeeButton.addEventListener('click', () => {
    // Redirect to the "Add Employee" page
    window.location.href = 'employee_management.html';
});

// Create Report Button
const createReportButton = document.getElementById('createReportButton');
createReportButton.addEventListener('click', () => {
    // Redirect to the "Create Reports" page
    window.location.href = 'create_reports.html';
});

// Attendance Log Button
const attendanceLogButton = document.getElementById('attendanceLogButton');
attendanceLogButton.addEventListener('click', () => {
    // Redirect to the "Attendance Log" page
    window.location.href = 'attendance_log.html';
});
