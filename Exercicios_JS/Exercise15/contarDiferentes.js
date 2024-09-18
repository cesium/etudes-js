function contarDiferentes(s) {
    let caracteres = []; // Array para armazenar os caracteres únicos
    
    // Percorre a string e adiciona os caracteres únicos ao array
    for (let i = 0; i < s.length; i++) {
      if (!caracteres.includes(s[i])) {
        caracteres.push(s[i]);
      }
    }
    
    // Retorna o número de caracteres únicos
    return caracteres.length;
}
  
let stringDiferente = "aabbccdde";
console.log("Caracteres diferentes:", contarDiferentes(stringDiferente)); //output: 5
  