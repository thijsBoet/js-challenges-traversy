function generateHashtag(str) {
  if (str.length === 0 || str.length > 140) return false

  const words = str.trim().split(' ')
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return '#' + capitalizedWords.join('')
}

module.exports = generateHashtag;
