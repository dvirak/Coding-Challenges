"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'legoBlocks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function legoBlocks(height, width) {
  const MOD = BigInt(Math.pow(10, 9) + 7);

  /* 
    Initialize possibilities for when we have 0, 1, 2, and 3 as width.
    From these 4 hardcoded values the rest can be calculated.
    so for a wall of width 0 or 1, possibilities are 1
    ,for a wall of width 2 there are 2 possibilities
    therefore oneRowPossibilities[0] = 1n
    therefore oneRowPossibilities[1] = 1n
    therefore oneRowPossibilities[2] = 2n
    etc.
    */
  let oneRowPossibilities = [1n, 1n, 2n, 4n];

  while (oneRowPossibilities.length <= width) {
    /*
        Pick the last 4 values of the oneRowPossibilities array
        Since the sum of these will provide the next value,
        then add that sum to the possiblities array
        This uses a concept known as recurrence relation and 
        a technique known as sliding window technique
        */
    let lastFourPossiblities = oneRowPossibilities.slice(-4);

    /*
        Dividing by modulus just keeps this in a reasonable range
        Essentially slding the number back to the beggining if we think
        Of it as a number range in an array
        ex.
        If modulus = 10
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        total = 12 % 10
        remainded is 2 which brings us back around into our desired range
        */
    let newCombination =
      lastFourPossiblities.reduce((sum, current) => sum + current, 0n) % MOD;

    oneRowPossibilities.push(newCombination);
  }

  /* 
    Now we want to caluclate the variations for all rows
    raising the possibilities of one row to the height of our desired wall
    */
  let allPossibilities = oneRowPossibilities.map((possibilities) =>
    calculateModularPower(possibilities, BigInt(height), MOD)
  );

  /*
    Now we initialize the unstable possibilities array.
    Each value represents how many unstable walls with at least 1 vertical line across them 
    can be made with the corresponding width
    For walls with 0 and 1 width, there are no unstable possibilities
    Thus we can set 0n, 0n here.
    We need these 2 values to be able to start gradually filling the array up more
    Because we need them to calculate the first stable possibilities on the left side
    */
  let unstablePossibilies = [0n, 0n];

  /*
   We gradually fill up the unstablePossibilities array, by moving the 
        vertical line to the right via changing the leftPartWidth, and by calculating 
        the number of possible stable (unbroken) walls on the left side of the vertical line 
        and multiplying it with the number of possible unstable walls on the right side, and 
        adding the result to the unstablePossibilities array.
        We have to use the number of stable walls on the left because if we'd use all possibilities 
        on both sides, we would count the same wall multiple times, since in one unstable wall 
        there can be multiple vertical lines, and we'd count all possible split-ups of the same wall 
        as different walls.
        For example:
        [oo]|[oo][oo]
        [oo]|[oo][oo]
        and
        [oo][oo]|[oo]
        [oo][oo]|[oo]
        are the same bad wall, but would be counted multiple times if we'd just multiply the number of all 
        possibilities on the left and right side of the vertical line (marked with '|'), each time we move the line.
        Stable walls are by definition not divided by a vertical line, so there is no risk of counting the same wall 
        multiple times when we multiply the two sides to get the unstable possibilities each time we move the vertical line
        to the right by one.
  */

  for (let currentWidth = 2; currentWidth <= width; currentWidth++) {
    let unstablePossibilitiesForCurrentWidth = 0n;

    for (let leftPartWidth = 1; leftPartWidth < currentWidth; leftPartWidth++) {
      const leftStablePossibilities =
        allPossibilities[leftPartWidth] - unstablePossibilies[leftPartWidth];
      const rightUnstablePossibilities =
        allPossibilities[currentWidth - leftPartWidth];

      unstablePossibilitiesForCurrentWidth +=
        leftStablePossibilities * rightUnstablePossibilities;
    }
    unstablePossibilies.push(unstablePossibilitiesForCurrentWidth % MOD);
  }
  /*
    Since we keep using the MODULUS value provided by the instructions to keep values within the bounds specified, at
    some point we might end up with an allPossibilities[width] value that "wraps around" and becomes smaller, thus
    making the result of the below substraction negative, and messing up our result.
    By adding MODULUS before taking the modulus again, we ensure that the result is non-negative. This is because adding 
    MODULUS will not change the result of the modulus operation (since x mod n is the same as (x + n) mod n, and we kept 
    using  modulus operations throughout the solution), but it will ensure that the number we are taking the modulus of is
    non-negative.
    You can observe this behaviour by logging the values with large input height and width values (like 8 and 6):
    console.log(allPossibilities);
    console.log(unstablePossibilities);
    console.log(allPossibilities.map((a,i) => a - unstablePossibilities[i]));
  */
  return (allPossibilities[width] - unstablePossibilies[width] + MOD) % MOD;
}

/*
    An efficient way to calculate the power for large numbers.
    Instead of multiplying the base with itself each time, we
    square the base and halve the exponent whenever the exponent
    is even, and multiply the result with the base when its odd.
    So in case of 2 to the power of 5, instead of
    2 * 2 * 2 * 2 * 2, we do:
    result = 1
    exponent 5 is odd:
    result = 1 * 2 => 2
    base = 2 * 2 => 4
    exponent = 5 / 2 => 2 (lost 1 remainder)
    exponent 2 is even:
    base = 4 * 4 => 16
    exponent = 2 / 2 => 1
    exponent 1 is odd:
    result = 2 * 16 = 32
*/
function calculateModularPower(base, exponent, mod) {
  let result = 1n;
  while (exponent > 0) {
    if (exponent % 2n === 1n) {
      result = (result * base) % mod;
    }
    base = (base * base) % mod;
    exponent = exponent / 2n;
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = legoBlocks(n, m);

    ws.write(result + "\n");
  }

  ws.end();
}
