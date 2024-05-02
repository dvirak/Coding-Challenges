var Tree = function () {
  this.root = null;
};

Tree.prototype.insert = function (node, data) {
  if (node == null) {
    node = new Node(data);
  } else if (data < node.data) {
    node.left = this.insert(node.left, data);
  } else {
    node.right = this.insert(node.right, data);
  }

  return node;
};

var Node = function (data) {
  this.data = data;
  this.left = null;
  this.right = null;
};

/* head ends */

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function preOrder(root) {
  /*
    Create a recursive function that checks if currentNode has data, if not we return
    if it does we add it to our array
    if it does we call the function again on the left side
    then we call the function on the right side
    function should break when both sides return as null
    then we return the results
    */
  let array = [];
  checkArray(root, array);
  // trying to just print each item as a line? idk
  array.forEach((data) => process.stdout.write(data + " "));
  return array;
}

function checkArray(node, array) {
  // console.log("NODE: " + node)
  // console.log("array: " + array)
  // Check current node for nullness
  if (node === null) {
    return;
  }

  // if not null add to array
  array.push(node.data);

  // Recursive call on left side
  checkArray(node.left, array);

  // Recursive call on right side
  checkArray(node.right, array);
}

/* tail begins */

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _stdin = "";
var _stdin_array = "";
var _currentline = 0;

process.stdin.on("data", function (data) {
  _stdin += data;
});

process.stdin.on("end", function () {
  _stdin_array = _stdin.split("\n");
  solution();
});

function readLine() {
  return _stdin_array[_currentline++];
}

function solution() {
  var tree = new Tree();
  var n = parseInt(readLine());
  var m = readLine().split(" ").map(Number);
  for (var i = 0; i < n; i++) {
    tree.root = tree.insert(tree.root, m[i]);
  }

  preOrder(tree.root);
}
