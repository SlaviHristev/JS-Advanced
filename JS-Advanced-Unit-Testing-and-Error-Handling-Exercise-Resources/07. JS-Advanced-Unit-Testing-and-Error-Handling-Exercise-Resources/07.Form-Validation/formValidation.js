function validate() {
    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let confirmPassInput = document.getElementById('confirm-password');
    let companyCheckbox = document.getElementById('company');
    let companyInfoElement = document.getElementById('companyInfo');
    let companyNumberInput = document.getElementById('companyNumber');
    let submitButton = document.getElementById('submit');
    
    companyCheckbox.addEventListener('change', function () {
        companyInfoElement.style.display = this.checked ? 'block' : 'none';
    });

    submitButton.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();
        const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordPattern = /^[a-zA-Z0-9_]{5,15}$/;
        const companyNumberPattern = /^[1-9][0-9]{3}$/;

        let usernameValid = validateField(usernameInput, usernamePattern);
        let emailValid = validateField(emailInput, emailPattern);
        let passwordValid = validateField(passwordInput, passwordPattern);
        let confirmPassValid = validateField(confirmPassInput, passwordPattern);
        let isSame = passwordInput.value === confirmPassInput.value;
        let companyNumValid = true;
        if (window.getComputedStyle(companyInfoElement).display === 'block') {
            companyNumValid = validateField(companyNumberInput, companyNumberPattern);
        }

        let validElement = document.getElementById('valid');
        validElement.style.display = (usernameValid && emailValid && passwordValid && confirmPassValid && isSame && companyNumValid) ? 'block' : 'none';
    }

    function validateField(input, pattern) {
        if (pattern.test(input.value)) {
            input.style.border = '';
            return true;
        } else {
            input.style.border = '1px solid red';
            return false;
        }
    }
}
