// Escreve uma função que conte quantas vezes um número aparece em um array.

function contarOcorrencias(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) count++;
  }

  return count;
}

let numerosArr = [1, 2, 3, 2, 1, 4, 2];
console.log("Ocorrências de 2:", contarOcorrencias(numerosArr, 2)); // output:
// 3
