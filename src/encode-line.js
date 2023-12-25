const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "") {
    return "";
  }

  let arr = [{[str[0]]: 0}];

  for (let char of str) {
    if (Object.keys(arr[arr.length - 1])[0] === char) {
      arr[arr.length - 1][char]++;
    } else {
      arr.push({[char]: 1});
    }
  }

  return arr.map(item => (Object.values(item)[0] !== 1 ? Object.values(item)[0] : "") + Object.keys(item)[0]).join("");
}

module.exports = {
  encodeLine
};
