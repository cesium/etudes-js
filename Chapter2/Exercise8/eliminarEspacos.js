// Escreve uma função que elimine espaços extras em uma string, deixando apenas
// um espaço entre as palavras

function eliminarEspacos(s) {
  return s.replaceAll(' ', '');
}

let stringComEspacos = 'a    a bb     a';
console.log(
    'String sem espaços extras:',
    eliminarEspacos(stringComEspacos));  // output: aabba
