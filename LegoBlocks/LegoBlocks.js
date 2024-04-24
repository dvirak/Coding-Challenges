const MOD = 1000000007;

// Function to calculate the number of ways to build a row of given width
function countWaysToBuildRow(width) {
  // Base case: If width is 0, only one way to build it (no blocks)
  if (width === 0) {
    return 1;
  }
  let ways = 0;
  const blockSizes = [1, 2, 3, 4]; // Available block sizes
  // Iterate through available block sizes
  for (let block of blockSizes) {
    // Check if block fits within the width
    if (block <= width) {
      ways = (ways + countWaysToBuildRow(width - block)) % MOD;
    }
  }
  return ways;
}

// Function to build the wall recursively
function buildWall(height, width) {
  // Base case: If height is 0, only one way to build it (no rows)
  if (height === 0) {
    return 1;
  }
  let ways = 0;
  // Iterate through all possible ways to build the current row
  for (let rowWidth = 1; rowWidth <= width; rowWidth++) {
    // Calculate the number of ways to build the current row
    const rowWays = countWaysToBuildRow(rowWidth);
    // Recursively build the remaining rows without creating vertical breaks
    ways = (ways + rowWays * buildWall(height - 1, width - rowWidth)) % MOD;
  }
  return ways;
}

function legoBlocks(n, m) {
  // Write your code here
  return buildWall(n, m);
  // Go row by row, determine how many blocks it takes to make 1 row
  // Next row cant be the same
}
