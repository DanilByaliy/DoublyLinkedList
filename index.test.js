const List = require('./index.js');

let list;

beforeEach(() => {
  list = new List;
  list.append('0');
  list.append('1');
})

describe('Get method', () => {
  test('must be defined and return node values', () => {

    expect(list.get).toBeDefined();
    expect(list.get(0)).toBe('0');
    expect(list.get(1)).toBe('1');  
  })

  test('should generate an exception with a non-existent index', () => {
    list = new List;
    
    expect(() => list.get(-1)).toThrow('Invalid number');
    expect(() => list.get(2)).toThrow('Invalid number');
  })
})


describe('Append method', () => {
  beforeEach(() => {
    list = new List;
  })

  test('must be defined and add items to the empty and non-empty list', () => {
    list.append('0');
    list.append('1');

    expect(list.append).toBeDefined();
    expect(list.get(0)).toBe('0');
    expect(list.get(1)).toBe('1');
  })

  test('must generate an exception with the wrong value', () => {

    expect(() => list.append('22')).toThrow('Invalid value');
    expect(() => list.append(1)).toThrow('Invalid value');
    expect(() => list.append(undefined)).toThrow('Invalid value');
    expect(() => list.append(null)).toThrow('Invalid value');
    expect(() => list.append(true)).toThrow('Invalid value');
    expect(() => list.append(['0'])).toThrow('Invalid value');
    expect(() => list.append({'0': '0'})).toThrow('Invalid value');
  })
})


describe('Length metod', () => {
  beforeEach(() => {
    list = new List;
  })

  test('must be defined and return 0 if the list is empty', () => {

    expect(list.length).toBeDefined();
    expect(list.length()).toBe(0);
  })

  test('should return the length of the list', () => {
    list.append('0');
    list.append('1');

    expect(list.length()).toBe(2);
  })
})


describe('Insert metod', () => {
  test('must be defined and insert an item at any position within the list', () => {
    list.insert('3', 1);

    expect(list.insert).toBeDefined();
    expect(list.get(1)).toBe('3');
    expect(list.length()).toBe(3);
  })

  test('must insert an item at the end of the list, with the appropriate index', () => {
    list.insert('2', 2);

    expect(list.get(2)).toBe('2');
    expect(list.length()).toBe(3)
  })

  test('must insert the item at the top of the list, with the appropriate index', () => {
    list = new List;

    list.insert('0', 0);

    expect(list.get(0)).toBe('0');
    expect(list.length()).toBe(1)
  })

  test('must generate an exception with the wrong index', () => {

    expect(() => list.insert('0', -1)).toThrow('Invalid number');
    expect(() => list.insert('5', 5)).toThrow('Invalid number');
  })
})

describe('Delete metod', () => {
  test('must be defined, delete the element and return its value', () => {
    list.append('2');
    const value = list.delete(1);

    expect(list.delete).toBeDefined();
    expect(list.get(1)).toBe('2');
    expect(list.length()).toBe(2);
    expect(value).toBe('1');
  })

  test('must delete not the last node in the list', () => {
    const value = list.delete(0);

    expect(list.get(0)).toBe('1')
    expect(list.length()).toBe(1);
    expect(value).toBe('0');
  })

  test('should delete the item at the end of the list, with the appropriate index', () => {
    const value = list.delete(1);

    expect(() => list.get(1)).toThrow('Invalid number');
    expect(list.length()).toBe(1);
    expect(value).toBe('1');
  })

  test('must generate an exception with the wrong index', () => {

    expect(() => list.delete(-1)).toThrow('Invalid number');
    expect(() => list.delete(5)).toThrow('Invalid number');
  })
})


