/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // let fixedString = s.replace(/[^0-9a-zA-Z]+/g, "").toLowerCase()
  // console.log(fixedString)
  // let reversedString = [...fixedString].reverse().join("")
  // console.log(reversedString)

  // return fixedString === reversedString

  return (
    s.replace(/[^0-9a-zA-Z]+/g, "").toLowerCase() ===
    [...s.replace(/[^0-9a-zA-Z]+/g, "").toLowerCase()].reverse().join("")
  );
};
