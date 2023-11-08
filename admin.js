const newEmployeeInput = document.getElementById('newEmployee');
const newEmployeePasswordInput = document.getElementById('newEmployeePassword');
const addEmployeeButton = document.getElementById('addEmployeeButton');
const generateReportButton = document.getElementById('generateReportButton');
const reportPanel = document.querySelector('.report-panel');
const report = document.getElementById('report');

const employees = [];
const checkInOutData = {};

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
