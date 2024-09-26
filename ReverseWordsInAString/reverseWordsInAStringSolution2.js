// eliminate all the for loop with just a reverse?
// A little better for memory?
//

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.trim().split(/\s+/);
  return words.reverse().join(" ");
};
