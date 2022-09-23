/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const arr = Array(n + 1).fill().map((v, i) => i);
  return arr.map(v => {
    const binary = v.toString(2);
    return binary.split('').filter(a => a === '1').length;
  });
};