// lets go row by row
// insert the next word
// if the word does not occupy the entire length,
// subtract the length of word from maxWidth and
// try to add another word
// once we have each row filled out with as many words as can fit
// go back through and add spaces between each word until we reach maxWidth
// Except for the last row, just make this left justified with no extra spaces

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let justArray = [];
  let currentArray = [];
  let currentWidth = maxWidth;
  console.log(words.length);
  console.log(words[words.length - 1]);

  for (const word of words) {
    console.log(word);
    if (currentWidth - word.length - 1 >= 0) {
      currentArray.push(word);
      currentWidth -= word.length + 1;
      console.log("currentArray");
      console.log(currentArray);
      console.log("currentWidth = " + currentWidth);
    } else if (currentWidth - word.length < 0) {
      currentWidth = maxWidth;
      justArray.push(currentArray);
      console.log("justArray: ");
      console.log(justArray);
      currentArray = [];
      currentArray.push(word);
      currentWidth -= word.length;
      console.log("currentArray");
      console.log(currentArray);
      if (word === words[words.length - 1]) {
        justArray.push(currentArray);
      }
    }
  }

  // ok so we got the justArray we need, now we need to add spaces
  // so we need to go row by row
  // then in that row, we need to start adding spaces from left to right until we reach our max width
  // when we get to the last word in that row, we need to return to the first word
  // when we reach the last row of justArray, we can just return justArray
  // also if only one word in the line then we can move on to the next row

  for (const row of justArray) {
    if (row === justArray[justArray.length - 1]) {
      console.log("WE DID IT");
      console.log(justArray);
    }
    console.log(row);
    console.log(row.length);
    let joinedRow = row.join(" ");
    console.log(joinedRow);
    console.log(joinedRow.length);
    // while (joinedRow.length < maxWidth) {
    for (let i = 0; i < row.length; i++) {
      console.log("i: " + i);
      console.log("row[i]: " + row[i]);
      if (i === row.legnth - 1) {
        i = 0;
        row[i] = row[i] += " ";
        joinedRow = row.join(" ");
      } else {
        row[i] = row[i] += " ";
        joinedRow = row.join(" ");
      }
    }
    // }
  }

  console.log(justArray);
};
