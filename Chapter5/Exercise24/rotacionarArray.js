// Dado um array de números e um número k, rotaciona o array para a direita k vezes. A rotação move o último elemento do array para a primeira posição.

function rotacionarArray(arr, k) {
    let tempNow,tempNext;
    for (var x=0; x<k; x++){
        for (var i=0; i<arr.length; i++){
            tempNow = tempNext;
            tempNext = arr[i];
            if(i-1 == -1){
                arr[i] = arr[arr.length-1];
            }else{
                arr[i] = tempNow;
            }
        }
    }
    return arr;
}

console.log(rotacionarArray([1, 2, 3, 4, 5], 2)); //output: [4, 5, 1, 2, 3]
