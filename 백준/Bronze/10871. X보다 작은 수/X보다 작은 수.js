const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0]
  .toString()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));
const sequence = input[1]
  .toString()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));

let answer = "";

for (let seq of sequence) {
  if (seq < X) {
    answer += seq + " ";
  }
}

console.log(answer);
