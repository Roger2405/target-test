import faturamentoJSON from './data/faturamento.json' assert { type: "json" };
const initialArray = faturamentoJSON;

//novo array somente com valores maiores que 0;
const filteredArray =  initialArray.filter(item => item.valor > 0);


export default function getInvoicingInfo() {
    let sum = 0;
    let maxValue = Number.MIN_VALUE;
    let minValue = Number.MAX_VALUE;

    filteredArray.forEach(item => {
        let value = item.valor;
        if (value < minValue) minValue = value;
        else if (value > maxValue) maxValue = value;

        sum += value;
    })

    const average = sum / filteredArray.length;
    const numbersOfDaysAboveAverage = getNumbersOfDaysAboveAverage(average)

    return `\nMaior valor: ${minValue} \nMenor valor: ${maxValue} \nDias com faturamento superior à média mensal: ${numbersOfDaysAboveAverage}`
}



function getNumbersOfDaysAboveAverage(average) {
    let count = 0;
    filteredArray.forEach(item => {
        if (item.valor > average) {
            count++;
        }
    })
    return count;
}
