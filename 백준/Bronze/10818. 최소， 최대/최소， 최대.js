const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[1].split(" ").map((x) => parseInt(x));
console.log(`${Math.min(...numbers)} ${Math.max(...numbers)}`);
