// Linked List Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }

    return ++this.size;
  }

  remove() {
    if (!this.size) return null;

    const removedNode = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return removedNode;
  }
}

const stack = new Stack();

stack.add("Hello");
stack.add("Bye");
stack.remove();
stack.remove();
stack.add("Bye");
stack.remove();

console.log(stack);
