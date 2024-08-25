/**
 * Improvements:
 * 1. This solution removes the slicing aspect by running the for loop directly from the current index through the max jump distance
 * 2. This solution simplifies the if statement by removing the currentIndex >= maxIndex check,
 *    its not necessary if one of our available jumps were to take us past the maxIndex, we would already know that in this check and thus we dont need to enter the additional checks
 *    We still need to add a check before the while loop for edge cases where no jumps are required. such as nums = [0]
 * 3. We remove the check if nums[i] our currentJumpArray[i] is equal to 0, as we are always tracking forwar progress and thus this check is not necessary
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let currentMaxJump = nums[0];
  let currentIndex = 0;
  let maxIndex = nums.length - 1;
  let numberOfJumps = 0;

  // Initial check for edge cases where no jumps are necessary
  if (currentIndex === maxIndex) {
    return 0;
  }

  while (true) {
    // Only checks if currentIndex + maxJump will take us past the goal
    if (currentIndex + currentMaxJump >= maxIndex) {
      return numberOfJumps + 1;
    } else {
      let bestJumpDistance = 0;
      let bestJumpIndex = 0;
      for (
        // No more slicing as we work directly on the nums array, from current index to our max jump distance
        let i = currentIndex + 1;
        i <= currentIndex + currentMaxJump && i <= maxIndex;
        i++
      ) {
        if (nums[i] + i > bestJumpDistance) {
          // Removes uneccessary check if nums[i] is === to zero
          bestJumpDistance = nums[i] + i;
          bestJumpIndex = i;
        }
      }
      currentIndex = bestJumpIndex;
      currentMaxJump = nums[currentIndex];
      numberOfJumps++;
    }
  }
};
