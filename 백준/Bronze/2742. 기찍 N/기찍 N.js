const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = parseInt(input);
let answer = "";

for (let i = number; i > 0; i--) {
  answer += i + "\n";
}
console.log(answer);
