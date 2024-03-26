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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  // Add left to right Diagonal
  // get lenghth of first row, this will be total length of each row and there will be that many rows
  // Let sum = 0
  // For loop for (i=0, i<length,i++)
  // sum += arr[i][i]
  // Add Right to left Diagonal
  // use length - i - 1 for the column index arr[i][length - i -1]
  // Subtract R2L from L2R
  // Return Difference

  const length = arr[0].length;

  function addLeftDiagonal(arr) {
    let l2RSum = 0;
    for (let i = 0; i < length; i++) {
      l2RSum += arr[i][i];
    }
    return l2RSum;
  }

  function addRightDiagonal(arr) {
    let r2LSum = 0;
    for (let i = 0; i < length; i++) {
      r2LSum += arr[i][length - i - 1];
    }
    return r2LSum;
  }

  const left2Right = addLeftDiagonal(arr);
  const right2Left = addRightDiagonal(arr);

  return Math.abs(left2Right - right2Left);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
