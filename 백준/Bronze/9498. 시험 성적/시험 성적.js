const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = parseInt(input);

const grade = (number) => {
  if (number <= 100 && number >= 90) {
    return "A";
  } else if (number <= 89 && number >= 80) {
    return "B";
  } else if (number <= 79 && number >= 70) {
    return "C";
  } else if (number <= 69 && number >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log(grade(number));

