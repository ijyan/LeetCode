/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let answer = 0;
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cnt++;
    } else {
      cnt = 0;
    }
    if (answer < cnt) {
      answer = cnt;
    }
  }
  return answer;
};