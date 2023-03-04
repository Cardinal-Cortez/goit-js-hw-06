const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const liEl = document.createElement('li');

const eatEl = ingredients.forEach((ingredient, index)=> {
  
liEl.textContent = ingredient;
liEl.classList.add("item");
ingredientsList.prepend(liEl)
})



// const liEl5 = document.createElement('li');
// liEl5.textContent ='Condiments';
// liEl5.classList.add("item");
// ingredientsList.prepend(liEl5)

// const liEl4 = document.createElement('li');
// liEl4.textContent ='Herbs';
// liEl4.classList.add("item");
// ingredientsList.prepend(liEl4)

// const liEl3 = document.createElement('li');
// liEl3.textContent ='Tomatos';
// liEl3.classList.add("item");
// ingredientsList.prepend(liEl3)

// const liEl2 = document.createElement('li');
// liEl2.textContent ='Garlic';
// liEl2.classList.add("item");
// ingredientsList.prepend(liEl2)

// const liEl1 = document.createElement('li');
// liEl1.textContent = 'Mushrooms';
// liEl1.classList.add("item");
// ingredientsList.prepend(liEl1)

// const liEl = document.createElement('li');
// liEl.textContent = 'Potatoes';
// liEl.classList.add("item");
// ingredientsList.prepend(liEl)