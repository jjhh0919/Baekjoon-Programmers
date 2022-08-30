const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let array = [];

for (let index of input) {
  index = index.split("");
  const [first, second, third] = index;
  array.push(parseInt(third + second + first));
}
console.log(Math.max(...array));
