//Escreve uma função que verifique se uma palavra lida de trás para frente é igual à leitura normal.

function Palindromo(s) {
    for (let i =0; i< s.length; i++) {
        if (s[i] != s[s.length-1-i]) { 
            return false;
        }
    }
    return true;
}

function Palindromo2 (s) { 
    return JSON.stringify([...s]) === JSON.stringify([...s].reverse())
}

let palavra = "arara";
console.log("É palíndromo:", Palindromo2(palavra)); //output: true
