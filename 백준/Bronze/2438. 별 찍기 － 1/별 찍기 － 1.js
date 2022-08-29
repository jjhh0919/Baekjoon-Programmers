const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = parseInt(input);
let answer = "";

for (let i = 0; i < number; i++) {
  for (let j = 0; j < number; j++) {
    if (i >= j) {
      answer += "*";
    }
  }
  answer += "\n";
}

console.log(answer);