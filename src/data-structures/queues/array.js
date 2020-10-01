// Array Implementation

class Queue {
  constructor() {
    this.queue = [];
  }

  add(item) {
    this.queue.unshift(item);
    return this.queue;
  }

  remove() {
    return this.queue.pop();
  }

  get() {
    return this.queue;
  }
}
const queue = new Queue();

queue.add("a");
queue.add("b");
queue.add("c");

queue.remove();

console.log(queue.get());
