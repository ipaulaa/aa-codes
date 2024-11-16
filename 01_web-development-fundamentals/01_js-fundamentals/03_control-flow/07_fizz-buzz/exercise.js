function fizzBuzz(number) {
  for (let i = 3; i < number; i++) {
    let isDiv3 = i % 3 === 0;
    let isDiv5 = i % 5 === 0;

    if ((isDiv3 || isDiv5) && isDiv3 !== isDiv5) console.log(i);
  }
}

// Examples:

fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18
