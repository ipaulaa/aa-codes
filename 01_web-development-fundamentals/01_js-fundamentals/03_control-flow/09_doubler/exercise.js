function doubler(numbers) {
  let doubleNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    doubleNumbers.push(2 * numbers[i]);
  }

  return doubleNumbers;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
