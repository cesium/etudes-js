//Escreve uma função que conte quantas palavras existem em uma string separadas por espaços.

function contarPalavrasSimples(s) {
    let contagem = 0; 
    for ( let i=0; i < s.length; i ++) { 
        if (s[i-1] === undefined || s[i-1] === " "){ 
            if (s[i] !== " ") { 
                contagem++;
            } 
            contagem;
        }
    }
    return contagem;
}


// Chat gpt  
function contarPalavrasSimples2 (s) { 
    return s.split(/\s+/).length 
}

let frase = "exemplo de uma frase simples";
console.log("Número de palavras:", contarPalavrasSimples2 (frase)); //output: 5
