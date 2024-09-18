//Cria uma função chamada matrizTransposta que recebe uma 
//matriz de números e retorna sua transposta (ou seja, troca as linhas pelas colunas).

function matriztransposta(matriz: number[][]): number[][] {
    let transposta: number[][] = [];
    for (let i = 0; i < matriz[0].length; i++) {
      transposta[i] = [];
      for (let j = 0; j < matriz.length; j++) {
        transposta[i][j] = matriz[j][i];
      }
    }
    return transposta;
  }
  
  const MatrizOriginal = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  console.log(matriztransposta(MatrizOriginal));
  // Saída:
  // [
  //   [1, 4],
  //   [2, 5],
  //   [3, 6]
  // ]
  