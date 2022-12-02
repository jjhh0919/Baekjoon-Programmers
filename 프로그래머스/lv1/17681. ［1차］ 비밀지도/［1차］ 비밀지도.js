const fn = (n, arr, arr_bin) => {
  for (let i of arr) {
    let x = "";
    let index = i.toString(2);
    while (index.length !== n) {
      index = "0" + index;
    }
    arr_bin.push(index);
  }
};

function solution(n, arr1, arr2) {
  const answer = [];
  const arr1_bin = [];
  const arr2_bin = [];

  fn(n, arr1, arr1_bin);
  fn(n, arr2, arr2_bin);

  for (let i = 0; i < n; i++) {
    let index = "";
    for (let j = 0; j < n; j++) {
      parseInt(arr1_bin[i][j]) === 0 && parseInt(arr2_bin[i][j]) === 0
        ? (index += " ")
        : (index += "#");
    }
    answer.push(index);
    index = "";
  }
  return answer;
}