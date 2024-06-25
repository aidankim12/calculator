// Creating the buttons.
const numPad = document.querySelector('.num-pad');

for (let i = 9; i > 0; i--) {
    const btn = document.createElement('button');
    numPad.appendChild(btn);
    btn.classList.toggle('button');
    btn.textContent = `${i}`;
}

const clr = document.createElement('button');
numPad.appendChild(clr);
clr.classList.toggle('button');
clr.textContent = `CLR`;

const zero = document.createElement('button');
numPad.appendChild(zero);
zero.classList.toggle('button');
zero.textContent = `0`;

const eq = document.createElement('button');
numPad.appendChild(eq);
eq.classList.toggle('button');
eq.textContent = `=`;

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
    return a / b;
}

function op(num1, num2, operator) {
    // Function for performing operations.
    switch (func) {
        case 'add':
            add(num1, num2);
            break;
        case 'subtract':
            sub(num1, num2);
            break;
        case 'multiply':
            mult(num1, num2);
            break;
        case 'divide':
            divide(num1, num2);
            break;
    }
}

// Adding functionality to the calculator.