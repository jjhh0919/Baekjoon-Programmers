const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const subjectCount = parseInt(input[0]);
const scores = input[1].split(" ").map((x) => parseInt(x));
const M = Math.max(...scores);

let sum = 0;

for (let score of scores) {
  score = (score / M) * 100;
  sum += score;
}
console.log(sum / subjectCount);
