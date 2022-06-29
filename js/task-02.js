const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arr = ingredients.map(element => {
  const li = document.createElement('li');
  li.textContent = element;
  return li;
});
document.querySelector('#ingredients').append(...arr);
