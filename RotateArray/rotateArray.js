/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // create n for length of nums
  //Use remainder for k to make sure it doesnt go over
  //create a newArray that we can modify
  // For loop through array and asign newArray[(i+k)%n] = nums[i]
  // for loop to reasign each individual value in nums
  // Cant reassign the variable in the function because that just modifies the local variable
  // Once we leave the function we are still left with the same nums
  // But if we modify the individual elements, then it will remain outside the function
  let n = nums.length;
  k = k % n;
  let rotatedArray = [...nums];

  for (let i = 0; i < n; i++) {
    rotatedArray[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = rotatedArray[i];
  }
};
