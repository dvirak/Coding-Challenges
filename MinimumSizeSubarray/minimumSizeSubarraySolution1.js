// INITIAL SOLUTION, times out with bigger data sets
// So we need keep track of:
//  1. numOfInd
//  2. currentSum
//  3. minLength
// So if we start with a for loop
// while currentSum < target
//  currentSum += nums[i]
//  numOfInd++
//  i++
// could I initialize a sliding window by finding the first length of subarray that sums up beyond target?
// Then check within that sub array until we find a smaller one?
//
// Could I check if the currentSubArray is longer than our current minimum, then we just move on

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let numOfInd = 0;
  let currentSum = 0;
  let minLength = nums.length;
  let maxInd = nums.length;

  if (nums.reduce((a, b) => a + b) < target) return 0;

  for (let i = 0; i < maxInd; i++) {
    // console.log("NEW LOOP")
    // console.log("i = " + i)
    // console.log("currentSum = " + currentSum)
    // console.log("numOfInd = " + numOfInd)
    while (currentSum < target && i + numOfInd < maxInd) {
      if (numOfInd > minLength) continue;
      // console.log("IN WHILE LOOP")
      // console.log("i = " + i)
      currentSum += nums[i + numOfInd];
      numOfInd++;
      // console.log("currentSum = " + currentSum)
      // console.log("numOfInd = " + numOfInd)
    }

    if (currentSum >= target) minLength = Math.min(minLength, numOfInd);
    // console.log("AFTER LOOP")
    // console.log("minLength = " + minLength)
    // console.log("currentSum = " + currentSum)
    currentSum = 0;
    numOfInd = 0;
  }

  return minLength;
};
