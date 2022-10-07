function solution(s) {
  const number = Math.floor(s.length / 2);
  const answer =
    s.length % 2
      ? s.slice(number, number + 1)
      : s.slice(number - 1, number + 1);
  return answer;
}
