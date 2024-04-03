function processData(input) {
  //!Enter your code here

  // Split string input even though instructions say "GIVEN AN ARRAY"
  let inputArray = input
    .trim()
    .split(/\s+|\n+/)
    .map(Number);

  // Extract number of test cases
  let testCases = inputArray.shift();

  // Process each test case
  for (let i = 0; i < testCases; i++) {
    function processData(input) {
      //Enter your code here

      // Split string input even though instructions say "GIVEN AN ARRAY"
      let inputArray = input
        .trim()
        .split(/\s+|\n+/)
        .map(Number);

      // Extract number of test cases
      let testCases = inputArray.shift();

      // Process each test case
      for (let i = 0; i < testCases; i++) {
        const numElements = inputArray.shift();
        const testCaseArray = inputArray.splice(0, numElements);
        const zigZag = createZigZagArray(testCaseArray, numElements);
        console.log(typeof zigZag);
        console.log(typeof zigZag[0]);

        console.log(zigZag.join(" "));
      }
      // This function will take in an ordered array(array) of number
      // and the number of elements in the array = numElements
      // It will return the zigZag array in the lexicographiocally smallest sequence.
      function createZigZagArray(array, numElements) {
        let zigZag = [];
        // Create point to split the sorting in half
        const breakPoint = Math.floor(numElements / 2);
        for (let i = 0; i < breakPoint; i++) {
          zigZag.push(array.shift());
        }

        // Reverse array to make it decreasing order
        array.reverse();

        // Add the rest of the elements to the zigZag array
        for (let i = 0; i <= breakPoint; i++) {
          zigZag.push(array.shift());
        }

        return zigZag;
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

    const numElements = inputArray.shift();
    const testCaseArray = inputArray.splice(0, numElements);
    const zigZag = createZigZagArray(testCaseArray, numElements);
    console.log(zigZag.join(" "));
  }
  // This function will take in an ordered array(array) of number
  // and the number of elements in the array = numElements
  // It will return the zigZag array in the lexicographiocally smallest sequence.
  function createZigZagArray(array, numElements) {
    let zigZag = [];
    // Create point to split the sorting in half
    const breakPoint = Math.floor(numElements / 2);
    for (let i = 0; i < breakPoint; i++) {
      zigZag.push(array.shift());
    }

    // Reverse array to make it decreasing order
    array.reverse();

    // Add the rest of the elements to the zigZag array
    for (let i = 0; i <= breakPoint; i++) {
      zigZag.push(array.shift());
    }

    return zigZag;
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
