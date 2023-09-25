function maxSubarraySum(arr1, k) {
  let maxSum = -Infinity;

  for (let i = 0; i <= arr1.length - k; i++) {
    let currentSum = 0;

    for (let j = i; j < i + k; j++) {
      currentSum += arr1[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
