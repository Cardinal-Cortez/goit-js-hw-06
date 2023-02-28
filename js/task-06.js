const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (evt) => {
    evt.target.classList.toggle('valid');
    if (evt.target.value.length === evt.target.dataset.length) {
       evt.target.classList.toggle('invalid');
    }
     
});