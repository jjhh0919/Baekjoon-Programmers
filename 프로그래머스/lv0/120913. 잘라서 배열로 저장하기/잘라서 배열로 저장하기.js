function solution(my_str, n) {
  const array = [];
  const strArray = my_str.split("");
  while (strArray.length > 0) array.push(strArray.splice(0, n).join(""));

  return array;
}