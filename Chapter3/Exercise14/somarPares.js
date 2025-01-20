// Escreve uma função que some todos os números pares de um array

function somarPares(arr) {
    return arr.reduce((acc,num) => {
        if (num%2 == 0){ 
            return acc+= num;
        }
        return acc; 
    },0)
}


let numerosPares = [1, 2, 3, 4, 5, 6];
console.log("Soma dos pares:", somarPares(numerosPares)); //output: 12
