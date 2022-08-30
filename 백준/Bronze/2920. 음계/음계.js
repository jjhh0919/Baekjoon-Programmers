const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const asc = 12345678;
const des = 87654321;

let num = "";
for (let i of input) {
  num += i;
}

if (num == asc) {
  console.log("ascending");
} else if (num == des) {
  console.log("descending");
} else {
  console.log("mixed");
}
