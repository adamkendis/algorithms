/*

*****NOTE: Solved but need to significantly improve time complexity*****


Inputs: Int n (length of array), Matrix q (2d array, each row arr of 3 ints a, b, k)
                                                   a: start index, inclusive
                                                   b: end index, inclusive
                                                   k: summand

Output: Max int in resulting arr after completing operations                                  

n: 5
queries: [
    [1, 2, 5],
    [2, 4, 10],
    [1, 4, 15]
   ]

[0,  0,  0,  0, 0]
[5,  5,  0,  0, 0]
[5, 15, 10, 10, 0]
[20, 30, 25, 25, 0]

-> 30 is max

*/

function arrayManipulation(n, queries) {
  let arr = new Array(n).fill(0);
  let max = 0;

  queries.forEach(query => {
    for (let i = query[0] - 1; i <= query[1] - 1; i++) {
      arr[i] += query[2];
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  });

  return max;

}

let operations1 = [[1,2,100], [2,5,100], [3,4,100]];
let operations2 = [[1,5,3], [4,8,7], [6,9,1]];
let operations3 = [[2,3,603], [1,1,286], [4,4,882]];

let test1 = arrayManipulation(5, operations1);
let test2 = arrayManipulation(10, operations2);
let test3 = arrayManipulation(4, operations3);

console.log(test1 === 200);
console.log(test2 === 10);
console.log(test3 === 882);