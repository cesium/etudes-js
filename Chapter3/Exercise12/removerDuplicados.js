// Escreve uma função que remova todos os elementos duplicados de um array.

function removeDuplicados(arr) {
    return [... new Set(arr)];
}

function removeDuplicados2(arr) {
    let arrayFinal = []; 
    for (let i = 0; i < arr.length; i++){ 
        if (!arrayFinal.includes(arr[i])) { 
            arrayFinal.push(arr[i]);
        }
    }
    return arrayFinal; 
}

let arrDuplicados = [1, 2, 3, 2,2,1,3,1,2, 1, 4, 5];
console.log("Array sem duplicatas:", removeDuplicados2(arrDuplicados)); //output: [ 1, 2, 3, 4, 5 ]
