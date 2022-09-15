/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const arr = [];
  index.forEach((v, i) => {
    arr.splice(v, 0, nums[i]);
  });
  return arr;
};