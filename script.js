// operator functions

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const reciprocal = function (a) {
    return 1 / a;
}

const square = function (a) {
    return a ** 2;
}

const root = function (a) {
    return a ** (1 / 2);
}

const percentage = function (a) {
    return a * 0.01;
}

// display

const displayMain = document.querySelector('.display-main');
const displayHistory = document.querySelector('.display-history')

// number listeners

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += 1;
    console.log('oneButton');
})
const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += 2;
    console.log('twoButton');
})
const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += 3;
    console.log('threeButton');
})
const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += 4;
    console.log('fourButton');
})
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += 5;
    console.log('fiveButton');
})
const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += 6;
    console.log('sixButton');
})
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += 7;
    console.log('sevenButton');
})
const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += 8;
    console.log('eightButton');
})
const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += 9;
    console.log('nineButton');
})
const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += 0;
    console.log('zeroButton');
})
// const decimalButton = document.querySelector('#decimal');
// decimalButton.addEventListener('click', () => {
//     displayMain.textContent = displayMain.textContent += 
//     console.log('decimalButton');
// })

// function listeners

let currentFunction = '';

const clearButton = document.querySelector('#clear-all');
clearButton.addEventListener('click', () => {
    displayHistory.textContent = '';
    displayMain.textContent = '';
    console.log('clearButton');
})

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    currentFunction = 'add';
    displayHistory.textContent = displayMain.textContent;
    displayMain.textContent = '';
    console.log('addButton');
})

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    let result = add(Number(displayHistory.textContent), Number(displayMain.textContent));
    displayHistory.textContent = displayHistory.textContent + "+" + displayMain.textContent;
    displayMain.textContent = result;
    console.log('equalsButton');
})