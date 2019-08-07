function twoStrings(s1, s2) {
  let dict = {};

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== ' ') {
      dict[s1[i]] = true;
    }
  }

  for (let i = 0; i < s2.length; i++) {
      if (dict[s2[i]]) {
          return 'YES';
      }
  }
  return 'NO';
}

let str1 = 'this is a string'
let str2 = 'hello'
let str3 = 'yellow'

console.log(twoStrings(str1, str2)) // YES
console.log(twoStrings(str1, str3)) // NO