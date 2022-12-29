function solution(emergency) {
  const answer = [];
  const sorted = [...emergency].sort((a, b) => b - a);
  for (let i of emergency) {
    answer.push(sorted.indexOf(i) + 1);
  }
  return answer;
}