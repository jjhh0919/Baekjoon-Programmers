let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a*(b%10));
console.log(a*parseInt((b%100)/10));
console.log(a*parseInt(b/100));
console.log(a*b);