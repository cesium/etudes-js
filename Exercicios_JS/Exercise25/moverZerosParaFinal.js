function moverZerosParaFinal(arr) {
    let indiceNaoZero = 0;
  
    // Percorre o array e move os números não-zero para a frente
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[indiceNaoZero] = arr[i];
        indiceNaoZero++;
      }
    }
  
    // Preenche o restante do array com zeros
    for (let i = indiceNaoZero; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    return arr;
}

console.log(moverZerosParaFinal([0, 1, 0, 3, 12]));//output: [1, 3, 12, 0, 0]
console.log(moverZerosParaFinal([1, 2, 0, 0, 5])); //output: [1, 2, 5, 0, 0]