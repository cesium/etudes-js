// Escreve uma função que encontre o segundo maior número em um array de inteiros

function segundoMaior(numeros) {
  let max = numeros[0];
  let sndMax = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      sndMax = max;
      max = numeros[i];
    }
  }

  return sndMax;
}

let numeros = [3, 5, 7, 2, 8];
console.log("Segundo maior número:", segundoMaior(numeros)); //output: 7
