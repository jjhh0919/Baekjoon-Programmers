const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const number = input[1];

let total = 0;

for (let i of number) {
  total += parseInt(i);
}

console.log(total);
