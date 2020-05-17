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

}

function handleNumber(value){
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
    console.log("here");
    buttonClick(event.target.value);
})