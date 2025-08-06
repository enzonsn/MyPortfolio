let emailInput;
window.addEventListener('DOMContentLoaded', () => {
    const emailField = document.getElementById('email');
    const companyField = document.getElementById('company_name');

    emailField.addEventListener('change', function () {
        emailInput = this.value;
        emailToCompany();
    });

    function emailToCompany() {
        companyField.value = emailInput;
    }
});