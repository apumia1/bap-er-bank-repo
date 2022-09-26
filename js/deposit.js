document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-amount');
    const newDeposit = depositField.value;

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    const currentDepositTotal = previousDepositTotal + newDeposit;


    depositTotalElement.innerText = newDeposit;








    depositField.value = '';


})