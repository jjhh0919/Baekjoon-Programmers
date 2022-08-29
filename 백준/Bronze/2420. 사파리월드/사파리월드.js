const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

console.log(Math.abs(num1 - num2));
