function solution(s, n) {
  const array = [];
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    array.push(s[i] === " " ? " " : s.charCodeAt(i));
  }
  answer = array
    .map((v) => {
      let ret = v + n;

      if (v === " ") {
        return " ";
      }
      if (
        (v >= 65 && v <= 90 && ret > 90) ||
        (v >= 97 && v <= 122 && ret > 122)
      ) {
        return String.fromCharCode(ret - 26);
      } else {
        return String.fromCharCode(ret);
      }
    })
    .join("");
  return answer;
}

