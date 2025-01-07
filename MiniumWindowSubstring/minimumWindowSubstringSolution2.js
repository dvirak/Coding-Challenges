// start with sliding window equal to length of t (n)
// go letter by letter to check if substring of length n from s contains each letter of t
// if the first letter is not in t, we can slide the left of the window to the right
// we would also have to move the right side to the right
// we would keep going until we find a substring that starts with a letter contained in t
// we would then slide the right of the window by one until we have found a match to each letter
// then we could make this substring our solution string
// then we can continue to increase i(our left window) by 1 until we find another substring that starts with a letter t
// then we spread right until all letters are found and compare the length of this substring to our current substring
// we can exit current i early if our current window is longer than our current substring
// we can also exit early if current i is not contained in t
// we can exit early if s is shorter than t

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) {
    return "";
  }

  const charCount = new Map();
  for (const ch of t) {
    charCount.set(ch, (charCount.get(ch) || 0) + 1);
  }

  let targetCharsRemaining = t.length;
  let minWindow = [0, Number.POSITIVE_INFINITY];
  let startIndex = 0;

  for (let endIndex = 0; endIndex < s.length; endIndex++) {
    const ch = s[endIndex];
    if (charCount.has(ch) && charCount.get(ch) > 0) {
      targetCharsRemaining--;
    }
    charCount.set(ch, (charCount.get(ch) || 0) - 1);

    if (targetCharsRemaining === 0) {
      while (true) {
        const charAtStart = s[startIndex];
        if (charCount.has(charAtStart) && charCount.get(charAtStart) === 0) {
          break;
        }
        charCount.set(charAtStart, (charCount.get(charAtStart) || 0) + 1);
        startIndex++;
      }

      if (endIndex - startIndex < minWindow[1] - minWindow[0]) {
        minWindow = [startIndex, endIndex];
      }

      charCount.set(s[startIndex], (charCount.get(s[startIndex]) || 0) + 1);
      targetCharsRemaining++;
      startIndex++;
    }
  }

  return minWindow[1] >= s.length
    ? ""
    : s.slice(minWindow[0], minWindow[1] + 1);
};
