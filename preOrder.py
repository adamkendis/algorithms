def preOrder(root):
    if root == None:
        return root
    print(root.info, end=' ')
    preOrder(root.left)
    preOrder(root.right)