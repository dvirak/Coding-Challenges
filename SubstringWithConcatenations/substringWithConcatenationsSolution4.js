// Another solution with map nad sliding window, supposed to be more efficient

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let result = [];
  const wordLength = words[0].length;
  const totalWords = words.length;
  const sLength = s.length;
  const slidingWindow = wordLength * totalWords;
  if (slidingWindow > sLength) return result;

  const wordCountMap = new Map();
  for (let word of words) {
    wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
  }

  let memo = new Array(sLength).fill(false);
  for (let i = 0; i <= sLength - slidingWindow; i++) {
    if (memo[i]) continue; // Why? How would there be a memo[i] thats true?
    let substring = s.substring(i, i + wordLength);
    let wCount = wordCountMap.get(substring);
    if (wCount === undefined) continue; // So checking to see if the substring is even contained in our wordCount map, and continuing if its not?

    let curWordMap = new Map();
    let curIdx = i,
      startIdx = i,
      counter = 0,
      curCount;
    do {
      curCount = (curWordMap.get(substring) || 0) + 1;
      memo[curIdx] = true;
      if (curCount > wCount) {
        for (let j = startIdx; j < curIdx; j += wordLength) {
          let tmpStr = s.substring(j, Math.min(j + wordLength, sLength)); // Why do we need to use min here? Shouldnt we just use wordLength? Maybe because j + wordLength could go beyond the sLength so we would be going beyond our s?
          // Why are we taking this substring didnt we already do that in line 24?
          if (tmpStr === substring) {
            startIdx = j + wordLength;
            break; // Why do we have a break here? Wouldnt we just naturally increase the j by wordLength at the end of each loop?
          } else {
            curWordMap.set(tmpStr, curWordMap.get(tmpStr) - 1);
            counter--; // ? WhaT ?
          }
        }
      } else {
        curWordMap.set(substring, curCount);
        counter++;
      }

      if (counter === totalWords) {
        result.push(startIdx);
        let tmpStr = s.substring(startIdx, startIdx + wordLength);
        startIdx += wordLength;
        curWordMap.set(tmpStr, curWordMap.get(tmpStr) - 1);
        counter--;
      }

      curIdx += wordLength;
      substring = s.substring(curIdx, Math.min(curIdx + wordLength, sLength));
      wCount = wordCountMap.get(substring);
    } while (wCount !== undefined);
  }

  return result;
};
