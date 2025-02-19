// Escreve uma função que calcule o fatorial de um número n. O fatorial de n é o produto de todos os números inteiros de 1 a n.

function fatorial(n) {
    let r = 1;
    for (let i=1; i<=n; i++){
        r *= i;
    }
    return r;
}

console.log(fatorial(5)); //output: 120
