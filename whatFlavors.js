
function whatFlavors(cost, money) {
  let result = [];

  let map = cost.reduce((accum, price, idx) => {
    let remainder = money - price;

    if (remainder > 0) {
      if (!accum[remainder]) {
        accum[remainder] = [idx + 1];
      } else {
        accum[remainder].push(idx + 1);
      }
    }

    return accum;
  }, {});

  for (let i = 0; i < cost.length; i++) {

    if (map[cost[i]]) {
      if (money/cost[i] === 2 && map[cost[i]].length > 1) {
        result[0] = map[cost[i]][0];
        result[1] = map[cost[i]][1];
        break;
      } else if (money/cost[i] !== 2) {
        result[0] = i + 1;
        result[1] = map[cost[i]][0];
        break;
      }
    }
  }

  console.log(result.join(' '));
}

console.log(whatFlavors([1, 2, 2, 3, 4, 5], 7)); // 2 6
console.log(whatFlavors([1, 1, 1, 2, 2], 2)); // 1 2
console.log(whatFlavors([5, 4, 3, 8, 1], 11)) // 3 4