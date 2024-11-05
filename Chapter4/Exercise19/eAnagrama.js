// Dadas duas strings, verifica se uma é o anagrama da outra (ou seja, se contêm os mesmos caracteres, com a mesma frequência, mas em qualquer ordem).

function eAnagrama(str1, str2) {
  if (str1.length !== str2.length) return false;

  let contador1 = {};
  let contador2 = {};

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];

    contador1[char1] = (contador1[char1] || 0) + 1;
    contador2[char2] = (contador2[char2] || 0) + 1;
  }

  for (let key in contador1) {
    if (contador1[key] !== contador2[key]) {
      return false;
    }
  }

  return true;
}

console.log(eAnagrama("listen", "silent")); //output: true
console.log(eAnagrama("hello", "bello")); //output: false
