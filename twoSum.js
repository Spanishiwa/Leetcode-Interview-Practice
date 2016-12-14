function twoSum(numbers, target) {
  let index1 = 1;
  let index2 = 1;
  let uniqNums = [];

  for (let j = 0; j < numbers.length; j += 1) {
    if (uniqNums.indexOf(numbers[j]) === -1) {
      uniqNums.push(numbers[j]);
    }
  }

  for (let i = 0; i < numbers.length - 1; i += 1) {
    const firstNum = numbers[i];
    const missingNum = target - firstNum;
    if (uniqNums.includes(missingNum)) {
      const missingNumIdx = numbers.indexOf(missingNum, i+1);
      if (missingNumIdx !== -1) {
        index1 += i;
        index2 += missingNumIdx;
      }
    }
  }

  return [index1, index2];
}

console.log(twoSum([0, 0, 3, 4], 0));
