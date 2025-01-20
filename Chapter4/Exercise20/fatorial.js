// Escreve uma função que calcule o fatorial de um número n. O fatorial de n é o produto de todos os números inteiros de 1 a n.

function fatorial(n) {
    let fatorial = 1;
    for (i=1; i<= n;i++) { 
        fatorial*=i;
    }
    return fatorial; 
}

function fatorial2 (n) { 
    if ( n===1) { 
        return 1;
    } 
    let fat = n * fatorial2(n-1);
    return fat;
}

console.log(fatorial2(5)); //output: 120
