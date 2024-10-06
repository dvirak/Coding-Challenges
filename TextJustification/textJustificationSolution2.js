// We can improve by justifying at each step
// We'll need to create a currentArray, numberOfLetters, and responseArray
// We check if  currentArray.length (for spaces) + numberOfLetters + word.length is greater than maxWidth
// If its not we add the word to current and then add number of letters to numberOfLetters
// if it is we add spaces for the difference between maxWidth and numberOfLetters then join and add to resArray
// use modulo to add spaces
// add spaces to last line til its maxed out
// return resArray

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let resArray = [];
  let currentArray = [];
  let numberOfLetters = 0;

  for (let word of words) {
    // first check if we have reached maxWidth
    if (word.length + currentArray.length + numberOfLetters > maxWidth) {
      // now loop through and use modulo to add required number of spaces
      for (let i = 0; i < maxWidth - numberOfLetters; i++) {
        currentArray[i % (currentArray.length - 1 || 1)] += " ";
      }
      // now add current array to the response array, make sure you join it into a string!
      resArray.push(currentArray.join(""));
      currentArray = [];
      numberOfLetters = 0;
    }
    currentArray.push(word);
    numberOfLetters += word.length;
  }

  // Once we exit the loop, our current array will be the last line, so assign it
  let lastLine = currentArray.join(" ");

  // Then add spaces to the end of it so its left justified
  while (lastLine.length < maxWidth) {
    lastLine += " ";
  }

  // add lastLine to resArray
  resArray.push(lastLine);

  // return response
  return resArray;
};
