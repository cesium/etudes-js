// Dados dois arrays de números, retorna o maior número que esteja presente em ambos os arrays. Se não houver número comum, retorne -1.

function maiorNumeroComum(arr1, arr2) {
    let maior = -1;
    for(let elem of arr1){
        for (let elem2 of arr2){
            if(elem2==elem && elem > maior) maior = elem;
        }
    }
    return maior;
}

function maiorNumeroComum_com_set(arr1, arr2) {
    let setArr2 = new Set(arr2); // Converte arr2 em um conjunto para busca rápida
    let maior = -1;

    for (let elem of arr1) {
        if (setArr2.has(elem) && elem > maior) {
            maior = elem;
        }
    }
    return maior;
}

console.log(maiorNumeroComum([1, 5, 10, 20], [3, 5, 10, 30])); //output: 10
console.log(maiorNumeroComum([1, 2, 3], [4, 5, 6])); //output: -1
