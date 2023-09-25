/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/
function accesElement(arr, index) {
	return arr[index];
}

const arr1 = [1, 2, 3, 4, 5];

console.time('Example of constant time O(1)');
console.log(accesElement(arr1, 2));
console.timeEnd('Example of constant time O(1)');

const arr2 = Array.from({ length: 10000 }, (_, i) => i + 1);

console.time('Example of constant time O(1)');
console.log(accesElement(arr2, 1000));
console.timeEnd('Example of constant time O(1)');