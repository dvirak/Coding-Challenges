// Ok so greedy solution
// Make an object of roman numeral and their values
// Iterate through the keys and divided number by the value at that key
// Round number down
// Subtract that value from num
// Add the letter to the romanNum that number of

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
};
