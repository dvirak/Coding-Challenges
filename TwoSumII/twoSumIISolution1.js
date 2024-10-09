// Using two pointer technique
// Start with left and right indexes of numbers
// If the sum is less than target, we move left index over one
// If the sume is greater than target, we move right index over one
// If the sume equals target, we return left++ and right++

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let indexOne = 0;
  let indexTwo = numbers.length - 1;

  while (indexOne < indexTwo) {
    if (numbers[indexOne] + numbers[indexTwo] === target) {
      return [(indexOne += 1), (indexTwo += 1)];
    } else if (numbers[indexOne] + numbers[indexTwo] < target) {
      indexOne++;
    } else if (numbers[indexOne] + numbers[indexTwo] > target) {
      indexTwo--;
    }
  }
};
