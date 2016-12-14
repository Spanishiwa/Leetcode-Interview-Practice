function missingNumber(nums) {
  const missingSum = nums.reduce((p, c) => {
    return (p + c);
  }, 0);
  
  const maxNum = nums.length;
  const trueSum = (maxNum * (maxNum + 1) / 2);

  return (trueSum - missingSum);

}

console.log(missingNumber([0,1,3]));
