/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  for (i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
};

// aternative :
var merge = function (nums1, m, nums2, n) {
  let k = m + n - 1; // pointer for last element in sorted array
  let i = m - 1; // pointer for element in nums1
  let j = n - 1; // pointer for element in nums2
  while (j >= 0) {
    console.log(nums1);
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  // for (i=m; i<m+n; i++) {
  //     nums1[i] = nums2[i-m]
  // }
  // nums1.sort((a,b) => a-b)
};
