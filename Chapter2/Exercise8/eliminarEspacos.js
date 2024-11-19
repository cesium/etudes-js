// Escreve uma função que elimine espaços extras em uma string, deixando apenas um espaço entre as palavras

function eliminarEspacos(s) {
    str = ""
    for (item of s.split("")) {
        if (item!=" ") {
            str += item
        }
    }
    return str
}

let stringComEspacos = "a    a bb     a";
console.log("String sem espaços extras:", eliminarEspacos(stringComEspacos)); //output: aabba
