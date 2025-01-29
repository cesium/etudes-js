// Escreve uma função que encontre o segundo maior número em um array de inteiros

function segundoMaior(numeros) {
    let maior = -Infinity;
    let segundomaior = -Infinity;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            segundomaior = maior;
            maior = numeros[i];
        }
        else if (numeros[i] > segundomaior && numeros[i] < maior) {
            segundomaior = numeros[i];
        }
    }
    return segundomaior;
}

let numeros = [3, 5, 7, 2, 8];
console.log("Segundo maior número:", segundoMaior(numeros)); //output: 7
