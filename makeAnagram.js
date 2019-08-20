

function makeAnagram(str1, str2) {
  let dict1 = {};
  let dict2 = {};
  let deletions = 0;

  for (let i = 0; i < str1.length; i++) {
    !dict1[str1[i]] ? dict1[str1[i]] = 1 : dict1[str1[i]]++;
  }

  for (let i = 0; i < str2.length; i++) {
    !dict2[str2[i]] ? dict2[str2[i]] = 1 : dict2[str2[i]]++;
  }

  for (let i = 0; i < Object.keys(dict1).length; i++) {
    let char = Object.keys(dict1)[i];
    !dict2[char] ? deletions += dict1[char] : deletions += Math.abs(dict1[char] - dict2[char]);
  }

  for (let i = 0; i < Object.keys(dict2).length; i++) {
    let char = Object.keys(dict2)[i];
    if (!dict1[char]) {
      deletions += dict2[char];
    }
  }

  return deletions;

}

let testStr1 = 'cde';
let testStr2 = 'abc';

console.log(makeAnagram(testStr1, testStr2));