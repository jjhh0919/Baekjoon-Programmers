function solution(balls, share) {
  const factorial = (v) => {
    let number = BigInt(1);

    for (let i = v; i >= 1; i--) {
      number *= BigInt(i);
    }

    return number;
  };

  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
