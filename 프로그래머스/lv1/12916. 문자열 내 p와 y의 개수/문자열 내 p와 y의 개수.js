function solution(s) {
  let p = 0;
  let y = 0;
  s = s.toLowerCase();
  for (let index of s) {
    if (index === "p") {
      p++;
    } else if (index === "y") {
      y++;
    }
  }
  return p === y ? true : false;
}
