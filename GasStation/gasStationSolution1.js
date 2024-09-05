// Gonna have to be a for loop
// if cost > gas, move to next
// if gas > cost, this could be a good opportunity to practice recursion?
// Send in the index where gas > cost
// while true
// Function checks if index % gas.length
// decrease by cost, increase by gas, increase i
// if this fails return, check next index
// if we go through all indexes and none can complete, return - 1
// else return the index we sent through to our function
// while distanceTraveled < n && startingIndex < n
// for ()
// let distance = 0
// let currentGas = gas[i]
// let currentCost = cost [i]
// let remainingGas = 0
// let start = i
// while (currentGas >= currentCost)
// if start === n {retturn - 1}
// if (distance === n) {
//return start
// else
// currentGas = (currentGas + remainingGas - currentCost)
// distance += 1
// currentCost = cost[(start + distance) % n]
// This solution is correct but needs to be optimized

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let sumCost = cost.reduce((partialSum, a) => partialSum + a, 0);
  let sumGas = gas.reduce((partialSum, a) => partialSum + a, 0);
  if (sumCost > sumGas) {
    return -1;
  }
  let n = gas.length;
  let distanceTraveled = 0;
  let startingIndex = 0;
  let remainingGas = 0;
  // console.log("n = " + n)

  while (startingIndex < n) {
    let currentIndex = (startingIndex + distanceTraveled) % n;
    let currentGas = gas[currentIndex] + remainingGas;
    let currentCost = cost[currentIndex];
    // console.log("starting loop")
    // console.log("Starting Index = " + startingIndex)
    // console.log("Current Index = " + currentIndex)
    // console.log("Current Gas = " + currentGas)
    // console.log("Curren Cost = " + currentCost)
    // console.log("Distance Traveled = " + distanceTraveled)

    if (distanceTraveled === n) {
      // console.log("distanceTraveled = n, return startingIndex")
      console.log("n = " + n);
      return startingIndex;
    } else if (currentGas < currentCost) {
      // console.log("currentGas < currentCost, should reset")
      startingIndex += 1;
      distanceTraveled = 0;
      remainingGas = 0;
    } else if (currentGas >= currentCost) {
      // console.log("currentGas >= currentCost, should increase distance")
      distanceTraveled += 1;
      remainingGas = currentGas - currentCost;
      // console.log("Remaining gas = " + remainingGas)
    }
  }
  return -1;
};
