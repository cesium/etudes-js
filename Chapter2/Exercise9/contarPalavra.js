// Escreve uma função que conte quantas palavras existem em uma string separadas
// por espaços.

// Usando um for loop
/*
function contarPalavrasSimples(s) {
  let count = 0;
  let comeco = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " " && comeco) {
      count++;
      comeco = false;
    }

    if (s[i] == " ") {
      comeco = true;
    }
  }

  return count;
}
*/
// Usando métodos do JS
function contarPalavras(s) {
  return s.split(" ").filter((palavra) => palavra !== "").length;
}

let frase = "exemplo de uma frase simples";
console.log("Número de palavras:", contarPalavrasSimples(frase)); // output: 5
