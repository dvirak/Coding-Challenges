/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Only need to check for minimum value, and only need to update it if they current value is less than that
  // Only need to keep track of maxProfit, and only need to update it if > current item - minPPrice
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  return maxProfit;
};
// // Start with for loop
// // For each price, compare to remaining price in the array
// // If second price - lowest price >= 0, set maxProfit
// // return maxProfit
// let maxProfit = 0
// let minPrice = prices[0]
// let maxPrice = 0
// for (let i = 0; i<prices.length - 1 ; i++) {
//     console.log("maxProfit = " + maxProfit)
//     for (let j=i+1; j<prices.length; j++) {
//         if (prices[j] > maxPrice && prices[j] - prices[i] > maxProfit) {
//             maxProfit = prices[j] - prices[i]
//         }
//     }

// }
// return maxProfit

// let minPrice = Math.min(...prices)
// let minPriceIndex = prices.indexOf(minPrice)
// console.log("minPrice = " + minPrice)
// console.log("minPriceIndex = " + minPriceIndex)

// let maxPrice = Math.max(...prices.slice(minPriceIndex))
// console.log("maxPrice = " + maxPrice)
// if (maxPrice - minPrice > 0) {
//     return maxPrice - minPrice
// } else {
//     return 0
// }
