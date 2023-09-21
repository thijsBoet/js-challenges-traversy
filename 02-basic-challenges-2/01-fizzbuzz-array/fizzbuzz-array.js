function fizzBuzzArray(maxNumber) {
  const solution = [];

  for (let i = 1; i <= maxNumber; i++) {
		if (i % 15 === 0) {
			solution.push('FizzBuzz');
		} else if (i % 3 === 0) {
			solution.push('Fizz');
		} else if (i % 5 === 0) {
			solution.push('Buzz');
		} else {
			solution.push(i);
		}
  }

  return solution;
}

module.exports = fizzBuzzArray;
