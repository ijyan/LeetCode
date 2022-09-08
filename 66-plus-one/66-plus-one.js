/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits = BigInt(digits.join(''));
  digits++;
  return digits.toString().split('');
};