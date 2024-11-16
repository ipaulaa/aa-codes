function isOdd1(num) {
  if (num % 2 !== 0) return true;
  return false;
}

function isOdd2(num) {
  return num % 2 !== 0;
}

console.log(isOdd1(2)); // => false
console.log(isOdd1(5)); // => true
console.log(isOdd1(-17)); // => true

console.log(isOdd2(2)); // => false
console.log(isOdd2(5)); // => true
console.log(isOdd2(-17)); // => true
