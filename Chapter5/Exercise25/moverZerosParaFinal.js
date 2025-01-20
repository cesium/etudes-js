// Dado um array de números, move todos os elementos que sejam zero para o final do array, mantendo a ordem relativa dos elementos não-zero.
// A função deve modificar o array original.

function moverZerosParaFinal(arr) {
    let numeroZeros  = 0; 
    for (let i=0; i< arr.length; i++) { 
        if (arr[i]=== 0) { 
            arr.splice(i,1);
            numeroZeros ++; 
            i--;
        }
    }
    return colocaZeros(arr, numeroZeros);  
}

function colocaZeros (arr, num) { 
    for (let i = 0; i < num; i++) { 
        arr.push (0); 
    }
    return arr;
}

console.log(moverZerosParaFinal([0, 1, 0, 3, 12])); //output: [1, 3, 12, 0, 0]
console.log(moverZerosParaFinal([1, 2, 0, 0, 5])); //output: [1, 2, 5, 0, 0]
