//Escreve uma função que encontre o menor número em um array de inteiros.

function minimoSimples(arr) {
    let min = arr[0];

    for (var n of arr){
        if (n<min){
            min = n;
        }
    }

    return min;
}


let numeros = [10, 5, 8, 1, 7];
console.log("Menor número:", minimoSimples(numeros)); //output: 1
