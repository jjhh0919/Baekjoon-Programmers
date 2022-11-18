function solution(n) {
  const array = [];
  let answer = 0;
    
  while (true) {
    if (n === 0 ) break;
    array.push(n % 3);
    n = Math.floor(n / 3);
  }
    
  for (let i = 0; i < array.length; i++) {
    answer += array[i] * 3 ** (array.length -i -1);
  }
    
  return answer;
}