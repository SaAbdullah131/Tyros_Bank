/**
 * 1.add event handler with the withdraw button..
 * 2.Get the withdraw amount from the withdraw input field
 * 2.5->Also make the sure to convert the input into a number by using praseFloat...
 * 3.Get previous withdraw total
 * 4.Calculate total withdraw amount
 * 5.Set Total withdraw amount
 * 
 * 7.Clear the input
 */
// step:01->
const withdrawButton = document.getElementById("btn-withdraw");

withdrawButton.addEventListener("click",function() {
    // step 2
    const withdrawInputField = document.getElementById("withdraw-amount");
    const  withdrawInput = parseFloat(withdrawInputField.value);
    withdrawInputField.value=''; 
    
    if(isNaN(withdrawInput)){
        alert("Please Provide Valid Number");
        return ;
    }
    const previousWithdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalElement.innerText);
    
    const previousBalanceTotal = document.getElementById("balance-total");
    const previousBalance = parseFloat(previousBalanceTotal.innerText);

    

    if(withdrawInput > previousBalance) {
        alert("No Sufficient Money for withdraw");
        return;
    }
    const totalWithdrawAmount = previousWithdrawTotal + withdrawInput ;
    previousWithdrawTotalElement.innerText = totalWithdrawAmount;

    previousBalanceTotal.innerText = previousBalance -  withdrawInput;

    // step 7
  
   
})