describe('DeleteAll metod', () => {
  test('must be defined and delete all values passed by the argument', () => {
    list.append('0');
    list.append('1');
    list.append('0');

    list.deleteAll('0');

    expect(list.deleteAll).toBeDefined();
    expect(list.get(0)).toBe('1');
    expect(list.get(1)).toBe('1');
    expect(list.length()).toBe(2);
  })

  test('must delete all nodes if all have the specified value', () => {
    list = new List;
    list.append('0');
    list.append('0');

    list.deleteAll('0');

    expect(list.length()).toBe(0);
  })

  test('should not change anything if there are no nodes with this value', () => {
    list.deleteAll('3');

    expect(list.length()).toBe(2);
  })
})


describe('Clone metod', () => {
  test('must be defined and delete all values passed by the argument', () => {
    const cloneList = list.clone();

    expect(list.clone).toBeDefined();
    expect(cloneList.length()).toBe(2);
    expect(cloneList.get(0)).toBe('0');
    expect(cloneList.get(1)).toBe('1');
    expect(() => cloneList.get(2)).toThrow('Invalid number');
  })

  test('should not have changes that occur with the initial list in the future', () => {
    const cloneList = list.clone();
    list.insert('2', 1);
    list.delete(0);
    list.append('3');

    expect(list.get(0)).toBe('2');
    expect(list.get(1)).toBe('1');
    expect(list.get(2)).toBe('3');
    expect(list.length()).toBe(3);
    expect(cloneList.get(0)).toBe('0');
    expect(cloneList.get(1)).toBe('1');
    expect(() => cloneList.get(2)).toThrow('Invalid number')
    expect(cloneList.length()).toBe(2);
  })
})


describe('Reverse metod', () => {
  test('must be defined and delete all values passed by the argument', () => {
    list.reverse();

    expect(list.reverse).toBeDefined();
    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe('1');
    expect(list.get(1)).toBe('0');
  })
})


describe('FindFirst metod', () => {
  test('must be defined and return the index of the first node with the desired value', () => {
    list.append('1');
    const index = list.findFirst('1');

    expect(list.findFirst).toBeDefined();
    expect(index).toBe(1);
  })

  test('should return -1 if there is no node with the required value', () => {
    const index = list.findFirst('2');

    expect(index).toBe(-1);
  })
})


describe('FindLast metod', () => {
  test('must be defined and return the index of the last node with the desired value', () => {
    list.append('1');
    const index = list.findLast('1');

    expect(list.findLast).toBeDefined();
    expect(index).toBe(2);
  })

  test('should return -1 if there is no node with the required value', () => {
    const index = list.findLast('2');

    expect(index).toBe(-1);
  })
})


describe('Clear metod', () => {
  test('must be defined and clear the list', () => {
    list.clear();

    expect(list.clear).toBeDefined();
    expect(list.length()).toBe(0);
    // if there is no first node, then there are no nodes in the list at all:
    expect(() => list.get(0)).toThrow('Invalid number'); 
  })
})


describe('Extend metod', () => {
  beforeEach(() => {
    otherList = new List;
    otherList.append('2');
    otherList.append('3');
  })

  test('must be defined and add to the first list nodes with the values of the nodes of another', () => {
    list.extend(otherList);

    expect(list.extend).toBeDefined();
    expect(list.length()).toBe(4);
    expect(list.get(0)).toBe('0');
    expect(list.get(1)).toBe('1');
    expect(list.get(2)).toBe('2');
    expect(list.get(3)).toBe('3');
  })

  test('after extension, the initial list should not change if another changes', () => {
    list.extend(otherList);
    otherList.insert('4', 1);
    otherList.delete(0);
    otherList.append('5');

    expect(list.length()).toBe(4);
    expect(list.get(0)).toBe('0');
    expect(list.get(1)).toBe('1');
    expect(list.get(2)).toBe('2');
    expect(list.get(3)).toBe('3');
    expect(otherList.length()).toBe(3);
    expect(otherList.get(0)).toBe('4');
    expect(otherList.get(1)).toBe('3');
    expect(otherList.get(2)).toBe('5');
  })
})
