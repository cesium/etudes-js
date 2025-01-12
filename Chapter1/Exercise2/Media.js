// Escreve uma função que calcule a média de uma sequência de números

function media(numeros) {
  let soma = 0;
  let len = numeros.length;
  for (let i = 0; i < len; i++) {
    soma += numeros[i];
  }

  return soma;
}

let numeros = [3, 5, 7, 2, 8];
console.log('Média:', media(numeros));  // output: 5 (fixed wrong output)
