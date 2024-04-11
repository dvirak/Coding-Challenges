"use strict";

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  // Write your code here
  let totalBribes = 0;
  // Iterate through the array starting from the end
  for (let i = q.length - 1; i >= 0; i--) {
    // If difference in item at index i and index i + 1 > 2
    // item at index i had to bribe more than 2 people, we return
    // Example:
    // array = 5 1 2 3 7 8 6 4
    // i = 0
    // q[0] = 5
    // 5 - 0+1 = 4
    // 4 > 2 = Too chaotic
    if (q[i] - (i + 1) > 2) {
      console.log("Too chaotic");
      return;
    }
    // Count how many people bribed the current person
    // So start with the starting index:
    // Math.max(0, q[i] - 2)
    // Starting index of where we need to start looking for people who could have bribed
    // We subtract 2 because the most they can move forward is 2
    // WE use math.max to ensure that number isnt negative and we dont go too far back in que
    // j < i ensure we only check people who are in front of the current person(q[i]) in que
    // (q[j] > q[i]):
    // Checks if person at index j has a sticker number greater than the current person
    // If this is true, the person at index j has bribed the current person to move forward in the que
    // If that condition is true, totalBribes is increased by 1
    // Example:
    // Array = 1 2 5 3 7 8 6 4
    // j = Math.max(0, q[7]- 2)
    // j = Math.max(0, 2)
    // j = 2
    // q[2] = 5
    // q[7] = 4
    // 5 > 4
    // totalBribes + 1
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        totalBribes++;
      }
    }
  }
  console.log(totalBribes);
}

function main() {
  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    const q = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((qTemp) => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
