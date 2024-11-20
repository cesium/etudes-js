// Dados dois arrays de números, retorna o maior número que esteja presente em ambos os arrays. Se não houver número comum, retorne -1.

function maiorNumeroComum(arr1, arr2) {
    let max = 0
    for (item of arr1) {
        if (arr2.includes(item)) {
            if (max < item) {
                max = item
            }
        }
    } return max || -1
}

console.log(maiorNumeroComum([1, 5, 10, 20], [3, 5, 10, 30])); //output: 10
console.log(maiorNumeroComum([1, 2, 3], [4, 5, 6])); //output: -1
