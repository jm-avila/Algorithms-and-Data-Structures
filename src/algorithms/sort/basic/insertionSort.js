module.exports = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};
