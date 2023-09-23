// function findMissingLetter(arr) {
//   const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   const startIndex = letters.indexOf(arr[0]);
  
//   for (let i = 0; i < arr.length; i++) {
//     const letterIndex = letters.indexOf(arr[i]);
//     if (letterIndex !== startIndex + i) {
//       return letters[startIndex + i];
//     }
//   }

//   return '';
// }

// function findMissingLetter(arr) {
//   let start = arr[0].charCodeAt(0);
  
//   for (char of arr) {
//     if (char.charCodeAt(0) !== start++) {
//       return String.fromCharCode(start - 1);
//     }
//   }
// }

function findMissingLetter(arr) {
	let start = arr[0].charCodeAt(0);

  for(let i =0; i < arr.length; i++){
    const current = arr[i].charCodeAt(0);

    if(current - start > 1){
      return String.fromCharCode(start + 1);
    }

    start = current;
  }

  return '';
}

module.exports = findMissingLetter;
