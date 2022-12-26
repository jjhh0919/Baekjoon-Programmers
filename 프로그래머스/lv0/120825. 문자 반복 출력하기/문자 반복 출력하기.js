function solution(my_string, n) {
  let answer = "";
  const array = my_string.split("");
  array.forEach((v) => {
    answer += v.repeat(n);
  });
  return answer;
}