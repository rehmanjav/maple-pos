"use strict";

const currentTran = [];
let activeTran = "";

let categories = ["nontax", "online", "nevadaP", "tax13", "onlineP", "scratch", "tobacco", "nevada", "scratchP", "hst"];

const items = {
    "LOTTERYPRIZE": {"name": "Lottery Online Prize", "upc": "LOTTERYPRIZE", "price": 1, "tax": 0, "category": "onlineP", "qty": 1},
    "NEVADAPRIZE": {"name": "Nevada Prize", "upc": "NEVADAPRIZE", "price": "1", "tax": 0, "category": "nevadaP", "qty": 1},
    "SCRATCHPRIZE": {"name": "Scratch Prize", "upc": "", "price": "", "tax": 0, "category": "scratchP", "qty": 1},
    "LOTTERYONLINE": {"name": "Lottery Online", "upc": "", "price": "", "tax": 0, "category": "online", "qty": 1},
    "GROCERY": {"name": "Grocery", "upc": "", "price": "", "tax": 0, "category": "nontax", "qty": 1},
    "TOBACCO": {"name": "Tobacco", "upc": "", "price": "", "tax": 13, "category": "tobacco",},
    "SLUSHMED": {"name": "Slushie Medium", "upc": "", "price": "", "tax": 13, "category": "tax13", "qty": 1},
    "GROCERYTX": {"name": "Grocery Tx", "upc": "", "price": "", "tax": 13, "category": "tax13", "qty": 1},
    "SLUSHSM": {"name": "Slushie Small", "upc": "", "price": "", "tax": 13, "category": "tax13", "qty": 1},
    "SLUSHLG": {"name": "Slushie Large", "upc": "", "price": "", "tax": 13, "category": "tax13", "qty": 1},
    "NEVADA": {"name": "Nevada", "upc": "", "price": "", "tax": 0, "category": "nevada", "qty": 1},
    "SCRATCH": {"name": "Scratch Ticket", "upc": "", "price": "", "tax": 0, "category": "scratch", "qty": 1},
};

class Transaction {
    constructor(firstItem) {
      this.uuid = crypto.randomUUID();
      this.items = [firstItem];

    }

    addItem() {

    }

    removeItem() {

    }

    addPaym() {

    }

    postTran() {

    }

    suspendTran() {

    }

    generateReceipt() {

    }

    updateCategories() {

    }

    updateTotals() {

    }
  }

class Item {
    constructor(itemObject) {
        this.upc = itemObject.upc
        this.price = itemObject.price
        this.tax = itemObject.tax
        this.category = itemObject.category
        this.name = itemObject.name
        this.qty = 1;
         
    }
}

function updateDisplays() {

}

function appendInput(text) {
    let inputEle = document.querySelector(".inputDisplay");
    inputEle.textContent += text;
}

function clearInput() {
    let inputEle = document.querySelector(".inputDisplay");
    inputEle.textContent = "";
}

function runInput() {
    let input = document.querySelector(".inputDisplay").textContent;

    switch (true) {
        case /^(?<upc>\d{12})$/.test(input):
            console.log(`Running the following input (${input})`);
            break;
        case /^(?<qty>\d{1,3})@(?<upc>\d{12})$/.test(input):
            console.log(`Running the following input (${input})`);
            break;

    }
    
    clearInput();
}

// ADD EVENT LISTENER ON WINDOW

window.addEventListener('keydown', (e) => {
    if (e.key != 'Shift') {
        appendInput(e.key);
    }
    
    if (e.key == "Backspace") {clearInput()};

    if (e.key == "Enter") {
        let inputEle = document.querySelector(".inputDisplay");
        runInput(inputEle.textContent);
    };
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

// ADD EVENT LISTENERS TO BUTTON PAD

let btnLp= document.querySelector(".btn-lotPrize");
btnLp.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnG= document.querySelector(".btn-grocery");
btnG.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnGt= document.querySelector(".btn-grocerytx");
btnGt.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnL= document.querySelector(".btn-lottery");
btnL.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnNp= document.querySelector(".btn-nevadaPrize");
btnNp.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnTob= document.querySelector(".btn-tobacco");
btnTob.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnSlushSm= document.querySelector(".btn-slushsm");
btnSlushSm.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnNev= document.querySelector(".btn-nevada");
btnNev.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnScP= document.querySelector(".btn-scratchPrize");
btnScP.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnSlushMed= document.querySelector(".btn-slushmed");
btnSlushMed.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnSlushLg= document.querySelector(".btn-slushlg");
btnSlushLg.addEventListener('click', () => {
    appendInput();
    runInput();
});

let btnS= document.querySelector(".btn-scratch");
btnS.addEventListener('click', () => {
    appendInput();
    runInput();
});









let btnClr = document.querySelector(".btn-clr");
btnClr.addEventListener('click', () => {
    clearInput();
});

