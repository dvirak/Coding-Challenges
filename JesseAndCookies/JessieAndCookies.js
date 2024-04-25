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
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

function cookies(k, A) {
  // Write your code here
  // Sort array
  // Remove first 2 elements
  // Do the math
  // Add element back
  // Repeat
  let count = 0;

  while (Math.min(...A) < k) {
    if (A.length < 2 && Math.min(...A) < k) {
      return -1;
    }
    A.sort((a, b) => a - b);
    let lowestVals = A.slice(0, 2);
    let newNumber = A[0] + 2 * A[1];
    let newArray = A.slice(2, A.length);
    newArray.push(newNumber);
    A = [...newArray];
    count++;
  }

  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const A = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((ATemp) => parseInt(ATemp, 10));

  const result = cookies(k, A);

  ws.write(result + "\n");

  ws.end();
}
