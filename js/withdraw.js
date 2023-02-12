/**
 * 1.add event handler with the withdraw button..
 * 2.Get the withdraw amount from the withdraw input field
 * 2.5->Also make the sure to convert the input into a number by using praseFloat...
 * 3.Get previous withdraw total
 * 4.Calculate total withdraw amount
 */
// step:01->
const withdrawButton = document.getElementById("btn-withdraw");

withdrawButton.addEventListener("click",function() {
    // step 2
    const withdrawInputField = document.getElementById("withdraw-amount");
    withdrawInput = parseFloat(withdrawInputField.value);
    // step 3

    const previousWithdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalElement.innerText);
    console.log(previousWithdrawTotal);
    // step 4

    const previousBalanceTotal = document.getElementById("balance-total");
    const previousBalance = parseFloat(previousBalanceTotal.innerText);
   
})