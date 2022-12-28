function solution(n) {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    if (!(i % 2)) {
      num += i;
    }
  }
  return num;
}