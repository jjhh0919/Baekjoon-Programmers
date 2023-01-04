function solution(numbers) {
  const numString = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i of numString) {
    numbers = numbers.split(i).join(numString.indexOf(i));
  }

  return parseInt(numbers);
}