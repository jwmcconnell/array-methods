const map = (arr, func) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) newArr[i] = func(arr[i], i);
  }
  return newArr;
};

const filter = (arr, func) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i))
      if(func(arr[i], i)) newArr[newArr.length] = arr[i];
  }
  return newArr;
};

const findIndex = (arr, func) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i))
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
    if(arr.hasOwnProperty(count)) 
      accumulator = func(accumulator, arr[count]);
  }

  return accumulator;
};

const every = (arr, func) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i))
      if(!func(arr[i])) return false;
  }
  return true;
};

const forEach = (arr, func) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i))
      func(arr[i]);
  }
  return undefined;
};

module.exports = { map, filter, findIndex, reduce, every, forEach };
