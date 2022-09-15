/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  const answer = accounts.map(v => v.reduce((acc, cur) => acc + cur))
  return Math.max(...answer);
};