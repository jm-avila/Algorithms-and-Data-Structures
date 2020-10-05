class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = setParentIndex(index);

    while (
      this.values[index] &&
      this.values[parentIndex] &&
      this.values[index].priority < this.values[parentIndex].priority
    ) {
      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
      parentIndex = setParentIndex(index);
    }

    function setParentIndex(i) {
      return Math.floor((i - 1) / 2);
    }
  }

  dequeue() {
    const minValue = this.values[0];
    const lastValue = this.values.pop();
    if (this.values.length) {
      this.values[0] = lastValue;
      this.bubbleDown();
    }
    return minValue;
  }

  bubbleDown() {
    let i = 0;
    const l = this.values.length,
      element = this.values[i];

    while (true) {
      let leftChildIndex = i * 2 + 1,
        rightChildIndex = i * 2 + 2,
        leftChild,
        rightChild,
        swap = null;

      if (leftChildIndex < l) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < l) {
        rightChild = this.values[rightChildIndex];
        if (
          rightChild.priority < element.priority &&
          rightChild.priority < leftChild.priority
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[i] = this.values[swap];
      this.values[swap] = element;
      i = swap;
    }
  }
}

const queue = new PriorityQueue();

queue.enqueue("Broken Leg", 2);
queue.enqueue("Broken Arm", 2);
queue.enqueue("Flu", 5);
queue.enqueue("Bleeding", 0);
queue.enqueue("Back Pain", 6);

queue.dequeue();

console.log(queue.values);
