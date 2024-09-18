//Crie uma função chamada multiplicarMatrizes que recebe duas matrizes e retorna o resultado da multiplicação dessas matrizes. 
//Lembre-se de que, para multiplicar duas matrizes, o número de colunas da primeira deve ser igual ao número de linhas da segunda.



function multiplicarMatrizes(matrizA: number[][], matrizB: number[][]): number[][] | null {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;
  
    if (colunasA !== linhasB) {
      console.error('O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda.');
      return null;
    }
  
    const resultado: number[][] = Array(linhasA).fill(0).map(() => Array(colunasB).fill(0));
  
    for (let i = 0; i < linhasA; i++) {
      for (let j = 0; j < colunasB; j++) {
        for (let k = 0; k < colunasA; k++) {
          resultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
      }
    }
  
    return resultado;
  }
  
  const matrizA = [
    [1, 2],
    [3, 4]
  ];
  const matrizB = [
    [5, 6],
    [7, 8]
  ];
  
  console.log(multiplicarMatrizes(matrizA, matrizB));
  // Saída:
  // [
  //   [19, 22],
  //   [43, 50]
  // ]
  