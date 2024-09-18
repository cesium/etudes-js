function maiorNumero(numeros) {
  let maior = numeros[0]; // Assume o primeiro número como o maior
  
  // Verifica se há algum número maior no array
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  
  // Retorna o maior número
  return maior;
}

let numeros = [3, 5, 7, 2, 8];
console.log("Maior número:", maiorNumero(numeros)); //output: 8
