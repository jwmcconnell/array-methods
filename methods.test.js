/* eslint-disable no-sparse-arrays */
const { map, filter, findIndex, reduce, every, forEach } = require('./methods');

describe('map', () => {
  it('returns an array of doubled values from an array', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = map(nums, num => num * 2);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it('returns an array of squared values from an array', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = map(nums, num => num * num);
    expect(result).toEqual([1, 4, 9, 16, 25]);
  });

  it('returns an array of subtracted values from an array', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = map(nums, num => num - 3);
    expect(result).toEqual([-2, -1, 0, 1, 2]);
  });

  it('skips over holes and adds a hole in the new array', () => {
    const nums = [1, 2, 3,, 5];
    const result = map(nums, num => num ** 3);
    expect(result).toEqual([1, 8, 27,, 125]);
  });

  it('does not skip over undefined values', () => {
    const arr = [undefined, undefined];
    const result = map(arr, () => 'Hello');
    expect(result).toEqual(['Hello', 'Hello']);
  });

  it('returns an array of indices of the items', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = map(nums, (num, i) => i);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
});

describe('filter', () => {
  it('returns an array without the odd values from an array', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = filter(nums, num => num % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  it('returns an array with only values below a number from an array', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = filter(nums, num => num < 5);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('skips over holes and doesn`t add it to the filtered array', () => {
    const nums = [1, 2, 3,, 5, 6];
    const result = filter(nums, nums => nums < 6);
    expect(result).toEqual([1, 2, 3, 5]);
  });

  it('does not skip over undefined values', () => {
    const nums = [1, 2, 3, undefined, 4, 5];
    const result = filter(nums, nums => nums !== 0);
    expect(result).toEqual([1, 2, 3, undefined, 4, 5]);
  });

  it('returns an array of items with indices less than 2', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = filter(nums, (num, i) => i < 2);
    expect(result).toEqual([1, 2]);
  });
});

describe('findIndex', () => {
  it('returns the first index of a specific number from an array', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = findIndex(nums, num => num === 3);
    expect(result).toEqual(2);
  });

  it('returns -1 if it can`t find the value it is looking for', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = findIndex(nums, num => num === 6);
    expect(result).toEqual(-1);
  });

  it('returns the first index of an even number from an array', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = findIndex(nums, num => num % 2 === 0);
    expect(result).toEqual(1);
  });

  it('skips over holes and does not call the function', () => {
    const nums = [0, 0, 0,, 5, 6];
    const result = findIndex(nums, num => num !== 0);
    expect(result).toEqual(4);
  });  

  it('does not skip over undifined values', () => {
    const nums = [0, 0, 0, undefined, 5, 6];
    const result = findIndex(nums, num => num !== 0);
    expect(result).toEqual(3);
  });

  it('finds a value by its index', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = findIndex(nums, (num, i) => i === 2);
    expect(result).toEqual(2);
  });
});

describe('reduce', () => {
  it('returns a sum of all values in an array', () => {
    const nums = [1, 2, 3, 4, 10];
    const result = reduce(nums, (acc, item) => acc + item);
    expect(result).toEqual(20);
  });

  it('returns a sum of all values in an array starting from an initial value', () => {
    const nums = [1, 2, 3, 4, 10];
    const result = reduce(nums, (acc, item) => acc + item, 5);
    expect(result).toEqual(25);
  });

  it('returns a list of how many times a number repeates in an array', () => {
    const nums = [1, 2, 1, 1, 10, 8, 2, 2, 2, 2, 8, 9];
    const result = 
      reduce(nums, 
        (acc, item) => {
          !(item in acc) ? acc[item] = 1 : acc[item]++;
          return acc;
        }, 
        {});
    expect(result).toEqual({
      '1': 3,
      '2': 5,
      '10': 1,
      '8': 2,
      '9': 1
    });
  });

  it('skips over holes and does not call the function', () => {
    const nums = [1, 2, 1, 1,, 8, 2, 2, 2, 2, 8, 9];
    const result = 
      reduce(nums, 
        (acc, item) => {
          !(item in acc) ? acc[item] = 1 : acc[item]++;
          return acc;
        }, 
        {});
    expect(result).toEqual({
      '1': 3,
      '2': 5,
      '8': 2,
      '9': 1
    });
  });

  it('does not skip over undefined', () => {
    const nums = [1, 2, 1, 1, undefined, 8, 2, 2, 2, 2, 8, 9];
    const result = 
      reduce(nums, 
        (acc, item) => {
          !(item in acc) ? acc[item] = 1 : acc[item]++;
          return acc;
        }, 
        {});
    expect(result).toEqual({
      '1': 3,
      '2': 5,
      'undefined': 1,
      '8': 2,
      '9': 1
    });
  });

  it('adds numbers below a certain index', () => {
    const nums = [1, 2, 3, 4, 10];
    const result = reduce(nums, (acc, item, i) => i < 4 ? acc + item : acc);
    expect(result).toEqual(10);
  });
});

describe('every', () => {
  it('returns true testing a list of all positive numbers for them being positive', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = every(nums, num => num > 0);
    expect(result).toEqual(true);
  });

  it('returns false testing a list of numbers for them being positive with one being negative', () => {
    const nums = [1, 2, 3, -1, 4, 5];
    const result = every(nums, num => num > 0);
    expect(result).toEqual(false);
  });

  it('skips over holes and does not call the function', () => {
    const nums = [0, 0, 0,, 0];
    const result = every(nums, num => num === 0);
    expect(result).toEqual(true);
  });

  it('does not skip over undefined values', () => {
    const nums = [0, 0, 0, undefined, 0];
    const result = every(nums, num => num === 0);
    expect(result).toEqual(false);
  });
});

describe('forEach', () => {
  it('calls the callback for every item in the aray', () => {
    const nums = [1, 2, 3];
    const mockCallback = jest.fn(num => num * 2);
    forEach(nums, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });

  it('calls the function with each argument from the array', () => {
    const nums = [1, 2, 3];
    const mockCallback = jest.fn(num => num * 2);
    forEach(nums, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(1);
    expect(mockCallback).toHaveBeenCalledWith(2);
    expect(mockCallback).toHaveBeenCalledWith(3);
  });

  it('calls the function for every item not including holes', () => {
    const nums = [1,, 3];
    const mockCallback = jest.fn(num => num * 2);
    forEach(nums, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(2);
  });

  it('skips over holes and does not call the function', () => {
    const nums = [1,, 3];
    const mockCallback = jest.fn(num => num * 2);
    forEach(nums, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(1);
    expect(mockCallback).toHaveBeenCalledWith(3);
  });

  it('calls the function for every item including undefined', () => {
    const nums = [1, undefined, 3];
    const mockCallback = jest.fn(num => num * 2);
    forEach(nums, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });

  it('does not skip over undefined and calls the function for each item', () => {
    const nums = [1, undefined, 3];
    const mockCallback = jest.fn(num => num * 2);
    forEach(nums, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(1);
    expect(mockCallback).toHaveBeenCalledWith(undefined);
    expect(mockCallback).toHaveBeenCalledWith(3);
  });
});
