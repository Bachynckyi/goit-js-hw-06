

const arrayButtons = {
    incrementButton: document.querySelector('[data-action="increment"]'),
    decrementButton: document.querySelector('[data-action="decrement"]'),
    counterValue: document.querySelector('#value')
}

let value = 0;

arrayButtons.decrementButton.addEventListener('click', () => {
    makeDecrement();
    updateValue();
});

arrayButtons.incrementButton.addEventListener('click', () => {
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
  arrayButtons.counterValue.textContent = value;
}