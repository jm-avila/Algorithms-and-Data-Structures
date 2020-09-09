/*
function same() {}
    accepts two arrays. Returns true is every value in the array has it's corresponding value in the second array.
*/

function same(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;

  const firstArrayDictionary = firstArray.reduce((obj, arrayItem) => {
    obj[arrayItem] = true;

    return obj;
  }, {});

  return secondArray.every((element) => {
    const elementIsAvailable = firstArrayDictionary[element];

    if (elementIsAvailable) firstArrayDictionary[element] = false;

    return elementIsAvailable;
  });
}

// same([2, 1, 3], [3, 2, 1]);

/*
function validAnagram() {}
    accepts two strings. Returns true is the second string is an anagrama of the first one.
    Anagram: a word or phrase formed by rearranging the letteres of another.
*/

function validAnagram(firstString, secondString) {
  if (firstString.length !== secondString.length) return false;

  const dictionary = [...firstString].reduce((obj, letter) => {
    if (!obj[letter]) obj[letter] = 1;
    else obj[letter] += 1;
    return obj;
  }, {});

  return [...secondString].every((element) => dictionary[element]--);
}
