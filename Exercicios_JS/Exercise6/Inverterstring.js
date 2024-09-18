function inverter(s) {
    let resultado = ""; // Armazena a string invertida
    
    // Percorre a string de trás para frente e adiciona cada caractere à variável resultado
    for (let i = s.length - 1; i >= 0; i--) {
      resultado += s[i];
    }
    
    // Retorna a string invertida
    return resultado;
}
  
let string = "exemplo";
console.log("String invertida:", inverter(string)); //output: olpmexe