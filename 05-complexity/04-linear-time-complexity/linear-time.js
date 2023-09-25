/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.time('Example of linear time O(n)');
console.log(sumArray([1, 2, 3, 4, 5]));
console.timeEnd('Example of linear time O(n)');

console.time('Example of linear time O(n)');
console.log(sumArray(Array.from({ length: 10000000 }, (_, i) => i + 1)));
console.timeEnd('Example of linear time O(n)');

// In Build functions generally more efficient and expressive than loops
function reduceSUm(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.time('Example of linear time O(n)');
console.log(reduceSUm([1, 2, 3, 4, 5]));
console.timeEnd('Example of linear time O(n)');