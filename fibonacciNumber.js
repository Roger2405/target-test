import prompt from 'prompt';

export default async function fibonacciAnswer() {
    while (true) {
        const input = await getUserInput();
        const inputNumber = parseInt(input)

        //se o input não for um número ele é solicitado novamente;
        if (Number.isNaN(inputNumber)) {
            console.log('O valor informado não é um número!')
            continue;
        }
        
        const inputIsFibonacciNumber = isFibonacciNumber(inputNumber)
        const message = inputIsFibonacciNumber
            ? 'O número informado pertence à sequência de Fibonacci!'
            : 'O número informado NÃO pertence à sequência de Fibonacci!'

        return message;

    }
}

async function getUserInput() {
    prompt.message =
        'Digite um número e descubra se ele faz parte da sequência de Fibonacci'

    const { input } = await prompt.get(['input']);
    return input;
}

function isFibonacciNumber(inputNumber) {
    let newNumber = 0;
    let fibonacciSequence = []
    
    while (newNumber <= inputNumber) {
        fibonacciSequence.push(newNumber)
        //define os índices dos 2 últimos elementos do array
        let indexOfLastElement = fibonacciSequence.length - 1;
        let indexOfPenultElement = fibonacciSequence.length - 2;

        //verifica se há pelo menos 2 elementos no array
        fibonacciSequence.length >= 2 ?
            newNumber = fibonacciSequence[indexOfLastElement] + fibonacciSequence[indexOfPenultElement]
            :
            newNumber += 1;
    }
    const inputIsFibonacciNumber = fibonacciSequence.includes(inputNumber);
    return inputIsFibonacciNumber;
}