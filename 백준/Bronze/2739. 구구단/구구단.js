const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = parseInt(input);

for (let i = 1; i < 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
