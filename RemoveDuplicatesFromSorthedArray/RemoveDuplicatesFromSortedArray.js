/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // for loop through nums
  // have a seperate array to compare all numbers taht have appeared
  // compare element at nums[i] to all elements in appearedArray
  // if number has not appeared, move it to nums[k], increase k
  let appearedArray = [];
  let k = 1;
  appearedArray.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    let currentNumber = nums[i];
    for (let j = 0; j < appearedArray.length; j++) {
      if (!appearedArray.includes(currentNumber)) {
        nums[k] = currentNumber;
        appearedArray.push(currentNumber);
        k++;
      }
    }
  }
  return k;
};
