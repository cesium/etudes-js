function twoSum(nums, target) {
    // Percorre o array comparando cada número com os seguintes
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
  
console.log(twoSum([2, 7, 11, 15], 9)); //output: [0, 1]