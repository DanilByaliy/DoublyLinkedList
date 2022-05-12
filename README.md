# DoublyLinkedList
---

## Description

The application demonstrates working with a typed linked list according to an option. A linked list is a data structure that consists of interconnected nodes.

The class implements a list, the elements of which will be letters (Character). The list class supports the following methods:
- length() - method of determining the length of the list
- append() - method of adding an element to the end of the list
- insert() - method of inserting an element at any position in the list
- delete() - method of removing an item from the list at the specified position
- deleteAll() - method of removing items from the list by value
- get() - method of obtaining a list item at any position
- clone() - list copy method
- reverse() - list rotation method
- findFirst() - method of searching for an item by value from the list header
- findLast() - method of searching for an element by value from the tail of the list
- clear() - list clearing method
- extend() - list extension method

## Calculation of the variant number and description of the variant

The variant is determined by the remainder of the division of the record book number by 2:
7% 2 = 1 (remainder = 1: double-linked list)

In a double-linked list, each node contains data and links to the next and previous items.

## Instructions on how to assemble a project and run tests

1. Clone the repo:

   ```sh
   git clone https://github.com/DanilByaliy/DoublyLinkedList.git
   ```
2. Open project directory and install NPM packages:

   ```sh
   cd DoublyLinkedList
   npm install
   ```

3. To run tests:

   ```sh
   npm test
   ```

## Link to the commit where the CI tests failed

[This commit](https://github.com/DanilByaliy/DoublyLinkedList/commit/dd6bc59fcfd4be4bfbfe1dc0b99f92bfc74531fd)