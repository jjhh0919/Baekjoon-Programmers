function solution(s) {
  const answer = [];
  const obj = {};
  const array = s.split("");

  array.forEach((v) => (obj[v] ? (obj[v] += 1) : (obj[v] = 1)));

  for (let [key, value] of Object.entries(obj)) {
    if (parseInt(value) === 1) {
      answer.push(key);
    }
  }

  return answer.sort().join("");
}