function solution(polynomial) {
  const array = polynomial.split(" + ");
  const linear = [];
  const number = [];
  let answer = "";

  array.forEach((v) => {
    const replaceV = v.replace("x", "");
    if (!v.includes("x")) {
      number.push(parseInt(v));
    } else {
      replaceV !== "" ? linear.push(parseInt(replaceV)) : linear.push(1);
    }
  });

  let linearValue = 0;
  let numberValue = 0;

  linear.forEach((v) => {
    linearValue += v;
  });
  number.forEach((v) => {
    numberValue += v;
  });

  if (number.length === 0) {
    answer = `${linearValue !== 1 ? linearValue : ""}x`;
  } else if (linear.length === 0) {
    answer = `${numberValue}`;
  } else {
    answer = `${linearValue !== 1 ? linearValue : ""}x + ${numberValue}`;
  }

  return answer;
}