// ok so first get all the stuff you'll need 
//total 
let running_total = 0;
//whatever the user puts in
let buffer = "0";
//whatever the operator was right before this 
let previousOperator; 

function buttonClick(value){
    //if the value is not a number, handle it as a symbol
if (isNaN(parseInt(value))) {
    handleSymbol(value);

  } else {
      //if it is a number (line 11 === true) handle it as a number 
    handleNumber(value);
  }

}
  
//listen to the calc buttons and on <click> 
document.querySelector('.calc-buttons').addEventListener("click", function(event){
    buttonClick(event.target.value);
})