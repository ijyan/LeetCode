/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  let answer = [];
  nums.forEach(v => answer.push(nums[v]));
  return answer;
};