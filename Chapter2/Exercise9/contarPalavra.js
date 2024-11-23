//Escreve uma função que conte quantas palavras existem em uma string separadas por espaços.

function contarPalavrasSimples(s) {
    return s.split(" ").length
}

let frase = "exemplo de uma frase simples";
console.log("Número de palavras:", contarPalavrasSimples(frase)); //output: 5
