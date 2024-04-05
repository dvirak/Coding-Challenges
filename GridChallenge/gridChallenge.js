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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
  // Write your code here
  console.log(grid);
  const sortedGrid = sortGrid(grid);

  return checkColumns(sortedGrid);
}

function sortGrid(grid) {
  const sortedGrid = [];
  // Go through each row, sort
  for (const row of grid) {
    // Create tem row to sort into
    const rowArray = row.split("");

    // Sort row alphabetically
    rowArray.sort();

    // Add rowArray to our sortedGrid as a string
    sortedGrid.push(rowArray.join(""));
  }
  return sortedGrid;
}

function checkColumns(grid) {
  const length = grid.length;
  // Go through each row, at index i, create temporary array, if array is sorted check next, if not return NO
  for (let i = 0; i < length; i++) {
    let tempColumn = [];
    for (const row of grid) {
      tempColumn.push(row[i]);
    }
    const sortedColumn = tempColumn.slice();

    // JSON.stringify to turn arrays in strings for value comparison
    // Else when comparing arrays, computer checks if they are same object in memory instead of contents
    if (JSON.stringify(sortedColumn.sort()) !== JSON.stringify(tempColumn)) {
      return "NO";
    }
  }
  return "YES";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
      const gridItem = readLine();
      grid.push(gridItem);
    }

    const result = gridChallenge(grid);

    ws.write(result + "\n");
  }

  ws.end();
}
