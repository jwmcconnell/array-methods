const map = (arr, func) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(Object.prototype.hasOwnProperty.call(arr, i)) newArr[i] = func(arr[i]);
  }
  return newArr;
};

const filter = (arr, func) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(Object.prototype.hasOwnProperty.call(arr, i)) 
      if(func(arr[i])) newArr[newArr.length] = arr[i];
  }
  return newArr;
};

const findIndex = (arr, func) => {
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) return i;
  }
  return -1;
};

const reduce = (arr, func, initialValue) => {
  let accumulator;
  let count = 0;

  if(initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    accumulator = arr[0];
    count = 1;
  }

  for(count; count < arr.length; count++) {
    accumulator = func(accumulator, arr[count]);
  }

  return accumulator;
};

const every = (arr, func) => {
  for(let i = 0; i < arr.length; i++) {
    if(!func(arr[i])) return false;
  }
  return true;
};

module.exports = { map, filter, findIndex, reduce, every };
