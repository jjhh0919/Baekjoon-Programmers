const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map((x) => parseInt(x));

const [hour, minute] = input;
const afterMinute = minute - 45;
let time = "";

if (!hour && afterMinute < 0) {
  time = `23 ${afterMinute + 60}`;
} else {
  if (afterMinute >= 0) {
    time = `${hour} ${afterMinute}`;
  } else {
    time = `${hour - 1} ${afterMinute + 60}`;
  }
}

console.log(time);
