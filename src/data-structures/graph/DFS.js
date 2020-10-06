const UndirectedGraph = require("./undirected-graph");

class DSFUndirectedGraph extends UndirectedGraph {
  constructor() {
    super();
  }

  DFSRecursive(vertex) {
    const result = [],
      visited = {},
      adjacencyList = this.adjacencyList;
    DFS(vertex);
    return result;

    function DFS(v) {
      visited[v] = true;
      result.push(v);

      adjacencyList[v].forEach((n) => !visited[n] && DFS(n));
    }
  }

  DFSIterative(vertex) {
    const stack = [vertex],
      result = [],
      visited = {};
    let v;

    while (stack.length) {
      v = stack.pop();
      if (!visited[v]) {
        result.push(v);
        visited[v] = true;
        this.adjacencyList[v].forEach((n) => stack.push(n));
      }
    }

    return result;
  }
}

const graph = new DSFUndirectedGraph();

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

console.log("DFSRecursive", graph.DFSRecursive("A"));
console.log("DFSIterative", graph.DFSIterative("A"));
