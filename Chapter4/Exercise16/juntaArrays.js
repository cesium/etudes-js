// Escreve uma função que mescle dois arrays e remova os elementos duplicados do array resultante

function juntaArrays(arr1, arr2) {
    let result = [];
    let vistos = new Map();

    for (const elemento of arr1) {
        if (!vistos.has(elemento)) {
            result.push(elemento);
            vistos.set(elemento, true);
        }
    }

    for (const elemento of arr2) {
        if (!vistos.has(elemento)) {
            result.push(elemento);
            vistos.set(elemento, true);
        }
    }

    return result;
}

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
console.log("Arrays juntos:", juntaArrays(arr1, arr2)); //[ 1, 2, 3, 4, 5 ]
