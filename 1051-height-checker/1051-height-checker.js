/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const expected = [...heights].sort((a, b) => a - b);
  return expected.filter((v, i) => v !== heights[i]).length;
};