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
    operatorButtons.forEach(button => button.disabled = false);
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
    switch (operationData) {
        case "plus": 
            currentOperator = 'add';
            changeVars();
        break;

        case "minus": 
            currentOperator = 'subtract';
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

        case "per": 
            currentOperator = "power";
            changeVars();

        default: return;

    }



}

//meat of the logic does the actual math

function logic(n1, n2, op) {
    console.log(op);
    operatorButtons.forEach(button => button.disabled = false);

    floatNum1 = parseFloat(n1);
    floatNum2 = parseFloat(n2);

    console.log(floatNum1);
    console.log(floatNum2);
    
    
    switch (op) {
        case 'add': 
            result = floatNum1 + floatNum2;
        break;

        case 'subtract': 
            result = (floatNum1 - floatNum2);
        break;

        case 'multiply':
            result = floatNum1 * floatNum2;
        break;

        case 'divide': 
            result = floatNum1 / floatNum2;
        break;

        case 'power':
            result = floatNum1 ** floatNum2;
        break;
        

    }
    
    round(result);


}

// this code was being reused a lot so i put them into two generic update functions

function changeVars() {
    isFirstNum = false;
    display.innerText = "";
    operatorButtons.forEach(button => {
        if (button.id != "equals") {
            button.disabled = true;

        }


    });
}

function update() {
    if (isFirstNum) {
        firstNum = display.innerText;
    }

    else {
        secondNum = display.innerText;


    }


}

// round the answer and return it to screen

function round(toBeRounded) {
    operatorButtons.disabled = false;

    firstNum = toBeRounded;
    
    finalResult = Number((toBeRounded).toFixed(9));
    
    if (finalResult < 99999999999 && finalResult > .00000000001) {
        display.innerText = finalResult;
    }

    else if (finalResult >= 99999999999){
        display.innerText = "Overflow";
        

    }

    else {
        display.innerText = "0";


    }

}
