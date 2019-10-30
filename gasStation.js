

var canCompleteCircuit = function(gas, cost) {  
  for (let i = 0; i < gas.length; i++) {
    let rotatedGas = gas.slice(i).concat(gas.slice(0, i));
    let rotatedCost = cost.slice(i).concat(cost.slice(0, i));
    let gasLeft = 0;
    
    for (let j = 0; j < rotatedGas.length; j++) {
      gasLeft += rotatedGas[j];
      if ((gasLeft - rotatedCost[j]) < 0) {
        break;
      }
      gasLeft -= rotatedCost[j];  
      
      if (j === rotatedGas.length - 1) {
        if (gasLeft >= 0) {
          return i;
        }
      }
    }
  }
  return -1;
}

let gas1 = [1,2,3,4,5];
let cost1 = [3,4,5,1,2];

console.log(canCompleteCircuit(gas1, cost1));