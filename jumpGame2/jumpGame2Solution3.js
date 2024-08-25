// This is a pretty popular solution I'm seeing so Im going to write it out here
// Basically we dont need to keep updating and reiteration through a for loop
// We can do it all in one for loop wihtough recalculating current index
// We need to simply keep track of our maxJump, currentReach and jumps
// So we use one for loop and at each iteration we see if the number at that index plus the index is greater than our current max
// If it is, we update our current max
// When we reach our "currentReach" we know we have gone through all possible jumping locations and have determined a new optimal jump, which would be taking the index that gives us our maxc
// Therefore, we increase jump by 1
// Then continue out for loop
// When we reach the end we return jumps

//  * @param {number[]} nums
//  * @return {number}
//  */
var jump = function (nums) {
  let jumps = 0;
  let currentReach = 0;
  let maxJump = 0;

  if (nums.length === 1) return jumps;

  for (let i = 0; i < nums.length - 1; i++) {
    // Keeping track of the distance we can go at each index
    if (i + nums[i] > maxJump) {
      maxJump = i + nums[i];
    }

    // When we reach out currentReach, we must take the jump that gives us the best distance
    if (i === currentReach) {
      currentReach = maxJump;
      jumps += 1;
    }
  }

  return jumps;
};

// let case1 = jump([2, 3, 1, 1, 4]);
// let case2 = jump([2, 3, 0, 1, 4]);
// let case3 = jump([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0]);
// let case4 = jump([1, 1, 1, 1]);
// let case5 = jump([9, 8, 2, 2, 0, 2, 2, 0, 4, 1, 5, 7, 9, 6, 6, 0, 6, 5, 0, 5]);
// let case6 = jump([0]);

// console.log("case1: " + case1);
// console.log("case2: " + case2);
// console.log("case3: " + case3);
// console.log("case4: " + case4);
// console.log("case5: " + case5);
// console.log("case6: " + case6);
