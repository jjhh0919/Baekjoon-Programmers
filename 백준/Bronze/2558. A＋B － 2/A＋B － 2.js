const fs = require("fs");
const input = fs.readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => parseInt(x));

console.log(input[0] + input[1]);