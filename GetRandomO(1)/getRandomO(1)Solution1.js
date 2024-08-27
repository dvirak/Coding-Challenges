// Initialize the class with a map and an array
// array will store all the actual values and the map will store the values and their indexes for quick look up
var RandomizedSet = function () {
  this.map = new Map();
  this.array = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
// Use this.map.has to check if val is contained in the set. If it alreayd has the value, return false
// use this.map.set(val, this.array.length) to add the key value pair to the map
// since we will use push to add to the array, this ensures the value where the key = val is always equal to
// the index of where we are pushing
// Then we simply push to the array and return true
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.array.length);
  this.array.push(val);
  return true;
};

// We will use this.map.has to check if a value is in the set, if it is not, we return false
// If not we can use.map.get to get the index where val is contained in the array
// With that index, we can swap its location in the array, then use the pop method to remove it
// We also need to update the map for the key:val of the item that is swapped in the array
// Then we simnply use the delete method on the map and return true
/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  let index = this.map.get(val);
  let lastElement = this.array[this.array.length - 1];
  this.map.set(lastElement, index);
  this.array[index] = lastElement;
  this.array[this.array.length - 1] = val;
  this.array.pop();
  this.map.delete(val);
  return true;
};

// Use Math.random() * this.array.length - 1 to get a random number 0 - this.array.length - 1
// Use Math.floor() to round that number down to the nearest whole number.
// Return the value at this.array[randomIndex]
/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let randomIndex = Math.floor(Math.random() * this.array.length);
  return this.array[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
