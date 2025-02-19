// Escreve uma função que conte quantos dígitos um número inteiro possui

function contarDigitos(n) {
    if (n==0){
        return 1;
    }

    let r=0;
    for (let i=0; true; i++){
        if (10**i > n){
            break;
        }
        r++;
    }
    return r;
}

console.log("Numero de digitos:", contarDigitos(440)); //output: 3
