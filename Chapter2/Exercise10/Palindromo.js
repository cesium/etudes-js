//Escreve uma função que verifique se uma palavra lida de trás para frente é igual à leitura normal.
function inverter(s) {
    let result = "";
    for(let i = 0, j = s.length-1; i<s.length;i++, j--){
        result += s[j];
    }
    return result;
}

function Palindromo(s) {
    // versão diferente let reverse = s.split("").reverse().join("");
    let reverse = inverter(s);
    return s === reverse;
}

let palavra = "arara";
console.log("É palíndromo:", Palindromo(palavra)); //output: true
