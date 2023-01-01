function solution(my_string) {
  const aeiou = ["a", "e", "i", "o", "u"];
  const array = my_string.split("");

  return array.map((v) => (aeiou.includes(v) ? "" : v)).join("");
}