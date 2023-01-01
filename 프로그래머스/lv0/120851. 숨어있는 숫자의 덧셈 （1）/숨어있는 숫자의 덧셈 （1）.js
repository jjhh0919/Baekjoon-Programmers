function solution(my_string) {
  const numbers = Array(9)
    .fill(0)
    .map((v, i) => i + 1);
  const array = my_string.split("");
  const filterArray = array.filter((v) => numbers.includes(parseInt(v)));
  const numberArray = filterArray.map((v) => parseInt(v));

  return numberArray.reduce((a, b) => a + b);
}