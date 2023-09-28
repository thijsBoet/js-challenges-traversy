function wordFrequencyCounter(string) {
  const words = string.toLowerCase().split(/\W+/);

  const wordFrequency = new Map();

  for (const word of words) {
    if(word === '') continue;
    if (wordFrequency.has(word)) {
      return wordFrequency.set(word, wordFrequency.get(word) + 1);
    }
    return wordFrequency.set(word, 1);
  }

  return wordFrequency;
}

module.exports = wordFrequencyCounter;
