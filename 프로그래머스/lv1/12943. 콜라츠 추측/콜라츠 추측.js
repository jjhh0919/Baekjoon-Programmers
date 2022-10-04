function solution(num) {
  let tries = 0;
  while (true) {
    if (num === 1) return tries > 500 ? -1 : tries;
    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num = num / 2;
    }
    tries++;
  }
}
