document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    const gradeSelectors = document.querySelectorAll('.grade-selector');
    const studentNameInput = document.getElementById('student-name');

    calculateBtn.addEventListener('click', () => {
        const studentName = studentNameInput.value.trim();
        let totalPoints = 0;
        let hasLowGrade = false;

        gradeSelectors.forEach(selector => {
            const gradeValue = parseFloat(selector.value);
            totalPoints += gradeValue;
            if (gradeValue <= 3) { // C (5) or lower
                hasLowGrade = true;
            }
        });

        const percentage = totalPoints * (100/90);
        let eligibilityMessage = '';

        if (hasLowGrade) {
            eligibilityMessage = '<p style="color: #ffc107;">പേടിക്കണ്ട, ഒന്നിൽ പിഴച്ചാൽ 3 എന്നല്ലേ</p>';
        } else {
            eligibilityMessage = '<p style="color: #28a745;">ജയിച്ചുട്ടോ</p>';
        }

        if (!studentName) {
            resultDiv.innerHTML = '<p>Please enter the student\'s name.</p>';
            return;
        }

        if (isNaN(percentage)) {
            resultDiv.innerHTML = '<p>Please select a grade for all subjects.</p>';
        } else {
            resultDiv.innerHTML = `
                <h3>${studentName} ${eligibilityMessage}</h3>
                <p>Overall Percentage: ${percentage.toFixed(2)}%</p>
                
            `;
        }
    });
});