class Node {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }
  
  class AVLTree {
    constructor() {
      this.root = null;
    }
  
    insert(key) {
      this.root = this._insert(this.root, key);
    }
  
    _insert(root, key) {
      if (!root) {
        return new Node(key);
      } else if (key < root.key) {
        root.left = this._insert(root.left, key);
      } else {
        root.right = this._insert(root.right, key);
      }
  
      root.height = 1 + Math.max(this._getHeight(root.left), this._getHeight(root.right));
  
      const balance = this._getBalance(root);
  
      // Left-Left Case
      if (balance > 1 && key < root.left.key) {
        return this._rightRotate(root);
      }
  
      // Right-Right Case
      if (balance < -1 && key > root.right.key) {
        return this._leftRotate(root);
      }
  
      // Left-Right Case
      if (balance > 1 && key > root.left.key) {
        root.left = this._leftRotate(root.left);
        return this._rightRotate(root);
      }
  
      // Right-Left Case
      if (balance < -1 && key < root.right.key) {
        root.right = this._rightRotate(root.right);
        return this._leftRotate(root);
      }
  
      return root;
    }
  
    _getHeight(node) {
      if (!node) {
        return 0;
      }
      return node.height;
    }
  
    _getBalance(node) {
      if (!node) {
        return 0;
      }
      return this._getHeight(node.left) - this._getHeight(node.right);
    }
  
    _leftRotate(z) {
      const y = z.right;
      const T2 = y.left;
  
      y.left = z;
      z.right = T2;
  
      z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
      y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));
  
      return y;
    }
  
    _rightRotate(z) {
      const y = z.left;
      const T3 = y.right;
  
      y.right = z;
      z.left = T3;
  
      z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
      y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));
  
      return y;
    }
  
    inorderTraversal() {
      this._inorderTraversal(this.root);
    }
  
    _inorderTraversal(node) {
      if (node) {
        this._inorderTraversal(node.left);
        console.log(node.key);
        this._inorderTraversal(node.right);
      }
    }
  }
  
  // Example usage:
  const avlTree = new AVLTree();
  avlTree.insert(10);
  avlTree.insert(20);
  avlTree.insert(30);
  avlTree.insert(40);
  avlTree.insert(50);
  avlTree.insert(25);
  
  console.log("Inorder traversal of the AVL tree:");
  avlTree.inorderTraversal();
  