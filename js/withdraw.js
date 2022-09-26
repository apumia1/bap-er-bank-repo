document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const newwithdrawAmountString = withdrawField.Value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');

    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentWithdrawTotal = previousWithdrawTotal + newwithdrawAmount;


    withdrawTotalElement.innerText = currentWithdrawTotal;
})