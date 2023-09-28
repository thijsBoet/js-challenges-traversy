const nameMap = new Map([
	[1, 'John'],
	[2, 'Jane'],
	[3, 'Joe'],
]);

const myFunction = () => { };
const emptyObj = {};

// Can mix/match types
const map2 = new Map([
	['name', 'John'],
	[1, 'number one'],
	[true, 'really true'],
	[null, 'null'],
	[myFunction, 'empty function'],
	[emptyObj, 'empty object'],
]);

// Get values
console.log(nameMap.get(1));

// Set values
nameMap.set(4, 'Jack');

// Check for key values
console.log(nameMap.has(1));

// Delete values
nameMap.delete(4);
console.log(nameMap.has(4));

// Get size of map
console.log(nameMap.size);

// Iterate through maps
for (const [key, value] of nameMap) {
  console.log(key, value);
}

// Iterate with forEach
map2.forEach((value, key) => console.log(key, value));

// Get keys
console.log(nameMap.keys());

// Get values
console.log(nameMap.values());

// Convert map to array
console.log([...nameMap]);
console.log(Array.from(nameMap));

// Clear map
nameMap.clear();