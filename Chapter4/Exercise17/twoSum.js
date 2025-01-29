// Dado um array de inteiros nums e um inteiro target, retorne os índices de dois números no array
// que somam o valor target.

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
}

function twoSum2(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i];
        if (map.has(complemento)) {
            return [map.get(complemento), i];
        }
        map.set(nums[i], i);
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); //output: [0, 1]
