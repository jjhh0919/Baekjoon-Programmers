function solution(order) {
  const str = order.toString();
  let answer = 0;

  for (let i of str) {
    if (parseInt(i) !== 0 && !(parseInt(i) % 3)) {
      answer += 1;
    }
  }

  return answer;
}