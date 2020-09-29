const getDigit = require("./getDigit");
const getMostDigits = require("./getMostDigits");

module.exports = function (nums) {
  const mostDigits = getMostDigits(nums);
  for (let k = 0; k < mostDigits; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const bucketIndex = getDigit(nums[i], k);
      digitBuckets[bucketIndex].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
};
