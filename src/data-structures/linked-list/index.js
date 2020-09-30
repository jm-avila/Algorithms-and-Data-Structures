// A node is a piece of data with a value (val) and a reference to the next node (next).

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = this.head;
    }

    return current;
  }

  shift() {
    if (!this.length) return;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) foundNode.val = val;

    return !!foundNode;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(val);

    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;

    prevNode.next = removedNode.next;

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
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();

list.push("une");
list.push("one");
list.push("two");
list.push("unknown");
list.push("five");
list.push("six");
console.log("PUSH", JSON.stringify(list.head));

list.pop("six");
console.log("POP", JSON.stringify(list.head));

list.shift();
console.log("SHIFT", JSON.stringify(list.head));

list.unshift("zero");
console.log("UNSHIFT", JSON.stringify(list.head));

console.log("GET", JSON.stringify(list.get(2)));

list.set(3, "three");
console.log("SET", JSON.stringify(list.head));

list.insert(4, "four");
console.log("INSERT", JSON.stringify(list.head));

list.insert(4, "error");
list.remove(4);
console.log("REMOVE", JSON.stringify(list.head));

list.reverse();
console.log("REVERSE", JSON.stringify(list.head));
