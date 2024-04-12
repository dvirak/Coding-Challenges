"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
  // ! MY CODE
  // Loop through head1 till null, create array
  let array1 = createArray(head1);

  // Loop through head2 till null, create array
  let array2 = createArray(head2);

  // combine arrays
  let combinedArray = [...array1, ...array2];

  // sort array
  let sortedArray = combinedArray.sort((a, b) => a - b);

  let linkedList = new LinkedList();
  for (const item of sortedArray) {
    linkedList.append(item);
  }
  // return
  // linkedList.print()
  console.log(linkedList.head);
  return linkedList.head;
}

// Create array so I can combine the data
function createArray(head) {
  let array = [];
  let nullFound = false;
  let current = head;

  // Loop through until a null value is returned
  // IF not null add it to the array
  while (!nullFound) {
    if (current === null) {
      nullFound = true;
      return array;
    } else {
      array.push(current.data);
      current = current.next;
    }
  }
}

// Create node class
class Node {
  constructor(data) {
    this.data = data;
    // Define this.next as null because we dont have the next value at the time
    // This will be added in the LinkedList class fucntion called add
    this.next = null;
  }
}

// Define LinkedList class
class LinkedList {
  // Initialize with null head
  constructor() {
    this.head = null;
  }

  // Function to add data to the linkedList
  append(data) {
    const newNode = new Node(data);
    // Initialize this as head if there is no head assigned
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    // Loop through until next value is null, this means we are at end of list
    while (current.next !== null) {
      current = current.next;
    }
    // Assign new node to current
    current.next = newNode;
  }

  // Print elements of the list
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llist1Count = parseInt(readLine(), 10);

    let llist1 = new SinglyLinkedList();

    for (let i = 0; i < llist1Count; i++) {
      const llist1Item = parseInt(readLine(), 10);
      llist1.insertNode(llist1Item);
    }

    const llist2Count = parseInt(readLine(), 10);

    let llist2 = new SinglyLinkedList();

    for (let i = 0; i < llist2Count; i++) {
      const llist2Item = parseInt(readLine(), 10);
      llist2.insertNode(llist2Item);
    }

    let llist3 = mergeLists(llist1.head, llist2.head);

    printSinglyLinkedList(llist3, " ", ws);
    ws.write("\n");
  }

  ws.end();
}
