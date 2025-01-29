// Escreve uma função que remova todos os elementos duplicados de um array.

function removeDuplicados(arr) {
    let result = [];
    let vistos = {};
    for (let i = 0; i < arr.length; i++) {
        if (!vistos[arr[i]]) {
            result.push(arr[i]);
            vistos[arr[i]] = true;
        }
    }
    return result
}

let arrDuplicados = [1, 2, 3, 2, 1, 4, 5];
console.log("Array sem duplicatas:", removeDuplicados(arrDuplicados)); //output: [ 1, 2, 3, 4, 5 ]
