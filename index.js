import sumValue from './simpleSum.js';
import fibonacciAnswer from './fibonacciNumber.js';
import getInvoicingInfo from './invoicingOfMonth.js';
import getInvoicingPercentages from './invoicingByState.js';
import revertString from './invertString.js';

async function seeResults() {
    const soma = sumValue();
    console.log('01 -', soma)
    //função assíncrona por conta do input do usuário
    const fibonacciResult = await fibonacciAnswer();
    console.log('02 -', fibonacciResult)

    const invoicingInfo = getInvoicingInfo();
    console.log('03 -', invoicingInfo)
    
    const invoicingPercentages = getInvoicingPercentages();
    console.log('04 -', invoicingPercentages)
    
    const resultRevertString = await revertString();
    console.log('05 -', resultRevertString)

}

seeResults();

