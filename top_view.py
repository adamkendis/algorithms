
def topView(root):
    if root is None:
        return root

    node_positions = {}
    node_queue = [(root, 0)]

    while len(node_queue):
        node, position = node_queue.pop(0)

        if position not in node_positions.keys():
            node_positions[position] = node
        if node.left:
            node_queue.append((node.left, position-1))
        if node.right:
            node_queue.append((node.right, position+1))
    
    for key in sorted(node_positions.keys()):
        print(node_positions[key], end=' ')