"use strict";

const transactions = [];
let currentTran = "";
let isInputLocked = false;

let categories = ["nontax", "online", "nevadaP", "tax13", "onlineP", "scratch", "tobacco", "nevada", "scratchP", "hst"];

const items = {
    "ONLINEPRIZE": {"name": "Lottery Online Prize", 
                     "upc": "ONLINEPRIZE",
                     "price": -1,
                     "tax": 0,
                     "category": "onlineP",
                     "qty": 1,
                    },
    "NEVADAPRIZE": {"name": "Nevada Prize", "upc": "NEVADAPRIZE", "price": -1, "tax": 0, "category": "nevadaP", "qty": 1},
    "SCRATCHPRIZE": {"name": "Scratch Prize", "upc": "SCRATCHPRIZE", "price": -1, "tax": 0, "category": "scratchP", "qty": 1},
    "ONLINE": {"name": "Lottery Online", "upc": "ONLINE", "price": 1, "tax": 0, "category": "online", "qty": 1},
    "GROCERY": {"name": "Grocery", "upc": "GROCERY", "price": 1, "tax": 0, "category": "nontax", "qty": 1},
    "TOBACCO": {"name": "Tobacco", "upc": "TOBACCO", "price": 1, "tax": 13, "category": "tobacco", "qty": 1},
    "SLUSHMED": {"name": "Slushie Medium", "upc": "SLUSHMED", "price": 1, "tax": 13, "category": "tax13", "qty": 1},
    "GROCERYTX": {"name": "Grocery Tx", "upc": "GROCERYTX", "price": 1, "tax": 13, "category": "tax13", "qty": 1},
    "SLUSHSM": {"name": "Slushie Small", "upc": "SLUSHSM", "price": 1, "tax": 13, "category": "tax13", "qty": 1},
    "SLUSHLG": {"name": "Slushie Large", "upc": "SLUSHLG", "price": 1, "tax": 13, "category": "tax13", "qty": 1},
    "NEVADA": {"name": "Nevada", "upc": "NEVADA", "price": 1, "tax": 0, "category": "nevada", "qty": 1},
    "SCRATCH": {"name": "Scratch Ticket", "upc": "SCRATCH", "price": 1, "tax": 0, "category": "scratch", "qty": 1},
};

class Transaction {
    constructor() {
      this.uuid = crypto.randomUUID();
      this.items = [];

      this.grandTotal = 0;
      this.subTotal = 0;
      this.tax = 0;
      this.paym = 0;
      this.change = 0;

      this.nontax = 0;
      this.online = 0;
      this.nevadaP = 0;
      this.tax13 = 0;
      this.onlineP = 0;
      this.scratch = 0;
      this.tobacco = 0;
      this.nevada = 0;
      this.scratchP = 0;
      this.hst = 0;
      
    }

    addItem(item) {
        this.items.push(item);
        this.updateTotals();
        updateAllDisplays();

    }

    updateTotals() {
        this.grandTotal = 0;
        this.subTotal = 0;
        this.tax = 0;
        this.paym = 0;
        this.change = 0;

        this.items.forEach((item) => {    // item.price item.tax item.qty
            this.subTotal += item.price * item.qty;
            
            if (item.tax > 0) {
                this.tax += Math.round(item.tax * item.qty * item.price / 100)
            }

            this.grandTotal = this.subTotal + this.tax;

        });
    }

    removeItem(index) {
        if (index == "LAST") {
            currentTran.items.pop();
            this.updateTotals();
            updateAllDisplays();
        } else {
            currentTran.items.splice(index, 1);
            this.updateTotals();
            updateAllDisplays();
        }

        if (currentTran.items.length == 0) {
            clearInput();
            appendInput("DELETETRAN");
            runInput();
        }
    }

    addPaym() {

    }

    postTran() {

        this.updateCategories();

    }

    suspendTran() {

    }

    generateReceipt() {

    }

