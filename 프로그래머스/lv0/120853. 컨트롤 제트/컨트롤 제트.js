function solution(s) {
  const array = s.split(" ");
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "Z") {
      sum += parseInt(array[i]);
    } else {
      sum -= parseInt(array[i - 1]);
    }
  }

  return sum;
}