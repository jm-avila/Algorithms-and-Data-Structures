module.exports = function (num, i) {
  const tenToIPower = Math.pow(10, i);
  const numAbs = Math.abs(num);
  return Math.floor(numAbs / tenToIPower) % 10;
};

// string version
// function (num, place) {
//   const numStr = `${num}`;
//   const digitIndex = numStr.length - place - 1;

//   return +numStr[digitIndex] || 0;
// };
