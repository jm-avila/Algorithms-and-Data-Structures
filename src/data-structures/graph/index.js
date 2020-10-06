class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    this.adjacencyList[name] = [];
  }

  removeVertex(v1) {
    Object.keys(this.adjacencyList).forEach((v) => this.removeEdge(v1, v));
    delete this.adjacencyList[v1];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
}

const graph = new UndirectedGraph();

graph.addVertex("Tokyo");
graph.addVertex("London");
graph.addVertex("Paris");

graph.addEdge("Tokyo", "London");
graph.addEdge("Paris", "London");

graph.removeEdge("Tokyo", "London");

graph.addVertex("Asdas");
graph.addEdge("Asdas", "London");
graph.addEdge("Asdas", "Paris");
graph.addEdge("Asdas", "Tokyo");
graph.removeVertex("Asdas");

console.log(graph.adjacencyList);
