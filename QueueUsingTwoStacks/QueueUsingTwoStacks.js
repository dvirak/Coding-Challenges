function processData(input) {
  //Enter your code here
  let queue = [];
  const inputArray = input.split("\n");
  // inputArray[0] = length
  // for i=1; i<=lenght; i++
  // split each item, check for item[0]
  // if 1, .push
  // if 2, shift
  // 3 console.log
  const length = inputArray[0];
  for (i = 1; i <= length; i++) {
    const currentStep = inputArray[i].toString().split(" ");
    const command = currentStep[0];
    if (command === "1") {
      queue.push(currentStep[1]);
    } else if (command === "2") {
      queue.shift();
    } else if (command === "3") {
      console.log(queue[0]);
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
