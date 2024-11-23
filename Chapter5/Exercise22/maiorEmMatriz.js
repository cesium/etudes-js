// Dada uma matriz (array de arrays) de números inteiros, encontra o maior número presente em qualquer das sublistas.

function maiorEmMatriz(matriz) {
  let max = 0
  for (l of matriz) {
    for (item of l) {
      if (max < c) {
        max = c
      }
    }
  } return max
}

console.log(
  maiorEmMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); //output: 9
