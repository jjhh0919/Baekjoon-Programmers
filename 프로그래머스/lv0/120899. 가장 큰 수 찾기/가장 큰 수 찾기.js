function solution(array) {
  const index = Math.max(...array);
  return [index, array.indexOf(index)];
}