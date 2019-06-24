const map = (arr, func) => {
  let newArr = Array(arr.length);
  for(let i = 0; i < arr.length; i++) {
    newArr[i] = func(arr[i]);
  }
  return newArr;
};

module.exports = { map };
