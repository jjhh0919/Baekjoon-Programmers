const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase()
  .split("");

const alphabetCount = Array(26).fill(0);

for (let index of input) {
  alphabetCount[index.charCodeAt() - 65]++;
}
let max = 0;
for (let alphabet of alphabetCount) {
  if (parseInt(alphabet) > max) {
    max = parseInt(alphabet);
  }
}

const check = (num) => {
  if (!(alphabetCount.indexOf(num) === alphabetCount.lastIndexOf(num))) {
    return "?";
  } else {
    return String.fromCharCode(alphabetCount.indexOf(num) + 65);
  }
};
console.log(check(max));
