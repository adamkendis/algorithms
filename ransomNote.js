/*

Inputs: magazine (arr of strings)
        note (arr of strings)

Output: 'Yes' if note can be created from strings in magazine (case-sensitive)
        'No' otherwise


*/

function checkMagazine(magazine, note) {
  let dict = {};

  magazine.forEach(word => {
    return !dict[word] ? dict[word] = 1 : dict[word] += 1;
  });

  for (let i = 0; i < note.length; i++) {
      if (!dict[note[i]]) {
          console.log('No');
          return;
      } else {
          dict[note[i]] -= 1;
      }
  }

  console.log('Yes')
  return;
}

let mag1 = ["give", "me", "one", "grand", "today", "night"]
let note1 = ["give", "one", "grand", "today"]
checkMagazine(mag1, note1);
