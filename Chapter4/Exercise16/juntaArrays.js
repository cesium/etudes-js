// Escreve uma função que mescle dois arrays e remova os elementos duplicados do array resultante

function juntaArrays(arr1, arr2) {
    let arr = arr1.concat(arr2);

    for(var i=0; i<arr.length; i++){
        for (var j=0; j<arr.length; j++){
            if (arr[i] == arr[j] && i!=j){
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
console.log("Arrays juntos:", juntaArrays(arr1, arr2)); //[ 1, 2, 3, 4, 5 ]
