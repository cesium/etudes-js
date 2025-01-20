//Escreve uma função que remova todas as vogais de uma string

function removerVogais(s) {
    let lista = [...s]; 
    return lista.reduce((acc,c)=> {
        if (!(isVowel(c))) {
            return acc+c;
        } else {return acc}
    },""); 
}

function isVowel (x) { 
    return x === "a" || x === "e" || x ==="i" || x ==="o"|| x ==="u"; 
    // retunr "aeiouAEIOU".includes(x); 
}


function removerVogais2 (s) { 
    let lista = ""; 
    for (let i = 0; i <s.length;i++) { 
        if (!(isVowel(s[i]))) { 
            lista+=s[i];
        } 
    }
    return lista;
}

let string = "exemplo";
console.log("String sem vogais:", removerVogais2(string)); //output: xmpl
