module.exports = function listHasOddValues(arr) {
  if (!arr.length) return false;
  if (arr[0] % 2 !== 0) return true;

  return listHasOddValues(arr.slice(1));
};
