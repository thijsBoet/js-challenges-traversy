// function removeDuplicates(array) {
//   return [...new Set(array)];
// }

function removeDuplicates(array) {
  const uniqueArray = [];

  for(let i = 0; i < array.length; i++) {
    if(!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}


module.exports = removeDuplicates;
