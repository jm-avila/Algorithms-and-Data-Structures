# Problem Solving Approach

## **How do you improve?**

### **1. Devise a plan for solving problems**

#### **Understand the Problem**

Before trying to solve it, understand it.

Ask youself these questions:

- Can I restate the problem in my own words?
- What are the inputs?
- What are the outputs that should come from the solution?
- Can the outputs be determined from the inputs? Do I have enough information to solve the problem?
- How should I label the important pieces of data? What matters?

#### **Concrete example**

Come up with concrete examples, to help you understand the problem better and help check that the eventual solution works properly.

- Simple examples (happy path)
- Complex examples (edge cases)
- Empty inputs examples
- Invalid inputs examples

#### **Break it down**

Explicitly write down the steps you need to take.

This will help you:

- Think about the code you'll write before you write it.
- Catch conceptual issues or misunderstandings.

#### **Solve or Simplify**

Solve the problem, if you can't, find the core difficulty and temporarily ignore it. Write a simplified solution and then incorporate the difficulty and reiterate.

#### **Refactor**

Refactoring questions:

- Can you check the result?
- Can you derive the result differently?
- Is the implementation easily understood?
- Can you improve the perfomance?
- Have others solved the problem before?
- Can you use the implementation for another problem?

### **2. Common problem solving patterns**

#### **Frequency Counter**

Using objects or sets to collect values or frequencies of values.

This can often avoid nested loops or O(n^2) operations withs arrays and strings.

#### **Multiple Pointers**

Creating pointers or values that correspond to an index or position and then move towards the beginning, end or middle, based on a certain condition.

Very efficient for solving problems with minimal space complexity.

#### **Sliding Window**

Creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window will increase or decrease and a new window created.

Usefull for keeping track of a subset of data in an array/string.

#### **Divide and Conquer**

Dividing a data set into smaller chunks and then repeating a process with a subtset of data.

Usefull to decrease time complexity.

### **3. Recursion**

#### **What is recursion?**

A process that calls itself.

#### **How do recursive functions work?**

Define a named function that calls itself with a different input on each call, until it reaches the base case.

#### **Base Case**

The condition that ends the recursion.

#### **Recursive function essentials**

- Base Case
- Different Input
- Returning values from a function to another to get data from each function call.
- Pure recursion: avoid mutating inputs, opt for making copies.
- Helper method recursion: use the external scope to mutate elements withoud having to return from each call.

# Algorithms

## **1. Searching Algorithms**

### **What is a search algorithm?**

An algorithm used to retrieve information stored within some data structure either with discrete or continuous values.

### **Common JS array search methods**

- indexOf
- includes
- find
- findIndex

### **Linear Search**

Given an array and a value. Loop through the array and check if the current array element is equal to the value. Basically it's looking element by element until you find the value.

- Appropriate for unordered lists.
- On average has a Big O of O(n).

### **Binary Search**

Given a sorted array and a value, rather than looping in a order fashion, we start form the middle of the array and evaluate whether the value is at the right or left of the current position. We then do the same with the subset of data where the value would be, given the sort order.

- Appropriate for ordered lists.
- On average has a Big O of O(log n).

## **2. Sort Algorithms**

### **What is sorting?**

The process of rearranging the items in a collection so the items are in some kind of order.

### **JS sort built-in method**

[].sort()

The method accepts an optional comparator function, that looks at pairs of elements and determines their sort order based on the return value.
example:

```javascript
[1, 2, 10, 20].sort((a, b) => a - b);
```

If the return value is:

- a negative number, a should come before b.
- a positive number, a should come after b.
- 0, a and b are the same as far as the sort is concerned.

### **Sorting Algorithms Animations**

