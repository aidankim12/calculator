// Creating the buttons.
const screen = document.querySelector('.screen');
const buttons = document.querySelector('.buttons');
const numPad = document.querySelector('.num-pad');

let firstNum = 0;
let secondNum = 0;
let operation = '';
let currNum = '';

for (let i = 9; i > 0; i--) {
    const btn = document.createElement('button');
    numPad.appendChild(btn);
    btn.classList.toggle('button');
    btn.textContent = `${i}`;
    addNumEventListener(btn, i);
}

const clr = document.createElement('button');
numPad.appendChild(clr);
clr.classList.toggle('button');
clr.textContent = `CLR`;
clr.addEventListener('click', () => {
    screen.textContent = '';
    firstNum = 0;
    secondNum = 0;
    operation = '';
    currNum = '';
});

const zero = document.createElement('button');
numPad.appendChild(zero);
zero.classList.toggle('button');
zero.textContent = `0`;
addNumEventListener(zero, 0);

const eq = document.createElement('button');
numPad.appendChild(eq);
eq.classList.toggle('button');
eq.textContent = `=`;
eq.addEventListener('click', () => {
    secondNum = Number(currNum);
    const result = op(firstNum, secondNum, operation);
    screen.textContent = `${result}`;
    currNum = `${result}`;
    operation = '';
});

const addition = document.querySelector('.add');
const subtraction = document.querySelector('.sub');
const multiplication = document.querySelector('.mult');
const division = document.querySelector('.divide');

addOperationEventListener(addition, '+', 'add');
addOperationEventListener(subtraction, '-', 'subtract');
addOperationEventListener(multiplication, '*', 'multiply');
addOperationEventListener(division, '/', 'divide');

// Functions for carrying out operations input through UI.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Divide by 0.';
    }
    return (a / b).toFixed(3);
}

function op(num1, num2, operator) {
    // Function for performing operations.
    switch (operator) {
        case 'add':
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2);
            break;
        case 'divide':
            return divide(num1, num2);
            break;
    }
}

function addNumEventListener(element, text) {
    element.addEventListener('click', () => {
        screen.textContent += `${text}`;
        currNum += `${text}`;
    });
}

function addOperationEventListener(element, text, op_name) {
    element.addEventListener('click', () => {
        if (operation.trim() === '') {
            screen.textContent += text;
            firstNum = Number(currNum);
            operation = op_name;
            currNum = '';
        } else {
            screen.textContent = '';
            firstNum = 0;
            secondNum = 0;
            operation = '';
            currNum = '';
            alert('Only perform one operation at a time.');
        }
    });
}