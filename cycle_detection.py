
def has_cycle(head):
  
  if head is None:
    return False
  else:
    node = head
    fast_node = head

    while fast_node is not None and fast_node.next is not None:
      node = node.next
      fast_node = fast_node.next.next
      if node == fast_node:
        return True
    
    return False