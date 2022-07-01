function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonOn: document.querySelector('.change-color'),
  bodyColor: document.querySelector('body'),
  spanText: document.querySelector('.color')
}



refs.buttonOn.addEventListener('click', () => {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.spanText.textContent = getRandomHexColor();
});


