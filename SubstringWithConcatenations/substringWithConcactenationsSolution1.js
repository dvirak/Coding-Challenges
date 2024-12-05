// could i loop through the string
// break it down by length of word?
// so if length of words is 3
// we have a temporary array called matches
// look at the first 3 letters, if they matach any of the words in the array, we move on to the next 3 letters
// so we would see "far"
// push that to matches
// then we look at next 3 letters
// if they match any of the words and arent contained in matches, we add that to matches
// then we look at next 3 letters, if they match any of the words and arent contained in matches, we add to that to matches
// We keep doing this til length of matchs === length of array
// Then we add current index to our answerArray
// then we increase
// we start each new index by checking if the next x letters match any of the words in the array
// else we move on

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let wordLength = words[1].length;
  let matchingIndexes = [];
  console.log(s);
  console.log(words);
  console.log(wordLength);

  for (let i = 0; i < s.length; i++) {
    let currentWord = s.slice(i, i + wordLength);
    console.log(currentWord);

    if (words.includes(currentWord)) {
      console.log("TRUTH");
      console.log(i);
      let matches = [currentWord];
      console.log(currentWord);
      for (let n = 1; n < words.length; n++) {
        currentWord = s.slice(
          i + n * wordLength,
          n * wordLength + wordLength + i
        );
        console.log("NEW WORD: ");
        console.log(currentWord);

        if (words.includes(currentWord) && !matches.includes(currentWord)) {
          matches.push(currentWord);
          console.log("NEW MATCH");
          console.log(matches);
        } else matches = [];
      }
      if (matches.length === words.length) {
        matchingIndexes.push(i);
        console.log("Matching Indexes: ");
        console.log(matchingIndexes);
      }
      matches = [];
    }
  }
  console.log("FINAL RESULT: ");
  console.log(matchingIndexes);
  return matchingIndexes;
};
