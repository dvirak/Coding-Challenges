/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //Work backwards to determine if each space you need to jump to can be reached from the current spot
  // consider the last index of the array as the maximum "jump distance" and the number at the current index as your maximum possible jump
  // If you can reach that index from the maximum jump in the current position, then its true, else its false
  // Its hard to explain this in words
  // If i consider the last index being array.length - 1 then I know I have to jump that far to get there
  // I look at the jump distance of the next index, so array[array.length - 2] and if thats bigger than the lastIndex - (lastIndex - 1) then I know I can reach that spot
  // Create an array of the same length as nums and fill with false valuse
  let dp = Array(nums.length).fill(false);
  // set the last value as true
  dp[nums.length - 1] = true;
  // Make the last index of the dp array true because thats where we need to get
  let lastTrueIndex = dp.length - 1;

  // Work backwards starting with the second to last index, since we already did the last
  for (let i = nums.length - 2; i >= 0; i--) {
    // Check if the number at the current index is greater than the distance from the last "true" index
    if (nums[i] >= lastTrueIndex - i) {
      // Set the value at the current index of the dp array to true
      dp[i] = true;
      // Set the lastTrueIndex to the current index, because we know if we can get there then we can keep jumping I guess idk how to put this in words
      lastTrueIndex = i;
    }
  }
  // Return the value at the first index of dp because at this point we will know if we have been able to reach the goal from one of the spots in  the array
  return dp[0];
};
