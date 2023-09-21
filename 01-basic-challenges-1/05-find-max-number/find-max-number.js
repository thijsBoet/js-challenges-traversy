// function findMaxNumber(nums) {
//   return Math.max(...nums);
// }

function findMaxNumber(nums) {
  let max = nums[0];
  
  for (num of nums) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

module.exports = findMaxNumber;
