function solution(n) {
  const array = [];
  let number = 2;
    
  while (n > 1) {
    if (!(n % number)) {
      array.push(number);
      n /= number;
    } else {
      number += 1;
    }
  }

  const set = new Set(array);

  return [...set];
}