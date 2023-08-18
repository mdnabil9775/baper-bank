document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    const newWithdrawAmount = getInputValue('withdraw');
    const previousWithdraw = getElementValue('withdraw-total');
    const previousBalanceAmount = getElementValue('balance');
   
    if( newWithdrawAmount > previousBalanceAmount){
        alert('You have insufficient balance')

    }else{
    // for withdraw amont
    
    const totalWithdraw = newWithdrawAmount + previousWithdraw;
    setValueToElement('withdraw-total', totalWithdraw);

    // for balance
    
    const totalBalanceAmont = previousBalanceAmount - newWithdrawAmount;
    setValueToElement('balance', totalBalanceAmont)
    }
})