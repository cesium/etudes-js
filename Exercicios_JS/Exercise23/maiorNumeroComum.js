function maiorNumeroComum(arr1, arr2) {
    let maior = -1;
  
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j] && arr1[i] > maior) {
          maior = arr1[i];
        }
      }
    }
  
    return maior;
}
  
console.log(maiorNumeroComum([1, 5, 10, 20], [3, 5, 10, 30])); //output: 10
console.log(maiorNumeroComum([1, 2, 3], [4, 5, 6])); //output: -1