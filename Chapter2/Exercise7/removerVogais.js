//Escreve uma função que remova todas as vogais de uma string

function removerVogais(s) {
    let r = "";
    for (let c of s){
        if (!(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U')){
            r += c;
        }
    }

    return r;
}

let string = "exemplo";
console.log("String sem vogais:", removerVogais(string)); //output: xmpl
