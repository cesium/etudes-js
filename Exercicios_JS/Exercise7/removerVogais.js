function removerVogais(s) {
    let resultado = ""; // Armazena a string sem vogais
    let vogais = "aeiouAEIOU"; // Define os caracteres considerados vogais
    
    // Percorre a string e adiciona apenas os caracteres que não são vogais
    for (let i = 0; i < s.length; i++) {
      if (!vogais.includes(s[i])) {
        resultado += s[i];
      }
    }
    
    // Retorna a string sem vogais
    return resultado;
  }
  
  let string = "exemplo";
  console.log("String sem vogais:", removerVogais(string)); //output: xmpl
  