function solution(n) {
  const array = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return parseInt(array);
}
