/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/

// Often nested loops
function sumArray(arr) {
  let sum = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j];
    }
  }

  return sum + sum2;
}

console.time('Example of quadradic time O(n^2)');
console.log(sumArray([1, 2, 3, 4, 5]));
console.timeEnd('Example of quadradic time O(n^2)');

console.time('Example of quadradic time O(n^2)');
console.log(sumArray(Array.from({ length: 100000 }, (_, i) => i + 1)));
console.timeEnd('Example of quadradic time O(n^2)');
