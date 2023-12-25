const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return Math.max(...Array(n.toString().length)
    .fill(0)
    .map((item, index) =>
      +(n.toString().slice(0, index) + n.toString().slice(index + 1))));
}

module.exports = {
  deleteDigit
};
