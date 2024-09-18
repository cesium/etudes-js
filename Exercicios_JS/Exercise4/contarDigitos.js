function contarDigitos(n) {
    let contador = 0; // Contador de dígitos
    
    // Divide o número por 10 até que ele seja zero
    while (n > 0) {
      n = Math.floor(n / 10);
      contador++;
    }
    
    // Retorna a quantidade de dígitos
    return contador;
  }
  
console.log("Numero de digitos:", contarDigitos(440)); //output: 3  