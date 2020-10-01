// Array Implementation

class Stack {
  constructor() {
    this.stack = [];
  }

  add(item) {
    this.stack.push(item);
    return this.stack;
  }

  remove() {
    return this.stack.pop();
  }

  get() {
    return this.stack;
  }
}
const stack = new Stack();

stack.add("a");
stack.add("b");
stack.add("c");

stack.remove();

console.log(stack.get());
