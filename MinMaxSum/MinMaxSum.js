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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  // For loop through array to sort small to large
  // Add 0-3 for small, add 1-4 for large
  // console.log(1{small} {big}`)
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(
    `${arr[0] + arr[1] + arr[2] + arr[3]} ${arr[1] + arr[2] + arr[3] + arr[4]}`
  );
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
