// Ok so thinking about it as just starting and ending a sub string
// So we have a maxLength starting at 0
// We have a lastIndex which is map thats keeping track of the last index we came across the current letter
// We start with a variable called start at 0
// So we go through a for loop and have a letter
// We set our start to equal whatever the greter number is between our current start and the lastIndex value
// for when we last saw our current letter
// Then we set our maxLength equal to whatever is bigger between the current maxLength and the differnce in
// our start and end variables
// Then we set the last index value for our current letter equal to the current index plus 1
// The plust one is important, becuase next time we run into this letter we will want the index of the start
// to increate
// We will keep going through different letters and not updating the start, so when we finally get to a repeat
// It will absolutely be greater than the current start we have beeen using
// God dammit I cant put this into words you are a terrible programmer

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const length = s.length;
  let maxLength = 0;
  let lastIndex = new Map();

  let start = 0;

  for (let end = 0; end < length; end++) {
    // Set current letter variable
    let currentLetter = s[end];

    // Check if the letter has been seen before in the current sequence
    // If we havent, default to 0
    start = Math.max(start, lastIndex.get(currentLetter) || 0);

    // set maxLength value to greatest between current and difference between start and end + 1
    maxLength = Math.max(maxLength, end - start + 1);

    // Set lastIndex for current letter to be equal to current letter index + 1
    // This ensures when we run into the letter again, the start will be at the next letter after the repeating letter
    lastIndex.set(currentLetter, end + 1);
  }

  return maxLength;
};
