/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Treat our jump like a mana pool, if we find another position along the jump distance that can increase our jump, we take it. If not and we run out of jump distance, we return false because we know we are dead in the water
  let jump = 0;
  for (let i = 0; i < nums.length; i++) {
    if (jump < 0) {
      return false;
    } else if (nums[i] > jump) {
      jump = nums[i];
    }
    jump--;
  }
  return true;
};
