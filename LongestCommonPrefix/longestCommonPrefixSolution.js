// Alternative is to use the prefix length to compare from one word to another
// Using while loop, subtract off of prefix length until words are matching
// if prefix length gets to 0, return ""
// else update pref using substring until we have a match, then move on to next word?
// Cleaner logic and avoids the unneccessary

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let pref = strs[0];
  let prefLength = pref.length;

  for (let i = 1; i < strs.length; i++) {
    let s = strs[i];
    while (pref !== s.substring(0, prefLength)) {
      prefLength--;
      if (prefLength === 0) {
        return "";
      }
      pref = pref.substring(0, prefLength);
    }
  }

  return pref;
};
