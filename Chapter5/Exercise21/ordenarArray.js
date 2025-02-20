// Implementa uma função para ordenar um array de números em ordem crescente.

function ordenarArray(nums) {
    let trocou = true;
    let temp;
    while(trocou){
        trocou = false;
        for (var i=0; i<nums.length-1; i++){
            if (nums[i] > nums[i+1]){
                trocou = true;
                temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
            }
        }
    }

    return nums;
}

console.log(ordenarArray([4, 2, 7, 1, 9])); //output: [1, 2, 4, 7, 9]
