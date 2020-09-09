module.exports = function pure(arr) {
  let newArr = [];

  if (!arr.length) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(pure(arr.slice(1)));

  return newArr;
};
