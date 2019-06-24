const map = (arr, func) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr[i] = func(arr[i]);
  }
  return newArr;
};

const filter = (arr, func) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
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

module.exports = { map, filter, findIndex };
