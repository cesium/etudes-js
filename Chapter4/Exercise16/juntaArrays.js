// Escreve uma função que mescle dois arrays e remova os elementos duplicados do
// array resultante

function juntaArrays(arr1, arr2) {
  const temp = arr1.concat(arr2);
  let newArr = [];

  const hashMap = new Map();

  for (let num of temp) {
    if (!hashMap.has(num)) {
      hashMap.set(num, true);
      newArr.push(num);
    }
  }

  return newArr;
}

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
console.log("Arrays juntos:", juntaArrays(arr1, arr2)); //[ 1, 2, 3, 4, 5 ]