    updateCategories() {

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

function formatPrice(price) {
    return `$${(price / 100.0).toFixed(2)}`
}

function updateAllDisplays() {
    // let recD = document.querySelector('.recD');
    // let cusD = document.querySelector('.cusD');          // ADJUST THIS SELECTOR WHEN ELECTRON SET UP  will need to look at customer dislpay child window for selector

    // let para = document.querySelector('.recD > p');

    // if (para == null) {
    //     let para = document.createElement('p');
    //     recD.appendChild(para);
    //     para.textContent = JSON.stringify(currentTran);
    // } else {
    //     para.textContent = JSON.stringify(currentTran);
    // }


    

    updatePOSDisplay(currentTran);
    updateCustDisplay(currentTran);
}

function updatePOSDisplay(currentTran) {
    if (!currentTran) {
        let recD = document.querySelector('.recD');
        recD.innerHTML = "";
    } else {
        let recD = document.querySelector(".recD");
        recD.innerHTML = "";

        recD.appendChild(generateItemsDivs(currentTran.items));
        recD.appendChild(generateTotalsDivs(currentTran));
    }
}

function generateItemsDivs(items) {
    // let oldItemsDiv = document.querySelector(".items-div");
    // oldItemsDiv.innerHTML = "";
    
    let itemsDiv = document.createElement('div');
    itemsDiv.classList.add("items-div");
    
    items.forEach((item) => {
      if (item.qty == 1) {
        let singleDiv = document.createElement('div');
        
        singleDiv.innerHTML = `<div class="item-div-single">
    <span>${item.name}</span><span>${formatPrice(item.price)}</span>
  </div>`;
        if (item.price < 0) {
          singleDiv.classList.add("red");
        }
        
        itemsDiv.appendChild(singleDiv);
        
      } else if (item.qty >= 2) {
        let doubleDiv = document.createElement('div');
        
        doubleDiv.innerHTML = `<div class="item-div-double">
    <span>${item.name}</span><br>
    <div class="double-div">
      <span>${item.qty} @ ${formatPrice(item.price)}</span><span>${formatPrice(item.price * item.qty)}</span>
    </div>
  </div>`;
        if (item.price < 0) {
          doubleDiv.classList.add("red");
        }
        
        itemsDiv.appendChild(doubleDiv);
        
      }
    });
    
    return itemsDiv;
}

function generateTotalsDivs(tran) {
    // let oldTotalsDiv = document.querySelector(".totals-div");
    // oldTotalsDiv.innerHTML = "";
    let totalsDiv = document.createElement('div');
    totalsDiv.classList.add('totals-div');
    
    totalsDiv.innerHTML = `<div class="total-div">
    <span>Sub-total</span><span>${formatPrice(tran.subTotal)}</span>
  </div>
  <div class="total-div">
    <span>HST</span><span>${formatPrice(tran.tax)}</span>
  </div>
  <div class="total-div grand-total">
    <span>GRAND TOTAL</span><span>${formatPrice(tran.grandTotal)}</span>
  </div>
  <div class="total-div">
    <span>Payment</span><span>${formatPrice(tran.paym)}</span>
  </div>
  <div class="total-div">
    <span>Change</span><span>${formatPrice(tran.change)}</span>
  </div>`;
    
    // let subTotal = document.createElement('div');
    // subTotal.classList.add("total-div");
    // let hst = document.createElement('div');
    // hst.classList.add("total-div");
    // let grandTotal = document.createElement('div');
    // grandTotal.classList.add("total-div");
    // grandTotal.classList.add("grand-total");
    // let payment = document.createElement('div');
    // payment.classList.add("total-div");
    // let change = document.createElement('div');
    // change.classList.add("total-div");
    return totalsDiv;
}

function updateCustDisplay(currentTran) {
    if (!currentTran) {

    }
}

function appendInput(text) {
    if (isInputLocked == true) {return};

    let inputEle = document.querySelector(".inputDisplay");
    inputEle.textContent += text;
}

function clearInput() {
    let inputEle = document.querySelector(".inputDisplay");
    inputEle.textContent = "";
}

function runInput() {
    if (isInputLocked == true) {return};

    let input = document.querySelector(".inputDisplay").textContent;

    switch (true) {
        case /^(?<upc>\d{12})$/.test(input):                                // 12346789123 groups {upc}
            {let result = input.match(/^(?<upc>\d{12})$/);
            upc = result.groups.upc;
            if (items[upc]) {
                currentTran.addItem(items[upc]);

            }

            console.log(`Running the following input (${input})`);
            }
            break;

        case /^(?<qty>\d{1,3})@(?<upc>\d{12})$/.test(input):                // 6@123456789123 groups {qty, upc}
            {let result = input.match(/^(?<qty>\d{1,3})@(?<upc>\d{12})$/);

            console.log(`Running the following input (${input})`);
            }
            break;
        
        case /^(?<price>\d{1,6})(?<upc>[A-Z]{1,20})$/.test(input):                           // 500GROCERY groups {price , upc}
            {let result = input.match(/^(?<price>\d{1,6})(?<upc>[A-Z]{1,20})$/);

            if (!currentTran) {
                transactions.push(new Transaction());
                currentTran = transactions[transactions.length - 1];
            }

            if (items[result.groups.upc]) {                      
                let price = +result.groups.price;
                let upc = result.groups.upc;

                let item = new Item(items[result.groups.upc]);

                item.price = item.price * price;

                currentTran.addItem(item);

            }

            console.log(`Running the following input (${input})`);
            }
            break;
        
        case /^(?<qty>\d{1,3})(?<price>\d{1,6})(?<upc>[A-Z]{1,20})$/.test(input):                     // 6@1000GROCERY groups {qty, price, upc}
            {let result = input.match(/^(?<qty>\d{1,3})(?<price>\d{1,6})(?<upc>[A-Z]{1,20})$/);

            let price = result.groups.price;
            let upc = result.groups.upc;
            let qty = result.groups.qty;

            console.log(`Running the following input (${input})`);
            }
            break;
        
        case input == "DELETETRAN":                // DELETETRAN
            {let index = transactions.findIndex((tran) => {
                if (tran.uuid = currentTran.uuid) return true;
            });
            
            currentTran = "";

            transactions.splice(index, 1);

            updateAllDisplays();

            console.log(`Running the following input (${input})`);
            }
            break;
        
        case /^(?<index>\d{0,3})(?<button>VOIDITEM)$/.test(input) :                // VOIDITEM or 4VOIDITEM
            {
            let result = input.match(/^(?<index>\d{0,3})(?<button>VOIDITEM)$/);
            
            if (currentTran == '') {
                break;
            } else if (result.groups.index == '') {
                let index = "LAST";
                currentTran.removeItem("LAST");

            } else {
                let index = +result.groups.index - 1;
                currentTran.removeItem(index);
            }

            console.log(`Running the following input (${input})`);
            }
            break;

    }
    
    clearInput();
}

function lockInput() {
    isInputLocked = true;
}

function unlockInput() {
    isInputLocked = false;
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
    appendInput('ONLINEPRIZE');
    runInput();
});

let btnG= document.querySelector(".btn-grocery");
btnG.addEventListener('click', () => {
    appendInput('GROCERY');
    runInput();
});

let btnGt= document.querySelector(".btn-grocerytx");
btnGt.addEventListener('click', () => {
    appendInput('GROCERYTX');
    runInput();
});

let btnL= document.querySelector(".btn-lottery");
btnL.addEventListener('click', () => {
    appendInput('ONLINE');
    runInput();
});

let btnNp= document.querySelector(".btn-nevadaPrize");
btnNp.addEventListener('click', () => {
    appendInput('NEVADAPRIZE');
    runInput();
});

let btnTob= document.querySelector(".btn-tobacco");
btnTob.addEventListener('click', () => {
    appendInput('TOBACCO');
    runInput();
});

let btnSlushSm= document.querySelector(".btn-slushsm");
btnSlushSm.addEventListener('click', () => {
    appendInput('SLUSHSM');
    runInput();
});

let btnNev= document.querySelector(".btn-nevada");
btnNev.addEventListener('click', () => {
    appendInput('NEVADA');
    runInput();
});

let btnScP= document.querySelector(".btn-scratchPrize");
btnScP.addEventListener('click', () => {
    appendInput('SCRATCHPRIZE');
    runInput();
});

let btnSlushMed= document.querySelector(".btn-slushmed");
btnSlushMed.addEventListener('click', () => {
    appendInput('SLUSHMED');
    runInput();
});

let btnSlushLg= document.querySelector(".btn-slushlg");
btnSlushLg.addEventListener('click', () => {
    appendInput('SLUSHLG');
    runInput();
});

let btnS= document.querySelector(".btn-scratch");
btnS.addEventListener('click', () => {
    appendInput('SCRATCH');
    runInput();
});

// ADD EVENT LISTENERS TO MID BUTTONS

let btnUp = document.querySelector(".btn-up");
btnUp.addEventListener('click', () => {
    console.log("clicked btn-up");
});

let btnDown = document.querySelector(".btn-down");
btnDown.addEventListener('click', () => {
    console.log("clicked btn-down");
});

let btnPrintReceipt = document.querySelector(".btn-print-receipt");
btnPrintReceipt.addEventListener('click', () => {
    console.log("clicked btn-print-receipt");
});

let btnSuspend = document.querySelector(".btn-suspend");
btnSuspend.addEventListener('click', () => {
    console.log("clicked btn-suspend");
});

let btnRecall = document.querySelector(".btn-recall");
btnRecall.addEventListener('click', () => {
    console.log("clicked btn-recall");
});

let btnCCFee = document.querySelector(".btn-cc-fee");
btnCCFee.addEventListener('click', () => {
    console.log("clicked btn-cc-fee");
});

let btnUtilities = document.querySelector(".btn-utilities");
btnUtilities.addEventListener('click', () => {
    console.log("clicked btn-utilities");
});






// ADD EVENT LISTENERS TO UTIL BUTTONS

let btnClr = document.querySelector(".btn-clr");
btnClr.addEventListener('click', () => {
    clearInput();
});

let btnVoid = document.querySelector(".btn-void");    // TODO "VOIDITEM" or a 4VOIDITEM 
btnVoid.addEventListener('click', () => {
    appendInput("VOIDITEM");
    runInput();

    // "LAST"

    // take the number, subtract 1 and pass to run
  
});

let btnAt= document.querySelector(".btn-at");        // TODO
btnAt.addEventListener('click', () => {
    appendInput('\@');
});

let btnDel = document.querySelector(".btn-del");        // TODO
btnDel.addEventListener('click', () => {
    clearInput();
    appendInput("DELETETRAN");
    runInput();
});

