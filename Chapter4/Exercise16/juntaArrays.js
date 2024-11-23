// Escreve uma função que mescle dois arrays e remova os elementos duplicados do array resultante

function juntaArrays(arr1, arr2) {
    let narr = []
    for (item of arr1.concat(arr2)) {
        if (!narr.includes(item)) {
            narr.push(item)
        }
    }return narr
}

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
console.log("Arrays juntos:", juntaArrays(arr1, arr2)); //[ 1, 2, 3, 4, 5 ]
