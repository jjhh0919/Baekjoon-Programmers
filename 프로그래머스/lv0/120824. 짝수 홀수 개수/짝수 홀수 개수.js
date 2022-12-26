function solution(num_list) {
  const array = [0, 0];
  num_list.forEach((v) => {
    v % 2 ? (array[1] += 1) : (array[0] += 1);
  });
  return array;
}