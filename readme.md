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

### 2. Master common problem solving patterns

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

#### Dynamic Programming

#### Greedy Algorithms

#### Backtracking
