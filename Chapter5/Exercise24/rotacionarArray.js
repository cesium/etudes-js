// Dado um array de números e um número k, rotaciona o array para a direita k vezes. A rotação move o último elemento do array para a primeira posição.

function rotacionarArray(arr, k) {
    let rodados = []
    while (k !== 0) {
        rodados.push(arr[arr.length-1])
        arr = arr.filter((x) => x !== arr[arr.length-1])
        k--
    } return rodados.reverse().concat(arr)
}

console.log(rotacionarArray([1, 2, 3, 4, 5], 2)); //output: [4, 5, 1, 2, 3]
