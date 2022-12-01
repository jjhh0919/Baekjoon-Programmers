function solution(sizes) {
  sortedSizes = sizes.map((v) => v.sort((a, b) => a - b));
  let maxWidth = 0;
  let maxHeight = 0;

  for (let array of sortedSizes) {
    if (maxWidth <= array[0]) {
      maxWidth = array[0];
    }
    if (maxHeight <= array[1]) {
      maxHeight = array[1];
    }
  }
  return maxWidth * maxHeight;
}