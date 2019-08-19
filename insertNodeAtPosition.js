
function insertNodeAtPosition(head, data, position) {
  let newNode = new SinglyLinkedListNode(data);
  let currPosition = 0;
  let node = head;

  while (currPosition < position - 1) {
    node = node.next;
    currPosition++;
  }

  let temp = node.next;
  newNode.next = temp;
  node.next = newNode;

  return head;

}