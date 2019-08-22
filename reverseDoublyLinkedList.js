
function reverse(head) {
  let node = head;

  while (node) {
      let temp = node.next;
      node.next = node.prev;
      node.prev = temp;
      if (!node.prev) {
          break;
      } else {
          node = node.prev;
      }
  }

  return node;
}