"use strict";

const currentTrans = [];

const items = {
    "MAPLE-LOTTERYPRIZE": {"name": "Lottery Online Prize", "upc": "", "price": "", "tax": 0, "category": "lotteryPrize",},
    "MAPLE-NEVADAPRIZE": {"name": "Nevada Prize", "upc": "", "price": "", "tax": 0, "category": "nevadaPrize",},
    "MAPLE-SCRATCHPRIZE": {"name": "Scratch Prize", "upc": "", "price": "", "tax": 0, "category": "scratchPrize",},
    "MAPLE-LOTTERYONLINE": {"name": "Lottery Online", "upc": "", "price": "", "tax": 0, "category": "lotteryOnline",},
    "MAPLE-GROCERY": {"name": "Grocery", "upc": "", "price": "", "tax": 0, "category": "non-tax",},
    "MAPLE-TOBACCO": {"name": "Tobacco", "upc": "", "price": "", "tax": 13, "category": "tobacco",},
    "MAPLE-SLUSHMED": {"name": "Slushie Medium", "upc": "", "price": "", "tax": 13, "category": "taxable",},
    "MAPLE-GROCERYTX": {"name": "Grocery Tx", "upc": "", "price": "", "tax": 13, "category": "taxable",},
    "MAPLE-SLUSHSM": {"name": "Slushie Small", "upc": "", "price": "", "tax": 13, "category": "taxable",},
    "MAPLE-SLUSHLG": {"name": "Slushie Large", "upc": "", "price": "", "tax": 13, "category": "taxable",},
    "MAPLE-NEVADA": {"name": "Nevada", "upc": "", "price": "", "tax": 0, "category": "nevada",},
    "MAPLE-SCRATCH": {"name": "Scratch Ticket", "upc": "", "price": "", "tax": 0, "category": "scratch",},
};

class Transaction {
    constructor(firstItem) {
      this.height = height;
      this.width = width;
    }
  }

// class Item {
//     constructor(itemObject) {
//         this.upc = itemObject.upc
//         this.price
//         this.tax
//         this.category
//     }
// }

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

    if (input.contains("MAPLE-")) {
        if (input.contains("$$@$$")) {

        } else if (!input.contains("$$@$$")) {
            input.split()
        }
        
    }

    console.log(`Running the following input (${input})`);
    clearInput();
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

