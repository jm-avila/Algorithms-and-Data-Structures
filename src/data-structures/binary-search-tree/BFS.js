const BinarySearchTree = require("./BinarySearchTree");

class BFSBinarySearchTree extends BinarySearchTree {
  constructor() {
    super();
  }

  BFS() {
    let node = this.root;
    const queue = [],
      data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      console.log(node);
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
}

const tree = new BFSBinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS());
