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
      console.log(current.value);
      counter += 1;
      current = current.prev;
    }
    return counter;
  }

  lengthFromHead() {
    let counter = 0;
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
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

  delete(number) {
    let counter = 0;
    let current = this.head;

    while (counter !== number) {
      counter += 1;
      current = current.next;
      if (current === null || number < 0) {
        console.log('Invalid number');
        return;
      }
    };

    if (current.next === null && counter === 0) {
      this.head = this.tail = null;
      return current.value;
    }

    const next = current.next;
    const prev = current.prev;

    if (next) next.prev = prev;
    else {
      prev.next = null;
      this.tail = prev;
    }

    if (prev) prev.next = next;
    else {
      next.prev = null;
      this.head = next;
    }

    return current.value;
  }

  deleteAll(value) {
    let counter = 0;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        this.delete(counter);
        counter -= 1;
      }
      counter += 1;
      current = current.next;
    }
  }

  get(number) {
    let counter = 0;
    let current = this.head;

    while (counter !== number) {
      counter += 1;
      current = current.next;
      if (current === null || number < 0) {
        console.log('Invalid number');
        return;
      }
    };

    return current.value;
  }

  clone() {
    const newList = new List;
    let current = this.head;

    while (current !== null) {
      newList.append(current.value);
      current = current.next;    
    }
    return newList;
  }

  reverse() {
    const reverseList = new List;
    let current = this.tail;

    while (current !== null) {
      reverseList.append(current.value);
      current = current.prev;    
    }
    this.head = reverseList.head;
    this.tail = reverseList.tail;
  }
}

// Usage

let list = new List;

list.append('1');
console.log('lenght1: ' + list.lengthFromHead());
console.log('------------');
console.log(list.delete(0));
console.log('------------');
console.log('lenght1: ' + list.lengthFromHead());
console.log('------------');
list.append('3');
list.append('4');
list.insert('2', 1);
list.insert('0', 0);
// list.insert('5', 5)
console.log('lenght1: ' + list.lengthFromHead());
console.log('------------');
console.log(list.delete(0));
console.log('------------');
console.log('lenght1: ' + list.lengthFromHead());
console.log('lenght2: ' + list.lengthFromTail());
list.append('-5');
