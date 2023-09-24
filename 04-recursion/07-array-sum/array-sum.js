function arraySum(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + arraySum(array.slice(1));
}

module.exports = arraySum;
