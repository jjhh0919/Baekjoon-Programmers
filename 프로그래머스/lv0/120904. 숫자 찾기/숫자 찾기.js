function solution(num, k) {
  const array = num
    .toString()
    .split("")
    .map((v) => parseInt(v));
  let answer = array.indexOf(k);

  return answer !== -1 ? (answer += 1) : -1;
}