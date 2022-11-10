function solution(denum1, num1, denum2, num2) {
  const answer_denum = denum1 * num2 + denum2 * num1;
  const answer_num = num1 * num2;

  let num = 1;
  for (let i = 1; i <= Math.max(answer_denum, answer_num); i++) {
    if (!(answer_denum % i) && !(answer_num % i)) {
      num = i;
    }
  }
  return [answer_denum, answer_num].map((v) => v / num);
}