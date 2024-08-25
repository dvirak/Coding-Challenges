/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // sort citations in decreasing order
  citations.sort((a, b) => b - a);
  // loop through and find the last position where citations[i] >= i+1
  // When we pass that return our h-index
  let hIndex = 0;

  // if no book has any citation, return 0
  if (citations.length === 1 && citations[0] === 0) return 0;

  // If only 1 book has any citation, h-index is 1
  if (citations.length === 1) return 1;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      hIndex = i + 1;
    } else {
      return hIndex;
    }
  }

  return hIndex;
};
