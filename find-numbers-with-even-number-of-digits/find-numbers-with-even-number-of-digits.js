/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  return nums.filter(v => (v.toString().length) % 2 === 0).length;
};