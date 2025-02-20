// Dada uma matriz (array de arrays) de números inteiros, encontra o maior número presente em qualquer das sublistas.

function maiorEmMatriz(matriz) {
  let max = matriz[0][0];

  for(var arr of matriz){
    for (var el of arr){
      if (el>max){
        max = el;
      }
    }
  }
  return max;
}

console.log(
  maiorEmMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); //output: 9
