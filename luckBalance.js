/**
 * Input: k = int
 *        contests = 2d array
 *        contests[i][0] = luck score
 *        contests[i][1] = importance (0 = unimportant, 1 = important)
 *                   [[5, 1],
 *                    [1, 0],
 *                    [2, 0]]
 * 
 * Output: max luck balance after losing no more than 'k' important contests
 * 
 */

function luckBalance(k, contests) {
  contests.sort((a,b) => b[0] - a[0]);
  let luck = 0;

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      luck += contests[i][0];
    } else if (k > 0) {
      luck += contests[i][0];
      k--;
    } else {
      luck -= contests[i][0];
    }
  }

  return luck;
}