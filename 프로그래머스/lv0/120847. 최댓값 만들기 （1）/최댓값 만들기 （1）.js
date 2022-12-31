function solution(numbers) {
  const array = numbers.sort((a, b) => a - b);
  return array[array.length - 1] * array[array.length - 2];
}