// Dado um array de inteiros nums e um inteiro target, retorne os índices de dois números no array
// que somam o valor target.

function twoSum(nums, target) {
    for (item of nums) {
        for (itemI of (nums.filter(x => x !== item))) {
            if (item + itemI == target) {
                return [nums.indexOf(item), nums.indexOf(itemI)]
            }
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); //output: [0, 1]
