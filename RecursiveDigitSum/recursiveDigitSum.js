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
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
  // Write your code here
  // Calculate Initial Super Digit
  const superDigit = addDigits(n);

  // If k = 1, superdigit is already calculate
  if (k === 1) {
    return superDigit;
  }

  // Else, you can multiply k * superDigit because
  // Each n will simplify to that superDigit no matter how many times its repeated
  // Convert numbers to BigInts for backend storage purposes,
  // otherwise massive digits will give us issues
  let trueSuperDigit = addDigits((superDigit * BigInt(k)).toString());

  return trueSuperDigit;
}

function addDigits(n) {
  // Initalize newNumber as bigInt to keep up with storage
  let newNumber = BigInt(0);
  for (let i = 0; i < n.length; i++) {
    newNumber += BigInt(n[i]);
  }
  if (!checkDigits(newNumber.toString())) {
    return addDigits(newNumber.toString());
  } else {
    return newNumber;
  }
}

function checkDigits(n) {
  if (n.length === 1) {
    return true;
  } else {
    return false;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = firstMultipleInput[0];

  const k = parseInt(firstMultipleInput[1], 10);

  const result = superDigit(n, k);

  ws.write(result + "\n");

  ws.end();
}
