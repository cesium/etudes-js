// Escreve uma função que receba uma lista de números inteiros e retorna o maior
// número

function maiorNumero(lista) {
  // Devolve null se a lista for vazia
  if (lista == null) return null;

  let max = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > max) {
      max = lista[i];
    }
  }

  return max;
}

let numeros = [3, 5, 7, 2, 8];
console.log("Maior número:", maiorNumero(numeros)); // output: 8
