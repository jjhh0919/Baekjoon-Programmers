function solution(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      array.push(arr[i]);
    } else {
      if (arr[i] !== arr[i - 1]) {
        array.push(arr[i]);
      }
    }
  }

  return array;
}