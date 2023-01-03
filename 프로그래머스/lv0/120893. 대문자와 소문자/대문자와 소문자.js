function solution(my_string) {
  const array = my_string.split("");
  const answer = array.map((v) => {
    let ascii = v.charCodeAt(0);
    ascii >= 65 && ascii <= 90 ? (ascii += 32) : (ascii -= 32);
    return String.fromCharCode(ascii);
  });

  return answer.join("");
}