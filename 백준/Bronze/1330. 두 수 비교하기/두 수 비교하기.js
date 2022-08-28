const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

const compare = (num1, num2) => {
  if (num1 > num2) {
    return ">";
  } else if (num1 < num2) {
    return "<";
  } else {
    return "==";
  }
};
console.log(compare(num1, num2));

