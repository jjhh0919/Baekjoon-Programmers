function solution(numbers, direction) {
  let shiftIndex = 0;
  let popIndex = 0;

  if (direction === "left") {
    shiftIndex = numbers.shift();
    numbers.push(shiftIndex);
  } else {
    popIndex = numbers.pop();
    numbers.unshift(popIndex);
  }

  return numbers;
}