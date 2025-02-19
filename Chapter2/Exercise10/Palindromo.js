//Escreve uma função que verifique se uma palavra lida de trás para frente é igual à leitura normal.

function Palindromo(s) {
    let j=s.length-1;
    for (var i=0; i<s.length; i++){
        if (s[i] != s[j]){
            return false;
        }
        j--;
    }

    return true;
}

let palavra = "arara";
console.log("É palíndromo:", Palindromo(palavra)); //output: true
