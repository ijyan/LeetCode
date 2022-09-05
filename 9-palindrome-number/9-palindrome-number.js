/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let tmp = Number(String(x).split('').reverse().join(''));
  return x === tmp
};