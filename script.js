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

const percent = function (a) {
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
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
    displayMain.textContent = displayMain.textContent += '.'
    console.log('decimalButton');
})

// function listeners

let currentFunction = '';

const clearButton = document.querySelector('#clear-all');
clearButton.addEventListener('click', () => {
    displayHistory.textContent = '';
    displayMain.textContent = '';
    console.log('clearButton');
})
const clearEntryButton = document.querySelector('#clear-entry');
clearEntryButton.addEventListener('click', () => {
    displayMain.textContent = '';
    console.log('clearEntryButton');
})

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    currentFunction = 'add';
    displayHistory.textContent = displayMain.textContent;
    displayMain.textContent = '';
    console.log('addButton');
})

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', () => {
    currentFunction = 'subtract';
    displayHistory.textContent = displayMain.textContent;
    displayMain.textContent = '';
    console.log('subtractButton');
})

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    currentFunction = 'multiply';
    displayHistory.textContent = displayMain.textContent;
    displayMain.textContent = '';
    console.log('multiplyButton');
})

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    currentFunction = 'divide';
    displayHistory.textContent = displayMain.textContent;
    displayMain.textContent = '';
    console.log('divideButton');
})

const reciprocalButton = document.querySelector('#reciprocal');
reciprocalButton.addEventListener('click', () => {
    currentFunction = 'reciprocal';
    displayHistory.textContent = displayMain.textContent;
    displayMain.textContent = '';
    console.log('reciprocalButton');
})

const squareButton = document.querySelector('#square');
squareButton.addEventListener('click', () => {
    currentFunction = 'square';
    displayHistory.textContent = displayMain.textContent;
    displayMain.textContent = '';
    console.log('squareButton');
})

const rootButton = document.querySelector('#root');
rootButton.addEventListener('click', () => {
    currentFunction = 'root';
    displayHistory.textContent = displayMain.textContent;
    displayMain.textContent = '';
    console.log('rootButton');
})

const percentButton = document.querySelector('#percent');
percentButton.addEventListener('click', () => {
    currentFunction = 'percent';
    displayHistory.textContent = displayMain.textContent;
    displayMain.textContent = '';
    console.log('percentButton');
})

// COMPUTE

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    let result = '';
    // select operator
    if (currentFunction === 'add') {
        result = add(Number(displayHistory.textContent), Number(displayMain.textContent));
        displayHistory.textContent = displayHistory.textContent + " + " + displayMain.textContent;
    } else if (currentFunction === 'subtract') {
        result = subtract(Number(displayHistory.textContent), Number(displayMain.textContent));
        displayHistory.textContent = displayHistory.textContent + " - " + displayMain.textContent;
    } else if (currentFunction === 'multiply') {
        result = multiply(Number(displayHistory.textContent), Number(displayMain.textContent));
        displayHistory.textContent = displayHistory.textContent + " * " + displayMain.textContent;
    } else if (currentFunction === 'divide') {
        result = divide(Number(displayHistory.textContent), Number(displayMain.textContent));
        displayHistory.textContent = displayHistory.textContent + " / " + displayMain.textContent;
    } else if (currentFunction === 'square') {
        result = square(Number(displayHistory.textContent), Number(displayMain.textContent));
        displayHistory.textContent = displayHistory.textContent + "^2";
    } else if (currentFunction === 'reciprocal') {
        result = reciprocal(Number(displayHistory.textContent), Number(displayMain.textContent));
        displayHistory.textContent = "1/" + displayHistory.textContent;
    } else if (currentFunction === 'root') {
        result = root(Number(displayHistory.textContent), Number(displayMain.textContent));
        displayHistory.textContent = "sqrt(" + displayHistory.textContent + ")";
    } else if (currentFunction === 'percent') {
        result = percent(Number(displayHistory.textContent), Number(displayMain.textContent));
        displayHistory.textContent = displayHistory.textContent + "%";
    };
    // add other operators here as else if's


    displayMain.textContent = result;
    console.log('equalsButton');
})