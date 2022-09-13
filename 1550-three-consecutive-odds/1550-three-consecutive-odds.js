/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  let cnt = 0;
   for(let i of arr) {
     if(i % 2 !== 0) {
       cnt++;
     } else {
       cnt = 0;
     }
     if(cnt === 3) return true;
   }
  return false;
};