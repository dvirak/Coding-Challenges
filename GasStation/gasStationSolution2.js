// Check if total gas >= total cost, if thats true, we know a soution exists
// Working through each index, if at any point we go negative we can eliminate every index in that range as a starting locaiton
// Set starting index = i + 1 and we start the loop again

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = gas.reduce((partialSum, a) => partialSum + a, 0);
  let totalCost = cost.reduce((partialSum, a) => partialSum + a, 0);

  if (totalCost > totalGas) {
    return -1;
  }

  let remainingGas = 0;
  let startingIndex = 0;

  for (let i = 0; i < gas.length; i++) {
    remainingGas = remainingGas + gas[i] - cost[i];
    if (remainingGas < 0) {
      startingIndex = i + 1;
      remainingGas = 0;
    }
  }

  return startingIndex;
};
