const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((x) => parseInt(x));

maxNum = Math.max(...input);
console.log(`${maxNum}\n${input.indexOf(maxNum) + 1}`);
