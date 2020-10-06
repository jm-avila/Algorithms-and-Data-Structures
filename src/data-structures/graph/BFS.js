const UndirectedGraph = require("./undirected-graph");

class BSFUndirectedGraph extends UndirectedGraph {
  constructor() {
    super();
  }

  BFSIterative(vertex) {
    const queue = [vertex],
      result = [],
      visited = {};
    let v;

    while (queue.length) {
      v = queue.pop();
      if (!visited[v]) {
        result.push(v);
        visited[v] = true;
        this.adjacencyList[v].forEach((n) => queue.unshift(n));
      }
    }

    return result;
  }
}

const graph = new BSFUndirectedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("BFSIterative", graph.BFSIterative("A"));
