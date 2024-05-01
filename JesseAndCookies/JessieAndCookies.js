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
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

function cookies(k, A) {
  // Write your code here
  // Initial Check to Determine if moves can or need to be made
  if (A.length < 1 || Math.min(...A) >= k) {
    return 0;
  }

  const priorityQue = new MinHeap(A);
  let count = 0;

  /*
   * While loop for as long as we have 2 or more items in que
   * and the smallest item (head) is less thank k
   */
  while (priorityQue.size() > 1 && priorityQue.peek() < k) {
    let firstCookie = priorityQue.extractMin();
    let secondCookie = priorityQue.extractMin();

    let newCookie = firstCookie + 2 * secondCookie;
    priorityQue.insert(newCookie);

    count++;
  }

  return priorityQue.peek() >= k ? count : -1;
}

class MinHeap {
  constructor(arr = []) {
    this.heap = [];
    arr.forEach((element) => this.insert(element));
  }

  size() {
    return this.heap.length;
  }

  insert(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  bubbleUp() {
    // Start with currentIndex as the very last item in the heap
    let currentIndex = this.size() - 1;
    while (currentIndex > 0) {
      // Standard formular for finding parent index in a heap/priority queue

      let parentIndex = Math.floor((currentIndex - 1) / 2);

      // If item at parent index is smaller than child index
      // then we are correctly ordered by size from smallest to largest and move on
      if (this.heap[parentIndex] <= this.heap[currentIndex]) break;

      // Otherwise we switch the lcoation of this items in the heap
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];

      // Set current index equal to parent index to continue working back through queue
      currentIndex = parentIndex;
    }
  }

  // ruturns the value of the head of the heap, which should be the lowest value
  peek() {
    return this.heap[0];
  }

  // Removes and returns the smallest value in the array, which is the head
  extractMin() {
    let min = this.heap[0];
    let last = this.heap.pop();

    // Sets the head of the heap to the last value and then calls sinkDown to reorder the heap
    if (this.size() > 0) {
      this.heap[0] = last;
      this.sinkDown();
    }

    return min;
  }

  // Reorganizes the heap to be ordered from least to greatest
  sinkDown() {
    let currentIndex = 0;
    let length = this.size();
    let element = this.heap[0];

    // Continues until it reaches a break statement
    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let leftChild, rightChild;
      let swap = null;

      // If leftChildIndex is >= length, its outside the heap and thus doesnt exist
      if (leftChildIndex < length) {
        // Set leftChild equal to the item at the leftChildIndex
        leftChild = this.heap[leftChildIndex];
        // If leftChild < our current element, set swap equal to leftChildIndex
        if (leftChild < element) swap = leftChildIndex;
      }

      // If rightChildIndex is >= length, its outside the heap and thus doesnt exist
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];

        /* 
        Check swap, if null and rightChild < our current element, then left child was in proper order, but we gotta swap our current and the rightChild 
        OR
        If its NOT null and rightChild is less than leftChild, we was gonna swap with leftChild, but rightChild is even less, so swap it to this position
        */
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        )
          swap = rightChildIndex;
      }

      // This will end the loop when we have determined we are in correct ordr
      if (swap === null) break;

      // Else we set the item at the currentIndex equal to the item we determined to swap,
      // We set the item at the swap position equal to our current element
      // We set our currentIndex equal to the swap index and continue our loop
      this.heap[currentIndex] = this.heap[swap];
      this.heap[swap] = element;
      currentIndex = swap;
    }
  }
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const A = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((ATemp) => parseInt(ATemp, 10));

  const result = cookies(k, A);

  ws.write(result + "\n");

  ws.end();
}
