// this works but is not efficient enough for larger data sets.
// Need to Optomize

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let wordLength = words[0].length;
  let matchingIndexes = [];

  console.log(s);
  //   console.log(wordsToMatch);
  //   console.log(words);
  //   console.log(wordLength);

  for (let i = 0; i < s.length; i++) {
    // console.log("FIRST FOR")
    let currentWord = s.slice(i, i + wordLength);
    // console.log("CURRENT WORD: " + currentWord);
    let wordsToMatch = [...words];
    //   console.log("WORDS TO MATCH AFTER NEW i")
    //   console.log(wordsToMatch)

    if (wordsToMatch.includes(currentWord)) {
      //     console.log("FIRST IF")
      //   console.log("TRUTH");
      //   console.log("CURRENT INDEX: " + i);
      let matches = [currentWord];
      wordsToMatch.splice(wordsToMatch.indexOf(currentWord), 1);
      //   console.log("WORDS TO MATCH: ")
      //   console.log(wordsToMatch)
      // console.log("CURRENT WORD: " + currentWord);
      for (let n = 1; n < words.length; n++) {
        // console.log("SECOND FOR")
        currentWord = s.slice(
          i + n * wordLength,
          n * wordLength + wordLength + i
        );
        //     console.log("NEW WORD: ");
        // console.log("CURRENT WORD: " + currentWord);;

        if (wordsToMatch.includes(currentWord)) {
          // console.log("SECOND IF")
          matches.push(currentWord);
          wordsToMatch.splice(wordsToMatch.indexOf(currentWord), 1);
          //   console.log("NEW MATCH");
          //   console.log(matches);
          //   console.log(wordsToMatch);
        } else {
          matches = [];
          //   wordsToMatch = [...words];
          //   console.log("ELSE");
          //   console.log(wordsToMatch);
        }
      }
      if (matches.length === words.length) {
        // console.log("THIRD IF")
        matchingIndexes.push(i);
        // console.log("Matching Indexes: ");
        // console.log(matchingIndexes);
      }
      matches = [];
    }
  }
  //   console.log("FINAL RESULT: ");
  //   console.log(matchingIndexes);
  return matchingIndexes;
};
