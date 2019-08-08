/*

Inputs: arr (ints)
        int r (common ratio)

Output: Number of triplets in geometric progression


[1, 3, 3, 9, 9, 27] -> 8


Triplet indices: 

(0, 1, 3)
(0, 2, 3)

(0, 1, 4)
(0, 2, 4)

(1, 3, 5)
(1, 4, 5)

(2, 3, 5)
(2, 4, 5)


*/

function countTriplets(arr, r) {
  let dict = {};
  let triplets = 0;

  arr.forEach(num => {
    if (!dict[num]) {
      dict[num] = 1;
    } else {
      dict[num]++
    }
  });

  Object.keys(dict).forEach(num => {
    let second = parseInt(num) * r;
    let third = second * r;
    if (dict[second] && dict[third]) {
      triplets += dict[num] * dict[second] * dict[third];
    }
  })

  return triplets;

}

let arr1 = [1, 2, 2, 4] // 2
let r1 = 2

let arr2 = [1, 3, 9, 9, 27, 81] // 6
let r2 = 3

console.log(countTriplets(arr1, r1))
console.log(countTriplets(arr2, r2))