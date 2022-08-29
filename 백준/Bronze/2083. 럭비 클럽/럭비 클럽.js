const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const students = [];
for (let i = 0; i < input.length - 1; i++) {
  students.push(input[i].split(" "));
}

for (let student of students) {
  if (parseInt(student[1]) > 17 || parseInt(student[2]) >= 80) {
    console.log(`${student[0]} Senior`);
  } else {
    console.log(`${student[0]} Junior`);
  }
}