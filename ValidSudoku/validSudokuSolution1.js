// Divy up into 3 containers
// rows, columns, squares
// check through each one and if we repeat at any moment we return false
// Use a set to check for unique items
// We will need 2 for loops, one to work through horizontal and one vertical
// start with i loop
// at beginning of each i loop we create new sets for row, column, box
// we move on to j loop
// for each j we will assign a new value for the row, column and box
// We check if the each value at the assigned location is contained in the respective section
// Use set.has, if it returns true, we return false because that means the number already exists in the respective row, column or box
// If not we add it to the respective category and move on to check next value
// For box we will use / for vertical traversal and % for horizontal
// we use this formula for the horizontal: 3 * Math.floor(i/3) + Math.floor(j/3)
//for each iteration i will stay constant while j increases thus you go (3*0+0)(3*0+0)(3*0+0)(3*0+1)(3*0+1)(3*0+1)(3*0+2)(3*0+2)(3*0+2) === 0,0,0 1,1,1 2,2,2
// for vertical: 3 * i%3 + j%3
// so 3*0%3+0%3, 3*0%3+1%3, 3*0%3+2%3 ==== 0, 1, 2
// YOU GOTTA CHECK IF THEY BLANK!!!!

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    let column = new Set();
    let box = new Set();

    for (let j = 0; j < 9; j++) {
      let rowValue = board[i][j];
      let columnValue = board[j][i];
      let boxValue =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      // console.log("Row Value: "+ rowValue)
      // console.log("Row:")
      // console.log(row)
      if (rowValue != ".") {
        if (row.has(rowValue)) return false;
        row.add(rowValue);
      }

      // console.log("Column Value: " + columnValue)
      // console.log("column:")
      // console.log(column)
      if (columnValue != ".") {
        if (column.has(columnValue)) return false;
        column.add(columnValue);
      }

      // console.log("box Value: "+ boxValue)
      // console.log("box:")
      // console.log(box)
      if (boxValue != ".") {
        if (box.has(boxValue)) return false;
        box.add(boxValue);
      }
    }
  }
  return true;
};
