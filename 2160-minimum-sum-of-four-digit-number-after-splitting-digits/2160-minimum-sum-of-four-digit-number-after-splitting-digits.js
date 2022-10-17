/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  const tmp = num.toString().split('').sort((a, b) => a - b);
  return parseInt(tmp[0] + tmp[2]) + parseInt(tmp[1] + tmp[3]);
};