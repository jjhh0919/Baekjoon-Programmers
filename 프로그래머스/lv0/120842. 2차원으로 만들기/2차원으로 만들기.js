function solution(num_list, n) {
  const array = [];

  while (num_list.length) {
    array.push(num_list.splice(0, n));
  }

  return array;
}