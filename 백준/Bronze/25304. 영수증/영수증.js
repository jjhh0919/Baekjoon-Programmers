const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const total = parseInt(input[0]);
const type = parseInt(input[1]);
let sum = 0;

for(let i = 2; i < type + 2; i++) {
  let arr = input[i].split(" ").map((x) => parseInt(x));
  sum += arr[0] * arr[1];
}

console.log(total === sum ? "Yes" : "No");


              