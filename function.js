//initialize buttons and variables

const numButtons = document.querySelectorAll('.num');
const display = document.querySelector('.screen-text');
const decimalButton = document.querySelector('#decimal');
const clearButton = document.querySelector('#AC');
const changeSignButton = document.querySelector('#neg');
const operatorButtons = document.querySelectorAll('.operation');
let isDecimal = true;
let isNegative = false;
let isFirstNum = true;
let firstNum = 0;
let secondNum = 0;
let currentOperator;
let result;

// add event listeners on each button

numButtons.forEach(button => button.addEventListener('click', getWhichNumButton));
clearButton.addEventListener('click', clear);
decimalButton.addEventListener('click', addDecimal);
changeSignButton.addEventListener('click', changeSign);
operatorButtons.forEach(button => button.addEventListener('click', operationDecider));

//add number to calculator screen

function getWhichNumButton(e) {
    let buttonData = e.target.getAttribute("data-key");
    if (display.innerText.length < 11) {
        display.innerText += buttonData;

        update()

    }


}

//clear screen

function clear() {
    display.innerText = "";
    isDecimal = true;
    isNegative = false;
    isFirstNum = true;
    firstNum = 0;
    secondNum = 0;
}

//add Decimal

function addDecimal() {
    if (isDecimal) {
        display.innerText += ".";
        isDecimal = false;
    }

    else {
        return;


    }

}

//decide minus of plus

function changeSign() {
    if (!isNegative) {
        display.innerText = '-' + display.innerText;
        isNegative = true;
        update();
        

    }

    else {
        display.innerText = display.innerText.replace("-","");
        isNegative = false;
        update();


    }


}

//start of the actual logic, this one decides which operation were using and then calls the math

function operationDecider(e) {
    let operationData = e.target.id;
    console.log(operationData);
    switch (operationData) {
        case "plus": 
            currentOperator = 'add';
            console.log(firstNum);
            changeVars();
        break;

        case "minus": 
            currentOperator = 'sutract';
            changeVars();
        break;

        case "mult": 
            currentOperator = 'multiply';
            changeVars();
        break;

        case "divide": 
            currentOperator = 'divide';
            changeVars();
        break;

        case "equals": 
            logic(firstNum, secondNum, currentOperator);
        break;

        default: return;

    }



}

//meat of the logic does the actual math

function logic(n1, n2, op) {

    console.log(n1);

    floatNum1 = parseFloat(n1);
    floatNum2 = parseFloat(n2);

    console.log(floatNum1);
    console.log(floatNum2);
    
    
    switch (op) {
        case 'add': result = parseFloat(n1) + parseFloat(n2);
        




    }
    
    display.innerText = result;


}

// this code was being reused a lot so i put them into two generic update functions

function changeVars() {
    isFirstNum = false;
    display.innerText = "";
}

function update() {
    if (isFirstNum) {
        firstNum = display.innerText;
    }

    else {
        secondNum = display.innerText;


    }


}