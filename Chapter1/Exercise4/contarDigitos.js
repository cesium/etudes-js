// Escreve uma função que conte quantos dígitos um número inteiro possui

function contarDigitos(n) {
    let i = 0;
    n = Math.abs(n);
    while (n >= 1) {
        n /= 10;
        i++;
    }
    return i;
}

console.log("Numero de digitos:", contarDigitos(-1)); //output: 3
