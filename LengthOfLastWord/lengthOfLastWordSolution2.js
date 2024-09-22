// More complicated solution that is more efficient
// So we can save on space complexity by not creating an array
// So if we can just trim the string, we remove spaces before and after
// Then we can work backwards and count the number of non spaces until we get to a space and we terminate
// Return count

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();

  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else {
      break;
    }
  }

  return count;
};
