const submit = document.getElementById('formSubmit');

function submitForm() {
    let input = document.getElementById('emailInput').value;
    let error = document.getElementById('error');

    console.log(input);
    if (input.toLowerCase() !== input) {
        submit.type = "button";
        error.innerHTML = "Please enter a valid email address!";
    } else {
        submit.type = "submit";
        error.innerHTML = "";
    }
}
