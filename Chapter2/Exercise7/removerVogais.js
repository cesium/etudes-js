//Escreve uma função que remova todas as vogais de uma string

function removerVogais(s) {
    let resultado = "";
    for(let i = 0; i<s.length;i++){
        let char = s[i].toLowerCase();
        if(char != 'a' && char != 'e' && char != 'i' && char != 'o' && char!= 'u'){
            resultado += s[i];
        }
    }
    return resultado;
}
function removerVogais_talvezmelhornaosei(s) {
    return s.replace(/[aeiouAEIOU]/g, ""); // Remove todas as vogais
}

let string = "exemplo";
console.log("String sem vogais:", removerVogais(string)); //output: xmpl
