// Escreve uma função que calcule a média de uma sequência de números

function media(numeros) {
    let sum = 0;
    for (let i = 0; i < numeros.length; i++) {
        sum += numeros[i];
    }
    let r;
    r = sum / numeros.length;
    return r;
}

let numeros = [3, 5, 7, 2, 8]; F
console.log("Média:", media(numeros)); //output: 6
