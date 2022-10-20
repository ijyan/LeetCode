/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const arr = new Array(n).fill(0).map((v, i) => (v + i + 1).toString());
  return arr.map(v => {
    if (v % '3' === 0 && v % '5' === 0) {
      return 'FizzBuzz';
    }
    if (v % '3' === 0) {
      return 'Fizz';
    }
    if (v % '5' === 0) {
      return 'Buzz';
    }
    return v;
  });
};