/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  const answer = Array(indices.length);

  indices.forEach((v, i) => {
    answer[v] = s[i];
  });

  return answer.join('');
};