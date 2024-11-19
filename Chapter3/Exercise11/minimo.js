//Escreve uma função que encontre o menor número em um array de inteiros.

function minimoSimples(arr) {
    let min = 1000000
    for (item of arr) {
        if (min>item) {
            min = item
        }
    } return min
}

// ou

function minimoSimples2(arr) {
    return Math.min(...arr)
}

let numeros = [10, 5, 8, 1, 7];
console.log("Menor número:", minimoSimples2(numeros)); //output: 1
