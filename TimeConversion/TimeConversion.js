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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  // Check time, if its 12:00:00AM or ends in PM, subtract 12:00:00, remove AM/PM
  // Slice out letters from the end
  // Slice hours from beginning
  // Convert hours to int
  // If letters = AM and int = 12, subtract 12
  // Else If letters = PM && int =12 , int = 12
  // Else If letters = PM, add 12 to hoursInt
  // Else
  // If hours int < 10, adda zero before the string conversion
  // Else return string
  // return string
  const letters = s.slice(8, 10);
  const hours = s.slice(0, 2);
  let hoursInt = parseInt(hours);
  if (hoursInt == 12 && letters == "AM") {
    return "00" + s.slice(2, 8);
  } else if (hoursInt == 12 && letters == "PM") {
    return "12" + s.slice(2, 8);
  } else if (letters == "PM") {
    hoursInt += 12;
    const string = hoursInt.toString() + s.slice(2, 8);
    return string;
  } else {
    if (hoursInt < 10) {
      const string = "0" + hoursInt.toString() + s.slice(2, 8);
      return string;
    } else {
      const string = hoursInt.toString() + s.slice(2, 8);
      return string;
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
