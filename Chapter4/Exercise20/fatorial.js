// Escreve uma função que calcule o fatorial de um número n. O fatorial de n é o produto de todos os números inteiros de 1 a n.

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * fatorial(n - 1);
}

console.log(fatorial(5)); //output: 120
