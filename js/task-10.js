function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls > input'),
  buttonCreate: document.querySelector('#controls > button[data-create]'),
  buttonDestroy: document.querySelector('#controls > button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.buttonCreate.addEventListener('click', () => createBoxes(refs.input.value));
refs.buttonDestroy.addEventListener('click', destroyBoxes);

let startWidth = 30;
let startHeight = 30;

function createBoxes(amount) {
  if (amount <= 0) {
    refs.input.value = null;
    alert('Введите значение больше нуля')
    return;
  }
  let boxesArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const newArray = `<div style='width: ${startWidth}px; height: ${startHeight}px; background-color: ${getRandomHexColor()}';></div>`
      boxesArray.push(newArray);
    startHeight += 10;
    startWidth += 10;
  }
  refs.boxes.insertAdjacentHTML("afterbegin", boxesArray.join(""));
}
function destroyBoxes() {
  boxes.innerHTML = null;
  refs.input.value = null;
  startWidth = 30;
  startHeight = 30;
}