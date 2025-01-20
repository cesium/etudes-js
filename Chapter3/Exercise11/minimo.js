//Escreve uma função que encontre o menor número em um array de inteiros.

function minimoSimples(arr) {
    return Math.min(...arr);
}

function minimoSimples2(arr) { 
    let minimo = Infinity;
    for (let i = 0 ; i< arr.length; i++) { 
        if (arr[i]< minimo) { 
            minimo = arr[i];
        }
    } 
    return minimo; 
}

let numeros = [10, 5, 8, 1, 7];
console.log("Menor número:", minimoSimples2(numeros)); //output: 1
