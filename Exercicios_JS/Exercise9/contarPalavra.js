function contarPalavrasSimples(s) {
    // Divide a string em palavras separadas por espaço
    let palavras = s.split(" ");
    let contador = 0;
    
    // Conta as palavras não vazias
    for (let i = 0; i < palavras.length; i++) {
      if (palavras[i] !== "") {
        contador++;
      }
    }
    
    // Retorna o número de palavras
    return contador;
  }

let frase = "exemplo de uma frase simples";
console.log("Número de palavras:", contarPalavrasSimples(frase)); //output: 5  