const refs = {
    inputArea: document.querySelector('#name-input'),
    labelArea: document.querySelector('#name-output'),
};

refs.inputArea.addEventListener('input', onInput);


function onInput(event) {
    if (event.currentTarget.value === "") {
        refs.labelArea.textContent = "Anonymous";
    }
    else {
        refs.labelArea.textContent = event.currentTarget.value;
    };
}