function solution(array, n) {
  array.sort((a, b) => a - b);
  const answer = [array[0], Math.abs(array[0] - n)];

  array.forEach((v) => {
    if (Math.abs(v - n) < answer[1]) {
      answer[0] = v;
      answer[1] = Math.abs(v - n);
    }
  });

  return answer[0];
}