// Escreve uma função que verifique se uma palavra lida de trás para frente é
// igual à leitura normal.

function Palindromo(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] != s[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

let palavra = 'arara';
console.log('É palíndromo:', Palindromo(palavra));  // output: true
