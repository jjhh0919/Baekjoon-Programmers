const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const caseCount = parseInt(input[0]);

for (let i = 1; i <= caseCount; i++) {
  let score = 0;
  let count = 0;

  for (j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    score += count;
  }
  console.log(score);
}
