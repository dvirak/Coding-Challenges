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
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
  // Write your code here
  // For loop from i=0 to n, i++
  // If i/15, print FizzBuzz
  // if i/5, print Buzz
  // If i/3, print Fizz
  // Else, print i
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      // console.log(i)
      // console.log(i %= 15)
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
function main() {
  const n = parseInt(readLine().trim(), 10);

  fizzBuzz(n);
}
