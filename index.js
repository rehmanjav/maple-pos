"use strict";

function appendInput(text) {
    let inputEle = document.querySelector(".inputDisplay");
    inputEle.textContent += text;
}

function clearInput() {
    let inputEle = document.querySelector(".inputDisplay");
    inputEle.textContent = "";
}

// ADD EVENT LISTENER ON WINDOW

window.addEventListener('keydown', (e) => {
    if (e.key != 'Shift') {
        appendInput(e.key);
    }
    
    if (e.key == "Backspace") {clearInput()};
});

// ADD EVENT LISTENERS TO NUMPAD

let btn7 = document.querySelector(".btn-7");
btn7.addEventListener('click', () => {
    appendInput('7');
});

let btn8 = document.querySelector(".btn-8");
btn8.addEventListener('click', () => {
    appendInput('8');
});

let btn9 = document.querySelector(".btn-9");
btn9.addEventListener('click', () => {
    appendInput('9');
});

let btn4 = document.querySelector(".btn-4");
btn4.addEventListener('click', () => {
    appendInput('4');
});

let btn5 = document.querySelector(".btn-5");
btn5.addEventListener('click', () => {
    appendInput('5');
});

let btn6 = document.querySelector(".btn-6");
btn6.addEventListener('click', () => {
    appendInput('6');
});

let btn1 = document.querySelector(".btn-1");
btn1.addEventListener('click', () => {
    appendInput('1');
});

let btn2 = document.querySelector(".btn-2");
btn2.addEventListener('click', () => {
    appendInput('2');
});

let btn3 = document.querySelector(".btn-3");
btn3.addEventListener('click', () => {
    appendInput('3');
});

let btn0 = document.querySelector(".btn-0");
btn0.addEventListener('click', () => {
    appendInput('0');
});

let btn00 = document.querySelector(".btn-00");
btn00.addEventListener('click', () => {
    appendInput('00');
});

let btnDot = document.querySelector(".btn-dot");
btnDot.addEventListener('click', () => {
    appendInput('.');
});










let btnClr = document.querySelector(".btn-clr");
btnClr.addEventListener('click', () => {
    clearInput();
});

