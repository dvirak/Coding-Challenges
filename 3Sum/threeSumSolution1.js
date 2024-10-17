// check for all where i=0, j =1 k = 2-nums.length
// increase j by 1

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let i = 0;
  let j = 1;
  let k = 2;
  let retArray = [];

  while (i < nums.length - 2) {
    while (j < nums.length - 1) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        retArray.push([nums[i], nums[j], nums[k]]);
        console.log("retArray updated!");
        console.log(retArray);
      }
      j++;
    }
  }
  while (k < nums.length) {
    if (nums[i] + nums[j] + nums[k] === 0) {
      retArray.push([nums[i], nums[j], nums[k]]);
      console.log("retArray updated!");
      console.log(retArray);
    }
    k++;
  }
  console.log("k = " + k);

  j += 1;

  console.log("j = " + j);

  i += 1;

  while (i < nums.length - 2) {
    if (nums[i] + nums[j] + nums[k] === 0) {
      retArray.push([nums[i], nums[j], nums[k]]);
      console.log("retArray updated!");
      console.log(retArray);
    }
    i++;
  }

  return retArray;
};
