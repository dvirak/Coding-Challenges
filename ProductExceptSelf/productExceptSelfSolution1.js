//for loop
// create new array for multiplication
// set the value at index i to 1
// use reduce to multiply the remaining values
// push newValue to answer array

// This technically works, but is not in O(n) because the for loop is O(n) and the reduce function inside is O(n) therefore O(n) * O(n) = O(n^2)

// Multiply by each, if 1, pass, if -1

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let answer = [];
  let fullArrayProduct = nums.reduce(
    (partialProduct, a) => partialProduct * a,
    1
  );
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      answer.push(fullArrayProduct);
    } else if (nums[i] === -1) {
      answer.push(fullArrayProduct * -1);
    } else {
      let productArray = [...nums];
      productArray[i] = 1;
      let newNumber = productArray.reduce(
        (partialProduct, a) => partialProduct * a,
        1
      );
      answer.push(newNumber);
    }
  }

  return answer;
};
