const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const x = parseInt(input[0]);
const y = parseInt(input[1]);
const w = parseInt(input[2]);
const h = parseInt(input[3]);

/*
x가 y보다 벽에 더 가까우면서 왼쪽 벽에 더 가까울 때 길이 : x
x가 y보다 벽에 더 가까우면서 오른쪽 벽에 더 가까울 때 길이 : w-x
y가 x보다 벽에 더 가까우면서 아래쪽 벽에 더 가까울 때 길이 : y
y가 x보다 벽에 더 가까우면서 위쪽 벽에 더 가까울 때 길이 : h-y
*/
const shortest = [x, w-x, y, h-y];
console.log(Math.min(...shortest));