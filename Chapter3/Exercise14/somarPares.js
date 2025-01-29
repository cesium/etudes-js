// Escreve uma função que some todos os números pares de um array

function somarPares(arr) {
    let sum = 0;
    for(let num of arr){
        if(num%2 == 0){
            sum += num;
        }
    }
    return sum;
}

let numerosPares = [1, 2, 3, 4, 5, 6];
console.log("Soma dos pares:", somarPares(numerosPares)); //output: 12
