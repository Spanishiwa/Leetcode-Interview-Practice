function arithmeticSlices(nums) {
  let count = 0;
  let len = nums.length;

  for (let i = 0; i < len - 2; i += 1) {
    let endSlice = (i+3);
    let slice = nums.slice(i, endSlice);

    while (endSlice <= len && arithmetic(slice)) {
      count += 1;
      endSlice += 1;
      slice = nums.slice(i, endSlice);
    }
    endSlice = (i+3);
  }

  return count;
}

function arithmetic(nums) {
  let diff1 = (nums[1] - nums[0]);
  let diff2 = (nums[nums.length - 1] - nums[nums.length - 2]);

  return (diff2 === diff1);
}

// console.log(arithmeticSlices([1, 2, 3, 4]));
console.log(arithmeticSlices([1,2,3,8,9,10]));
