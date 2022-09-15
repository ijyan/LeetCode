/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
  return nums.indexOf(original) === -1 ? original : findFinalValue(nums, original * 2);
};