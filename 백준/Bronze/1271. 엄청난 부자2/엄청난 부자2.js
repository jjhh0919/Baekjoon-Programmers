const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const money = BigInt(input[0]);
const number = BigInt(input[1]);

const divMoney = money / number;
const remain = money % number;

console.log(`${divMoney}\n${remain}`);
