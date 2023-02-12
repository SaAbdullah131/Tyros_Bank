
console.log("deposit");
// step:01->Add event handler to deposit button
// for Input field use .value for input filed inside values..

const depositButton = document.getElementById("btn-deposit");
depositButton.addEventListener("click",function(){

       // step:02-> Get the deposit amount from  input field
    const depositAmountArea = document.getElementById("deposit-amount");
    const newDepositAmountString= depositAmountArea.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step:03-> Get the current deposit total
    // for non-input{element other than input} use innnerText to get the text

    const depositTotalElement = document.getElementById("total-deposit");
     const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal =parseFloat(depositTotalElement.innerText);

    // step:04-> Add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    // step::05-> Get the balance current total
    const previousBalanceTotalEl = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(previousBalanceTotalEl.innerText);
    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    // step:06-> the balance total
    previousBalanceTotalEl.innerText = currentTotalBalance;
    //step:07-> clear the deposit field
    depositAmountArea.value=' ';

})