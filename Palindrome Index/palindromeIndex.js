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
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
  // Write your code here
  console.log("Word = " + s);
  // For loop for each letter
  // create new string without that letter.
  // if new string === reversed string, return that letter,
  const wordArray = s.split("");
  console.log("WORD ARRAY = " + wordArray);
  for (const letter of wordArray) {
    const currentIndex = wordArray.indexOf(letter);
    const newArray =
      wordArray.slice(0, currentIndex) +
      wordArray.slice(currentIndex + 1, wordArray.length - 1);
    // newArray.splice(wordArray.indexOf(letter), 1)
    console.log(newArray);
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = palindromeIndex(s);

    ws.write(result + "\n");
  }

  ws.end();
}
