// MY SOLUTION
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   // set minPrice as the current stock you own
//   // set maxPrice as the current highest price you've seen
//   // When an item goes below maxPrice, sell stock and add the maxPrice - minPrice to the maxProfit
//   // return maxProfit
//   let currentStock = Infinity;
//   let maxPrice = 0;
//   let profit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < currentStock && maxPrice === 0) {
//       currentStock = prices[i]; // If current price is less than current stock, and maxPrice hasnt been set yet, buy current stock
//     } else if (prices[i] > maxPrice && currentStock !== Infinity) {
//       maxPrice = prices[i]; // If current price is greater than the highest price we have seen and currentStock is not Infinity because that means we havent bought any yet, set that to maxPrice
//       if (i === prices.length - 1) {
//         profit += maxPrice - currentStock;
//         return profit;
//       }
//     } else if (prices[i] < maxPrice || prices[i] < currentStock) {
//       profit += maxPrice - currentStock;
//       currentStock = prices[i];
//       maxPrice = 0;
//     }
//   }

//   if (currentStock !== Infinity && maxPrice !== 0) {
//     profit += maxPrice - currentStock;
//     return profit;
//   } else {
//     return profit;
//   }
// };

// More efficient solution??
var maxProfit = function (prices) {
  // when the price increases, sell from the previous day to that day
  let maxProfit = 0;

  for (let i = 0; i < prices.length; I++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
};
