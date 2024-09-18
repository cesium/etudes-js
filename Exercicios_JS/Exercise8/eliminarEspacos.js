function eliminarEspacos(s) {
    let resultado = ""; // Armazena a string sem espaços extras
    let espacoAnterior = false; // Marca se o caractere anterior era um espaço
    
    // Percorre a string e adiciona um caractere à vez
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== " " || !espacoAnterior) {
        resultado += s[i];
      }
      // Atualiza o estado de espacoAnterior
      espacoAnterior = (s[i] === " ");
    }
    
    // Retorna a string sem espaços extras
    return resultado;
  }
  
  let stringComEspacos = "a    a bb     a";
  console.log("String sem espaços extras:", eliminarEspacos(stringComEspacos)); //output: aabba
  