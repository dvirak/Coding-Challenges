/*
we create a MinHeap(A) and save it as priorityQue

Then we initialize count

Then we enter a while loop that exists as long as our PriorityQue contains 1 or more elements and the smallest element is greater than k

We extractMin() from the heap twice to extract the two smallest values

We do the operation 1 x least sweet cookie + 2x 2nd least sweet cookie to get our new cookie sweetness

We insert this newCookie back to our priorityQue.


We increase the count

After this is all done and we exit the while loop we check if lowest value in the priorityQue is greater than the required sweetness

If its not we return -1

Else we return count

Ok so then we create a MinHeap class

In this constructor, we are saying that any array we initialize in the MinHeap class like MinHeap(A) will take each element from the array and add it to the MinHeap.

Js does not have a built in class that handles MinHeap or Heap. So essentially we are creating the MinHeap, and it has an element called heap which contains the elements in the heap. Would this mean we would call back that item by saying priorityQue.heap? Or would it be enough to just call the MinHeap item?

So . size obviously returns the length of the heap.

.insert pushes a value to the heap and then calls on bubbleUp which essentially is like a heapify in other languages?

So for bubbleUp():
We start with the last index in the heap
We enter while loop while currentIndex is > 0
We find the parent index by finding the lowerbound of the child index using the formula (i - 1) / 2. It seems like this is just the formula for dealing with priorityQuens in JS. 
No we compare the element at parentIndex with the element at currentIndex
With this line:
            if (this.heap[parentIdx] <= this.heap[currentIdx]) break;

We are essentially saying if the item at the parent index is less than or equal to the item at current index, we can just move on. The break key word takes us out of the current while loop and we move on.

Otherwise, we reach this code:
            [this.heap[parentIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[parentIdx]];

Which is just switching the order of these two items so that the parent index becomes the smaller value. 

Then we set current index to parent index and continue the loop to ensure our smallest values are at the head.

Peek returns the head of our stack which is the smallest element

extractMin() sets min = the head of our heap at heap[0]. This should be the smallest number right?

Then we set last = this.heap.pop() which is removing the item at the very end of the array.

Now we enter an if statement saying if the size of the heap is greater than zero then we set the last element equal to the head and call upon the sinkdown function.

Then we return the min value

Finally we reach sinkDown()

This function starts with currentIndex at 0
Length is this.size() but why did we need a function for that why not just call this.heap.length() here?
Our element is the head element at index 0
We enter a while loop
We specify the leftChildIndex using the formula 2i + 1
We specify the rightChildIndex using the formula 2i + 2
I guess this next line is just declaring empty variables titles leftChild and rightChild?
Swap = null
Now we check if leftChildIndex < length. But shouldnt this always be true? Or I guess we are just determining if the index would exist if its greater than the length then obviously nothing could exist in the array at that index.

If this is true, we set the leftChild to the item in the heap at index leftChildIndex. 
If this item is less than the head of our element, we set swap = to our leftChildIndex.

Now we check the right child index. If this is greater than length obviously the item doesnt exist and we move on.
Else we set right child equal to the item at heap[rightChildIndex]
No we check:
If swap is equal to null AND rightChild is less than our head element, OR swap does NOT equal null AND rightChild < leftChild, we set swap to the rightChildIndex

No we check if swap is still equal to null then nothing needs to change and we move on. This essentially means it had checked our first element against its left and right children and determined that neither of them are less than our head element.
If this is no the case, we set the item at our currentIndex = the item at the swap index. Essentially saying well the item at the swap was determined to be less than the current one, so lets switch this. Place the swap item at the current index and the current index item at the swap index location. Then we set our currentIndex to the swap index and continue with our loop.

By using this with our extractMin(), we essentially using the extractMin to place what should be the largest element at the head of our stack, and then use bubble up to compare the children of this element until we have reorganized it where the smallest elements are in the top of the que. By placing this bubbleUp() function in our insert function we ensure that his is checked everytime we add a new sweetness level to our que.




*/

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
  // Sort array
  // Remove first 2 elements
  // Do the math
  // Add element back
  // Repeat
  let count = 0;

  while (Math.min(...A) < k) {
    if (A.length < 2 && Math.min(...A) < k) {
      return -1;
    }
    A.sort((a, b) => a - b);
    let lowestVals = A.slice(0, 2);
    let newNumber = A[0] + 2 * A[1];
    let newArray = A.slice(2, A.length);
    newArray.push(newNumber);
    A = [...newArray];
    count++;
  }

  return count;
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


    bubbleUp() {
        let currentIdx = this.size() - 1;
        while (currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.heap[parentIdx] <= this.heap[currentIdx]) break;
            [this.heap[parentIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[parentIdx]];
            currentIdx = parentIdx;
        }
    }