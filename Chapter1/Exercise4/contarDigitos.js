// Escreve uma função que conte quantos dígitos um número inteiro possui

function contarDigitos(n) {
  let x = 1;

  // Caso seja negativo, passa a positivo (para simplificar as contas)
  if (n < 0) n = -n;

  while (n > 10) {
    n /= 10;
    x++;
  }

  return x;
}

console.log('Numero de digitos:', contarDigitos(440));  // output: 3
