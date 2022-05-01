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