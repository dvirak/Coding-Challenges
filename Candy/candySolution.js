// create array of length = ratings and full of 1s to satisfy 1st condition
// iterate through from left to right starting at 1,
// if current rating is greater than left neighbor rating, update current candy to be 1 more than left neighbor candy
// Iterate through right to left starting at length -2
// if current rating is greater than right neighbor, set current candy to be the maximum of the candy at the current index, or the candy at the right index + 1
// sum it all up and return

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length;
  let candyArray = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyArray[i] = candyArray[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candyArray[i] = Math.max(candyArray[i], candyArray[i + 1] + 1);
    }
  }

  return candyArray.reduce((currentVal, a) => currentVal + a, 0);
};
