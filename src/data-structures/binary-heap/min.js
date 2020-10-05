class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = setParentIndex(index);
    while (this.values[index] < this.values[parentIndex]) {
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

  removeMin() {
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
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < l) {
        rightChild = this.values[rightChildIndex];
        if (rightChild < element && rightChild < leftChild) {
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

const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.removeMin());

console.log(heap.values);
