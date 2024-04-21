function processData(input) {
  // ! Enter your code here
  // Keep a stack to keep track of previous iterations
  let stack = [];
  let string = "";

  let inputArray = input.trim().split("\n");

  for (let i = 1; i <= inputArray[0]; i++) {
    // Break down each step into what its looking for
    // split the step to determine the function to follow and the number or string to use
    // Write THIS:
    const [instruction, data] = inputArray[i].trim().split(" ");
    // Instead of this:
    // const stepArray = inputArray[i].split(" ")
    // const instruction = stepArray[0]
    // const data = stepArray[1]
    let prevString = string;
    switch (instruction) {
      case "1":
        string = appendToString(string, data);
        // stack = addToStack(stack, prevString)
        stack.push(prevString);
        break;
      case "2":
        string = deleteFromString(string, data);
        // stack = addToStack(stack, prevString)
        stack.push(prevString);
        break;
      case "3":
        console.log(string[parseInt(data) - 1]);
        break;
      case "4":
        string = undoLastNotUndone(stack);
        break;
    }
  }
}

// Create functions for each step: append, delete, print, undo
function appendToString(origString, additString) {
  return origString.concat(additString);
}

function deleteFromString(string, number) {
  return string.slice(0, string.length - parseInt(number));
}

function undoLastNotUndone(stack) {
  // Call on most recent addition when undo is called
  // Then delete from stack
  if (stack.length > 0) {
    return stack.pop();
  } else {
    return "";
  }
}

// function addToStack(stack, string) {
//     if (string === "") {
//         stack.push(" ")
//     } else {
//         stack.push(string)
//     }
//     return stack
// }

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
