// A better way to solve this is to sort from low to high
// This will acount for situations where citations.length = 1, rather than having if statements for these cases
// So we sort from low to high, then compare citations at each index to current index + 1
// We essentiall find the "tipping point" where citations at the current index is greater than or equal to the remaining number of books
// We do this by comparing the current citations to the remaining number of books which is = citations.length - 1
// Saving citations.length as a variable can save some time as the computer will not have to calculate it every iteration
// If thats greater than current index + 1, we increase h by 1
// Keep going til loop is complete

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let hIndex = 0;
  let length = citations.length;
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= length - i) hIndex += 1;
  }
  return hIndex;
};
