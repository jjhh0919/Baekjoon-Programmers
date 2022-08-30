const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => parseInt(x));

const counts = Array(10).fill(0);

const number = input.reduce((acc, cur) => acc * cur);
const array = number.toString().split("");

for (let num of array) {
  counts[parseInt(num)] += 1;
}
for (let count of counts) {
  console.log(count);
}
