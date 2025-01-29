// Escreve uma função que elimine espaços extras em uma string, deixando apenas um espaço entre as palavras

function eliminarEspacos(s) {
    let resultado = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            resultado += s[i];
        }
    }
    return resultado;
}


function eliminarEspacos_do_chat(s) {
    return s.replace(/\s/g, "");
}

let stringComEspacos = "a    a bb     a";
console.log("String sem espaços extras:", eliminarEspacos(stringComEspacos)); //output: aabba
