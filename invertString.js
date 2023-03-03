import prompt from 'prompt';

export default async function revertString() {
    const input = await getUserInput(); 
    let arrNewString = []
    const lastIndex = input.length - 1;

    //passa por todas as letras começando pelo final da string
    for (let i = lastIndex; i >= 0; i--) {
        arrNewString.push(input[i])
    }
    return arrNewString.join('');
}

async function getUserInput() {
    prompt.message =
        'Digite uma palavra para invertê-la'

    const { input } = await prompt.get(['input']);
    return input;
}