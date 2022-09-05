/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  const tmp = x.toString();
  const middle = tmp.length / 2;
  for (let i = 0; i < middle; i++) {
    if (tmp[i] !== tmp[tmp.length - i - 1]) return false;
  }
  return true;
};