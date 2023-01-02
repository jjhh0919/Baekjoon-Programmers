function solution(strlist) {
  const array = [];

  strlist.forEach((v) => {
    array.push(v.length);
  });

  return array;
}