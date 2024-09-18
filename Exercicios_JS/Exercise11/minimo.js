function minimoSimples(arr) {
    let min = arr[0]; // Assume o primeiro número como o menor
    
    // Verifica se há algum número menor no array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    
    // Retorna o menor número
    return min;
  }
  
  let numeros = [10, 5, 8, 1, 7];
  console.log("Menor número:", minimoSimples(numeros)); //output: 1 
  