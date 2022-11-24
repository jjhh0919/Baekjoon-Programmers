function solution(d, budget) {
  d.sort((a, b) => a - b);
  let sum = 0;
  let answer = 0;
  if (d.length === 1 && d[0] <= budget) {
    answer = 1;
  } else {
    for (let i = 0; i < d.length; i++) {
      sum += d[i];
      if (sum === budget) {
        answer = i + 1;
        break;
      } else if (sum > budget) {
        answer = i;
        break;
      } else {
        answer = i + 1;
      }
    }
  }
  return answer;
}