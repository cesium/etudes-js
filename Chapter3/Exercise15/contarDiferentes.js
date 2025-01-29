// Escreve uma função que conte quantos caracteres únicos existem em uma string

function contarDiferentes(s) {
    let result = 0;
    let vistos = {};
    for (let char of s) {
        if (!vistos[char]) {
            result++;
            vistos[char] = true;
        }
    }
    return result
}

let stringDiferente = "aabbccdde";
console.log("Caracteres diferentes:", contarDiferentes(stringDiferente)); //output: 5
