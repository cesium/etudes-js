function segundoMaior(numeros) {
    let maior = numeros[0]; // Assume o primeiro número como o maior
    let segundoMaior = -Infinity; // Inicializa o segundo maior como o menor possível
    
    // Percorre o array e encontra o maior e o segundo maior número
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > maior) {
        segundoMaior = maior;
        maior = numeros[i];
      } else if (numeros[i] > segundoMaior && numeros[i] !== maior) {
        segundoMaior = numeros[i];
      }
    }
    
    // Retorna o segundo maior número
    return segundoMaior;
  }

let numeros = [3, 5, 7, 2, 8];
console.log("Segundo maior número:", segundoMaior(numeros)); //output: 7  