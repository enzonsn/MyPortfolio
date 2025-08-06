let emailInput;
window.addEventListener('DOMContentLoaded', () => {
    const emailField = document.getElementById('email');
    const companyField = document.getElementById('company_name');

    emailField.addEventListener('change', function () {
        const email = this.value.trim();

        const atIndex = email.indexOf('@');
        if (atIndex === -1) {
            companyField.value = '';
            console.warn('Invalid email — missing @');
            return;
        }

        const username = email.slice(0, atIndex);
        let domain = email.slice(atIndex + 1);

        domain = domain.replace(/\.(com|net|org|gov|edu|co\.uk|io|dev|me|info|biz|us|uk)$/, '');

        const company = username + domain;

        companyField.value = company;
        console.log('Extracted company:', company);
    });
});