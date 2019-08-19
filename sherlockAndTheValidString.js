

function isValid(s) {
  let dict = {};
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
      if (dict[char]) {
      dict[char]++;
    } else {
      dict[char] = 1;
    }
  }

  let counts = Object.values(dict).sort((a,b) => a - b);

  if (counts[0] === counts[counts.length - 1]) {
    return 'YES';
  }

  if (counts[0] === counts[counts.length - 2] && counts[counts.length - 1] === counts[0] + 1) {
    return 'YES';
  }

  if (counts[1] === counts[counts.length - 1] && counts[0] === 1) {
    return 'YES';
  }

  return 'NO';

}

console.log(isValid('abcde'))
console.log(isValid('aabbcceeddffgg'))
console.log(isValid('ABCDEFGHHHIJK'))