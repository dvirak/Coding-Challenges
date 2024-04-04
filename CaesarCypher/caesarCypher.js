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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  // Write your code here
  // Create array of alphabet
  const alphabetArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // Create empty array for decoded word
  const decodedWord = [];
  // create shift that will be consistent regardless of whether its over 26 or not
  const shift = k % 26;
  console.log(shift);

  // Loop through the statement (s)
  for (const letter of s) {
    // Get index or letter\
    // Must be checked in uppercase since all in alphabetArray are uppercase
    const letterIndex = alphabetArray.indexOf(letter.toUpperCase());

    // New Index of letter is current index + cipher value (k)
    // If new index is > 25, needs to llop back to beggining, so subtract 26
    const newLetterIndex =
      letterIndex + shift <= 25
        ? letterIndex + shift
        : letterIndex + shift - 26;

    // IF letter is not contained in alphabet array, it will return -1
    // Therefore if letterIndex = -1, we want to return the letter without changes
    // Else we want the letter at the newLetterIndex of alphabetArray
    const newLetter =
      letterIndex === -1 ? letter : alphabetArray[newLetterIndex];

    // Confirm case is correct for each letter
    // If the original letter as in caps, return caps, else reutrn lowercase
    if (letter.toUpperCase() === letter) {
      decodedWord.push(newLetter.toUpperCase());
    } else {
      decodedWord.push(newLetter.toLowerCase());
    }
  }

  // Join array back together to form decoded word
  return decodedWord.join("");
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine();

  const k = parseInt(readLine().trim(), 10);

  const result = caesarCipher(s, k);

  ws.write(result + "\n");

  ws.end();
}
