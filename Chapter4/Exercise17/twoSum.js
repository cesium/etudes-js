// Dado um array de inteiros nums e um inteiro target, retorne os índices de dois números no array
// que somam o valor target.

function twoSum(nums, target) {
    for (var i=0; i<nums.length; i++){
        for (var j=0; j<nums.length; j++){
            if (nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
    return "Não existe";
}

console.log(twoSum([2, 7, 11, 15], 9)); //output: [0, 1]
