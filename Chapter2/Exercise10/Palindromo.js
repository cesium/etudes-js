//Escreve uma função que verifique se uma palavra lida de trás para frente é igual à leitura normal.

function Palindromo(s) {
    const reversed = s.split("").reverse().join("")
    if (reversed == s) {
        return true
    } else {
        return false
    }
}

let palavra = "arara";
console.log("É palíndromo:", Palindromo(palavra)); //output: true
