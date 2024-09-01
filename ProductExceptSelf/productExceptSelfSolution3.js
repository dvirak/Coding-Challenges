// This one does work

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = 1;
  let suffix = 1;
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    prefix *= nums[i];
    console.log("prefix = " + prefix);
    answer[i] = prefix;
    suffix *= nums[nums.length - 1 - i];
    console.log("suffix = " + suffix);
    answer[nums.length - 1 - i] = suffix;
    console.log(answer);
  }
  return answer;
};

function test() {
  let case1 = [1, 2, 3, 4];
  let case2 = [-1, 1, 0, -3, 3];
  console.log(productExceptSelf(case1));
  console.log(productExceptSelf(case2));
}

test();
