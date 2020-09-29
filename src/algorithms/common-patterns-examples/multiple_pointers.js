/*
    function sumZero() {}
    Accepts a sorted array of integers. Returns an array that includes the first first pair where the sum is 0 or undefined if it does not exit.
*/

function sumZero(array) {
  const obj = {};
  let arrayLength = array.length;

  while (arrayLength) {
    --arrayLength;
    const currentItem = array[arrayLength];
    if (currentItem > 0) {
      obj[currentItem] = true;
    } else if (currentItem) {
      const abs = Math.abs(currentItem);
      if (obj[abs]) {
        return [currentItem, abs];
      }
    }
  }
}

/*
    function countUniqueValues() {}
    Accepts a sorted array of integers. Returns a count of the unique values.
*/

function countUniqueValues(array) {
  // time: O(n), space: O(n)
  return array.reduce(
    (obj, item) => {
      if (!obj.dictionary[item]) obj.count++;
      obj.dictionary[item] = true;
      return obj;
    },
    {
      dictionary: {},
      count: 0,
    }
  ).count;
}

function countUniqueValuesMP(arr) {
  // multiple pointers, time: O(n), space: O(1)
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    j++;
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.length ? i + 1 : i;
}
