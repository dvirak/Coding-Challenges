// Ok so working through with 2 for loops
// Starting with variables prefix at 1, suffix at 1 and answer as a blank array
// We work through nums from left to right,
// We add answer[i] = the current prefix product
// Then we multiply prefix by the number at nums[i]
// Now we work back through nums from left to right
// We multiply the item at answer[i] by the current suffix product
// We update suffix by multiplying by the number at nums[i]
// Basically we are working through to create an array of
// All the products of the numbers that come before it on the left side
// Then we work back through that array in reveres,
// multiplying by the suffix product of the numbers that come before that to the right side
// Rememeber, the more a function has to calculate nums.length adds time complexity
// You can just save it as a variable for a simpler function

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = 1;
  let suffix = 1;
  let n = nums.length;
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }
  return answer;
};
