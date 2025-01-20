// Escreve uma função que mescle dois arrays e remova os elementos duplicados do array resultante

function juntaArrays(arr1, arr2) {
    return [... new Set(arr1.concat(arr2))];
}

function juntaArrays2 (arr1,arr2) { 
    let juntos = arr1.concat(arr2); 
    return juntos.reduce((acc,num) => { 
        if (acc.includes(num)) { 
            return acc; 
        } else {
            acc.push(num) 
            return acc;
        }
    },[])
}

let arr1 = [1, 2, 3,3];
let arr2 = [3, 4, ,3,2,5];
console.log("Arrays juntos:", juntaArrays2 (arr1, arr2)); //[ 1, 2, 3, 4, 5 ]
