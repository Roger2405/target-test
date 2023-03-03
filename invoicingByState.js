import faturamentoPorEstadoJSON from './data/faturamentoPorEstado.json' assert { type: "json" };
const initialArray = faturamentoPorEstadoJSON;

function getSumTotal() {
    let sum = 0;
    initialArray.forEach(item => {
        sum += item.value
    })
    return sum;
}

export default function getInvoicingPercentages() {
    const total = getSumTotal();
    const percentagesOfEachState = [];

    initialArray.forEach(item => {
        let percent = `${((item.value / total) * 100).toFixed(2)}%`
        percentagesOfEachState.push({
            state: item.state,
            percent
        })
    })
    return percentagesOfEachState;
}