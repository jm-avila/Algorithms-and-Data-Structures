const PriorityQueue = require("../binary-heap/priority-queue");

class GraphNode {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  removeVertex(v1) {
    Object.keys(this.adjacencyList).forEach((v) => this.removeEdge(v1, v));
    delete this.adjacencyList[v1];
  }

  addEdge(v1, v2, weight) {
    const v1Node = new GraphNode(v1, weight);
    const v2Node = new GraphNode(v2, weight);
    this.adjacencyList[v1].push(v2Node);
    this.adjacencyList[v2].push(v1Node);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      ({ vertex }) => vertex !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      ({ vertex }) => vertex !== v1
    );
  }

  dijkstra(start, finish) {
    const vertexList = Object.keys(this.adjacencyList),
      queue = new PriorityQueue(),
      distances = {},
      previous = {};

    vertexList.forEach((v) => {
      if (v === start) {
        distances[v] = 0;
        queue.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        queue.enqueue(v, Infinity);
      }
      previous[v] = null;
    });

    let path = [],
      smallest;

    while (queue.values.length) {
      smallest = queue.dequeue().value;

      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (distances[smallest] !== Infinity)
        this.adjacencyList[smallest].forEach(({ vertex, weight }) => {
          const candidate = distances[smallest] + weight;
          if (candidate < distances[vertex]) {
            distances[vertex] = candidate;
            previous[vertex] = smallest;
            queue.enqueue(vertex, candidate);
          }
        });
    }

    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const shortestPath = graph.dijkstra("A", "E");
console.log(shortestPath);
