/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let cnt = 0;
  while (num) {
    num % 2 === 0 ? num /= 2 : num--;
    cnt++;
  }
  return cnt;
};