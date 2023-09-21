function countOccurrences(string, searchChar) {
  return string.split("").filter((char) => char === searchChar).length;
}

module.exports = countOccurrences;
