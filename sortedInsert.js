
function sortedInsert(head, data) {
  let newNode = new DoublyLinkedListNode(data);
  let node = head;

  while (true) {
    if (node.data > data) {
      //insert at head
      if (!node.prev) {
        newNode.next = node;
        node.prev = newNode;
        head = newNode;
        break;
      } else {
        //insert in mid
        node.prev.next = newNode;
        newNode.prev = node.prev.next;
        newNode.next = node;
        node.prev = newNode;
        break;
      }
    }
    //insert at tail
    if (!node.next) {
      newNode.prev = node;
      node.next = newNode;
      break;
    }
    
    node = node.next

  }

  return head;
}