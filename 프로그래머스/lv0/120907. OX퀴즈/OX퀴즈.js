function solution(quiz) {
  return quiz.map((v) => {
    const array = v.split(" ");
    const calc =
      array[1] === "+"
        ? parseInt(array[0]) + parseInt(array[2])
        : parseInt(array[0]) - parseInt(array[2]);

    return calc === parseInt(array[4]) ? "O" : "X";
  });
}