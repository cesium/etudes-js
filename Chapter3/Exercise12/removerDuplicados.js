// Escreve uma função que remova todos os elementos duplicados de um array.
// Usando um hashmap, a solução é O(n)
function removeDuplicados(arr) {
  const hashmap = new Map();
  let newArr = [];

  for (const valor of arr) {
    if (!hashmap.has(valor)) {
      hashmap.set(valor, true);
      newArr.push(valor);
    }
  }

  return newArr;
}


let arrDuplicados = [1, 2, 3, 2, 1, 4, 5];
console.log(
    'Array sem duplicatas:',
    removeDuplicados(arrDuplicados));  // output: [ 1, 2, 3, 4, 5 ]
