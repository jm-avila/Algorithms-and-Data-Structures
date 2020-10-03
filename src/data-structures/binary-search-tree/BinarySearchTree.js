class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) return;

      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }

      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }

    return this.root;
  }

  find(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        break;
      }
    }

    return currentNode;
  }
};

// const tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(5);
// tree.insert(13);
// tree.insert(11);
// tree.insert(2);
// tree.insert(16);
// tree.insert(7);

// console.log(JSON.stringify(tree));

// console.log(tree.find(10));
// console.log(tree.find(5));
// console.log(tree.find(13));
// console.log(tree.find(11));
// console.log(tree.find(2));
// console.log(tree.find(16));
// console.log(tree.find(7));

// console.log(tree.find(8));
