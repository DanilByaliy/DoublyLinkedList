class Node {
  constructor(value, prev) {
    if (typeof value !== 'string' || value.length > 1) {
      throw new Error('Invalid value');
    } 

    return { 
      value: valuee, 
      prev: prev, 
      next: null };
  }
}

class List {
  constructor() {
    this.head = null; //first elem
    this.tail = null;
  }

  length() {
    let counter = 0;
    let current = this.head;
    while (current !== null) {
      counter += 1;
      current = current.next;
    }
    return counter;
  }

  append(value) {
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
        throw new Error('Invalid number');
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
        throw new Error('Invalid number');
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

    if (number < 0) {
      throw new Error('Invalid number');
    }
    
    while (counter !== number) {
      if (current === null) {
        throw new Error('Invalid number');
      }
      counter += 1;
      current = current.next;
    };

    if (current !== null) return current.value;
    throw new Error('Invalid number');
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

  findFirst(value) {
    let counter = 0;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return counter;
      }
      counter += 1;
      current = current.next;
    }
    return -1;
  }

  findLast(value) {
    let counter = 0;
    let current = this.head;
    let temp = -1;
    while (current !== null) {
      if (current.value === value) {
        temp = counter;
      }
      counter += 1;
      current = current.next;
    }
    return temp;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  extend(list) {
    let current = list.head;

    while (current !== null) {
      this.append(current.value);
      current = current.next;    
    }
  }
}

module.exports = List;

// Usage

// let list = new List;

// list.append('1');
// console.log('lenght1: ' + list.lengthFromHead());
// console.log('------------');
// console.log(list.delete(0));
// console.log('------------');
// console.log('lenght1: ' + list.lengthFromHead());
// console.log('------------');
// list.append('3');
// list.append('4');
// list.insert('2', 1);
// list.insert('0', 0);
// // list.insert('5', 5)
// console.log('lenght1: ' + list.lengthFromHead());
// console.log('------------');
// console.log(list.delete(0));
// console.log('------------');
// console.log('lenght1: ' + list.lengthFromHead());
// console.log('lenght2: ' + list.lengthFromTail());
// list.append('-5');
