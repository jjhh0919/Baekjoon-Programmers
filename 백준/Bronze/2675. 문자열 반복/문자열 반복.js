const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputCount = parseInt(input[0]);
let answer = "";

for (let i = 1; i <= inputCount; i++) {
  const repeatCount = parseInt(input[i][0]);
  const splitString = input[i].split(" ")[1].split("");
  for (let j of splitString) {
    for (let k of j) {
      answer += k.repeat(repeatCount);
    }
  }
  answer += "\n";
}

console.log(answer);