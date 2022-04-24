class Node {
  constructor(value, prev) {
    return { 
      value: value, 
      prev: prev, 
      next: null };
  }
}

class List {
  constructor() {
    this.head = null; //first elem
    this.tail = null;
  }

  lengthFromTail() {
    let counter = 0;
    let current = this.tail;
    while (current !== null) {
      counter += 1;
      current = current.prev;
    }
    return counter;
  }

  lengthFromHead() {
    let counter = 0;
    let current = this.head;
    while (current !== null) {
      counter += 1;
      current = current.next;
    }
    return counter;
  }

  append(value) {
    if (typeof value !== 'string') {
      console.log(new Error('Invalid value'));
      return;
    } 

    const penultimate = this.tail;
    this.tail = new Node(value, penultimate);
    if (this.head === null) {
      this.head = this.tail;
      return;
    }
    penultimate.next = this.tail;
  }

  insert(value, number) {
    let counter = 0;
    let current = this.head;

    while (counter !== number) {
      if (current === null || number < 0) {
        console.log('Invalid number');
        return;
      }
      counter += 1;
      current = current.next;
    };

    if (current === null) {
      this.append(value);
      return;
    }

    const next = current;
    const prev = current?.prev;

    next.prev = current = new Node(value, prev);

    if (number === 0) this.head = current;
    else prev.next = current;

    current.next = next;
  }
}

// Usage

let list = new List;

list.append('0');
list.append('1');
list.append('2');
list.insert('0.5', 1);
list.insert('-1', 0);
console.log('lenght1: ' + list.lengthFromHead());
console.log('lenght2: ' + list.lengthFromTail());