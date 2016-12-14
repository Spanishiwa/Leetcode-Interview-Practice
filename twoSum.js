function twoSum(numbers, target) {
  let index1 = 1;
  let index2 = 1;

  for (let i = 0; i < numbers.length - 1; i += 1) {
    const firstNum = numbers[i];
    const missingNum = target - numbers[i];
    const missingNumIdx = numbers.indexOf(missingNum);

    if (missingNumIdx !== -1) {
      console.log(missingNumIdx);
      index1 += i;
      index2 += missingNumIdx;
    }
  }

  return index1, index2;
}

console.log(twoSum([2,7,11,15], 9));
