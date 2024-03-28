// This function is designed to take in a text file and decoded it using the following rules:
// Numbers are extracted from the text file
// Numbers are ordered in a pyramid, first level is 1 item, second is 2 items, 3rd is 3 items, etc.
// Pyramid looks like this:
//      1
//     2 3
//    4 5 6
// Extract numbers from end of each pyramid line to determine the "Important Number"
// These numbers are used to determine the corresponding word and return the secret message
// Example :
//  see example.txt
// example.txt becomes number array like:
//      1
//     2 3
//    4 5 6
// number array becomes "important numbers" like:
// [1, 3, 6]
// Decoded message becomes: I Love Computers

// Pre-Conditon:
// A text file with the format:
// number word, ex: 1 cat, 2 dog, 3 Rules etc
// Post-Condition:
// A decoded message:
// Cat Rules

// IMPORTED MODULE
const fs = require("fs");

// Converting example.txt into useable format
try {
  const data = fs.readFileSync(
    "/home/dvirak/Coursework/coding-challenges/DecodeText/coding_qual_input.txt",
    "utf8"
  );
  processData(data);
} catch (err) {
  console.error("Error:", err);
}

// Process Data After FS Makes It readable
function processData(textData) {
  try {
    decodeMessage(textData);
  } catch (error) {
    console.error("Error processing data:", error);
  }
}

// Takes in the message, which is the textData from the textFile
function decodeMessage(message) {
  keyValueMessage = createKeyValues(message); // Takes in the message and returns an object of Key:Value pairs for each line
  numberMess = extractNumFromMessage(keyValueMessage); // Takes in the keyValueMessage, Returns unordered number array
  pyramidArray = createPyramidArray(numberMess); //Takes in number array and returns ordered pyramid array
  importantNums = getImportantNums(pyramidArray); //Takes in ordered pyramid array, returns the last number of each line of the pyramid
  wordMess = getAssociatedWords(keyValueMessage, importantNums); //Takes in the original message and the important numbers and returns the decoded message
  console.log(wordMess);
  return wordMess;
}

// Takes in the message, Returns key:value array
function createKeyValues(messageText) {
  let textArray = messageText.split("\n");
  let keyValueArray = {};
  for (item of textArray) {
    let itemArray = item.trim().split(" ");
    keyValueArray[itemArray[0]] = itemArray[1];
  }
  return keyValueArray;
}

// Takes in the keyValueMessage, Returns ordered number array
function extractNumFromMessage(keyValueArray) {
  let numberArray = [];
  for (key in keyValueArray) {
    numberArray.push(key);
  }
  return numberArray;
}

//Takes in ordered number array and returns ordered pyramid array
function createPyramidArray(numberArray) {
  let step = 1;
  let subets = [];
  while (numberArray.length > 0) {
    if (numberArray.length >= step) {
      subets.push(numberArray.splice(0, step));
      numberArray.slice(step, 1);
      step += 1;
    }
  }
  return subets;
}

//Takes in ordered pyramid array, returns the last number of each line of the pyramid
function getImportantNums(numberArr) {
  let importantNums = [];
  for (item of numberArr) {
    importantNums.push(item[item.length - 1]);
  }
  return importantNums;
}

//Takes in the original message and the important numbers and returns the decoded message
function getAssociatedWords(keyValueArray, importantNums) {
  let decodeMessageArray = [];
  for (const [key, value] of Object.entries(keyValueArray)) {
    if (importantNums.includes(key)) {
      decodeMessageArray.push(value);
    }
  }
  return decodeMessageArray.join(" ");
}
