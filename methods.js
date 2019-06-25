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
      if(func(arr[i], i)) return i;
  }
  return -1;
};

const reduce = (arr, func, initialValue) => {
  let accumulator;
  let i = 0;

  if(initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    accumulator = arr[0];
    i = 1;
  }

  for(i; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) 
      accumulator = func(accumulator, arr[i], i);
  }

  return accumulator;
};

const every = (arr, func) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i))
      if(!func(arr[i], i)) return false;
  }
  return true;
};

const forEach = (arr, func) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i))
      func(arr[i], i);
  }
  return undefined;
};

module.exports = { map, filter, findIndex, reduce, every, forEach };
