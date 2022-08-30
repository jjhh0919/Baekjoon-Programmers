const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let numArray = [];

for (let i of input) {
  numArray.push(i.split(" ").map((x) => parseInt(x)));
}

numArray.pop();

numArray = numArray.map((x) => x[0] + x[1]);

for (let num of numArray) {
  console.log(num);
}
