// Dada uma matriz (array de arrays) de números inteiros, encontra o maior número presente em qualquer das sublistas.

function maiorEmMatriz(matriz) {
  let maior = matriz[0][0];
  
  for(let linha of matriz){
    for(let elem of linha){
      if (elem > maior) maior = elem;
    }
  }
  return maior;
}

console.log(
  maiorEmMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); //output: 9
