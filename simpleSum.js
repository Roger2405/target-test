export default function sumValue() {
    const INDICE = 13;
    let soma = 0
    let k = 0
    while (k < INDICE) {
        k++;
        soma += k;
    }
    return soma;
}