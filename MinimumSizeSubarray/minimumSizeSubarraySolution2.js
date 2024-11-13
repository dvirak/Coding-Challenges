// So i need to be keeping track of 2 points
// Left and right
// we just adding numbers and sliding out right to the right until we meet the target
// Then we check if we can remove any from the left and remain above the target
// Then we check if our current subarray is smaller than the previous one

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let currentSum = 0;
  let minLength = Infinity;

  while (right < nums.length) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }

    right++;
  }

  return isFinite(minLength) ? minLength : 0;
};
