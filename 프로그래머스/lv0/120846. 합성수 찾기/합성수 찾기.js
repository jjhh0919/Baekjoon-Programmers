function solution(n) {
  let answer = 0;
  let isCom = false;

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (!(i % j)) {
        isCom = true;
      }
    }
      
    if (isCom) {
      answer += 1;
      isCom = false;
    }
  }
    
  return answer;
}