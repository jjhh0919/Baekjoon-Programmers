function solution(dots) {
  const width = [];
  const height = [];

  dots.forEach((v) => {
    if (!width.includes(v[0])) {
      width.push(v[0]);
    }

    if (!height.includes(v[1])) {
      height.push(v[1]);
    }
  });

  return Math.abs(width[0] - width[1]) * Math.abs(height[0] - height[1]);
}