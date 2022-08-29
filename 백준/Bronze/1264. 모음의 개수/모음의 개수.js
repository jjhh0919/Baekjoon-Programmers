const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const vowel = ["a", "e", "i", "o", "u"];
const sen = [];

for (let i = 0; i < input.length - 1; i++) {
  sen.push(input[i].toLowerCase());
}

for (let s of sen) {
  let count = 0;
  for (let i of s) {
    if (vowel.includes(i)) {
      count++;
    }
  }
  console.log(count);
}
