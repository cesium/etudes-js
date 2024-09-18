function maiorEmMatriz(matriz) {
    let maior = -Infinity;
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > maior) {
          maior = matriz[i][j];
        }
      }
    }
  
    return maior;
}
  
console.log(maiorEmMatriz([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); //output: 9