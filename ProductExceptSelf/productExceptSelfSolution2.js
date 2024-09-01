// Create 2 objects, for prefix and suffix products
// THey represent the product of all numbers before (prefix) and after (suffix)
// So we are working from fron to back for the prefix multiplying by the next number
// Working from back to front for suffix multipling by previous number
// use variables pre and suf to store values of prefix and suffix

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefixObj = {};
  let suffixObj = {};
  let prefixProduct = 1;
  let suffixProduct = 1;
  prefixObj[0] = 1;
  suffixObj[nums.length - 1] = 1;
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    prefixProduct *= nums[i];
    prefixObj[i + 1] = prefixProduct;

    suffixProduct *= nums[nums.length - 1 - i];
    suffixObj[nums.length - 2 - i] = suffixProduct;
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefixObj[i] * suffixObj[i];
  }
  return answer;
};
