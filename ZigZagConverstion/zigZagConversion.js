// i dont need to build the actual array
// I just need to keep track of which array is getting each letter
// So I can work down my first column,
// when I get to numRows-1, we start moving backwards
// when we get back to 0, we start to move forward again
// we need to keep track of currentRow
// needto keep track if we are increasing or decreasing

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length <= numRows || numRows === 1) {
    return s;
  }

  let d = 1;
  let dfx = 0;

  let zigZagArray = new Array(numRows).fill().map(() => []);

  for (const letter of s) {
    if (dfx === 0) {
      d = 1;
    }

    if (dfx === numRows - 1) {
      d = -1;
    }

    zigZagArray[dfx].push(letter);
    dfx += d;
  }

  let returnString = "";

  for (let row of zigZagArray) {
    row = row.join("");
    returnString += row;
  }

  return returnString;
};
