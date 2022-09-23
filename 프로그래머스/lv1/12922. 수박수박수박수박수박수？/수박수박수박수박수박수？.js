function solution(n) {
  let answer = "";
  const pattern = ["수", "박"];
  for (let i = 1; i <= n; i++) {
    i % 2 ? (answer += pattern[0]) : (answer += pattern[1]);
  }
  return answer;
}
