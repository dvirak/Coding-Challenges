// Possibly better
// So lets start with the prefix as the first word
// we loop through the array,
// for each word, we use string.indexOf() to search for the first index where the matching prefix occurs
// If the word contains the prefix, then this would be 0
// SO if we get 0, we can move on to the next string
// Otherwise we keep subtracting a letter off the prefix using substring(0, prefix.length - 1)
// when we get a string of "" we will finish our loop and return ""

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
};
