const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a1 = s1.split("");
  let a2 = s2.split("");
  let count = 0;

  for (let character of a1) {
    let index = a2.findIndex(c => c === character);

    if (index != -1) {
      count++;
      a2.splice(index, 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