Animations that illustrate how effectively data sets from different starting points can be sorted using different algorithms. See the [website](https://www.toptal.com/developers/sorting-algorithms).

### **Basic Sorting Algorithms**

- Bubble Sort
- Selection Sort
- Insertion Sort

### **Bubble Sort**

A sorting algorithm where the largest values bubble up to the top!

### **Selection Sort**

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

### **Insertion Sort**

Builds up the sort by gradually creating a larger left half which is always sorted.

### **Shortcomings of Basic Sorting Algorithms**

    - Don't scale well
    - As the input size increases, the time it takes to sort the values increases proportionally.

### **Intermediate Sorting Algorithms**

- Merge Sort
- Quick Sort
- Radix Sort

### **Why use these Algorithms?**

- Faster Sorts
- With respect with the basic ones, improves time complexity from O(n^2) to O(n log n).

### **Merge Sort**

It's a combination of splitting, merging and sorting. Exploits the fact that arrays of 0 or 1 element are always sorted.

Spit:
Split an array into smaller arrays of 0 or 1 elements.

Merge:

Given two arrays which are sorted, create a new array which is also sorted and consists of all the elements in the two input arrays.

The merge should run on O(n + m) time and space, and should not modify the inputs.

Sort:

Compare the elements in both array and order them until any of the two arrays has no elements. If any of the arrays has more elements than can be compared, those elements are already sorted.

### **Quick Sort**

Is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

### **Radix Sort**

Is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix. For elements with more than one significant digit, this bucketing process is repeated for each digit, while preserving the ordering of the prior step, until all digits have been considered.

It exploits the fact that information about the size of a number is encoded in the number of digits. More digits means a bigger number.

All type of data can be sorted this way, but it will first need be converted to numbers.

## **3. Dynamic Programming**

### **What is Dynamic Programming?**

A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

It only works on problems with:

- Overlapping subproblems
- Optimal substructure

**Overlapping subproblems**
A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times.

**Optimal substructure**
A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

# **Data Structures**

## **What is a data structure?**

Is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

## **Common Data structure**

- Singly Linked Lists
- Doubly Linked Lists
- Stacks
- Queues
- Binary Search Trees
- Binary Heaps
- Hash Heaps
- Hash Tables
- Graphs

## **Why so many?**

Different data structures excel at different things.

## **ES2015 Classes**

A class is a blueprint for creating objects with pre-define properties and methods.

example:

```
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
}

const tyler = new Student("Tyler", "Durden");
```

The method to create new objects **_must_** be called constructor.

## **Linked List**

A data structure that contains the following properties:

- head
- tail
- length

Linked lists consist of nodes, and each node has a value and a pointer to another node or null. Are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.

It is the foundation for other data structures like Stacks and Queues.

example:

```
4 => 6 => 8 => 2
```

head = 4
tail = 2
length = 4

### **Comparison with Arrays**

Lists:

- Do not have indexes.
- Connected via nodes with a next pointer.
- Random access is not allowed.

Arrays:

- Indexed in order.
- Insetion and deletion can be expensive.
- Can quicky be accessed at a specific index.

### **Big O of Singly Linked Lists**

- Insertion = O(1)
- Removal = O(1) or O(N)
- Searching = O(N)
- Access = O(N)

## **Doubly Linked Lists**

It's almost identical to Singly Linked Lists, except every node has an additional pointer to the previous nodes. The extra pointer makes them better for finding nodes and can be done in half of the time compared to Singly Linked Lists, but requires more memory.

### **Big O of Doubly Linked Lists**

- Insertion = O(1)
- Removal = O(1)
- Searching = O(N)
- Access = O(N)

## **Stacks**

A stack is an abstract concept, it's a collection of data that follows a LIFO (Last In, First Out) structure. The last element added to the stack will be the first element removed from the stack. There is more than one way of implementing a stack.

### **Common Stacks Usage**

- Managing function invocations.
- Undo/Redo functionality.
- Routing (the history object) is treated like a stack.

### **Big O of Stacks**

- Insertion = O(1)
- Removal = O(1)
- Searching = O(N)
- Access = O(N)

## **Queues**

Is a collection of data that follows a FIFO (First In, First Out) structure. The first element added to the queue will be the first element removed from the queue. There is more than one way of implementing a queue, and are foundational for more complex data structures.

### **Common Queues Usage**

- Background tasks
- Uploading resources
- Printing
- Task processing

### **Big O of Queues**

- Insertion = O(1)
- Removal = O(1)
- Searching = O(N)
- Access = O(N)

## **Binary Search Trees**

### **What is a tree?**

A data structure that consists of nodes in a parent/child relationship. Sibbling nodes can't be connected.

                    Root
        child                   child
    child   child          child     child

### **Tree Terminology**

- Root: The top node in a tree.
- Child: A node directly connected to another node when moving away from the Root.
- Parent: The converse notion of a child.
- Siblings: A group of nodes with the same parent.
- Edge: The connection between one node and another.

### **Trees vs Lists**

- List are linear, they a are a sequence of items.
- Trees are nonlinear, they can branch and have more than one pathway.

### **Common Tree Usage**

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems
- Computer File Systems

### **What is Binary Tree?**

Binary Tree is a hierarchical data structure in which each node has zero, one, or at the most, two children. Each node contains a “left” pointer, a “right” pointer, and a data element. The “root” pointer represents the topmost node in the tree. Anything which has two children and one parent node is a binary tree.

### **What is Binary Search Tree?**

A Binary Search Tree is a type of binary tree data structure in which the nodes are arranged in order, hence also called as “ordered binary tree”. It’s a node-based data structure which provides an efficient and fast way of sorting, retrieving, searching data. For each node, the elements in the left subtree must be less than or equal to the key in its parent node (L < P), and the elements in the right subtree must be greater than or equal to the key in its parent node (R > P). There should be no duplicate keys. In simple terms, it’s a special kind of binary tree data structure that efficiently stores and manages items in memory.

### **Differences between Binary Trees, and Binary Search Tress**

Difference Between Binary Tree and Binary Search Tree:

- Definition: A Binary Search Tree is an ordered binary tree in which there is a relative order to how the nodes should be organized.
- Structure: Binary search tree is a type of binary tree in which all the nodes in the left subtree are less than or equal to the value of the root node and that of the right subtree are greater than or equal to the value of the root node.
- Operation: Binary search trees keep their keys sorted that allows for fast and efficient lookup, insertion, and deletion of items

In esence a Binary Tree follows one simple rule that each parent node has no more than two child nodes, whereas a Binary Search Tree is just a variant of the binary tree which follows a relative order to how the nodes should be organized in a tree.

More at: [Difference between Binary Tree and Binary Search Tree](http://www.differencebetween.net/technology/difference-between-binary-tree-and-binary-search-tree/#ixzz6ZdIWSlvG)

### **Operations on Binary Search Trees**

It supports three main operations:

- Searching
- Insertion
- Deletion

Binary Search Tree allows for fast retrieval of elements stored in the tree as each node key is thoroughly compared with the root node, which discards half of the tree.

### **Big O of Binary Search Trees**

- Insertion = O(log N)
- Searching = O(log N)

NOT guaranteed, if all values are greater or less than each their parents you would end with a completely one sided tree which means it will take linear time, O(N).

### **Tree Traversal**

Unlike linear data structures (Array, Linked List, Queues, Stacks, etc) which have only one logical way to traverse them, trees can be traversed in different ways.

### **Common ways for traversing trees:**

- Breadth First Traversal or BFS: Horizontally or by levels.
- Depth First Traversals or DFS: Vertically or by branches.
  (a) Inorder (Left, Root, Right)
  (b) Preorder (Root, Left, Right)
  (c) Postorder (Left, Right, Root)

### **When to use BFS and DFS?**

Depends on the tree structure. The time complexity in both cases is the same, but the space complexity do vary.

For deep and narrow tress the BFS is best because the queue will keeps track of fewer nodes.

For wide and shallow trees DFS is best becasuse the approach only keeps track one branch at a time.

When choosing DFS Pre, In or Post order the correct approach depends on how will you use the output since the diferences is at it's order.

If you want the output to be sorted, the in order approach is best.

If you need to reconstruct or copie the tree the order of the output makes it very easy when using the pre order approach.

## **Binary Heaps**

### **What are Heaps?**

Is a specialized tree-based data structure that satisfies the heap property:

- In a max heap, parent nodes are always larger than child nodes.

- In a min heap, parent nodes are always smaller than child nodes.

In a heap, the highest (or lowest) value element is always stored at the root. It is a useful when it is necessary to repeatedly remove the object with the highest (or lowest) value.

### **What are Binary Heaps?**

Is a heap that takes the form of a binary tree with two additional constraints:

- Shape property: All levels of the tree, except possibly the last one are fully filled, and, if the last level of the tree is not complete, the nodes of that level are filled from left to right.
- Heap property: the key stored in each node is either greater than or equal to or less than or equal to the keys in the node's children, according to some total order.

### **Common Binary Heaps Usage**

- To implement Priority Queues.
- For Graph traversal algorithms.

### **What is a Priority Queue?**

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities. It's an abstract concept that can be implemented in many ways.

### **Big O of Binary Heaps**

- Insertion = O(log N)
- Removal = O(log N)
- Searching = O(N)

## **Hash Table**

## **What is a Hash Table?**

A data structure that implements a structure that can map keys to values. A hash table uses a hash function to convert keys into valid array indices, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

- Stores key-value pairs.
- Keys are not ordered.
- Fast for finding, adding and removing values.

Hash tables are implemented in most programming languages.

- Python has Dictionaries.
- JS has Object and Maps.
- Java, Go and Scala have Maps.
- Ruby has Hashes.

### **What makes a good hash?**

- Fast (constant time)
- Doesn't cluster outputs at specific indices, but distributes uniformly.
- Deterministic (same input yields the same output)

### **Prime numbers**

Hash functions take advantage of primer numbers properties to spread keys more uniformly. It's also helpful if the array in which values are placed has a prime length.

### **Collisions**

Even with a large array and a greate hash function, collisions are inevitable. There are many strategies for dealing with collisions, but we'll focus on two:

- Separate Chaining
- Linear Probing

#### **Separate Chaining**

With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list.)

This allows us to store multiple key-value pairs at the same index.

#### **Linear Probing**

With linear probing, when we find a collision, we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value at each index.

### **Big O of Hash Tables**

- Insertion = O(1)
- Removal = O(1)
- Access = O(1)

## **Graphs**

### **What are Graphs?**

A graph data structure consists of a finite (and possibly mutable) set of vertices, together with a set of unordered pairs of these nodes for an undirected graph or a set of ordered pairs for a directed graph.

Basically it's a collection of nodes and connections.

### **Common Graphs Usage**

- Social Network
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- Recommendation Engines

### **Graphs Terminology**

- Vertex: a node,
- Edge: connection between nodes.
- Weighted/Unweighted: Values assigned to edges.
- Directed/Undirected: Directions assigned to edges.

### **Approaches to Graphs Implementation**

- Adjacency List
- Adjacency Matrix

### **Differences Between Approaches**

|V| - number of vertices
|E| - number of edges

**Big O for Operations of Adjacency List**

- Add Vertex: O(1)
- Add Edge: O(1)
- Remove Vertex: O(|V| + |E|)
- Remove Edge: O(|E|)
- Query: O(|V| + |E|)
- Storage: O(|V| + |E|)

- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge

**Big O for Operations of Adjacency Matrix**

- Add Vertex: O(|V^2|)
- Add Edge: O(1)
- Remove Vertex: O(|V^2|)
- Remove Edge: O(1)
- Query: O(1)
- Storage: O(|V^2|)

- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

**\*Note:** Most data in the real-world tends to lend itself to sparser and/or larger graphs.

### **Graph Traversal**

Visiting, Updating, Checking each vertex in a graph.

A graph has no starting point. For every vertice in a graph there is no gurante theres only one way to reach it.

### **Common Graph Traversal Usage**

- Peer to peer networking
- Web Crawlers
- Finding closest matches:
  - Recommendations
- Shortest path problems:
  - GPS Navigation
  - Solving Mazes
  - AI (Shortest path to win the game)

### **Graph Traversal Approaches**

- Depth First: Explore as far as possible all vertice neighbours before "backtracking".

- Breadth First: Explore all vertice neighbours at current detph first.

### **Dijkstra's Algorithm**

**What is the Dijkstra's Algorithm?**

It's one of the most famous and widely used algorithms. It finds the shortest path between two vertices on a graph.

**Common Dijkstra's Algorithm Usage**

- GPS: Finding the fastest route.
- Network Routing: Finds the open shortest path for data.
- Biology: Used to model the spread of viruses among humans.
- Airline Tickets: Finding the cheapest route to your destination.
