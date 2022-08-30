const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/).map((x) => parseInt(x));

let answer = "";
for (let i = 0; i < arr.length; i += 2) {
  answer += arr[i] + arr[i + 1] + "\n";
}
console.log(answer);
