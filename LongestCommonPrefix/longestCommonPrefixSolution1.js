// loop through words
// compare last word to current word.
// loop through current word letter
// if first letter doesnt match, return early
// if first letter matches, add letter to return string and until we reach a letter that doesnt match

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let retString = strs[0];
  for (const word of strs) {
    for (let i = 0; i < retString.length; i++) {
      if (i === 0 && retString[i] != word[i]) {
        return "";
      } else if (retString[i] != word[i]) {
        retString = retString.slice(0, i);
        break;
      }
    }
  }
  return retString;
};
