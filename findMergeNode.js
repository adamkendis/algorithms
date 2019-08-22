
function findMergeNode(headA, headB) {
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    if (!nodeA.next) {
      nodeA = headB;
    } else {
      nodeA = nodeA.next;
    }

    if (!nodeB.next) {
      nodeB = headA;
    } else {
      nodeB = nodeB.next;
    }
  }

  return nodeA.data;
}