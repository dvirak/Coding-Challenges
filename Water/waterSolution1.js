// Loop through from left to right, storing the highest "bar" found to the left of the current Index
// Loop through from right to left, storing the highest "bar" found to the right of the current index
// We are doing this by comparing the height at that inndex, to the leftMax at i-1
// SO max(height[i], leftMax[i-1])
// So this will continue to save the maximum value as we progress through the array
// The total water at each index will be the difference between that bar and the lower of the bars surrounding it

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length === 0) return 0;

  let n = height.length;
  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);

  leftMax[0] = height[0];

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  rightMax[n - 1] = height[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  let water = 0;

  for (let i = 0; i < n; i++) {
    let currentWater = Math.min(leftMax[i], rightMax[i]) - height[i];
    if (currentWater > 0) water += currentWater;
  }

  return water;
};
