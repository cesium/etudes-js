function matrizTransposta(matriz: number[][]): number[][] {
    let transposta: number[][] = [];
    for (let i = 0; i < matriz[0].length; i++) {
      transposta[i] = [];
      for (let j = 0; j < matriz.length; j++) {
        transposta[i][j] = matriz[j][i];
      }
    }
    return transposta;
  }
  
  const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  console.log(matrizTransposta(matrizOriginal));
  // Saída:
  // [
  //   [1, 4],
  //   [2, 5],
  //   [3, 6]
  // ]
  