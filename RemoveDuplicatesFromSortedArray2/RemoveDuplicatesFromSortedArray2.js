/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let counter = {};
  let k = 0;
  nums.forEach((number) => {
    if (counter[number]) {
      counter[number] += 1;
    } else {
      counter[number] = 1;
    }
  });
  let counterKeys = Object.keys(counter);
  counterKeys.sort((a, b) => a - b);
  console.log(counterKeys);
  for (i = 0; i < counterKeys.length; i++) {
    if (counter[counterKeys[i]] === 1) {
      nums[k] = counterKeys[i];
      k++;
    } else if (counter[counterKeys[i]] >= 2) {
      nums[k] = counterKeys[i];
      k++;
      nums[k] = counterKeys[i];
      k++;
    }
  }
  return k;
};
