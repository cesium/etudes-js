// Escreve uma função que conte quantos caracteres únicos existem em uma string
// Com hashmap (O(n))
function contarDiferentes(s) {
  const hashMap = new Map();
  let count = 0;

  for (const char of s) {
    if (!hashMap.has(char)) {
      hashMap.set(char, true);
      count++;
    }
  }

  return count;
}

// Com set (O(n) também)
/*
function contarDiferentes(s) {
  const caracteresUnicos = new Set(s);
  return caracteresUnicos.size; // O tamanho do Set será o número de caracteres únicos, porque o set não guarda duplicados
}
*/
let stringDiferente = "aabbccdde";
console.log("Caracteres diferentes:", contarDiferentes(stringDiferente)); // output: 5
