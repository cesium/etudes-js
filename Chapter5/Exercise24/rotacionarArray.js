// Dado um array de números e um número k, rotaciona o array para a direita k vezes. A rotação move o último elemento do array para a primeira posição.

function rotacionarArray(arr, k) {
    let n = arr.length;
    k = k % n;

    return arr.slice(-k).concat(arr.slice(0, n - k));
}
function rotacionarArray_loop(arr, k) {
    let n = arr.length;
    k = k % n; // Evita rotações desnecessárias

    for (let i = 0; i < k; i++) {
        let ultimo = arr[arr.length - 1]; // Armazena o último elemento

        // Move todos os elementos uma posição à direita
        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }

        arr[0] = ultimo; // Coloca o último elemento na primeira posição
    }

    return arr;
}
console.log(rotacionarArray([1, 2, 3, 4, 5], 2)); //output: [4, 5, 1, 2, 3]
