function solution(s) {
  const answer = s.split("").sort().reverse();
  return answer.join("");
}
