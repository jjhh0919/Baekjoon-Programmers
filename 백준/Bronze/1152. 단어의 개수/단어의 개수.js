const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const check = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "") {
      return 0;
    }
  }
  return input.length;
};

console.log(check(input));
