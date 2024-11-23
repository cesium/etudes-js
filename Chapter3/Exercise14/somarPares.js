// Escreve uma função que some todos os números pares de um array

function somarPares(arr) {
    let soma = 0
    for (item of arr) {
        if (item % 2 == 0) {
            soma += item
        }
    } return soma
}

let numerosPares = [1, 2, 3, 4, 5, 6];
console.log("Soma dos pares:", somarPares(numerosPares)); //output: 12
