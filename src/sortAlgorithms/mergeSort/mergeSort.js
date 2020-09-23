const merge = require("./merge");

module.exports = function mergeSort(arr) {
  const arrLength = arr.length;
  if (arrLength <= 1) return arr;

  const midPoint = Math.floor(arrLength / 2);
  const left = mergeSort(arr.slice(0, midPoint));
  const right = mergeSort(arr.slice(midPoint));

  return merge(left, right);
};
