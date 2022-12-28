function solution(n, k) {
  const num1 = n * 12000;
  const num2 = k * 2000;
  const num3 = Math.floor(n / 10) * 2000;
  return num1 + num2 - num3;
}