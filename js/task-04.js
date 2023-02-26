const minusNumber = document.querySelector('button[data-action="decrement"]');
const plusNumber = document.querySelector('button[data-action="increment"]');

let counterEl = document.querySelector("#value");
let counterValue = 0;

minusNumber.addEventListener('click', () => {
    counterValue-=1;
    counterEl.textContent =counterValue;
});
plusNumber.addEventListener('click', () => {
    counterValue+=1;
    counterEl.textContent =counterValue;
});
