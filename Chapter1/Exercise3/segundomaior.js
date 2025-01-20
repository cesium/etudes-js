// Escreve uma função que encontre o segundo maior número em um array de inteiros

function segundoMaior(numeros) {
    let maior = -Infinity ; 
    let sMaior = -Infinity; 
    if (numeros.length<=1) { 
        throw new Error ("Array should have more than 1 element"); 
    }
    for ( let i = 0; i < numeros.length; i++)  {
        let atual = numeros[i]; 
        if (atual>sMaior) { 
            if (atual> maior) { 
                sMaior = maior;
                maior = atual; 
            } else { 
                sMaior = atual; 
            }
        }
    }
    return sMaior; 
}

function segundoMaior2 (numeros) { 
    if (numeros.length<=1) { 
        throw new Error ("Array should have more than 1 element"); 
    }
    return segundoMAux(numeros,-Infinity,-Infinity); 
}

function segundoMAux (numeros, sMaior,maior) { 
    let atual = numeros[0];
    if (numeros.length === 0) { 
        return sMaior;
    }
    if (atual>sMaior) { 
        if (atual> maior) { 
            sMaior = maior;
            maior = atual; 
            return segundoMAux (numeros.slice(1),sMaior,maior)
        } else { 
            sMaior = atual; 
            return segundoMAux (numeros.slice(1),sMaior,maior)
        }
    } else {
    return segundoMAux (numeros.slice(1),sMaior,maior);
    }
}

// gpt 
function segundoMaior3 (numeros) { 
    if (numeros.length < 2) { 
        throw new Error ("The  list should have at least 2 elements"); 
    }
    const numsOrdenados = [...new Set(numeros)].sort((a,b)=> b -a); 
    if (numsOrdenados.length <2) { 
        throw new Error ("The array sould have more than 1 different value")
    } 
    return numsOrdenados[1]; 
}


let numeros = [3, 9, 7, 2, 8];
console.log("Segundo maior número:", segundoMaior3 (numeros)); //output: 7
