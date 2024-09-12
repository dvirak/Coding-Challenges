// We are keeping track of one big sum of total candies distributed, rather than how many candies at each child
// IF the ratings increase between 2 neighboring children, we know that at least one additional candy is distributed
// So as we we increase upwards, we keep adding one candy and we keep track of the peak for when a downward trend begins
// When we begin a downward trend, we know that each decrease means the child before needed an additional candy
// We kept track of the peak because once we get to a point where we have decreased more times than the initial peak,
// the child at the peak will need an additional candy to handle that many decreases
// ex [1, 5, 4, 3, 2, 1] => initially we would say that we could distribute [1, 2....]
// but as we continue on our downward path, we know that the child at index[1] would need additional candies
// ends up looking like this [1, 2, 1] = [1, 3, 2, 1] = [1, 4, 3, 2, 1] = [1, 5, 4, 3, 2, 1]
// if we reach a point where the neighbors are equal we can reset everything
// ex. [1, 2, 2, 2] = > [1, 2, 1, 1]

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  if (ratings.length === 0) return 0;

  let ret = 1,
    up = 0,
    down = 0,
    peak = 0;

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      up++;
      peak = up;
      down = 0;
      ret += up + 1;
    } else if (ratings[i] < ratings[i - 1]) {
      down++;
      up = 0;
      ret += down;

      if (down > peak) {
        ret++;
      }
    } else {
      up = 0;
      down = 0;
      peak = 0;
      ret++;
    }
  }

  return ret;
};
