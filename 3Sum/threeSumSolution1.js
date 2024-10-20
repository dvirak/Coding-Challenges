// First sort the array so we know which directions we need to be moving
// we start with i at 0, j at i + 1, k at last index
// we start a while loop (j < k)
// if nums[i] + nums[j] + nums[k] > 0, we move k left
// if nums[i] + nums[j] + nums[k] < 0, we move j right
// if nums[i] + nums[j] + nums[k] = 0, we add those numbers to return array
// then we repeat loop and increase i
// but we need to check if new i === old i so we dont repeat numbers
// but wait! we need to check other values at current i before we move on
// so lets increase j until we have a new j, then go back into while loop

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let retArray = [];

  nums.sort((a, b) => a - b);

  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    // console.log("New Loop")
    // console.log("i = " + i)
    // console.log(retArray)
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    // console.log("j = " + j)
    let k = nums.length - 1;
    // console.log("k = " + k)

    while (j < k) {
      let total = nums[i] + nums[j] + nums[k];
      //   console.log("total = " + total)
      if (total > 0) {
        k--;
        // console.log("decrease k")
        // console.log("K = " + k)
      }

      if (total < 0) {
        j++;
        // console.log("increase j")
        // console.log("j = " + j)
      }

      if (total === 0) {
        // console.log("We have a winner!")
        retArray.push([nums[i], nums[j], nums[k]]);
        // console.log(retArray)

        j++;
        // console.log("increase j once")
        // console.log("j = " + j)

        while (nums[j] === nums[j - 1] && j < k) {
          // console.log("j loop increase")
          j++;
          //   console.log("j = " + j)
        }
      }
    }
  }

  return retArray;
};
