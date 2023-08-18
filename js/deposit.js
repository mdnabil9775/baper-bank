document.getElementById('deposit-btn').addEventListener('click', function(){

    // for deposit field
    const newDepositAmount = getInputValue('deposit-field');

    const perviousDepositAmount = getElementValue('deposit-total');
    
    const currentDeposit = perviousDepositAmount + newDepositAmount;

    setValueToElement('deposit-total', currentDeposit)

    // for balance
    const previousBalance = getElementValue('balance');
    const totalBalance = previousBalance + newDepositAmount;
    setValueToElement('balance', totalBalance);
})