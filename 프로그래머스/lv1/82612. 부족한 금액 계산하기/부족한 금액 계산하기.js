function solution(price, money, count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }
  const answer = total - money > 0 ? total - money : 0;
  return answer;
}
