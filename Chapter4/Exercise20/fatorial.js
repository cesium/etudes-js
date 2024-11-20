// Escreve uma função que calcule o fatorial de um número n. O fatorial de n é o produto de todos os números inteiros de 1 a n.

function fatorial(n) {
    let result = 1        //fatorial de 0 é 1
    for (let i = 1; i<=n; i++) {
        result *= i
    } return result
}

console.log(fatorial(5)); //output: 120
