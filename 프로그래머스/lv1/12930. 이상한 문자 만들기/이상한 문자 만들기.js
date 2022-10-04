function solution(s) {
  const array = s.split(" ");
  const answer = [];
  for (let index of array) {
    indexArray = index.split("");
    index = indexArray
      .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
      .join("");
    answer.push(index);
  }
  return answer.join(" ");
}
