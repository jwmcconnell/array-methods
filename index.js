let { map } = require('./methods');

const numbers = [1, 2, 3, 4, 5];

const result = map(numbers, number => number * number);
console.log(result);
