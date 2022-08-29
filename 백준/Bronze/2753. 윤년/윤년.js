const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = parseInt(input);
const year = (num) => {
  if ((!(num % 4) && num % 100) || !(num % 400)) {
    return 1;
  } else {
    return 0;
  }
};

console.log(year(num));
