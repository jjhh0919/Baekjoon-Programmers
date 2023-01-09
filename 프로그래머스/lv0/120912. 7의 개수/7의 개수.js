function solution(array) {
  let answer = 0;
  const joinArray = array.join("").toString();

  for (let i of joinArray) {
    if (parseInt(i) === 7) {
      answer += 1;
    }
  }

  return answer;
}