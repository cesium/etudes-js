function removeDuplicados(arr) {
    let novoArr = []; // Array para armazenar os elementos únicos
    
    // Verifica se o elemento já está no novo array antes de adicioná-lo
    for (let i = 0; i < arr.length; i++) {
      if (!novoArr.includes(arr[i])) {
        novoArr.push(arr[i]);
      }
    }
    
    // Retorna o array sem duplicatas
    return novoArr;
}
  
let arrDuplicados = [1, 2, 3, 2, 1, 4, 5];
console.log("Array sem duplicatas:", removeDuplicados(arrDuplicados)); //output: [ 1, 2, 3, 4, 5 ]  