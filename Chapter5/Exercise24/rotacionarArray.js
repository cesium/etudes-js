// Dado um array de números e um número k, rotaciona o array para a direita k vezes. A rotação move o último elemento do array para a primeira posição.

function rotacionarArray(arr, k) {
    k = k% arr.length // Chat gpt 
    for (i = 0; i< k; i++) { 
        let ultimo = arr[arr.length -1]
        arr.pop();
        arr.unshift(ultimo); // é o mesmo que fazer arr.unshift(arr.pop())
    }
    return arr; 
}
// Chat gpt
// Sem alterar o array original 
function rotacionarArray2 (arr,k) { 
    k = k%arr.length;
    return (arr.slice(-k)).concat(arr.slice(0,arr.length -k ))
}

console.log(rotacionarArray2([1, 2, 3, 4, 5], 2)); //output: [4, 5, 1, 2, 3]
