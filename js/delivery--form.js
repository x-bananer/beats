const myForm = document.querySelector('#form');

function validateField(field) {

    if (!field.value.length) {
        field.classList.add('input--error');
        return false;
    } else {
        field.classList.remove('input--error');
        return true;
    }
};

function validateForm(fields) {
    let isValid = true;
    fields.forEach(field => {
        if (validateField(field) == false) isValid = false
    });
    return isValid
}

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = myForm.elements.name;
    const phone = myForm.elements.phone;
    const comment = myForm.elements.comment;
    console.log('валидация формы вернула ' + validateForm([name,phone,comment]));
});