/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let si = 0;
  let subSeq = "";

  for (let i = 0; i < t.length; i++) {
    if (s[si] === t[i]) {
      subSeq += t[i];
      si++;
    }
  }

  if (subSeq === s) {
    return true;
  } else {
    return false;
  }
};
