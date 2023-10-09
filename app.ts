const number1=document.getElementById("num1") as HTMLInputElement

const number2=document.getElementById("num2") as HTMLInputElement  

const AddBtn = document.getElementById("Add") as HTMLButtonElement
const SubBtn = document.getElementById("Sub") as HTMLButtonElement
const MultBtn = document.getElementById("Mult") as HTMLButtonElement
const DivBtn = document.getElementById("Divide") as HTMLButtonElement

const printResult = document.getElementById("Divide") as HTMLOutputElement

function AddNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a+b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click" , AddNumbers)

function subtractNumber(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a-b;
    printResult.textContent = result.toString();

}
SubBtn.addEventListener("click" , subtractNumber)


function MultiplyNumber(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a*b;
    printResult.textContent = result.toString();

}
MultBtn.addEventListener("click" , MultiplyNumber)

function DivideNumber(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a/b;
    printResult.textContent = result.toString();

}
DivBtn.addEventListener("click" , DivideNumber)