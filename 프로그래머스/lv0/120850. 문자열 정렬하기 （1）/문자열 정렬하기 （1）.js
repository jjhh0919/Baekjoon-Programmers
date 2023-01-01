function solution(my_string) {
  const numbers = Array(10)
    .fill(0)
    .map((v, i) => i);
  const array = my_string.split("");
  const filterArray = array.filter((v) => numbers.includes(parseInt(v)));
  const numberArray = filterArray.map((v) => parseInt(v));
  return numberArray.sort((a, b) => a - b);
}