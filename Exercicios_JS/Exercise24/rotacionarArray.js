function rotacionarArray(arr, k) {
    for (let i = 0; i < k; i++) {
      let ultimo = arr[arr.length - 1];
      for (let j = arr.length - 1; j > 0; j--) {
        arr[j] = arr[j - 1];
      }
      arr[0] = ultimo;
    }
  
    return arr;
  }
  
console.log(rotacionarArray([1, 2, 3, 4, 5], 2)); //output: [4, 5, 1, 2, 3]