function solution(numbers) {
  numbers.sort((a, b) => a - b);

  const positive = numbers[numbers.length - 2] * numbers[numbers.length - 1];
  const negative = numbers[0] * numbers[1];

  return Math.max(positive, negative);
}