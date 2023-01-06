function solution(n, numlist) {
  const array = [];

  for (let i of numlist) {
    if (!(i % n)) {
      array.push(i);
    }
  }

  return array;
}