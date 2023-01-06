function solution(my_string) {
  const array = my_string.split(" ");
  let answer = parseInt(array[0]);

  for (let i = 0; i < array.length - 2; i += 2) {
    if (array[i + 1] === "+") {
      answer += parseInt(array[i + 2]);
    } else {
      answer -= parseInt(array[i + 2]);
    }
  }

  return answer;
}