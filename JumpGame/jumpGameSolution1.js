// MY FIRST SOLUTION THATS REALLY WAY OVER THOUGHT:
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // If i can avoid 0 and jump to the maximum space, that would give me most options
  let currentMaxJump = nums[0];
  let currentIndex = 0;
  let maxIndex = nums.length - 1;
  let currentJumpArray = nums.slice(currentIndex + 1, currentMaxJump + 1);

  while (true) {
    if (currentIndex + currentMaxJump >= maxIndex) {
      return true;
    } else if (currentMaxJump <= 0) {
      return false;
    } else {
      currentMaxJump = checkJump(
        currentMaxJump,
        currentIndex,
        currentJumpArray
      );

      currentIndex =
        currentIndex + currentJumpArray.lastIndexOf(currentMaxJump) + 1;

      currentJumpArray = nums.slice(
        currentIndex + 1,
        currentIndex + currentMaxJump + 1
      );
    }
  }
};

function checkJump(currentMaxJump, currentIndex, currentJumpArray) {
  let possibleMaxJump = Math.max(...currentJumpArray);
  let possibleMaxIndex = currentJumpArray.lastIndexOf(possibleMaxJump);
  let possibleMaxJumpArray = currentJumpArray.slice(
    possibleMaxIndex + 1,
    possibleMaxJump + 1
  );
  let jumpArraySum = possibleMaxJumpArray.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  if (jumpArraySum === 0 && currentJumpArray[currentMaxJump - 1] !== 0) {
    return currentJumpArray[currentMaxJump - 1];
  } else {
    return possibleMaxJump;
  }
}
