const nameInput = document.querySelector('#name-input');

let nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', (event) => {
    nameOutput.textContent = event.target.value.trim();
    if (event.target.value ==='') {
        nameOutput.textContent = 'Anonymous';
    };
});