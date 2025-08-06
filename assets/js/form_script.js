let emailInput;
window.addEventListener('DOMContentLoaded', () => {
    const emailField = document.getElementById('email');
    const companyField = document.getElementById('company_name');

    function extractCompanyFromEmail(email) {
        if (!email.includes('@')) return '';

        const [user, domainFull] = email.split('@');
        const domain = domainFull.replace(/\.(com|net|org|co\.uk|io|edu|gov|me|info|biz|us|uk)$/, '');

        return user + domain;
    }

    function updateCompanyField() {
        const email = emailField.value.trim();
        const company = extractCompanyFromEmail(email);
        companyField.value = company;
        console.log('Company from email:', company);
    }

    emailField.addEventListener('input', updateCompanyField);


    setTimeout(() => {
        if (!companyField.value) {
            updateCompanyField();
        }
    }, 500);


    const observer = new MutationObserver(updateCompanyField);
    observer.observe(emailField, { attributes: true, attributeFilter: ['value'] });
});