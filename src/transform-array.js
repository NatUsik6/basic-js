const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } 

  const transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      switch (arr[i]) {
        case "--discard-next":
          i++;
          continue;
        case "--discard-prev":
          arr[i - 1] === transformedArray[transformedArray.length - 1] ? transformedArray.pop() : "";
          continue;
        case "--double-next":
          i < arr.length - 1 ? transformedArray.push(arr[i + 1]) : "";
          continue;
        case "--double-prev":
          i > 0 && arr[i - 1] === transformedArray[transformedArray.length - 1]
            ? transformedArray.push(arr[i - 1]) : "";
          continue;
      }
    }

    transformedArray.push(arr[i]);
  }

  return transformedArray;
}

module.exports = {
  transform
};
