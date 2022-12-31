function solution(n) {
  const array = [];
  let answer = 0;

  const factorial = (num) => {
    if (num === 1) {
      return 1;
    }
    return num * factorial(num - 1);
  };

  for (let i = 1; i <= 10; i++) {
    array.push(factorial(i));
  }

  for (let index of array) {
    if (index <= n) {
      answer = array.indexOf(index) + 1;
    }
  }
    
  return answer;
}