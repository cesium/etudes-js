// Escreve uma função que remova todos os elementos duplicados de um array.

function removeDuplicados(arr) {
    let arrF = []
    for (item of arr) {
        if (!arrF.includes(item)) {
            arrF.push(item)
        }
    } return arrF
} 

let arrDuplicados = [1, 2, 3, 2, 1, 4, 5];
console.log("Array sem duplicatas:", removeDuplicados(arrDuplicados)); //output: [ 1, 2, 3, 4, 5 ]
