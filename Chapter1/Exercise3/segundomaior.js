// Escreve uma função que encontre o segundo maior número em um array de inteiros

function segundoMaior(numero) {
    let numerosOrd = numero.sort()
    return numerosOrd[(numero.length)-2]
}

let numeros = [3, 5, 7, 2, 8];
console.log("Segundo maior número:", segundoMaior(numeros)); //output: 7
