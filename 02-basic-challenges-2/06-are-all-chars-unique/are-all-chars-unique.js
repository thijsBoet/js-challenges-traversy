// function areAllCharactersUnique(string) {
//   return [...new Set(string)].join("") === string;
// }

// function areAllCharactersUnique(str) {
//   const charCount = {};
  
//   for (const char of str) {
//     // charCount[char] = (charCount[char] || 0) + 1;
//     if(charCount[char]) {
//       return false;
//     }

//     charCount[char] = true
//   }

//   return true
// }

function areAllCharactersUnique(str) {
	const charSet = new Set();

	for (const char of str) {
		if (charSet.has(char)) {
			return false;
		}

    charSet.add(char);
	}

	return true;
}

module.exports = areAllCharactersUnique;
