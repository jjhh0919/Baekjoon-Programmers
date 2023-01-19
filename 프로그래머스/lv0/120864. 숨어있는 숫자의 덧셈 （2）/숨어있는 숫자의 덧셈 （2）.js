function solution(my_string) {
  let number = 0;

  for (let i = 0; i < my_string.length; i++) {
    let temp = 0;
    while (!Number.isNaN(parseInt(my_string[i]))) {
      temp += my_string[i];
      i++;
    }
    number += parseInt(temp);
  }

  return number;
}