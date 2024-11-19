// Escreve uma função que conte quantos dígitos um número inteiro possui

function contarDigitos2(n) {
    let i = 0
    while (n > 0) {
        n = Math.floor(n / 10)
        i++
    }
    return i
}

// ouu

function contarDigitos(n) {
    return n.toString().length
}

console.log("Numero de digitos:", contarDigitos2(440)); //output: 3

