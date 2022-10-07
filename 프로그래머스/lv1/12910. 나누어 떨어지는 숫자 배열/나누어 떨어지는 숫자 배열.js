function solution(arr, divisor) {
  const array = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  if (!array.length) {
    return [-1];
  } else {
    return array;
  }
}
