function solution(my_string, num1, num2) {
  const array = my_string.split("");
  const temp = [array[num1], array[num2]];

  array[num1] = temp[1];
  array[num2] = temp[0];

  return array.join("");
}