//Escreve uma função que receba uma lista de números inteiros e retorna o maior número

// com for loop 
function maiorNumero(lista) {
    if (lista.length === 0) { 
        throw new Error ("Empty List");
    } else { 
        let  maior = lista[0];
        for (let i = 0; i < lista.length; i++ ) { 
            if (lista[i] > maior ) { 
                maior = lista[i];
            }
        }
        return maior; 
    }
}

// Com recursividade 
function maiorNumero2 (lista) { 
    if (lista.length === 1) { 
        return lista[0]; 
    } else { 
        let maiorResto = maiorNumero2(lista.slice(1));
        return maiorResto > lista[0]? maiorResto : lista[0]; 
    }
}

function maiorNumero3 (lista) { 
    return Math.max (...lista); 
}

let numeros = [2,3,9,8,6];
console.log("Maior número:", maiorNumero3(numeros)); //output: 8

