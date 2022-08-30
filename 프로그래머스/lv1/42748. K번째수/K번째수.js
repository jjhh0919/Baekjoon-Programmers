function solution(array, commands) {
  const answer = [];
  for (let com of commands) {
    let sliceArray = array.slice(com[0] - 1, com[1]);
    sliceArray.sort((a, b) => a - b);
    answer.push(sliceArray[com[2] - 1]);
  }
  return answer;
}