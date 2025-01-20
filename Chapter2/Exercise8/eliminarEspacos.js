// Escreve uma função que elimine espaços extras em uma string, deixando apenas um espaço entre as palavras

function eliminarEspacos(s) {
    let palavra = ""; 
    for (let i =0; i< s.length;i++) { 
        if (s[i] !== " ") { 
            palavra+= s[i];
        }
    }
    return palavra; 
}

// Deixar apenas um espaço entre cada palavra
function eliminarEspacos2 (s) { 
    return [...s].reduce ((acc,atual)=> { 
        if (atual == " ") { 
            if (acc[acc.length-1] == " " || acc.length == 0){ 
                return acc; 
            } else return acc + atual;
        }
        return acc + atual; 
    }, "")
}

let stringComEspacos = " a    a bb     a";
console.log("String sem espaços extras:", eliminarEspacos2(stringComEspacos)); //output: aabba
