const fontSizeControl = document.querySelector('#font-size-control');
let higthText = document.querySelector('#text');

fontSizeControl.addEventListener('input', (event) => {
    higthText.style.fontSize = event.target.value + 'px';
})