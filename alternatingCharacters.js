

function alternatingCharacters(s) {
  let deletions = 0;
  
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      deletions++;
    }
  }

  return deletions;
}

console.log(alternatingCharacters('AAAA')) // 3
console.log(alternatingCharacters('BBBBB')) // 4
console.log(alternatingCharacters('ABABABAB')) // 0
console.log(alternatingCharacters('AAABBB')) // 4