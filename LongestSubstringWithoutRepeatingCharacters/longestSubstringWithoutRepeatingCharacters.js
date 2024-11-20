// So I'm going to start with left and right markers just like in the previous challenge
// I'm going to start with left at 0 and right at 1?
// I could start with substring as s[0]?
// Then I check if s[right] is contained in substring
// A while loop? When .includes = True we move on?
// So when we move on,I technically wouldn't need to check any subarrays less than the length of substring?
// No you would
// So lets just start with a brute strength solution before optimizing
// console.log("AFTER IF")
// console.log("currentArray = " + currentArray)
// console.log("subArray = " + subArray)
// console.log(subArray.length)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let subArray = [s[0]];

  if (s.length === 0) return 0;

  for (let left = 0; left < s.length - 1; left++) {
    let currentArray = [s[left]];
    let right = left + 1;
    let doesContain = false;

    while (!doesContain) {
      if (!currentArray.includes(s[right]) && right < s.length) {
        currentArray.push(s[right]);
        right++;
      } else {
        doesContain = true;
      }
    }

    if (currentArray.length > subArray.length) {
      subArray = [...currentArray];
    }
  }

  return subArray.length;
};
