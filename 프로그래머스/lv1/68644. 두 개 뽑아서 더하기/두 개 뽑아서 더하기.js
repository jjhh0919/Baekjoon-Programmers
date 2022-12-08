function solution(numbers) {
  const array = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        array.push(numbers[i] + numbers[j]);
      }
    }
  }
  return array.filter((v, i) => array.indexOf(v) === i).sort((a, b) => a - b);
}
