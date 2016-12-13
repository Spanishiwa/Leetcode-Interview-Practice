function findKthLargest(nums, k) {
  const freqObj = {};

  for (let i = 0; i < nums.length; i +=1) {
    if (freqObj[nums[i]]) {
      freqObj[nums[i]] += 1;
    }
    else {
      freqObj[nums[i]] = 1;
    }
  }

  return Object.keys(freqObj).sort((p, c) => {
      return (freqObj[c] - freqObj[p]);
  }).slice(0, k).map(j => parseInt(j));
}

console.log(findKthLargest([3,2,1,5,6,4], 2));
