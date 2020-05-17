// ok so first get all the stuff you'll need 
//total 
let running_total = 0;
//whatever the user puts in
let buffer = "0";
//whatever the operator was right before this 
let previousOperator; 

function buttonClick(value){
if (isNaN(parseInt(value))) {


  } else {

  }

}
  
//listen to the calc buttons and on <click> 
document.querySelector('.calc-buttons').addEventListener("click", function(event){
    buttonClick(event.target.value);
})