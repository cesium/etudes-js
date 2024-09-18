function somarPares(arr) {
    let soma = 0; // Acumulador para a soma dos números pares
    
    // Percorre o array e soma os números que são pares
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        soma += arr[i];
      }
    }
    
    // Retorna a soma dos números pares
    return soma;
  }
  
  let numerosPares = [1, 2, 3, 4, 5, 6];
  console.log("Soma dos pares:", somarPares(numerosPares)); //output: 12
  