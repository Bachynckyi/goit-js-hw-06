const inputArea = document.querySelector('#validation-input');

inputArea.addEventListener('blur', inputAreaBlur)


function inputAreaBlur() {
    if (inputArea.value.length === Number(inputArea.dataset.length)) {
        if (inputArea.classList.contains('invalid')) {
            inputArea.classList.remove('invalid');
        }
        inputArea.classList.add('valid');
    }
    else {
        if (inputArea.classList.contains('valid')) {
            inputArea.classList.remove('valid');
        }
        inputArea.classList.add('invalid'); 
    }
    console.log('Инпут утратил фокус')    
} 