//Escreve uma função que conte quantas vezes um número aparece em um array.

function contarOcorrencias(arr, num) {
    let i = 0
    for (item of arr) {
        if (num == item)
            i++
    }return i
}

let numerosArr = [1, 2, 3, 2, 1, 4, 2];
console.log("Ocorrências de 2:", contarOcorrencias(numerosArr, 2)); //output: 3
