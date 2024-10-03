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

  for (const word of words) {
    console.log("word: " + word);
    console.log(currentArray);
    console.log(justArray);
    console.log("currentWidth: " + currentWidth);
    console.log("Word Length: " + (word.length + 1));

    if (currentWidth - word.length - 1 >= 0) {
      console.log("WE HEREE 1st IF");
      currentArray.push(word);
      currentWidth -= word.length + 1;
      // fix this if so that its equal to that ACTUAL LAST INDEX
      if (word === words[words.length - 1]) {
        console.log("WE HEREE 2nd IF");
        justArray.push(currentArray);
        currentArray = [];
        currentWidth = maxWidth;
      }
    } else if (currentWidth - word.length - 1 < 0) {
      if (currentWidth - word.length === 0) {
        console.log("WE HEREE 3rd IF");
        currentArray.push(word);
        justArray.push(currentArray);
        currentArray = [];
        currentWidth = maxWidth;
        continue;
      }
      console.log("WE HEREE 4th IF");

      currentWidth = maxWidth;
      justArray.push(currentArray);
      currentArray = [];
      currentArray.push(word);
      currentWidth -= word.length + 1;
      if (word === words[words.length - 1]) {
        console.log("WE HEREE 5th IF");

        justArray.push(currentArray);
      }
    }
  }

  console.log(justArray);
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
    console.log(row);
    console.log(row.join(""));

    if (row === justArray[justArray.length - 1]) {
      console.log("WE DID IT");
      let joinedRow = row.join(" ");
      console.log("joinedRow: ");
      console.log(joinedRow);
      let difference = maxWidth - joinedRow.length;
      while (difference > 0) {
        row[row.length - 1] += " ";
        difference--;
      }
      retArray.push(row.join(" ").toString());
      console.log(retArray);
      return retArray;
    }
    let joinedRow = row.join("");
    console.log("joinedRow: ");
    console.log(joinedRow);
    let difference = maxWidth - joinedRow.length;
    let index = 0;

    while (difference > 0) {
      console.log("in while loop");
      if (index >= row.length - 1) {
        index = 0;
      }
      row[index] = row[index] += " ";
      index++;
      difference--;
    }

    console.log(row.join("").toString());
    retArray.push(row.join("").toString());
  }

  console.log(justArray);
};
