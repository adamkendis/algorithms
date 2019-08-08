

function maximumToys(prices, k) {
  prices = prices.sort((a,b) => a-b);
  let toyCount = 0;
  let currCost = 0;

  prices.forEach(price => {
    if (currCost + price <= k) {
      currCost += price;
      toyCount++;
    } else {
      return;
    }
  });

  return toyCount;

}