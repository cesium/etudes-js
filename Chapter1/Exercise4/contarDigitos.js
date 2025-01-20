// Escreve uma função que conte quantos dígitos um número inteiro possui

function contarDigitos(n) {
    let i = 0;
    while (n>= 10) { 
        n /= 10; 
        i++;
    }
    return (i+1);
}

// chat  gpt 
 function contarDigitos2 (n) { 
    return Math.abs(n).toString().length; 
 }


console.log("Numero de digitos:", contarDigitos(440)); //output: 3
