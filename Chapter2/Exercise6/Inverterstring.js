// Escreve uma função que inverta a ordem dos caracteres de uma string.

function inverter(s) {
  // Forma 1: Usando métodos pré-definidos
  /*
  const ans = s.split('').reverse().join('');
  return ans;
  */

  // Forma 2: Usando um for loop
  let ans = '';
  for (let i = s.length - 1; i >= 0; i--) {
    ans += s[i];
  }

  return ans;
}

let string = 'exemplo';
console.log('String invertida:', inverter(string));  // output: olpmexe
