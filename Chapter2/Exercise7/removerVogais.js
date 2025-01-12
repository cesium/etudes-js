// Verifica se um caractere minúsculo é uma vogal
function isVowel(c) {
  return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
}

// Escreve uma função que remova todas as vogais de uma string

function removerVogais(s) {
  let newStr = '';

  for (let i = 0; i < s.length; i++) {
    if (!isVowel(s[i])) {
      newStr += s[i];
    }
  }

  return newStr;
}

let string = 'exemplo';
console.log('String sem vogais:', removerVogais(string));  // output: xmpl
