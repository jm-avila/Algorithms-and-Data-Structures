const pivot = require("./pivot");

module.exports = function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};
