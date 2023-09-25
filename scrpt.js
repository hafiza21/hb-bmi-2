function calculateBMI(){

const firstNameInput = document.getElementById("firstName");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const result = document.getElementById("result");

const firstName = firstNameInput.value;
const weight = weightInput.value;
const height = heightInput.value;

const bmi = weight /height ** 2;
console.log(firstName);
console.log(weight);
console.log(height);
result.innerHTML = `${firstName}, your BMI is ${bmi.toFixed(2)}!`;

}