function contarOcorrencias(arr, num) {
    let contador = 0; // Contador de ocorrências
    
    // Percorre o array e conta quantas vezes o número aparece
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        contador++;
      }
    }
    
    // Retorna o número de ocorrências
    return contador;
}
  
let numerosArr = [1, 2, 3, 2, 1, 4, 2];
console.log("Ocorrências de 2:", contarOcorrencias(numerosArr, 2)); //output: 3