/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Set the head value of the new linked list,
  // this is the head of the resultant list
  let head = null;
  // Reference of head which is null at this point
  // This will help set the next reference for the LinkedList
  let temp = null;

  let carry = 0;

  // Looping through until one of the lists has no more values
  while (l1 !== null || l2 !== null) {
    // Carry from last iteration
    let sum = carry;

    // Check if a number exists
    if (l1 !== null) {
      // Add number to sum
      sum += l1.val;
      // Set listNode to move on to next value
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    // Create a new ListNode value
    let node = new ListNode(Math.floor(sum) % 10);

    // Create carry value if sum >= 10
    carry = Math.floor(sum / 10);

    // Checks if first time through the loop
    // If it is, sets head and temp = node
    if (temp === null) {
      // head essentially is a starting point for this listNode
      // Only has to be set once because it basically is the
      // starting location, not just a single value
      temp = head = node;
    } else {
      // This is linking the next value to the previous value
      // When When computer is pulled to head,
      // This is how it knows to go to the next value
      temp.next = node;
      temp = temp.next;
    }
  }
  // Checks for remainder and adds if exists
  if (carry > 0) {
    // Temp.next again creates link to next value in ListNode
    temp.next = new ListNode(carry);
  }

  // Only head needs to return because that value is
  // Linked to the rest of the ListNode with temp.next
  return head;
};

// For testing purposes on local machine
const arrayToList = (arr) => {
  if (!arr || arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
};

const l1 = arrayToList([2, 4, 3]);
const l2 = arrayToList([5, 6, 4]);

console.log(addTwoNumbers(l1, l2));
