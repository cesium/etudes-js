// Implementa uma função para ordenar um array de números em ordem crescente.

function ordenarArray(nums) {
    if (nums.length <= 1) {
        return nums; 
    }

    const meio = Math.floor(nums.length / 2); 
    const esquerda = ordenarArray(nums.slice(0, meio)); 
    const direita = ordenarArray(nums.slice(meio)); 

    return merge(esquerda, direita); 
}

function merge(esquerda, direita) {
    let resultado = [];
    let i = 0, j = 0;

    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i] < direita[j]) {
            resultado.push(esquerda[i]);
            i++;
        } else {
            resultado.push(direita[j]);
            j++;
        }
    }
    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j)); //chat
}
console.log(ordenarArray([4, 2, 7, 1, 9])); //output: [1, 2, 4, 7, 9]
