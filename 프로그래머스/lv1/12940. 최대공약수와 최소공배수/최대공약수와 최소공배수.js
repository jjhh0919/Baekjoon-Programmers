function solution(n, m) {
  let answer1 = 1;
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      answer1 = i;
    }
  }
  let answer2 = answer1 * (n / answer1) * (m / answer1);
  return [answer1, answer2];
}
