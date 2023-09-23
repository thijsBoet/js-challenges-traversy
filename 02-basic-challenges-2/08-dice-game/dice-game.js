function rollDice() {
	return Math.ceil(Math.random() * 6);
}

function outputResults(result) {
	if (result === 7 || result === 11) {
		return 'win';
	} else if (result === 2 || result === 3 || result === 12) {
		return 'lose';
	} else {
		return 'roll again';
	}
}

function diceGameSimulation(numSims) {
	const results = []; // Initialize an array to store simulation results

	for (let i = 0; i < numSims; i++) {
		let dice1 = rollDice();
    let dice2 = rollDice();
    let sum = dice1 + dice2;
		results.push({
			dice1,
			dice2,
			sum,
			result: outputResults(dice1 + dice2),
		});
	}

	return results;
}

module.exports = diceGameSimulation;
