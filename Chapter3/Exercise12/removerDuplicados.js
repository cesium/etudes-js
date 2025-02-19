// Escreve uma função que remova todos os elementos duplicados de um array.

function removeDuplicados(arr) {
    for(var i=0; i<arr.length; i++){
        for (var j=0; j<arr.length; j++){
            if (arr[i] == arr[j] && i!=j){
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

let arrDuplicados = [1, 2, 3, 2, 1, 4, 5];
console.log("Array sem duplicatas:", removeDuplicados(arrDuplicados)); //output: [ 1, 2, 3, 4, 5 ]
