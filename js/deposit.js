// step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    // step-3
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
// step-4:total deposit
const currentDepositTotal=previousDepositTotal+newDepositAmount;

// step-5:get total balance
const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);
// step-6:calculate current total balance
const currentBalanceTotal=previousBalanceTotal+newDepositAmount;
balanceTotalElement.innerText=currentBalanceTotal;


    depositTotalElement.innerText=currentDepositTotal;
    // step-7
    depositField.value='';
})