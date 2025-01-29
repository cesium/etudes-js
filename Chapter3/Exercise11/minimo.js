//Escreve uma função que encontre o menor número em um array de inteiros.

function minimoSimples(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let numeros = [10, 5, 8, 1, 7];
console.log("Menor número:", minimoSimples(numeros)); //output: 1
