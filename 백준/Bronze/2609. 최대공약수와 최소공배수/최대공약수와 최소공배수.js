const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => parseInt(x))
  .sort((a, b) => a - b);

const [num1, num2] = input;
let number = 0;
for (let i = 1; i <= num1; i++) {
  if (!(num1 % i) && !(num2 % i)) {
    number = i;
  }
}

console.log(number);
console.log((num1 * num2) / number);
