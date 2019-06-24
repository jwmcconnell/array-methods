const { map, filter } = require('./methods');

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
});

