
console.log("deposit");
// step:01->Add event handler to deposit button
// for Input field use .value for input filed inside values..

const depositButton = document.getElementById("btn-deposit");
depositButton.addEventListener("click",function(){

       // step:02-> Get the deposit amount from  input field
    const depositAmountArea = document.getElementById("deposit-amount");
    const depositAmount = depositAmountArea.value;
    // step:03-> Get the current deposit total
    
    // for non-input{element other than input} use innnerText to get the text
    const depositTotalElement = document.getElementById("total-deposit");

    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText= depositAmount;
    

})