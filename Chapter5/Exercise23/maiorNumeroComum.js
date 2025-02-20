// Dados dois arrays de números, retorna o maior número que esteja presente em ambos os arrays. Se não houver número comum, retorne -1.

function maiorNumeroComum(arr1, arr2) {
    let trocou = true;
    let temp;
    while(trocou){
        trocou = false;
        for (var i=0; i<arr1.length-1; i++){
            if (arr1[i]<arr1[i+1]){
                trocou = true;
                temp = arr1[i];
                arr1[i] = arr1[i+1];
                arr1[i+1] = temp;
            }
        }
    }

    for (var el1 of arr1){
        for (var el2 of arr2){
            if (el1 == el2){
                return el1;
            }
        }
    }

    return -1;
}

console.log(maiorNumeroComum([1, 5, 10, 20], [3, 5, 10, 30])); //output: 10
console.log(maiorNumeroComum([1, 2, 3], [4, 5, 6])); //output: -1
