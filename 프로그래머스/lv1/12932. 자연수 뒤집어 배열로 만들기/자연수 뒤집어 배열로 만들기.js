function solution(n) {
  const answer = n
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reverse();

  return answer;
}

