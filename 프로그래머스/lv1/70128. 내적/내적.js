function solution(a, b) {
  const answer = Array(a.length)
    .fill()
    .map((v, i) => a[i] * b[i])
    .reduce((a, b) => a + b);
  return answer;
}