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
// I may need a map to check how many times each letter appears

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const windowLength = t.length - 1;
  let left = 0;
  let right = windowLength;
  const letterCountMap = new Map();
  let answer = "";
  let counter = 0;

  for (const letter of t) {
    console.log(letter);
    letterCountMap.set(letter, (letterCountMap.get(letter) || 0) + 1);
  }

  if (t.length > s.length) return answer;

  while (left + windowLength < s.length) {
    let currentSubstringMap = new Map();
    let currentSubstring = "";
    if (letterCountMap.has(s[left])) {
      currentSubstringMap.set(s[left], 1);
      counter++;
      while (currentSubstring.length < answer.length && right < s.length) {}
    }
    left++;
    right = left + windowLength;
  }
};
