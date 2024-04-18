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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
  // Write your code here
  let stack = [];
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];
  // Reverse pairs for comparison later
  const bracketPairs = { ")": "(", "}": "{", "]": "[" };

  for (const bracket of s) {
    // Add opening brackets to the stack
    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
      // When we get to closing brackets, we start to pop from the stack for comparison
    } else if (closingBrackets.includes(bracket)) {
      if (stack.length === 0) return "NO"; // Unmatched closing brackets
      const topBracket = stack.pop();
      if (bracketPairs[bracket] !== topBracket) return "NO"; //Mismatched brackets
    }
  }

  // Check if any opening brackets remain in the stack
  return stack.length === 0 ? "YES" : "NO";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const s = readLine();

    const result = isBalanced(s);

    ws.write(result + "\n");
  }

  ws.end();
}
