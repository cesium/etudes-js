// Escreve uma função que encontre o segundo maior número em um array de inteiros

function segundoMaior(numeros) {
    let max = numeros[0];
    let sMax = numeros[0];
    for(var n of numeros){
        if (n > max){
            sMax = max;
            max = n;
        }
    }

    return sMax;
}

let numeros = [3, 5, 7, 2, 8];
console.log("Segundo maior número:", segundoMaior(numeros)); //output: 7
