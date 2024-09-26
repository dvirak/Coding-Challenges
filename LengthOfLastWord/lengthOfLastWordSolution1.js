// trim string to remove trailing and preceeding white spaces
// Split at " " to create an array, no use \/s+\ to remove all white spaces
// Go to last word in array
// Count length?

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const words = s.trim().split(/\s+/);
  return words[words.length - 1].length;
};
