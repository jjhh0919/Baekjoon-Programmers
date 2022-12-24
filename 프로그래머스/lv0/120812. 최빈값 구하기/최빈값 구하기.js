function solution(array) {
  const answer = [];

  const map = new Map();

  for (let i = 0; i <= Math.max(...array); i++) {
    map.set(i, 0);
  }

  array.forEach((v) => {
    map.get(v) ? map.set(v, map.get(v) + 1) : map.set(v, 1);
  });

  for (let [key, value] of map) {
    answer.push([key, value]);
  }

  answer.sort((a, b) => b[1] - a[1]);

  return answer[0][1] === answer[1][1] ? -1 : answer[0][0];
}