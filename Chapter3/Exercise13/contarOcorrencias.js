//Escreve uma função que conte quantas vezes um número aparece em um array.

function contarOcorrencias(arr, num) {
    return arr.filter( x => x === num).length; 
}

function contarOcorrencias2 (arr,num) { 
    return arr.reduce ((acc,x) => { 
        if (x === num) {
            return ++acc; // retorna o valor já incrementado
        }  else return acc;
    },0);
}

function contarOcorrencias3 (arr,num) { 
    let contagem = 0; 
    for (let i=0; i< arr.length; i ++) { 
        if (arr[i]=== num){ 
            contagem++; 
        }
    }
    return contagem; 
}
let numerosArr = [1, 2, 3, 2, 1, 4, 2];
console.log("Ocorrências de 2:", contarOcorrencias3(numerosArr, 2)); //output: 3
