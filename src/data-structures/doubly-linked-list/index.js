class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.length) return;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }

    poppedNode.prev = null;

    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.length) return;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    const middleIndex = this.length / 2;
    let currentNode, count;

    if (index <= middleIndex) {
      count = 0;
      currentNode = this.head;

      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;

      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }

    return currentNode;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) foundNode.val = val;

    return !!foundNode;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift();

    if (index === this.length) return !!this.shift();

    const newNode = new Node(val);
    const foundNode = this.get(index);

    newNode.prev = foundNode.prev;
    newNode.next = foundNode;
    foundNode.prev.next = newNode;
    foundNode.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.prev = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new DoublyLinkedList();

list.push("une");
list.push("one");
list.push("two");
list.push("three");

list.pop();
list.shift();
list.unshift("zero");
list.push("three");

list.insert(2, "Hello");

list.remove(2);

list.reverse();

console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);
console.log(list.head.next.next.next);
console.log(list.head.next.next.next.next);

console.log(list.tail);
console.log(list.tail.prev);
console.log(list.tail.prev.prev);
console.log(list.tail.prev.prev.prev);
console.log(list.tail.prev.prev.prev.prev);
