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

  for (let i = 0; i < words.length; i++) {
    if (currentWidth - words[i].length - 1 >= 0) {
      currentArray.push(words[i]);
      currentWidth -= words[i].length + 1;
      if (i === words.length - 1) {
        justArray.push(currentArray);
        currentArray = [];
        currentWidth = maxWidth;
      }
    } else if (currentWidth - words[i].length - 1 < 0) {
      if (currentWidth - words[i].length === 0) {
        currentArray.push(words[i]);
        justArray.push(currentArray);
        currentArray = [];
        currentWidth = maxWidth;
        continue;
      }

      currentWidth = maxWidth;
      justArray.push(currentArray);
      currentArray = [];
      currentArray.push(words[i]);
      currentWidth -= words[i].length + 1;
      if (words[i] === words[words.length - 1]) {
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
  // could i take a row, join it
  // then subtract length from maxWidth
  // that difference is the total number of spaces we need
  // then while difference > 0
  // for i-row.length
  // if i === row.length - 1
  // i = 0
  // row[0] += " "

  let retArray = [];

  for (let row of justArray) {
    if (row === justArray[justArray.length - 1]) {
      let joinedRow = row.join(" ");
      let difference = maxWidth - joinedRow.length;
      while (difference > 0) {
        row[row.length - 1] += " ";
        difference--;
      }
      retArray.push(row.join(" ").toString());
      return retArray;
    }
    let joinedRow = row.join("");
    let difference = maxWidth - joinedRow.length;
    let index = 0;

    while (difference > 0) {
      if (index >= row.length - 1) {
        index = 0;
      }
      row[index] = row[index] += " ";
      index++;
      difference--;
    }
    retArray.push(row.join("").toString());
  }
};
