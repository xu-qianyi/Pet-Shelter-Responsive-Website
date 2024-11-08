"use strict";

(function() {
    const menuButton = document.querySelector(".drop-botton");
    const menuDropdown = document.getElementById("drop-menu");
    menuButton.addEventListener("click", function() {
        menuDropdown.classList.toggle("open");
    });

    const modalEL = document.querySelector('.modal');
    const openEL = document.querySelectorAll('.open');
    const closeEL = document.querySelector('.close');

    openEL.forEach(element => {
        element.addEventListener('click', () => {
            modalEL.showModal();
        });
    });

    closeEL.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        modalEL.close();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            modalEL.close();
        }
    });

    const form = document.querySelector('.subscribe-form');
    const emailInput = document.querySelector('.subscribe-email');
    const confirmEmailInput = document.querySelector('.subscribe-confirm-email');
    const emailError = document.querySelector('.email-error');
    const confirmEmailError = document.querySelector('.confirm-email-error');

    function validateEmail() {
        const email = emailInput.value.trim();
        const isValid = email !== '' && email.includes('@');
        emailError.innerText = isValid ? '' : 'This field must be a valid email address including a @.';
        emailError.style.display = isValid ? 'none' : 'block';
        return isValid;
    }

    function validateConfirmEmail() {
        const confirmEmail = confirmEmailInput.value.trim();
        const isValid = confirmEmail !== '' && confirmEmail === emailInput.value;
        confirmEmailError.innerText = isValid ? '' : 'This field must match the provided email address.';
        confirmEmailError.style.display = isValid ? 'none' : 'block';
        return isValid;
    }

    emailInput.addEventListener('input', validateEmail);
    confirmEmailInput.addEventListener('input', validateConfirmEmail);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const isEmailValid = validateEmail();
        const isConfirmEmailValid = validateConfirmEmail();

        if (isEmailValid && isConfirmEmailValid) {
            form.submit();
        }
    });

})();
