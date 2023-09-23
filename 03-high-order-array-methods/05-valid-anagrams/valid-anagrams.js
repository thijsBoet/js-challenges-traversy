// function hashTable(str) {
//   const hashTable = {};

//   for(char of str) {
//     hashTable[char] = (hashTable[char] || 0) + 1;
//   }

//   return hashTable;
// }

// function validAnagrams(str1, str2) {
//   const freqCount1 = hashTable(str1);
//   const freqCount2 = hashTable(str2);

//   for(char in freqCount1) {
//     if(freqCount1[char] !== freqCount2[char]) {
//       return false;
//     }
//   }

//   return true;
// }

function validAnagrams(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }

  const freqCount1 = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  })

  const freqCount2 = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  })

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  )
}

module.exports = validAnagrams;
