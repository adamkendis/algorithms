
def topView(root):
    dict = {}
    
    def traverseTree(node, level):
        if level not in dict:
            dict[level] = node.info
        if node.left is not None:
            traverseTree(node.left, level-1)
        if node.right is not None:
            traverseTree(node.right, level+1)
    
    traverseTree(root, 0)

    visible_nodes = [dict[key] for key in sorted(dict.keys())]
    print(' '.join(map(str, visible_nodes)))