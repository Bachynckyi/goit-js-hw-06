
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email,
        password,
    };
    if (email === "" || password === "") {
    return alert("Предупреждение! Все поля должны быть заполнены!");
    }  
    else {
    console.log(email, password);
    event.currentTarget.reset();
    console.log(formData);
    }
    
}