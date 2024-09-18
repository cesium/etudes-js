function media(numeros) {
    let soma = 0; // Acumulador para a soma dos números
    
    // Soma todos os números da sequência
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    
    // Retorna a média (soma dividida pelo número de elementos)
    return soma / numeros.length;
}

let numeros = [3, 5, 7, 2, 8];
console.log("Média:", media(numeros)); //output: 5
  