const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => parseInt(x) % 42);

const array = [];
for (let index of input) {
  if (!array.includes(index)) {
    array.push(index);
  }
}

console.log(array.length);
