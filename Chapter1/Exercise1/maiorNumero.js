//Escreve uma função que receba uma lista de números inteiros e retorna o maior número


function maiorNumero(lista) {
    let max = 0
    for (let i = 0; i < lista.length; i++)
        if (max < lista[i]) {
            max = lista[i]
        }
    return max
}

//ouu

function maiorNumero2(lista) {
    let max = 0
    for (item of lista)
        if (max < item) {
            max = item
        }
    return max
}   





let numeros = [3, 5, 7, 2, 8];
console.log("Maior número:", maiorNumero(numeros)); //output: 8
