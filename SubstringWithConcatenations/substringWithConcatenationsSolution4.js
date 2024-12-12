// Rewritten code for finding all starting indices of substring concatenations
// Input: s (string), words (array of strings)
// Output: Array of starting indices

function findSubstring(s, words) {
  // Edge case: if the input is invalid, return an empty array
  if (!s || words.length === 0) return [];

  // Initialize variables
  const wordLength = words[0].length; // Each word has the same length
  const totalWords = words.length;
  const slidingWindow = totalWords * wordLength; // Total window size needed
  const wordCountMap = new Map();

  // Create a map to store the count of each word in 'words'
  for (const word of words) {
    wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
  }

  const result = []; // To store the starting indices of valid substrings

  // Loop through all possible starting points within the word length
  for (let i = 0; i < wordLength; i++) {
    let startIdx = i; // Start of the current window
    let curIdx = i; // Current index in the window
    let counter = 0; // Count of valid words in the current window
    const curWordMap = new Map(); // To track words in the current window

    while (curIdx + wordLength <= s.length) {
      // Extract the next word in the sliding window
      const substring = s.substring(curIdx, curIdx + wordLength);

      if (wordCountMap.has(substring)) {
        // Update the count of the word in the current window
        curWordMap.set(substring, (curWordMap.get(substring) || 0) + 1);
        counter++;

        // If the word appears more than expected, shrink the window
        while (curWordMap.get(substring) > wordCountMap.get(substring)) {
          const tmpStr = s.substring(startIdx, startIdx + wordLength);
          curWordMap.set(tmpStr, curWordMap.get(tmpStr) - 1);
          counter--;
          startIdx += wordLength; // Move the start of the window forward
        }

        // If all words are matched, record the start index
        if (counter === totalWords) {
          result.push(startIdx);

          // Remove the leftmost word to continue searching for other matches
          const tmpStr = s.substring(startIdx, startIdx + wordLength);
          curWordMap.set(tmpStr, curWordMap.get(tmpStr) - 1);
          counter--;
          startIdx += wordLength;
        }
      } else {
        // Reset everything if the word is invalid
        curWordMap.clear();
        counter = 0;
        startIdx = curIdx + wordLength; // Move start index to the next segment
      }

      // Move to the next word in the window
      curIdx += wordLength;
    }
  }

  return result;
}
