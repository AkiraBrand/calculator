// ok so first get all the stuff you'll need 
//total 
let running_total = 0;
//whatever the user puts in
let buffer = "0";
//whatever the operator was right before this 
let previousOperator; 
const screen = document.querySelector('.screen');

function buttonClick(value){
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
   
     } else {
        handleNumber(value);
    }

}

function handleSymbol(value){
    switch (value) {
        case "C":
          buffer = "0"; 
          runningTotal = "0";
        break;
        case "=":
          if (previousOperator === null){
            return;
          }   
          flushOperation(parseInt(buffer));
          previousOperator = null;
          buffer = runningTotal;
          runningTotal = 0;
          break;
    }
}

function handleNumber(value){
    //console.log("here");
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
    //then write it out to screen using a different function, rerender 
    rerender();
}

function rerender(){
    screen.innerText = buffer;
}

//listen to the calc buttons and on <click> 
document.querySelector('.calc-buttons').addEventListener("click", function(event){
    buttonClick(event.target.innerText);
})