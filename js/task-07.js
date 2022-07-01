const inputArea = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `$(inputArea.value)px`;

inputArea.addEventListener('input', (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
});
