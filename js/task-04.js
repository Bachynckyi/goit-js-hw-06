

const refs = {
    incrementButton: document.querySelector('[data-action="increment"]'),
    decrementButton: document.querySelector('[data-action="decrement"]'),
    counterValue: document.querySelector('#value')
}

let value = 0;

refs.decrementButton.addEventListener('click', () => {
    makeDecrement();
    updateValue();
});

refs.incrementButton.addEventListener('click', () => {
    makeIncrement();
    updateValue();
})

function makeDecrement() {
    value -= 1;
}

function makeIncrement() {
    value += 1;
}

function updateValue() {
  refs.counterValue.textContent = value;
}