// More efficient solution
var maxProfit = function (prices) {
  let max = 0,
    min = 0,
    profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    while (i < prices.length - 1 && prices[i + 1] < prices[i]) i++;
    min = prices[i];
    while (i < prices.length - 1 && prices[i + 1] > prices[i]) i++;
    max = prices[i];

    profit += max - min;
  }
  return profit;
};
