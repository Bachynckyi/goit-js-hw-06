function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonOn: document.querySelector('.change-color'),
  bodyColor: document.querySelector('body'),
  spanText: document.querySelector('.color')
}



refs.buttonOn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = randomColor;
  refs.spanText.textContent = randomColor;
});


