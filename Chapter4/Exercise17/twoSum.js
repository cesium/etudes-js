// Dado um array de inteiros nums e um inteiro target, retorne os índices de
// dois números no array que somam o valor target.

// Solução ineficiente (O(n^2))
/* function twoSum(nums, target) {
  let index = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        index.push(i, j);
        break;
      }
    }
  }

  return index;
}
*/

// Solução eficiente (O(n))
function twoSum(nums, target) {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i];

    if (hashMap.has(dif)) {
      return [hashMap.get(dif), i];
    }

    hashMap.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // output: [0, 1]
