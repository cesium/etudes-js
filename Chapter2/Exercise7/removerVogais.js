//Escreve uma função que remova todas as vogais de uma string

function removerVogais(s) {
    const vowels = "aeiouAEIOU"
    let str = ""
    for (item of s) {
        if (!vowels.includes(item)) {
            str += item
        }
    }
    return str
}

let string = "exemplo";
console.log("String sem vogais:", removerVogais(string)); //output: xmpl
