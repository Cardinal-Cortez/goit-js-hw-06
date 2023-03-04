const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const eatEl = ingredients.forEach((ingredient)=> {
const liEl = document.createElement('li'); 
liEl.textContent = ingredient;
liEl.classList.add("item");
ingredientsList.prepend(liEl)
})
