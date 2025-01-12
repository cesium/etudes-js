// Dado um array de números e um número k, rotaciona o array para a direita k
// vezes. A rotação move o último elemento do array para a primeira posição.

function rotacionarArray(arr, k) {
  let res = [];
  let j = 0;

  for (let i = k + 1; i < arr.length; i++) {
    res[j] = arr[i];
    j++;
  }

  for (let i = 0; i < k + 1; i++) {
    res[j] = arr[i];
    j++;
  }

  return res;
}

console.log(rotacionarArray([1, 2, 3, 4, 5], 2)); // output: [4, 5, 1, 2, 3]
