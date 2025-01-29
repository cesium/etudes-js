//Escreve uma função que conte quantas palavras existem em uma string separadas por espaços.

function contarPalavrasSimples(s) {
    if (s.length < 1) return 0;
    let resultado = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] == " " && s[i] != " ") {
            resultado++;
        }
    }
    return resultado;
}

let frase = "exemplo de uma frase simples";
console.log("Número de palavras:", contarPalavrasSimples(frase)); //output: 5
