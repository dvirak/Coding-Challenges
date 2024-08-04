/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // For loop through nums
  // if nums[i] != val
  // nums[k] = nums[i]
  // k ++
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    if (currentNumber !== val) {
      // nums[i] = nums [k]
      nums[k] = currentNumber;
      k++;
    }
  }
  return k;
};
