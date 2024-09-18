function juntaArrays(arr1, arr2) {
    let novoArr = [...arr1]; // Copia o primeiro array para o novo array
    
    // Percorre o segundo array e adiciona os elementos que ainda não estão no novo array
    for (let i = 0; i < arr2.length; i++) {
      if (!novoArr.includes(arr2[i])) {
        novoArr.push(arr2[i]);
      }
    }
    
    // Retorna o array juntado sem duplicados
    return novoArr;
  }
  
  let arr1 = [1, 2, 3];
  let arr2 = [3, 4, 5];
  console.log("Arrays juntos:", juntaArrays(arr1, arr2)); //[ 1, 2, 3, 4, 5 ]