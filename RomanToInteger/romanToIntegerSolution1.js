// Create an object with key values equal to their roman numeral equivalent
// Check for special cases
// add to sume

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romanDic = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  // const I = 1
  // const V = 5
  // const X = 10
  // const L = 50
  // const C = 100
  // const D = 500
  // const M = 1000

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        sum += 4;
        i++;
      } else if (s[i + 1] === "X") {
        sum += 9;
        i++;
      } else {
        sum += romanDic[s[i]];
      }
    } else if (s[i] === "X") {
      if (s[i + 1] === "L") {
        sum += 40;
        i++;
      } else if (s[i + 1] === "C") {
        sum += 90;
        i++;
      } else {
        sum += romanDic[s[i]];
      }
    } else if (s[i] === "C") {
      if (s[i + 1] === "D") {
        sum += 400;
        i++;
      } else if (s[i + 1] === "M") {
        sum += 900;
        i++;
      } else {
        sum += romanDic[s[i]];
      }
    } else {
      sum += romanDic[s[i]];
    }
  }
  return sum;
};
