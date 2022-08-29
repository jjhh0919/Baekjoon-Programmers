const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = parseInt(input);
let answer = "";

for (let i = number - 1; i >= 0; i--) {
  for (let j = 0; j < number; j++) {
    if (i > j) {
      answer += " ";
    } else {
      answer += "*";
    }
  }
  answer += "\n";
}

console.log(answer);
