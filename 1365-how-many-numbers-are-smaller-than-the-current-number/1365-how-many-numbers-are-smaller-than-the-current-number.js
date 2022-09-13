/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  return nums.map(n => nums.reduce((acc, cur) => acc + (n > cur ? 1 : 0), 0))
};