// Dada uma matriz (array de arrays) de números inteiros, encontra o maior
// número presente em qualquer das sublistas.

function maiorEmMatriz(matriz) {
  let max = matriz[0][0];
  let nLinhas = matriz.length;
  let nColunas = matriz[0].length;

  for (let i = 0; i < nLinhas; i++) {
    for (let j = 1; j < nColunas; j++) {
      if (matriz[i][j] > max) max = matriz[i][j];
    }
  }

  return max;
}

console.log(
  maiorEmMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // output: 9
