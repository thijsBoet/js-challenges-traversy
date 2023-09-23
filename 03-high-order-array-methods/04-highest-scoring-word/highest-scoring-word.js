// function highestScoringWord(str) {
//   words = str.split(' ');
//   scores = words.map(word => {
//     return word.split('').reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0)
//   })
//   return words[scores.indexOf(Math.max(...scores))]
// }

function highestScoringWord(str) {
	words = str.split(' ');
	scores = words.map(word => Array.from(word)
			.reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0));
	return words[scores.indexOf(Math.max(...scores))];
}

module.exports = highestScoringWord;
