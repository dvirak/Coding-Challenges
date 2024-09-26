// We can remove the trim and add in an else if clause to check if length > 0
// Saves a little time comlexity?
// Ensures we only count after any spaces at the end

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
  }

  return count;
};
