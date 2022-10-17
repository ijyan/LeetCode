/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const digits = n.toString().split('').reduce((acc, cur) => acc * +cur, 1);
  const sum = n.toString().split('').reduce((acc, cur) => acc + +cur, 0);
  return digits - sum;
};