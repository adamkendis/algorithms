
function isBalanced(s) {
  let map = {
    '[': ']',
    '(': ')',
    '{': '}'
  }
  let leftStack = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      leftStack.push(s[i]);
    } else if (Object.values(map).includes(s[i])) {
      if (map[leftStack.pop()] !== s[i]) {
        return 'NO';
      }
    }
  }

  if (leftStack.length) {
    return 'NO';
  } else {
    return 'YES';
  }
}