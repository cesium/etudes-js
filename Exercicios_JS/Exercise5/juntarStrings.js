function juntarStrings(s1, s2) {
    let resultado = ""; // Armazena a string concatenada
    
    // Adiciona os caracteres da primeira string
    for (let i = 0; i < s1.length; i++) {
      resultado += s1[i];
    }
    
    // Adiciona os caracteres da segunda string
    for (let j = 0; j < s2.length; j++) {
      resultado += s2[j];
    }
    
    // Retorna a string concatenada
    return resultado;
}
  
console.log("Strings juntas:", juntarStrings("Hello, ", "World!"));