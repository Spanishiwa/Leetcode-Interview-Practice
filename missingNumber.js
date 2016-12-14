function missingNumber(nums) {
  const previousNum = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] !== previousNum + 1) {
      return (previousNum + 1);
    }
  }
}

console.log(missingNumber([0,1,3]));
