// Escreve uma função que calcule o fatorial de um número n. O fatorial de n é o
// produto de todos os números inteiros de 1 a n.

// Solução recursiva
/* function fatorial(n) {
  if (n == 0)
    return 1;
  else
    return n * fatorial(n - 1);
} */

// Solução iterativa (mais rápida)
function fatorial(n) {
  let res = 1;

  for (let i = n; i >= 1; i--) {
    res *= i;
  }

  return res;
}

console.log(fatorial(5)); // output: 120
