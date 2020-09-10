# Problem Solving Approach

## How do you improve?

### 1. Devise a plan for solving problems

#### Understand the Problem

Before trying to solve it, understand it.

Ask youself these questions:

- Can I restate the problem in my own words?
- What are the inputs?
- What are the outputs that should come from the solution?
- Can the outputs be determined from the inputs? Do I have enough information to solve the problem?
- How should I label the important pieces of data? What matters?

#### Concrete example

Come up with concrete examples, to help you understand the problem better and help check that the eventual solution works properly.

- Simple examples (happy path)
- Complex examples (edge cases)
- Empty inputs examples
- Invalid inputs examples

#### Break it down

Explicitly write down the steps you need to take.

This will help you:

- Think about the code you'll write before you write it.
- Catch conceptual issues or misunderstandings.

#### Solve or Simplify

Solve the problem, if you can't, find the core difficulty and temporarily ignore it. Write a simplified solution and then incorporate the difficulty and reiterate.

#### Refactor

Refactoring questions:

- Can you check the result?
- Can you derive the result differently?
- Is the implementation easily understood?
- Can you improve the perfomance?
- Have others solved the problem before?
- Can you use the implementation for another problem?

### 2. Common problem solving patterns

#### Frequency Counter

Using objects or sets to collect values or frequencies of values.

This can often avoid nested loops or O(n^2) operations withs arrays and strings.

#### Multiple Pointers

Creating pointers or values that correspond to an index or position and then move towards the beginning, end or middle, based on a certain condition.

Very efficient for solving problems with minimal space complexity.

#### Sliding Window

Creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window will increase or decrease and a new window created.

Usefull for keeping track of a subset of data in an array/string.

#### Divide and Conquer

Dividing a data set into smaller chunks and then repeating a process with a subtset of data.

Usefull to decrease time complexity.

### 3. Recursion

#### What is recursion?

A process that calls itself.

#### How do recursive functions work?

Define a named function that calls itself with a different input on each call, until it reaches the base case.

#### Base Case

The condition that ends the recursion.

#### Recursive function essentials

- Base Case
- Different Input
- Returning values from a function to another to get data from each function call.
- Pure recursion: avoid mutating inputs, opt for making copies.
- Helper method recursion: use the external scope to mutate elements withoud having to return from each call.

### 4. Searching Algorithms

#### What is a search algorithm?

An algorithm used to retrieve information stored within some data structure either with discrete or continuous values.

#### Common JS array search methods

- indexOf
- includes
- find
- findIndex

#### Linear Search

Given an array and a value. Loop through the array and check if the current array element is equal to the value. Basically it's looking element by element until you find the value.

- Appropriate for unordered lists.
- On average has a Big O of O(n).

#### Binary Search

Given a sorted array and a value, rather than looping in a order fashion, we start form the middle of the array and evaluate whether the value is at the right or left of the current position. We then do the same with the subset of data where the value would be, given the sort order.

- Appropriate for ordered lists.
- On average has a Big O of O(log n).

### 5. Sort Algorithms
