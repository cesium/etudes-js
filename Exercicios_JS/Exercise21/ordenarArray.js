function ordenarArray(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length - 1; j++) {
        if (nums[j] > nums[j + 1]) {
          let temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
        }
      }
    }
    return nums;
}

console.log(ordenarArray([4, 2, 7, 1, 9])); //output: [1, 2, 4, 7, 9]  