/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  let arr = [];
  for(let i in heights) {
    arr.push({name: names[i], height: heights[i]});
  }
  return arr.sort((a, b) => b.height - a.height).map(v => v.name);
};