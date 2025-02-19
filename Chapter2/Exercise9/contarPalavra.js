//Escreve uma função que conte quantas palavras existem em uma string separadas por espaços.

function contarPalavrasSimples(s) {
    let count = 0;
    let isNewWord = true;
    for (var c of s){
        if (c!=' ' && isNewWord){
            count++;
            isNewWord = false;
        }

        if(c==' ' && !isNewWord){
            isNewWord = true;
        }
    }

    return count;
}

let frase = "exemplo de uma frase simples";
console.log("Número de palavras:", contarPalavrasSimples(frase)); //output: 5
