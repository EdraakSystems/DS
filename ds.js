class Queue {
    constructor() {
      this.items = [];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      
      return this.items.shift();
    }
  
    size() {
      return this.items.length;
    }
  }
  
  
  
  
  
  class Stack {
    constructor() {
      this.items = [];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    size() {
      return this.items.length;
    }
  }
  
  
  
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  }