/*
 
Inputs: k = target difference
        arr = array of ints

Output: Number of pairs of elements with target difference

 */

function pairs(k, arr) {
  arr.sort((a,b) => b-a);
  let pairs = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] - arr[j] === k) {
        pairs++;
      } else if (arr[i] - arr[j] > k) {
        break;
      }
    }
  }

  return pairs;
}