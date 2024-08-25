/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let currentMaxJump = nums[0];
  let currentIndex = 0;
  let maxIndex = nums.length - 1;
  let currentJumpArray = nums.slice(currentIndex + 1, currentMaxJump + 1);
  let numberOfJumps = 0;

  while (true) {
    if (currentIndex >= maxIndex) {
      return numberOfJumps;
    } else if (currentIndex + currentMaxJump >= maxIndex) {
      numberOfJumps++;
      return numberOfJumps;
    } else {
      let bestJumpDistance = 0;
      let bestJumpIndex = 0;
      for (let i = currentMaxJump - 1; i >= 0; i--) {
        if (
          currentJumpArray[i] + i > bestJumpDistance &&
          currentJumpArray[i] !== 0
        ) {
          bestJumpDistance = currentJumpArray[i] + i;
          bestJumpIndex = i;
        }
      }
      currentIndex = currentIndex + bestJumpIndex + 1;
      currentMaxJump = nums[currentIndex];
      currentJumpArray = nums.slice(
        currentIndex + 1,
        currentIndex + currentMaxJump + 1
      );
      numberOfJumps++;
    }
  }
};
