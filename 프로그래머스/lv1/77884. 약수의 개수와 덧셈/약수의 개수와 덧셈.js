function solution(left, right) {
  let answer = 0;
  const array = Array(right - left + 1)
    .fill()
    .map((v, i) => i + left);
  array.forEach((v) => {
    if (Number.isInteger(Math.sqrt(v))) {
      answer -= v;
    } else {
      answer += v;
    }
  });
  return answer;
}