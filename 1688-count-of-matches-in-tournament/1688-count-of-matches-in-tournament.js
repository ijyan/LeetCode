/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = (n) => {
  let matches = 0;
  while (true) {
    if (n === 1) break;
    let advance = tournament(n);
    matches += n - advance;
    n = advance;
  }
  return matches;
}

const tournament = (team) => {
  if (team % 2 === 0) {
    return team / 2;
  } else {
    return (team - 1) / 2 + 1;
  }
}