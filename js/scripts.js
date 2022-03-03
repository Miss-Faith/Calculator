const myHeading = document.querySelector('h1').textContent = "Calculator";
var number1 = parseInt(prompt("Enter a number:"));
var calculateSign = prompt("Enter a calculation operator/sign");
var number2 = parseInt(prompt("Enter another number:"));

document.getElementById('no1').textContent = number1;
document.getElementById('no2').textContent = calculateSign;
document.getElementById('no3').textContent = number2;
document.getElementById('no4').textContent = calculate();

function calculate() {
  if (calculateSign == '+') {
    let result = number1 + number2;
    return result;
  }else if (calculateSign == '-') {
    let result = number1 - number2;
    return result;
  }else if (calculateSign == '*') {
    let result = number1 * number2;
    return result;
  }else if (calculateSign == '/') {
    let result = number1 / number2;
    return result;
  }else if (calculateSign == '%') {
    let result = number1 % number2;
    return result;
  }else {
    return "Use correct Inputs";
  }
}
calculate();
