// Can potentially improve by updating last for loop
// Rather than creating a new variable,
// Just for loop 0-numRows-1
// set zigZagArray[i] = zigZagArray[i].join("")
// return zigZagArray.join("")

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

  for (let i = 0; i < numRows; i++) {
    zigZagArray[i] = zigZagArray[i].join("");
  }

  return zigZagArray.join("");
};
