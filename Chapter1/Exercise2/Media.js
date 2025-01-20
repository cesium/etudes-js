// Escreve uma função que calcule a média de uma sequência de números

function media(numero) {
    let soma = 0;
    for (let i = 0; i< numero.length; i ++ ) { 
        soma+= numero[i];
    }
    return soma/numero.length; 
}


// recursividade 
function media2 (numero) { 
    if (numero.length=== 0) { 
        throw new Error ("Array cannot be empty!"); 
    }
    return mediaAux (numero,0,0);    
}

function mediaAux (numero, comp, soma) { 
    if (numero.length === 0) { 
        return soma/comp;
    } else { 
        soma += numero[0];
        comp ++;
        return mediaAux (numero.slice(1),comp,soma);
    }
}

// chat gpt 
function media3 (numero) { 
    if (numero.length === 0) { 
        throw new Error ("List can not be empty"); 
    }
    let soma = numero.reduce ((num,acc)=> num+acc, 0 ) // reduce é o que se compara ao  
    return  soma/numero.length; 
}

let numeros = [3, 5, 7, 2, 8];
console.log("Média:", media3(numeros)); //output: 5
