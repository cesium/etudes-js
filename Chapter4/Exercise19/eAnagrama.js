// Dadas duas strings, verifica se uma é o anagrama da outra (ou seja, se contêm os mesmos caracteres, com a mesma frequência, mas em qualquer ordem).

function eAnagrama(str1, str2) {
  str1 = [...str1]; 
  str2 = [...str2];
  for( let i = 0; i< str1.length; i++) { 
    for (let j = 0; j< str2.length;j++) { 
      if (str1[i]=== str2[j]) { 
        str1.splice(i,1);
        str2.splice(j,1);
        i--; 
      }
    }
  }
  if (str1.length === 0 && str2.length === 0) { 
    return true ;
  } return false;
}

console.log(eAnagrama("listen", "silent")); //output: true
console.log(eAnagrama("tello", "lelto")); //output: false

