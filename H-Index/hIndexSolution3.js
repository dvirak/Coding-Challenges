//I wanna try it but sorting in descending order so we can exit the loop after we find the "tipping point"?
// We can do it, but we need to set h = length - i instead of increasing h each time?
// This is because its not about the number of papers that are greater than the current citations,
// but rather the number of papers where the count matches the citation requirement
// Therefore we set h = length - i, because we know there are length-i number of papers remaining that meet the requirements
// THis doesnt really work Id go with solution2
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let hIndex = 0;
  let length = citations.length;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < length; i++) {
    if (citations[i] >= length - i) {
      hIndex = length - i;
    } else {
      break;
    }
  }

  return hIndex;
};
