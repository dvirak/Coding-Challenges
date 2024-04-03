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
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function towerBreakers(n, m) {
  // Write your code here
  // If even or all towers heigh 1, player 2 can always match player 1 so player 2 will always have a move.
  // [2, 2] player1 => 1, player 2=> 1, player1 has no moves
  // If odd number of towers and at least height > 1, player 1 will always be able to reduce it before player 2 can
  // [3] player 1 => 1 so player 2 has no moves
  if (n % 2 === 0 || m === 1) {
    return 2;
  } else {
    return 1;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = towerBreakers(n, m);

    ws.write(result + "\n");
  }

  ws.end();
}
