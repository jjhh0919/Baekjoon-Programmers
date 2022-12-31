function solution(box, n) {
  const floorSolution = (num) => {
    return Math.floor(num / n);
  };
  const [x, y, z] = box;

  return floorSolution(x) * floorSolution(y) * floorSolution(z);
}