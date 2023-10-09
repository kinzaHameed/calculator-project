"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const AddBtn = document.getElementById("Add");
const SubBtn = document.getElementById("Sub");
const MultBtn = document.getElementById("Mult");
const DivBtn = document.getElementById("Divide");
const printResult = document.getElementById("Divide");
function AddNumbers() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a + b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);
function subtractNumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a - b;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", subtractNumber);
function MultiplyNumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a * b;
    printResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultiplyNumber);
function DivideNumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a / b;
    printResult.textContent = result.toString();
}
DivBtn.addEventListener("click", DivideNumber);
