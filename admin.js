// Logout Button
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', () => {
    // Redirect to the login page or any other desired page
    window.location.href = 'login.html';
});

// Add Employee Button
const addEmployeeButton = document.getElementById('addEmployeeButton');
addEmployeeButton.addEventListener('click', () => {
    // Redirect to the "Add Employee" page
    window.location.href = 'add_employee.html';
});

// Create Report Button
const createReportButton = document.getElementById('createReportButton');
createReportButton.addEventListener('click', () => {
    // Redirect to the "Create Reports" page
    window.location.href = 'create_reports.html';
});

// Delete Employee Button
const deleteEmployeeButton = document.getElementById('deleteEmployeeButton');
deleteEmployeeButton.addEventListener('click', () => {
    // Redirect to the "Delete Employee" page
    window.location.href = 'delete_employee.html';
});

// Attendance Log Button
const attendanceLogButton = document.getElementById('attendanceLogButton');
attendanceLogButton.addEventListener('click', () => {
    // Redirect to the "Attendance Log" page
    window.location.href = 'attendance_log.html';
});
