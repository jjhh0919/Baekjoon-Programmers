function solution(cipher, code) {
  const answer = [];

  for (let i = 0; i < cipher.length; i++) {
    if (!((i + 1) % code)) {
      answer.push(cipher[i]);
    }
  }
  return answer.join("");
}