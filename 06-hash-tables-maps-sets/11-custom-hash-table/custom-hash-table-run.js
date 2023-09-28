const HashTable = require('./custom-hash-table');

const myHashTable = new HashTable();

myHashTable.set('Alice', '565-777-7777');
myHashTable.set('Johhny', '565-999-9999');
myHashTable.set('Sarah', '565-888-8888');

console.log(myHashTable.get('Alice'));
myHashTable.remove('Sarah');
console.log(myHashTable.has('Sarah'))

myHashTable.printTable();