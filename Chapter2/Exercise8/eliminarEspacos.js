// Escreve uma função que elimine espaços extras em uma string, deixando apenas um espaço entre as palavras

function eliminarEspacos(s) {
    let isSpace = false;
    let r = "";
    for (var c of s){
        if(!isSpace){
            if(c==' '){
                isSpace = true;
            }
            r += c;
        }
        if (isSpace && c != ' '){
            isSpace = false;
            r += c;
        }
    }

    return r;
}

let stringComEspacos = "a    a bb     a";
console.log("String sem espaços extras:", eliminarEspacos(stringComEspacos)); //output: aabba
