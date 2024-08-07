// we cannot input value before submit cuz it will give empty value
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const resultInput = document.querySelector('#bmi');

    if (!height || height <= 0 || isNaN(height)) {
        resultInput.value = "Enter valid height";
    } else if (!weight || weight <= 0 || isNaN(weight)) {
        resultInput.value = "Enter valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        resultInput.value = bmi;
    }
});
