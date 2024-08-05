/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Count number of times each element appears
  // Loop through to find the value that appears the most
  let counter = {};
  nums.forEach((number) => {
    if (counter[number]) {
      counter[number] += 1;
    } else {
      counter[number] = 1;
    }
  });
  let highestCount = 0;
  let majorityElement;
  Object.keys(counter).forEach((key) => {
    if (counter[key] > highestCount) {
      highestCount = counter[key];
      majorityElement = key;
    }
  });
  return majorityElement;
};
