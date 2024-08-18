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

const displayBox = document.querySelector('.display');

// number listeners

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => {
    displayBox.textContent = displayBox.textContent += 1;
    console.log('oneButton');
})
const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => {
    displayBox.textContent = displayBox.textContent += 2;
    console.log('twoButton');
})
const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => {
    displayBox.textContent = displayBox.textContent += 3;
    console.log('threeButton');
})
const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => {
    displayBox.textContent = displayBox.textContent += 4;
    console.log('fourButton');
})
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => {
    displayBox.textContent = displayBox.textContent += 5;
    console.log('fiveButton');
})
const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => {
    displayBox.textContent = displayBox.textContent += 6;
    console.log('sixButton');
})
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => {
    displayBox.textContent = displayBox.textContent += 7;
    console.log('sevenButton');
})
const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => {
    displayBox.textContent = displayBox.textContent += 8;
    console.log('eightButton');
})
const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => {
    displayBox.textContent = displayBox.textContent += 9;
    console.log('nineButton');
})
const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => {
    displayBox.textContent = displayBox.textContent += 0;
    console.log('zeroButton');
})
// const decimalButton = document.querySelector('#decimal');
// decimalButton.addEventListener('click', () => {
//     displayBox.textContent = displayBox.textContent += 
//     console.log('decimalButton');
// })
