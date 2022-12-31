function solution(numbers, k) {
  let number = 2 * k - 2;
  while (numbers.length < number) {
    number -= numbers.length;
  }
  return numbers[number];
}