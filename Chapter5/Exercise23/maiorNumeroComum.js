// Dados dois arrays de números, retorna o maior número que esteja presente em ambos os arrays. Se não houver número comum, retorne -1.

function maiorNumeroComum(arr1, arr2) {
    let maiorComum  = -Infinity; 
    for (let i= 0; i<  arr1.length;i ++) { 
        if (arr2.includes(arr1[i]) && arr1[i]> maiorComum) { 
            maiorComum = arr1[i];
        }
    }
    return maiorComum === -Infinity? -1  : maiorComum;
}

console.log(maiorNumeroComum([1, 5, 10, 20], [3, 5, 10, 30])); //output: 10
console.log(maiorNumeroComum([1, 2, 3], [4, 5, 6])); //output: -1
