// Rather than creating a second string and comparing those, keep a counter
// When the counter equals the length of s, we can stop counting and return true
// else return false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let counter = 0;

  if (!s.length) return true;

  for (let i = 0; i < t.length; i++) {
    if (s[counter] === t[i]) {
      counter++;
      if (counter === s.length) {
        return true;
      }
    }
  }
  return false;
};
