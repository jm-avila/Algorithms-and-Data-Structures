const BinarySearchTree = require("./BinarySearchTree");

class DFSBinarySearchTree extends BinarySearchTree {
  constructor() {
    super();
  }

  DFSPreOrder() {
    const data = [];
    traverse(this.root);
    return data;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
  }

  DFSInOrder() {
    const data = [];
    traverse(this.root);
    return data;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
  }

  DFSPostOrder() {
    const data = [];
    traverse(this.root);
    return data;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
  }
}

const tree = new DFSBinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//console.log(tree.DFSPreOrder());
//console.log(tree.DFSInOrder());
//console.log(tree.DFSPostOrder());
