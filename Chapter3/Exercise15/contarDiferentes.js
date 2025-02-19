// Escreve uma função que conte quantos caracteres únicos existem em uma string

function contarDiferentes(s) {
    let arr = [];
    let i = 0;
    for (var c of s){
        if (!(arr.includes(c))){
            arr[i++] = c;
        }
    }
    return arr.length;
}

let stringDiferente = "aabbccdde";
console.log("Caracteres diferentes:", contarDiferentes(stringDiferente)); //output: 5
