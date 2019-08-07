/*

Input: String
Output: Int (num of substr anagrams)


'hello' ->

h he hel hello
e el ell ello
l ll llo
l lo
o

{

  h: 1,
  e: 1,
  l: 2,    <----
  o: 1,
  he: 1,
  hel: 1,
  hell: 1,
  hello: 1,
  el: 1,
  ell: 1, 
  ello: 1,
  ll: 1,
  llo: 1,
  lo: 1

}

 */

function sherlockAndAnagrams(str) {
  let dict = {};
  let pairs = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substr = str.substring(i, j+1).split('').sort().join('');

      if (!dict[substr]) {
        dict[substr] = 1;
      } else {
        pairs += dict[substr];
        dict[substr]++;
      }
    }
  }

  return pairs;
}

let str1 = 'abba' // 4
let str2 = 'abcd' // 0
let str3 = 'ifailuhkqq' // 3
let str4 = 'bbbb' // 10

let tests = [str1, str2, str3, str4]

for (let i = 0; i < tests.length; i++) {
  console.log(sherlockAndAnagrams(tests[i]))
}


