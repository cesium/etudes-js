// Escreve uma função que conte quantos caracteres únicos existem em uma string

function contarDiferentes(s) {
    let str = []
    for (item of s) {
        if (!str.includes(item)) {
            str.push(item)
        }
    } return str.length
}

let stringDiferente = "aabbccdde";
console.log("Caracteres diferentes:", contarDiferentes(stringDiferente)); //output: 5
