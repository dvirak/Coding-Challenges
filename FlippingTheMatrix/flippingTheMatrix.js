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
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
  console.log(matrix[0]);
  console.log(matrix[matrix.length - 1]);

  // Write your code here
  // console.log(matrix)
  const sortedRowsMatrix = sortRows(matrix);
  const sortedColumnsMatrix = sortColumns(sortedRowsMatrix);
  // const maxSum = addCornerMatrix

  function sortRows(matrix) {
    let sortedMatrix = [];
    for (const row of matrix) {
      if (row[0] < row[row.length - 1]) {
        sortedMatrix.push(row.reverse());
      } else {
        sortedMatrix.push(row);
      }
    }
    return sortedMatrix;
  }

  function sortColumns(matrix) {
    console.log("IS THIS WORKING");
    console.log(matrix.length);
    let sortedMatrix = [];
    for (const row of matrix) {
      if (row[0] < row[row.length - 1]) {
        sortedMatrix.push(row.reverse());
      } else {
        sortedMatrix.push(row);
      }
    }
    return sortedMatrix;
  }

  // function addCornerMatrix(matrix) {
  //     console.log(matrix.length)
  // }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const n = parseInt(readLine().trim(), 10);

    let matrix = Array(2 * n);

    for (let i = 0; i < 2 * n; i++) {
      matrix[i] = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((matrixTemp) => parseInt(matrixTemp, 10));
    }

    const result = flippingMatrix(matrix);

    ws.write(result + "\n");
  }

  ws.end();
}
