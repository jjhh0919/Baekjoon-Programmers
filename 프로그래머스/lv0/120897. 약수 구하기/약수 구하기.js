function solution(n) {
  const array = [];

  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      array.push(i);
    }
  }

  return array.sort((a, b) => a - b);
}