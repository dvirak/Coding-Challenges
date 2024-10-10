// God damnmit this is so simple why couldnt I get this
// keep track of maxAread, width * height
// move the smaller of the left and right
// recalculate maxArea
// return maxArea

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  console.log(height);
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[left], height[right]) * (right - left)
    );

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
