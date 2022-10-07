function solution(arr) {
  let min = arr[0];
  for (let index of arr) {
    if (index < min) {
      min = index;
    }
  }
  const ret = arr.splice(arr.indexOf(min), 1);
  const answer = !arr.length ? [-1] : arr;
  return answer;
}