/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let cnt = 0;
  while (num) {
    num % 2 === 0 ? (num = num / 2) : (num = num - 1);
    cnt++;
  }
  return cnt;
};