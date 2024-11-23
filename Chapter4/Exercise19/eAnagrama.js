// Dadas duas strings, verifica se uma é o anagrama da outra (ou seja, se contêm os mesmos caracteres, com a mesma frequência, mas em qualquer ordem).

function eAnagrama(str1, str2) {
  if (!str1.length == str2.length) return false

  for (item of str1) {
    if (!str2.includes(item)) return false
  }

  for (item of str2) {
    if (!str1.includes(item)) return false
  }

  return true
}

console.log(eAnagrama("listen", "silent")); //output: true
console.log(eAnagrama("hello", "bello")); //output: false
