const getDigitCount = require("./getDigitCount");

module.exports = function (nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getDigitCount(nums[i]));
  }
  return maxDigits;
};

// reduce version
// function (arr) {
//   return arr.reduce((maxDigits, currentNum) => {
//     const digitCount = getDigitCount(currentNum);
//     if (maxDigits < digitCount) maxDigits = digitCount;
//     return maxDigits;
//   }, 0);
// };
