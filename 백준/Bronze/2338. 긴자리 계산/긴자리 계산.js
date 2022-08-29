const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num1 = BigInt(input[0]);
const num2 = BigInt(input[1]);

let answer = "";

answer += num1 + num2 + "\n";
answer += num1 - num2 + "\n";
answer += num1 * num2 + "\n";

console.log(answer);
