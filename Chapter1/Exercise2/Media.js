// Escreve uma função que calcule a média de uma sequência de números

function media(numero) {
    let soma = 0
    for (item of numero)
        soma += item
    return soma/numero.length
}  

let numeros = [3, 5, 7, 2, 8];
console.log("Média:", media(numeros)); //output: 5
