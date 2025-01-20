// Escreve uma função que conte quantos caracteres únicos existem em uma string

function contarDiferentes(s) {
    let diferentes = []; 
    let contagem = 0;
    for (let i = 0; i<s.length; i++) { 
        if (!diferentes.includes(s[i])) { 
            diferentes.push(s[i]); 
            contagem++;
        }
    }
    return contagem; 

}

let stringDiferente = "aabbccddefgh";
console.log("Caracteres diferentes:", contarDiferentes(stringDiferente)); //output: 5
