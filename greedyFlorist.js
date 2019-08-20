
function getMinimumCost(k, c) {
  let costs = c.sort((a, b) => b - a);
  let multiplier = 0;
  let minCost = 0;

  for (let i = 0; i < costs.length; i++) {
    let flowerCost = (1 + multiplier) * costs[i];

    if ((i+1) % k === 0) {
      multiplier++;
    }

    minCost += flowerCost;
  }

  return minCost;
}

let test1 = getMinimumCost(3, [2, 5, 6]);
let test2 = getMinimumCost(2, [2, 5, 6]);
let test3 = getMinimumCost(3, [1, 3, 5, 7, 9]);

console.log(test1); // 13
console.log(test2); // 15
console.log(test3); // 29