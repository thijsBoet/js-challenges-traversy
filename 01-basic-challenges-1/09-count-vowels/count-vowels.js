function countVowels(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

module.exports = countVowels;
