/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  return Array(n).fill().map((v, i) => {
    v = `${i + 1}`;
    if (v % 3 === 0 && v % 5 === 0) v = 'FizzBuzz';
    if (v % 3 === 0) v = 'Fizz';
    if (v % 5 === 0) v = 'Buzz';
    return v;
  });
};