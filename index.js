
// eslint-disable-next-line func-style
function sum(fromN, toN) {
  if (fromN < toN) {

    return fromN + sum(fromN + 1, toN);
  }
  return fromN;
}

module.exports = sum;
