const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map((x) => parseInt(x));


const [num1, num2, num3] = input.sort((a, b) => a - b);

const money = (num1, num2, num3) => {
  if (num1 === num2 && num1 === num3) {
    return 10000 + num1 * 1000;
  } else if (
    (num1 === num2 && num1 !== num3) ||
    (num1 !== num2 && num2 === num3)
  ) {
    return 1000 + num2 * 100;
  } else {
    return num3 * 100;
  }
};

console.log(money(num1, num2, num3));
