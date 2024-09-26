// Inefficient first pass
// trim words into an array
// crete new array
// reverse words into new array
// turn array into sentence
// return sentence

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.trim().split(/\s+/);
  let n = words.length - 1;
  let newWordsArray = new Array(words.length).fill("");
  for (let i = 0; i <= n; i++) {
    console.log(newWordsArray[i]);
    newWordsArray[i] = words[n - i];
  }
  console.log(newWordsArray);
  let newWords = newWordsArray.join(" ");
  return newWords;
};
