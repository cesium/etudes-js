// Dados dois arrays de números, retorna o maior número que esteja presente em
// ambos os arrays. Se não houver número comum, retorne -1.

function maiorNumeroComum(arr1, arr2) {
  let i = 0;
  let maiorComum = -1;
  let ht1 = new Map();

  // Guarda todos os elementos do arr1 na hashtable
  for (i = 0; i < arr1.length; i++) {
    if (!ht1.has(arr1[i])) {
      ht1.set(arr1[i], true);
    }
  }

  // Itera sobre o arr2 e procura na hashtable
  for (i = 0; i < arr2.length; i++) {
    if (ht1.has(arr2[i])) maiorComum = arr2[i];
  }

  return maiorComum;
}

console.log(maiorNumeroComum([1, 5, 10, 20], [3, 5, 10, 30])); // output: 10
console.log(maiorNumeroComum([1, 2, 3], [4, 5, 6])); // output: -1
