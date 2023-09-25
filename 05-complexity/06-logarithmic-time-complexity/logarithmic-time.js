/*
Logarithmic Time (O(log n))

Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set. 

*/

function findPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  }

  const halfPower = findPower(base, (exponent - 1) / 2);
  return base * halfPower * halfPower;
}

console.time('Example of logarithmic time O(log n)');
console.log(findPower(2, 100));
console.timeEnd('Example of logarithmic time O(log n)');

console.time('Example of logarithmic time O(log n)');
console.log(findPower(20, 200));
console.timeEnd('Example of logarithmic time O(log n)');