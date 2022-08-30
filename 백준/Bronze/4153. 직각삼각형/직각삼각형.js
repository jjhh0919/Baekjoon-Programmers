const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const array = [];

for (let i = 0; i < input.length - 1; i++) {
  array.push(input[i].split(" "));
}

const isRAT = (num1, num2, num3) => {
  if (Math.pow(num1, 2) + Math.pow(num2, 2) === Math.pow(num3, 2)) {
    return "right";
  } else {
    return "wrong";
  }
};

for (let arr of array) {
  arr.sort((a, b) => a - b);
  console.log(isRAT(...arr));
}
