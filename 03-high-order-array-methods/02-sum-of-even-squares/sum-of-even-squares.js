function sumOfEvenSquares(nums) {
  const even = nums.filter(num => num % 2 === 0 && num > 0);

  return even.reduce((sum, num) => sum + num ** 2, 0);
}

module.exports = sumOfEvenSquares;
